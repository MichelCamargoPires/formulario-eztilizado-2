/enviar whats app/

document.querySelector('#bo').addEventListener('click', function () {
    let a = document.querySelector('#a').value;
    let b = document.querySelector('#b').value;
    let c = document.querySelector('#c').value;
    let d = document.querySelector('#d').value;
    // let exampleFormControlSelect1 = document.querySelector('#exampleFormControlSelect1').value;

    let url = "https://api.whatsapp.com/send?phone=5511998522382&text=  " + a + "\n \n  E-mail: " +
        b + "\n\n local: " + c  + " \n\n telefone: " + d ;

    window.open(url);

});



