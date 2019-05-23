const bottom = document.querySelector('.bottom-section');
const team = document.querySelector('.team');
class Footer {
    constructor(){
        this.footer = document.createElement('footer');
        this.paragragh = document.createElement('p');
        this.buildFooter();
    }

    buildFooter() {
        this.paragragh.textContent = '© 2019 Guidr';
        this.footer.appendChild(this.paragragh);
        bottom.append(this.footer);
        team.append(this.footer);

    }

}

const footer = new Footer();