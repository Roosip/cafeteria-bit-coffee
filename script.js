document.addEventListener('DOMContentLoaded', function() {
  let visualizaContainer = document.querySelector('.produto-visualizar');
  let visualizarCaixa = visualizaContainer.querySelectorAll('.visualizar');

  document.querySelectorAll('.shop-container .produto').forEach(produto => {
    produto.onclick = () => {
      visualizaContainer.style.display = 'flex';
      let name = produto.getAttribute('data-name');
      visualizarCaixa.forEach(visualizar => {
        let target = visualizar.getAttribute('data-target');
        if (name === target) {
          visualizar.classList.add('active');
        } else {
          visualizar.classList.remove('active');
        }
      });
    };
  });

  visualizarCaixa.forEach(close => {
    let closeButton = close.querySelector('.fa-times');
    if (closeButton) {
      closeButton.onclick = () => {
        close.classList.remove('active');
        visualizaContainer.style.display = 'none';
      };
    }
  });
});
