"use strict";

const boxes = document.querySelectorAll(".box");
// const conts = document.querySelectorAll(".cont");

window.addEventListener("scroll", DisplayContent);
DisplayContent();

function DisplayContent(){
    const TriggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach((box)=>{
        const topBox = box.getBoundingClientRect().top;

        if (topBox < TriggerBottom) {
            box.classList.add("show"); 
        } else {
            box.classList.remove("show");
        }
    });
}

// function DisplayContent2(){
//     const TriggerBottom = (window.innerHeight / 5) * 4;

//     conts.forEach((cont)=>{
//         const topCont = cont.getBoundingClientRect().top;

//         if (topCont < TriggerBottom) {
//             cont.classList.add("show"); 
//         } else {
//             cont.classList.remove("show");
//         }
//     });
// }