let wordList = ["Cachalot", "Pétunia", "Serviette"];
let sentenceList = [ "Pas de panique!", "La vie, l’univers et le reste", "Merci pour le poisson."]
let score = 0;

let question = prompt ("mots ou phrases ?");
while (question!== "mots" && question!== "phrases"){
    question = prompt ("mots ou phrases ?")
};

if (question === "mots"){
    for(let i=0; i<wordList.length; i++) {
        let appliWord = wordList[i];
        let userWord = prompt("Entrez le mot : " + wordList [i]);

        console.log(userWord);

        if (userWord === appliWord) {
            console.log("Bonne réponse!!!")
            score += 1;
        }else{
            console.log("Mauvais réponse :(")
        }
    }
}
else if(question==="phrases"){
    for(let i=0; i<sentenceList.length; i++) {
        let appliSentence = sentenceList[i];
        let userSentence = prompt("Entrez la phrase : " + sentenceList[i]);
        
        console.log(userSentence);
        
        if (userSentence === appliSentence) {
            console.log("Bonne réponse!!!")
            score += 1;
        }else{
            console.log("Mauvais réponse :(")
        }
    }
}

console.log("Score : " + score);