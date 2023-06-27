import { animate, easeInOut } from "popmotion"

// One tip bubble
class Step {
    label: string;
    id?:number;
    amount?:number;
    isDisplayed:boolean; // useful
    isSnoozed:boolean; // don't know yet if useful (e.g. "I touched elsewshere, I changed the page")

    constructor(stepLabel:string){
        this.label = stepLabel
    }

    getStepMarkup(newId?:number, totalStepsAmount?:number):string {
        if( newId ) this.id = newId
        if( totalStepsAmount ) this.amount = totalStepsAmount
        return `${this.label}`
    }
}

export { Step }