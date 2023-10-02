
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });




//heading animation
gsap.from(".page1>h1",{
    y:200,
    delay:0.3,
    stagger:0.5,
})












//video controller


// var videocontainer=document.querySelector("video-container");

// videocontainer.addEventListener("click",function (){

//     document.getElementsByName(video).setAttribute("controls")
// })





function videoanimation() {

    var videocon = document.querySelector(".video-container");
    var videoplay = document.querySelector(".play-button");


    videocon.addEventListener("mouseenter", function () {
        gsap.to(videoplay, {
            scale: 1,
            opacity: 1
        })
    })

    videocon.addEventListener("mouseleave", function () {
        gsap.to(videoplay, {
            scale: 0,
            opacity: 0
        })
    })

    document.addEventListener("mousemove", function (valuexy) {
        console.log(valuexy)
        gsap.to(videoplay, {
            left: valuexy.x-70,
            top: valuexy.y-50,
        });
    });


}

videoanimation();

function cursoranimaation() {


    var cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", function (valuexy) {
        gsap.to(cursor, {
            left: valuexy.x - 80,
            top: valuexy.y - 80,
        })
    })


    var itemcontainer = document.querySelector(".container");

    console.log(itemcontainer);


    document.querySelectorAll(".container").forEach(element => {

        element.addEventListener("mouseenter", function () {
            gsap.to(cursor, {
                scale: 1,
                opacity: 1,
                duration: 0.8,
            })
        });

        element.addEventListener("mouseleave", function () {
            gsap.to(cursor, {
                scale: 0,
                opacity: 0,

            })
        });
    });

}

cursoranimaation()


function greenitem() {

    var cursor = document.querySelector(".cursor");
    
    document.querySelector("#item4").addEventListener("mouseenter", function () {

        cursor.style.backgroundColor = "rgb(200, 237, 200)";
    })

    document.querySelector("#item4").addEventListener("mouseleave", function () {

        cursor.style.backgroundColor = "rgb(149, 146, 146)";

    })


}

greenitem()




