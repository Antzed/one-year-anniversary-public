const button = document.querySelector('.toGirlfriend');
const letter = document.querySelector('.letter')
const wrapper = document.querySelector('.wrapper')
const lidOne = document.querySelector('.one')
const lidTwo = document.querySelector('.two')
const envelope = document.querySelector('.envelope')
// button.addEventListener('click', showLetter);
const paragraph0 = document.querySelector('p')
const paragraph1 = document.createElement('p')
const paragraph2 = document.createElement('p')
const paragraph3 = document.createElement('p')
const paragraph4 = document.createElement('p')
const paragraph5 = document.createElement('p')


paragraphs = [paragraph1, paragraph2, paragraph3, paragraph4, paragraph5]

paragraph1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum fermentum tellus non metus rutrum venenatis. Duis aliquam a odio in eleifend. Suspendisse sed ex et arcu convallis ullamcorper. Nullam sit amet diam dolor. Integer."
paragraph2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque viverra ultrices nulla, vitae malesuada tortor vehicula a. non pretium felis facilisis vel. Vestibulum."
paragraph3.textContent = "Happy anniversary!"
paragraph4.textContent = "Love you :)"
paragraph5.textContent = "boyfriend"
// changeColor.addEventListener('click', showLetter)
function showLetter(){
    // flag = 0;
    letter.classList.add("pull")
    wrapper.style.pointerEvents = "none"
    // document.body.style.backgroundColor = 'salmon';
    letter.addEventListener('animationend', function(){
       
        wrapper.style.zIndex = 0;
        lidOne.style.zIndex = 0;
        lidTwo.style.zIndex = 0;
        envelope.style.zIndex = 0;
        letter.style.zIndex = 20;
        letter.classList.add("put");
        letter.addEventListener("animationend", function(){
            letter.style.transition = 'none'
            letter.style.pointerEvents = 'none'
            // wrapper.style.trasform= "none"
            letter.classList.add('final')
            letter.classList.remove('put')
            letter.classList.remove('pull')
            
            paragraph0.style.fontSize = "12px"
            paragraph0.style.textAlign = "left"
            paragraph0.style.margin  = "1% 2% 1% 2%"
            paragraphs.map(formatLetter)
            
            // wrapper.style.curser = 'default'  
        })
    })
}

function formatLetter(paragraph){
    if (paragraph.textContent == "boyfriend"){
        paragraph.style.textIndent = "0%"
        paragraph.style.fontSize = "10px"
    } else {
        paragraph.style.textIndent = "10%"
        paragraph.style.fontSize = "8px"
    }
    paragraph.style.textAlign = "left"
    paragraph.style.margin  = "1% 2% 0% 2%"
    
    letter.append(paragraph)
}