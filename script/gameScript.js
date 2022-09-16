let playerTurn = "X";
let currPos = ["", "", "", "", "", "", "", "", ""];
let btns = document.querySelectorAll(".btn");
let leftBlocks = 9;
let result = document.querySelector('#result');
let conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function ticTacToe(element, index){
    let player = playerTurn;
    element.value = playerTurn;
    element.style.cursor = "auto";
    element.style.background = "rgb(55, 55, 66)";
    element.style['border-color'] = "rgb(128, 128, 237)";
    element.style['border-width'] = "2px";
    element.disabled = true;
    currPos[index] = playerTurn;
    playerTurn = (playerTurn === "X") ? "O" : "X";
    result.innerHTML = `Player ${playerTurn} Turn`;

    for (let i=0;i<btns.length;i++)
    {
        let condition = conditions[i];
        let a = currPos[condition[0]];
        let b = currPos[condition[1]];
        let c = currPos[condition[2]];

        if (a == "" || b == "" || c == "") {
            continue;
        }
        
        if ((a == b) && (b == c)){
            result.innerHTML = `Player ${player} Won 🎉!`;
            btns.forEach((btn) => {
                btn.disabled = true;
                btn.style['border-width'] = "2px";
                btn.style['border-color'] = "rgb(128, 128, 237)";
                btn.style.cursor = "auto";
            });
            
        }
        else if (leftBlocks <= 0 && (a != b) && (b != c)){
            result.innerHTML = "Tie!";
            btns.forEach((btn) => {
                btn.disabled = true;
                btn.style['border-width'] = "2px";
                btn.style['border-color'] = "rgb(128, 128, 237)";
                btn.style.cursor = "auto";
            });
            
        }
        leftBlocks--;
    }
    
}

function reset()
{
    currPos = ["", "", "", "", "", "", "", "", ""];
    leftBlocks = 9;
    btns.forEach((btn) => {
        btn.value = "";
        btn.disabled = false;
        btn.style['border-width'] = "4px";
        btn.style['border-color'] = "rgb(99, 99, 230)";
        btn.style.cursor = "pointer";
        btn.addEventListener('mouseenter', () => {
            btn.style['border-width'] = "2px";
            btn.style['border-color'] = "rgb(128, 128, 237)";
            btn.style.cursor = "pointer";
        });
        btn.addEventListener("mouseleave", () => {
            btn.style['border-width'] = "4px";
            btn.style['border-color'] = "rgb(99, 99, 230)";
            btn.style.cursor = "auto";
        })
    });
    playerTurn = "X";
    result.innerHTML = "Player X Turn"
}

document.querySelector(".reset-btn").addEventListener('click', reset);
btns.forEach((btn, i) => {
    btn.addEventListener('click', () => ticTacToe(btn, i));
});

