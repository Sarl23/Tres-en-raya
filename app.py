from random import randrange

from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/', methods=['GET'])
def home():
    return render_template("index.html")


@app.route('/', methods=["POST"])
def play():
    data = request.get_json()

    # acá asignamos los valores
    button = data['value']
    userMove = data['userMove']
    machineMove = data['machineMove']
    allMove = data['allMove']
    availableMove = data['availableMove']

    winnerMove = ["123", "456", "789", "147", "258", "369", "159", "357"]
    winnerUser = ""
    winnerMachine = ""

    # ordenar movimientos del usuario
    sortUserMove = list(userMove)
    sortUserMove.sort()
    sortedMoveUser = ""
    for i in sortUserMove:
        sortedMoveUser = sortedMoveUser + i

    # quitar el movimiento del usuario en los movimientos posibles
    auxAvailableMove = list(availableMove)
    availableMove = ""
    for i in auxAvailableMove:
        if i != button:
            availableMove = availableMove + i

    # Movimientos de la maquina

    moves = list(availableMove)
    if "5" in availableMove:
        move_rand = "5"
    elif ("12" in sortedMoveUser and "3" in availableMove) or ("57" in sortedMoveUser and "3" in availableMove) or (
            "69" in sortedMoveUser and "3" in availableMove):
        print("maquina juega en la casilla 3")
        move_rand = "3"
    elif ("13" in sortedMoveUser and "2" in availableMove) or ("58" in sortedMoveUser and "2" in availableMove):
        print("maquina juega en la casilla 2")
        move_rand = "2"
    elif ("23" in sortedMoveUser and "1" in availableMove) or ("47" in sortedMoveUser and "1" in availableMove) or (
            "59" in sortedMoveUser and "1" in availableMove):
        print("maquina juega en la casilla 1")
        move_rand = "1"
    elif ("45" in sortedMoveUser and "6" in availableMove) or ("39" in sortedMoveUser and "6" in availableMove):
        print("maquina juega en la casilla 6")
        move_rand = "6"
    elif ("46" in sortedMoveUser and "5" in availableMove) or ("28" in sortedMoveUser and "5" in availableMove) or (
            "37" in sortedMoveUser and "5" in availableMove) or ("19" in sortedMoveUser and "5" in availableMove):
        print("maquina juega en la casilla 5")
        move_rand = "5"
    elif ("56" in sortedMoveUser and "4" in availableMove) or ("17" in sortedMoveUser and "4" in availableMove):
        print("maquina juega en la casilla 4")
        move_rand = "4"
    elif ("78" in sortedMoveUser and "9" in availableMove) or ("15" in sortedMoveUser and "9" in availableMove) or (
            "36" in sortedMoveUser and "9" in availableMove):
        print("maquina juega en la casilla 9")
        move_rand = "9"
    elif ("79" in sortedMoveUser and "8" in availableMove) or ("25" in sortedMoveUser and "8" in availableMove):
        print("maquina juega en la casilla 8")
        move_rand = "8"
    elif ("89" in sortedMoveUser and "7" in availableMove) or ("14" in sortedMoveUser and "7" in availableMove) or (
            "35" in sortedMoveUser and "7" in availableMove):
        print("maquina juega en la casilla 7")
        move_rand = "7"
    else:
        # movimiento aleatorio
        move_rand = moves[randrange(len(moves))]

    # Quitamos el movimiento de la maquina
    availableMove = ""
    for i in moves:
        if i != move_rand:
            availableMove = availableMove + i

    machineMove = machineMove + move_rand

    # ordenar movimientos de la maquina
    move_machine = list(machineMove)
    move_machine.sort()
    sortedMoveMachine = ""
    for i in move_machine:
        sortedMoveMachine = sortedMoveMachine + i

    # comprobar si la maquina es la ganadora
    for i in winnerMove:
        if len(sortedMoveMachine) > 3:
            listWinnerMove = list(i)
            listSortedMoveMachine = list(sortedMoveMachine)
            result = all(elem in listSortedMoveMachine for elem in listWinnerMove)
            if result:
                print(listWinnerMove, listSortedMoveMachine)
                winnerMachine = "gano maquina"

        if i in sortedMoveMachine:
            winnerMachine = "gano maquina"
            print("gano la maquina")

    allMove = allMove + button + move_rand

    # Comprobar si el usuario es el ganador
    for i in winnerMove:
        if len(sortedMoveUser) > 3:
            listWinnerMove = list(i)
            listSortedMoveUser = list(sortedMoveUser)
            result = all(elem in listSortedMoveUser for elem in listWinnerMove)
            if result:
                print(listWinnerMove, listSortedMoveUser)
                winnerUser = "gano usuario"

        if i in sortedMoveUser:
            winnerUser = "gano usuario"
            print("gano el usuario")

    # formar el json a retonar de la peticion
    json = {
        "userMove": userMove,
        "machineMove": machineMove,
        "allMove": allMove,
        "availableMove": availableMove,
        "move_rand": move_rand,
        "sortedMoveUser": sortedMoveUser,
        "sortedMoveMachine": sortedMoveMachine,
        "winnerUser": winnerUser,
        "winnerMachine": winnerMachine
    }

    print(button, userMove, machineMove, allMove, availableMove)

    return json


if __name__ == '__main__':
    app.run()
