function afficherResultat(score, nbMotsProposes) {
   
    let spanScore = document.querySelector(".zoneScore span")
    let showScore = `${score}/${nbMotsProposes}`
    spanScore.innerHTML = showScore

}

function afficherProposition (proposition) {
    
    let zoneProposition = document.querySelector(".zoneProposition")
    zoneProposition.innerText = proposition

}

function afficherEmail(nom, email, score) {
    
    let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je viens de réaliser le score ${score} sur le site d'Azertype !`
    location.href = mailto

}

function validName(name){

    if (name.length < 2) {
    
        throw new Error (`Le nom "${name}" est trop court`)
    
    }
}

function validMail(mail){

    let tester = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
    let result = tester.test(mail)
    if (!result){

        throw new Error (`Votre mail n'est pas valide`)
    
    }
}

function showErrorMsg(erreur) {
    
    let spanError = document.getElementById("errorMsg")

    if (!spanError) {
        let popDiv = document.querySelector(".popup")
        let spanError = document.createElement("span")
        spanError.id = "errorMsg"

        popDiv.appendChild(spanError)
        spanError.innerHTML = `${erreur}`

    } else{
        spanError.innerHTML = `${erreur}`
    }
   /* let popDiv = document.querySelector(".popup")
    let span = document.createElement ("span")
    span.innerHTML = `${erreur}`
    
    popDiv.appendChild(span)*/

}

function gererFormulaire (score) {
    try{
        let userName = document.getElementById("nom")
        let name = userName.value
        validName(name)

        let friendMail = document.getElementById("email")
        let mail = friendMail.value
        validMail(mail)
        
        showErrorMsg("")
        afficherEmail(nom, mail, score)
        cacherPopup()

    } catch(erreur){

        showErrorMsg(erreur)

    }
}

function runGame() {
    // Initialisations
    let score = 0
    let i = 0
    let choosedList = wordList

    let btnValiderMot = document.getElementById("btnValiderMot")
    let inputEcriture = document.getElementById("inputEcriture")
    
    afficherProposition (choosedList[i])

    btnValiderMot.addEventListener ("click", () =>{
        
        console.log(inputEcriture.value)
        if(choosedList[i] === inputEcriture.value){

            score++

        }

        i++
        console.log(i)

        if(choosedList[i]=== undefined){

            afficherProposition("Le jeu est fini")
            btnValiderMot.disabled = true

        }else{

            afficherProposition (choosedList[i])

        }

        inputEcriture.value = ""
        afficherResultat(score, i) 

    })

    let btnList = document.querySelectorAll(".optionSource input")
    for(let index = 0; index<btnList.length; index++){

        btnList[index].addEventListener ("change", (event) =>{
            
            if(event.target.value === "1"){
                
                choosedList = wordList
            
            }else{
            
                choosedList = sentenceList
            
            }
            
            afficherProposition(choosedList[i])
            console.log(event.target.value)
        
        })
    }

    const popForm = document.querySelector(".popup form")
    popForm.addEventListener("submit",(event)=>{
        event.preventDefault()
        gererFormulaire (score)
    })

}