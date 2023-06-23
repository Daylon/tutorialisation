// An interactive describes a touchable HCI
interface Interactive {
    id: number;
    name: string;
    dom: DocumentFragment;
    prop: Object;
    triggerRef: string;
}

// One tip bubble
class Step {
    label: string;
    id?:number;
    amount?:number;

    constructor(stepLabel:string){
        this.label = stepLabel
    }

    getStepMarkup(newId?:number, totalStepsAmount?:number):string {
        if( newId ) this.id = newId
        if( totalStepsAmount ) this.amount = totalStepsAmount
        return `${this.label}`
    }
}

// A tip contains the general tutorial description
class Tip {
    target: string;
    domElement: Element | null;
    pitch: string;
    active: boolean;
    isPlaying: boolean;
    currentStep: number;
    steps: Step[];

    constructor(tipTarget:string, tipPitch:string, shouldBeActive:boolean, shouldPlay:boolean) {
        this.target = tipTarget
        this.pitch = tipPitch
        this.active = shouldBeActive
        this.isPlaying = shouldPlay

        this.domElement = document.querySelector(this.target)
    }

    // setup

    addStep(entry:Step) {
        this.steps.push(entry)
    }

    addSteps(entries:Step[]) {
        entries.forEach(entry => this.addStep(entry))
    }

    // displays

    getTipMarkup():string {
        return `<div class="tip">${this.pitch}</div>`
    }

    displayCurrentStep(forceStep?:number):void {
        this.steps[forceStep || this.currentStep].getStepMarkup()
    }


    // control

    next():number {
        this.currentStep++
        this.isPlaying = true // obviously
        if( this.currentStep === this.steps.length){ // maxed out
            // we should summon "we're finished here!"

        } 
        return this.currentStep
    }

    playPause():boolean {
        this.isPlaying != this.isPlaying
        return this.isPlaying
    }

    // rando getters

    getPlayState():boolean{return this.isPlaying}
    getCurrentStep():number{return this.currentStep}

    // red buttons

    reset():void{
        this.currentStep = 0
        this.isPlaying = false
    }

}

// START

const tuto:Tip = new Tip("tableaux","Consultez facilement les horaires en gare!", true, false)

const step01:Step = new Step( "appuyez sur un bouton")

const step02:Step = new Step("filtrez vos lignes")

tuto.addSteps([step01,step02])
