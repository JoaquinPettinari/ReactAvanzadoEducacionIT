function* enemies() {
    let anterior = 1; let ultimo = 1;
    while (true) {
        const siguiente = anterior + ultimo;
        yield siguiente;
        anterior = ultimo;
        ultimo = siguiente;
    }
}

const enemyGenerator = enemies();

function nextLevel(number) {
    console.log("Level: " + number)
    console.log("Enemigos: " + enemyGenerator.next().value)
}

for (let i = 0; i < 10; i++) {
    nextLevel(i)   
}