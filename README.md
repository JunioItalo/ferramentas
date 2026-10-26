Gerador de Layout para Power BI
Abra `index.html` em um navegador moderno ou publique-o em hospedagem estática. As configurações ficam salvas localmente neste navegador. A biblioteca JSZip 3.10.1 é carregada de uma CDN; downloads de arquivos ZIP exigem conexão com a internet.
O tamanho inicial é 1920 × 1080. Em Tamanho da página, selecione uma predefinição ou escolha Personalizado e informe largura e altura em pixels, de 1 a 16.384. As dimensões atualizam a prévia, são usadas nas exportações e ficam salvas no navegador.
Em Paleta, filtre as combinações por setor, sensação ou tom. Cada paleta tem cinco cores selecionáveis; ao escolher uma amostra, ela se torna a cor de destaque e atualiza a prévia, a navegação e o tema. Também é possível extrair cinco cores dominantes de uma imagem por agrupamento k-means. O tema usa essas cinco cores e deriva outras três para completar as oito cores de dados do Power BI.
A navegação oferece 12 estruturas. O menu inicial tem seis estilos, com imagem opcional, posição dos itens, desfoque, escurecimento, ajuste, lado e crédito. Configure páginas, textos, logotipo e ícones; arraste os cartões na tela e use as setas, Shift + setas e Delete para ajustá-los. O tema permite editar cores estruturais e semânticas, fontes e configurações adicionais em JSON.
Exportação
`PNG @2x` e `SVG` exportam o fundo com as dimensões selecionadas.
O ZIP de menu e páginas inclui uma imagem PNG para o menu inicial e outra para cada página do relatório.
O tema `theme.json` e os arquivos JSON do projeto são analisados antes do download.
O `.pbip.zip` inclui o relatório, o modelo semântico, navegação, caixas de texto editáveis, visuais de exemplo, imagens de fundo e o tema personalizado.
Extraia o ZIP em um caminho curto e abra o arquivo `.pbip` no Power BI Desktop com PBIP/PBIR/TMDL habilitados. A validação de sintaxe JSON não substitui a verificação final de esquema e renderização no Power BI Desktop.
