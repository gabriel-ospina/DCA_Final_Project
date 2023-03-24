export enum DescriptionAttribute{
    "description"="description",
}

class Description extends HTMLElement{
    description?: string;

    static get observedAttributes(){
        const descrattrs: Record<DescriptionAttribute, null> = {
            description: null,
        }
        return Object.keys(descrattrs);
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: DescriptionAttribute,
        _: string | undefined,
        newValue: string | undefined
    ){
        this[propName]=newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/Description/description.css">
            
            <p>${this.description}</p>
            `;
        }
    }
}

customElements.define("descrp", Description);
export default Description