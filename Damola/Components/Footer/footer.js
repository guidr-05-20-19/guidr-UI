const bottom = document.querySelector('.bottom-section');
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

    }

}

const footer = new Footer();