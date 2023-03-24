export enum appCard {
    "image" = "image",
    "name" = "name",
    "age" = "age",
    "gender" = "gender",
    "distance" = "distance"
}

class MainCard extends HTMLElement{
    image?: string;
    name?: string;
    age?: string;
    gender?: string;
    distance?: string;

    static get observedAttributes(){
        const aCAtt: Record<appCard, null> = {
            image: null,
            name: null,
            age: null,
            gender: null,
            distance: null

        }
        return Object.keys(aCAtt)
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    connectedCallback(){
        this.render()
    }
    
    attributeChangedCallback(propName: appCard, _:string, newValue: string){
     this[propName] = newValue;
     this.render();
    }

    render(){
        if(this.shadowRoot)
        this.shadowRoot.innerHTML=`
            <section>
                <div class="up section" style="background-image: url("${this.image}");">
                    <span>
                        <h1>${this.name}</h1>
                        <p>${this.age}</p>
                    </span>
                    <p>${this.gender}</p>
                    <span>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.6667 2.91669C8.57248 2.91669 5.60501 4.14585 3.41709 6.33377C1.22916 8.5217 0 11.4892 0 14.5834C0 22.4584 10.2813 31.3542 10.7188 31.7334C10.9829 31.9593 11.3191 32.0834 11.6667 32.0834C12.0143 32.0834 12.3504 31.9593 12.6146 31.7334C13.125 31.3542 23.3333 22.4584 23.3333 14.5834C23.3333 11.4892 22.1042 8.5217 19.9162 6.33377C17.7283 4.14585 14.7609 2.91669 11.6667 2.91669ZM11.6667 28.6563C8.56042 25.7396 2.91667 19.4542 2.91667 14.5834C2.91667 12.2627 3.83854 10.0371 5.47948 8.39617C7.12043 6.75523 9.34602 5.83335 11.6667 5.83335C13.9873 5.83335 16.2129 6.75523 17.8539 8.39617C19.4948 10.0371 20.4167 12.2627 20.4167 14.5834C20.4167 19.4542 14.7729 25.7542 11.6667 28.6563ZM11.6667 8.75002C10.5129 8.75002 9.38513 9.09214 8.42584 9.73311C7.46656 10.3741 6.71888 11.2851 6.27737 12.351C5.83586 13.4169 5.72034 14.5898 5.94542 15.7214C6.1705 16.8529 6.72607 17.8923 7.54188 18.7081C8.35768 19.5239 9.39709 20.0795 10.5286 20.3046C11.6602 20.5297 12.8331 20.4142 13.899 19.9727C14.9649 19.5311 15.8759 18.7835 16.5169 17.8242C17.1579 16.8649 17.5 15.7371 17.5 14.5834C17.5 13.0363 16.8854 11.5525 15.7915 10.4586C14.6975 9.3646 13.2138 8.75002 11.6667 8.75002ZM11.6667 17.5C11.0898 17.5 10.5259 17.329 10.0463 17.0085C9.56661 16.688 9.19277 16.2325 8.97202 15.6995C8.75126 15.1666 8.6935 14.5801 8.80604 14.0143C8.91858 13.4486 9.19637 12.9289 9.60427 12.521C10.0122 12.1131 10.5319 11.8353 11.0977 11.7227C11.6634 11.6102 12.2499 11.6679 12.7828 11.8887C13.3158 12.1095 13.7713 12.4833 14.0918 12.9629C14.4123 13.4426 14.5833 14.0065 14.5833 14.5834C14.5833 15.3569 14.276 16.0988 13.7291 16.6457C13.1821 17.1927 12.4402 17.5 11.6667 17.5Z" fill="white"/>
                        </svg>
                        <p>${this.distance}</p>
                    </span>

               </div>
               <div class="bottom-section">
               </div>
            </section>
        `
    }
    
}

customElements.define("main-card", MainCard);
export default MainCard;