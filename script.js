
const imgsArr = [" ", "1.jpg", "2.jpg", "3.jpg", "4.jpg","5.jpg"]

function show(x) {
    let bg = document.getElementById(`box${x}`).checked ?
    `url('img/${imgsArr[x]}') center/cover` : ''

    bg = document.getElementById(`i${x}`).style.background; 
}