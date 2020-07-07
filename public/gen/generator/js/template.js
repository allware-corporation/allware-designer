
/** template.js **/

class Template {
    constructor(name, frame, hasHeader, hasFooter){    
        this.name = name;
        this.frame = frame;
        this.hasHeader = hasHeader;
        this.hasFooter = hasFooter;
    }
}

function getTemplate(templateName){

    for (var i = 0; i < _templates.length; i++){
        var template = _templates[i]
        if(template.name == templateName){
            return template;
        }
    }

    return null;
}

function injectIntoTemplate(templateName, header, body, footer){
    console.log(header, body, footer)
    var temp = getTemplate(templateName)
    var newFrame = temp.frame;
    newFrame.replace("<div>", header);
    newFrame.replace("<!--TEMPLATE_BODY-->", body);
    newFrame.replace("<!--TEMPLATE_FOOTER-->", footer);
    temp.frame = newFrame;
    return temp;
}
