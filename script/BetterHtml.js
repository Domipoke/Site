class tooltip extends HTMLElement {
    constructor() {
        super()
    }
}
class tooltiptext extends HTMLElement {
    constructor() {
        super()
    }
}
class tooltipcontent extends HTMLElement {
    constructor() {
        super()
    }
}



//Add element
customElements.define("tool-tip", tooltip) 
customElements.define("tool-tip-text", tooltiptext) 
customElements.define("tool-tip-content", tooltipcontent) 
////