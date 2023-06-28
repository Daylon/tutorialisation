import { animate, easeInOut } from "popmotion"

// One tip bubble
class Step {
    root: Element | null;
    page: Element | null;
    label: string;
    id?:number;
    amount?:number;
    markup:Element;
    isDisplayed:boolean; // useful
    isSnoozed:boolean; // don't know yet if useful (e.g. "I touched elsewshere, I changed the page")
    isSet:boolean;

    constructor(context:{root:string, page:string},stepLabel:string,coords?:{x:number, y:number}){
        this.root = document.querySelector(`#${context.root}`)
        this.page = document.querySelector(`#${context.page}`)
        this.label = stepLabel
    }

    getStepMarkup():string {
        return `${this.label}`
    }

    set(newId?:number, totalStepsAmount?:number):void{
        if( newId ) this.id = newId
        if( totalStepsAmount ) this.amount = totalStepsAmount
        if( this.isSet === false ){
            this.markup = document.createElement(`div`)
            this.markup.classList.add('step', 'as-hidden')
            this.markup.innerHTML = this.getStepMarkup()
            this.page?.append(this.markup)
        }
        this.isSet = true
    }

    switchClass(forceTo:boolean):void {
        this.markup.classList[forceTo === true ? 'remove' : 'add']('as-hidden')
        this.markup.classList[forceTo === true ? 'add' : 'remove']('as-displayed')
        this.isDisplayed = forceTo ?? false
    }

    // public usage

    add(options:{newId?:number, totalStepsAmount?:number, forceTo?:boolean}):void {
        this.set(options.newId,options.totalStepsAmount)
        this.switchClass(options.forceTo ?? false)
    }

    display():void { // adds and displays immediately
        this.add({forceTo: true})
    }

    insert():void { // adds silently
        this.add({forceTo: false})
    }
}

export { Step }