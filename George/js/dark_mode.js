
class darkMode {
    constructor(btn){
        // Assign this.cardElement to the cardElement DOM reference
        this.btn = btn;
        console.log(this)
        this.spotlight = document.querySelector('.spotlight');
        console.log(this.spotlight)
        let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';
        this.btn.addEventListener('click', this.onOff);
    }
    onOff = () => {

        this.spotlight.classList.contains('dark') ? this.switchOff() : this.switchOn(); 
    }

    switchOff  = () => {
        document.querySelector('.spotlight').classList.toggle('dark');
        document.querySelector('.content-container.landing').classList.toggle('dark');

    }
    switchOn = () => {
       let s = document.querySelector('.spotlight');
        document.querySelector('.spotlight').classList.toggle('dark');
        document.querySelector('.content-container.landing').classList.toggle('dark');
        window.addEventListener('mousemove', e => updateSpotlight(e));

        window.addEventListener('mousedown', e => {

            let spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';
            updateSpotlight(e);

        });

        window.addEventListener('mouseup', e => {

            let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

            updateSpotlight(e);

        });

        function updateSpotlight(e) {
            let s = document.querySelector('.spotlight');
           s.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / document.body.scrollHeight * 100}%, ${spotlightSize}`;
        };
        
    }

  }
  let d = document.querySelector('#btn-dark');
  console.log(d)
  new darkMode(d);
  




