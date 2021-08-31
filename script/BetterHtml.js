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
class divmenu extends HTMLElement {
    constructor () {
        super()
        
    }
}

class menuitem extends HTMLElement {
    constructor () {
        super()
    }
}

customElements.define("div-menu", divmenu)
customElements.define("menu-item", menuitem)
/* LOG IN */
class login extends HTMLElement {
    constructor() {
        super();
        this.onload = function () {
            var logIn = "<form method='post' action='/php/login.php'>"
            var types = this.getAttribute("type").split(";")
            for (var i = 0; i< types.length; i++) {
                var t = types[i].split(":") 
                if (t.length==2) {
                    var a = t[0].toLowerCase();
                    var b = t[1].toLowerCase();
                    if (a == "email") {
                        var em = '<input type="email" name="email"/>'
                        if (b == "true") {
                            logIn = logIn + em
                        }
                    }
                    else if (a == "name") {
                        var nm = '<input type="text" name="name"/>'
                        if (b == "true") {
                            logIn = logIn + nm
                        }
                    }
                    else if (a == "password") {
                        var pw = '<input type="password" name="password"/>'
                        if (b == "true") {
                            logIn = logIn + pw
                        }
                    }
                    else if (a == "with") {
                        //Login with a social with: google, facebook
                        //So I need to split(",") the b var and then trim() it 
                        var c = b.split(",")
                        logIn = logIn + '<div class="lgwsc">'
                        for (var l = 0; l<c.length; l++) {
                            var d = c[l].trim()
                            if (d=="google") {
                                logIn = logIn + ""
                            }
                            else if (d=="facebook") {
                                logIn = logIn + ""
                            }
                        }
                        logIn = logIn + '</div>'
                    }
                    
                }
            }
            logIn = logIn + "</form>"
            this.innerHTML = logIn
        } 
    }
}
customElements.define("log-in", login)