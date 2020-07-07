/** inputs.js **/

function activateDropDowns(){
    $(".dropdown-menu a").click(function () {
         var selText = $(this).text();
         $(this).parent().siblings().not($(this)).html(selText)
    });
  }

function createColumnInput(parentId){
    var id = "column_input" +  $('.column-input').length

    var columnInput = `
      <div class="col-4">
        <span class="text-muted">Column</span>
        <input id="input_column" class="form-control input">
      </div>
      `
    $(`#${parentId}`).append(columnInput)
  }

  function createTextboxInput(parentId){
    var id = "textbox_input" +  $('.textbox-input').length

    var textboxInput = `
      <div id="${id}" class="form-group textbox-input generate-input-group" >
        <div class="row align-items-center">
          <div class="col-6">
            <span class="text-muted">Label</span>
            <input id="input_label" class="form-control input">
          </div>
          <div class="col-3">
            <span class="text-muted">Input Type</span>
            <select class="browser-default custom-select" id="input_type">
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="date">Date</option>
              <option value="password">Password</option>
            </select>
          </div>
          <div class="col-3">
            <span class="text-muted">Placeholder</span>
            <input id="input_placeholder" class="form-control input-value">
          </div>
        </div>
      </div>
      `
    $(`#${parentId}`).append(textboxInput)
  }

  function createCheckboxInput(parentId){
    var id = "checkbox_input" + $('.checkbox-input').length
    
    var checkboxInput = `
      <div id="${id}" class="form-group checkbox-input generate-input-group">
          <div class="row align-items-center">
            <div class="col-6">
              <span class="text-muted">Label</span>
              <input id="checkbox_label" class="form-control input">
            </div>
          </div>
        </div>
      `
    $(`#${parentId}`).append(checkboxInput)
  }

  function createLabelInput(parentId){

    var id = "label_input" + $('.label-input').length
    
    var labelInput = `
      <div id="${id}" class="form-group label-input generate-input-group">
          <div class="row align-items-center">
            <div class="col-4">
              <span class="text-muted">fa-icon</span>
              <input id="label_icon" class="form-control input">
            </div>
            <div class="col-4">
              <span class="text-muted">Header</span>
              <input id="label_header" class="form-control input">
            </div>
            <div class="col-4">
              <span class="text-muted">Paragraph</span>
              <input id="label_paragraph" class="form-control input">
            </div>
          </div>
        </div>
      `
    $(`#${parentId}`).append(labelInput)
  }

  function createButtonInput(parentId){

    var id = "button_input" + $('.button-input').length
    
    var buttonInput = 
    `
      <div id="${id}" class="form-group button-input generate-input-group" >
        <div class="row align-items-center">
          <div class="col-6">
            <span class="text-muted">Label</span>
            <input id="button_text" class="form-control input">
          </div>
          <div class="col-6">
            <span class="text-muted">Style</span>
            <select class="browser-default custom-select" id="button_color">
              <option value="primary">primary</option>
              <option value="secondary">secondary</option>
              <option value="danger">danger</option>
            </select>
          </div>
        </div>
      </div>
    `

    $(`#${parentId}`).append(buttonInput)

  }
  
  function createLineBreakInput(parentId){
    var lineBreakInput = `
      <div id="linebreak_input" class="form-group linebreak-input generate-input-group">
          --break--
        </div>
      `
    $(`#${parentId}`).append(lineBreakInput)
  }

  var _columnDropdowns = []
  function appendColumnInput(columns, parentId){

    var headerSelectionElems = ""
    for (var j=0;j<columns.length;j++){
      var headerSelectionElem = `
        <option class="dropdown-item" value="${columns[j]}">${columns[j]}</option>
        `
      headerSelectionElems += headerSelectionElem
    }

    var dropdown = `
    <select class="browser-default custom-select col-6 col-md-4 gen_table_column" id="gen_table_column${_columnDropdowns.length}">
      ${headerSelectionElems}
    </select>
    `

    $(`#${parentId}`).append($(dropdown))
    _columnDropdowns.push(dropdown)

    activateDropDowns()
  }

  function getColumnDropdownValues(){
    var columns = [];
  
    $(".gen_table_column").map(function() {
      columns.push($(this).val())
    })

    return columns;
  }

