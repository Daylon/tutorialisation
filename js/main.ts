import { Step } from "./steps"
import { Tip } from "./tuto"
import { Navbar } from "./navbar"

// START

const context: {
    root:string,
    page:string
} = {
    root: "prototype",
    page: "page-homepage"
}

const tuto:Tip = new Tip(context,"hp-infotrafic","Comment suivre sa ligne préférée&nbsp;?", true, false)
let step01:Step
let step02:Step

const navigation:Navbar = new Navbar("connect-navbar", [".navbar-entry.voyager",".navbar-entry.ccl"])

const prototypeRoot:Element | null = document.body.querySelector(`#prototype`)

setTimeout(() => {
    step01 = new Step(context, "appuyez sur un bouton", "hp-infotrafic")
    step02 = new Step(context, "filtrez vos lignes", "hp-legal")
    tuto.addSteps([step01,step02])
    tuto.render()
}, 500); // fastdom would be a better fit for this process, but let's make it quick

document.body.addEventListener('start-tutorial',(click:Event):void => {
    prototypeRoot?.scrollTo({ top:0, left: 0 })
    let slug:string = navigation.setTo(0)
    console.log(slug)
    tuto.focus()
})