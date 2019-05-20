const body = document.querySelector('.container');
class Footer {
    constructor(element){
        this.footer = document.createElement('footer');
        this.paragragh = document.createElement('p');

    
    }

    buildFooter() {
        this.paragragh.textContent = 'Copyright Guidr 2018';
        this.footer.appendChild(this.paragragh);
        body.appendChild(this.footer);

    }

}