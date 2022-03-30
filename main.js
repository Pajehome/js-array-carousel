myImage = document.getElementById("mainImg");
const imgArr = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
]
let imgIndex = 1;

function nextImg() {
 myImage.setAttribute('src', imgArr[imgIndex]);
 imgIndex++;
    if (imgIndex >= imgArr.length) {
        imgIndex = 0;
    }
}

function prevImg() {
 myImage.setAttribute('src', imgArr[imgIndex]);
 imgIndex--;
    if (imgIndex < 0)  {
        imgIndex = imgArr.length -1 ;
    }
}
