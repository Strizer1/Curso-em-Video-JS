function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(243, 243, 118)'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(240, 113, 39)'
    } else {
        // BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = 'rgb(104, 104, 104)'
    }
}