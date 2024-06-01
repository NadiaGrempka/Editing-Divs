window.onload = function () {

    const btn1 = document.getElementById('addDiv');
    btn1.addEventListener('click', addNewDiv);

    function addNewDiv() {
        const newDiv = document.createElement("div");
        newDiv.setAttribute('class', 'div');
        const div = document.getElementById("main");
        div.appendChild(newDiv);
    }

    const btn2 = document.getElementById('deleteDiv');
    btn2.addEventListener('click', deleteDiv);
    function deleteDiv(){
        const divs = document.getElementsByClassName('div');
        divs[divs.length - 1].remove(); // bierze wszystkie divy i odejmuje wartosc 1 po to zeby usuna ostatni z dolu
    }

    const btn3 = document.getElementById('changeColor');
    btn3.addEventListener('click', addColor);

    function addColor(){
        const colorPicker = document.getElementById('colorPicker');
        const chosenColor = colorPicker.value;

        const allDivs = document.getElementById('main');
        const divs = allDivs.getElementsByTagName('div');

        if (divs.length >= 3) {
            divs[2].style.backgroundColor = chosenColor;
        }
    }

    const btn4 = document.getElementById('newTxt');
    btn4.addEventListener('click', addNewTxt);

    function addNewTxt(){
        const mainContainer = document.getElementById('main');
        const allDivs = mainContainer.getElementsByTagName('div');
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].textContent = "nowy tekst";
        }
    }
}