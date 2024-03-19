document.addEventListener('DOMContentLoaded', function() {
  const textoOriginal = "Aqui vai o seu texto original oculto.";
  const textoDigitado = document.getElementById('texto-digitado');
  const correcao = document.getElementById('correcao');

  textoDigitado.addEventListener('input', function() {
    const palavrasOriginais = textoOriginal.split(' ');
    const palavrasDigitadas = textoDigitado.value.split(' ');
    let correcaoHTML = '';

    palavrasOriginais.forEach((palavraOriginal, index) => {
      if (palavrasDigitadas[index] === palavraOriginal) {
        correcaoHTML += `<span>${palavraOriginal}</span> `;
      } else {
        correcaoHTML += `<span style="color: red;">${palavrasDigitadas[index]}</span> `;
      }
    });

    correcao.innerHTML = correcaoHTML.trim();
  });
});
