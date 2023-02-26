function delayPopImage() {
    setTimeout(function () {
        document.getElementById("top").style.transform = "scale(1)";
    }, 2000);
}
setTimeout(function () {
    document.getElementById("para2").style.opacity = "100%";
}, 3000);


setTimeout(function () {
    document.getElementById("icon1").style.opacity = "100%";
}, 4000);

let a = document.getElementById("visible");
let b = document.getElementById("icon1");
b.addEventListener('click',()=>{
      a.style.opacity='100%';
})