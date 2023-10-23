import { Storage } from "./Storage.js";
export class Display {
    constructor(container, hiddenDiv, BtnPrint) {
        this.container = container;
        this.hiddenDiv = hiddenDiv;
        this.BtnPrint = BtnPrint;
        this.formContainer = document.getElementById('form-container');
    }
    render(docObj, docType) {
        const htmlString = docObj.htmlFormat();
        this.container.innerHTML = htmlString;
        new Storage(docType, htmlString);
        if (docType === "invoice") {
            this.BtnPrint.innerText = 'Imprimer la facture';
        }
        else {
            this.BtnPrint.innerText = 'Imprimer le devis';
        }
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}
