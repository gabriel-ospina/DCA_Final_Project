export enum interestAtt {
    "tag" = "tag"
}

class AppTag extends HTMLElement{

    tag?: string;

    static get observedAttributes(){
        const tagAtt: Record<interestAtt,null> = {
            tag: null,
        }
        return Object.keys(tagAtt);
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render()
    }

    attributeChangedCallback(propName: interestAtt, _: string, newValue: string){
        this[propName] = newValue;
        this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../src/components/interests/interests.css">
        <div class="tag-section">
            <div><p>${this.tag}</p></div>     
        </div>
        `
    }
}

customElements.define("app-tag", AppTag);
export default AppTag;