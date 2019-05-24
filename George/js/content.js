function animation() {

  const contentText = (h1, uvp) => {
    document.querySelector('#content-box-header').innerHTML = h1;
    document.querySelector('#UVP').textContent = uvp;
  };
    var master = new TimelineMax({repeat:2, repeatDelay:0.5});
    tl = new TimelineMax({paused:true});
    // master.pause();
    var element = document.querySelector('.content-box')

    master.call(contentText, ["Features For Hikers,<br> Made By Hikers.", "Create Your Guide Portfolio With Guidr"], this, 0)
    master.fromTo(element, 1, {opacity:0}, {opacity:1, visibility:'visible'}, 0.5).to(element, 1, {opacity:0}, 3.5)
        .to(element, 1, {className:"+=content-box-2"})
        .to(element, 1, {opacity:1, delay:0})
        .fromTo("#tst", 1, {autoAlpha:0}, {autoAlpha:1})
        .to("#tst", 1, {opacity:0, delay:4}).add("tstOut")
        .fromTo(element, 1, {opacity:1}, {opacity:0}, 'tstOut')
        .call(contentText, ["Log the Hikes You Love", "Simply Build Your Guide Resume Now!"], this, 4.5)
  };

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
  addEventListener('load', animation)
