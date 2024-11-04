gsap.to('#box', {
   x: 1000,
   duration: 2,
   delay: 1,
   rotate: 360,
   yoyo: true,
   repeat: -1  // 1- repeat 1
})

gsap.from('#box1', {
   x: 100,
   y: 200,
   duration: 2,
   delay: 1,
   rotate: 360,
   width: 380,
   opacity: .3,
   scale: .5,
   backgroundColor: "blue",
   borderRadius: "50%"
})

gsap.from('h1', {
   color: "green",
   duration: 2,
   opacity: 0,
   y: 100,
   delay: 3,
   stagger: -.3
})

gsap.to('#box11', {
   x: 1500,
   rotate: 360,
   duration: 0.77,
   delay: 0.5
})
gsap.to('#box12', {
   x: 1500,
   backgroundColor: 'red',
   duration: 1.5,
   delay: 1.27
})
gsap.to('#box13', {
   x: 1500,
   scale: 0.5,
   borderRadius: "50%",
   duration: 1.5,
   delay: 2.77
})
var tl = gsap.timeline()
tl.from('h2', {
   y: -30,
   duration:1,
   opacity: 0,
   delay: 0.5
})
tl.from('h4', {
   y: -30,
   duration:.5,
   opacity: 0,
   delay: 0.5,
   stagger: 0.3
})
// tl.to('#box111', {
//    x: 1500,
//    rotate: 360,
//    duration: 0.77,
//    delay: 0.5
// })
// tl.to('#box121', {
//    x: 1500,
//    backgroundColor: 'red',
//    duration: 1.5,

// })
// tl.to('#box131', {
//    x: 1500,
//    backgroundColor: 'cyan',
//    duration: 1.5,

// })

gsap.from('#page1 #boxp2', {
   scale: 0,
   delay: 1,
   duration: 2,
   rotation: 360
})
gsap.from('#page2 #boxp2', {
   scale: 0,
   delay: 1,
   duration: 2,
   rotation: 360,
   scrollTrigger: {
      trigger: "#page2 #boxp2",
      scroller: "body",
      markers: true,
      scrub: true, // 2
      pin: true,
      start: 'top 60%',
      end: 'top 60%'
   }

})