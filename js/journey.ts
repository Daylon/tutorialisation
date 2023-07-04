// proto's dumb click party

const prototypeRoot:Element | null = document.body.querySelector(`#prototype`)

// TO STATION ROOT PAGE
document.body.querySelector('#hp-gares')?.addEventListener("pointerup",(click:Event):void => {
    console.log('GARE')
    // ouvrir la gare
    prototypeRoot?.scrollTo({ top:0, left: 360 })
})

// TO HOMEPAGE
document.body.querySelector('.navbar-entry.voyager')?.addEventListener("pointerup",(click:Event):void => {
    console.log('HP')
    // ouvrir la gare
    prototypeRoot?.scrollTo({ top:0, left: 0 })
})

// TO CUSTOMER ACCOUNT
document.body.querySelector('.navbar-entry.ccl')?.addEventListener("pointerup",(click:Event):void => {
    console.log('CCL')
    // ouvrir la rubrique compte
    prototypeRoot?.scrollTo({ top:0, left: 720 })
})

// TO TUTORIALS PAGE
document.body.querySelector('#ccl-tuto')?.addEventListener("pointerup",(click:Event):void => {
    console.log('Tuto')
    // ouvrir la page des tutoriaux
    prototypeRoot?.scrollTo({ top:0, left: 1080 })
})


// AUTORUN TUTORIAL
document.body.querySelector('#tuto-1')?.addEventListener("pointerup",(click:Event):void => {
    console.log('Tuto')
    // catch any click on the upper part
    document.body.dispatchEvent(new Event('start-tutorial'))
})
