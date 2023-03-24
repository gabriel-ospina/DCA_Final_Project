import * as components from "./components/indexComponents.js"

import Header, { HeaderAttribute } from "./components/header/header.js";
import Menu, { MenuAttribute } from "./components/Menu/menu.js";

class AppContainer extends HTMLElement {
    header: Header;
    menu: Menu;

    constructor(){
        super();
        this.attachShadow({ mode: "open"});

        const headersec = this.ownerDocument.createElement("my-header") as Header;
        headersec.setAttribute(HeaderAttribute.img, "https://cdn.discordapp.com/attachments/1010976865424506900/1088627002333999185/Sofa_Logo-13.png");
        headersec.setAttribute(HeaderAttribute.account, "Account");
        this.header=headersec
        
        const menusec = this.ownerDocument.createElement("menu-nav") as Menu;
        menusec.setAttribute(MenuAttribute.mainicon, "M11.7187 13.0625C13.1467 12.2375 14.1667 10.4844 14.1667 6.875C14.1667 0.859375 11.3333 0 8.5 0C5.66667 0 2.83333 0.859375 2.83333 6.875C2.83333 10.4844 3.85334 12.2375 5.28134 13.0625C6.23334 13.6125 7.36667 13.75 8.5 13.75C9.63333 13.75 10.7667 13.6125 11.7187 13.0625ZM4.25 15.125C1.90279 15.125 0 16.9718 0 19.25C0 20.7688 1.26853 22 2.83333 22H14.1667C15.7315 22 17 20.7688 17 19.25C17 16.9718 15.0972 15.125 12.75 15.125H4.25Z");
        menusec.setAttribute(MenuAttribute.chaticon, "M4.32655 2.57004C3.33503 2.57004 2.53125 3.38614 2.53125 4.39285V17.8808C2.53125 18.8875 3.33503 19.7036 4.32655 19.7036H5.59217V24.0375L11.6283 19.7036H22.6735C23.665 19.7036 24.4688 18.8875 24.4688 17.8808V4.39285C24.4688 3.38614 23.665 2.57004 22.6735 2.57004H4.32655ZM0 4.39285C0 1.96675 1.93706 0 4.32655 0H22.6735C25.0629 0 27 1.96675 27 4.39285V17.8808C27 20.3069 25.0629 22.2737 22.6735 22.2737H12.3294L6.13664 26.703C4.78303 27.5276 3.06092 26.5376 3.06092 24.9348L3.06092 22.0828C1.28892 21.5332 0 19.8599 0 17.8808V4.39285Z");
        menusec.setAttribute(MenuAttribute.safeiconin, "M15 22.5C19.1421 22.5 22.5 19.1421 22.5 15C22.5 10.8579 19.1421 7.5 15 7.5C10.8579 7.5 7.5 10.8579 7.5 15C7.5 19.1421 10.8579 22.5 15 22.5Z");
        menusec.setAttribute(MenuAttribute.safeiconout, "M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2.91005C8.32291 2.91005 2.91005 8.32291 2.91005 15C2.91005 21.6771 8.32291 27.0899 15 27.0899C21.6771 27.0899 27.0899 21.6771 27.0899 15C27.0899 8.32291 21.6771 2.91005 15 2.91005Z");
        this.menu=menusec


    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;
            
            const headerSec = this.ownerDocument.createElement("section");
                headerSec.appendChild(this.header);
                this.shadowRoot.appendChild(headerSec);

            const sideSec = this.ownerDocument.createElement("section");
            sideSec.className = "side-sec";
                const menuSec = this.ownerDocument.createElement("section");
                menuSec.appendChild(this.menu);
                sideSec.appendChild(menuSec)
            
            this.shadowRoot.appendChild(sideSec)
        }
    }
}

customElements.define("app-container", AppContainer)