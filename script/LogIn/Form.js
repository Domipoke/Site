function LoginOpen() {
    var form = '<log-in type="email: true; name: true; password: true;"></log-in>'
    if (!document.body.innerHTML.includes(form)) {document.body.innerHTML = form + document.body.innerHTML}
}