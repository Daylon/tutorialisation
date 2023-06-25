class Navbar {
    id:string;
    //entries:string[];
    domElement:Element | null;
    navEntries:NavEntry[];
    activeEntry:number;
    entryCount:number;

    constructor(whichTarget:string,candidates:string[]) {
        // root
        this.id = whichTarget
        this.domElement = document.querySelector(`#${whichTarget}`)

        // entries
        this.activeEntry = 0
        this.entryCount = 0
        this.navEntries = new Array()
        candidates.forEach((entryTarget:string)=>{
            this.navEntries.push(new NavEntry(entryTarget))
            this.navEntries[this.entryCount].addEventListener(this.navEntries[this.entryCount].getSlug(), (event:Event):void => {
                let { type } = event,
                inactiveEntries = this.navEntries.filter(entry => entry.getSlug() !== type) 
                inactiveEntries.forEach(this.enableEntry)
                    })
            this.entryCount++;
        })
    }

    enableEntry(entry:NavEntry):void {
        entry.toggleState(true)
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
}

const navigation:Navbar = new Navbar("connect-navbar", [".navbar-entry.voyager",".navbar-entry.ccl"])