


var callback = function(){

    function contentText(h1, uvp) {
        document.querySelector('#content-box-header').textContent = h1;
        document.querySelector('#UVP').textContent = uvp;
        // master.pause(0);
    }
    var master = new TimelineMax({repeat:2, repeatDelay:1});
    master.pause(1);
    // var tl = new TimelineLite();
    var element = document.querySelector('.content-box')
    // master.to(element, 2, {left:100}).to(element, 1, {top:50}).to(element, 1, {opacity:0}).to(element, 0.5, {className:"+=content-box-2"}).addCallback(contentText, 2, ["Log the Hikes You Love", "Do It Now Dummy!"]).to(element, 2, {opacity:1})
    master.delay(2).to(element, 2, {opacity:0}).to(element, 0.5, {className:"+=content-box-2"}).addCallback(contentText, 1, ["Log the Hikes You Love", "Do It Now Dummy!"])
    master.to(element, 2, {opacity:1})
    master.fromTo("#tst", 1, {autoAlpha:0}, {autoAlpha:1, delay:0}).to("#tst", 2, {opacity:0, delay:3})
    
  };
  
  if (
      document.readyState === "complete" ||
      (document.readyState !== "loading" && !document.documentElement.doScroll)
  ) {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }


  