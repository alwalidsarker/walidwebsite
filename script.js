function scroll(){
  gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  lerp : .05,
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
};
scroll();
let page_one_image_div = document.querySelector('#main #pageOne .pageOneMain .pageOneMainRight .imageDiv');
let timeline = gsap.timeline();
page_one_image_div.addEventListener('mouseenter',function(){
  let page_one_black_box = document.querySelector('#main #pageOne .pageOneMain .pageOneMainRight .black');
  gsap.to(page_one_black_box,{
    opacity : 1,
  });
});
page_one_image_div.addEventListener('mouseleave',function(){
  let page_one_black_box = document.querySelector('#main #pageOne .pageOneMain .pageOneMainRight .black');
  gsap.to(page_one_black_box,{
    opacity : 0,
  });
});
timeline.to('#main #loader',{
  top : '-100%',
  duration : .8,
  delay : .5,
  ease: "power4.in",
});
document.querySelector('#main #pageOne .colors div:nth-child(2)').addEventListener('click',function(){
  gsap.to('#main #pageOne',{
    backgroundColor : '#33333333',
  });
  gsap.to('.colorBoxes',{
    border : '1px solid #fff',
  });
  gsap.to('#main #pageOne .pageOneMain .pageOneMainLeft a',{
    backgroundColor : '#000',
    color : '#fff',
  });
});
document.querySelector('#main #pageOne .colors div:nth-child(3)').addEventListener('click',function(){
  gsap.to('#main #pageOne',{
    backgroundColor : '#909090',
  });
  gsap.to('#main #pageOne .pageOneMain .pageOneMainLeft p',{
    color : '#fff',
  });
  gsap.to('#main #pageOne .heading h3 ',{
    color : '#fff',
  });
  gsap.to('.colorBoxes',{
    border : '1px solid #fff',
  });
  gsap.to('#main #pageOne .pageOneMain .pageOneMainLeft a',{
    backgroundColor : '#000',
    color : '#fff',
  });
});
document.querySelector('#main #pageOne .colors div:nth-child(4)').addEventListener('click',function(){
  gsap.to('#main #pageOne',{
    backgroundColor : '#333',
  });
  gsap.to('#main #pageOne .pageOneMain .pageOneMainLeft p',{
    color : '#fff',
  });
  gsap.to('#main #pageOne .heading h3 ',{
    color : '#fff',
  });
  gsap.to('#main #pageOne .pageOneMain .pageOneMainLeft a',{
    backgroundColor : '#fff',
    color : '#000',
  });
  gsap.to('.colorBoxes',{
    border : '1px solid #fff',
  });
});

document.querySelector('#main #pageOne .colors div:nth-child(1)').addEventListener('click',function(){
  gsap.to('#main #pageOne',{
    backgroundColor : '#fff',
  });
  gsap.to('#main #pageOne .pageOneMain .pageOneMainLeft p',{
    color : '#000',
  });
  gsap.to('#main #pageOne .heading h3 ',{
    color : '#000',
  });
  gsap.to('#main #pageOne .pageOneMain .pageOneMainLeft a',{
    backgroundColor : '#000',
    color : '#fff',
  });
  gsap.to('.colorBoxes',{
    border : '1px solid #000',
  });
});
let page3box1 = document.querySelector('#main #pageThree .mainOfPageThree #box-1');
let page3box2 = document.querySelector('#main #pageThree .mainOfPageThree #box-2');
let page3box3 = document.querySelector('#main #pageThree .mainOfPageThree #box-3');
let page3box1l = document.querySelector('#main #pageThree .mainOfPageThree #box-1 .newLayer');
let page3box2l = document.querySelector('#main #pageThree .mainOfPageThree #box-2 .newLayer');
let page3box3l = document.querySelector('#main #pageThree .mainOfPageThree #box-3 .newLayer');
page3box1.addEventListener('mouseenter',function(){
  gsap.to(page3box1l,{
    opacity : 1,
    ease: "power3.inOut",
    duartion : .3,
  });
});
page3box1.addEventListener('mouseleave',function(){
  gsap.to(page3box1l,{
    opacity : 0,
    ease: "power3.inOut",
    duartion : .3,
  });
});
page3box2.addEventListener('mouseenter',function(){
  gsap.to(page3box2l,{
    opacity : 1,
    ease: "power3.inOut",
    duartion : .3,
  });
});
page3box2.addEventListener('mouseleave',function(){
  gsap.to(page3box2l,{
    opacity : 0,
    ease: "power3.inOut",
    duartion : .3,
  });
});
page3box3.addEventListener('mouseenter',function(){
  gsap.to(page3box3l,{
    opacity : 1,
    ease: "power3.inOut",
    duartion : .3,
  });
});
page3box3.addEventListener('mouseleave',function(){
  gsap.to(page3box3l,{
    opacity : 0,
    ease: "power3.inOut",
    duartion : .3,
  });
});