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
    // ouvrir la gare
    prototypeRoot?.scrollTo({ top:0, left: 360 })
})