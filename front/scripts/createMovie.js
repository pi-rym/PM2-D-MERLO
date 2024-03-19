
document.addEventListener("DOMContentLoaded", function() {
    
    var formulario = document.getElementById('Form');
    var inputs = formulario.querySelectorAll('input');
    var botonLimpiar = document.getElementById('limpiarCampos');
    var botonEnviar = document.getElementById('enviarMovie');

    function limpiarFormulario() {
      inputs.forEach(function(input) {
        input.value = '';
      });
    }

    function verificarCampos() {
      var camposLlenos = true;
      inputs.forEach(function(input) {
        if (input.value === '') {
          camposLlenos = false;
          return;
        }
      });
      if (camposLlenos) {
        formulario.submit();
      } else {
        alert('Todos los campos deben estar completos');
      }
    }

    botonLimpiar.addEventListener('click', limpiarFormulario);
    botonEnviar.addEventListener('click', verificarCampos);
  });