$(document).ready(() => {

    $('.card').hide()

    // Capturar la url
    const url       = window.location.search
    const urlParams = new URLSearchParams(url)
    const myParam   = urlParams.get('color')

    // Mostrar card dependiendo el parametro enviado
    switch(myParam) {
        case 'amarillo':
            $('.card-yellow').show()
            break

        case 'azul':
            $('.card-blue').show()
            break

        case 'rojo':
            $('.card-red').show()
            break
    }

})