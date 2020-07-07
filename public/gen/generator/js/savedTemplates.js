
/** savedTemplates.js **/

var _templates = [
    new Template(
        'default', 
            `
            <div>
                <div class="card-body">
                    <!--TEMPLATE_BODY-->
                </div>
            </div>
            `,
            false,
            false
        ),
    new Template(
        'bootstrap_card', 
            `
            <div class="card">
                <div class="card-header" id="header">
                    <!--TEMPLATE_HEADER-->
                </div>
                <div class="card-body">
                    <!--TEMPLATE_BODY-->
                </div>
                <div class="card-footer text-muted" id="footer">
                    <!--TEMPLATE_FOOTER-->
                </div>
            </div>
            `,
            true,
            true
        ),
    new Template(
        'bootstrap_card_blue', 
            `
            <div class="card">
                <div class="card-header" id="header">
                    <!--TEMPLATE_HEADER-->
                </div>
                <div class="card-body" style="background-color:lightblue">
                    <!--TEMPLATE_BODY-->
                </div>
                <div class="card-footer text-muted" id="footer">
                    <!--TEMPLATE_FOOTER-->
                </div>
            </div>
            `,
            true,
            true
        ),
        new Template(
        'bootstrap_tab', 
            `
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" href="#home"><!--TEMPLATE_HEADER--></a>
              </li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane active p-2" id="home" role="tabpanel" aria-labelledby="home-tab">
                <!--TEMPLATE_BODY-->
              </div>
            </div>
            `,
            false,
            false
        ),
        new Template(
            'myclinicals_login', 
                `
                <div name="" action="" method="" id="form-login" class="form-login">
                    <h4 class="form-heading"><abbr class="form-sub-heading"><!--TEMPLATE_HEADER--><abbr></h4>
                    <div class="form-validation alert"></div>
                    <div>
                        <!--TEMPLATE_BODY-->
                    </div>
                </div>
                `,
                true,
                false
            ),
        
    ]