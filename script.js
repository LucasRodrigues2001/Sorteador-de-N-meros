
const gameNumbe = (Math.floor(Math.random() * 10)) + 1
console.log(gameNumbe)
const gameUsuario = Number(prompt("qual é o numero ramdom 1 - 10 ?"));

function perguntaNovamente() {
    const gameNumbe = Number(prompt
        ("qual é o numero ramdom 1 - 10 ?"))

    if (gameNumbe == gameUsuario) {
        alert("Parabens você acertou o numero")

    } else if (gameNumbe < gameUsuario) {

        alert("tente novamente, o numero é maior")
        perguntaNovamente()
    } else {
        alert("tente novamente, o numero é menor")
        perguntaNovamente()
    }



    perguntaNovamente()
}



