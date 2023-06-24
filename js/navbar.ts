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
            console.log(this.entryCount, this.navEntries.length )
            this.navEntries[this.entryCount].addEventListener(`change-to-${entryTarget}`, this.changePage)
            this.entryCount++;
        })
    }

    changePage(event:Event):void {
        console.log(event)
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
        console.log( this.isClickable)
        this.domElement = document.querySelector(`${whichTarget}`)
        this.domElement?.addEventListener("pointerup", this.click)
    }

    click(event:Event):void {
        console.log(this.id, this.isClickable)
        if( this.isClickable === true ){
            this.dispatchEvent(new Event(`change-to-${this.id}`))
            this.toggleState(false)
        }
    }

    toggleState(forceTo?:Boolean):Boolean {
        this.isClickable = forceTo?  forceTo : !this.isClickable;
        this.domElement?.classList[this.isClickable === true ? `add`:`remove`](`is-clickable`)
        this.domElement?.classList[this.isClickable === false ? `add`:`remove`](`is-active`)
        return this.isClickable
    }
}

const navigation:Navbar = new Navbar("connect-navbar", [".navbar-entry.voyager",".navbar-entry.ccl"])