export enum HeaderAttribute{
    "img" = "img",
    "account"="account"
}

class Header extends HTMLElement{
    img?: string;
    account?: string;

    static get observedAttributes(){
        const headerattrs: Record<HeaderAttribute, null> = {
            img: null,
            account: null,
        }
        return Object.keys(headerattrs);
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: HeaderAttribute,
        _: string | undefined,
        newValue: string | undefined
    ){
        this[propName]=newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/header/header.css">
            <header>
                <svg>
                    <path d="${this.img}"></path>
                <svg>
                <button>${this.account || "XOXO"}</button>
            </header>
            `;
        }
    }
}

customElements.define("my-header", Header);
export default Header
