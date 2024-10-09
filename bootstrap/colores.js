/*
codigo.innerHTML = ''
*/
let codigo = document.querySelector('.codigo')

let btnprimary = document.querySelector('.btn-primary')
let btnsecondary = document.querySelector('.btn-secondary')
let btninfo = document.querySelector('.btn-info')
let btnsuccess = document.querySelector('.btn-success')
let btndanger = document.querySelector('.btn-danger')
let btnwarning = document.querySelector('.btn-warning')
let btndark = document.querySelector('.btn-dark')
let btnlight = document.querySelector('.btn-light')

btnprimary.onclick = function () {
    codigo.innerHTML = ''
    codigo.innerHTML = '\n &ltbutton class="btn btn-primary"&gtPrimary&lt/button&gt'
    Prism.highlightAll();
}
btninfo.onclick = function () {
    codigo.innerHTML = ''
    codigo.innerHTML = '\n &ltbutton class="btn btn-info"&gtInfo&lt/button&gt'
    Prism.highlightAll();
}
btnsuccess.onclick = function () {
    codigo.innerHTML = ''
    codigo.innerHTML = '\n &ltbutton class="btn btn-success"&gtSuccess&lt/button&gt'
    Prism.highlightAll();
}
btndanger.onclick = function () {
    codigo.innerHTML = ''
    codigo.innerHTML = '\n &ltbutton class="btn btn-danger"&gtDanger&lt/button&gt'
    Prism.highlightAll();
}


btnsecondary.onclick = function () {
    codigo.innerHTML = ''
    codigo.innerHTML = '\n &ltbutton class="btn btn-secondary"&gtSecondary&lt/button&gt'
    Prism.highlightAll();
}
btnwarning.onclick = function () {
    codigo.innerHTML = ''
    codigo.innerHTML = '\n &ltbutton class="btn btn-warning"&gtWarning&lt/button&gt'
    Prism.highlightAll();
}
btndark.onclick = function () {
    codigo.innerHTML = ''
    codigo.innerHTML = '\n &ltbutton class="btn btn-dark"&gtDark&lt/button&gt'
    Prism.highlightAll();
}
btnlight.onclick = function () {
    codigo.innerHTML = ''
    codigo.innerHTML = '\n &ltbutton class="btn btn-light"&gtLight&lt/button&gt'
    Prism.highlightAll();
}
