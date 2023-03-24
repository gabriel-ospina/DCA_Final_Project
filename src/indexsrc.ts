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
        headersec.setAttribute(HeaderAttribute.img, "m36 29.4262c0 .1363 0 .2712-.0087.4063a18 18 90 01-35.9913-.4662c0-.0388 0-.0775 0-.1163a4.5 4.5 90 019 0 9 9 90 0018 .135v0c-.1325-6.1837-8.32-11.375-18-11.375a4.5 4.5 90 010-9c6.9375 0 13.515 1.9638 18.5212 5.53 2.5787 1.8388 4.625 4.0137 6.08 6.4638 1.5412 2.5963 2.3475 5.375 2.3963 8.2563.0025.0487.0025.1075.0025.1662zm1.3113 3.6862q0-5.7675 4.09-9.8575t9.805-4.09q5.8225 0 9.9637 4.09t4.1425 9.91q0 5.7175-4.1163 9.8588t-9.885 4.1425q-5.82 0-9.91-4.1163t-4.09-9.9375zm7.7075.0262a6.25 6.25 90 006.2925 6.2662q2.5688 0 4.4312-1.8525t1.8612-4.4138q0-2.5575-1.8875-4.385t-4.4575-1.8287a6.2563 6.2563 90 00-6.24 6.2138zm34.1375-25.6675v7.6537h-3.1462q-.315 0-.6825.3663t-.3675.625v2.8313h3.7763v7.7613h-3.7763v20.45h-7.76v-30.9825q0-2.675 1.6513-4.9563a8.925 8.925 90 014.2212-3.22q1.415-.5225 2.4125-.5237zm20.5425 38.175q-3.1462 1.52-6.345 1.52-5.77 0-9.8575-4.1313t-4.09-9.9225q0-5.8425 4.1162-9.9213t9.9363-4.0787q4.3525 0 8 2.5425t5.1137 6.6337q.8388 2.36.8388 3.9325v14.945h-7.7125zm-12.585-12.5338q0 2.5712 1.8612 4.4312t4.4313 1.8612q2.5687 0 4.4313-1.8612t1.8612-4.4312q0-2.5162-1.835-4.375t-4.405-1.8625a6.23 6.23 90 00-4.4587 1.8075 5.9 5.9 90 00-1.8863 4.43zm-64.6137-28.6125a4.5 4.5 90 109 0 4.5 4.5 90 10-9 0");
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