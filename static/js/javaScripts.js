let turno = "x";
let userMove = "";
let machineMove = "";
let allMove = "";
let count = 0;

function press(value) {
    count += 1;
    let passUser = document.getElementById("pasosUser");
    let button = document.getElementById(value);
    let availableMove = document.getElementById("availableMove").textContent;
    let avaMove = document.getElementById("availableMove");
    let passMachine = document.getElementById("pasosMaqui");
    turno = (turno === "o") ? "x" : "o";

    button.innerHTML = "<img src='/static/images/o.png' style='height:30px; width:30px'>";
    //button.innerHTML = '<img src="{{ url_for(\'static\', filename=\'images/o.png\') }}" style="height:37px; with:37px">';
    userMove += value;
    passUser.innerText = userMove;

    let xhr = new XMLHttpRequest();
    if (count <= 8) {
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                let res = xhr.responseText;
                console.log("res: " + res);
                let moves = JSON.parse(res);
                let button = document.getElementById(moves['move_rand']);

                if (moves['winnerUser'] === "gano usuario") {
                    avaMove.innerHTML = "Gano el Usuario";
                    console.log("movimiento Usu");
                    stopGame();
                } else if (moves['winnerMachine'] === "gano maquina") {
                    avaMove.innerHTML = "Gano la Maquina";
                    console.log("movimiento ma"+ machineMove);
                    stopGame();
                    button.innerHTML = "<img src='/static/images/x.jpg' style='height:30px; width:30px'>";
                    button.disabled = true;
                } else {
                    button.innerHTML = "<img src='/static/images/x.jpg' style='height:30px; width:30px'>";
                    button.disabled = true;
                    allMove = moves['allMove'];
                    machineMove = moves['machineMove'];
                    availableMove = moves['availableMove'];
                    avaMove.innerHTML = availableMove;
                    passMachine.innerText = machineMove;
                    turno = "x";
                    console.log(moves);
                    count += 1;
                }
            }
        };
        xhr.open("POST", "/");
        xhr.setRequestHeader("Content-type", "application/json");
        const data = {
            value,
            userMove,
            machineMove,
            allMove,
            availableMove
        };
        xhr.send(JSON.stringify(data));
    } else {
        avaMove.innerHTML = "Empate";
        console.log("empate");
    }
}

function restarGame() {
    let passUser = document.getElementById("pasosUser");
    let passMachine = document.getElementById("pasosMaqui");
    let availableMove = document.getElementById("availableMove");

    console.log("Reiniciar juego");
    for (let i = 1; i <= 9; i++) {
        let button = document.getElementById(`${i}`);
        button.innerHTML = "";
        document.getElementById(`${i}`).disabled = false;
    }
    turno = "x";
    userMove = "";
    machineMove = "";
    allMove = "";
    count = 0;
    availableMove.innerHTML = "123456789";
    passMachine.innerText = machineMove;
    passUser.innerText = userMove;
}

function validateplay(count) {
    if (count === 1) {
        console.log(count + "Movimientos del usuario");
        for (let j = 1; j <= 9; j++) {
            let button = document.getElementById(`${j}`);
            button.innerHTML = "";
            document.getElementById(`${j}`).disabled = false;
        }
        turno = "x";
        userMove = "";
        machineMove = "";
        allMove = "";

    } else if(count===2) {
        var startM = Math.floor(Math.random() * ((8+1) - 1) + 1);
        console.log(count + "  Empieza la maquina con la posicion "+ (startM));
        pressMachine(startM);


    }

}

function stopGame() {
    console.log("YA HAY UN GANADOR");
    for (let j = 1; j <= 9; j++) {
        let button = document.getElementById(`${j}`);
        button.innerHTML = "";
        document.getElementById(`${j}`).disabled = true;
    }
    turno = "x";
    userMove = "";
    machineMove = "";
    allMove = "";
    count = 0;

}

function pressMachine(value) {
    count += 1;
    let passUser = document.getElementById("pasosUser");
    let button = document.getElementById(value);
    let availableMove = document.getElementById("availableMove").textContent;
    let avaMove = document.getElementById("availableMove");
    let passMachine = document.getElementById("pasosMaqui");
    turno = (turno === "x") ? "o" : "x";

    button.innerHTML = "<img src='/static/images/x.jpg' style='height:30px; width:30px'>";
    //button.innerHTML = '<img src="{{ url_for(\'static\', filename=\'images/o.png\') }}" style="height:37px; with:37px">';
    let xhr = new XMLHttpRequest();
    if (count <= 8) {
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                let res = xhr.responseText;
                console.log("res: " + res);
                let moves = JSON.parse(res);
                let button = document.getElementById(moves['move_rand']);

                if (moves['winnerUser'] === "gano usuario") {
                    avaMove.innerHTML = "Gano el Usuario";
                } else if (moves['winnerMachine'] === "gano maquina") {
                    avaMove.innerHTML = "Gano la Maquina";
                    button.innerHTML = "<img src='/static/images/x.jpg' style='height:30px; width:30px'>";
                    button.disabled = true;
                } else {
                    button.innerHTML = "<img src='/static/images/x.jpg' style='height:30px; width:30px'>";
                    button.disabled = true;
                    allMove = moves['allMove'];
                    machineMove = moves['machineMove'];
                    availableMove = moves['availableMove'];
                    avaMove.innerHTML = availableMove;
                    passMachine.innerText = machineMove;
                    turno = "x";
                    console.log(moves);
                    count += 1;
                }
            }
        };
        xhr.open("POST", "/");
        xhr.setRequestHeader("Content-type", "application/json");
        const data = {
            value,
            userMove,
            machineMove,
            allMove,
            availableMove
        };
       // xhr.send(JSON.stringify(data));
    } else {
        avaMove.innerHTML = "Empate";
        console.log("empate");
    }
}