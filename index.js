var tl=gsap.timeline();
tl.from("#text h1",{
    opacity:0,
    left:500,
    duration:2,
    delay:3
})
.from("#text p",{
    opacity:0,
    x:-500,
    duration:2,
})

tl.from(
    ".image",
    {
        y:500,
        opacity:0,
        duration:2,
    }
)
tl.from(
    "#testimonial",
    {
        y:500,
        opacity:0,
        duration:2,
    }
)
tl.from(
    "#cards",
    {
        x:500,
        opacity:0,
        duration:2,
    }
)
tl.from("#notes-sec", {
    scrollTrigger: "#notes-sec",
     scroller:"body",
    x: 500,
    opacity:0,
    duration:2
  });

burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('v-class');
})

// let btn=document.querySelector(".moon");
//   let body=document.querySelector("body");
//   let check=0
//  btn.addEventListener("click",function(){
//   if(check==0){
//    body.style.backgroundColor="#222121"
//    body.style.color="white"
//    this.style.color="royalblue"
//    check=1;
//   }else{
//     body.style.backgroundColor="white"
//     body.style.color="black"
//     this.style.color="white"
//     check=0;
//   }
//  })
 

