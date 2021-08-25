/* TOOL TIP */

class tooltip extends HTMLDivElement {
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



customElements.define("tool-tip", tooltip) 
customElements.define("tool-tip-text", tooltiptext) 
customElements.define("tool-tip-content", tooltipcontent) 

/* DIV MENU */
/* 
"vertical"|"horizontal"|"fixedtop"|"fixedbottom"|"stickytop"|"stickybottom" 
*/
class divmenu extends HTMLDivElement {
    constructor () {
        super()
        
    }
}

class menuitem extends HTMLDivElement {
    constructor () {
        super()
    }
}

customElements.define("div-menu", divmenu)
customElements.define("menu-item", menuitem)
