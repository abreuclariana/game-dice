// Player 1

let randomNumber1 = Math.floor(Math.random() * 6) + 1

let randomDiceImage = 'dice' + randomNumber1 + '.png' //dice1 ou dice2.png - vai depender do número aleatório.
let randomImageSource = 'img/' + randomDiceImage // é a mesma coisa de fazer - img/dice2.

let image1 = document.querySelectorAll('img')[0]

image1.setAttribute('src', randomImageSource) // setAttribute - serve para alterar um atributo usando JS com HTML.

// Player 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1
let randomImageSource2 = 'img/dice' + randomNumber2 + '.png'
document.querySelectorAll('img')[1].setAttribute('src', randomImageSource2)

if(randomNumber1 > randomNumber2){
   document.querySelector('h1').innerHTML = '🏆 Player 1 won!'

}else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = '🏆 Player 2 won!'
}else{
    document.querySelector('h1').innerHTML = 'Draw!'
}