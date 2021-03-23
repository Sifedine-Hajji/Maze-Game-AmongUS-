document.querySelector('.main').innerHTML = '';
const main = document.querySelector('.main');

const multiline =
`
***********.*
*S.....**.*.T
*****.....*.*
**.**.***I*.*
*...*.*.***.*
**.**.*.***.*
**..*.......*
**.**.*****.*
*.........*.*
*.******....*
*.......**.**
*************
`

//========================= REGLES ET DESCRIPTION =======================//

// window.alert("this is a special Maze Game inspired by Among Us ");
// window.alert("rules: there is an impostor find your way through the tunnels to get the report button ps: Red will help you find youre ")

//========================== JUMBOTRON ========================//

const jumbotron = document.createElement('div');
jumbotron.className = "jumbotron";
main.appendChild(jumbotron);

const image1 = document.createElement('img');
image1.src = 'Pics/jumbotron2.png';
jumbotron.appendChild(image1);

const titre = document.createElement('h1');
titre.textContent = 'WELCOME TO THE AMONG US MAZE GAME !';
jumbotron.appendChild(titre);

const image2 = document.createElement('img');
image2.src = 'Pics/jumbotron2.png';
jumbotron.appendChild(image2);




//============================ MAIN CONTENU===============================//


const labyrinthe = document.createElement('div')
labyrinthe.className = "labyrinthe";
main.appendChild(labyrinthe);

const player = document.createElement('div');
player.className = 'joueur';

const imposteur = document.createElement('div')
imposteur.className = 'imposteur';

//========================= creation du labyrinthe ======================//

for (let i = 0; i < multiline.length; i++) {
    
    if (multiline[i].split('') == '*') {

        const walls = document.createElement('div');
        walls.className = 'murs tile';
        labyrinthe.appendChild(walls);
    } else if (multiline[i].split('') == '.') {

        const paths = document.createElement('div');
        paths.className = 'chemins tile';
        labyrinthe.appendChild(paths);

    } else if (multiline[i].split('') == 'S') {

        const start = document.createElement('div');
        start.className = 'chemins start tile ';
        labyrinthe.appendChild(start);

    } else if (multiline[i].split('') == 'T') {

        const end = document.createElement('div');
        end.className = 'chemins end tile ';
        labyrinthe.appendChild(end);

        const treasure = document.createElement('div');
        treasure.className = 'tresor';
        end.appendChild(treasure);

    }else if (multiline[i].split('') == 'I') {
        const deadcase = document.createElement('div');
        deadcase.className = 'chemins tile';
        labyrinthe.appendChild(deadcase);

        console.log(imposteur);
    }
    

}

//====================== DEPLACEMENTS JOUEURS ========================//

    //==================== FONCTIONS ======================//
    function movetop() {
    let play = playerpos - 13
    if (document.querySelector("body > main > div div:nth-child(" + play + ")").classList.contains('chemins')) {
        playerpos = play

        document.querySelector("body > main > div div:nth-child(" + playerpos + ")").appendChild(player)
    } else {
        console.log('il y a un mur');
    }
}

function moveright() {
    let play = playerpos + 1
    if (document.querySelector("body > main > div div:nth-child(" + play + ")").classList.contains('chemins')) {
        playerpos++

        document.querySelector("body > main > div div:nth-child(" + playerpos + ")").appendChild(player)
    } else {
        console.log('il y a un mur');
    }
}

function moveleft() {
    let play = playerpos - 1
    if (document.querySelector("body > main > div div:nth-child(" + play + ")").classList.contains('chemins')) {
        playerpos--

        document.querySelector("body > main > div div:nth-child(" + playerpos + ")").appendChild(player)
    } else {
        console.log('il y a un mur');
    }
}

function movebottom() {
    let play = playerpos + 13
    if (document.querySelector("body > main > div div:nth-child(" + play + ")").classList.contains('chemins')) {
        playerpos = playerpos + 13

        document.querySelector("body > main > div div:nth-child(" + playerpos + ")").appendChild(player)
    } else {
        console.log('il y a un mur');
    }
}

//======================== players positions ========================//
document.querySelector("body > main > div > div.start").appendChild(player)
let playerpos = 15
document.querySelector("body > main > div > div:nth-child(49)").appendChild(imposteur)
let impostorpos = 49
//========================= Conditions mouvements ======================//

document.body.addEventListener('keyup', function (e) {

    if (e.key == 'ArrowUp') {
        movetop()
    }
    if (e.key == 'ArrowRight') {
        moveright()
    }
    if (e.key == 'ArrowLeft') {
        moveleft()
    }
    if (e.key == 'ArrowDown') {
        movebottom()
    }
    if (playerpos == 26 ) {
    main.innerHTML = "<video autoplay muted><source src='vids/Emergency.mp4' type='video/mp4' /></video>"
    setTimeout(function(){ document.querySelector("body > main > video").style.display = location.reload() }, 2000);
    }
    if (playerpos == impostorpos) {
        main.innerHTML = "<video autoplay muted><source src='vids/red-kill-white.mp4' type='video/mp4' /></video>"
        setTimeout(function(){ document.querySelector("body > main > video").style.display = location.reload() }, 5000);
        alert('you are dead');
    }


})
