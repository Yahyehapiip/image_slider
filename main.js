const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const imageContainer = document.querySelector('.image-container')
const imgEl = document.querySelectorAll('img')

console.log(imgEl);

let currentImg = 1

let timeOut;

prev.addEventListener("click",()=>{
currentImg++
clearTimeout(timeOut)
console.log("ello");
updateImg()

})
next.addEventListener("click",()=>{
    currentImg--
    clearTimeout(timeOut)
    updateImg()
})
updateImg()
function updateImg(){
    if(currentImg > imgEl.length){
        currentImg = 1
    }else if( currentImg < 1 ){
        currentImg = imgEl.length
    }
imageContainer.style.transform= `translateX(-${(currentImg -1) * 500}px)`

timeOut = setTimeout(()=>{
    currentImg++
    updateImg()
},3000)

}




