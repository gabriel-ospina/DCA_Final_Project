export enum musicCard {
    "thumbnail" = "thumbnail",
    "mtitle" = "mtitle"
}

    class AppMusicCard extends HTMLElement{
        thumbnail?: string;
        mtitle?: string;
        
        static get observedAttributes(){
            const musicAtt: Record<musicCard, null> = {
                thumbnail: null,
                mtitle: null,
            } 
            return Object.keys(musicAtt)
        }

        constructor(){
            super();
            this.attachShadow({mode: "open"})
        }

        connectedCallback(){
            this.render()
        }
        
        attributeChangedCallback(propName: musicCard, _:string, newValue: string){
            this[propName] = newValue
            this.render()
        }

        render(){
            if(this.shadowRoot)
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../src/components/cardMusic/cardMusic.css">
            <div>
                <div class="music-card" style='background-image: url("${this.thumbnail}");'></div>
                <p>${this.mtitle}</p>
            </div>
            `
        }
}

customElements.define("music-card", AppMusicCard)
export default AppMusicCard;