/* 
Example of component parent

<div id="generator_card" class="col-3" style="display: none;">
  
  <div class="card my-1 ml-1">
    <div class="card-header row m-0">
      <div class="col-6">Generator</div>
      <div class="col-3 text-center">
        <button class="btn btn-sm btn-primary" onclick="resetGeneratorInParent('generator_parent')">
          reset
        </button>
      </div>
      <div class="col-3 text-center">
        <button class="btn btn-sm btn-danger" onclick="toggleEdit()">
          close
        </button>
      </div>
    </div>
    
    <div id="generator_parent">
      <!--generator programmatically inserted here-->
    </div>
  </div>

</div>

*/

var _generator = `

<div class="my-1 ml-1">

    <div class=" w-100" id="generators">
            
      <div class="card-body">

      <div id="generator_buttons" class="w-100">
        <button class="btn btn-primary w-100" onclick="toggleGenerateComponent()">
          New Component
          <i class="fa fa-edit"></i>
        </button>

        <!--
        <button class="mt-1 btn btn-primary w-100" disabled>
          View Saved Components
        </button>-->

        <br>
        <br>

        <div class="mt-1 d-flex">
          <p>Selected Component:</p> 
          <p class="ml-auto" id="selected_label">none</p>
        </div>

        <br>
        <br>
        
        <button id="delete_selected_btn" class="mt-1 btn btn-danger w-100" onclick="deleteSelectedElem()" disabled>
          Delete Component
          <i class="fa fa-trash"></i>
        </button>
      </div>

        <!-- Generator Start-->

        <div id="generate_component"   style="display:none">
    
          <div >
            <div class="w-100 d-flex mb-3">
              <h5 class="flex-grow-1 mb-0">NEW COMPONENT</h5>
              <button class="btn btn-sm btn-danger" onclick="toggleGenerateComponent()">cancel <i class="fa fa-close"></i></button>
            </div>

              <div class=" row align-items-center">
                <div class="col-12 col-md-12 text-center">
                  <div class="dropdown">
                    <button id="template_dropdown" class="btn btn-sm btn-info dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Select a Template
                    </button>
                    <div class="dropdown-menu dropdown-secondary" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" onclick="setTemplate('default')">None</a>
                      <a class="dropdown-item" onclick="setTemplate('bootstrap_card')">Bootstrap Card</a>
                      <a class="dropdown-item" onclick="setTemplate('bootstrap_card_blue')">Bootstrap Card Blue</a>
                      <a class="dropdown-item" onclick="setTemplate('bootstrap_tab')">Bootstrap Tab</a>
                      <a class="dropdown-item" onclick="setTemplate('myclinicals_login')">MyClinicals Login</a>
                    </div>
                  </div>
                </div>
              </div>
              <br/>
              <div class=" row align-items-center">
                <div class="col-12 col-md-12 text-center">
                  <div class="dropdown">
                    <button id="type_dropdown" class="btn btn-sm btn-info dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" disabled>
                      Select a Type
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a class="dropdown-item" onclick="changeGenerator(1)">Multiple Choice</a>
                      <a class="dropdown-item" onclick="changeGenerator(2)">Written Response</a>
                      <a class="dropdown-item" onclick="changeGenerator(3)">Table</a>
                      <a class="dropdown-item" onclick="changeGenerator(4)">Form</a>
                      <a class="dropdown-item" onclick="changeGenerator(5)">List</a>
                      <a class="dropdown-item" onclick="changeGenerator(6)">Login Form</a>
                      <a class="dropdown-item" onclick="changeGenerator(7)">Text Box</a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <br/>

            <div id="generator_components" class="animated fadeIn" style="display: none;">
              <!-- Header --> 
              <div id="header_group">
                <div class="form-group">
                  <label for="gen_footer" class="bmd-label-floating">Header</label>
                  <input class="form-control" type="text" id="gen_header" disabled>
                  <span class="bmd-help">Text for the top of your component</span>
                </div>
              </div>
              <!-- Header --> 
              

              <!-- Body --> 
              <div class="my-3">
                <div>
                  <!-- Multiple Choice Gen -->
                  <div class="generator" id="multiple_choice_gen" style="display: none;">

                    <div id="responses">

                      <div id="response" class="form-group">
                        <div class="row">
                          <div class="col-10">
                            <label>Response</label>
                            <input id="responseText" class="form-control response">
                          </div>
                          <div class="col-2">
                            <label>Value</label>
                            <input id="responseVal" class="form-control response-value">
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="form-group">
                      <div class="row justify-content-center">
                        <button class="btn btn-sm btn-success" onclick="addMultipleChoiceResponseGenerator()">Add Response <i class="fas fa-clone"></i></button>
                      </div>
                    </div>

                  </div>
                  <!-- Multiple Choice Gen END -->

                  <!-- Written Response Gen -->
                  <div class="generator" id="written_response_gen" style="display: none;">

                    <div class="form-group">
                      <label>Max Word Count</label>
                      <input class="form-control" id="maxWordCount" type="number"/>
                    </div>

                  </div>
                  <!-- Written Response Gen END -->

                  <!-- Table Gen -->
                  <div class="generator" id="table_gen" style="display: none;">

                    <!--<div class="form-group">
                      <label for="json_table_data">JSON Data</label>
                      <textarea class="form-control" id="json_table_data"></textarea>
                    </div>-->

                    <div class="form-group row align-items-center">
                      <div class="col-6">
                        <label  class="text-muted">API Call</label>
                      </div>
                      <div class="col-6 text-center">
                        <div class="dropdown">
                          <button class="btn btn-sm btn-light dropdown-toggle w-100" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Select Call
                          </button>
                          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" onclick="setData('MYCLINICALS')">MYCLINICALS</a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <label class="text-muted">Columns</label>

                    <div class="form-group row" id="table_columns">
                      <!-- Generated Table Columns -->
                    </div>

                    <button id="add_column_btn" class="btn btn-sm btn-success" disabled="true" onclick="addColumnDropdown()">Add Column <i class="fa fa-plus"></i></button>

                  </div>
                  <!-- Table Gen END -->

                  <!-- Form Gen -->
                  <div class="generator" id="form_gen" style="display: none;">

                    <div id="form_gen_inputs">
                      
                      <!--Generated Inputs Here-->
                      
                    </div>

                    <div class="form-group w-100">
                      <div class="d-flex w-100">
                        <div class="dropdown flex-grow-1 text-center">
                          <button class="btn btn-sm btn-success dropdown-toggle w-100" type="button" id="input_type_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Input Group
                          </button>
                          <div class="dropdown-menu" aria-labelledby="input_type_dropdown">
                            <a class="dropdown-item" onclick="createTextboxInput('form_gen_inputs')">Textbox</a>
                            <a class="dropdown-item" onclick="createCheckboxInput('form_gen_inputs')">Checkbox</a>
                          </div>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                  <!-- Form Gen END -->

                  <!-- List Gen -->
                  <div class="generator" id="list_gen" style="display: none;">

                    <div id="list_gen_inputs">
                      
                      <!--Generated Inputs Here-->
                      
                    </div>

                    <div class="form-group w-100">
                      <div class="d-flex w-100">
                        <div class="dropdown flex-grow-1 text-center">
                          <button class="btn btn-sm btn-success dropdown-toggle w-100" type="button" id="input_type_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Input Group
                          </button>
                          <div class="dropdown-menu" aria-labelledby="input_type_dropdown">
                            <a class="dropdown-item" onclick="createLabelInput('list_gen_inputs')">Textbox</a>
                          </div>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                  <!-- List Gen END -->

                  <!-- Login Gen -->
                  <div class="generator" id="login_gen" style="display: none;">

                    <div id="login_gen_inputs">
                      
                      <!--Generated Inputs Here-->
                      
                    </div>

                    <div class="form-group w-100">
                      <div class="d-flex w-100">
                        <div class="dropdown flex-grow-1 text-center">
                          <button class="btn btn-sm btn-success dropdown-toggle w-100" type="button" id="input_type_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add Input Group
                          </button>
                          <div class="dropdown-menu" aria-labelledby="input_type_dropdown">
                            <a class="dropdown-item" onclick="createTextboxInput('login_gen_inputs')">Textbox</a>
                            <a class="dropdown-item" onclick="createButtonInput('login_gen_inputs')">Button</a>
                            <a class="dropdown-item" onclick="createLineBreakInput('login_gen_inputs')">Line Break</a>
                          </div>
                        </div>
                      </div>
                      
                    </div>

                  </div>
                  <!-- Login Gen END -->

                  <!-- Text Box Gen -->
                  <div class="generator" id="text_box_gen" style="display: none;">
                    <div class="form-group">
                      <input class="form-control" id="text_box_value" type="text"/>
                    </div>
                  </div>
                  <!-- Text Box Gen END -->

                </div>
              </div>
              <!-- Body --> 

              <!-- Footer --> 
              <div id="footer_group">
                <div class="form-group">
                  <label for="gen_footer" class="bmd-label-floating">Footer</label>
                  <input class="form-control" type="text" id="gen_footer" disabled>
                  <span class="bmd-help">Text for the bottom of your component</span>
                </div>
              </div>
              <!-- Footer --> 

              

            </div>
            
            <div class="form-group row">        
                <div class="col text-left">
                  <button class="btn btn-sm btn-danger" onclick="deleteSelectedElem()">
                    <i class="fa fa-trash"></i>
                    delete
                  </button>
                </div>
                <div class="col text-right">
                  <button class="btn btn-sm btn-primary" id="generate_btn" disabled onclick="generateAndAppend()">Generate <i class="fa fa-arrow-right"></i></button>
                </div>
              </div>

          </div>
          
        </div>
        <!-- Generator END -->

      </div>
    </div>

  </div>

`
var _template;
var _page;
var _selectedDiv;
var _generatedElements = [];

function toggleGenerateComponent(){
  $("#generator_buttons").toggle()
  $("#generate_component").toggle()
}

function insertGeneratorIntoParent(id){
  document.getElementById(id).innerHTML += _generator
}

function restart(){
  location.reload();
}

function setTemplate(templateName){
  _template = getTemplate(templateName)

  if (_template.hasHeader){ $("#header_group").show() }
  else { $("#header_group").hide() }
 
  if (_template.hasFooter){$("#footer_group").show()}
  else { $("#footer_group").hide() }

  $("#type_dropdown").prop("disabled", false)

}

function setSelectedDiv(div){
  console.log(div)
  _selectedDiv = div;
}

//jquery element methods
//$('textarea').autoResize();

function addMultipleChoiceResponseGenerator(){
  var newResponseField = $( "#response" ).clone();
  newResponseField.appendTo( "#responses" );
}

function clearFormObjects(){
  var formObjects = []
  $( "input" ).map(function() {
    $(this).val(null)
  })
}

var _generatorType = 0;

function changeGenerator(type){

  $("#generate_btn").prop("disabled", false)
  $("#undo_btn").prop("disabled", false)
  $("#gen_header").prop("disabled", false)
  $("#gen_footer").prop("disabled", false)

  //hide all forms
  $(".generator").each(function(){
    $(this).hide()
  })

  if (type == 1){
    //show multiple choice form
    clearFormObjects()
    $("#multiple_choice_gen").toggle()
  }
  else if (type == 2){
    //show written response form
    clearFormObjects()
    $("#written_response_gen").toggle()
  }
  else if (type == 3){
    //show written response form
    clearFormObjects()
    $("#table_gen").toggle()
  }
  else if (type == 4){
    //show written response form
    clearFormObjects()
    $("#form_gen").toggle()
  }
  else if (type == 5){
    //show written response form
    clearFormObjects()
    $("#list_gen").toggle()
  }
  else if (type == 6){
    //show written response form
    clearFormObjects()
    $("#login_gen").toggle()
  }
  else if (type == 7){
    //show written response form
    clearFormObjects()
    $("#text_box_gen").toggle()
  }

  _generatorType = type;
  
  $("#generator_components").show()
}

function addColumnDropdown(){
  var parentId = "table_columns"
  var columns = getColumns(_data)
  appendColumnInput(columns, parentId)
}

var _data;
function setData(){
  $("#add_column_btn").prop("disabled", false)

  //example of syncronous api call
  _data = get('MYCLINICALS');
}

function generateAndAppend(){
  var generatedElement = generate(_generatorType, _data, _template)
  _selectedDiv.append(generatedElement[0])
  _generatedElements.push(generatedElement[0])
  console.log(_generatedElements)
}

function printDiv(divName) {
  var printContents = document.getElementById(divName).innerHTML;
  var originalContents = document.body.innerHTML;

  document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

function undo(){
  document.getElementById(_generatedElements[0].id).parentElement.removeChild(document.getElementById(_generatedElements[0].id))
  _generatedElements.splice(1, _generatedElements.length-1)
}
  
function getGeneratedElements(){
  return _generatedElements;
}