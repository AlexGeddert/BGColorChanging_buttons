(function () {
     //beliebigen Button hinzufügen durch btnFarbe
    let btnYellow, btnBlue, btnGreen, btnRed;

    function init() {
        //alle hinzugefügten Buttons nach folgendem dreizeiligem Muster anpassen
        btnYellow = document.querySelector('#btnYellow');
        btnYellow.onclick = function () {
            setBackground('yellow');
        };

        btnBlue = document.querySelector('#btnBlue');
        btnBlue.onclick = function () {
            setBackground('steelblue');
        };

        btnGreen = document.querySelector('#btnGreen');
        btnGreen.onclick = function () {
            setBackground('green');
        };

        btnRed = document.querySelector('#btnRed');
        btnRed.onclick = function () {
            setBackground('red');
        };
    }

    //Funktion: "ändere Hintergrundfarbe"
    function setBackground(color) {
        document.body.style.backgroundColor = color;
    }

    //Funktion: "setze Hintergrundfarbe zurück"
    function setBackgroundDefault() {
        document.body.style.backgroundColor = 'white';
    }

    window.addEventListener('load', init);

})();
