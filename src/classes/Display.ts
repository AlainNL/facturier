import { HasHtmlFormat } from "./interfaces/HasHtmlFormat.js";
import { HasRender } from "./interfaces/HasRender.js";
import { Storage } from "./Storage.js";

export class Display implements HasRender {

    formContainer: HTMLDivElement;

    constructor(
      private container: HTMLDivElement,
      private hiddenDiv: HTMLDivElement,
      private BtnPrint: HTMLButtonElement

    ) {

      this.formContainer = document.getElementById('form-container') as HTMLDivElement;

    }

    render(docObj: HasHtmlFormat, docType: string) {
        const htmlString: string = docObj.htmlFormat();
        this.container.innerHTML = htmlString;

        new Storage(docType, htmlString);

        if (docType === "invoice") {
            this.BtnPrint.innerText = 'Imprimer la facture';
        } else {
            this.BtnPrint.innerText = 'Imprimer le devis';
        }
        this.hiddenDiv.classList.remove('invisible');
        this.formContainer.innerHTML = "";
    }
}
