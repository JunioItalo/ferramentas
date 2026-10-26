const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
export function setupExperience(){
  const status=document.querySelector('#saveStatus');
  document.addEventListener('editor:save',({detail})=>{
    status.dataset.state=detail;
    status.textContent={pending:'Salvando…',saved:'Salvo neste navegador',error:'Não foi possível salvar'}[detail];
    status.title=detail==='error'?'O armazenamento pode estar cheio ou indisponível. Exporte seu trabalho antes de fechar.':'Suas edições ficam neste dispositivo.';
  });
  const dialog=document.querySelector('#commandDialog'), input=document.querySelector('#commandInput'), results=document.querySelector('#commandResults');
  let entries=[], matches=[], selected=0, previousFocus=null;
  function catalog(){
    const items=[];
    const add=(label,section,target,keywords='')=>{if(label&&target)items.push({label,section,target,terms:normalize(label+' '+section+' '+keywords)})};
    document.querySelectorAll('.ribbon-body>.sec').forEach(sec=>{
      const section=sec.querySelector('summary').textContent.replace('▾','').trim();
      add(section,'Ajustes',sec);
      sec.querySelectorAll('.ctl,.rg').forEach(el=>{
        const label=el.querySelector('.lab,.rgh')?.textContent.trim();
        add(label,section,el,el.querySelector('.seg')?.textContent||'');
      });
    });
    [['Prévia do relatório','#stageLeft'],['Exportar PNG, SVG ou tema JSON','#exportBox'],['Baixar projeto Power BI (.pbip)','#pbipBox'],['Explorar molduras e paletas','#gallery'],['Posições dos elementos','#zonesBox'],['Paleta em uso','#palBox'],['Cores do tema Power BI','#slotsBox'],['Edições salvas','#clearBox']].forEach(([name,selector])=>add(name,'Editor',document.querySelector(selector)));
    return items;
  }
  function highlight(){
    [...results.children].forEach((el,i)=>el.setAttribute('aria-selected',String(i===selected)));
    const el=results.children[selected];
    if(el?.getAttribute('role')==='option'){
      input.setAttribute('aria-activedescendant',el.id);el.scrollIntoView({block:'nearest'});
    }else input.removeAttribute('aria-activedescendant');
  }
  function render(){
    const query=normalize(input.value.trim());
    matches=entries.filter(item=>query.split(/\s+/).every(term=>item.terms.includes(term))).slice(0,12);
    selected=0;results.replaceChildren();
    matches.forEach((item,i)=>{
      const button=document.createElement('button');button.type='button';button.className='command-result';button.id='commandResult'+i;button.tabIndex=-1;button.setAttribute('role','option');
      const label=document.createElement('span');label.textContent=item.label;
      const category=document.createElement('small');category.textContent=item.section;
      button.append(label,category);button.addEventListener('click',()=>activate(i));results.append(button);
    });
    if(!matches.length){const empty=document.createElement('p');empty.className='command-empty';empty.textContent='Nenhum ajuste encontrado. Tente “cor”, “página” ou “fonte”.';results.append(empty)}
    highlight();
  }
  function activate(i){
    const item=matches[i];if(!item)return;
    dialog.close();
    const el=item.target;
    document.querySelector('#pvMin:not([hidden])')?.click();
    if(el.closest('.side')){
      document.querySelector('.side').scrollIntoView({block:'start',behavior:'instant'});
      window.ribbonReveal?.(el);
    }else{
      for(let p=el;p;p=p.parentElement)if(p.tagName==='DETAILS')p.open=true;
      el.scrollIntoView({block:'center',behavior:'smooth'});
    }
    requestAnimationFrame(()=>{
      const control=el.matches('details')?el.querySelector('summary'):el.querySelector('input:not([type="hidden"]),select,button');
      (control||el).focus({preventScroll:true});
      el.classList.add('search-highlight');setTimeout(()=>el.classList.remove('search-highlight'),1500);
    });
  }
  function open(){
    if(dialog.open)return;
    previousFocus=document.activeElement;
    entries=catalog();input.value='';dialog.showModal();render();input.focus();
  }
  document.querySelector('#searchOpen').addEventListener('click',open);
  document.querySelector('#commandClose').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>previousFocus?.focus({preventScroll:true}));
  dialog.addEventListener('click',e=>{e.stopPropagation();if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
  input.addEventListener('input',render);
  dialog.addEventListener('keydown',e=>{
    e.stopPropagation();
    if(e.key==='Escape'){e.preventDefault();dialog.close()}
    if(e.key==='ArrowDown'||e.key==='ArrowUp'){
      e.preventDefault();if(!matches.length)return;
      selected=(selected+(e.key==='ArrowDown'?1:-1)+matches.length)%matches.length;highlight();
    }
    if(e.key==='Enter'){e.preventDefault();activate(selected)}
  });
  document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();open()}});
  if(/Mac|iPhone|iPad/.test(navigator.platform))document.querySelector('#searchOpen kbd').textContent='⌘ K';
  // Keep keyboard focus inside the existing dialogs and restore it on close.
  document.querySelectorAll('.modal').forEach(modal=>{
    let returnFocus=null, lastOutside=document.activeElement;
    document.addEventListener('focusin',e=>{if(!modal.contains(e.target))lastOutside=e.target});
    const observer=new MutationObserver(()=>{
      if(modal.classList.contains('open'))returnFocus=returnFocus||lastOutside;
      else{if(returnFocus&&!modal.contains(returnFocus))returnFocus.focus({preventScroll:true});returnFocus=null}
    });
    observer.observe(modal,{attributes:true,attributeFilter:['class']});
    modal.addEventListener('keydown',e=>{
      if(e.key==='Escape'){e.stopPropagation();modal.classList.remove('open');return}
      if(e.key!=='Tab')return;
      const focusable=[...modal.querySelectorAll('button,input,select,a[href]')].filter(el=>!el.disabled&&el.getClientRects().length);
      const first=focusable[0],last=focusable.at(-1);
      if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}
      else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}
    });
  });
}
