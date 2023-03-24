export enum NewMatchesAttribute{
    "img"="img",
    "name"="name",
    "age"="age",
}

class NewMatches extends HTMLElement{
    img?: string;
    name?: string;
    age?: string;

    static get observedAttributes(){
        const menuattrs: Record<NewMatchesAttribute, null> = {
            img: null,
            name: null,
            age: null,
        }
        return Object.keys(menuattrs);
    }

    constructor(){
        super();
        this.attachShadow({ mode: "open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(
        propName: NewMatchesAttribute,
        _: string | undefined,
        newValue: string | undefined
    ){
    
        this[propName] = newValue;

        

        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/newMatches/newMatches.css">

            <div class="container" style="background-image: url(${this.img});">
                <div class="text">
                    <h3>${this.name}</h3>
                    <span>${this.age}</span>
                </div>
            </div>
            `;
        }
    }
}

customElements.define("new-matches", NewMatches);
export default NewMatches