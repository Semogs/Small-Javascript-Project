const footer = document.getElementById('footer')
const codingLanguages = ["HTML", "CSS", "JavaScript"];
const beginningOfSentence = 'This page was built using:'

function sentence(codingLanguages) {
    if(codingLanguages.length === 1) {
        const oneWord = codingLanguages[0]
        return `${beginningOfSentence + oneWord}.`
    }else {
    let rest = '';
    codingLanguages.forEach((word,index) => {
        const notLastWord = (index !==(codingLanguages.length - 1));
        if (notLastWord) {
            rest += ` ${word},`;
        }else{
            rest = rest.slice(0,-1);
            rest += ` and ${word}`
        }
    })
    return beginningOfSentence + rest
    };
}

footer.innerHTML = sentence(codingLanguages)