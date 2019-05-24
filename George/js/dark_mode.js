
class darkMode {
    constructor(btn){
        // Assign this.cardElement to the cardElement DOM reference
        this.btn = btn;
        // console.log(this)
        this.spotlight = document.querySelector('.spotlight');
        // console.log(this.spotlight)
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
        console.log(this.spotlight)
       let s = document.querySelector('.spotlight');
        document.querySelector('.spotlight').classList.toggle('dark');
        document.querySelector('.content-container.landing').classList.toggle('dark');
        let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';
        window.addEventListener('mousemove', e => this.updateSpotlight(e, spotlightSize));
        
        window.addEventListener('mousedown', e => {

            let spotlightSize = 'transparent 130px, rgba(0, 0, 0, 0.95) 150px)';
            this.updateSpotlight(e, spotlightSize);

        });

        window.addEventListener('mouseup', e => {

            let spotlightSize = 'transparent 160px, rgba(0, 0, 0, 0.85) 200px)';

            this.updateSpotlight(e, spotlightSize);

        });
           // function updateSpotlight(e, spotlightSize) {
        //    let s = document.querySelector('.spotlight');
        //    s.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / document.body.scrollHeight * 100}%, ${spotlightSize}`;
        // };
        
    }
    updateSpotlight = (e, spotlightSize) => {
        let s = document.querySelector('.spotlight');
        s.style.backgroundImage = `radial-gradient(circle at ${e.pageX / window.innerWidth * 100}% ${e.pageY / document.body.scrollHeight * 100}%, ${spotlightSize}`;
    } 

  }
  let d = document.querySelector('#btn-night');
  new darkMode(d);





