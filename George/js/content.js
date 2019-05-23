var callback = function(){

    function contentText(h1, uvp) {
        document.querySelector('#content-box-header').textContent = h1;
        document.querySelector('#UVP').textContent = uvp;
        console.log(uvp + '       ' + h1)
        // master.pause(5);
        // console.log(master.time())
    }
    var master = new TimelineMax({repeat:2, repeatDelay:1});
    // master.pause(1);
    // var tl = new TimelineLite();
    var element = document.querySelector('.content-box')
 
    // master.to(element, 2, {left:100}).to(element, 1, {top:50}).to(element, 1, {opacity:0}).to(element, 0.5, {className:"+=content-box-2"}).addCallback(contentText, 2, ["Log the Hikes You Love", "Do It Now Dummy!"]).to(element, 2, {opacity:1})
    master.to(element, 1, {opacity:0, delay:4}, "myLabel").to(element, 1, {className:"+=content-box-2", delay:1}).to(element, 1, {opacity:1, delay:0}, 'label2').fromTo("#tst", 2, {autoAlpha:0, delay:1}, {autoAlpha:1, delay:1}).to("#tst", 1, {opacity:0, delay:1}, 'label3').call(contentText, ["Log the Hikes You Love", "Simply Build Your Guide Resume Now!"], this, 6)
    master.call(contentText, ["Track the Places You Love to Hike", "Create Your Guide Portfolio With Guidr"])
    // console.log(master.getLabelTime('myLabel'));
    // master.to(element, 1, {opacity:1, delay:0}, 'label2').fromTo("#tst", 1, {autoAlpha:0}, {autoAlpha:1, delay:0}).to("#tst", 2, {opacity:0, delay:2}, 'label3')
    
    // console.log('label2: ' + master.getLabelTime('label2'));
    // console.log('label3: ' + master.getLabelTime('label3'));
  };
  
  if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }


  function main() {
    var nav = document.getElementById('mobile-nav');
    var logo = document.getElementById('logo');
    var e = document.querySelectorAll("body > *");

    nav.addEventListener('click',function() {
      nav.className = (!nav.classList.contains('active')) ? 'active' : '';
      Array.from(e).forEach(e => e.classList.toggle('active'));
      logo.classList.toggle('active')
    });
  }
  addEventListener('load',main);
