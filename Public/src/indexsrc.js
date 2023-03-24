import { HeaderAttribute } from "./components/header/header.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        const headersec = this.ownerDocument.createElement("my-header");
        headersec.setAttribute(HeaderAttribute.img, "https://cdn.discordapp.com/attachments/1010976865424506900/1088627002333999185/Sofa_Logo-13.png");
        headersec.setAttribute(HeaderAttribute.account, "Account");
        this.header = headersec;
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = ``;
            const headerSec = this.ownerDocument.createElement("section");
            headerSec.appendChild(this.header);
            this.shadowRoot.appendChild(headerSec);
        }
    }
}
customElements.define("app-container", AppContainer);
