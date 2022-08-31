// let vidPaused = false
// let symbol = "pause"
// let vid = 'autoplay';

// updateView()
// function updateView(){
//     document.querySelector("header").innerHTML = `
//     <video alt="vid" ${vid} loop muted class="video" src="video.mp4"></video>
//         <h1>David Brynjarsson</h1>
//         <button onclick="pauseVid()" class="btn btn-secondary">
//             <i class="fa-solid fa-${symbol}" aria-hidden="true"></i>
//         </button>`
//         console.log(vid)
// }

// function pauseVid(){
//     if(vidPaused == false){
//         vidPaused = true;
//         vid= 'paused'
//         symbol = 'pause'
//     }else {
//         vidPaused = false;
//         vid= 'autoplay'
//         symbol = 'play'
//     }
   
//     updateView()
// }



const video = document.querySelector(".video")
const btn = document.querySelector(".btn")

let symbol;

function pauseUnpause(){
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause")
        symbol = "pause"
        video.play()}
    else {btn.classList.add("pause")
        symbol = "play"
        video.pause()}
    btn.innerHTML = `<i class="fa-solid fa-${symbol}" aria-hidden="true"></i>`


    }