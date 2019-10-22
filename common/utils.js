export function findById(characterArray, id) {
    for (let i = 0; i < characterArray.length; i++) {
        const character = characterArray[i];
        if (character.id === id) { 
            return character;
        }
    }
}
export function saveUser(user) {
    const jsonUser = JSON.stringify(user);
    localStorage.setItem('user', jsonUser);
}

export function getUser() {
    const getJsonUser = localStorage.getItem('user');
    if (!getJsonUser) return null;
    const user = JSON.parse(getJsonUser);
    return user;
}
export function renderTableRow(userName, wins, losses) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.name = userName;
    tr.appendChild(nameCell);

    const winCell = document.createElement('td');
    winCell.textContent = wins;
    tr.appendChild(winCell);

    const lossesCell = document.createElement('td');
    lossesCell.textContent = losses;
    tr.appendChild(lossesCell);

    const percentageCell = document.createElement('td');
    percentageCell.className = 'win-loss-percentage';
    const total = wins / losses;
    percentageCell.textContent = total;
    tr.appendChild(percentageCell);

    return tr;
}
//export function correctFace() {
//    const correctFace = Math.floor(Math.random() * characterArray.length);
//    return characterArray[correctFace];
//}
//let guess = 0;

//const userGuess = document.getElementById('user-guess');
//const guessedFace = userGuess.value;

//export function compareFace(guessedFace, correctFace.id) {
//    if (guessedFace === correctFace) { 
//        window.location = '../results-page/index.html';
//    } else {
//        alert('Your as wrong as Pyrrhus was about Rome');
//        guess++;
//    }
//}
export function createUser(formData) {
    const user = {
        name: formData.get('name'),
    };
    return user;
}