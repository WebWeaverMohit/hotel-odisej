gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({ 
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

document.addEventListener("wheel",function(dets){
    if(dets.deltaY > 0){
        gsap.to("#nav",{
            top: "-100%",
            duration:1,
            esae:Power0.easeNone
        })
    }
    if(dets.deltaY < 0){
        gsap.to("#nav",{
            top: "0%",
            duration:1,
            esae:Power0.easeNone
        })
    }
})

var tl = gsap.timeline();

tl.from("#page1 img",{
    scale:0.4,
    delay:0.5,
    duration:1,
})

tl.from("#nav-part1,#nav svg,#nav-part2",{
    y:-50,
    opacity:0,
    stagger:0.4,
    delay:-0.3
})

var p2 = document.querySelectorAll("#page2-text h2");

p2.forEach(function(elem){
    var a = elem.textContent
    var b = a.split("")
    var c = "";
    b.forEach(function(e){
        c += `<span>${e}</span>`
    })
    elem.innerHTML = c;
    // console.log(c)
    gsap.to("#page2-text h2 span",{
        color:"#e2e2c4",
        stagger:0.5,
        scrollTrigger:{
            trigger:"#page2 h2 span",
            scroller:"#main",
            // markers:true,
            start:"top 70%",
            end:"top -20%",
            scrub:2,
        }
    })
})

gsap.to("#page2 #svg2,#page2 #svg3",{
    x:-500,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 #svg2",
        scrub:2,
    }
})

gsap.to("#page2 #svg3",{
    x:-200,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2 #svg3",
        scrub:2,
    }
})

var p3 = document.querySelectorAll("#page3-text h2")

p3.forEach(function(elem){
    var a = elem.textContent
    var b = a.split("")
    var c = "";
    b.forEach(function(e){
        c += `<span>${e}</span>`;
    })
    elem.innerHTML = c;
    gsap.to("#page3-text h2 span",{
        color: "#5c6948",
        stagger: 0.5,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page3 h2 span",
            scrub: 2,
            // markers: true,
            start:"top 50%",
            end:"top 20%"
        }
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    pagination: {
      el: ".swiper-pagination",
      type:"fraction"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

gsap.to("#page6 #svg1",{
    x:-500,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page6 #svg1",
        scrub:2,
    }
})

gsap.to("#page6 #svg2",{
    x:-200,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page6 #svg2",
        scrub:2,
    }
})

var p6 = document.querySelectorAll("#page6 h2")

p6.forEach(function(elem){
    var a = elem.textContent
    var b = a.split("")
    var c = "";
    b.forEach(function(e){
        c += `<span>${e}</span>`;
    })
    elem.innerHTML = c;
    gsap.to("#page6 h2 span",{
        color: "#e2e2c4",
        stagger: 0.5,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page6 h2 span",
            scrub: 2,
            // markers: true,
            start:"top 50%",
            end:"top 20%"
        }
    })
})

gsap.to("#page7 #svg1",{
    x:-500,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page7 #svg1",
        scrub:2,
    }
})

gsap.to("#page7 #svg2",{
    x:-200,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page7 #svg2",
        scrub:2,
    }
})

var p7 = document.querySelectorAll("#page7 h2")

p7.forEach(function(elem){
    var a = elem.textContent
    var b = a.split("")
    var c = "";
    b.forEach(function(e){
        c += `<span>${e}</span>`
    })
    elem.innerHTML = c;
    gsap.to("#page7 h2 span",{
        color: "#575c45",
        stagger: 0.5,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page7 h2 span",
            scrub: 2,
            // markers: true,
            start:"top 50%",
            end:"top -20%"
        }
    })
})

var t8 = gsap.timeline({
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page8",
        scrub:3,
        // markers:true,
        start:"top 50%",
        end:"top 20%"
    }
})

t8.to("#page8 #left",{
    x:-350,
},"anim")

t8.to("#page8 #right",{
    x:350,
},"anim")

t8.from("#page8 #center",{
    opacity:0,
})

gsap.to("#page10 #svg1",{
    x:-500,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page10 #svg1",
        scrub:2,
    }
})

gsap.to("#page10 #svg2",{
    x:-200,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page10 #svg2",
        scrub:2,
    }
})

var p10 = document.querySelectorAll("#page10 h2")

p10.forEach(function(elem){
    var a = elem.textContent
    var b = a.split("")
    var c = "";
    b.forEach(function(e){
        c += `<span>${e}</span>`
    })
    elem.innerHTML = c;
    gsap.to("#page10 h2 span",{
        color: "#dbdbbc",
        stagger: 0.5,
        scrollTrigger:{
            scroller:"#main",
            trigger:"#page10 h2 span",
            scrub: 2,
            // markers: true,
            start:"top 90%",
            end:"top 60%"
        }
    })
})

gsap.to("#nav svg",{
    transform:"scale(0.13)",
    top:"-200%",
    scrollTrigger:{
        scroller:"#main",
        trigger:"#nav svg",
        // markers:true,
        start:"top -2%",
        end:"top -7%",
        scrub:3
    }
})