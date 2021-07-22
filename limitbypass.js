
try {
    /
    localStorage.clear();
} catch(e) {
    function getAlternateLocalStorage() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "https://brainly.com.br");
        document.body.appendChild(ifrm);
        return ifrm;
    }
    var i = getAlternateLocalStorage();
    i.contentWindow.localStorage.clear();
    document.body.removeChild(i);
}
document.getElementsByClassName('js-page-wrapper')[0].click();
