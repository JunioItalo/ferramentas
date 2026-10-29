import { EXTRA_ICONS } from './extra-icons.js';
import { setupExperience } from './experience.js';
/* ============ palettes ============ */
const NOTE='Paleta pensada para equilibrar contraste, identidade visual e leitura dos dados.';
const STD=['Visão geral','Vendas','Clientes','Produtos','Regiões'];
const PALS=[
 {id:'finance',g:'industry',name:'Finanças / Bancos',tag:'Prioriza confiança',seq:['#e7f0fa','#b3d0f0','#6aa7e0','#1f6fc4','#0f3d70'],div:['#c8661e','#e8b48a','#eef1f5','#8fbbe8','#0f6cbd'],pages:['Visão geral','Liquidez','Risco de crédito','Filiais','Clientes']},
 {id:'health',g:'industry',name:'Saúde / Ciências da vida',tag:'Calmo e clínico',seq:['#e3f3f6','#a8dbe3','#5bb8c9','#0e8aa0','#0a5566'],div:['#c8661e','#e8b48a','#eef2f3','#9fd3dd','#0e8aa0'],pages:['Visão geral','Internações','Tempo de espera','Reinternações','Equipe']},
 {id:'saas',g:'industry',name:'Tecnologia / SaaS / B2B',tag:'Foco na marca',seq:['#eeedfe','#c6c2fb','#9b93f7','#635bff','#33299e'],div:['#d0782a','#ecbd92','#f0eff5','#b3acf7','#635bff'],pages:['Visão geral','Receita recorrente','Cancelamentos','Coortes','Funil']},
 {id:'retail',g:'industry',name:'Varejo / Comércio eletrônico',tag:'Acolhedor e vibrante',seq:['#fff1e5','#ffd0a8','#ff9f5a','#e8700f','#8a3d00'],div:['#5b4bb3','#b3a9de','#f2efe8','#9ccbe0','#1f7fa6'],pages:['Visão geral','Vendas','Cesta média','Estoque','Promoções']},
 {id:'gov',g:'industry',name:'Governo / Setor público',tag:'Acessível por padrão',seq:['#e9f1f8','#b7d4ec','#6fa8d8','#1d70b8','#0b4a7d'],div:['#c8661e','#e8b48a','#f0f2f2','#8fbfe0','#1d70b8'],pages:['Visão geral','Solicitações','Tempo de resposta','Orçamento','Regiões']},
 {id:'energy',g:'industry',name:'Energia / Sustentabilidade',tag:'Confiança conquistada',seq:['#e6f2f6','#acd4e2','#66adc8','#1f7a99','#0f4a5f'],div:['#b8621b','#e2b18a','#eef0ee','#a6cddb','#1f7a99'],pages:['Visão geral','Geração','Emissões','Ativos','Indisponibilidades']},
 {id:'nonprofit',g:'industry',name:'Organizações sem fins lucrativos',tag:'Acolhedor e confiável',seq:['#e6f6fb','#a9e2f2','#5cc4e8','#1cabe2','#0c5f80'],div:['#c66f2f','#e8bd97','#eef3f5','#9cd7ef','#1cabe2'],pages:['Visão geral','Doadores','Programas','Subsídios','Resultados']},
 {id:'luxury',g:'industry',name:'Luxo / Moda',tag:'Elegância com sobriedade',seq:['#f6f0e8','#e3d0b8','#c9a577','#a8712f','#5e3d15'],div:['#5f5a7a','#b4aec8','#f2efec','#dcbb8f','#a8712f'],pages:['Visão geral','Coleções','Clientes','Lojas','Giro de vendas']},
 {id:'hospitality',g:'industry',name:'Hotelaria / Turismo',tag:'Acolhimento inspirador',seq:['#f5eef7','#dcc3e3','#b98ac6','#8a4fa0','#512a60'],div:['#d9822b','#efc08f','#f2f0ef','#9ec9d4','#2d7f92'],pages:['Visão geral','Ocupação','Receita por quarto disponível','Reservas','Avaliações']},
 {id:'media',g:'industry',name:'Mídia / Streaming',tag:'Pensado para modo escuro',dark:true,seq:['#3a1d06','#6b3510','#b85a14','#ff8a1f','#ffc48a'],div:['#6f8cff','#3f55a8','#3b3b3b','#ffb066','#ff8a1f'],pages:['Visão geral','Transmissões','Tempo assistido','Títulos','Assinantes']},
 {id:'auto',g:'industry',name:'Automotivo / Mobilidade',tag:'Precisão técnica',seq:['#e6eff7','#b0cde6','#6ba2cc','#0066b1','#00365e'],div:['#c8661e','#e8b48a','#eceef0','#8fb9d8','#0066b1'],pages:['Visão geral','Produção','Qualidade','Concessionárias','Frota']},
 {id:'qsr',g:'industry',name:'Alimentos / Restaurantes',tag:'Apelo visual',seq:['#fff8e0','#ffe9a8','#ffd463','#ffc72c','#8a6410'],div:['#6a4c9c','#b7a6d6','#f5f2ea','#ffdf8f','#c99700'],pages:['Visão geral','Vendas','Velocidade do atendimento','Mix de produtos','Equipe']},
 {id:'edu',g:'industry',name:'Educação / EdTech',tag:'Sem julgamentos',seq:['#e8f0fe','#b3ccf7','#6b96ec','#0056d2','#002c73'],div:['#c96a1f','#e8b489','#eef1f5','#93b8ee','#0056d2'],pages:['Visão geral','Matrículas','Presença','Avaliações','Conclusão']},
 {id:'prof',g:'industry',name:'Serviços profissionais',tag:'Confiável e discreto',seq:['#eceff8','#c3cce8','#8a9bd1','#3f5aa8','#23336a'],div:['#b5651d','#dcae85','#f0f1f4','#a9b7e0','#3f5aa8'],pages:['Visão geral','Utilização','Faturamento','Funil','Clientes']},
 {id:'telecom',g:'industry',name:'Telecomunicações',tag:'Marca de alta visibilidade',seq:['#e6f1fc','#aed3f5','#5eaaeb','#0a74da','#054282'],div:['#e0782a','#f0bd92','#f1f0f2','#93c4dd','#0a74da'],pages:['Visão geral','Assinantes','Receita média por usuário','Cancelamentos','Rede']},
 {id:'crypto',g:'industry',name:'Criptoativos / Negociação',tag:'Escuro, rápido e denso',dark:true,seq:['#0a1f52','#123a99','#1f5ce0','#0052ff','#8ab0ff'],div:['#e08a3c','#9c5f2e','#2a2e39','#4f8fe0','#8ab0ff'],pages:['Visão geral','Volume','Posições','Liquidez','Risco']},
 {id:'gaming',g:'industry',name:'Jogos',tag:'Vibrante e expressivo',dark:true,seq:['#2b1252','#4a1f8f','#7130d1','#9146ff','#c9a3ff'],div:['#e08a3c','#9c5f2e','#35323d','#5f9ee0','#9146ff'],pages:['Visão geral','Jogadores diários','Retenção','Monetização','Eventos ao vivo']},
 {id:'realestate',g:'industry',name:'Imobiliário / PropTech',tag:'Foco em mapas',seq:['#e8f0ff','#b3cdff','#6b9aff','#006aff','#003a8c'],div:['#c8661e','#e8b48a','#eff1f4','#93b8f2','#006aff'],pages:['Visão geral','Imóveis','Preços','Dias no mercado','Mapa']},
 {id:'beauty',g:'industry',name:'Beleza / Cosméticos',tag:'Suave e tonal',seq:['#f5f1f8','#e0d4ea','#bfa6d3','#9b7bb8','#5c4474'],div:['#c9885a','#e6c2a6','#f4f2f0','#c9b8dc','#7a5c99'],pages:['Visão geral','Produtos','Canais','Avaliações','Fidelidade']},
 {id:'fancy',g:'mood',name:'Elegante / Sofisticado',tag:'Simplicidade',seq:['#f5f2ee','#ddd3c6','#b8a68f','#8a7355','#3d3125'],div:['#8a5f3d','#c9ab8f','#f0eeea','#a9b0bd','#4a5670'],pages:STD},
 {id:'trust',g:'mood',name:'Confiável / Institucional',tag:'Competente',seq:['#eaf0f7','#c0d3e8','#7fa3c9','#3d6a99','#183c5e'],div:['#b06a2e','#dcb08c','#eef0f2','#9ab7d1','#3d6a99'],pages:STD},
 {id:'energetic',g:'mood',name:'Enérgico / Jovem',tag:'Alto contraste',seq:['#fff0e6','#ffcba3','#ff9a52','#f2660a','#8f3800'],div:['#f2660a','#f7b183','#f4f4f5','#8fd0e8','#1690ba'],pages:STD},
 {id:'calm',g:'mood',name:'Calmo / Minimalista',tag:'Quase monocromático',seq:['#f2f4f3','#d7dedc','#adbab7','#7d8f8b','#485754'],div:['#a08267','#cdbaa8','#f0f1f0','#adbab7','#65807b'],pages:STD},
 {id:'warm',g:'mood',name:'Acolhedor / Humano',tag:'Natural',seq:['#faf0e8','#eccdb4','#d69f74','#b56f3d','#6b3d1c'],div:['#b56f3d','#ddac85','#f2efeb','#a8b4c4','#56657a'],pages:STD},
 {id:'bold',g:'mood',name:'Ousado / Inovador',tag:'Use com cuidado',seq:['#f0e9ff','#cdb5ff','#9a6bff','#6a1fe0','#35097a'],div:['#ff7a1a','#ffbb85','#1c1c1e','#7fd4e6','#0aa6c9'],pages:STD},
 {id:'playful',g:'mood',name:'Divertido / Acessível',tag:'Amigável',seq:['#fff6e0','#ffe2a3','#ffc75c','#f2a516','#8a5a00'],div:['#6a4c9c','#b7a6d6','#f5f3ef','#9fd3e6','#2a8fbf'],pages:STD},
 {id:'technical',g:'mood',name:'Técnico / Preciso',tag:'Escuro por padrão',dark:true,seq:['#1b2a4a','#1f4f73','#1f7f9a','#29a9c9','#9fe3f0'],div:['#ff9f43','#b86a2c','#2a2f38','#4a9ebf','#5fd0e9'],ui:['#12151a','#1c2028','#2b3340','#5a6472','#c3cad4'],pages:['Visão geral','Latência','Erros','Vazão','Incidentes']},
];
const COLOR_NAME={finance:'Azul-marinho',health:'Verde-azulado clínico',saas:'Violeta-índigo',retail:'Laranja-âmbar',gov:'Azul cívico',energy:'Azul-petróleo',nonprofit:'Ciano celeste',luxury:'Bronze',hospitality:'Ameixa crepuscular',media:'Laranja-brasa',auto:'Azul-aço',qsr:'Amarelo-mostarda',edu:'Azul-rei',prof:'Índigo-ardósia',telecom:'Azul-celeste',crypto:'Azul-elétrico',gaming:'Violeta-neon',realestate:'Azul-cobalto',beauty:'Lilás',fancy:'Cinza-amarronzado',trust:'Azul-jeans',energetic:'Tangerina',calm:'Verde-sálvia',warm:'Canela',bold:'Violeta-elétrico',playful:'Amarelo-girassol',technical:'Ciano noturno'};

/* ============ frames ============ */
const NAVS={
  wide:{name:'Barra lateral',desc:'Barra lateral com logotipo, páginas e ícones.'},
  slim:{name:'Barra lateral compacta',desc:'Barra estreita, com os nomes em tamanho menor.'},
  float:{name:'Barra lateral flutuante',desc:'Barra com cantos arredondados, separada da borda.'},
  floatslim:{name:'Barra flutuante compacta',desc:'Versão flutuante e estreita da barra lateral.'},
  rail:{name:'Trilho de ícones',desc:'Apenas ícones à esquerda, com pouco espaço.'},
  topside:{name:'Barra superior + trilho',desc:'Cabeçalho no topo e trilho de ícones à esquerda.'},
  top:{name:'Abas superiores',desc:'Páginas em abas no topo da tela.'},
  notch:{name:'Barra com encaixe',desc:'Aba ativa conectada ao painel de conteúdo.'},
  folder:{name:'Abas tipo pasta',desc:'Abas no topo, com a ativa unida ao conteúdo.'},
  filters:{name:'Painel de filtros',desc:'Navegação em cima e filtros empilhados embaixo.'},
  capsule:{name:'Trilho cápsula',desc:'Trilho fino flutuante com marcadores circulares.'},
  none:{name:'Sem navegação',desc:'Sem barra. Use os botões do menu inicial.'},
};
const MENUS={
  tiles:{name:'Blocos',desc:'Blocos com ícone para cada página.'},
  split:{name:'Painel dividido',desc:'Título à esquerda e lista de páginas à direita.'},
  cover:{name:'Capa com foto',desc:'Imagem em tela cheia com botões de página.'},
  story:{name:'História',desc:'Título grande, texto e lista numerada.'},
  banner:{name:'Faixa',desc:'Faixa de imagem no topo e blocos abaixo.'},
  panel:{name:'Painel com imagem',desc:'Imagem de um lado e lista de páginas do outro.'},
};
const NAV_THUMB={
  wide:'<rect class="f" x="1" y="1" width="9" height="21"/>',slim:'<rect class="f" x="1" y="1" width="6" height="21"/>',
  float:'<rect class="f" x="3" y="3" width="8" height="17" rx="1.5"/>',floatslim:'<rect class="f" x="3" y="3" width="5" height="17" rx="1.5"/>',
  rail:'<rect class="f" x="1" y="1" width="4" height="21"/>',topside:'<path class="f" d="M1 1h32v4H5v17H1z"/>',
  top:'<rect class="f" x="1" y="1" width="32" height="5"/>',notch:'<rect class="f" x="1" y="1" width="32" height="21" rx="2" opacity=".01"/><rect class="f" x="1" y="1" width="8" height="21"/><rect x="9" y="2.5" width="23" height="18" rx="2" fill="#fff" opacity=".9"/>',
  folder:'<rect class="f" x="1" y="1" width="32" height="7"/>',filters:'<rect class="f" x="2.5" y="2.5" width="9" height="18" rx="1.5"/>',
  capsule:'<rect class="f" x="2.5" y="2.5" width="4.5" height="18" rx="2.25"/>',none:'<rect class="f" x="4" y="4" width="12" height="2.5" rx="1.2"/>'
};
const MENU_THUMB={
  tiles:'<rect class="f" x="4" y="10" width="7" height="8" rx="1"/><rect class="f" x="13.5" y="10" width="7" height="8" rx="1"/><rect class="f" x="23" y="10" width="7" height="8" rx="1"/>',
  split:'<rect class="f" x="1" y="1" width="12" height="21"/>',
  cover:'<rect class="f" x=".5" y=".5" width="33" height="22" rx="2" opacity=".4"/>',
  story:'<rect class="f" x="17" y="1" width="16" height="21" opacity=".45"/>',
  banner:'<rect class="f" x="1" y="1" width="32" height="10" opacity=".45"/>',
  panel:'<rect class="f" x="1" y="1" width="16" height="21" opacity=".45"/>'
};
const KIND={kpi:'Cartão KPI',hero:'KPI em destaque',chart:'Gráfico',table:'Tabela',map:'Mapa',slicer:'Filtro',text:'Texto',nav:'Navegação',button:'Botão do menu',logo:'Logotipo',image:'Imagem do menu',link:'Link'};
const DEFW={wide:15.6,float:15.6,slim:10,floatslim:10,rail:5,topside:5,notch:14.4,filters:15.3,capsule:4.4};

/* ============ layouts ============ */
const r=(w,...c)=>({d:'r',w,c}), c=(w,...ch)=>({d:'c',w,c:ch}), k=(k,w=1)=>({k,w});
const PRESETS=[
 {id:'exec',name:'Visão executiva',tree:c(1,r(1,k('kpi'),k('kpi'),k('kpi'),k('kpi')),r(2.3,k('chart',2),k('chart',1)),r(2,k('table',1.4),k('chart',1)))},
 {id:'k43',name:'Faixa de KPIs + trio',tree:c(1,r(1,k('kpi'),k('kpi'),k('kpi'),k('kpi')),r(3.2,k('chart'),k('chart'),k('chart')))},
 {id:'hero',name:'Número em destaque',tree:c(1,r(2.2,k('hero',1),k('chart',2.6)),r(2,k('chart'),k('chart'),k('chart')))},
 {id:'g22',name:'Grade 2 × 2',tree:c(1,r(1,k('chart'),k('chart')),r(1,k('chart'),k('chart')))},
 {id:'g23',name:'Grade 2 × 3',tree:c(1,r(1,k('chart'),k('chart'),k('chart')),r(1,k('chart'),k('chart'),k('chart')))},
 {id:'main',name:'Área principal',tree:r(1,k('chart',2.3),c(1,k('kpi'),k('kpi'),k('chart',2.4)))},
 {id:'slicers',name:'Filtros + tela',tree:c(1,r(.5,k('slicer'),k('slicer'),k('slicer'),k('slicer')),r(1,k('kpi'),k('kpi'),k('kpi')),k('chart',3.4))},
 {id:'filter',name:'Coluna de filtros',tree:r(1,c(.62,k('slicer'),k('slicer'),k('slicer'),k('slicer'),k('slicer',3.4)),c(3.6,r(1,k('kpi'),k('kpi'),k('kpi')),k('chart',2.1),r(1.9,k('chart'),k('chart'))))},
 {id:'compare',name:'Lado a lado',tree:c(1,r(.5,k('text'),k('text')),r(2,k('chart'),k('chart')),r(2,k('chart'),k('chart')))},
 {id:'matrix',name:'Foco na matriz',tree:c(1,r(1,k('kpi'),k('kpi'),k('kpi')),k('table',3.6))},
 {id:'map',name:'Foco no mapa',tree:r(1,k('map',2.3),c(1,k('kpi'),k('kpi'),k('table',2.6)))},
 {id:'ops',name:'Painel de operações',tree:c(1,r(1,k('kpi'),k('kpi'),k('kpi'),k('kpi'),k('kpi'),k('kpi')),k('chart',1.5),r(2,k('chart',1),k('table',1.9)))},
];
const N=24;
function presetCards(tree){
  const out=[];
  (function walk(n,x,y,w,h){
    if(n.k){out.push({k:n.k,x,y,w,h});return}
    const tot=n.c.reduce((a,ch)=>a+(ch.w||1),0); let p=n.d==='r'?x:y;
    n.c.forEach(ch=>{const f=(ch.w||1)/tot; if(n.d==='r'){walk(ch,p,y,w*f,h);p+=w*f}else{walk(ch,x,p,w,h*f);p+=h*f}});
  })(tree,0,0,1,1);
  return out.map(z=>{const c0=Math.round(z.x*N),r0=Math.round(z.y*N),c1=Math.round((z.x+z.w)*N),r1=Math.round((z.y+z.h)*N);
    return {k:z.k,c:c0,r:r0,cs:Math.max(1,c1-c0),rs:Math.max(1,r1-r0)}});
}

/* ============ colour helpers ============ */
const hex2rgb=h=>{h=h.replace('#','');return [0,2,4].map(i=>parseInt(h.substr(i,2),16))};
const rgb2hex=a=>'#'+a.map(v=>Math.max(0,Math.min(255,Math.round(v))).toString(16).padStart(2,'0')).join('');
const normalizeHex=v=>{const h=String(v||'').trim().replace(/^#/,'');return /^[0-9a-f]{6}$/i.test(h)?'#'+h.toLowerCase():null};
const mix=(a,b,t)=>{const x=hex2rgb(a),y=hex2rgb(b);return rgb2hex(x.map((v,i)=>v+(y[i]-v)*t))};
const lum=h=>{const [R,G,B]=hex2rgb(h).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*R+.7152*G+.0722*B};
const darkest=a=>a.slice().sort((x,y)=>lum(x)-lum(y))[0];
const onColor=h=>lum(h)>.42?'#111418':'#ffffff';
const contrast=(a,b)=>{const x=lum(a),y=lum(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const bestInk=bg=>contrast('#ffffff',bg)>=contrast('#111418',bg)?'#ffffff':'#111418';
const readable=(fg,bgs,min=3)=>{
  const list=[].concat(bgs), toward=contrast('#ffffff',list[0])>=contrast('#000000',list[0])?'#ffffff':'#000000';
  let c=fg;
  for(let i=0;i<16&&Math.min(...list.map(b=>contrast(c,b)))<min;i++) c=mix(c,toward,.14);
  return c;
};
const esc=s=>String(s).replace(/[&<>"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch]));
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const uid=()=>'p'+Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const clone=v=>JSON.parse(JSON.stringify(v));

function effPal(p,accent){
  if(!accent) return p;
  const A=accent;
  return {...p,ui:null,custom:true,seq:[mix(A,'#ffffff',.88),mix(A,'#ffffff',.6),mix(A,'#ffffff',.3),A,mix(A,'#000000',.5)],div:(typeof S!=='undefined'&&S.imgDiv)||p.div};
}

function tokens(p,o){
  const dark=o.mode==='dark';
  let A=p.seq[3];
  const deep=darkest(p.seq), neutral=p.div[2];
  const t={};
  if(!dark){
    t.canvas=lum(neutral)>.6&&!p.custom?neutral:mix('#f4f5f7',A,.04);
    t.card='#ffffff';
    t.border=mix(t.canvas,deep,.13);
    t.text=mix(deep,'#0b0d10',.55);
    t.sub=mix(deep,t.canvas,.45);
    for(let i=0;i<24&&contrast(t.sub,t.canvas)<4.6;i++) t.sub=mix(t.sub,deep,.08);
    t.faint=mix(t.canvas,deep,.1);
    if(lum(A)>.45){
      const [r0,g0,b0]=hex2rgb(A).map(v=>v/255), mx=Math.max(r0,g0,b0), mn=Math.min(r0,g0,b0), d=mx-mn;
      let h=0; if(d){h=mx===r0?((g0-b0)/d)%6:mx===g0?(b0-r0)/d+2:(r0-g0)/d+4;h=(h*60+360)%360}
      let l=(mx+mn)/2; const sat=d?Math.min(1,d/(1-Math.abs(2*l-1))):0;
      const hsl=(h,s,l)=>{const c=(1-Math.abs(2*l-1))*s,x=c*(1-Math.abs((h/60)%2-1)),m=l-c/2;const [R,G,B]=h<60?[c,x,0]:h<120?[x,c,0]:h<180?[0,c,x]:h<240?[0,x,c]:h<300?[x,0,c]:[c,0,x];return rgb2hex([R+m,G+m,B+m].map(v=>v*255))};
      for(let i=0;i<30&&lum(A)>.4;i++){l-=.02;A=hsl(h,sat,l)}
    }
  }else{
    if(p.ui){[t.canvas,t.card,t.border,t.sub,t.text]=p.ui}
    else if(lum(neutral)<.3){t.canvas=mix(neutral,'#000000',.58);t.card=mix(neutral,'#000000',.25);t.border=mix(neutral,'#ffffff',.05);t.text='#eceef1';t.sub=mix(neutral,'#ffffff',.5)}
    else{t.canvas=mix('#0d1015',A,.06);t.card=mix('#161a21',A,.07);t.border=mix('#272d36',A,.12);t.text=mix('#eceef1',A,.05);t.sub=mix('#8d96a3',A,.12)}
    t.faint=mix(t.canvas,t.text,.1);
    if(lum(A)<.16) A=mix(A,'#ffffff',.35);
  }
  t.A=A;
  t.text=readable(t.text,[t.canvas,t.card],4.5);t.sub=readable(t.sub,[t.canvas,t.card],3.5);
  t.band=mix(t.card,A,dark?.1:.06);
  const tone=o.sidebar;
  if(tone==='brand'){
    if(dark){t.navBg=mix(t.canvas,'#000000',.4);t.navText=t.sub;t.navTextActive=t.text;t.navActive=mix(t.navBg,A,.18);t.navIcon=A}
    else{
      let nb=deep;
      for(let i=0;i<10&&contrast('#ffffff',nb)<4.8;i++) nb=mix(nb,'#000000',.08);
      t.navBg=nb;t.navText=mix('#ffffff',nb,.32);t.navTextActive='#ffffff';t.navActive=mix(nb,'#000000',.22);t.navIcon='#ffffff';
    }
  }else if(tone==='accent'){
    let bg=dark?mix(p.seq[3],'#000000',.3):p.seq[3];
    const ink=bestInk(bg), away=ink==='#ffffff'?'#000000':'#ffffff';
    for(let i=0;i<10&&contrast(ink,bg)<4.8;i++) bg=mix(bg,away,.08);
    t.navBg=bg;t.navTextActive=ink;t.navText=mix(ink,bg,.25);t.navActive=mix(bg,away,.2);t.navIcon=ink;
  }else if(tone==='tint'){
    t.navBg=mix(dark?t.card:t.canvas,A,.1);t.navText=t.sub;t.navTextActive=t.text;t.navActive=mix(t.navBg,A,.2);t.navIcon=A;
  }else{
    t.navBg=t.card;t.navText=t.sub;t.navTextActive=t.text;t.navActive=mix(t.card,A,dark?.16:.1);t.navIcon=A;
  }
  if(o.navInk==='accent'){
    const base=tone==='accent'?(bestInk(t.navBg)==='#111418'?mix(p.seq[3],'#000000',.55):mix(p.seq[3],'#ffffff',.6)):p.seq[3];
    if(tone!=='accent'&&tone!=='brand') t.navActive=mix(t.navBg,base,.14);
    t.navIcon=base; t.navTextActive=base;
  }else if(o.navInk==='mono'){
    t.navIcon=t.navTextActive;
  }
  const ct=o.cardTone||'paper';
  if(ct==='tint') t.cardFill=mix(t.card,A,dark?.2:.1);
  else if(ct==='color'){
    let bg=dark?mix(p.seq[3],'#000000',.3):p.seq[3];
    const ink=bestInk(bg), away=ink==='#ffffff'?'#000000':'#ffffff';
    for(let i=0;i<10&&contrast(ink,bg)<4.8;i++) bg=mix(bg,away,.08);
    t.cardFill=bg;
  }
  else if(ct==='nav') t.cardFill=t.navBg;
  else t.cardFill=t.card;
  const solidCard=ct==='color'||ct==='nav';
  t.cardInk=readable(solidCard?bestInk(t.cardFill):t.text,[t.cardFill],4.5);
  t.cardSub=readable(mix(t.cardInk,t.cardFill,.35),[t.cardFill],3);
  t.cardBorder=ct==='paper'?t.border:mix(t.cardFill,t.cardInk,.14);
  t.heroFill=solidCard?mix(t.cardFill,t.cardInk,.08):mix(t.cardFill,A,dark?.18:.09);
  if(ct!=='paper') t.band=mix(t.cardFill,t.cardInk,.07);
  t.cardAccent=solidCard?t.cardInk:A;
  if(o.textInk==='white'){t.navTextActive='#ffffff';t.navText=mix('#ffffff',t.navBg,.12);t.navIcon='#ffffff';t.navActiveInk='#ffffff';t.navActiveIcon='#ffffff';return t}
  t.navActive=t.canvas;
  if(o.textInk==='palette'){
    const c2=readable(p.seq[3],[t.navBg],4.5);
    t.navTextActive=c2;t.navIcon=c2;t.navText=readable(mix(c2,t.navBg,.2),[t.navBg],3.5);
  }
  t.navTextActive=readable(t.navTextActive,[t.navBg],4.5);
  t.navIcon=readable(t.navIcon,[t.navBg],3);
  t.navText=readable(t.navText,[t.navBg],3.5);
  const onFill=o.activeStyle!=='bar';
  t.navActiveInk=!onFill||contrast(t.navTextActive,t.navActive)>=4.5?t.navTextActive:readable(o.textInk==='palette'?p.seq[3]:t.text,[t.navActive],4.5);
  t.navActiveIcon=!onFill||contrast(t.navIcon,t.navActive)>=3?t.navIcon:readable(o.textInk==='palette'?p.seq[3]:t.A,[t.navActive],3);
  return t;
}

/* ============ icons ============ */
const CIRC='M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z';
const ICONS={
 grid:{name:'Grade de visão geral',k:'overview home dashboard summary tiles',f:'M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z'},
 home:{name:'Início',k:'home start landing main',f:'M4 10.5 12 4l8 6.5V20h-5v-6H9v6H4z'},
 bars:{name:'Gráfico de barras',k:'chart bars volume trading throughput',f:'M4 12h3.5v8H4zM10.25 5h3.5v15h-3.5zM16.5 14H20v6h-3.5z'},
 trend:{name:'Tendência de alta',k:'growth line trend performance increase',s:'M3 17l6-6 4 4 8-8M15 7h6v6'},
 pie:{name:'Gráfico de pizza',k:'pie share mix split breakdown',f:'M11 3.1A9 9 0 1 0 20.9 13H11z',s:'M14 3.2A7.5 7.5 0 0 1 20.8 10H14z'},
 table:{name:'Tabela',k:'table list matrix detail grid',f:'M3 5h18v14H3z',s:'M3 10h18M3 15h18M9 5v14'},
 layers:{name:'Camadas',k:'layers channel stack segment',f:'M12 3l9 5-9 5-9-5z',s:'M3 12.5l9 5 9-5M3 16.5l9 5 9-5'},
 target:{name:'Meta',k:'target goal objective utilization kpi',f:CIRC,s:'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM12 12h.01'},
 dollar:{name:'Dinheiro',k:'money sales revenue finance billing price dollar',f:CIRC,s:'M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2'},
 wallet:{name:'Carteira',k:'wallet budget liquidity position cash cost',f:'M3 7h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',s:'M3 7V6a2 2 0 0 1 2-2h11M16 13.5h2'},
 bank:{name:'Banco',k:'bank branch institution finance',f:'M3 9l9-5 9 5z',s:'M5 11v7M9.5 11v7M14.5 11v7M19 11v7M3 20.5h18'},
 cart:{name:'Carrinho',k:'cart retail basket order ecommerce shop',f:'M6 6h15l-2 8H8z',s:'M2 3h3l3 13h11M9 20h.01M18 20h.01'},
 box:{name:'Pacote',k:'package product inventory sku stock box',f:'M12 3l8 4.5v9L12 21l-8-4.5v-9z',s:'M4 7.5l8 4.5 8-4.5M12 12v9'},
 truck:{name:'Caminhão',k:'truck fleet logistics delivery supply shipping',f:'M2 6h12v10H2zM14 10h4l3 3v3h-7z',s:'M6.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM17.5 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4z'},
 users:{name:'Pessoas',k:'people customers clients team staff users',f:'M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0z',s:'M16 4.2a3.5 3.5 0 0 1 0 6.6M18 14a6.5 6.5 0 0 1 3.5 6'},
 user:{name:'Pessoa',k:'person profile patient learner member user',f:'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0z'},
 heart:{name:'Coração',k:'heart health loyalty care wellbeing donor',f:'M12 20s-8-4.8-8-10.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.2 12 20 12 20z'},
 pulse:{name:'Pulso',k:'pulse activity health monitoring live',s:'M3 12h4l2.5-6 5 12 2.5-6H21'},
 shield:{name:'Escudo',k:'shield risk security compliance protection',f:'M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6z',s:'M9 12l2 2 4-4'},
 alert:{name:'Alerta',k:'alert incident error warning outage issue',f:'M12 3.5 21.5 20h-19z',s:'M12 9.5v4.5M12 17h.01'},
 check:{name:'Concluído',k:'check quality completion done outcome approved',f:CIRC,s:'M8 12.5l2.5 2.5L16 9.5'},
 clock:{name:'Relógio',k:'clock time wait speed latency response',f:CIRC,s:'M12 7v5l3 2'},
 calendar:{name:'Calendário',k:'calendar booking attendance schedule date period',f:'M4 6h16v14H4z',s:'M4 10h16M8 3v5M16 3v5'},
 pin:{name:'Localização',k:'map pin region location site store territory',f:'M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z',s:'M12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'},
 globe:{name:'Globo',k:'globe global world international country',f:CIRC,s:'M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z'},
 building:{name:'Edifício',k:'building property office asset listing real estate',f:'M5 21V4h10v17zM15 9h4v12h-4z',s:'M8 8h1M11 8h1M8 12h1M11 12h1M8 16h1M11 16h1'},
 bolt:{name:'Energia',k:'bolt energy power generation electricity',f:'M13 2 4 14h7l-1 8 9-12h-7z'},
 leaf:{name:'Folha',k:'leaf sustainability emissions green esg environment',f:'M5 19C5 11 10 5 20 5c0 10-6 15-14 15z',s:'M5 19c3-4 6-7 10-9'},
 cap:{name:'Formatura',k:'graduation education enrollment assessment learning school',f:'M2 9l10-5 10 5-10 5z',s:'M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6'},
 car:{name:'Carro',k:'car automotive mobility vehicle dealer',f:'M3 15v-3l2-5h14l2 5v3z',s:'M3 15v3h3v-3M18 15v3h3v-3M7 12h.01M17 12h.01'},
 utensils:{name:'Talheres',k:'utensils food restaurant menu dining qsr',s:'M7 3v18M4 3v5a3 3 0 0 0 6 0V3M17 21V3c-2 1-3.5 3.5-3.5 7H17'},
 bed:{name:'Hospedagem',k:'bed hotel occupancy hospitality stay room',f:'M3 11h18v6H3z',s:'M3 7v12M21 13v6M7 11V9h5v2'},
 play:{name:'Reproduzir',k:'play media stream watch video titles',f:CIRC,s:'M10 8.5v7l6-3.5z'},
 wifi:{name:'Sinal',k:'signal telecom network wifi connectivity',s:'M2 8.5a15 15 0 0 1 20 0M5 12a10 10 0 0 1 14 0M8.5 15.5a5 5 0 0 1 7 0M12 19h.01'},
 game:{name:'Controle de jogo',k:'gamepad gaming players events play',f:'M7 8h10a5 5 0 0 1 4.8 6.4l-.9 3A2.5 2.5 0 0 1 16.5 18L14 15h-4l-2.5 3a2.5 2.5 0 0 1-4.4-.6l-.9-3A5 5 0 0 1 7 8z',s:'M8 10.5v3M6.5 12h3M15.5 11h.01M17.5 13h.01'},
 sparkle:{name:'Brilho',k:'sparkle beauty premium new highlight',f:'M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z',s:'M19 15v4M17 17h4'},
 funnel:{name:'Funil',k:'funnel pipeline conversion filter',f:'M3 4h18l-7 8.5V19l-4 2v-8.5z'},
 chat:{name:'Conversa',k:'chat reviews feedback survey comments',f:'M4 5h16v11H9l-5 4z',s:'M8 9h8M8 12h5'},
 repeat:{name:'Repetição',k:'repeat churn retention cohort renewal recurring',s:'M17 3l4 4-4 4M3 11V9a2 2 0 0 1 2-2h16M7 21l-4-4 4-4M21 13v2a2 2 0 0 1-2 2H3'},
 brief:{name:'Maleta',k:'briefcase program project services engagement work',f:'M3 8h18v12H3z',s:'M9 8V5h6v3M3 13h18'},
 bulb:{name:'Lâmpada',k:'light bulb insight ideas analysis',f:'M9 17h6v-2.5a6 6 0 1 0-6 0z',s:'M10 20.5h4'},
 trophy:{name:'Troféu',k:'trophy achievement ranking award leaderboard',f:'M7 4h10v5a5 5 0 0 1-10 0z',s:'M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M12 14v4M8 21h8'},
 star:{name:'Estrela',k:'star events favourite rating launch',f:'M12 3l2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9z'},
 gear:{name:'Configurações',k:'settings gear admin configuration',f:CIRC,s:'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'},
 info:{name:'Informações',k:'info about help notes definitions glossary',f:CIRC,s:'M12 11v5M12 8h.01'},
 ...EXTRA_ICONS,
};
const AUTO=[
 [/overview|summary|home|dashboard|executive|visão|resumo|início/i,'grid'],
 [/customer|client|member|people|staff|labou?r|team|subscriber|player|clientes|equipe/i,'users'],
 [/donor|doador/i,'heart'],[/patient|learner|student|profile|perfil/i,'user'],
 [/revenue|sales|mrr|arpu|billing|monet|profit|income|finance|price|receita|vendas/i,'dollar'],
 [/liquidity|budget|position|cash|grant|cost|liquidez|orçamento/i,'wallet'],
 [/credit|risk|compliance|security|risco/i,'shield'],[/branch|bank|filial/i,'bank'],
 [/region|map|territor|location|site|store|boutique|dealer|market|regiões|mapa|lojas/i,'pin'],
 [/product|sku|inventory|stock|collection|menu mix|sell|estoque|produtos|coleç/i,'box'],
 [/basket|order|cart|promotion|cesta|promoç/i,'cart'],
 [/churn|retention|cohort|readmission|renewal|cancelamento|coorte|reinterna/i,'repeat'],
 [/pipeline|funnel|conversion|funil/i,'funnel'],
 [/wait|time|speed|latency|response|tempo|velocidade|espera/i,'clock'],
 [/booking|attendance|schedule|calendar|reserva|presença/i,'calendar'],
 [/incident|error|outage|alert|incidente|erro/i,'alert'],
 [/quality|completion|outcome|qualidade|conclus/i,'check'],
 [/utiliz|target|goal|utilização|meta/i,'target'],
 [/emission|sustain|esg|emissões/i,'leaf'],[/generation|energy|power|geração|energia/i,'bolt'],
 [/asset|listing|propert|building|ativos|imóve/i,'building'],
 [/fleet|production|logistic|supply|frota|produção/i,'truck'],
 [/review|feedback|survey|avaliaç/i,'chat'],[/stream|watch|title|video|transmiss|títulos/i,'play'],
 [/network|rede/i,'wifi'],[/volume|throughput|trading/i,'bars'],
 [/enrol|assessment|course|matrícul|curso/i,'cap'],[/occupancy|revpar|hotel|ocupação/i,'bed'],
 [/event|launch|evento/i,'star'],[/channel|canais/i,'layers'],
 [/loyalty|admission|health|internaç|saúde/i,'heart'],[/program|project|engagement|programa|projeto/i,'brief'],
 [/growth|trend|performance|crescimento/i,'trend'],
];
const FALLBACK=['bars','trend','pie','table','layers','target','clock','star'];
function autoIcon(name,i){for(const [re,id] of AUTO) if(re.test(name)) return id; return FALLBACK[i%FALLBACK.length]}
function icon(id,x,y,S0,col,o){
  const ic=ICONS[id]||ICONS.grid, duo=o.iconStyle==='duotone';
  let h=`<g transform="translate(${(x-S0/2).toFixed(2)} ${(y-S0/2).toFixed(2)}) scale(${(S0/24).toFixed(4)})" stroke="${col}" stroke-width="${o.iconWeight||2}" stroke-linecap="round" stroke-linejoin="round">`;
  if(ic.f) h+=`<path d="${ic.f}" fill="${duo?col:'none'}"${duo?' fill-opacity="0.22"':''}/>`;
  if(ic.s) h+=`<path d="${ic.s}" fill="none"/>`;
  return h+'</g>';
}
const uiIcon=id=>`<svg viewBox="0 0 24 24" aria-hidden="true">${icon(id,12,12,24,'currentColor',{iconStyle:S.iconStyle,iconWeight:S.iconWeight})}</svg>`;

const SOCIAL=[
  {label:'LinkedIn',url:'#',draw:(x,y,s,col,mid)=>`<g transform="translate(${x} ${y}) scale(${(s/24).toFixed(4)})"><mask id="${mid}"><rect width="24" height="24" fill="#ffffff"/><path fill="#000000" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></mask><rect width="24" height="24" rx="4.5" fill="${col}" mask="url(#${mid})"/></g>`},
  {label:'Website',url:'https://',draw:(x,y,s,col,mid)=>`<g transform="translate(${x} ${y}) scale(${(s/64).toFixed(4)})"><mask id="${mid}"><circle cx="32" cy="32" r="30" fill="#ffffff"/><g transform="translate(8.6 10.4) scale(.72)"><path d="M25 33 C23 22 25 12 30 4 L32 9.5 L35.5 4 L36.5 11 L40.5 7.5 L39 17 C38 24 37 30 35 34 Z" fill="#000000"/><path d="M12.5 37 C13 51 28 55.5 38.5 51 L47.5 56 L52.5 51.5 L46.5 44 C44.5 34.5 34 28.5 23 27.5 Z" fill="#000000"/><circle cx="19" cy="33" r="8.5" fill="#000000"/></g></mask><circle cx="32" cy="32" r="30" fill="${col}" mask="url(#${mid})"/></g>`}
];

/* ============ renderer ============ */
let UIDC=0;
function render({nav,p,o,W,H,page,cards}){
  const id='bp'+(UIDC++), t=tokens(p,o), dark=o.mode==='dark';
  const s=Math.min(W/1280,H/720), P=v=>Math.round(v*s*10)/10;
  const pad=Math.round(16*s), gap=Math.round(12*s), rad=P(o.radius), txt=o.text, pages=o.pages||[];
  const footerLogos=o.footerLinks&&o.showFooterLogos;
  const FG=(o.fontGeneral||12)*4/3, FT=(o.fontTitle||14)*4/3, navF=FG*(o.navFontPct||100)/100;
  const g=[], navZ=[], zones=[], frameZ=[], late=[], textZ=[];
  const panelRad=o.panelRadius!=null?P(o.panelRadius):rad;
  const LIVE=o.liveText&&txt?new Map([[o.footer,'Footer'],[o.subtitle,'Subtitle'],[o.title,'Report title'],[o.brand,'Company']].filter(([kk])=>kk&&String(kk).trim())):null;
  const liveRole=(str,role)=>LIVE?(role||LIVE.get(str)||null):null;
  const liveBox=(role,str,x,y,size,fill,wt,anchor,font)=>{
    const w=Math.min(W,Math.max(size*5,String(str).length*size*.62+size*2)), h=size*1.7;
    let bx=anchor==='middle'?x-w/2:anchor==='end'?x-w:x;
    bx=clamp(bx-size*.1,0,W-w);
    textZ.push({k:'label',role,text:String(str),x:Math.round(bx),y:Math.round(clamp(y-size*1.18,0,H-h)),w:Math.round(w),h:Math.round(h),size,color:fill,bold:wt>=600,align:anchor==='middle'?'center':anchor==='end'?'right':'left',font:font||((role==='Report title'||role==='Company')?o.fontFamilyTitle:o.fontFamilyGeneral)});
  };
  const tx=(x,y,size,fill,str,wt=400,anchor='start',role)=>{
    if(str==null||String(str)==='') return '';
    const family=size>=FT*2.5?o.fontFamilyCallout:((role==='Report title'||role==='Company'||role==='Page name'||size>=FT*1.8)?o.fontFamilyTitle:o.fontFamilyGeneral);
    if(liveRole(str,role)){liveBox(liveRole(str,role),str,x,y,size,fill,wt,anchor,family);return ''}
    return `<text x="${x}" y="${y}" font-family="${esc(family||'Segoe UI')}" font-size="${size.toFixed(1)}" font-weight="${wt}" fill="${fill}" text-anchor="${anchor}">${esc(str)}</text>`;
  };
  const bar=(x,y,w,h,fill)=>`<rect x="${x}" y="${y}" width="${Math.max(0,w)}" height="${h}" rx="${h/2}" fill="${fill}"/>`;
  const fit=(str,maxW,size)=>Math.max(Math.min(size,11*4/3),Math.min(size,maxW/(Math.max(1,String(str).length)*.56)));
  const socialZ=[], SI=Math.round(FG*1.35), SG=Math.round(SI*.6);
  const socials=(x,y,anchor,vertical,col)=>{
    if(!o.showFooterLogos) return '';
    const span=vertical?SI:2*SI+SG, x0=Math.round(anchor==='middle'?x-span/2:anchor==='end'?x-span:x);
    return SOCIAL.map((l,i)=>{
      const ix=vertical?x0:x0+i*(SI+SG), iy=Math.round(vertical?y+i*(SI+SG):y-SI/2);
      socialZ.push({k:'link',label:l.label,url:l.url,x:ix,y:iy,w:SI,h:SI});
      return l.draw(ix,iy,SI,col,`${id}so${socialZ.length}`);
    }).join('');
  };
  const filt=o.shadow?` filter="url(#${id}s)"`:'';
  const chev=(x,y,col,dir)=>dir==='right'
    ?`<polyline points="${x-P(3)},${y-P(5)} ${x+P(2)},${y} ${x-P(3)},${y+P(5)}" fill="none" stroke="${col}" stroke-width="${P(1.6)}" stroke-linecap="round" stroke-linejoin="round"/>`
    :`<polyline points="${x-P(4)},${y-P(2)} ${x},${y+P(2)} ${x+P(4)},${y-P(2)}" fill="none" stroke="${col}" stroke-width="${P(1.5)}" stroke-linecap="round" stroke-linejoin="round"/>`;

  g.push(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="${esc(o.fontFamilyGeneral||'Segoe UI')}, Arial, sans-serif"><defs>`);
  if(o.shadow) g.push(`<filter id="${id}s" x="-6%" y="-6%" width="112%" height="124%"><feDropShadow dx="0" dy="${P(2)}" stdDeviation="${P(dark?6:5)}" flood-color="#000000" flood-opacity="${dark?.4:.07}"/></filter>`);
  if(o.texture==='glow') g.push(`<radialGradient id="${id}g" cx="${W*.9}" cy="${-H*.15}" r="${W*.8}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${t.A}" stop-opacity="${dark?.24:.14}"/><stop offset="1" stop-color="${t.A}" stop-opacity="0"/></radialGradient>`);
  if(o.texture==='dots') g.push(`<pattern id="${id}d" width="${P(18)}" height="${P(18)}" patternUnits="userSpaceOnUse"><circle cx="${P(9)}" cy="${P(9)}" r="${Math.max(.7,P(1.1))}" fill="${mix(t.canvas,t.text,dark?.18:.16)}"/></pattern>`);
  if(o.photoData&&o.photoBlur) g.push(`<filter id="${id}pb" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="${P(o.photoBlur)}"/></filter>`);
  if(page<0&&o.menuStyle==='cover'&&!o.photoData) g.push(`<linearGradient id="${id}cg" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${mix(t.navBg,'#000000',.3)}"/><stop offset="1" stop-color="${mix(t.A,'#000000',.45)}"/></linearGradient>`);
  if(o.navFill==='gradient') g.push(`<linearGradient id="${id}ng" x1="0" y1="0" x2="0" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${t.navBg}"/><stop offset="1" stop-color="${mix(t.navBg,t.A,dark?.35:.5)}"/></linearGradient>`);
  g.push(`</defs><rect width="${W}" height="${H}" fill="${t.canvas}"/>`);
  if(o.photoData&&o.photoPages&&!(page<0&&['cover','story','banner','panel'].includes(o.menuStyle))){
    const bp=o.photoBlur?P(o.photoBlur)*3:0;
    g.push(`<image href="${o.photoData}" x="${-bp}" y="${-bp}" width="${W+2*bp}" height="${H+2*bp}" preserveAspectRatio="xMidYMid slice"${o.photoBlur?` filter="url(#${id}pb)"`:''}/>`);
    g.push(`<rect width="${W}" height="${H}" fill="${t.canvas}" fill-opacity="${dark?Math.max(.55,o.photoDim+.2):Math.max(.7,1-o.photoDim*.4)}"/>`);
  }
  if(o.texture==='glow') g.push(`<rect width="${W}" height="${H}" fill="url(#${id}g)"/>`);
  if(o.texture==='dots') g.push(`<rect width="${W}" height="${H}" fill="url(#${id}d)"/>`);

  const edge=o.sidebar==='paper', slotBar=on=>mix(t.navBg,t.navText,on?.6:.35);
  const NF=o.navFill==='gradient'?`url(#${id}ng)`:t.navBg;
  const logo=(x,y,sz)=>{
    let h=`<rect x="${x}" y="${y}" width="${sz}" height="${sz}" rx="${sz*.26}" fill="${t.A}"/>`;
    const letter=(o.brand||'').trim().charAt(0).toUpperCase();
    if(o.logo==='letter'&&txt&&letter) h+=`<text x="${x+sz/2}" y="${y+sz*.7}" font-size="${(sz*.56).toFixed(1)}" font-weight="700" fill="${onColor(t.A)}" text-anchor="middle">${esc(letter)}</text>`;
    else if(o.logo==='icon') h+=icon(o.logoIcon,x+sz/2,y+sz/2,sz*.62,onColor(t.A),o);
    return h;
  };
  let logoZ=null;
  /* logo area: uploaded images side by side, or a dashed placeholder. Painted only outside the PBIP build (there it becomes visuals). */
  const logoArea=(x,y,w,h,bg,fg)=>{
    logoZ={x:Math.round(x),y:Math.round(y),w:Math.round(w),h:Math.round(h)};
    if(o.forPbip) return '';
    const imgs=o.logoImages||[];
    if(imgs.length){
      const n=imgs.length, cw=w/n;
      return imgs.map((im,i)=>`<image href="${im.data}" x="${(x+i*cw+cw*.06).toFixed(1)}" y="${(y+h*.06).toFixed(1)}" width="${(cw*.88).toFixed(1)}" height="${(h*.88).toFixed(1)}" preserveAspectRatio="xMidYMid meet"/>`).join('');
    }
    return `<rect x="${x+.5}" y="${y+.5}" width="${w-1}" height="${h-1}" rx="${P(6)}" fill="${mix(bg,fg,.06)}" stroke="${mix(bg,fg,.45)}" stroke-width="1" stroke-dasharray="${P(5)} ${P(4)}"/>`+
      `<text x="${x+w/2}" y="${y+h/2+FG*.36}" font-size="${FG}" font-weight="600" letter-spacing="${(FG*.12).toFixed(1)}" fill="${mix(bg,fg,.7)}" text-anchor="middle">LOGOTIPO</text>`;
  };
  const brandText=(x,yc,fs,ink,ph,wt=600,anchor='start')=>{
    if(!txt) return bar(x,yc-P(4),P(90),P(8),ph);
    return o.brand?tx(x,yc+fs*.36,fs,ink,o.brand,wt,anchor,'Company'):'';
  };
  /* brand block: the logo area (if shown) and the company name (only when typed) */
  const brandBlock=(x,y,w,h,bg,fg,fs,ink,ph)=>{
    const yc=y+h/2;
    if(!o.showLogo) return brandText(x,yc,fs,ink,ph);
    if((o.logoImages||[]).length||o.logo==='placeholder') return logoArea(x,y,w,h,bg,fg);
    const sz=Math.min(h,P(30));
    return logo(x,yc-sz/2,sz)+brandText(x+sz+P(10),yc,fs,ink,ph);
  };
  const ico=(i,x,y,S0,col)=>icon((o.icons||[])[i],x,y,S0,col,o);
  const activeBrand=(ix,y,iw,ih)=>o.activeStyle==='bar'
    ?`<rect x="${Math.max(0,ix-P(9))}" y="${y+P(4)}" width="${P(3)}" height="${ih-P(8)}" rx="${P(1.5)}" fill="${t.navIcon}"/>`
    :`<rect x="${ix}" y="${y}" width="${iw}" height="${ih}" rx="${P(Math.min(o.radius,10))}" fill="${t.navActive}"/>`;
  const alignStart=(top0,bottom0,count,step,ih,mid)=>{
    const block=count*step-(step-ih), last=Math.max(top0,bottom0-block);
    const want=o.navAlign==='bottom'?bottom0-block:o.navAlign==='middle'?mid-block/2:top0;
    return clamp(want,top0,last);
  };
  /* item geometry and start, with the navigation sliders applied (all in % of the canvas height) */
  const navGeom=m=>{
    const ih=o.navItemH!=null?H*o.navItemH/100:P(m.ih);
    const step=o.navGap!=null?ih+H*o.navGap/100:ih+(P(m.st)-P(m.ih));
    return {ih:Math.round(ih),step:Math.round(step)};
  };
  const startY=(top0,bot0,count,step,ih,mid)=>o.navStart!=null?H*o.navStart/100:alignStart(top0,bot0,count,step,ih,mid);
  const sideW=def=>Math.round(W*(o.navW!=null?o.navW:def)/100);
  const holder=(x,y,S0,bg)=>o.iconHolder==='none'?'':`<rect x="${(x-S0/2).toFixed(1)}" y="${(y-S0/2).toFixed(1)}" width="${S0}" height="${S0}" rx="${o.iconHolder==='circle'?S0/2:S0*.28}" fill="${bg}"/>`;
  const logoH=o.logoHPct!=null?H*o.logoHPct/100:P(44);
  let grid=null, cx=pad, cy=pad, cw=W-2*pad, ch=H-2*pad;

  if(page<0){
    /* ---------- main menu ---------- */
    const accT=readable(t.A,t.canvas,3);
    const mediaSlot=(x,y,w,h,fitMode,bg,fg,fade)=>{
      if(o.forPbip){}
      if(o.photoData){
        let sv=`<clipPath id="${id}mc"><rect x="${x}" y="${y}" width="${w}" height="${h}"/></clipPath><image href="${o.photoData}" x="${x}" y="${y}" width="${w}" height="${h}" preserveAspectRatio="xMidYMid ${fitMode==='fit'?'meet':'slice'}" clip-path="url(#${id}mc)"/>`;
        if(fade){
          const L=fade==='left';
          sv+=`<linearGradient id="${id}mf" x1="${L?x:x+w}" y1="0" x2="${L?x+w*.35:x+w*.65}" y2="0" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="${bg}" stop-opacity="1"/><stop offset="1" stop-color="${bg}" stop-opacity="0"/></linearGradient><rect x="${L?x:x+w*.65}" y="${y}" width="${w*.35}" height="${h}" fill="url(#${id}mf)"/>`;
        }
        return sv;
      }
      const cxm=x+w/2, cym=y+h/2-P(14), S2=P(56);
      return `<rect x="${x+P(24)}" y="${y+P(24)}" width="${w-P(48)}" height="${h-P(48)}" rx="${P(10)}" fill="${mix(bg,fg,.04)}" stroke="${mix(bg,fg,.3)}" stroke-dasharray="${P(6)} ${P(5)}"/>`
        +`<g fill="none" stroke="${mix(bg,fg,.45)}" stroke-width="${P(2)}" stroke-linejoin="round"><rect x="${cxm-S2/2}" y="${cym-S2*.42}" width="${S2}" height="${S2*.84}" rx="${P(6)}"/><circle cx="${cxm+S2*.18}" cy="${cym-S2*.18}" r="${S2*.09}"/><polyline points="${cxm-S2/2+P(4)},${cym+S2*.3} ${cxm-S2*.1},${cym} ${cxm+S2*.12},${cym+S2*.18} ${cxm+S2*.3},${cym+S2*.05} ${cxm+S2/2-P(4)},${cym+S2*.3}"/></g>`
        +`<text x="${cxm}" y="${cym+S2*.5+P(12)}" font-size="${FG}" font-weight="600" fill="${mix(bg,fg,.6)}" text-anchor="middle">Imagem do menu</text>`;
    };
    /* title with *highlighted* words; nothing is drawn when the title is empty (unless the text is off) */
    const richTitle=(raw,x,yTop,maxW,size0,color,accentCol,weight,role,measureOnly)=>{
      const str=String(raw||'').replace(/\*/g,'').trim();
      if(!str&&txt) return 0;
      const toks=[];
      String(raw||'').split(/(\*[^*]+\*)/).forEach(seg=>{
        if(!seg) return;
        const acc=/^\*[^*]+\*$/.test(seg);
        seg.replace(/^\*|\*$/g,'').split(/(\s+)/).forEach(w=>{if(w) toks.push({w,acc})});
      });
      const cwk=weight>=700?.62:.56;
      const wrap=size=>{
        const lines=[[]];let lw=0;
        toks.forEach(tk=>{
          const len=tk.w.length*size*cwk, cur=lines[lines.length-1];
          if(/^\s+$/.test(tk.w)){if(cur.length){cur.push(tk);lw+=len}return}
          if(lw+len>maxW&&cur.length){while(cur.length&&/^\s+$/.test(cur[cur.length-1].w))cur.pop();lines.push([]);lw=0}
          lines[lines.length-1].push(tk);lw+=len;
        });
        return lines;
      };
      let size=size0, lines=wrap(size);
      for(let k2=0;k2<6&&(lines.length>3||toks.some(tk=>tk.w.length*size*cwk>maxW));k2++){size*=.88;lines=wrap(size)}
      const lh=size*1.12, h=lines.length*lh;
      if(measureOnly) return h;
      if(!txt){lines.forEach((L,i)=>g.push(bar(x,yTop+i*lh+size*.2,maxW*(i?.45:.7),size*.62,t.faint)));return h}
      if(o.liveText){
        const runs=[];
        lines.forEach((L,i)=>{
          L.forEach(tk=>{const last=runs[runs.length-1];if(last&&last.acc===tk.acc)last.text+=tk.w;else runs.push({text:tk.w,acc:tk.acc})});
          if(i<lines.length-1&&runs.length) runs[runs.length-1].text+=' ';
        });
        textZ.push({k:'label',role,text:runs.map(r2=>r2.text).join(''),runs:runs.map(r2=>({text:r2.text,color:r2.acc?accentCol:color})),x:Math.round(x),y:Math.round(yTop),w:Math.round(Math.min(maxW+size,W-x)),h:Math.round(h+size*.3),size,color,bold:weight>=600,align:'left'});
        return h;
      }
      lines.forEach((L,i)=>g.push(`<text x="${x}" y="${(yTop+size*.92+i*lh).toFixed(1)}" font-size="${size.toFixed(1)}" font-weight="${weight}" xml:space="preserve">${L.map(tk=>`<tspan fill="${tk.acc?accentCol:color}">${esc(tk.w)}</tspan>`).join('')}</text>`));
      return h;
    };
    const eyebrow=(x,y,str,col)=>{
      if(!str) return;
      if(!txt){g.push(bar(x,y-FG*.6,P(160),FG*.55,t.faint));return}
      if(o.liveText){liveBox('Subtitle',str,x,y,FG,col,600,'start');return}
      g.push(`<text x="${x}" y="${y}" font-size="${FG}" font-weight="600" letter-spacing="${(FG*.14).toFixed(1)}" fill="${col}">${esc(str)}</text>`);
    };
    const menuBrand=(x,y,bg,fg)=>{
      if(!o.showLogo) return brandText(x,y+P(20),FT,fg,fg,600);
      if((o.logoImages||[]).length||o.logo==='placeholder') return logoArea(x,y,P(200),P(44),bg,fg);
      return logo(x,y+P(4),P(30))+brandText(x+P(40),y+P(19),FT,fg,fg,600);
    };

    if(o.menuStyle==='story'){
      const right=o.imgSide!=='left', half=W*.5;
      const x0=right?P(64):half+P(48), colW=half-P(112);
      g.push(mediaSlot(right?half:0,0,half,H,o.photoFit,t.canvas,t.text,right?'left':'right'));
      g.push(menuBrand(x0,P(36),t.canvas,t.text));
      let y=H*.2;
      if(o.subtitle) eyebrow(x0,y,o.subtitle.toUpperCase(),t.sub);
      if(txt||o.subtitle) g.push(`<rect x="${x0}" y="${y+P(12)}" width="${P(28)}" height="${P(2.5)}" fill="${accT}"/>`);
      y+=P(44);
      y+=richTitle(o.titleRaw,x0,y,colW,FT*4.4,t.text,accT,700,'Report title')+P(18);
      const introH=P(62);
      if(!o.liveText) [.96,.9,.58].forEach((f,i)=>g.push(bar(x0,y+P(6)+i*P(20),colW*f,FG*.55,t.faint)));
      frameZ.push({k:'text',label:'Texto de introdução',x:Math.round(x0),y:Math.round(y),w:Math.round(colW),h:Math.round(introH),color:t.sub});
      y+=introH+P(22);
      const bw=Math.round(P(160)), bhh=Math.round(P(40)), ink=bestInk(accT), by=Math.round(y);
      g.push(`<rect x="${x0}" y="${by}" width="${bw}" height="${bhh}" rx="${Math.min(rad,P(6))}" fill="${accT}"/>`);
      g.push(tx(x0+bw/2,by+bhh/2+FG*1.05*.36,FG*1.05,ink,'Começar →',700,'middle','Button label'));
      navZ.push({k:'button',label:pages[0]?.name||'Início',target:0,x:Math.round(x0),y:by,w:bw,h:bhh});
      let ry=Math.max(by+bhh+P(56),H*.66);
      const rowW=right?half-P(88):W-x0-P(64);
      if(txt) g.push(`<text x="${x0}" y="${ry}" font-size="${(FG*.9).toFixed(1)}" font-weight="700" letter-spacing="${(FG*.14).toFixed(1)}" fill="${t.sub}">PÁGINAS</text>`);
      g.push(`<rect x="${x0+P(64)}" y="${ry-FG*.35}" width="${Math.max(0,rowW-P(64))}" height="1" fill="${t.border}"/>`);
      ry+=P(22);
      const cols=Math.max(1,Math.min(4,pages.length)), iw=rowW/cols, ihh=P(58);
      pages.forEach((pg,i)=>{
        const c2=i%cols, ix=x0+c2*iw, iy=ry+Math.floor(i/cols)*(ihh+P(12));
        if(c2>0) g.push(`<rect x="${ix-P(10)}" y="${iy}" width="1" height="${ihh-P(10)}" fill="${t.border}"/>`);
        g.push(`<text x="${ix}" y="${iy+FG*1.1}" font-size="${(FG*1.05).toFixed(1)}" font-weight="700" fill="${accT}">${String(i+1).padStart(2,'0')}</text>`);
        const nx=ix+FG*1.9;
        g.push(txt?tx(nx,iy+FG*1.1,fit(pg.name,iw-FG*1.9-P(16),FG*1.1),t.text,pg.name,700,'start','Page name'):bar(nx,iy+P(4),iw*.45,P(8),t.faint));
        if(o.liveText&&txt) liveBox('Page description','Resumo da página',nx,iy+FG*1.1+P(22),FG*.92,t.sub,400,'start');
        else{
          g.push(bar(nx,iy+FG*1.1+P(12),Math.max(0,Math.min(iw-FG*1.9-P(24),P(120))),P(5),t.faint));
          g.push(bar(nx,iy+FG*1.1+P(24),Math.max(0,Math.min(iw-FG*1.9-P(40),P(80))),P(5),t.faint));
        }
        navZ.push({k:'button',label:pg.name,target:i,x:Math.round(ix-P(4)),y:Math.round(iy-P(4)),w:Math.round(iw-P(16)),h:Math.round(ihh)});
      });
      g.push(o.footerLinks?socials(x0,H-P(28)-FG*.36,'start',false,t.sub):txt?tx(x0,H-P(28),FG,t.sub,o.footer):bar(x0,H-P(34),P(110),P(6),t.faint));
    }else if(o.menuStyle==='banner'){
      const bh=Math.round(H*.46), white='#ffffff', bandBg=mix(t.navBg,'#000000',dark?.3:.15);
      g.push(`<rect width="${W}" height="${bh}" fill="${bandBg}"/>`);
      g.push(mediaSlot(0,0,W,bh,o.photoFit,bandBg,white,null));
      if(o.photoData) g.push(`<linearGradient id="${id}bn" x1="0" y1="0" x2="0" y2="${bh}" gradientUnits="userSpaceOnUse"><stop offset=".35" stop-color="#000000" stop-opacity="0"/><stop offset="1" stop-color="#000000" stop-opacity="${Math.min(.85,o.photoDim+.2)}"/></linearGradient><rect width="${W}" height="${bh}" fill="url(#${id}bn)"/>`);
      g.push(menuBrand(P(48),P(28),o.photoData?'#000000':bandBg,white));
      const accB=readable(t.A,o.photoData?'#1a1a1a':bandBg,3), tsz=FT*3.6, tW=W*.62;
      const th=richTitle(o.titleRaw,P(48),0,tW,tsz,white,accB,700,'Report title',true);
      const ty=bh-P(36)-(o.subtitle?FG*2.2:0)-th;
      richTitle(o.titleRaw,P(48),ty,tW,tsz,white,accB,700,'Report title');
      if(o.subtitle) g.push(txt?tx(P(48),bh-P(36),FG*1.15,'#e6e6e6',o.subtitle,400,'start','Subtitle'):bar(P(48),bh-P(44),P(200),P(8),'rgba(255,255,255,.35)'));
      const x0=P(48), x1=W-P(48), y0=bh+P(36), n=pages.length, cols=Math.max(1,Math.min(n,5)), tg=P(16), rows=Math.max(1,Math.ceil(n/cols));
      const tw=(x1-x0-(cols-1)*tg)/cols, th2=Math.min((H-P(64)-y0-(rows-1)*tg)/rows,P(150));
      pages.forEach((pg,i)=>{
        const cx2=Math.round(x0+(i%cols)*(tw+tg)), cy2=Math.round(y0+Math.floor(i/cols)*(th2+tg)), w=Math.round(tw), h=Math.round(th2), ic=P(40);
        g.push(`<rect x="${cx2+.5}" y="${cy2+.5}" width="${w-1}" height="${h-1}" rx="${Math.min(rad,h/2)}" fill="${t.card}" stroke="${t.border}"${filt}/>`);
        g.push(holder(cx2+P(20)+ic/2,cy2+P(20)+ic/2,ic,mix(t.card,t.A,dark?.2:.12)));
        g.push(ico(i,cx2+P(20)+ic/2,cy2+P(20)+ic/2,P(20),t.A));
        g.push(chev(cx2+w-P(24),cy2+P(40),t.sub,'right'));
        g.push(txt?tx(cx2+P(20),cy2+h-P(26),fit(pg.name,w-P(40),FT*1.15),t.text,pg.name,600,'start','Page name'):bar(cx2+P(20),cy2+h-P(36),Math.min(w*.5,P(120)),P(9),t.faint));
        navZ.push({k:'button',label:pg.name,target:i,x:cx2,y:cy2,w,h});
      });
      g.push(o.footerLinks?socials(P(48),H-P(24)-FG*.36,'start',false,t.sub):txt?tx(P(48),H-P(24),FG,t.sub,o.footer):bar(P(48),H-P(30),P(110),P(6),t.faint));
    }else if(o.menuStyle==='panel'){
      const imgLeft=o.imgSide==='left', half=Math.round(W*.52);
      g.push(mediaSlot(imgLeft?0:W-half,0,half,H,o.photoFit,t.canvas,t.text,null));
      const x0=imgLeft?half+P(56):P(56), colW=W-half-P(112);
      g.push(menuBrand(x0,P(36),t.canvas,t.text));
      let y=H*.16;
      if(o.subtitle) eyebrow(x0,y,o.subtitle.toUpperCase(),t.sub);
      if(txt||o.subtitle) g.push(`<rect x="${x0}" y="${y+P(12)}" width="${P(28)}" height="${P(2.5)}" fill="${accT}"/>`);
      y+=P(44);
      y+=richTitle(o.titleRaw,x0,y,colW,FT*3.2,t.text,accT,700,'Report title')+P(16);
      if(!o.liveText) [.94,.62].forEach((f,i)=>g.push(bar(x0,y+P(6)+i*P(20),colW*f,FG*.55,t.faint)));
      frameZ.push({k:'text',label:'Texto de introdução',x:Math.round(x0),y:Math.round(y),w:Math.round(colW),h:Math.round(P(44)),color:t.sub});
      y+=P(44)+P(28);
      const n=pages.length, rg=P(10), rowH=Math.min(P(56),(H-P(70)-y-(n-1)*rg)/Math.max(1,n));
      pages.forEach((pg,i)=>{
        const ry=Math.round(y+i*(rowH+rg)), rh=Math.round(rowH), rx=Math.round(x0), rw=Math.round(colW), ic=Math.min(P(34),rh-P(12));
        g.push(`<rect x="${rx+.5}" y="${ry+.5}" width="${rw-1}" height="${rh-1}" rx="${Math.min(rad,rh/2)}" fill="${t.card}" stroke="${t.border}"${filt}/>`);
        g.push(holder(rx+P(14)+ic/2,ry+rh/2,ic,mix(t.card,t.A,dark?.2:.12)));
        g.push(ico(i,rx+P(14)+ic/2,ry+rh/2,ic*.55,t.A));
        g.push(txt?tx(rx+P(26)+ic,ry+rh/2+FG*1.1*.36,fit(pg.name,rw-ic-P(80),FG*1.1),t.text,pg.name,600,'start','Page name'):bar(rx+P(26)+ic,ry+rh/2-P(4),P(120),P(8),t.faint));
        g.push(chev(rx+rw-P(22),ry+rh/2,t.sub,'right'));
        navZ.push({k:'button',label:pg.name,target:i,x:rx,y:ry,w:rw,h:rh});
      });
      g.push(o.footerLinks?socials(x0,H-P(28)-FG*.36,'start',false,t.sub):txt?tx(x0,H-P(28),FG,t.sub,o.footer):bar(x0,H-P(34),P(110),P(6),t.faint));
    }else if(o.menuStyle==='cover'){
      const white='#ffffff', bp=o.photoData&&o.photoBlur?P(o.photoBlur)*3:0;
      if(o.photoData){
        g.push(`<image href="${o.photoData}" x="${-bp}" y="${-bp}" width="${W+2*bp}" height="${H+2*bp}" preserveAspectRatio="xMidYMid slice"${o.photoBlur?` filter="url(#${id}pb)"`:''}/>`);
        g.push(`<rect width="${W}" height="${H}" fill="#000000" fill-opacity="${o.photoDim}"/>`);
      }else g.push(`<rect width="${W}" height="${H}" fill="url(#${id}cg)"/>`);
      const acc=lum(t.A)<.2?mix(t.A,'#ffffff',.35):t.A;
      if(o.showLogo&&(o.logoImages||[]).length) g.push(logoArea(P(40),P(28),P(260),logoH,'#000000',white));
      else if(o.showLogo&&o.logo==='placeholder') g.push(logoArea(P(40),P(28),P(160),P(40),'#000000',white));
      const eyebrowStr=[o.brand,o.subtitle].filter(Boolean).join('   •   ').toUpperCase();
      if(txt&&eyebrowStr&&o.liveText) liveBox('Eyebrow',eyebrowStr,W/2,P(44),FG,white,400,'middle');
      else if(txt&&eyebrowStr) g.push(`<text x="${W/2}" y="${P(44)}" font-size="${FG}" letter-spacing="${(FG*.08).toFixed(1)}" fill="${white}" fill-opacity="0.85" text-anchor="middle">${esc(eyebrowStr)}</text>`);
      if(o.titleRaw&&String(o.titleRaw).trim()){
        const hs=fit(o.title,W*.8,FT*3.6);
        if(o.liveText&&txt) liveBox('Report title',o.title,W/2,P(118),hs,white,400,'middle','Georgia');
        else g.push(txt?`<text x="${W/2}" y="${P(118)}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="${hs.toFixed(1)}" fill="${white}" text-anchor="middle">${esc(o.title)}</text>`:bar(W*.3,P(90),W*.4,P(28),'rgba(255,255,255,.25)'));
        g.push(`<rect x="${W/2-P(32)}" y="${P(146)}" width="${P(64)}" height="${P(3)}" rx="${P(1.5)}" fill="${acc}"/>`);
      }else if(!txt) g.push(bar(W*.3,P(90),W*.4,P(28),'rgba(255,255,255,.25)'));
      const bx=Math.round(W*.26), by=Math.round(P(186)), bw=Math.round(W*.48), bh=Math.round(P(170));
      g.push(`<rect x="${bx+.5}" y="${by+.5}" width="${bw-1}" height="${bh-1}" rx="${P(12)}" fill="#ffffff" fill-opacity="0.06" stroke="#ffffff" stroke-opacity="0.16"/><rect x="${bx+P(14)}" y="${by}" width="${bw-P(28)}" height="${P(2)}" fill="${acc}" fill-opacity="0.9"/>`);
      frameZ.push({k:'text',label:'Texto de introdução',x:bx+Math.round(P(24)),y:by+Math.round(P(20)),w:bw-Math.round(P(48)),h:bh-Math.round(P(40)),color:white});
      const bh2=Math.round(P(40)), n=pages.length, avail=W-2*P(40);
      const k1=Math.min(1,avail/Math.max(1,n*P(170)+(n-1)*P(16))), BW=Math.round(P(170)*k1), GP=Math.round(P(16)*k1), used=n*BW+(n-1)*GP;
      let x=o.navAlign==='middle'?(W-used)/2:o.navAlign==='bottom'?W-P(40)-used:P(40);
      const yb=Math.round(H-P(40)-bh2-(o.photoCredit?P(14):0)), btn=mix(t.A,'#000000',dark?.2:.3);
      pages.forEach(pg=>{
        const X=Math.round(x);
        g.push(`<rect x="${X}" y="${yb}" width="${BW}" height="${bh2}" rx="${bh2/2}" fill="${btn}"/>`);
        const ls=fit(pg.name,BW-P(24),FG*1.1);
        g.push(txt?tx(X+BW/2,yb+bh2/2+ls*.36,ls,white,pg.name,600,'middle','Page name'):bar(X+BW*.25,yb+bh2/2-P(3),BW*.5,P(6),'rgba(255,255,255,.4)'));
        navZ.push({k:'button',label:pg.name,x:X,y:yb,w:BW,h:bh2});
        x+=BW+GP;
      });
      if(o.photoCredit&&o.liveText) liveBox('Photo credit',o.photoCredit,P(40),H-P(18),Math.max(9,FG*.85),white,400,'start');
      else if(o.photoCredit) g.push(`<text x="${P(40)}" y="${H-P(18)}" font-size="${Math.max(9,FG*.85)}" fill="${white}" fill-opacity="0.7">${esc(o.photoCredit)}</text>`);
      if(o.footerLinks) g.push(socials(W-P(40),H-P(22),'end',false,white));
    }else if(o.menuStyle==='split'){
      const lw=Math.round(W*.38);
      g.push(`<rect width="${lw}" height="${H}" fill="${NF}"/>`);
      if(edge) g.push(`<rect x="${lw-1}" width="1" height="${H}" fill="${t.border}"/>`);
      g.push(menuBrand(P(40),P(34),t.navBg,t.navText));
      if(o.titleRaw&&String(o.titleRaw).trim()) g.push(txt?tx(P(40),H*.44,fit(o.title,lw-P(80),FT*2.8),t.navTextActive,o.title,700):'');
      else if(!txt) g.push(bar(P(40),H*.44-P(26),lw*.62,P(22),slotBar(true)));
      if(o.subtitle) g.push(txt?tx(P(40),H*.44+FG*2.8,FG*1.2,t.navText,o.subtitle):bar(P(40),H*.44+P(22),lw*.4,P(8),slotBar(false)));
      g.push(o.footerLinks?socials(P(40),H-P(40)-FG*.36,'start',false,t.navText):txt?tx(P(40),H-P(40),FG,t.navText,o.footer):bar(P(40),H-P(46),P(110),P(6),slotBar(false)));
      const x0=lw+P(48), x1=W-P(48), n=pages.length, rg=P(12);
      const rowH=Math.min(P(78),(H-P(96)-(n-1)*rg)/Math.max(1,n)), total=n*rowH+(n-1)*rg;
      let y=o.navAlign==='top'?P(48):o.navAlign==='bottom'?H-P(48)-total:(H-total)/2;
      pages.forEach((pg,i)=>{
        const rx=Math.round(x0), ry=Math.round(y), rw=Math.round(x1-x0), rh=Math.round(rowH);
        g.push(`<rect x="${rx+.5}" y="${ry+.5}" width="${rw-1}" height="${rh-1}" rx="${Math.min(rad,rh/2)}" fill="${t.card}" stroke="${t.border}"${filt}/>`);
        const ic=Math.min(P(40),rh-P(16));
        g.push(holder(rx+P(18)+ic/2,ry+rh/2,ic,mix(t.card,t.A,dark?.2:.12)));
        g.push(ico(i,rx+P(18)+ic/2,ry+rh/2,ic*.52,t.A));
        g.push(txt?tx(rx+P(30)+ic,ry+rh/2+P(6),fit(pg.name,rw-ic-P(90),FT*1.2),t.text,pg.name,600,'start','Page name'):bar(rx+P(30)+ic,ry+rh/2-P(4),P(140),P(8),t.faint));
        g.push(chev(rx+rw-P(26),ry+rh/2,t.sub,'right'));
        navZ.push({k:'button',label:pg.name,target:i,x:rx,y:ry,w:rw,h:rh});
        y+=rowH+rg;
      });
    }else{
      /* tiles (default) */
      g.push(menuBrand(P(40),P(34),t.canvas,t.text));
      if(o.titleRaw&&String(o.titleRaw).trim()) g.push(txt?tx(P(40),P(150),fit(o.title,W-P(80),FT*2.8),t.text,o.title,700):bar(P(40),P(120),W*.36,P(26),t.faint));
      else if(!txt) g.push(bar(P(40),P(120),W*.36,P(26),t.faint));
      if(o.subtitle) g.push(txt?tx(P(40),P(150)+FG*2.8,FG*1.2,t.sub,o.subtitle):bar(P(40),P(170),W*.2,P(9),t.faint));
      const x0=P(40), x1=W-P(40), y0=P(226), y1=H-P(64), n=pages.length, tg=P(16);
      const cols=Math.max(1,n<=4?n:Math.ceil(n/2)), rows=Math.max(1,Math.ceil(n/cols));
      const tw=(x1-x0-(cols-1)*tg)/cols, th=Math.min((y1-y0-(rows-1)*tg)/rows,tw*.85);
      const gh2=rows*th+(rows-1)*tg, yo=o.navAlign==='middle'?(y1-y0-gh2)/2:o.navAlign==='bottom'?(y1-y0-gh2):0;
      pages.forEach((pg,i)=>{
        const cx2=Math.round(x0+(i%cols)*(tw+tg)), cy2=Math.round(y0+yo+Math.floor(i/cols)*(th+tg)), w=Math.round(tw), h=Math.round(th);
        g.push(`<rect x="${cx2+.5}" y="${cy2+.5}" width="${w-1}" height="${h-1}" rx="${Math.min(rad,h/2)}" fill="${t.card}" stroke="${t.border}"${filt}/>`);
        const ic=P(46);
        g.push(holder(cx2+P(22)+ic/2,cy2+P(22)+ic/2,ic,mix(t.card,t.A,dark?.2:.12)));
        g.push(ico(i,cx2+P(22)+ic/2,cy2+P(22)+ic/2,P(24),t.A));
        g.push(chev(cx2+w-P(28),cy2+P(45),t.sub,'right'));
        g.push(txt?tx(cx2+P(22),cy2+h-P(40),fit(pg.name,w-P(44),FT*1.2),t.text,pg.name,600,'start','Page name'):bar(cx2+P(22),cy2+h-P(52),Math.min(w*.5,P(140)),P(10),t.faint));
        if(o.liveText&&txt) liveBox('Page description','Resumo da página',cx2+P(22),cy2+h-P(18),FG*.92,t.sub,400,'start');
        else g.push(bar(cx2+P(22),cy2+h-P(26),Math.min(w*.55,P(150)),P(6),t.faint));
        navZ.push({k:'button',label:pg.name,target:i,x:cx2,y:cy2,w,h});
      });
      g.push(o.footerLinks?socials(P(40),H-P(30)-FG*.36,'start',false,t.sub):txt?tx(P(40),H-P(30),FG,t.sub,o.footer):bar(P(40),H-P(36),P(110),P(6),t.faint));
    }
  }else{
    /* ---------- report page: navigation frame ---------- */
    if(nav==='wide'||nav==='float'||nav==='slim'||nav==='floatslim'){
      const sl=nav==='slim'||nav==='floatslim', fl=nav==='float'||nav==='floatslim';
      const nw=sideW(sl?DEFW.slim:DEFW.wide), fx=fl?pad:0, fy=fl?pad:0, fh=fl?H-2*pad:H;
      const m=sl?{ic:22,is:14,hs:22,lx:38,ih:30,st:36}:{ic:32,is:16,hs:26,lx:54,ih:34,st:40};
      const {ih,step}=navGeom(m);
      if(fl) g.push(`<rect x="${fx+.5}" y="${fy+.5}" width="${nw-1}" height="${fh-1}" rx="${panelRad}" fill="${NF}"${edge?` stroke="${t.border}"`:''}${filt}/>`);
      else{g.push(`<rect width="${nw}" height="${H}" fill="${NF}"/>`);if(edge) g.push(`<rect x="${nw-1}" width="1" height="${H}" fill="${t.border}"/>`)}
      const bs=fit(o.brand||'Marca',nw-P(70),FT);
      g.push(brandBlock(fx+P(sl?12:20),fy+P(18),nw-P(sl?24:40),logoH,NF,t.navTextActive,bs,t.navTextActive,slotBar(true)));
      const navStart=startY(fy+logoH+P(30),fy+fh-P(62),pages.length,step,ih,fy+fh/2);
      pages.forEach((pg,i)=>{
        const y=Math.round(navStart+i*step), on=i===page, ix=Math.round(fx+P(sl?8:12)), iw=Math.round(nw-P(sl?16:24));
        if(on) g.push(activeBrand(ix,y,iw,ih));
        if(o.showIcons){
          g.push(holder(fx+P(m.ic),y+ih/2,P(m.hs),on?mix(t.navActive,t.navActiveIcon,.14):mix(t.navBg,t.navActive,.35)));
          g.push(ico(i,fx+P(m.ic),y+ih/2,P(m.is),on?t.navActiveIcon:t.navText));
        }
        const lx=o.showIcons?fx+P(m.lx):fx+P(sl?16:24), ls=fit(pg.name,nw-(lx-fx)-P(12),navF);
        g.push(txt?tx(lx,y+ih/2+ls*.36,ls,on?t.navActiveInk:t.navText,pg.name,on?600:400):bar(lx,y+P(14),P(56+(i*23)%44),P(6),slotBar(on)));
        navZ.push({k:'nav',label:pg.name,x:ix,y,w:iw,h:ih});
      });
      const fyy=fy+fh-P(50);
      if(footerLogos||!o.footerLinks){
        g.push(`<rect x="${fx+P(20)}" y="${fyy}" width="${nw-P(40)}" height="1" fill="${mix(t.navBg,t.navText,.22)}"/>`);
        g.push(o.footerLinks?socials(fx+nw/2,fyy+P(25),'middle',false,t.navText):txt?tx(fx+P(20),fyy+P(26),fit(o.footer,nw-P(40),FG),t.navText,o.footer):bar(fx+P(20),fyy+P(20),P(96),P(6),slotBar(false)));
      }
      cx=fx+nw+pad; cw=W-cx-pad;
    }else if(nav==='rail'||nav==='topside'){
      const nw=sideW(DEFW.rail); let ry=0;
      if(nav==='topside'){
        ry=Math.round(P(52));
        g.push(`<rect width="${W}" height="${ry}" fill="${NF}"/><rect y="${ry}" width="${nw}" height="${H-ry}" fill="${NF}"/>`);
        if(edge) g.push(`<path d="M${W} ${ry-.5}H${nw-.5}V${H}" fill="none" stroke="${t.border}"/>`);
        g.push(brandBlock(P(12),0,W*.2,ry,NF,t.navTextActive,FT,t.navTextActive,slotBar(true)));
        if(o.titleRaw&&String(o.titleRaw).trim()&&txt) g.push(tx(W-pad,ry/2+FG*.36,FG,t.navText,o.title,400,'end'));
      }else{
        g.push(`<rect width="${nw}" height="${H}" fill="${NF}"/>`);
        if(edge) g.push(`<rect x="${nw-1}" width="1" height="${H}" fill="${t.border}"/>`);
        if(o.showLogo) g.push((o.logoImages||[]).length||o.logo==='placeholder'?logoArea(P(8),P(14),nw-P(16),logoH,t.navBg,t.navText):logo((nw-P(30))/2,P(18),P(30)));
      }
      const linkH=footerLogos?2*SI+SG+P(16):0;
      if(o.footerLinks) g.push(socials(nw/2,H-P(18)-2*SI-SG,'middle',true,t.navText));
      const {ih,step}=navGeom({ih:40,st:48});
      const start=startY(nav==='topside'?ry+P(18):P(76),H-P(20)-linkH,pages.length,step,ih,(ry+H-linkH)/2);
      pages.forEach((pg,i)=>{
        const y=Math.round(start+i*step), on=i===page, ix=Math.round(P(12)), iw=nw-2*ix;
        if(on) g.push(activeBrand(ix,y,iw,ih));
        g.push(holder(nw/2,y+ih/2,P(30),on?mix(t.navActive,t.navActiveIcon,.14):mix(t.navBg,t.navActive,.35)));
        g.push(ico(i,nw/2,y+ih/2,P(18),on?t.navActiveIcon:t.navText));
        navZ.push({k:'nav',label:pg.name,x:ix,y,w:iw,h:ih});
      });
      cx=nw+pad; cw=W-nw-2*pad; cy=ry+pad; ch=H-ry-2*pad;
    }else if(nav==='notch'){
      const tabR=o.tabRadius||12, nw=sideW(DEFW.notch), px=nw;
      const py=pad+H*(o.panelTop||0)/100, pw=W-nw-pad-W*(o.panelRight||0)/100, ph=H-py-pad-H*(o.panelBottom||0)/100;
      const pr=o.panelRadius!=null?P(o.panelRadius):P(Math.max(o.radius,tabR,10));
      g.push(`<rect width="${W}" height="${H}" fill="${NF}"/>`);
      g.push(`<rect x="${px}" y="${py}" width="${pw}" height="${ph}" rx="${pr}" fill="${t.canvas}"/>`);
      g.push(brandBlock(P(14),pad+P(8),nw-P(28),logoH,t.navBg,t.navText,P(18)/1.5,t.navTextActive,slotBar(true)));
      const {ih,step}=navGeom({ih:40,st:48}), rr=Math.min(P(tabR),ih/2), fr=Math.min(P(tabR),P(24)), x0=Math.round(P(14));
      const st=startY(pad+logoH+P(36),H-pad-P(70),pages.length,step,ih,H/2);
      pages.forEach((pg,i)=>{
        const y=Math.round(st+i*step), on=i===page;
        if(on){
          g.push(`<path d="M${px+2} ${y}H${x0+rr}Q${x0} ${y} ${x0} ${y+rr}V${y+ih-rr}Q${x0} ${y+ih} ${x0+rr} ${y+ih}H${px+2}Z" fill="${t.canvas}"/>`);
          g.push(`<rect x="${px-fr}" y="${y-fr}" width="${fr+1}" height="${fr}" fill="${t.canvas}"/><circle cx="${px-fr}" cy="${y-fr}" r="${fr}" fill="${NF}"/>`);
          g.push(`<rect x="${px-fr}" y="${y+ih}" width="${fr+1}" height="${fr}" fill="${t.canvas}"/><circle cx="${px-fr}" cy="${y+ih+fr}" r="${fr}" fill="${NF}"/>`);
        }
        if(o.showIcons) g.push(ico(i,x0+P(22),y+ih/2,P(16),on?t.A:t.navText));
        const lx=o.showIcons?x0+P(42):x0+P(16), ls=fit(pg.name,px-lx-P(28),navF);
        g.push(txt?tx(lx,y+ih/2+ls*.36,ls,on?t.text:t.navText,pg.name,on?600:400):bar(lx,y+ih/2-P(3),P(70),P(6),on?t.faint:slotBar(false)));
        navZ.push({k:'nav',label:pg.name,x:x0,y,w:px-x0,h:ih});
      });
      g.push(o.footerLinks?socials(nw/2,H-pad-P(18)-FG*.36,'middle',false,t.navText):txt?tx(P(18),H-pad-P(18),fit(o.footer,nw-P(30),FG),t.navText,o.footer):bar(P(18),H-pad-P(24),P(90),P(6),slotBar(false)));
      cx=px+pad; cy=py+pad; cw=pw-2*pad; ch=ph-2*pad;
    }else if(nav==='folder'){
      const tabR=o.tabRadius||12, nh=Math.round(P(64)), th=Math.round(P(38)), rr=Math.min(P(tabR),th/2), gapT=P(4), lw=P(160);
      const br=tabR>=20?Math.min(P(tabR)*.8,nh/2):0;
      g.push(br?`<path d="M0 ${nh}V${br}Q0 0 ${br} 0H${W-br}Q${W} 0 ${W} ${br}V${nh}Z" fill="${NF}"/>`:`<rect width="${W}" height="${nh}" fill="${NF}"/>`);
      if(o.showLogo&&((o.logoImages||[]).length||o.logo==='placeholder')) g.push(logoArea(W-pad-lw,P(12),lw,P(40),t.navBg,t.navText));
      else if(o.showLogo) g.push(logo(W-pad-P(28),(nh-P(28))/2,P(28))+(txt&&o.brand?tx(W-pad-P(38),nh/2+FT*.36,FT,t.navTextActive,o.brand,600,'end','Company'):''));
      else if(txt&&o.brand) g.push(tx(W-pad,nh/2+FT*.36,FT,t.navTextActive,o.brand,600,'end','Company'));
      const linkW=footerLogos?2*SI+SG+P(20):0;
      if(o.footerLinks) g.push(socials(W-pad-lw-P(16),nh/2,'end',false,t.navTextActive));
      const icw=o.showIcons?P(22):0, left=pad+P(20), avail=W-pad-lw-P(24)-left-linkW;
      const raw0=pages.map(pg=>(txt?pg.name.length*FG*.56+P(40):P(110))+icw), raw=o.autoNav?raw0.map(()=>Math.max(...raw0)):raw0;
      const tot=raw.reduce((a,b)=>a+b,0)+gapT*(pages.length-1), kf=Math.min(1,avail/Math.max(1,tot)), used=tot*kf;
      let x=o.navAlign==='middle'?left+(avail-used)/2:o.navAlign==='bottom'?left+avail-used:left;
      const inactive=mix(t.navBg,'#ffffff',dark?.08:.16), fs=navF*Math.min(1,kf*1.04);
      pages.forEach((pg,i)=>{
        const w=raw[i]*kf, on=i===page, X=Math.round(x), Wd=Math.round(w), y0=Math.round(on?nh-th:nh-th+P(6));
        g.push(`<path d="M${X} ${nh+1}V${y0+rr}Q${X} ${y0} ${X+rr} ${y0}H${X+Wd-rr}Q${X+Wd} ${y0} ${X+Wd} ${y0+rr}V${nh+1}Z" fill="${on?t.canvas:inactive}"/>`);
        const yc=(y0+nh)/2, ik=icw*kf;
        if(o.showIcons) g.push(ico(i,X+P(20)*kf,yc,P(14)*Math.min(1,kf*1.04),on?t.A:t.navTextActive));
        g.push(txt?tx(X+ik+(Wd-ik)/2,yc+fs*.36,fs,on?t.text:t.navTextActive,pg.name,on?600:400,'middle'):bar(X+ik+P(14),yc-P(3),Wd-ik-P(28),P(6),on?t.faint:slotBar(true)));
        navZ.push({k:'nav',label:pg.name,x:X,y:y0,w:Wd,h:nh-y0});
        x+=w+gapT*kf;
      });
      cy=nh+pad; ch=H-nh-2*pad;
    }else if(nav==='filters'){
      const nw=sideW(DEFW.filters), fx=pad, fy=pad, fh=H-2*pad;
      g.push(`<rect x="${fx+.5}" y="${fy+.5}" width="${nw-1}" height="${fh-1}" rx="${panelRad}" fill="${NF}"${edge?` stroke="${t.border}"`:''}${filt}/>`);
      let yy=fy+P(16);
      g.push(brandBlock(fx+P(16),yy,nw-P(32),logoH,t.navBg,t.navText,FT,t.navTextActive,slotBar(true)));
      yy+=logoH+P(20);
      const cols=Math.max(1,Math.min(4,pages.length)), bs=P(36), bgp=P(8), rowW=cols*bs+(cols-1)*bgp, bx0=fx+(nw-rowW)/2, B=Math.round(bs);
      pages.forEach((pg,i)=>{
        const bx=Math.round(bx0+(i%cols)*(bs+bgp)), by=Math.round(yy+Math.floor(i/cols)*(bs+bgp)), on=i===page;
        if(on) g.push(o.activeStyle==='bar'
          ?`<rect x="${bx+P(6)}" y="${by+B-P(3)}" width="${B-P(12)}" height="${P(3)}" rx="${P(1.5)}" fill="${t.navIcon}"/>`
          :`<rect x="${bx}" y="${by}" width="${B}" height="${B}" rx="${Math.min(rad,B/2)}" fill="${t.navActive}"/>`);
        g.push(ico(i,bx+B/2,by+B/2,P(18),on?t.navActiveIcon:t.navText));
        navZ.push({k:'nav',label:pg.name,x:bx,y:by,w:B,h:B});
      });
      yy+=Math.ceil(pages.length/cols)*(bs+bgp)+P(10);
      g.push(`<rect x="${fx+P(16)}" y="${yy}" width="${nw-P(32)}" height="1" fill="${mix(t.navBg,t.navText,.22)}"/>`);
      yy+=P(18);
      const footY=fy+fh-P(46), stepF=P(58), n=Math.min(o.filterSlots||4,Math.max(0,Math.floor((footY-yy)/stepF)));
      for(let k2=0;k2<n;k2++){
        const ly=yy+k2*stepF, sx=Math.round(fx+P(16)), sy=Math.round(ly+P(20)), sw=Math.round(nw-P(32)), sh=Math.round(P(30));
        const boxBg=dark?mix(t.navBg,'#ffffff',.08):'#ffffff';
        const slot={k:'slicer',label:`Filtro ${k2+1}`,x:sx,y:Math.round(ly),w:sw,h:Math.round(sy+sh-ly),headerColor:t.navTextActive,itemBg:boxBg,itemColor:dark?'#ffffff':t.text};
        if(o.forPbip){frameZ.push(slot);continue}
        g.push(txt?tx(sx,ly+FG,FG,t.navTextActive,`Filtro ${k2+1}`,600):bar(sx,ly+P(4),P(60),P(6),slotBar(true)));
        g.push(`<rect x="${sx+.5}" y="${sy+.5}" width="${sw-1}" height="${sh-1}" rx="${Math.min(rad,P(6))}" fill="${boxBg}" stroke="${mix(t.navBg,t.navText,.25)}"/>`);
        g.push(txt?`<text x="${sx+P(10)}" y="${(sy+sh/2+FG*.36).toFixed(1)}" font-size="${FG}" fill="${dark?'#ffffff':t.text}">Todos</text>`:bar(sx+P(10),sy+sh/2-P(3),P(28),P(6),mix(boxBg,t.text,.15)));
        g.push(chev(sx+sw-P(14),sy+sh/2,dark?t.navText:t.sub,'down'));
        frameZ.push(slot);
      }
      g.push(o.footerLinks?socials(fx+nw/2,fy+fh-P(24),'middle',false,t.navText):txt?tx(fx+nw/2,fy+fh-P(20),fit(o.footer,nw-P(24),FG),t.navText,o.footer,400,'middle'):bar(fx+(nw-P(96))/2,fy+fh-P(26),P(96),P(6),slotBar(false)));
      cx=fx+nw+pad; cw=W-cx-pad;
    }else if(nav==='capsule'){
      const nw=sideW(DEFW.capsule), fx=pad, fy=pad, fh=H-2*pad, cxr=fx+nw/2;
      g.push(`<rect x="${fx+.5}" y="${fy+.5}" width="${nw-1}" height="${fh-1}" rx="${nw/2}" fill="${NF}"${edge?` stroke="${t.border}"`:''}${filt}/>`);
      if(o.showLogo) g.push(logoArea(fx+P(4),fy+P(6),nw-P(8),Math.min(logoH,nw),t.navBg,t.navText)||logo(cxr-P(16),fy+P(18),P(32)));
      const {ih,step}=navGeom({ih:40,st:56}), D=Math.round(ih), stp=step;
      const st=startY(fy+P(76),fy+fh-P(130),pages.length,stp,D,H/2);
      pages.forEach((pg,i)=>{
        const y=Math.round(st+i*stp), on=i===page, bx=Math.round(cxr-D/2), bar_=o.activeStyle==='bar';
        if(on) g.push(bar_
          ?`<rect x="${fx+P(3)}" y="${y+P(8)}" width="${P(3)}" height="${D-P(16)}" rx="${P(1.5)}" fill="${t.A}"/>`
          :`<circle cx="${cxr}" cy="${y+D/2}" r="${D/2}" fill="${t.navActive}"/>`);
        g.push(ico(i,cxr,y+D/2,P(18),on?t.navActiveIcon:t.navText));
        navZ.push({k:'nav',label:pg.name,x:bx,y,w:D,h:D});
      });
      if(footerLogos) g.push(socials(cxr,fy+fh-P(24)-2*SI-SG,'middle',true,t.navText));
      else if(o.showFooterLogos){g.push(icon('globe',cxr,fy+fh-P(82),P(18),t.navText,o));g.push(icon('info',cxr,fy+fh-P(34),P(18),t.navText,o))}
      cx=fx+nw+pad; cw=W-cx-pad;
    }else if(nav==='top'){
      const nh=Math.round(P(56));
      g.push(`<rect width="${W}" height="${nh}" fill="${NF}"/>`);
      if(edge) g.push(`<rect y="${nh-1}" width="${W}" height="1" fill="${t.border}"/>`);
      if(o.showLogo&&((o.logoImages||[]).length||o.logo==='placeholder')) g.push(logoArea(pad,(nh-P(36))/2,P(166),P(36),t.navBg,t.navText));
      else if(o.showLogo) g.push(logo(pad,(nh-P(26))/2,P(26))+(txt&&o.brand?tx(pad+P(36),nh/2+FT*.36,fit(o.brand,P(140),FT),t.navTextActive,o.brand,600,'start','Company'):''));
      else if(txt&&o.brand) g.push(tx(pad,nh/2+FT*.36,fit(o.brand,P(140),FT),t.navTextActive,o.brand,600,'start','Company'));
      const linkW=footerLogos?2*SI+SG+P(20):0;
      let x=pad+P(190);
      if(o.footerLinks) g.push(socials(W-pad,nh/2,'end',false,t.navText));
      const icw=o.showIcons?P(22):0, fs0=navF, raw0=pages.map(pg=>(txt?pg.name.length*fs0*.56+P(30):P(96))+icw), raw=o.autoNav?raw0.map(()=>Math.max(...raw0)):raw0, tot=raw.reduce((a,b)=>a+b,0);
      const kf=Math.min(1,(W-pad-linkW-x)/Math.max(1,tot)), fs=fs0*Math.min(1,kf*1.04), used=tot*kf;
      if(o.navAlign==='middle') x=Math.max(x,(W-linkW-used)/2); else if(o.navAlign==='bottom') x=Math.max(x,W-pad-linkW-used);
      pages.forEach((pg,i)=>{
        const w=raw[i]*kf, on=i===page, ik=icw*kf;
        if(on) g.push(o.activeStyle==='bar'
          ?`<rect x="${x+P(8)}" y="${nh-P(3)}" width="${w-P(16)}" height="${P(3)}" fill="${t.navIcon}"/>`
          :`<rect x="${x+P(4)}" y="${nh/2-P(15)}" width="${w-P(8)}" height="${P(30)}" rx="${Math.min(P(o.radius),P(15))}" fill="${t.navActive}"/>`);
        if(o.showIcons) g.push(ico(i,x+P(22)*kf,nh/2,P(15)*Math.min(1,kf*1.04),on?t.navActiveIcon:t.navText));
        g.push(txt?tx(x+ik+(w-ik)/2,nh/2+fs*.36,fs,on?t.navActiveInk:t.navText,pg.name,on?600:400,'middle'):bar(x+ik+P(15)*kf,nh/2-P(3),w-ik-P(30)*kf,P(6),slotBar(on)));
        navZ.push({k:'nav',label:pg.name,x:Math.round(x),y:0,w:Math.round(w),h:nh});
        x+=w;
      });
      cy=nh+pad; ch=H-nh-2*pad;
    }else if(footerLogos){
      g.push(socials(W-pad,H-pad-SI/2,'end',false,t.sub));
      ch-=SI+pad;
    }
    /* panel offsets: extra indent from the top, right and bottom, added to the default content frame */
    if(nav!=='notch'){
      cy+=H*(o.panelTop||0)/100; cw-=W*(o.panelRight||0)/100; ch-=H*(o.panelBottom||0)/100+H*(o.panelTop||0)/100-H*(o.panelTop||0)/100;
    }
    const headerText=[o.title,o.subtitle].filter(v=>v&&String(v).trim()).join(' · ');
    const showHeader=o.header&&Boolean(headerText);
    let hS=t.sub, lateBg=t.canvas, lateFg=t.text;
    if(o.band&&nav!=='notch'){
      const bc=dark?mix(t.A,'#000000',.55):(o.sidebar==='brand'||o.sidebar==='accent'?t.navBg:mix(t.A,'#000000',.25));
      const bx=Math.round(cx-pad), by=(nav==='top'||nav==='folder'||nav==='topside')?Math.round(cy-pad):0;
      const bh=Math.round(cy+(showHeader?P(54):0)+P(80)-by);
      g.push(`<rect x="${bx}" y="${by}" width="${W-bx}" height="${bh}" fill="${o.navFill==='gradient'?NF:bc}"/>`);
      const hT=onColor(bc)==='#ffffff'?'#ffffff':t.text;
      hS=mix(hT,bc,.3); lateBg=bc; lateFg=hT;
    }
    late.forEach(f=>g.push(f(lateBg,lateFg)));
    let top=Math.round(cy);
    if(showHeader){
      if(txt) g.push(tx(cx,cy+FG,FG,hS,headerText,400,'start','Subtitle'));
      else g.push(bar(cx,cy+P(7),P(150),P(7),t.faint));
      top=Math.round(cy+FG+P(14));
    }
    const X=Math.round(cx), Y=top, GW=Math.round(cw), GH=Math.round(cy+ch-top);
    const cu=(GW-(N-1)*gap)/N, ru=(GH-(N-1)*gap)/N;
    grid={X,Y,W:GW,H:GH,cu,ru,gap};
    (cards||[]).forEach(cd=>{
      const x=Math.round(X+cd.c*(cu+gap)), y=Math.round(Y+cd.r*(ru+gap));
      const x2=Math.round(X+(cd.c+cd.cs)*(cu+gap)-gap), y2=Math.round(Y+(cd.r+cd.rs)*(ru+gap)-gap);
      zones.push({k:cd.k,x,y,w:Math.max(4,x2-x),h:Math.max(4,y2-y)});
    });
    (o.forPbip?[]:zones).forEach(z=>{
      const {x,y,w,h,k:kd}=z;
      let fill=t.cardFill, rr=Math.min(rad,h/2,w/2);
      if(kd==='hero') fill=t.heroFill;
      if(kd==='text') fill=mix(t.cardFill,t.canvas,.45);
      if(kd==='slicer') rr=Math.min(rad,P(8),h/2);
      const f=o.shadow&&kd!=='text'?filt:'';
      g.push(`<rect x="${x+.5}" y="${y+.5}" width="${w-1}" height="${h-1}" rx="${rr}" fill="${fill}" stroke="${t.cardBorder}" stroke-width="1"${f}/>`);
      if(kd==='slicer') g.push(chev(x+w-P(18),h>P(60)?y+P(17):y+h/2,t.cardSub,'down'));
      else if(o.cardStyle==='band'&&(kd==='chart'||kd==='table'||kd==='map')&&h>P(110)){
        const bh=P(36), q=Math.max(0,rr-1), X0=x+1, X1=x+w-1, Y0=y+1;
        g.push(`<path d="M${X0} ${y+bh}V${Y0+q}Q${X0} ${Y0} ${X0+q} ${Y0}H${X1-q}Q${X1} ${Y0} ${X1} ${Y0+q}V${y+bh}Z" fill="${t.band}"/><rect x="${X0}" y="${y+bh}" width="${w-2}" height="1" fill="${t.border}"/>`);
      }else if(o.cardStyle==='tab'&&kd!=='text'&&h>P(34)){
        g.push(`<rect x="${x+P(14)}" y="${y+P(14)}" width="${P(3)}" height="${Math.min(P(16),h-P(28))}" rx="${P(1.5)}" fill="${t.cardAccent}"/>`);
      }
    });
  }
  g.push('</svg>');
  return {svg:g.join(''),zones,navZ,grid,t,logoZ,frameZ,textZ,imgZ:null,navigatorZ:null,socialZ};
}

/* ============ theme colour slots ============ */
function themeSlots(p,o){
  const t=tokens(p,o), dark=o.mode==='dark', A=t.A;
  const second=p.div[0].toLowerCase()===p.seq[3].toLowerCase()?p.div[4]:p.div[0];
  const cand=[A,second,darkest(p.seq),p.seq[2],p.div[3],t.sub,p.div[1],dark?mix(A,'#ffffff',.45):p.seq[1]];
  const visible=c=>Math.abs(lum(c)-lum(t.cardFill))<.06?mix(c,dark?'#ffffff':'#000000',.35):c;
  const data=[];
  cand.forEach(c=>{let x=visible(c.toLowerCase()),kk=0;while(data.includes(x)&&kk<5){x=mix(x,dark?'#ffffff':'#000000',.18);kk++}data.push(x)});
  const hsv=c=>{const [r0,g0,b0]=hex2rgb(c).map(v=>v/255),mx=Math.max(r0,g0,b0),mn=Math.min(r0,g0,b0),d=mx-mn;let h=0;if(d){h=mx===r0?((g0-b0)/d)%6:mx===g0?(b0-r0)/d+2:(r0-g0)/d+4;h=(h*60+360)%360}return {h,s:mx?d/mx:0}};
  const hueGap=(a,b)=>{const x=Math.abs(a-b)%360;return Math.min(x,360-x)};
  const mainHue=hsv(A).h, isWarm=h=>h<75||h>=330;
  const group=c=>{const v=hsv(c);return v.s<.15?1:hueGap(v.h,mainHue)<=45?0:isWarm(v.h)?3:2};
  const inGroup=(a,b)=>dark?Math.abs(lum(a)-lum(A))-Math.abs(lum(b)-lum(A)):lum(a)-lum(b);
  const byTheme=arr=>arr.slice().sort((a,b)=>group(a)-group(b)||inGroup(a,b));
  const pale=data.filter(c=>contrast(c,t.cardFill)<2.5), firm=data.filter(c=>!pale.includes(c));
  const sl={
    data:[...byTheme(firm),...byTheme(pale)],
    firstLevel:t.cardInk, secondLevel:t.cardSub, thirdLevel:mix(t.cardSub,t.cardFill,.55), fourthLevel:mix(t.cardSub,t.cardFill,.3),
    background:t.cardFill, secondaryBackground:dark?mix(t.card,'#ffffff',.07):mix(t.canvas,t.border,.5),
    tableAccent:A, negative:p.div[0], positive:p.div[4], neutral:t.sub,
    max:p.div[4], middle:p.div[2], min:p.div[0]
  };
  const rv=S.slotReverse||{};
  if(rv.data) sl.data=sl.data.slice().reverse();
  if(rv.structural){
    [sl.firstLevel,sl.fourthLevel]=[sl.fourthLevel,sl.firstLevel];
    [sl.secondLevel,sl.thirdLevel]=[sl.thirdLevel,sl.secondLevel];
    [sl.background,sl.secondaryBackground]=[sl.secondaryBackground,sl.background];
  }
  if(rv.sentiment) [sl.negative,sl.positive]=[sl.positive,sl.negative];
  if(rv.divergent) [sl.min,sl.max]=[sl.max,sl.min];
  Object.entries(S.slotOverrides||{}).forEach(([kk,v])=>{if(/^data\d$/.test(kk)) sl.data[+kk.slice(4)]=v; else if(kk in sl) sl[kk]=v});
  return sl;
}
function mergeTheme(base,add){
  const isObj=v=>v&&typeof v==='object'&&!Array.isArray(v);
  const merge=(a,b)=>{const out={...a};Object.keys(b).forEach(kk=>{out[kk]=isObj(a[kk])&&isObj(b[kk])?merge(a[kk],b[kk]):b[kk]});return out};
  const {name,...rest}=add||{};
  return merge(base,rest);
}
function addonSummary(th){
  const parts=Object.keys(th).filter(kk=>kk!=='name'&&kk!=='visualStyles');
  const vs=th.visualStyles||{};
  Object.keys(vs).forEach(v=>Object.keys(vs[v]||{}).forEach(st=>{
    const props=Object.keys((vs[v]||{})[st]||{});
    if(props.length) parts.push(`${props.join(', ')} em ${v==='*'?'todos os visuais':v}`);
  }));
  return parts.length?parts.join(' · '):'nenhuma configuração encontrada';
}
function themeJSON(p,o){
  const t=tokens(p,o), sl=themeSlots(p,o);
  const base={
    name:`Backplate ${p.custom?'Custom':p.name} ${o.mode}`,
    dataColors:sl.data,
    firstLevelElements:sl.firstLevel, secondLevelElements:sl.secondLevel, thirdLevelElements:sl.thirdLevel, fourthLevelElements:sl.fourthLevel,
    background:sl.background, secondaryBackground:sl.secondaryBackground, tableAccent:sl.tableAccent,
    foreground:sl.firstLevel, foregroundNeutralSecondary:sl.secondLevel, foregroundNeutralTertiary:sl.thirdLevel, backgroundLight:sl.secondaryBackground, backgroundNeutral:sl.fourthLevel,
    bad:sl.negative, good:sl.positive, neutral:sl.neutral, maximum:sl.max, center:sl.middle, minimum:sl.min,
    textClasses:{
      callout:{fontFace:o.fontFamilyCallout||'Segoe UI Semibold',fontSize:o.fontCallout||24,color:sl.firstLevel},
      title:{fontFace:o.fontFamilyTitle||'Segoe UI Semibold',fontSize:o.fontTitle||14,color:sl.firstLevel},
      header:{fontFace:o.fontFamilyTitle||'Segoe UI Semibold',fontSize:o.fontTitle||14,color:sl.firstLevel},
      label:{fontFace:o.fontFamilyGeneral||'Segoe UI',fontSize:o.fontGeneral||12,color:sl.secondLevel}
    },
    visualStyles:{
      '*':{'*':{background:[{show:false}],border:[{show:false}],dropShadow:[{show:false}]}},
      page:{'*':{outspace:[{color:{solid:{color:t.canvas}}}]}}
    }
  };
  return JSON.stringify(S.addon&&S.addon.theme?mergeTheme(base,S.addon.theme):base,null,2);
}

/* ============ state & storage ============ */
const DEF={
  view:'frames',group:'industry',pal:'finance',nav:'wide',mode:'light',size:'1920x1080',customSize:false,customW:1920,customH:1080,
  fontGeneral:12,fontTitle:14,fontCallout:24,fontFamilyGeneral:'Segoe UI',fontFamilyTitle:'Segoe UI',fontFamilyCallout:'Segoe UI',
  sidebar:'brand',cardStyle:'plain',cardTone:'paper',radius:8,shadow:true,texture:'none',text:true,header:true,
  title:'',brand:'',subtitle:'',footer:'Confidencial · Uso interno',footerLinks:true,showFooterLogos:true,textInk:'auto',accent:null,
  pages:null,page:'menu',menuStyle:'tiles',cards:{},kind:'chart',snap:2,labels:false,
  iconStyle:'outline',iconWeight:2,iconHolder:'none',showIcons:true,pbipText:'live',pageNames:'auto',
  slotOverrides:{},slotReverse:{},photoCredit:'',photoFit:'fill',imgSide:'right',photoBlur:6,photoDim:.5,photoPages:false,photoData:null,
  imgPal:null,imgDiv:null,navAlign:'top',navInk:'auto',tabRadius:12,navFill:'solid',activeStyle:'fill',band:false,filterSlots:4,
  logo:'placeholder',showLogo:true,logoImages:[],logoIcon:'bars',
  navW:null,navStart:null,navGap:null,navItemH:null,navFontPct:100,logoHPct:null,
  panelTop:null,panelRight:null,panelBottom:null,panelRadius:null,
  tourDone:false,addon:null,
};
let S=clone(DEF);
const IDB={
  db:null,
  open(){
    if(this.db) return Promise.resolve(this.db);
    return new Promise((res,rej)=>{
      try{const rq=indexedDB.open('backplate-gerador',1);rq.onupgradeneeded=()=>rq.result.createObjectStore('kv');rq.onsuccess=()=>res(this.db=rq.result);rq.onerror=()=>rej(rq.error)}
      catch(e){rej(e)}
    });
  },
  async run(mode,fn){const db=await this.open();return new Promise((res,rej)=>{const tx=db.transaction('kv',mode);const rq=fn(tx.objectStore('kv'));tx.oncomplete=()=>res(rq&&rq.result);tx.onerror=()=>rej(tx.error);tx.onabort=()=>rej(tx.error||new Error('Salvamento interrompido'))})},
};
async function storeGet(k){try{return await IDB.run('readonly',st=>st.get(k))}catch(e){try{return JSON.parse(localStorage.getItem('bp:'+k)||'null')}catch(err){return null}}}
async function storeSet(k,v){try{await IDB.run('readwrite',st=>st.put(v,k));return true}catch(e){try{localStorage.setItem('bp:'+k,JSON.stringify(v));return true}catch(err){return false}}}
async function storeDel(k){try{await IDB.run('readwrite',st=>st.delete(k))}catch(e){try{localStorage.removeItem('bp:'+k)}catch(err){}}}
let saveT=null, saveVersion=0;
function saveSoon(){
  clearTimeout(saveT);
  const version=++saveVersion;
  document.dispatchEvent(new CustomEvent('editor:save',{detail:'pending'}));
  saveT=setTimeout(async()=>{
    const {_thumb,...keep}=S;
    const saved=await storeSet('state',keep);
    if(version===saveVersion)document.dispatchEvent(new CustomEvent('editor:save',{detail:saved?'saved':'error'}));
  },300);
}

/* ============ helpers ============ */
const $=q=>document.querySelector(q);
const pal=()=>PALS.find(x=>x.id===S.pal)||PALS[0];
const dims=()=>S.size.split('x').map(Number);
const PRESET_SIZES=['1920x1080','1920x1280','1280x720','960x720'];
const paletteDefault=p=>p.pages.map((n,i)=>({id:uid(),name:n,icon:'',visible:true}));
function ensurePages(){if(!Array.isArray(S.pages)||!S.pages.length) S.pages=paletteDefault(pal())}
const allPages=()=>{ensurePages();return S.pages};
const navPages=()=>allPages().filter(x=>x.visible);
function curIdx(){
  if(S.page==='menu') return -1;
  const i=navPages().findIndex(x=>x.id===S.page);
  if(i<0){S.page='menu';return -1}
  return i;
}
const pageAt=i=>i<0?null:navPages()[i]||null;
const cardsOf=i=>{const pg=pageAt(i);return pg&&S.cards[pg.id]||[]};
function pageCards(){
  const pg=pageAt(curIdx());
  if(!pg) return [];
  S.cards[pg.id]=S.cards[pg.id]||[];
  return S.cards[pg.id];
}
function toast(msg){const el=$('#toast');el.classList.remove('link');el.textContent=msg;el.classList.add('on');clearTimeout(toast.h);toast.h=setTimeout(()=>el.classList.remove('on'),2600)}
function toastCoffee(msg){
  const el=$('#toast');
  el.innerHTML=`${esc(msg)} <button type="button" data-pix-open>Apoiar com Pix</button>`;
  el.classList.add('on','link');clearTimeout(toast.h);toast.h=setTimeout(()=>el.classList.remove('on','link'),8000);
}
const pixModal=$('#pixModal');
function openPix(){pixModal.classList.add('open');$('#pixClose').focus()}
function closePix(){pixModal.classList.remove('open')}
document.addEventListener('click',e=>{
  if(e.target.closest('[data-pix-open]')){e.preventDefault();openPix()}
  if(e.target.closest('#pixClose')||e.target===pixModal)closePix();
});
async function copy(text,msg){try{await navigator.clipboard.writeText(text);toast(msg)}catch(e){toast('A cópia foi bloqueada. Selecione o texto manualmente.')}}
async function saveFile(filename,data){
  const blob=data instanceof Blob?data:new Blob([data]);
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=filename;document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href),3000);toast('Baixado: '+filename);
}
function svgToPng(svg,W,H,scale){
  return new Promise((res,rej)=>{
    const img=new Image();
    img.onload=()=>{const cv=document.createElement('canvas');cv.width=W*scale;cv.height=H*scale;cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);cv.toBlob(b=>b?res(b):rej(),'image/png')};
    img.onerror=rej;
    img.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
  });
}
const slug=s=>String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')||'pagina';
const readFile=f=>new Promise((res,rej)=>{const rd=new FileReader();rd.onload=()=>res(rd.result);rd.onerror=rej;rd.readAsDataURL(f)});
function loadAsDataUrl(src,maxSide){
  return new Promise((res,rej)=>{
    const img=new Image();
    if(!/^data:/.test(src)) img.crossOrigin='anonymous';
    img.onload=()=>{
      try{
        const k=Math.min(1,maxSide/Math.max(img.naturalWidth,img.naturalHeight));
        const cv=document.createElement('canvas');
        cv.width=Math.max(1,Math.round(img.naturalWidth*k));cv.height=Math.max(1,Math.round(img.naturalHeight*k));
        cv.getContext('2d').drawImage(img,0,0,cv.width,cv.height);
        res(cv.toDataURL('image/jpeg',.84));
      }catch(e){rej(e)}
    };
    img.onerror=()=>rej(new Error('load'));
    img.src=src;
  });
}

/* ============ settings UI ============ */
const SLIDERS={
  nav:[
    ['navW','Largura da navegação','% da largura',5,30,.1,()=>DEFW[S.nav]||15.6],
    ['navStart','Posição do primeiro item','% da altura',0,60,.5,()=>14],
    ['navGap','Espaço entre itens','% da altura',0,12,.1,()=>1],
    ['navItemH','Altura do item','% da altura',1,12,.1,()=>4.7],
    ['navFontPct','Tamanho do texto da navegação','%',50,200,1,()=>100],
  ],
  logo:[['logoHPct','Altura do logotipo','% da altura',2,30,.1,()=>6.1]],
  panel:[
    ['panelTop','Recuo superior do painel','% da altura',0,30,.1,()=>0],
    ['panelRight','Margem direita do painel','% da largura',0,30,.1,()=>0],
    ['panelBottom','Margem inferior do painel','% da altura',0,30,.1,()=>0],
    ['panelRadius','Arredondamento do painel','px',0,60,1,()=>S.radius],
  ],
};
function buildSliders(){
  const mk=(list,host)=>{
    host.innerHTML=list.map(([key,label,unit,min,max,step])=>`<div class="rg"><div class="rgh"><span>${label}</span><output id="o_${key}"></output></div><input type="range" id="r_${key}" min="${min}" max="${max}" step="${step}" aria-label="${label} (${unit})"></div>`).join('');
    host.addEventListener('input',e=>{
      const inp=e.target.closest('input[type=range]'); if(!inp) return;
      const key=inp.id.slice(2), v=+inp.value;
      S[key]=v; syncSliders(); saveSoon(); scheduleUpdate();
    });
  };
  mk(SLIDERS.nav.map(x=>x),$('#navSliders'));
  mk(SLIDERS.logo,$('#logoSliders'));
  mk(SLIDERS.panel,$('#panelSliders'));
}
function syncSliders(){
  const all=[...SLIDERS.nav,...SLIDERS.logo,...SLIDERS.panel];
  all.forEach(([key,label,unit,min,max,step,def])=>{
    const inp=$('#r_'+key); if(!inp) return;
    const val=S[key]!=null?S[key]:(key==='navFontPct'?100:def());
    inp.value=val;
    inp.style.setProperty('--p',((val-min)/(max-min)*100)+'%');
    const out=$('#o_'+key);
    out.textContent=(S[key]==null&&key!=='navFontPct')?'Automático':(key==='panelRadius'?`${Math.round(val)} px`:key==='navFontPct'?`${Math.round(val)}%`:`${(+val).toFixed(1)}${unit.startsWith('%')?'%':''}`);
  });
}
let updT=null;
function scheduleUpdate(){clearTimeout(updT);updT=setTimeout(update,120)}

/* ============ pages editor ============ */
function drawPageEditor(){
  const list=allPages(), host=$('#pageList');
  host.innerHTML=list.map((pg,i)=>{
    const eff=pg.icon||autoIcon(pg.name,i);
    return `<div class="prow${pg.visible?'':' off'}${S.page===pg.id?' sel':''}" data-id="${pg.id}">
      <button type="button" class="eye" data-act="vis" aria-pressed="${pg.visible}" title="${pg.visible?'Ocultar página':'Mostrar página'}" aria-label="${pg.visible?'Ocultar página':'Mostrar página'}">${pg.visible
        ?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'
        :'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.9 17.9A10.9 10.9 0 0 1 12 19C5 19 2 12 2 12a18.5 18.5 0 0 1 5.1-6.9M9.9 4.2A10.9 10.9 0 0 1 12 4c7 0 10 8 10 8a18.5 18.5 0 0 1-2.2 3.2M1 1l22 22"/></svg>'}</button>
      <input type="text" class="pname" data-act="name" value="${esc(pg.name)}" aria-label="Nome da página ${i+1}">
      <button type="button" class="pic" data-pick-icon="page" title="${esc(ICONS[eff]?.name||ICONS.grid.name)}" aria-label="Escolher ícone da página ${esc(pg.name)}" aria-haspopup="dialog">${uiIcon(eff)}</button>
      <div class="acts">
        <button type="button" class="abtn" data-act="up" title="Mover para cima" aria-label="Mover para cima" ${i===0?'disabled':''}>↑</button>
        <button type="button" class="abtn" data-act="down" title="Mover para baixo" aria-label="Mover para baixo" ${i===list.length-1?'disabled':''}>↓</button>
        <button type="button" class="abtn" data-act="dup" title="Duplicar página" aria-label="Duplicar página">⧉</button>
        <button type="button" class="abtn del" data-act="del" title="Remover página" aria-label="Remover página">✕</button>
      </div>
    </div>`;
  }).join('');
}
function pageById(id){return allPages().find(x=>x.id===id)}
$('#pageList').addEventListener('input',e=>{
  if(e.target.dataset.act!=='name') return;
  const row=e.target.closest('.prow'), pg=pageById(row.dataset.id); if(!pg) return;
  pg.name=e.target.value; S.pagesCustom=true; saveSoon(); scheduleUpdate();
});
$('#pageList').addEventListener('click',e=>{
  const b=e.target.closest('[data-act]'); if(!b||b.tagName==='INPUT'||b.tagName==='SELECT') return;
  const row=b.closest('.prow'), id=row.dataset.id, list=allPages(), i=list.findIndex(x=>x.id===id), pg=list[i];
  const act=b.dataset.act;
  if(act==='vis'){pg.visible=!pg.visible;if(!pg.visible&&S.page===id) S.page='menu'}
  else if(act==='up'&&i>0){[list[i-1],list[i]]=[list[i],list[i-1]]}
  else if(act==='down'&&i<list.length-1){[list[i+1],list[i]]=[list[i],list[i+1]]}
  else if(act==='dup'){
    const cp={id:uid(),name:pg.name+' (cópia)',icon:pg.icon,visible:pg.visible};
    list.splice(i+1,0,cp);
    if(S.cards[pg.id]) S.cards[cp.id]=clone(S.cards[pg.id]);
    S.page=cp.id;
  }
  else if(act==='del'){
    if(list.length<=1){toast('Mantenha pelo menos uma página');return}
    if(!confirm(`Remover a página “${pg.name}”?`)) return;
    list.splice(i,1); delete S.cards[id];
    if(S.page===id) S.page='menu';
  }
  else return;
  S.pagesCustom=true; drawPageEditor(); update();
});
$('#newPage').addEventListener('click',()=>{
  const list=allPages(), np={id:uid(),name:`Página ${list.length+1}`,icon:'',visible:true};
  list.push(np); S.page=np.id; S.pagesCustom=true;
  drawPageEditor(); update();
  const inp=document.querySelector(`.prow[data-id="${np.id}"] .pname`); if(inp){inp.focus();inp.select()}
});

/* ============ logo images ============ */
function drawLogoThumbs(){
  const imgs=S.logoImages||[];
  $('#logoThumbs').innerHTML=imgs.length?imgs.map((im,i)=>`<div class="lthumb" data-id="${im.id}"><img src="${im.data}" alt="${esc(im.name)}"><button type="button" class="x" data-act="rm" aria-label="Remover ${esc(im.name)}">×</button><div class="mv"><button type="button" data-act="left" ${i===0?'disabled':''} aria-label="Mover para a esquerda">◀</button><button type="button" data-act="right" ${i===imgs.length-1?'disabled':''} aria-label="Mover para a direita">▶</button></div></div>`).join('')
    :`<p class="hint" style="grid-column:1/-1">Nenhuma imagem. A área mostra o espaço reservado ou a marca escolhida.</p>`;
  $('#logoIconBtn').innerHTML=uiIcon(S.logoIcon);
}
$('#logoThumbs').addEventListener('click',e=>{
  const b=e.target.closest('[data-act]'); if(!b) return;
  const id=b.closest('.lthumb').dataset.id, imgs=S.logoImages, i=imgs.findIndex(x=>x.id===id);
  if(b.dataset.act==='rm'){imgs.splice(i,1);toast('Imagem removida')}
  else if(b.dataset.act==='left'&&i>0){[imgs[i-1],imgs[i]]=[imgs[i],imgs[i-1]]}
  else if(b.dataset.act==='right'&&i<imgs.length-1){[imgs[i+1],imgs[i]]=[imgs[i],imgs[i+1]]}
  drawLogoThumbs(); update();
});
$('#logoAdd').addEventListener('click',()=>$('#logoFile').click());
$('#logoFile').addEventListener('change',async e=>{
  const files=[...(e.target.files||[])]; e.target.value='';
  for(const f of files){
    if(!/^image\/(png|jpeg|svg\+xml|webp)$/.test(f.type)){toast(`“${f.name}” não é PNG, JPG, SVG ou WEBP`);continue}
    if(f.size>3e6){toast(`“${f.name}” passa de 3 MB`);continue}
    if(S.logoImages.length>=8){toast('O limite é de 8 imagens por logotipo');break}
    S.logoImages.push({id:uid(),name:f.name,data:await readFile(f)});
  }
  S.logo=S.logo||'placeholder';
  drawLogoThumbs(); update();
});
$('#showLogoCk').addEventListener('change',e=>{S.showLogo=e.target.checked;update()});
$('#showFooterLogosCk').addEventListener('change',e=>{S.showFooterLogos=e.target.checked;update()});

/* ============ controls ============ */
function syncControls(){
  document.querySelectorAll('.seg[data-key]').forEach(seg=>{
    const v=String(S[seg.dataset.key]);
    seg.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.val===v?'true':'false'));
  });
  $('#showLogoCk').checked=!!S.showLogo;
  $('#showFooterLogosCk').checked=!!S.showFooterLogos;
  $('#footerTextRow').hidden=!!S.footerLinks;
  $('#size').value=S.customSize?'custom':S.size;
  $('#customSizeFields').hidden=!S.customSize;
  $('#customWidth').value=S.customW;$('#customHeight').value=S.customH;
  if(document.activeElement!==$('#title')) $('#title').value=S.title;
  if(document.activeElement!==$('#brand')) $('#brand').value=S.brand;
  if(document.activeElement!==$('#subtitle')) $('#subtitle').value=S.subtitle;
  if(document.activeElement!==$('#footer')) $('#footer').value=S.footer;
  $('#labels').checked=S.labels;
  $('#imgSwatches').innerHTML=(S.imgPal||[]).map(h=>`<button type="button" class="sw-pick" style="background:${h}" data-accent="${h}" aria-pressed="${h===S.accent}" aria-label="Usar ${h} como cor de destaque" title="${h}"></button>`).join('');
  if(document.activeElement!==$('#photoCredit')) $('#photoCredit').value=S.photoCredit||'';
  $('#photoRemove').disabled=!S.photoData;
  $('#photoUpload').textContent=S.photoData?'Substituir foto…':'Enviar foto…';
  ['fontGeneral','fontTitle','fontCallout'].forEach(f=>{if(document.activeElement!==$('#'+f)) $('#'+f).value=S[f]});
  ['fontFamilyGeneral','fontFamilyTitle','fontFamilyCallout'].forEach(f=>{if($('#'+f)&&document.activeElement!==$('#'+f)) $('#'+f).value=S[f]});
  $('#accentHex').textContent=S.accent||'paleta';
  $('#accentReset').hidden=!S.accent;
  $('#accent').value=S.accent||pal().seq[3];
  $('#logoIconBtn').innerHTML=uiIcon(S.logoIcon);
  syncSliders();
  drawLogoThumbs();
  const menuBtns=$('#menuFrames');
  if(!menuBtns.dataset.built){
    menuBtns.dataset.built='1';
    menuBtns.innerHTML=Object.entries(MENUS).map(([kk,mn])=>`<button type="button" data-val="${kk}" aria-pressed="false" title="${esc(mn.desc)}"><svg viewBox="0 0 34 23" aria-hidden="true"><rect x=".5" y=".5" width="33" height="22" rx="2" fill="none" stroke="currentColor" opacity=".5"/>${MENU_THUMB[kk]}</svg><span>${esc(mn.name)}</span></button>`).join('');
    const nf=$('#navFrames');
    nf.innerHTML=Object.entries(NAVS).map(([kk,nv])=>`<button type="button" data-val="${kk}" aria-pressed="false" title="${esc(nv.desc)}"><svg viewBox="0 0 34 23" aria-hidden="true"><rect x=".5" y=".5" width="33" height="22" rx="2" fill="none" stroke="currentColor" opacity=".5"/>${NAV_THUMB[kk]||''}</svg><span>${esc(nv.name)}</span></button>`).join('');
  }
  $('#fontFamilyGeneral').value=S.fontFamilyGeneral;
}
const PBI_FONTS=['Arial','Arial Black','Calibri','Cambria','Candara','Consolas','Constantia','Corbel','Courier New','DIN','Georgia','Segoe UI','Segoe UI Light','Tahoma','Times New Roman','Trebuchet MS','Verdana'];
['fontFamilyGeneral','fontFamilyTitle','fontFamilyCallout'].forEach(id=>{
  const el=$('#'+id); el.innerHTML=PBI_FONTS.map(f=>`<option value="${esc(f)}">${esc(f)}</option>`).join('');
  el.addEventListener('change',()=>{S[id]=el.value;update()});
});

function drawPalList(){
  const btn=p=>{
    const o=opts(p,S.mode), t=tokens(p,o), cols=themeSlots(p,o).data.slice(0,5);
    return `<button type="button" class="pal" data-pal="${p.id}" aria-pressed="${p.id===S.pal}"><span><b>${esc(S.group==='tone'?COLOR_NAME[p.id]||p.name:p.name)}</b><small>${esc(S.group==='tone'?p.name:p.tag)}</small></span><span class="ramp" style="background:${t.canvas}">${cols.map(h=>`<i style="background:${h}"></i>`).join('')}</span></button>`;
  };
  const toneOf=p=>{
    const [r0,g0,b0]=hex2rgb(p.seq[3]).map(v=>v/255), mx=Math.max(r0,g0,b0), mn=Math.min(r0,g0,b0), d=mx-mn;
    if(!d) return 'cool';
    let h=mx===r0?((g0-b0)/d)%6:mx===g0?(b0-r0)/d+2:(r0-g0)/d+4; h=(h*60+360)%360;
    return h<75||h>=330?'warm':'cool';
  };
  $('#pals').innerHTML=S.group==='tone'
    ?[['warm','Quentes'],['cool','Frias']].map(([kk,l])=>`<div class="palhead">${l}</div>`+PALS.filter(p=>toneOf(p)===kk).map(btn).join('')).join('')
    :PALS.filter(p=>p.g===S.group).map(btn).join('');
}
function pickPalette(id){
  const p=PALS.find(x=>x.id===id); if(!p) return;
  S.pal=id; S.accent=null; S.imgDiv=null; S.slotOverrides={};
  if(!S.pagesCustom){S.pages=paletteDefault(p)}
  if(S.group!=='tone'&&p.g!==S.group){S.group=p.g;drawPalList()}
  if(!allPages().some(x=>x.id===S.page)&&S.page!=='menu') S.page='menu';
  drawPageEditor(); syncControls(); update();
}

function rulers(W,H){
  const mx=W>=1920?480:W<=960?240:320, my=H>=1200?320:H>=1080?270:180;
  let a='',b='';
  for(let v=0;v<=W;v+=mx/4){const m=v%mx===0;a+=`<i class="t${m?' maj':''}" style="left:${v/W*100}%">${m?`<span>${v}</span>`:''}</i>`}
  for(let v=0;v<=H;v+=my/4){const m=v%my===0;b+=`<i class="t${m?' maj':''}" style="top:${v/H*100}%">${m?`<span>${v}</span>`:''}</i>`}
  $('#rx').innerHTML=a;$('#ry').innerHTML=b;
}
function setAccentVars(){
  const P0=effPal(pal(),S.accent), o=opts();
  const fix=(A,dark)=>dark?(lum(A)<.2?mix(A,'#ffffff',.35):A):(lum(A)>.3?mix(A,'#000000',.3):A);
  const al=fix(tokens(P0,{...o,mode:'light'}).A,false), ad=fix(tokens(P0,{...o,mode:'dark'}).A,true);
  const st=document.documentElement.style;
  st.setProperty('--report-accent',al);
}
const opts=(p=pal(),mode=S.mode)=>{
  const list=navPages();
  return {mode,sidebar:S.sidebar,cardStyle:S.cardStyle,cardTone:S.cardTone,radius:S.radius,shadow:S.shadow,texture:S.texture,text:S.text,header:S.header,
    brand:S.brand,title:S.title,titleRaw:S.title,subtitle:S.subtitle,footer:S.footer,footerLinks:S.footerLinks,showFooterLogos:S.showFooterLogos,textInk:S.textInk,menuStyle:S.menuStyle,
    pages:list.map(x=>({name:x.name,id:x.id})),icons:list.map((x,i)=>x.icon||autoIcon(x.name,i)),
    iconStyle:S.iconStyle,iconWeight:S.iconWeight,iconHolder:S.iconHolder,showIcons:S.showIcons,showLogo:S.showLogo,logo:S.logo,logoIcon:S.logoIcon,logoImages:S.logoImages,
    fontGeneral:S.fontGeneral,fontTitle:S.fontTitle,fontCallout:S.fontCallout,fontFamilyGeneral:S.fontFamilyGeneral,fontFamilyTitle:S.fontFamilyTitle,fontFamilyCallout:S.fontFamilyCallout,
    navAlign:S.navAlign,navFill:S.navFill,activeStyle:S.activeStyle,band:S.band,filterSlots:S.filterSlots,navInk:S.navInk,tabRadius:S.tabRadius,
    navW:S.navW,navStart:S.navStart,navGap:S.navGap,navItemH:S.navItemH,navFontPct:S.navFontPct,logoHPct:S.logoHPct,
    panelTop:S.panelTop,panelRight:S.panelRight,panelBottom:S.panelBottom,panelRadius:S.panelRadius,
    photoData:S.photoData,photoBlur:S.photoBlur,photoDim:S.photoDim,photoPages:S.photoPages,photoCredit:S.photoCredit,photoFit:S.photoFit,imgSide:S.imgSide,
    autoNav:S.pageNames!=='fixed'&&false};
};
function renderPage(i,ext={}){
  const [W,H]=dims(), p=effPal(pal(),S.accent);
  return render({nav:S.nav,p,o:{...opts(pal()),...(ext.o||{})},W,H,page:i,cards:cardsOf(i)});
}
function refreshPreview(){
  const [W,H]=dims(), idx=curIdx();
  current=renderPage(idx);
  $('#preview').innerHTML=current.svg;
  const ov=$('#overlay');
  if(idx<0){ov.hidden=true;sel=-1}
  else{
    ov.hidden=false;
    const gd=current.grid, pc=(v,T)=>(v/T*100).toFixed(3)+'%';
    let h='<div class="cols">';
    for(let i=0;i<N;i+=S.snap){const x=gd.X+i*(gd.cu+gd.gap), w=S.snap*gd.cu+(S.snap-1)*gd.gap;h+=`<i style="left:${pc(x,W)};top:${pc(gd.Y,H)};width:${pc(w,W)};height:${pc(gd.H,H)}"></i>`}
    h+='</div>';
    if(!current.zones.length) h+=`<div class="empty" style="left:${pc(gd.X,W)};top:${pc(gd.Y,H)};width:${pc(gd.W,W)};height:${pc(gd.H,H)}"><span>Arraste aqui para desenhar ${KIND[S.kind].toLowerCase()}</span></div>`;
    current.zones.forEach((z,i)=>{h+=`<div class="z${i===sel?' sel':''}" data-i="${i}" style="left:${pc(z.x,W)};top:${pc(z.y,H)};width:${pc(z.w,W)};height:${pc(z.h,H)}"><span class="lab">${i+1} · ${KIND[z.k]} · ${z.w}×${z.h}</span><span class="h"></span></div>`});
    ov.innerHTML=h;
    ov.classList.toggle('labels',S.labels);
  }
  const all=[...(current.logoZ&&S.showLogo?[{...current.logoZ,k:'logo',label:'Área do logotipo',nav:true}]:[]),...current.navZ.map(z=>({...z,nav:true})),...(current.frameZ||[]).map(z=>({...z,nav:true})),...(current.socialZ||[]).map(z=>({...z,nav:true})),...current.zones];
  $('#zones').innerHTML=all.length?all.map(z=>`<tr><td class="${z.nav?'navrow':''}" title="${esc(z.label||'')}">${z.nav?`${KIND[z.k]||'Item'} · ${esc(z.label||'')}`:`${current.zones.indexOf(z)+1}. ${KIND[z.k]}`}</td><td>${z.x}</td><td>${z.y}</td><td>${z.w}</td><td>${z.h}</td></tr>`).join(''):`<tr><td colspan="5">Nenhuma área adicionada</td></tr>`;
  $('#cardCount').textContent=idx<0?'':`${current.zones.length} cartão${current.zones.length===1?'':'s'}`;
  $('#delCard').disabled=sel<0;
}
let current=null, sel=-1;
function update(){
  setAccentVars();
  const [W,H]=dims(), idx=curIdx(), pages=navPages();
  refreshPreview();
  rulers(W,H);
  const pg=pageAt(idx);
  $('#sizeNote').textContent=`${W} × ${H} px · ${idx<0?'menu inicial':NAVS[S.nav].name.toLowerCase()} · ${S.mode==='dark'?'escuro':'claro'}`;
  $('#px1').textContent=`${W}×${H}`;$('#px2').textContent=`${W*2}×${H*2}`;
  $('#zipNote').textContent=`${pages.length+1} PNG · .zip`;
  $('#pagetabs').innerHTML=`<button type="button" class="ptab" data-page="menu" aria-pressed="${idx<0}">Menu inicial</button>`+pages.map((x,i)=>`<button type="button" class="ptab" data-page="${x.id}" aria-pressed="${i===idx}"><span class="n">${i+1}</span>${esc(x.name)}</button>`).join('');
  $('#cardTools').hidden=idx<0;
  $('#preset').innerHTML=`<option value="">Começar com um modelo…</option>`+PRESETS.map(pr=>`<option value="${pr.id}">${esc(pr.name)}</option>`).join('');
  const base=pal(), P0=effPal(base,S.accent);
  $('#palName').textContent=S.accent?(S.imgDiv?'Da sua imagem':'Cor personalizada')+` · ${S.accent}`:base.name;
  $('#palNote').textContent=S.accent?'Escala derivada da sua cor de destaque e dos neutros da paleta.':NOTE;
  const chips=arr=>arr.map(h=>`<button type="button" class="chip" style="background:${h};color:${onColor(h)}" data-hex="${h}" title="Copiar ${h}">${h.slice(1).toUpperCase()}</button>`).join('');
  $('#seq').innerHTML=chips(P0.seq);$('#div').innerHTML=chips(P0.div);
  drawSlots(P0,opts());
  $('#pals').querySelectorAll('.pal').forEach(b=>b.setAttribute('aria-pressed',b.dataset.pal===S.pal?'true':'false'));
  drawGallery();
  syncSliders();
  fitPreview();
  saveSoon();
}

/* ============ gallery ============ */
$('#gallery').addEventListener('toggle',()=>{if($('#gallery').open)drawGallery()});
function drawGallery(){
  if(!$('#gallery').open)return;
  const [W,H]=dims(), grid=$('#grid'), P0=effPal(pal(),S.accent), idx=curIdx();
  if(S.view==='frames'){
    $('#galTitle').textContent='Molduras';
    let html='<div class="grp">Páginas do relatório</div>';
    Object.entries(NAVS).forEach(([kk,nv])=>{
      const rr=render({nav:kk,p:P0,o:opts(),W,H,page:Math.max(0,idx),cards:cardsOf(idx)});
      html+=`<button type="button" class="tile" data-frame="nav:${kk}" aria-pressed="${idx>=0&&S.nav===kk}"><div class="th">${rr.svg}</div><b>${esc(nv.name)}</b><small>${esc(nv.desc)}</small></button>`;
    });
    html+='<div class="grp">Menu inicial</div>';
    Object.entries(MENUS).forEach(([kk,mn])=>{
      const rr=render({nav:S.nav,p:P0,o:{...opts(),menuStyle:kk},W,H,page:-1,cards:[]});
      html+=`<button type="button" class="tile" data-frame="menu:${kk}" aria-pressed="${idx<0&&S.menuStyle===kk}"><div class="th">${rr.svg}</div><b>${esc(mn.name)}</b><small>${esc(mn.desc)}</small></button>`;
    });
    grid.innerHTML=html;
  }else{
    $('#galTitle').textContent='Paletas';
    let html='';
    [['industry','Por setor'],['mood','Por sensação']].forEach(([gk,gl])=>{
      html+=`<div class="grp">${gl}</div>`;
      PALS.filter(p=>p.g===gk).forEach(p=>{
        const rr=render({nav:S.nav,p,o:opts(p,S.mode),W,H,page:Math.max(0,idx),cards:cardsOf(idx)});
        html+=`<button type="button" class="tile" data-pick="${p.id}" aria-pressed="${p.id===S.pal&&!S.accent}"><div class="th">${rr.svg}</div><b>${esc(p.name)}</b><small>${esc(p.tag)}</small></button>`;
      });
    });
    grid.innerHTML=html;
  }
}

/* ============ card editor ============ */
const ov=$('#overlay');
let drag=null;
function canvasPt(e){const b=ov.getBoundingClientRect(), [W,H]=dims();return {x:(e.clientX-b.left)*W/b.width,y:(e.clientY-b.top)*H/b.height}}
function cellAt(pt){const gd=current.grid;return {c:clamp(Math.floor((pt.x-gd.X+gd.gap/2)/(gd.cu+gd.gap)),0,N-1),r:clamp(Math.floor((pt.y-gd.Y+gd.gap/2)/(gd.ru+gd.gap)),0,N-1)}}
const snapDown=v=>Math.floor(v/S.snap)*S.snap;
ov.addEventListener('pointerdown',e=>{
  if(curIdx()<0||e.button>0) return;
  e.preventDefault();
  const pt=canvasPt(e), cell=cellAt(pt), zEl=e.target.closest('.z'), cards=pageCards();
  if(zEl){
    const i=+zEl.dataset.i; sel=i;
    if(S.kind!==cards[i].k){S.kind=cards[i].k;syncControls()}
    drag=e.target.classList.contains('h')?{mode:'resize',i}:{mode:'move',i,start:cell,orig:{...cards[i]}};
  }else{sel=-1;drag={mode:'draw',anchor:cell,px:pt,idx:-1}}
  ov.setPointerCapture(e.pointerId); ov.classList.add('drag'); ov.focus({preventScroll:true});
  refreshPreview();
});
ov.addEventListener('pointermove',e=>{
  if(!drag) return;
  const pt=canvasPt(e), cell=cellAt(pt), cards=pageCards(), st=S.snap;
  if(drag.mode==='move'){
    const z=cards[drag.i], o2=drag.orig;
    z.c=clamp(o2.c+Math.round((cell.c-drag.start.c)/st)*st,0,N-z.cs);
    z.r=clamp(o2.r+Math.round((cell.r-drag.start.r)/st)*st,0,N-z.rs);
  }else if(drag.mode==='resize'){
    const z=cards[drag.i];
    z.cs=clamp(snapDown(cell.c)+st-z.c,Math.min(st,N-z.c),N-z.c);
    z.rs=clamp(snapDown(cell.r)+st-z.r,Math.min(st,N-z.r),N-z.r);
  }else{
    if(drag.idx<0&&Math.hypot(pt.x-drag.px.x,pt.y-drag.px.y)<8) return;
    const c0=snapDown(Math.min(drag.anchor.c,cell.c)), r0=snapDown(Math.min(drag.anchor.r,cell.r));
    const c1=Math.min(N,snapDown(Math.max(drag.anchor.c,cell.c))+st), r1=Math.min(N,snapDown(Math.max(drag.anchor.r,cell.r))+st);
    const z={k:S.kind,c:c0,r:r0,cs:c1-c0,rs:r1-r0};
    if(drag.idx<0){cards.push(z);drag.idx=cards.length-1}else cards[drag.idx]=z;
    sel=drag.idx;
  }
  refreshPreview();
});
function endDrag(){if(!drag) return;drag=null;ov.classList.remove('drag');update()}
ov.addEventListener('pointerup',endDrag);
ov.addEventListener('pointercancel',endDrag);
ov.addEventListener('keydown',e=>{
  if(curIdx()<0) return;
  const cards=pageCards();
  if(e.key==='Escape'){sel=-1;refreshPreview();return}
  if(sel<0||!cards[sel]) return;
  const z=cards[sel], st=S.snap;
  if(e.key==='Delete'||e.key==='Backspace'){cards.splice(sel,1);sel=-1;e.preventDefault();update();return}
  const d={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[e.key]; if(!d) return;
  e.preventDefault();
  if(e.shiftKey){z.cs=clamp(z.cs+d[0]*st,1,N-z.c);z.rs=clamp(z.rs+d[1]*st,1,N-z.r)}
  else{z.c=clamp(z.c+d[0]*st,0,N-z.cs);z.r=clamp(z.r+d[1]*st,0,N-z.rs)}
  update();
});

/* ============ icon picker ============ */
let pickTarget=null;
function fillPicker(){
  const normalizeIcon=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const q=normalizeIcon($('#pkSearch').value.trim());
  const pg=pickTarget.type==='page'?pageById(pickTarget.pageId):null;
  const cur=pg?(pg.icon||autoIcon(pg.name,allPages().indexOf(pg))):S.logoIcon;
  const list=Object.entries(ICONS).filter(([,ic])=>!q||q.split(/\s+/).every(term=>normalizeIcon(ic.name+' '+ic.k).includes(term)));
  $('#pkGrid').innerHTML=list.length?list.map(([kk,ic])=>`<button type="button" data-icon="${kk}" title="${esc(ic.name)}" aria-label="${esc(ic.name)}" aria-pressed="${kk===cur}">${uiIcon(kk)}</button>`).join(''):'<p class="pk-none">Nenhum ícone encontrado.</p>';
}
function openPicker(btn){
  pickTarget={type:btn.dataset.pickIcon,pageId:btn.closest('.prow')?.dataset.id,btn};
  $('#pkTitle').textContent=pickTarget.type==='page'?'Ícone da página':'Ícone da marca';
  $('#pkAuto').hidden=pickTarget.type!=='page';
  $('#pkSearch').value='';
  fillPicker();
  const pk=$('#picker'); pk.hidden=false;
  const b=btn.getBoundingClientRect(), w=pk.offsetWidth, h=pk.offsetHeight;
  let left=b.right+8, top=b.top-8;
  if(left+w>innerWidth-8) left=Math.max(8,Math.min(b.left,innerWidth-w-8));
  if(top+h>innerHeight-8) top=Math.max(8,innerHeight-h-8);
  pk.style.left=left+'px'; pk.style.top=Math.max(8,top)+'px';
  $('#pkSearch').focus({preventScroll:true});
}
function closePicker(){if($('#picker').hidden) return;$('#picker').hidden=true;pickTarget=null}
function chooseIcon(value){
  const target=pickTarget;
  if(!target) return;
  if(target.type==='page'){
    const pg=pageById(target.pageId);
    if(!pg){closePicker();return}
    pg.icon=value; S.pagesCustom=true;
    closePicker(); drawPageEditor(); update();
    const row=Array.from($('#pageList').children).find(el=>el.dataset.id===target.pageId);
    row?.querySelector('[data-pick-icon]')?.focus({preventScroll:true});
  }else{
    S.logoIcon=value; S.logo='icon';
    closePicker(); syncControls(); update();
    target.btn.focus({preventScroll:true});
  }
}
$('#pkAuto').addEventListener('click',()=>{if(pickTarget?.type==='page') chooseIcon('')});
$('#pkSearch').addEventListener('input',fillPicker);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#picker').hidden){e.preventDefault();e.stopPropagation();const btn=pickTarget?.btn;closePicker();btn?.focus({preventScroll:true})}});
window.addEventListener('resize',closePicker);

/* ============ palette & photo ============ */
function rgbToHsl([r,g,b]){
  r/=255;g/=255;b/=255;
  const mx=Math.max(r,g,b),mn=Math.min(r,g,b),l=(mx+mn)/2;let h=0,s=0;
  if(mx!==mn){const d=mx-mn;s=l>.5?d/(2-mx-mn):d/(mx+mn);h=mx===r?(g-b)/d+(g<b?6:0):mx===g?(b-r)/d+2:(r-g)/d+4;h/=6}
  return [h,s,l];
}
function hslToRgb(h,s,l){const f=n=>{const k=(n+h*12)%12,a=s*Math.min(l,1-l);return 255*(l-a*Math.max(-1,Math.min(k-3,9-k,1)))};return [f(0),f(8),f(4)]}
async function extractColors(src){
  const small=await loadAsDataUrl(src,64);
  const img=await new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=small});
  const cv=document.createElement('canvas');cv.width=img.naturalWidth;cv.height=img.naturalHeight;
  const cx2=cv.getContext('2d');cx2.drawImage(img,0,0);
  const d=cx2.getImageData(0,0,cv.width,cv.height).data, px=[];
  for(let i=0;i<d.length;i+=4){px.push([d[i],d[i+1],d[i+2]])}
  const K=8;let cent=Array.from({length:K},(_,k2)=>px[Math.floor((k2+.5)*px.length/K)].slice()), counts=new Array(K).fill(0);
  for(let it=0;it<12;it++){
    const sum=Array.from({length:K},()=>[0,0,0,0]);
    for(const p of px){
      let bi=0,bd=Infinity;
      for(let k2=0;k2<K;k2++){const q=cent[k2],dd=(p[0]-q[0])**2+(p[1]-q[1])**2+(p[2]-q[2])**2;if(dd<bd){bd=dd;bi=k2}}
      const sm=sum[bi];sm[0]+=p[0];sm[1]+=p[1];sm[2]+=p[2];sm[3]++;
    }
    cent=cent.map((q,k2)=>sum[k2][3]?[sum[k2][0]/sum[k2][3],sum[k2][1]/sum[k2][3],sum[k2][2]/sum[k2][3]]:q);
    counts=sum.map(sm=>sm[3]);
  }
  const sw=cent.map((q,k2)=>{const [h,s,l]=rgbToHsl(q);return {hex:rgb2hex(q),share:counts[k2]/px.length,h,s,l}}).filter(x=>x.share>0).sort((a,b)=>b.share-a.share);
  const out=[];
  sw.forEach(x=>{if(!out.some(y=>{const a=hex2rgb(x.hex),b=hex2rgb(y.hex);return Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2])<28}))out.push(x)});
  return {swatches:out.slice(0,6)};
}
function pickAccent(sw){
  const score=x=>x.s*(x.l>.25&&x.l<.72?1:.35)*Math.sqrt(x.share+.02);
  return sw.slice().sort((a,b)=>score(b)-score(a))[0].hex;
}
function computeDiv(acc,list){
  const [ah]=rgbToHsl(hex2rgb(acc));
  const info=(list||[]).map(h=>{const [hh,s,l]=rgbToHsl(hex2rgb(h));return {h,s,l,dh:Math.min(Math.abs(hh-ah),1-Math.abs(hh-ah))}});
  const opp=info.filter(x=>x.h!==acc&&x.s>.2).sort((a,b)=>b.dh*b.s-a.dh*a.s)[0];
  let second=opp&&opp.dh>.12?opp.h:rgb2hex(hslToRgb((ah+.5)%1,.55,.45));
  if(lum(second)>.45) second=mix(second,'#000000',.3);
  const nsrc=info.filter(x=>x.s<.25).sort((a,b)=>b.l-a.l)[0];
  return [second,mix(second,'#ffffff',.5),nsrc?mix(nsrc.h,'#ffffff',.8):'#eef0f2',mix(acc,'#ffffff',.5),acc];
}
async function paletteFromImage(src){
  try{
    const r=await extractColors(src);
    if(!r.swatches.length){toast('Nenhuma cor encontrada nessa imagem');return}
    S.imgPal=r.swatches.map(x=>x.hex);
    S.accent=pickAccent(r.swatches); S.imgDiv=computeDiv(S.accent,S.imgPal);
    syncControls();update();
    toast('Paleta extraída. Clique em uma cor para mudar o destaque.');
  }catch(e){toast('Não foi possível ler as cores dessa imagem')}
}
async function setPhoto(src){
  toast('Carregando imagem…');
  try{
    S.photoData=await loadAsDataUrl(src,1920);
    if(!['cover','story','banner','panel'].includes(S.menuStyle)) S.menuStyle='story';
    S.page='menu';
    syncControls();update();
    toast('Imagem adicionada ao menu inicial.');
  }catch(e){
    toast('Não foi possível carregar a imagem. Baixe o arquivo e envie pelo botão.');
  }
}
$('#photoFile').addEventListener('change',async e=>{
  const f=e.target.files&&e.target.files[0]; e.target.value='';
  if(!f) return; if(!/^image\//.test(f.type)){toast('Escolha um arquivo de imagem');return}
  setPhoto(await readFile(f));
});
$('#imgPalFile').addEventListener('change',async e=>{
  const f=e.target.files&&e.target.files[0]; e.target.value='';
  if(!f) return; if(!/^image\//.test(f.type)){toast('Escolha um arquivo de imagem');return}
  paletteFromImage(await readFile(f));
});
$('#photoFetch').addEventListener('click',()=>{
  let u=$('#photoUrl').value.trim();
  if(!u){toast('Cole primeiro o endereço da imagem');return}
  if(/^https?:\/\/(www\.)?unsplash\.com\/photos\//.test(u)){toast('Esse é o endereço da página. Copie o endereço da própria imagem.');return}
  if(/images\.unsplash\.com/.test(u)&&!/[?&]w=/.test(u)) u+=(u.includes('?')?'&':'?')+'w=1920&q=80&fm=jpg';
  setPhoto(u);
});
$('#photoCredit').addEventListener('input',e=>{S.photoCredit=e.target.value;scheduleUpdate()});

/* ============ theme colour slots ============ */
const SLOT_GROUPS=[
  ['Dados','data',Array.from({length:8},(_,i)=>['data'+i,`Cor ${i+1}`,i===0?'Série 1 e visuais de cor única':`Série ${i+1}`])],
  ['Estrutura','',[['firstLevel','Primeiro nível','Títulos, valores, rótulos'],['secondLevel','Segundo nível','Eixos, legendas, subtítulos'],['thirdLevel','Terceiro nível','Linhas de grade'],['fourthLevel','Quarto nível','Linhas de eixo, divisórias'],['background','Fundo','Fundo de visuais e filtros'],['secondaryBackground','Fundo secundário','Faixas de tabela, dicas']]],
  ['Sentimento','',[['negative','Negativo','Abaixo da meta'],['positive','Positivo','Acima da meta'],['neutral','Neutro','Sem variação']]],
  ['Cores divergentes','',[['max','Máximo','Extremo alto'],['middle','Meio','Ponto central'],['min','Mínimo','Extremo baixo']]],
];
const slotVal=(sl,key)=>/^data\d$/.test(key)?sl.data[+key.slice(4)]:sl[key];
function slotPreviewSVG(sl,t){
  const card=(x,y,w,h)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${sl.background}" stroke="${t.border}"/>`;
  const T=(x,y,s,c,str,w=400,a='start')=>`<text x="${x}" y="${y}" font-size="${s}" font-weight="${w}" fill="${c}" text-anchor="${a}">${esc(str)}</text>`;
  let g=`<svg viewBox="0 0 560 330" xmlns="http://www.w3.org/2000/svg" font-family="Segoe UI, Arial, sans-serif" role="img" aria-label="Prévia das cores do tema"><rect width="560" height="330" rx="14" fill="${t.canvas}"/>`;
  g+=card(10,10,170,92)+T(22,32,11,sl.secondLevel,'Receita')+T(22,66,28,sl.firstLevel,'R$ 1,24 mi',600)+T(22,88,11,sl.positive,'▲ 4,2% da meta',600);
  g+=card(190,10,170,92)+T(202,32,11,sl.secondLevel,'Margem')+T(202,66,28,sl.firstLevel,'31,8%',600)+T(202,88,11,sl.negative,'▼ 1,1% da meta',600);
  g+=card(370,10,180,92)+T(382,32,11,sl.secondLevel,'Região')+`<rect x="382" y="42" width="156" height="26" rx="6" fill="${sl.secondaryBackground}" stroke="${sl.fourthLevel}"/>`+T(390,59,11,sl.firstLevel,'Todas')+T(382,90,11,sl.neutral,'● Sem variação',600);
  g+=card(10,112,350,208)+T(22,134,12,sl.firstLevel,'Vendas por série',600);
  const base=290, top=152;
  [0,1,2,3].forEach(k2=>{const y=base-k2*(base-top)/3;g+=`<line x1="42" x2="348" y1="${y}" y2="${y}" stroke="${k2?sl.thirdLevel:sl.fourthLevel}"/>`+T(36,y+4,10,sl.secondLevel,String(k2*50),400,'end')});
  const hs=[.92,.8,.68,.6,.52,.44,.36,.28];
  sl.data.forEach((c,i)=>{const x=54+i*37,h=hs[i]*(base-top);g+=`<rect x="${x}" y="${base-h}" width="26" height="${h}" rx="4" fill="${c}"/>`+T(x+13,base+15,10,sl.secondLevel,String(i+1),600,'middle')});
  g+=card(370,112,180,108)+T(382,132,11,sl.firstLevel,'Filial',600)+T(538,132,11,sl.firstLevel,'Vendas',600,'end')+`<rect x="382" y="138" width="156" height="2" fill="${sl.tableAccent}"/>`;
  [['Norte','412'],['Sul','388'],['Leste','301'],['Oeste','276']].forEach((r2,i)=>{const y=141+i*19;if(i%2)g+=`<rect x="382" y="${y}" width="156" height="19" fill="${sl.secondaryBackground}"/>`;g+=T(386,y+13,11,sl.firstLevel,r2[0])+T(534,y+13,11,sl.firstLevel,r2[1],400,'end')});
  g+=card(370,230,180,90)+T(382,250,11,sl.firstLevel,'Escala',600);
  for(let i=0;i<9;i++){const f=i/8,c=f<.5?mix(sl.min,sl.middle,f*2):mix(sl.middle,sl.max,(f-.5)*2);g+=`<rect x="${(382+i*17.33).toFixed(1)}" y="260" width="17.4" height="26" fill="${c}"/>`}
  return g+'</svg>';
}
function drawSlots(p,o){
  const sl=themeSlots(p,o), t=tokens(p,o), ov2=S.slotOverrides||{};
  $('#slotPreview').innerHTML=slotPreviewSVG(sl,t);
  const rv=S.slotReverse||{}, GID={'Dados':'data','Estrutura':'structural','Sentimento':'sentiment','Cores divergentes':'divergent'};
  const la=lum(sl.firstLevel), lb=lum(sl.background), ratio=(Math.max(la,lb)+.05)/(Math.min(la,lb)+.05);
  $('#slots').innerHTML=(ratio<3?`<p class="slotwarn">Contraste do texto sobre o fundo: ${ratio.toFixed(1)}:1. Recomendado: pelo menos 3:1.</p>`:'')
    +SLOT_GROUPS.map(([name,,items])=>`<div class="slotgrp"><div class="slothead"><h4>${name}</h4><button type="button" class="linkbtn" data-reverse="${GID[name]}">⇅ ${rv[GID[name]]?'Invertida':'Inverter'}</button></div>${items.map(([key,label,desc])=>{
      const v=slotVal(sl,key);
      return `<div class="slot"><button type="button" class="slot-sw" data-slot="${key}" style="background:${v}" aria-label="Alterar ${label}, atual ${v}" title="${v}"></button><span><b>${label}</b>${ov2[key]?'<i class="edited">editada</i>':''}<small>${desc}</small></span><code>${v.toUpperCase()}</code></div>`;
    }).join('')}</div>`).join('');
  $('#resetSlots').disabled=!Object.keys(ov2).length&&!Object.values(rv).some(Boolean);
}
const hexModal=$('#hexModal'), slotHex=$('#slotHex');
let activeSlotKey=null;
function closeHexModal(){hexModal.classList.remove('open');activeSlotKey=null}
$('#slotHexCancel').addEventListener('click',closeHexModal);
hexModal.addEventListener('click',e=>{if(e.target===hexModal)closeHexModal()});
$('#slotHexApply').addEventListener('click',()=>{
  const hex=normalizeHex(slotHex.value); if(!hex){toast('Digite um hexadecimal, por exemplo #1F6FC4');return}
  if(!activeSlotKey) return;
  S.slotOverrides={...(S.slotOverrides||{}),[activeSlotKey]:hex}; closeHexModal(); update();
});
slotHex.addEventListener('keydown',e=>{if(e.key==='Enter')$('#slotHexApply').click()});
$('#resetSlots').addEventListener('click',()=>{S.slotOverrides={};S.slotReverse={};update();toast('Cores do tema restauradas')});

/* ============ addon ============ */
function drawAddon(){
  $('#addonInfo').hidden=!S.addon; $('#addonRemove').hidden=!S.addon;
  $('#addonUpload').textContent=S.addon?'Substituir configurações…':'Adicionar configurações (.json)…';
  if(S.addon) $('#addonInfo').innerHTML=`<b>${esc(S.addon.name)}</b><br>Adiciona: ${esc(addonSummary(S.addon.theme))}`;
}
$('#addonUpload').addEventListener('click',()=>$('#addonFile').click());
$('#addonRemove').addEventListener('click',()=>{S.addon=null;drawAddon();update();toast('Complemento removido')});
$('#addonFile').addEventListener('change',async e=>{
  const f=e.target.files&&e.target.files[0]; e.target.value=''; if(!f) return;
  try{
    const th=JSON.parse(await f.text());
    if(!th||typeof th!=='object'||Array.isArray(th)) throw new Error('x');
    S.addon={name:f.name,theme:th};
    drawAddon(); update();
    toast('Complemento pronto. Será mesclado ao tema e ao projeto Power BI.');
  }catch(err){toast('Esse arquivo não contém um tema JSON válido')}
});

/* ============ exports ============ */
function fileBottom(){const [W,H]=dims(),idx=curIdx(),pg=pageAt(idx);return `backplate-${S.accent?'custom':S.pal}-${idx<0?'menu-'+S.menuStyle:slug(pg?pg.name:'pagina')+'-'+S.nav}-${S.mode}-${W}x${H}`}
const exportScripts=new Map();
function loadExportScript(path){
  if(!exportScripts.has(path))exportScripts.set(path,new Promise((resolve,reject)=>{
    const script=document.createElement('script');script.src=path;
    script.onload=resolve;
    script.onerror=()=>{exportScripts.delete(path);script.remove();reject(new Error('Não foi possível carregar os recursos de exportação'))};
    document.head.append(script);
  }));
  return exportScripts.get(path);
}
let exportBusy=false;
async function runExport(button){
  if(exportBusy)return;
  exportBusy=true;
  const buttons=Array.from(document.querySelectorAll('[data-export]'));
  const disabled=buttons.map(b=>b.disabled), original=document.createElement('span');
  original.className='export-original';original.append(...button.childNodes);
  const progress=document.createElement('span');progress.className='export-progress';progress.textContent='Preparando…';
  button.append(original,progress);
  buttons.forEach(b=>b.disabled=true);
  button.setAttribute('aria-busy','true');
  try{
    const kind=button.dataset.export;
    if(kind==='zip'||kind==='pbip')await loadExportScript('./assets/jszip.min.js');
    if(kind==='pbip')await loadExportScript('./assets/base-theme.js');
    await doExport(kind);
  }
  catch(error){console.error('Falha na exportação',error);toast('Não foi possível exportar. Tente novamente.')}
  finally{button.replaceChildren(...original.childNodes);button.removeAttribute('aria-busy');buttons.forEach((b,i)=>b.disabled=disabled[i]);exportBusy=false}
}
async function doExport(kind){
  const P0=effPal(pal(),S.accent), [W,H]=dims(), o=opts();
  if(kind==='json'){saveFile(`backplate-tema-${S.accent?'custom':S.pal}-${S.mode}.json`,themeJSON(P0,o));return}
  if(kind==='zip'){await exportZip();return}
  if(kind==='pbip'){await exportPBIP();return}
  const {svg}=renderPage(curIdx());
  if(kind==='svg'){saveFile(fileBottom()+'.svg',svg);return}
  try{const b=await svgToPng(svg,W,H,kind==='png2'?2:1);saveFile(fileBottom()+(kind==='png2'?'@2x':'')+'.png',b)}
  catch(e){toast('Não foi possível gerar o PNG')}
}
async function exportZip(){
  if(!window.JSZip){toast('A biblioteca ZIP não carregou. Verifique sua conexão.');return}
  toast('Criando arquivo ZIP…');
  const [W,H]=dims(), P0=effPal(pal(),S.accent), pages=navPages(), zip=new JSZip();
  const csvq=v=>/[",\n]/.test(String(v))?`"${String(v).replace(/"/g,'""')}"`:v;
  const csv=['Página,Tipo,Rótulo,X,Y,Largura,Altura'];
  const list=[{i:-1,file:'00-menu-inicial',name:'Menu inicial'},...pages.map((pg,i)=>({i,file:`${String(i+1).padStart(2,'0')}-${slug(pg.name)}`,name:pg.name}))];
  try{
    for(const it of list){
      const rr=renderPage(it.i);
      zip.file(it.file+'.png',await svgToPng(rr.svg,W,H,1));
      rr.navZ.forEach(z=>csv.push([csvq(it.name),KIND[z.k]||'Item',csvq(z.label),z.x,z.y,z.w,z.h].join(',')));
      rr.zones.forEach((z,j)=>csv.push([csvq(it.name),KIND[z.k],j+1,z.x,z.y,z.w,z.h].join(',')));
    }
    zip.file('tema.json',themeJSON(P0,opts()));
    zip.file('posicoes.csv',csv.join('\n'));
    const blob=await zip.generateAsync({type:'blob'});
    saveFile(`backplate-${S.accent?'custom':S.pal}-${S.nav}-${S.mode}-${W}x${H}.zip`,blob);
  }catch(e){toast('Não foi possível criar o arquivo ZIP')}
}

/* ============ Power BI project (.pbip) ============ */
const SCH='https://developer.microsoft.com/json-schemas/fabric/';
function uuid(){
  try{if(crypto.randomUUID) return crypto.randomUUID()}catch(e){}
  const b=crypto.getRandomValues(new Uint8Array(16)); b[6]=(b[6]&15)|64; b[8]=(b[8]&63)|128;
  const h=Array.from(b,x=>x.toString(16).padStart(2,'0')).join('');
  return `${h.slice(0,8)}-${h.slice(8,12)}-${h.slice(12,16)}-${h.slice(16,20)}-${h.slice(20)}`;
}
const Lit=v=>({expr:{Literal:{Value:v}}});
const Str=s=>Lit(`'${String(s).replace(/'/g,"''")}'`);
const Bool=b=>Lit(b?'true':'false');
const Dbl=n=>Lit(`${n}D`);
const Off=()=>[{properties:{show:Bool(false)}}];
const PBI_TYPE={kpi:'cardVisual',hero:'cardVisual',chart:'clusteredColumnChart',table:'tableEx',slicer:'slicer',map:'azureMap',text:'textbox'};
function pbiContainer(name,z,zn,visual){
  return {$schema:SCH+'item/report/definition/visualContainer/2.12.0/schema.json',name,position:{x:zn.x,y:zn.y,z,height:zn.h,width:zn.w,tabOrder:z},visual};
}
function pbiNavButton(targetId,label){
  return {visualType:'actionButton',objects:{text:Off(),icon:Off(),fill:Off(),outline:Off()},
    visualContainerObjects:{background:Off(),border:Off(),visualHeader:Off(),title:[{properties:{show:Bool(false),text:Str(`Ir para ${label}`)}}],
      visualLink:[{properties:{show:Bool(true),type:Str('PageNavigation'),navigationSection:Str(targetId)}}]}};
}
function pbiLinkButton(url,label){
  return {visualType:'actionButton',objects:{text:Off(),icon:Off(),fill:Off(),outline:Off()},
    visualContainerObjects:{background:Off(),border:Off(),visualHeader:Off(),title:[{properties:{show:Bool(false),text:Str(label)}}],
      visualLink:[{properties:{show:Bool(true),type:Str('WebUrl'),webUrl:Str(url)}}]}};
}
function pbiNavigator(nz,menuId,font='Segoe UI'){
  const pt=Math.max(6,Math.round(nz.size*.75*2)/2);
  const text=(sel,color,bold)=>({properties:{fontSize:Dbl(pt),fontFamily:Str(font),bold:Bool(bold),fontColor:{solid:{color:Str(color)}},horizontalAlignment:Str(nz.align),leftMargin:Dbl(nz.lm||0),rightMargin:Dbl(0),topMargin:Dbl(0),bottomMargin:Dbl(0)},selector:{id:sel}});
  const clear=sel=>({properties:{show:Bool(false),transparency:Dbl(100)},selector:{id:sel}});
  return {visualType:'pageNavigator',
    objects:{
      layout:[{properties:{orientation:Dbl(nz.orient==='vertical'?1:0),cellPadding:Dbl(nz.cell||0)}}],
      pages:[{properties:{showByDefault:Bool(true),showHiddenPages:Bool(false),showTooltipPages:Bool(false)}},...(menuId?[{properties:{showPage:Bool(false)},selector:{id:menuId}}]:[])],
      text:[text('default',nz.color,false),text('hover',nz.active,false),text('press',nz.active,true),text('selected',nz.active,true)],
      fill:['default','hover','press','selected'].map(clear),
      outline:['default','hover','press','selected'].map(clear),
      shape:[{properties:{tileShape:Str('rectangle'),roundEdge:Dbl(0)}}]},
    visualContainerObjects:{background:Off(),border:Off(),visualHeader:Off(),title:[{properties:{show:Bool(false),text:Str('Navegação')}}],
      padding:[{properties:{top:Dbl(0),right:Dbl(0),bottom:Dbl(0),left:Dbl(0)}}],general:[{properties:{altText:Str('Navegação de páginas')}}]}};
}
function pbiImage(file,title,scaling){
  return {visualType:'image',
    objects:{image:[{properties:{sourceType:Str('image'),sourceFile:{image:{name:Str(file),url:{expr:{ResourcePackageItem:{PackageName:'RegisteredResources',PackageType:1,ItemName:file}}},scaling:Str(scaling)}}}}]},
    visualContainerObjects:{background:Off(),border:Off(),visualHeader:Off(),title:[{properties:{show:Bool(false),text:Str(title)}}]}};
}
function dataUrlToBlob(url){
  const [head,body]=url.split(','), mime=(head.match(/data:([^;]+)/)||[])[1]||'image/png';
  const bin=/;base64/.test(head)?atob(body):decodeURIComponent(body);
  const u=new Uint8Array(bin.length); for(let i=0;i<bin.length;i++) u[i]=bin.charCodeAt(i);
  return {blob:new Blob([u],{type:mime}),ext:mime==='image/svg+xml'?'svg':mime==='image/jpeg'?'jpg':mime==='image/webp'?'webp':'png'};
}
function pbiTextbox(it){
  const family=it.font||'Segoe UI';
  const style={fontFamily:family,fontSize:`${Math.max(6,Math.round(it.size*.75*2)/2)}pt`,color:it.color};
  return {visualType:'textbox',
    objects:{general:[{properties:{paragraphs:[{textRuns:(it.runs||[{text:it.text,color:it.color}]).map(r2=>({value:r2.text,textStyle:{...style,color:r2.color}})),horizontalTextAlignment:it.align}]}}]},
    visualContainerObjects:{background:Off(),border:Off(),visualHeader:Off(),title:[{properties:{show:Bool(false),text:Str(it.role)}}],padding:[{properties:{top:Dbl(0),right:Dbl(0),bottom:Dbl(0),left:Dbl(0)}}]}};
}
function pbiPlaceholder(kind,n,o,t,boxed){
  const type=PBI_TYPE[kind]||'clusteredColumnChart';
  const card=t.cardFill||t.card;
  const fill=kind==='hero'?(t.heroFill||card):kind==='text'?mix(card,t.canvas,.45):card;
  const ink=boxed?(t.cardInk||t.text):t.text, sub=boxed?(t.cardSub||t.sub):t.sub;
  const box=boxed?{
    background:[{properties:{show:Bool(true),color:{solid:{color:Str(fill)}},transparency:Dbl(0)}}],
    border:[{properties:{show:Bool(true),color:{solid:{color:Str(t.cardBorder||t.border)}},radius:Dbl(o.radius||0),width:Dbl(1)}}],
    dropShadow:[{properties:{show:Bool(!!o.shadow&&kind!=='text')}}]
  }:{background:Off(),border:Off()};
  if(type==='textbox') return {visualType:'textbox',
    objects:{general:[{properties:{paragraphs:[{textRuns:[{value:`Texto ${n}`,textStyle:{fontFamily:o.fontFamilyTitle||'Segoe UI',fontSize:`${o.fontTitle}pt`,color:ink}}],horizontalTextAlignment:'left'}]}}]},
    visualContainerObjects:{...box,visualHeader:Off()}};
  if(type==='slicer'){
    const sz=Dbl(Math.max(6,Math.round(o.fontGeneral||12)));
    return {visualType:'slicer',
      objects:{data:[{properties:{mode:Str('Dropdown')}}],
        header:[{properties:{show:Bool(true),text:Str(`Filtro ${n}`),fontFamily:Str(o.fontFamilyGeneral||'Segoe UI'),textSize:sz,fontColor:{solid:{color:Str(boxed?sub:(t.slicerHeader||t.sub))}}}}],
        items:[{properties:{fontFamily:Str(o.fontFamilyGeneral||'Segoe UI'),textSize:sz,fontColor:{solid:{color:Str(boxed?ink:(t.slicerText||t.text))}},background:{solid:{color:Str(boxed?fill:(t.slicerBg||t.card))}}}}]},
      visualContainerObjects:{...box,visualHeader:Off(),title:[{properties:{show:Bool(false),text:Str(`Filtro ${n}`)}}],padding:[{properties:{top:Dbl(0),right:Dbl(0),bottom:Dbl(0),left:Dbl(0)}}]}};
  }
  return {visualType:type,visualContainerObjects:{...box,title:[{properties:{show:Bool(true),text:Str(`${KIND[kind]} ${n}`),fontFamily:Str(o.fontFamilyTitle||'Segoe UI'),fontSize:Dbl(o.fontTitle),fontColor:{solid:{color:Str(ink)}}}}]}};
}
async function exportPBIP(){
  if(!window.JSZip){toast('A biblioteca ZIP não carregou. Verifique sua conexão.');return}
  toast('Criando o projeto Power BI…');
  try{
    const [W,H]=dims(), base=pal(), P0=effPal(base,S.accent), pages=navPages();
    const o=opts();
    const PN=(S.title||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^A-Za-z0-9 _-]+/g,'').replace(/\s+/g,' ').trim().slice(0,40)||'Relatorio Power BI';
    const R=`${PN}.Report`, M=`${PN}.SemanticModel`, zip=new JSZip(), root=zip;
    const put=(path,obj)=>root.file(path,typeof obj==='string'?obj:JSON.stringify(obj,null,2));
    const list=[{i:-1,name:'Menu inicial',file:'bg-00-main-menu.png'},...pages.map((pg,i)=>({i,name:pg.name,file:`bg-${String(i+1).padStart(2,'0')}-${slug(pg.name).slice(0,24).replace(/-$/,'')}.png`}))];
    list.forEach((it,i)=>{it.id='p'+(i+1)});
    const themeFile='BackplateTheme.json', at={visual:'2.12.0',report:'3.4.0',page:'2.3.1'};
    const useImgs=S.showLogo&&(S.logoImages||[]).length>0;
    const usePh=S.showLogo&&!useImgs&&S.logo==='placeholder';
    const logoFiles=[];
    if(useImgs){
      S.logoImages.forEach((im,i)=>{const d=dataUrlToBlob(im.data);logoFiles.push({file:`logo-${i+1}.${d.ext}`,blob:d.blob})});
    }else if(usePh){
      const ph=`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="100" viewBox="0 0 400 100"><rect x="2" y="2" width="396" height="96" rx="10" fill="#8a94a0" fill-opacity="0.08" stroke="#8a94a0" stroke-width="3" stroke-dasharray="14 10"/><text x="200" y="62" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" letter-spacing="5" fill="#8a94a0" text-anchor="middle">LOGOTIPO</text></svg>`;
      logoFiles.push({file:'logo-placeholder.png',blob:await svgToPng(ph,400,100,1)});
    }
    const imgMenu=['story','banner','panel'].includes(S.menuStyle)&&!S.photoData;
    let imgFile=null, imgBlob=null;
    if(imgMenu){
      const ph=`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><rect x="4" y="4" width="792" height="492" rx="18" fill="#8a94a0" fill-opacity="0.08" stroke="#8a94a0" stroke-width="4" stroke-dasharray="18 12"/><text x="400" y="320" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" letter-spacing="4" fill="#8a94a0" text-anchor="middle">SUA IMAGEM</text></svg>`;
      imgBlob=await svgToPng(ph,800,500,1); imgFile='menu-image-placeholder.png';
    }
    put(`${PN}.pbip`,{$schema:SCH+'pbip/pbipProperties/1.0.0/schema.json',version:'1.0',artifacts:[{report:{path:R}}],settings:{enableAutoRecovery:true}});
    put('.gitignore','**/.pbi/localSettings.json\n**/.pbi/cache.abf\n');
    put(`${R}/.platform`,{$schema:SCH+'gitIntegration/platformProperties/2.0.0/schema.json',metadata:{type:'Report',displayName:PN},config:{version:'2.0',logicalId:uuid()}});
    put(`${R}/definition.pbir`,{$schema:SCH+'item/report/definitionProperties/2.0.0/schema.json',version:'4.0',datasetReference:{byPath:{path:`../${M}`}}});
    put(`${R}/definition/version.json`,{$schema:SCH+'item/report/definition/versionMetadata/1.0.0/schema.json',version:'2.0.0'});
    put(`${R}/definition/report.json`,{
      $schema:SCH+'item/report/definition/report/3.3.0/schema.json',
      themeCollection:{baseTheme:{name:'Fluent2-CY26SU08',reportVersionAtImport:at,type:'SharedResources'},customTheme:{name:themeFile,reportVersionAtImport:at,type:'RegisteredResources'}},
      objects:{section:[{properties:{verticalAlignment:Str('Top')}}]},
      resourcePackages:[
        {name:'SharedResources',type:'SharedResources',items:[{name:'Fluent2-CY26SU08',path:'BaseThemes/Fluent2-CY26SU08.json',type:'BaseTheme'}]},
        {name:'RegisteredResources',type:'RegisteredResources',items:[{name:themeFile,path:themeFile,type:'CustomTheme'},...list.map(it=>({name:it.file,path:it.file,type:'Image'})),...logoFiles.map(lf=>({name:lf.file,path:lf.file,type:'Image'})),...(imgFile?[{name:imgFile,path:imgFile,type:'Image'}]:[])]}
      ],
      settings:{useStylableVisualContainerHeader:true,exportDataMode:'AllowSummarized',defaultDrillFilterOtherVisuals:true,allowChangeFilterTypes:true,useEnhancedTooltips:true,useDefaultAggregateDisplayName:true}
    });
    put(`${R}/definition/pages/pages.json`,{$schema:SCH+'item/report/definition/pagesMetadata/1.1.0/schema.json',pageOrder:list.map(it=>it.id),activePageName:list[0].id});
    const theme=JSON.parse(themeJSON(P0,o)); theme.name=themeFile;
    put(`${R}/StaticResources/RegisteredResources/${themeFile}`,theme);
    root.file(`${R}/StaticResources/SharedResources/BaseThemes/${window.PBI_BASE_THEME.file}`,window.PBI_BASE_THEME.text);
    logoFiles.forEach(lf=>root.file(`${R}/StaticResources/RegisteredResources/${lf.file}`,lf.blob));
    if(imgFile) root.file(`${R}/StaticResources/RegisteredResources/${imgFile}`,imgBlob);

    for(const it of list){
      const rr=renderPage(it.i,{o:{liveText:S.pbipText!=='baked',forPbip:true,autoNav:S.pageNames!=='fixed'&&it.i>=0}}), t=rr.t, dir=`${R}/definition/pages/${it.id}`;
      root.file(`${R}/StaticResources/RegisteredResources/${it.file}`,await svgToPng(rr.svg,W,H,1));
      put(`${dir}/page.json`,{
        $schema:SCH+'item/report/definition/page/2.1.0/schema.json',
        name:it.id,displayName:it.name,displayOption:'FitToPage',height:H,width:W,
        objects:{
          background:[{properties:{image:{image:{name:Str(it.file),url:{expr:{ResourcePackageItem:{PackageName:'RegisteredResources',PackageType:1,ItemName:it.file}}},scaling:Str('Fit')}},transparency:Dbl(0)}}],
          outspace:[{properties:{color:{solid:{color:Str(t.canvas)}},transparency:Dbl(0)}}]
        }
      });
      let z=0, vn=0;
      const add=(zn,visual)=>{z+=1000;const vid='v'+(++vn);put(`${dir}/visuals/${vid}/visual.json`,pbiContainer(vid,z,zn,visual))};
      if(imgFile&&rr.imgZ) add(rr.imgZ,pbiImage(imgFile,'Imagem do menu','Fill'));
      rr.zones.forEach((zn,j)=>add(zn,pbiPlaceholder(zn.k,j+1,o,t,true)));
      (rr.textZ||[]).forEach(zn=>add(zn,pbiTextbox(zn)));
      if(rr.navigatorZ) add(rr.navigatorZ,pbiNavigator(rr.navigatorZ,list[0].id,o.fontFamilyGeneral));
      (rr.navigatorZ?[]:rr.navZ).forEach((zn,k2)=>{
        const target=list[(zn.target!=null?zn.target:k2)+1]; if(!target) return;
        add(zn,pbiNavButton(target.id,target.name));
      });
      (rr.frameZ||[]).forEach((zn,j)=>add(zn,pbiPlaceholder(zn.k,j+1,o,{...t,...(zn.color?{text:zn.color}:{}),...(zn.headerColor?{slicerHeader:zn.headerColor}:{}),...(zn.itemBg?{slicerBg:zn.itemBg,slicerText:zn.itemColor}:{})})));
      /* logo: one visual per image, side by side inside the logo area */
      if(rr.logoZ&&logoFiles.length){
        const n2=logoFiles.length, lw=rr.logoZ.w/n2;
        logoFiles.forEach((lf,i)=>add({x:Math.round(rr.logoZ.x+i*lw),y:rr.logoZ.y,w:Math.round(lw),h:rr.logoZ.h},{...pbiImage(lf.file,'Logotipo','Fit'),visualContainerObjects:{background:Off(),border:Off(),visualHeader:Off(),title:[{properties:{show:Bool(false),text:Str('Logotipo')}}],visualLink:[{properties:{show:Bool(it.i>=0),type:Str('PageNavigation'),navigationSection:Str(list[0].id)}}]}}));
      }
      (rr.socialZ||[]).forEach(zn=>add(zn,pbiLinkButton(zn.url,zn.label)));
    }
    put(`${M}/.platform`,{$schema:SCH+'gitIntegration/platformProperties/2.0.0/schema.json',metadata:{type:'SemanticModel',displayName:PN},config:{version:'2.0',logicalId:uuid()}});
    put(`${M}/definition.pbism`,{$schema:SCH+'item/semanticModel/definitionProperties/1.0.0/schema.json',version:'4.2',settings:{}});
    put(`${M}/definition/database.tmdl`,'database\n\tcompatibilityLevel: 1606\n\n');
    put(`${M}/definition/model.tmdl`,'model Model\n\tculture: en-US\n\tdefaultPowerBIDataSourceVersion: powerBI_V3\n\tsourceQueryCulture: en-US\n\tvalueFilterBehavior: independent\n\tdataAccessOptions\n\t\tlegacyRedirects\n\t\treturnErrorValuesAsNull\n\nannotation __PBI_TimeIntelligenceEnabled = 0\n\nannotation PBI_ProTooling = ["DevMode"]\n\nref cultureInfo en-US\n\n');
    put(`${M}/definition/cultures/en-US.tmdl`,'cultureInfo en-US\n\n');
    const blob=await zip.generateAsync({type:'blob'});
    await saveFile(`${slug(PN)}-pbip.zip`,blob);
    toastCoffee(`Projeto pronto com ${list.length} páginas. Se esta ferramenta ajudou você,`);
  }catch(e){console.error('Falha na exportação PBIP:',e);toast(`Falha ao gerar PBIP: ${(e&&e.message||'erro inesperado').slice(0,90)}`)}
}

/* ============ events ============ */
document.addEventListener('click',e=>{
  if(pickTarget){
    const pick=e.target.closest('#pkGrid [data-icon]');
    if(pick){chooseIcon(pick.dataset.icon);return}
    if(e.target.closest('#picker')) return;
    closePicker();
  }
  const opener=e.target.closest('[data-pick-icon]'); if(opener){openPicker(opener);return}
  if(e.target.closest('#imgPalBtn')){$('#imgPalFile').click();return}
  if(e.target.closest('#photoUpload')){$('#photoFile').click();return}
  if(e.target.closest('#photoRemove')){S.photoData=null;syncControls();update();toast('Imagem removida');return}
  if(e.target.closest('#photoPalette')){if(!S.photoData){toast('Adicione uma imagem primeiro');return}paletteFromImage(S.photoData);return}
  const rev=e.target.closest('[data-reverse]');
  if(rev){
    const gid=rev.dataset.reverse;
    S.slotReverse={...(S.slotReverse||{}),[gid]:!(S.slotReverse||{})[gid]};
    update();return;
  }
  const slotBtn=e.target.closest('[data-slot]');
  if(slotBtn){
    const sl=themeSlots(effPal(pal(),S.accent),opts());
    activeSlotKey=slotBtn.dataset.slot; slotHex.value=slotVal(sl,activeSlotKey).toUpperCase();
    hexModal.classList.add('open'); slotHex.focus(); slotHex.select();
    return;
  }
  const swPick=e.target.closest('[data-accent]');
  if(swPick){S.accent=swPick.dataset.accent;S.imgDiv=computeDiv(S.accent,S.imgPal);syncControls();update();return}
  const segBtn=e.target.closest('.seg[data-key] button');
  if(segBtn){
    const key=segBtn.closest('.seg').dataset.key, raw=segBtn.dataset.val;
    S[key]=raw==='true'?true:raw==='false'?false:/^-?\d+(\.\d+)?$/.test(raw)?Number(raw):raw;
    if(key==='group'||key==='mode') drawPalList();
    if(key==='kind'&&curIdx()>=0&&sel>=0&&pageCards()[sel]) pageCards()[sel].k=raw;
    if(key==='menuStyle'){S.page='menu';sel=-1}
    if(key==='nav'&&S.page==='menu'&&curIdx()<0) S.page=navPages()[0]?.id||'menu';
    if(key==='nav') drawPageEditor();
    syncControls(); update(); return;
  }
  const pb=e.target.closest('.pal'); if(pb){pickPalette(pb.dataset.pal);return}
  const pt=e.target.closest('[data-page]'); if(pt){S.page=pt.dataset.page;sel=-1;drawPageEditor();update();return}
  const tp=e.target.closest('[data-pick]'); if(tp){pickPalette(tp.dataset.pick);window.scrollTo({top:0,behavior:'smooth'});return}
  const fr=e.target.closest('[data-frame]');
  if(fr){const [type,key]=fr.dataset.frame.split(':');
    if(type==='nav'){S.nav=key;if(S.page==='menu') S.page=navPages()[0]?.id||'menu'}else{S.menuStyle=key;S.page='menu'}
    sel=-1;drawPageEditor();syncControls();update();return}
  const chip=e.target.closest('.chip'); if(chip){copy(chip.dataset.hex,'Cor '+chip.dataset.hex+' copiada');return}
  const ex=e.target.closest('[data-export]'); if(ex){runExport(ex);return}
});
$('#size').addEventListener('change',e=>{
  const custom=e.target.value==='custom';
  S.customSize=custom;
  if(custom) S.size=`${S.customW}x${S.customH}`;
  else {S.size=e.target.value;[S.customW,S.customH]=dims()}
  syncControls();update();
});
['customWidth','customHeight'].forEach((id,i)=>$('#'+id).addEventListener('input',e=>{
  const n=Number(e.target.value);
  if(!Number.isInteger(n)||n<1||n>16384) return;
  if(i===0)S.customW=n;else S.customH=n;
  if(S.customSize){S.size=`${S.customW}x${S.customH}`;update()}
}));
$('#labels').addEventListener('change',e=>{S.labels=e.target.checked;refreshPreview();saveSoon()});
$('#accent').addEventListener('input',e=>{const hex=normalizeHex(e.target.value);if(!hex)return;S.accent=hex;S.imgDiv=null;syncControls();update()});
$('#accent').addEventListener('blur',e=>{if(!normalizeHex(e.target.value))e.target.value=S.accent||pal().seq[3]});
$('#accentReset').addEventListener('click',()=>{S.accent=null;S.imgDiv=null;syncControls();update()});
let typing;
['brand','subtitle','footer','title'].forEach(f=>$('#'+f).addEventListener('input',e=>{
  S[f]=e.target.value;
  clearTimeout(typing); typing=setTimeout(update,140);
}));
['fontGeneral','fontTitle','fontCallout'].forEach(f=>{
  const el=$('#'+f), lim={fontGeneral:[8,40],fontTitle:[8,48],fontCallout:[10,72]}[f];
  el.addEventListener('input',()=>{const v=parseInt(el.value,10);if(!Number.isFinite(v))return;S[f]=clamp(v,lim[0],lim[1]);scheduleUpdate()});
  el.addEventListener('blur',()=>{el.value=S[f]});
});
$('#navReset').addEventListener('click',()=>{SLIDERS.nav.forEach(([kk])=>S[kk]=null);S.navFontPct=100;update();toast('Navegação no automático')});
$('#logoSliders');
$('#panelReset').addEventListener('click',()=>{SLIDERS.panel.forEach(([kk])=>S[kk]=null);update();toast('Painel no automático')});
$('#iconsAuto').addEventListener('click',()=>{allPages().forEach(pg=>pg.icon='');drawPageEditor();update();toast('Ícones das páginas voltaram ao automático')});
$('#preset').addEventListener('change',e=>{
  const pr=PRESETS.find(x=>x.id===e.target.value); if(!pr) return;
  const pg=pageAt(curIdx()); if(!pg) return;
  S.cards[pg.id]=presetCards(pr.tree); sel=-1; update(); toast(`Modelo “${pr.name}” aplicado. Arraste para ajustar.`);
});
$('#delCard').addEventListener('click',()=>{if(sel<0)return;pageCards().splice(sel,1);sel=-1;update()});
$('#clearPage').addEventListener('click',()=>{const pg=pageAt(curIdx());if(!pg)return;S.cards[pg.id]=[];sel=-1;update();toast('Página limpa')});
$('#allPages').addEventListener('click',()=>{
  const pg=pageAt(curIdx()); if(!pg) return;
  const src=pageCards();
  navPages().forEach(x=>{if(x.id!==pg.id) S.cards[x.id]=src.map(z=>({...z}))});
  update(); toast('Cartões copiados para todas as páginas visíveis');
});
$('#copyZones').addEventListener('click',()=>{
  const rows=[...current.navZ.map(z=>[`${KIND[z.k]||'Item'} · ${z.label}`,z.x,z.y,z.w,z.h]),...current.zones.map((z,i)=>[`${i+1}. ${KIND[z.k]}`,z.x,z.y,z.w,z.h])];
  copy(['Área\tX\tY\tLargura\tAltura',...rows.map(r2=>r2.join('\t'))].join('\n'),'Posições copiadas');
});
document.querySelectorAll('.seg[data-key="view"] button').forEach(b=>b.addEventListener('click',()=>{S.view=b.dataset.val;document.querySelectorAll('.seg[data-key="view"] button').forEach(x=>x.setAttribute('aria-pressed',x===b?'true':'false'));drawGallery()}));

/* ============ clear, reset & guided tour ============ */
async function clearEdits(){
  if(!confirm('Limpar todas as edições salvas neste navegador? Essa ação não pode ser desfeita.')) return;
  await storeDel('state');
  S=clone(DEF); S.pages=null; S.tourDone=false;
  ensurePages(); drawPageEditor(); syncControls(); drawPalList(); drawAddon(); update();
  toast('Edições limpas. Vamos começar de novo.');
  setTimeout(startTour,400);
}
$('#clearBtn').addEventListener('click',clearEdits);
$('#clearBtn2').addEventListener('click',clearEdits);

const TOUR=[
 {sel:null,title:'Bem-vindo ao gerador',text:'Vou mostrar cada recurso em poucos passos. Use “Próximo” para avançar, “Voltar” para rever ou “Pular” para fechar. Você pode reabrir este guia pelo botão Guia, no topo.'},
 {sel:'#s-look',title:'Cores e modo',text:'Escolha entre modo claro e escuro, navegue pelas paletas agrupadas por setor, sensação ou tom e ajuste a cor de destaque.'},
 {sel:'#palGroup',title:'Paletas',text:'Clique em uma paleta para aplicá-la. A prévia de cada uma aparece no formato que você escolheu.'},
 {sel:'#imgPalBtn',title:'Paleta a partir de imagem',text:'Envie uma foto ou logotipo e o gerador extrai as cores dela, sugerindo um destaque.'},
 {sel:'#s-size',title:'Tamanho da página',text:'Escolha um tamanho pronto ou digite largura e altura próprias, em pixels.'},
 {sel:'#navFrames',title:'Molduras de navegação',text:'São 12 estruturas: barra lateral, trilho de ícones, abas superiores, painel de filtros, cápsula e outras. Clique para trocar.'},
 {sel:'#navTone',title:'Cores da navegação',text:'Defina o tom da barra, a cor do texto, o preenchimento, o formato do item ativo e a posição das páginas.'},
   {sel:'#navSliders',title:'Ajustes finos da navegação',text:'Arraste para mudar a largura da barra, a posição do primeiro item, o espaço entre itens, a altura de cada item e o tamanho do texto. Quando aparece “Automático”, o gerador escolhe sozinho.'},
 {sel:'#panelSliders',title:'Painel de conteúdo',text:'Recue o painel do topo, da direita ou de baixo e arredonde os cantos. Use para criar margem em volta do conteúdo.'},
 {sel:'#s-pages',title:'Páginas',text:'Crie e organize as páginas. Digite o nome, clique no ícone para escolher, oculte com o olho, duplique, mova para cima ou para baixo e remova.'},
 {sel:'#newPage',title:'Nova página',text:'Cria uma página vazia no fim da lista e já abre o campo de nome para você digitar.'},
 {sel:'#menuFrames',title:'Menu inicial',text:'Seis estilos de capa para a primeira tela: blocos, painel dividido, capa com foto, história, faixa e painel com imagem.'},
 {sel:'#s-logo',title:'Área do logotipo',text:'Ligue ou desligue a área do logotipo com o interruptor. Dentro dela cabem várias imagens lado a lado.'},
 {sel:'#logoAdd',title:'Várias imagens no logotipo',text:'Envie uma ou mais imagens de uma vez. Use ◀ e ▶ para ordenar e × para remover. Sem imagens, a área mostra o espaço reservado ou a marca escolhida.'},
 {sel:'#titleIn',title:'Título e empresa',text:'O título do relatório e o nome da empresa só aparecem no layout quando você digita algo nesses campos.'},
 {sel:'#fontSizes',title:'Textos e fontes',text:'Tamanhos em pontos, iguais aos do Power BI, e a fonte de cada grupo de textos.'},
 {sel:'#s-icons',title:'Ícones',text:'Estilo, espessura e fundo de todos os ícones. Cada página escolhe o seu na lista de páginas.'},
 {sel:'#s-cards',title:'Estilo dos cartões',text:'Simples, com faixa de título ou com traço. Você também ajusta cor, cantos, sombra e textura.'},
 {sel:'#s-photo',title:'Imagem do menu',text:'Envie uma foto ou cole o endereço de uma imagem. Use o campo de crédito para citar o autor.'},
 {sel:'#s-addon',title:'Complemento de tema',text:'Envie um arquivo .json com configurações extras, como uma licença do ZoomCharts. Ele é mesclado ao tema exportado.'},
 {sel:'#gallery',title:'Explorar molduras e paletas',text:'Veja todas as molduras e paletas aplicadas à sua página atual antes de escolher.'},
 {sel:'#pagetabs',title:'Trocar de página',text:'Clique em uma aba para editar cada página. O menu inicial fica na primeira aba.'},
 {sel:'#cardTools',title:'Cartões',text:'Arraste sobre a prévia para desenhar KPIs, gráficos, tabelas e filtros. Use modelos prontos ou copie os cartões para todas as páginas.'},
 {sel:'#exportBox',title:'Exportar',text:'Baixe a página em PNG (normal ou @2x), em SVG, o tema em .json ou o menu com todas as páginas em .zip.'},
 {sel:'#pbipBox',title:'Projeto Power BI',text:'Gera um .pbip pronto para abrir no Power BI Desktop, com navegação entre páginas e caixas de texto editáveis.'},
 {sel:'#zonesBox',title:'Posições',text:'Coordenadas de cada área, para posicionar botões e visuais no Power BI.'},
 {sel:'#slotsBox',title:'Cores do tema',text:'Edite cada cor do tema do Power BI, inverta a ordem de cada grupo e veja a prévia ao lado.'},
 {sel:'#clearBox',title:'Edições salvas',text:'Tudo fica guardado neste navegador, mesmo depois de fechar a página. Para começar do zero, use Limpar edições. O guia volta a aparecer em seguida.'},
 {sel:null,title:'Pronto',text:'Você conhece todos os recursos. Reabra este guia a qualquer momento pelo botão Guia, no topo.'}
];
  /* ============ motor do guia ============ */
let tourIdx=-1;
const tourHole=$('#tourHole'), tourCard=$('#tourCard');
function openAncestors(el){if(window.ribbonReveal)window.ribbonReveal(el);for(let n=el;n;n=n.parentElement) if(n.tagName==='DETAILS') n.open=true}
function placeTour(el){
  const cw=tourCard.offsetWidth, ch=tourCard.offsetHeight, edge=12;
  if(!el){
    tourHole.style.cssText='left:50%;top:50%;width:0;height:0';
    tourCard.style.left=Math.max(edge,(innerWidth-cw)/2)+'px';
    tourCard.style.top=Math.max(edge,(innerHeight-ch)/2)+'px';
    return;
  }
  const r=el.getBoundingClientRect(), pad=8, gap=18;
  tourHole.style.left=(r.left-pad)+'px'; tourHole.style.top=(r.top-pad)+'px';
  tourHole.style.width=(r.width+pad*2)+'px'; tourHole.style.height=(r.height+pad*2)+'px';
  const preview=document.querySelector('#previewWrap')?.getBoundingClientRect();
  const candidates=[
    {x:r.right+gap,y:r.top}, {x:r.left-cw-gap,y:r.top},
    {x:r.left,y:r.bottom+gap}, {x:r.left,y:r.top-ch-gap}
  ].map(c=>({x:clamp(c.x,edge,Math.max(edge,innerWidth-cw-edge)),y:clamp(c.y,edge,Math.max(edge,innerHeight-ch-edge))}));
  const overlap=(a,b)=>a&&b&&a.left<b.right&&a.right>b.left&&a.top<b.bottom&&a.bottom>b.top;
  const target={left:r.left-pad,right:r.right+pad,top:r.top-pad,bottom:r.bottom+pad};
  const cardRect=c=>({left:c.x,right:c.x+cw,top:c.y,bottom:c.y+ch});
  candidates.sort((a,b)=>{
    const score=c=> (overlap(cardRect(c),preview)?100000:0)+(overlap(cardRect(c),target)?50000:0)+Math.abs(c.x-r.left)*.02+Math.abs(c.y-r.top)*.01;
    return score(a)-score(b);
  });
  const chosen=candidates[0];
  tourCard.style.left=chosen.x+'px'; tourCard.style.top=chosen.y+'px';
}
function showTourStep(){
  const st=TOUR[tourIdx];
  const el=st.sel?document.querySelector(st.sel):null;
  if(el){openAncestors(el);el.scrollIntoView({block:'center',behavior:'smooth'})}
  tourCard.innerHTML=`<div class="step">Passo ${tourIdx+1} de ${TOUR.length}</div>
    <h3>${esc(st.title)}</h3>
    <p>${esc(st.text)}</p>
    <div class="tour-dots">${TOUR.map((_,i)=>`<i class="${i<=tourIdx?'on':''}"></i>`).join('')}</div>
    <div class="tour-actions">
      <button type="button" class="btn ghost" data-t="skip">Pular</button>
      <div class="row" style="gap:6px">
        <button type="button" class="btn" data-t="prev" ${tourIdx===0?'disabled':''}>Voltar</button>
        <button type="button" class="btn primary" data-t="next">${tourIdx===TOUR.length-1?'Concluir':'Próximo'}</button>
      </div>
    </div>`;
  tourHole.hidden=false; tourCard.hidden=false;
  setTimeout(()=>placeTour(el),el?380:0);
}
function startTour(){tourIdx=0;showTourStep()}
function endTour(){
  tourIdx=-1; tourHole.hidden=true; tourCard.hidden=true;
  S.tourDone=true; saveSoon();
}
tourCard.addEventListener('click',e=>{
  const b=e.target.closest('[data-t]'); if(!b) return;
  const a=b.dataset.t;
  if(a==='skip'||(a==='next'&&tourIdx>=TOUR.length-1)) endTour();
  else if(a==='prev'&&tourIdx>0){tourIdx--;showTourStep()}
  else if(a==='next'){tourIdx++;showTourStep()}
});
window.addEventListener('keydown',e=>{
  if(tourIdx<0) return;
  if(e.key==='Escape') endTour();
  else if(e.key==='ArrowRight'&&tourIdx<TOUR.length-1){tourIdx++;showTourStep()}
  else if(e.key==='ArrowLeft'&&tourIdx>0){tourIdx--;showTourStep()}
});
window.addEventListener('resize',()=>{
  if(tourIdx<0) return;
  const st=TOUR[tourIdx];
  placeTour(st.sel?document.querySelector(st.sel):null);
});
$('#guideBtn').addEventListener('click',()=>{
  document.querySelector('.wrap').scrollIntoView({behavior:'smooth',block:'start'});
  setTimeout(startTour,300);
});
/* painel da esquerda: uma seção aberta por vez, com botões de expandir/recolher tudo */
const sideSecs=()=>[...document.querySelectorAll('.side details.sec')];
$('#expandAll').addEventListener('click',()=>sideSecs().forEach(d=>d.open=true));
$('#collapseAll').addEventListener('click',()=>sideSecs().forEach(d=>d.open=false));
/* ============ faixa de opções ============ */
const RIBBON=[
  ['Página inicial',['s-look','s-text','s-size']],
  ['Navegação',['s-nav','s-pages']],
  ['Inserir',['s-logo','s-photo']],
  ['Estilo',['s-icons','s-cards']],
  ['Complementos',['s-addon']],
];
const ribbonIcons={
  's-look':'<rect x="3" y="3" width="7" height="7" fill="#70ad47"/><rect x="14" y="3" width="7" height="7" fill="#5b9bd5"/><rect x="3" y="14" width="7" height="7" fill="#ffc000"/><rect x="14" y="14" width="7" height="7" fill="#ed7d31"/>',
  's-text':'<path d="m6 17 6-14 6 14M8 12h8" fill="none" stroke="#555" stroke-width="2"/><path d="M3 21h18" stroke="#c43b37" stroke-width="3"/>',
  's-size':'<path d="M6 2h9l4 4v16H6z" fill="#fff" stroke="#777"/><path d="M15 2v5h4M9 11h7M9 15h7M9 19h5" fill="none" stroke="#5b9bd5"/>',
  's-photo':'<rect x="2" y="3" width="20" height="18" fill="#fff" stroke="#777"/><circle cx="8" cy="8" r="2" fill="#ffc000"/><path d="m3 20 7-8 4 4 3-6 4 10" fill="#70ad47"/>',
};
const ribbonFallback={'s-nav':'table','s-pages':'layers','s-logo':'star','s-icons':'sparkle','s-cards':'grid','s-addon':'gear'};
const ribbonSecs={};
const ribbonTabs=document.createElement('div');
ribbonTabs.className='ribbon-tabs';
ribbonTabs.setAttribute('role','tablist');
ribbonTabs.setAttribute('aria-label','Ajustes do relatório');
const ribbonBody=document.createElement('div');
ribbonBody.className='ribbon-body';
ribbonBody.id='ribbonPanel';
ribbonBody.setAttribute('role','tabpanel');
RIBBON.forEach(([name,ids],i)=>{
  const b=document.createElement('button');
  b.type='button';b.className='ribbon-tab';b.id='ribbonTab'+i;
  b.setAttribute('role','tab');b.setAttribute('aria-controls','ribbonPanel');b.dataset.tab=i;b.textContent=name;
  ribbonTabs.appendChild(b);
  ids.forEach(id=>{
    const sec=document.getElementById(id), summary=sec.querySelector('summary'), label=summary.textContent;
    ribbonSecs[id]=sec;sec.open=false;
    const art=ribbonIcons[id]?`<svg viewBox="0 0 24 24" aria-hidden="true">${ribbonIcons[id]}</svg>`:uiIcon(ribbonFallback[id]);
    summary.innerHTML=`<span class="ribbon-command-icon">${art}</span><span>${esc(label)}</span><span class="ribbon-chevron" aria-hidden="true">▾</span>`;
    summary.setAttribute('aria-controls',id+'Panel');
    summary.setAttribute('aria-expanded','false');
    const panel=sec.querySelector('.sec-b');panel.id=id+'Panel';
    panel.setAttribute('role','region');panel.setAttribute('aria-label',label);
    const panelHead=document.createElement('div');panelHead.className='settings-head';
    const panelTitle=document.createElement('strong');panelTitle.textContent=label;
    const close=document.createElement('button');close.type='button';close.className='settings-close';close.textContent='×';close.setAttribute('aria-label','Fechar ajustes de '+label);
    close.addEventListener('click',()=>{closeRibbonGroups();summary.focus({preventScroll:true})});
    panelHead.append(panelTitle,close);panel.prepend(panelHead);
    summary.addEventListener('click',e=>{
      e.preventDefault();
      const open=!sec.open;
      closeRibbonGroups();
      if(open) openRibbonGroup(sec,true);
    });
    ribbonBody.appendChild(sec);
  });
});
$('.side').prepend(ribbonTabs,ribbonBody);
function closeRibbonGroups(){
  Object.values(ribbonSecs).forEach(sec=>{sec.open=false;sec.querySelector('summary').setAttribute('aria-expanded','false')});
  closePicker();
  $('.wrap').classList.remove('ribbon-open');
  requestAnimationFrame(fitPreview);
}
function positionRibbonGroup(sec){
  const panel=sec.querySelector('.sec-b');
  if(innerWidth>=1000){
    const bounds=$('.wrap').getBoundingClientRect();
    const left=bounds.right-24-340;
    panel.style.top='80px';
    panel.style.left=left+'px';
    panel.style.maxHeight=Math.max(160,innerHeight-96)+'px';
  }else{
    panel.style.removeProperty('top');
    panel.style.removeProperty('left');
    panel.style.removeProperty('max-height');
  }
}
function openRibbonGroup(sec,revealPreview=false){
  $('.wrap').classList.add('ribbon-open');
  sec.open=true;sec.querySelector('summary').setAttribute('aria-expanded','true');
  positionRibbonGroup(sec);
  requestAnimationFrame(()=>{
    fitPreview();
    if(revealPreview&&tourIdx<0){
      const target=innerWidth>=1000?$('#stageLeft'):sec;
      target.scrollIntoView({block:'start',behavior:'smooth'});
    }
  });
}
function showTab(i){
  closeRibbonGroups();
  ribbonTabs.querySelectorAll('.ribbon-tab').forEach((b,j)=>{
    b.setAttribute('aria-selected',String(j===i));b.tabIndex=j===i?0:-1;
  });
  ribbonBody.setAttribute('aria-labelledby','ribbonTab'+i);
  RIBBON.forEach(([,ids],j)=>ids.forEach(id=>{ribbonSecs[id].hidden=j!==i}));
}
ribbonTabs.addEventListener('click',e=>{const b=e.target.closest('.ribbon-tab');if(b)showTab(+b.dataset.tab)});
ribbonTabs.addEventListener('keydown',e=>{
  if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;
  e.preventDefault();
  const current=+document.activeElement.dataset.tab;
  const i=e.key==='Home'?0:e.key==='End'?RIBBON.length-1:(current+(e.key==='ArrowRight'?1:-1)+RIBBON.length)%RIBBON.length;
  showTab(i);ribbonTabs.children[i].focus();
});
// O painel permanece aberto durante as edições e os cliques fora dele.
// Controles recriados durante uma ação também não devem provocar o fechamento.
document.addEventListener('keydown',e=>{
  if(e.key!=='Escape'||e.defaultPrevented)return;
  const open=Object.values(ribbonSecs).find(sec=>sec.open);
  if(open){closeRibbonGroups();open.querySelector('summary').focus()}
});
window.addEventListener('resize',()=>Object.values(ribbonSecs).filter(sec=>sec.open).forEach(positionRibbonGroup));
window.addEventListener('scroll',()=>Object.values(ribbonSecs).filter(sec=>sec.open).forEach(positionRibbonGroup),{passive:true});
window.ribbonReveal=el=>{
  const sec=el&&el.closest('details.sec');
  const i=RIBBON.findIndex(([,ids])=>sec&&ids.includes(sec.id));
  if(i>=0){showTab(i);openRibbonGroup(sec)}
};
showTab(0);
  /* prévia: ajusta o tamanho à altura disponível, maximiza e minimiza */
const stageLeft=$('#stageLeft'), previewWrap=$('#previewWrap'), ruledEl=$('#ruled');
function fitPreview(){
  const [W,H]=dims(), max=stageLeft.classList.contains('max');
  const availH=max?innerHeight-200:Math.max(240,innerHeight-220);
  const availW=max?innerWidth-100:Math.max(100,stageLeft.clientWidth-60);
  const w=Math.max(100,Math.min(availW,availH*W/H));
  previewWrap.style.width=w+'px';
  ruledEl.style.width=(w+36)+'px';
  $('#pvInfo').textContent=`${W} × ${H} px`;
}
function setMax(on){
  stageLeft.classList.toggle('max',on);
  document.body.style.overflow=on?'hidden':'';
  $('#pvMax').hidden=on;
  $('#pvMin').hidden=!on;
  fitPreview();
}
$('#pvMax').addEventListener('click',()=>setMax(true));
$('#pvMin').addEventListener('click',()=>setMax(false));
window.addEventListener('keydown',e=>{
  if(e.key==='Escape'&&stageLeft.classList.contains('max')&&tourIdx<0&&$('#picker').hidden) setMax(false);
});
window.addEventListener('resize',fitPreview);
/* ============ inicialização (carrega o que foi salvo) ============ */
async function init(){
  const saved=await storeGet('state');
  if(saved&&typeof saved==='object') S={...clone(DEF),...saved};
  if(S.subtitle==='Atualizado em · DD MMM AAAA') S.subtitle='';
  if(!S.cards||typeof S.cards!=='object') S.cards={};
  if(!Array.isArray(S.logoImages)) S.logoImages=[];
  if(!PALS.some(p=>p.id===S.pal)) S.pal='finance';
  if(!['light','dark'].includes(S.mode)) S.mode='light';
  if(!NAVS[S.nav]) S.nav='wide';
  if(!MENUS[S.menuStyle]) S.menuStyle='tiles';
  ensurePages();
  buildSliders();
  drawPalList();
  drawPageEditor();
  syncControls();
  drawAddon();
  update();
  // O guia permanece disponível no botão Guia, sem interromper o editor.
  if(navigator.storage&&navigator.storage.persist) navigator.storage.persist().catch(()=>{});
}
setupExperience();
init();
