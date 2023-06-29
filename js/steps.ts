import { animate, easeInOut } from "popmotion"

// One tip bubble
class Step extends EventTarget  {
    root: Element | null;
    page: Element | null;
    label: string;
    id?:number;
    amount?:number;
    coords:{
        x:number,
        y:number
    };
    markup:Element;
    isDisplayed:boolean; // useful
    isSnoozed:boolean; // don't know yet if useful (e.g. "I touched elsewshere, I changed the page")
    isSet:boolean;

    constructor(context:{root:string, page:string},stepLabel:string,attachedTo:string){ //coords?:{x:number, y:number}
        super()
        // track key elements
        this.root = document.querySelector(`#${context.root}`)
        this.page = document.querySelector(`#${context.page}`)
        this.label = stepLabel
        // go find a position
        let anchor:HTMLElement = document.querySelector(`#${attachedTo}`) as HTMLElement
        this.coords = { x: -1, y: -1 }
        this.coords.x = Math.round(Math.random() * (360-200)) // random x from the available margin: max-width - tip width
        console.log( anchor.offsetTop, anchor.clientHeight)
        this.coords.y = anchor.offsetTop + Math.round(anchor.clientHeight / 2) + 150
    }

    getStepMarkup():string {
        return `<div class="step-header">${(this.id ?? 0) + 1 } sur ${this.amount}</div><div class="step-label">${this.label}</div>
            <div class="step-footer">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346627 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 6.94942 15.7931 5.90914 15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0V0ZM9.03979 10.617C9.08514 10.6608 9.12143 10.7131 9.14658 10.7708C9.17173 10.8286 9.18525 10.8908 9.18637 10.9538C9.1875 11.0168 9.1762 11.0794 9.15313 11.138C9.13006 11.1967 9.09566 11.2502 9.05191 11.2955C9.00815 11.3409 8.95589 11.3772 8.89811 11.4023C8.84033 11.4275 8.77816 11.441 8.71516 11.4421C8.65215 11.4433 8.58954 11.432 8.5309 11.4089C8.47226 11.3858 8.41874 11.3514 8.37339 11.3077L5.3023 8.34517C5.25585 8.30045 5.2189 8.24681 5.19366 8.18748C5.16843 8.12815 5.15542 8.06433 5.15542 7.99985C5.15542 7.93538 5.16843 7.87156 5.19366 7.81223C5.2189 7.75289 5.25585 7.69926 5.3023 7.65454L8.37339 4.69243C8.46498 4.60406 8.58791 4.55569 8.71516 4.55796C8.8424 4.56023 8.96354 4.61296 9.05191 4.70454C9.14028 4.79613 9.18865 4.91906 9.18637 5.04631C9.1841 5.17355 9.13138 5.29468 9.03979 5.38305L6.32691 7.99985L9.03979 10.617Z" fill="white"/>
                </svg>
            <div class="step-footer-cta">Continuer</div>
        </div>`
    }

    set(newId?:number, totalStepsAmount?:number):void{
        if( newId ) this.id = newId
        if( totalStepsAmount ) this.amount = totalStepsAmount
        if( this.isSet !== true ){
            // build
            this.markup = document.createElement(`div`)
            this.markup.classList.add('is-step', 'as-hidden')
            this.markup.innerHTML = this.getStepMarkup()
            // set
            this.page?.append(this.markup);
            (this.markup as HTMLElement).style.left = `${this.coords.x}px`;
            (this.markup as HTMLElement).style.top = `${this.coords.y}px`;
            // listen
            this.markup.addEventListener("pointerup", (click:Event):void => {
                this.dispatchEvent(new Event("next"))
            })

        }
        this.isSet = true
    }

    switchClass(forceTo:boolean):void {
        if(forceTo === true ){
            // in this case, we BEGIN with the class switch
            this.markup.classList.remove('as-hidden')
            this.markup.classList.add('as-displayed')
        }
        //this.markup.classList[forceTo === true ? 'remove' : 'add']('as-hidden')
        //this.markup.classList[forceTo === true ? 'add' : 'remove']('as-displayed')
        this.isDisplayed = forceTo ?? false
        animate(this.getAnimationAppearance(this.isDisplayed, forceTo))
    }

    getAnimationAppearance(shouldDisplay:boolean, forceTo:boolean):any {
        let from:number = shouldDisplay === true ? 0 : 1,
        to:number = shouldDisplay === true ? 1 : 0

        this.markup?.scrollIntoView({
            block: "center",
            inline: "nearest",
            behavior: "smooth"
        })

        return { from, to, duration: 150, ease: easeInOut, onUpdate: latest => {
            (this.markup as HTMLElement ).style.opacity = `${latest}`;
            (this.markup as HTMLElement).style.left = `${this.coords.x}px`;
            (this.markup as HTMLElement).style.top = `${this.coords.y + latest * 32 - 32}px`;
          //(this.markup as HTMLElement ).style.transform = `translate(${this.coords.x}px, ${this.coords.y + latest * 64 - 64}px)`;
        }, onComplete: () => {
            if(forceTo === false){
                // in this case, we END with the class switch
                this.markup.classList.add('as-hidden')
                this.markup.classList.remove('as-displayed')
                }
            }
        }
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

    focus():void {
        this.markup?.scrollIntoView({
            block: "center",
            inline: "nearest",
            behavior: "smooth"
        })
    }
}

export { Step }