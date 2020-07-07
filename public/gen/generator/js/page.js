
/** page.js **/

class Page {
    constructor(name, html){    
        this.name = name;
        this.frame = html;
    }
}

function getPage(pageName){

    for (var i = 0; i < _pages.length; i++){
        var page = _pages[i]
        if(page.name == pageName){
            return page;
        }
    }

    return null;
}

function getAllPages(){

}
