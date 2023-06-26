// proto's dumb click party

const prototypeRoot:Element | null = document.body.querySelector(`#prototype`)

document.body.querySelector('#hp-gares')?.addEventListener("pointerup",(click:Event):void => {
    console.log('TEST')
    // ouvrir la gare
    prototypeRoot?.scrollTo({ left: 360 })
})