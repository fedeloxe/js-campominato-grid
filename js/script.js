// Tramite una funzione creo la classe dei quadrati 
function createSquare(i){
    let currentElement= document.createElement('div')

    currentElement.classList.add('square')

    currentElement.innerText= i;

    return currentElement;
}

let grid = document.getElementById('grid')

//aggiungo il bottone play

//tramite un ciclo creo i quadrati e li inserisco allínterno della classe
for(let i=1; i<= 100; i++){
    const currentSquare = createSquare(i)


    currentSquare.addEventListener('click', function(){
        this.classList.add('click');
        console.log('hai cliccaro il numero '+ this.innerText)
    });

    grid.appendChild(currentSquare);
}