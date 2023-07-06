class Navbar extends EventTarget {
    id:string;
    //entries:string[];
    domElement:Element | null;
    navEntries:NavEntry[];
    activeEntry:number;
    entryCount:number;

    constructor(whichTarget:string,candidates:string[]) {
        super()
        // root
        this.id = whichTarget
        this.domElement = document.querySelector(`#${whichTarget}`)

        // entries
        this.activeEntry = 0
        this.entryCount = 0
        this.navEntries = new Array()
        candidates.forEach((entryTarget:string)=>{
            let slug:string
            this.navEntries.push(new NavEntry(entryTarget))
            slug = this.navEntries[this.entryCount].getSlug()
            this.navEntries[this.entryCount].addEventListener(slug, (event:Event):void => {
                    let { type } = event,
                    inactiveEntries = this.navEntries.filter(entry => entry.getSlug() !== type) 
                    inactiveEntries.forEach(this.enableEntry)
                    this.dispatchEvent(new Event(slug))
                })
            this.entryCount++;
        })
    }

    enableEntry(entry:NavEntry):void {
        entry.toggleState(true)
    }

    setTo(id:number):string {
        this.navEntries[id].click()
        return this.navEntries[id].getSlug()
    }
}

class NavEntry extends EventTarget{
    id:string;
    domElement:Element | null;
    isActive:Boolean;
    isClickable:Boolean;
    
    constructor(whichTarget:string) {
        super()
        // nav entry
        this.id = whichTarget
        this.isActive = true;
        this.isClickable = true;
        this.domElement = document.querySelector(`${whichTarget}`)
        this.domElement?.addEventListener("pointerup", (event:Event)=>{
            if( this.isClickable === true ){
                this.dispatchEvent(new Event( this.getSlug()))
                this.toggleState(false)
            }
        })
    }

    getSlug():string {
        return `change-to${this.id.replace(/\./g, '-')}`
    }

    toggleState(forceTo?:Boolean):Boolean {
        this.isClickable = forceTo?  forceTo : !this.isClickable;
        this.domElement?.classList[this.isClickable === true ? `remove` : `add`](`is-active`)
        return this.isClickable
    }

    click():void {
        this.domElement.dispatchEvent(new Event("pointerup"))
    }
}

export { Navbar }