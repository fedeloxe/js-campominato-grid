// // Tramite una funzione creo la classe dei quadrati 
// function createSquare(){
  
//     //per fare in modo che non generi la griglia più volte do a grid una stringa vuota prima del ciclo che genera la griglia 
//     document.getElementById('grid').innerHTML="";

//     for(let i=0; i<100; i++){
//         let cell= document.createElement('div')
    
//         cell.classList.add('square')


//         //assegno alle celle il numero corrispondente
//         cell.innerText= i+1

//         //aggingo il click alla singola cella
//         cell.addEventListener('click', function(){
//             this.classList.add('click')
//             console.log('hai cliccato il numero '+ this.innerText)
//         })
         
//         //tramite appenchild assegno al figlio di grid la variabile cell che aggiunge la classe square a ogni singolo elemento 
//         document.getElementById('grid').appendChild(cell);

//     }

  
// }
// // richiamo la funzione nel bottone in modo tale da generare la griglia solo al click 
// let button = document.getElementById('play');
// button.addEventListener('click', function(){
//     createSquare()

   
// })



//--------------------------------bonus-----------------------------------


function createNewGame(){
    let difficulty = parseInt(document.getElementById('level').value);

    let cellsNumber;
    let cellsPerRow;

    switch(difficulty){
        case 1: 
        cellsNumber = 100;
        cellsPerRow = 10;
        break;
        case 2:
            cellsNumber = 81;
            cellsPerRow = 9;
            break;
        case 3:
            cellsNumber = 49;
            cellsPerRow = 7;
            break
        default:
            cellsNumber = 100;
            cellsPerRow = 10;
            break
    }

    generateGameGrid(cellsNumber, cellsPerRow);
}

function createSingleCell(num, cells_per_row){
    const cell = document.createElement('div');

    cell.classList.add('square');

    let sideLenght= `calc(100% / ${cells_per_row})`;

    cell.style.width= sideLenght;
    cell.style.height= sideLenght;

    cell.innerText = num;

    return cell;



}



function generateGameGrid(cellsNumber, cells_per_row){
    
    document.querySelector('.container-campo').innerHTML= '';
    
    const grid = document.createElement('div');
    grid.classList.add('grid');

    for(let i=0; i<cellsNumber; i++){
        const cell = createSingleCell(i, cells_per_row);
        cell.addEventListener('click', function(){
            this.classList.add('click');
        })
        grid.appendChild(cell);
    }

    document.querySelector('.container-campo').appendChild(grid)
}


document.getElementById('play').addEventListener('click', function(){
    createNewGame();
    
})

