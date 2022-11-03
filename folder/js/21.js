var column1 = document.getElementById("column1").getElementsByTagName("img")
let column2 = document.getElementById("column2").getElementsByTagName("img")
let column3 = document.getElementById('column3').getElementsByTagName('img')
var images = document.getElementsByTagName('img'); 
let imgList = [];
let column1List = [];
let column2List = [];
let column3List = [];

function appendImageToList(imageBundle, list){
    for(var i = 0; i < imageBundle.length; i++) {
        list.push(imageBundle[i]);
    }
}
imgList.push(column1)
imgList.push(column2)
imgList.push(column3)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let bigButton = document.getElementById('bigButton')

let i = 0
let j = 0
function showImage(){
    console.log(i)
    console.log(j)
    imgList[i][j].style.display = "block"
    
    if(i == imgList.length - 1){
        j++
        i = 0
    }else{
        i++
    }    
}

document.body.addEventListener('click', showImage)
for(let i = 0;i < imgList.length;i++){
    for(let j = 0; j<imgList[i].length;j++){
        
    }
}
