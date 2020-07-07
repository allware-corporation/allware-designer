var tableData;
var tableColumnDropdowns = [null]

function getFormObjects(){
    var formObjects = [];

    $( "input" ).map(function() {

        if ($(this).val() != null || ""){
        var elemVal = {
            id: $(this).attr("id"),
            val: $(this).val() 
        }

        formObjects.push(elemVal)
        }

    })

    $( "textarea" ).map(function() {

        if ($(this).val() != null || ""){
        var elemVal = {
            id: $(this).attr("id"),
            val: $(this).val() 
        }

        formObjects.push(elemVal)
        }

        })

    return formObjects;

}

function modTemplate(template, header, generatedElems, footer){
  var finishedElem = (' ' + template.frame).slice(1)
  if (header){
    finishedElem.replace("<!--TEMPLATE_HEADER-->", header)
  }
  if (generatedElems){
    finishedElemsl.replace("<!--TEMPLATE_BODY-->", generatedElems)
  }
  if(footer){
    finishedElem.replace("<!--TEMPLATE_FOOTER-->", footer)
  }
  return $(finishedElem)
}

// not encapsulated at all :/
function generate(generatorType, data, template){

    var header = ($('#gen_header').val() ? $('#gen_header').val() : '');
    var footer = ($('#gen_footer').val() ? $('#gen_footer').val() : '');

    var formObjects = getFormObjects()

    var generatedParents = ""

    if (generatorType == 1){

      formObjects.forEach(obj => {

        var parent = "<div>"

        if (obj.val && obj.id == "responseText"){
          var elem = `
            <div class='generated-form-group'>
              <div class="form-check">
                <label class="form-check-label">
                  <input type="radio" class="form-check-input" name="optradio"> ${obj.val}
                </label>
              </div>
            </div>
            
            `
            parent +=elem;
          }

          parent += "</div>"

          generatedParents += parent;

      });
    }
    else if (generatorType == 2){

      formObjects.forEach(obj => {
        var parent = "<div>"
        
          if (obj.val && obj.id == "maxWordCount"){
          var elem = `
            <div class='generated-form-group'>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              <div class="row">
                <div class="col-12 text-center">
                  <small class="form-text text-muted">In ${obj.val} words or less</small>
                </div>
              </div>
            </div>
            `
            parent += elem;
        }

        parent += "</div>"

        generatedParents += parent;
      });

    }
    else if (generatorType == 3){

      var parent = "<div>"

      var table = document.createElement('table')
      table.classList = "table"

      var thead = document.createElement('thead')

      var tableHeaders = filterColumns(getColumns(data), getColumnDropdownValues())

      console.log(tableHeaders)
      
      tableHeaders.forEach(column=>{
        var th =  document.createElement('th');
        th.scope = "col";
        th.innerHTML = column;
        thead.append(th);
      })

      var tbody = document.createElement('tbody');

      for(var i=0;i<data.length;i++) {

          var tr =  document.createElement('tr')

          for(var j=0;j<tableHeaders.length;j++){
              var td =  document.createElement('td')
              td.innerHTML = data[i][tableHeaders[j]];
              tr.append(td)
          }
          tbody.append(tr)
      }   

      table.append(thead,tbody) 
      parent += table.outerHTML;

      parent += "</div>"

      generatedParents += parent;

    }
    else if (generatorType == 4){

      //get all elements with class textbox-input
      $(".generate-input-group").each(function(){
        var inputs = []
        var parentId = (this).id
        var input;
        //get all inputs in textboxInput element
        $(`#${parentId} :input`).map(function() {

          if ($(this).val()){
            input = {
              parentId: parentId,
              id: $(this).attr("id"),
              val: $(this).val() 
            }

            inputs.push(input)
          }
        })

        if (input.parentId.includes('textbox_input')){

          var label;
          var type;
          var placeholder;
          var id = 1;

          //generate form group for each textbox-input element
          inputs.forEach(obj => {

            if (obj.val && obj.id == "input_label"){
              label = obj.val;
            }
            else if (obj.val && obj.id == "input_type"){
              type = obj.val;
            }
            else if (obj.val && obj.id == "input_placeholder"){
              placeholder = obj.val;
            }

            if (obj.id){
              id = obj.id + id;
            }

          });

          if (!placeholder){
            placeholder = ""
          }

          var generatedFormGroup = `
            <div class="form-group">
              <label for="${id}_" class="bmd-label-floating">${label}</label>
              <input class="form-control" id="${id}_" type="${type}" placeholder="${placeholder}">
            </div>
          `
          generatedParents += generatedFormGroup;

        }
        else if(input.parentId.includes('checkbox_input')){

          var label;
          var checked;

          //generate form group for each textbox-input element
          inputs.forEach(obj => {

            if (obj.val && obj.id == "checkbox_label"){
              label = obj.val;
            }
          
          });

          var generatedFormGroup = `
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">${label}</label>
          </div>
          `

          generatedParents += generatedFormGroup;
          
        }

      })

    }
    else if (generatorType == 5){

      var list = `<ul class="icon-list" id="icon-list">`

      $(".generate-input-group").each(function(){
        var parentId = (this).id

        var elem = {icon:"", header:"", paragraph:""}

        $(`#${parentId} :input`).map(function() {

          if ($(this).val()){

            var id = $(this).attr("id")
            var val = $(this).val() 

            if (id == "label_icon" && val){
              elem.icon = val
            }
            else if (id == "label_header" && val){
              elem.header = val
            }
            else if (id == "label_paragraph" && val){
              elem.paragraph = val
            }

          }
        })

        var li = 
          `
          <li>
            <span class="icon-list-icon fa ${elem.icon} bounceIn"></span>
            <h4 class="icon-list-title">${elem.header}</h4>
            <p class="icon-list-content">${elem.paragraph}</p>
          </li>
          `

          list += li;

      });

      list += `</ul>`

      generatedParents += list
      
    }
    else if (generatorType == 6){

      var loginForm = `<div>`

      $(".generate-input-group").each(function(){
        var parentId = (this).id
        console.log((this).id)

        if ((this).id.includes("textbox_input")){
          var elem = {label:"", type:"", placeholder:""}

          $(`#${parentId} :input`).map(function() {

            var id = $(this).attr("id")
            var val = $(this).val() 

            if (id == "input_label" && val){
              elem.label = val
            }
            else if (id == "input_type" && val){
              elem.type = val
            }
            else if (id == "input_placeholder" && val){
              elem.placeholder = val
            }
          })

          var inputGroup = 
            `
            <div class="form-group">
              <label>${elem.label}</label>
              <input type="${elem.type}" class="form-control placeholder" placeholder="${elem.placeholder}" autocomplete="off">
            </div>
            `

          loginForm += inputGroup
        }
        else if ((this).id.includes("button_input")){
          var elem = {text:"", style:""}

          $(`#${parentId} :input`).map(function() {
          
            var id = $(this).attr("id")
            var val = $(this).val() 

            if (id == "button_text" && val){
              elem.text = val
            }
            else if (id == "button_style" && val){
              elem.style = val
            }

          })

          var buttonElem =
          `
          <button class="btn myBtn btn-round btn-lg btn-block ${elem.style}" data-loading-text="Action Button" id="portal_logon">${elem.text}</button>
          `
          loginForm += buttonElem
          
        }
        else if ((this).id.includes("linebreak_input")){
          var lineBreak = `<br/>`
          loginForm += lineBreak
        }

      })
 
      loginForm += `</div>`
      generatedParents += loginForm
      
    }

    else if (generatorType == 7){



      formObjects.forEach(obj => {
        var parent = "<div>"
        
          if (obj.val && obj.id == "text_box_value"){
            console.log(obj)
          var elem = `
            <div class='generated-text_box'>
              <div class="row">
                <div class="col-12 text-center">
                  <p class="form-text">${obj.val}</p>
                </div>
              </div>
            </div>
            `
            parent += elem;
        }

        parent += "</div>"

        generatedParents += parent;
      });

      
    }
    
    var generatedElementFinal = $((' ' + template.frame).slice(1).replace("<!--TEMPLATE_HEADER-->", header).replace("<!--TEMPLATE_BODY-->", generatedParents).replace("<!--TEMPLATE_FOOTER-->", footer))
    var newId = "generated_element_0"
    console.log(generatedElementFinal)
    generatedElementFinal.attr("id", newId);     
    
    return generatedElementFinal;
  }
  