// Copiar al portapapeles

let boton = document.querySelector('.copiado')
let icon = document.querySelector('#cambiar')
boton.onclick = function(){
    navigator.clipboard.writeText('Prueba de copiar texto al portapapeles funcionando.');
    
    icon.classList.remove('bi-clipboard')
    icon.classList.add('bi-clipboard-check')

}