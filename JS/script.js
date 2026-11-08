/* =====================================================================
   script.js  |  Comportamentos do site
   Esta parte é opcional: se o arquivo sumir, o site continua funcionando,
   só perde o relógio, o ano automático e o destaque das abas.
   ===================================================================== */


/* ---------------------------------------------------------------------
   1) ANO AUTOMÁTICO NO RODAPÉ
   Procura o elemento com id="ano" no HTML e coloca o ano atual nele.
   Assim você nunca precisa editar o ano do copyright.
   --------------------------------------------------------------------- */
document.getElementById('ano').textContent = new Date().getFullYear();


/* ---------------------------------------------------------------------
   2) RELÓGIO DA BARRA DE TAREFAS
   Mostra a hora (hh:mm) no canto direito e atualiza a cada 15 segundos.
   Para mudar a frequência, troque 15000 (milissegundos).
   --------------------------------------------------------------------- */
var relogio = document.getElementById('relogio');

function atualizaRelogio() {
  relogio.textContent = new Date().toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

atualizaRelogio();                    // mostra a hora assim que a página abre
setInterval(atualizaRelogio, 15000);  // e repete de tempos em tempos


/* ---------------------------------------------------------------------
   3) DESTACAR A ABA DA SEÇÃO QUE ESTÁ NA TELA
   Conforme você rola a página, a aba correspondente na barra de tarefas
   fica "apertada" (classe CSS "ativa", definida em estilo.css).
   Funciona assim: cada seção (.janela) é observada; quando ela cruza a
   faixa do meio da tela, a aba com data-alvo igual ao id da seção é marcada.
   Seções novas funcionam sozinhas, basta ter a aba com o data-alvo certo.
   --------------------------------------------------------------------- */
var abas = document.querySelectorAll('.taskbar-abas a');

// Só roda em navegadores que suportam IntersectionObserver (todos os atuais)
if ('IntersectionObserver' in window) {

  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        abas.forEach(function (aba) {
          // liga a classe "ativa" só na aba da seção visível
          aba.classList.toggle('ativa', aba.dataset.alvo === entrada.target.id);
        });
      }
    });
  }, {
    // Faixa de detecção: do 35% ao 45% da altura da tela (região central).
    // Mude esses valores se quiser que a troca aconteça mais cedo ou mais tarde.
    rootMargin: '-35% 0px -55% 0px'
  });

  document.querySelectorAll('.janela').forEach(function (secao) {
    observador.observe(secao);
  });
}
