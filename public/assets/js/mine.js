var selectedHomeScreenMainImgId = 0;  
var selectedRegistryMainImgId = 0;  
var selectAppId = 0; //HomeScreen selected clinical ID
var color = 2; // HomScreen color
var uploadImages;
//Registries JavaScript Arrary
var clinicals;
//Registries JavaScript Arrary
var application;
var selectedRegistryId = 0;
var selectedClinical;
var leftSideMenu_group = 0;
var leftSideMenu_item = 0;
var leftSideMenu = [];
//Registries Grid
var grid;
/* -------------------------------------------------   */
/* -------------------- Clinicals Section -----------   */
/* -------------------------------------------------   */

function getSelectedClinicalInfo() {
  $.ajax({
    url: 'http://localhost:4300/clinicals',
    type: 'GET',
    success: function(data) {
      //called when successful
      clinicals = data;
      for ( var i = 0; i < clinicals.length; i++) {
        clinicals[i].lists = JSON.parse(clinicals[i].lists);
        clinicals[i].mainImg = JSON.parse(clinicals[i].mainImg);
        if (clinicals[i].selectedAppId == 1) {
          selectAppId = i;
          selectedClinical = clinicals[i];
          break;
        }
      }
    },
    error: function(e) {
      //called when there is an error
      console.log(e.message);
    }
  });
}

function getClinicals() {
    $.ajax({
      url: 'http://localhost:4300/clinicals',
      type: 'GET',
      success: function(data) {
        //called when successful
        clinicals = data;
        for ( var i = 0; i < clinicals.length; i++) {
          clinicals[i].lists = JSON.parse(clinicals[i].lists);
          clinicals[i].mainImg = JSON.parse(clinicals[i].mainImg);
          if (clinicals[i].selectedAppId == 1) {
            selectAppId = i;
          }
        }
        var id = clinicals[selectAppId].selectedMainImg;
        $("#page-header").css("background-image", "url(" + clinicals[selectAppId].mainImg[id] + ")");
        changeColor(clinicals[selectAppId].selectedColor);

        $(".spinner").css("display","none");
        $("#home_content").css("opacity",1);
        $("#home_content").addClass("fade-in"); 
        HomeScreen(selectAppId);
      },
      error: function(e) {
        //called when there is an error
        console.log(e.message);
      }
    });
}

function saveHomeScreenColor(id) {
  $.ajax({
    url: 'http://localhost:4300/clinicals/updateSelectedColor',
    type: 'post',
    data: {
      id: clinicals[selectAppId].id,
      selectedColor: color,
    },
    success: function(data) {
      //called when successful
      console.log(data);
    },
    error: function(e) {
      //called when there is an error
      console.log(e.message);
    }
  });
}

function saveHomeScreenSelectedAppId(id) {
  $.ajax({
    url: 'http://localhost:4300/clinicals/updateSelectedAppId',
    type: 'post',
    data: {
      id: clinicals[id].id,
      selectedAppId: 1,
    },
    success: function(data) {
      //called when successful
      console.log(data);
    },
    error: function(e) {
      //called when there is an error
      console.log(e.message);
    }
  });
}

function saveHomeScreenBackground(id) {
  $.ajax({
    url: 'http://localhost:4300/clinicals/updateSelectedMainImg',
    type: 'post',
    data: {
      id: clinicals[selectAppId].id,
      selectedMainImg: id,
    },
    success: function(data) {
      //called when successful
      console.log(data);
    },
    error: function(e) {
      //called when there is an error
      console.log(e.message);
    }
  });
}
// Change Selected Registry Conent ( id is application registry id )
function HomeScreen(id) {
    selectAppId = id;
    saveHomeScreenSelectedAppId(id);
    // LOGO
    var logo = document.getElementById("logo");
    logo.innerHTML = clinicals[id].logo;

    //TITLE
    var title = document.getElementById("title");
    title.innerHTML = clinicals[id].title;

    // LEFT SIDE LIST
    var temp ='';
    for ( var i = 0 ; i < clinicals[id].lists.length; i ++) {
        temp += `<li><span class="` + clinicals[id].lists[i].listIcon + `""></span><h4 class="icon-list-title">`+ clinicals[id].lists[i].listTitle +`</h4><p class="icon-list-content">` + clinicals[id].lists[i].listContent + `</p> </li>`
    }
    var iconList = document.getElementById("icon-list");
    iconList.innerHTML = temp;

    // RIGHT SIDE LOGON FORM
    var form_login = document.getElementById("form-login");
    form_login.innerHTML = `
      <h4 class="form-heading"><abbr id="web_portal_log">` + clinicals[id].logo +  `</abbr> &nbsp;LogOn <br/> <abbr class="form-sub-heading">Web Portal<abbr></h4>
      <div class="form-validation alert"></div>
      <div class="form-group">
        <label for="form-name">UserName</label>
        <input type="text" name="name" id="form-name" class="form-control placeholder" placeholder="Your UserName" autocomplete="off">
      </div>
      <div class="form-group">
        <label for="form-email">Password</label>
        <input type="password" name="password" id="form-password" class="form-control placeholder" placeholder="Your Password" autocomplete="off">
      </div>
      <br/><br/>
      <div class="form-group form-group-submit">
        <a class="btn myBtn btn-round btn-lg btn-block" data-loading-text="Action Button" id="portal_logon" href="./RegistryPage.html">` + clinicals[id].logo + `</button>
      </div>`

    // setting box images
    var backgroundImg = '';
    for ( var i = 0; i < clinicals[id].mainImg.length; i++ ) {
        backgroundImg += `<li><a class="img-holder switch-trigger backgroundImg" id="` + i +  `"><img src=` + clinicals[id].mainImg[i] + ` alt=""><i class="fa fa-times del switch-trigger"></i></a></li>`
    }
    // setting box logos
    var logos = '';
    for ( var i = 0 ; i < clinicals.length ; i++ ) {
        logos += `<li><a class="img-holder logoImg"  onclick="HomeScreen(` + i + `)"><img src=` + clinicals[i].logoImg + ` alt="" style="width: 100%; height: 35px"></a></li>`
    }
    var uploadButton = `<li class="header-title" style="margin-bottom: 10px"><a href="/" class="btn myBtn btn-round" style="font-size: 14px;text-align:center; display:block;"><i class="fa fa-upload"></i> &nbsp; UPLOAD<input type="file" name="file" id="fileInput"/></a></li>`
    // settingBox template
    var settingBox = document.getElementById("settingBox");
    settingBox.innerHTML = `
        <div class="dropdown show-dropdown">
        <a href="#" data-toggle="dropdown" id="settingIcon">
          <i class="fa fa-cog fa-2x"> </i>
        </a>
        <ul class="dropdown-menu">
            <li class="header-title"> COLORS<abbr class="switch-trigger" style="position:fixed; top: 10px; right: 15px; cursor:pointer;" onclick="toggleDesigner()"><i class="material-icons" style="font-size:24px; color: #f44336; border: 1px solid #f44336">category</i></abbr> </li>
            <li class="adjustments-line">
                <a href="javascript:void(0)" class="switch-trigger active-color">
                    <div class="badge-colors ml-auto mr-auto">
                        <span class="badge filter badge-purple " data-color="purple"  onclick="changeColor(1)"></span>
                        <span class="badge filter badge-azure" data-color="azure" onclick="changeColor(2)"></span>
                        <span class="badge filter badge-green" data-color="green" onclick="changeColor(3)"></span>
                        <span class="badge filter badge-warning" data-color="orange" onclick="changeColor(4)"></span>
                        <span class="badge filter badge-danger" data-color="danger" onclick="changeColor(5)"></span>
                    </div>
                    <div class="clearfix"></div>
                </a>
            </li>
            <li class="header-title"> CLINICALS </li>` + logos + `</li><br/>
            <li class="header-title" style="margin-top: 10px; border-top: 1px solid #ddd;">BACKGROUND IMAGES</li> ` + backgroundImg + `
            <li><a class="img-holder switch-trigger background" id="output" href="javascript:void(0)"></a></li>` + uploadButton + `<li class="header-title"> </li><br/><br/>
        </ul>
        </div>`;
    callSettingBox();
    changeColor(clinicals[selectAppId].selectedColor);
    var id = clinicals[selectAppId].selectedMainImg;
    $("#page-header").css("background-image", "url(" + clinicals[selectAppId].mainImg[id] + ")");
}
// End Content

function homeScreenImageUpload() {
    var fileInput = document.getElementById('fileInput');
    var output = document.getElementById('output');
    //var buff = document.getElementById('buff');
            
    fileInput.addEventListener('change', function(e) 
    {
        var file = fileInput.files[0];
        var imageType = /image.*/;
        if (file.type.match(imageType)) 
        {
            var reader = new FileReader();
            reader.onload = function(e) 
            {
              output.innerHTML = "";
              var img = new Image();
              img.src = reader.result;
              clinicals[selectAppId].mainImg.push(reader.result);
              HomeScreen(selectAppId);
              // save upload image on MySQL
              changeHomeScreenImg(clinicals[selectAppId]);
            }
            reader.readAsDataURL(file);   
            window.event.cancelBubble = true;    
        }
    else 
        {
          alert("File not supported!")
        }
    });
}

// HomeScreen Change Color
function changeColor(id) {
    color = id;
    saveHomeScreenColor(color);
    if (id == 1) {
      $(".icon-list-icon").css("background-color", '#9368E9');
      $(".myBtn").css("background-color", '#9368E9');
      $(".badge-purple").addClass("active");
      $(".badge-azure").removeClass("active");
      $(".badge-green").removeClass("active");
      $(".badge-warning").removeClass("active");
      $(".badge-danger").removeClass("active");
    } else if (id == 2) {
      $(".icon-list-icon").css("background-color", '#2CA8FF');
      $(".myBtn").css("background-color", '#2CA8FF');
      $(".badge-purple").removeClass("active");
      $(".badge-azure").addClass("active");
      $(".badge-green").removeClass("active");
      $(".badge-warning").removeClass("active");
      $(".badge-danger").removeClass("active");
    } else if (id == 3) {
      $(".icon-list-icon").css("background-color", 'rgb(23, 153, 65)');
      $(".myBtn").css("background-color", 'rgb(23, 153, 65)');
      $(".badge-purple").removeClass("active");
      $(".badge-azure").removeClass("active");
      $(".badge-green").addClass("active");
      $(".badge-warning").removeClass("active");
      $(".badge-danger").removeClass("active");
    } else if (id == 4) {
      $(".icon-list-icon").css("background-color", '#fbc658');
      $(".myBtn").css("background-color", '#fbc658');
      $(".badge-purple").removeClass("active");
      $(".badge-azure").removeClass("active");
      $(".badge-green").removeClass("active");
      $(".badge-warning").addClass("active");
      $(".badge-danger").removeClass("active");
    } else if (id == 5) {
      $(".icon-list-icon").css("background-color", '#f5593d');
      $(".myBtn").css("background-color", '#f5593d');
      $(".badge-purple").removeClass("active");
      $(".badge-azure").removeClass("active");
      $(".badge-green").removeClass("active");
      $(".badge-warning").removeClass("active");
      $(".badge-danger").addClass("active");
    }
}

// HomeScreen change Main Image
function changeHomeScreenImg(clinical) {
  $.ajax({
    url: 'http://localhost:4300/clinicals/uploadImage',
    type: 'post',
    data: {
      id: clinical.id,
      mainImg: clinical.mainImg,
    },
    success: function(data) {
      //called when successful
      console.log(data);
    },
    error: function(e) {
      //called when there is an error
      console.log(e.message);
    }
  });
}

/* -------------------------------------------------   */
/* -------------------- Registry Section -----------   */
/* -------------------------------------------------   */

function getRegistries() {
    $.ajax({
      url: 'http://localhost:4300/registry',
      type: 'GET',
      success: function(data) {
        //called when successful
        application = data;
        for ( var i = 0; i < application.length; i++) {
            application[i].mainImg = JSON.parse(application[i].mainImg);
            leftSideMenu.push([]);
        }
        getLeftSideMenu();
        // set the dropdown registries
        for (var i = 0 ; i < application.length; i++ ) {
            applicationSelect.innerHTML += `<option value = "` + i + `">` + application[i].title + `</option>`; 
        }
      },
      error: function(e) {
        //called when there is an error
        console.log(e.message);
      }
    });
}

function getLeftSideMenu() {
    $.ajax({
      url: 'http://localhost:4300/registry/leftSideMenu',
      type: 'GET',
      success: function(data) {
        //called when successful
        // leftSideMenu = data;
        for ( var i = 0 ; i < application.length; i++ ) {
          var count = 0;
          for ( var j = 0 ; j < data.length; j++ ) {
            if (application[i].id == data[j].registry_id) {
              leftSideMenu[i][count] = data[j];
              count += 1;
            }
          }
          console.log(leftSideMenu);
          const result = [];
          const map = new Map();
          for ( const item of leftSideMenu[i]) {
            if (!map.has(item.menuGroup)) {
              map.set(item.menuGroup, true);
              result.push({
                registry_id: item.registry_id,
                menuGroup: item.menuGroup,  
                subMenuText: [], 
                subMenuIcon: [], 
                submenulink: [], 
                active: [], 
                pageGroupID: [], 
                subgrouporder: [], 
                SortOrder: [], 
                PageName: [], 
                ProjectGroup: [],
              })
            }
          }
          console.log(result);
          const temp = [];
          for ( var l = 0; l < result.length; l++ ) {
            temp.push([]);
            temp[l] = result[l];
            var subMenuText = [];
            var subMenuIcon = [];
            var submenulink = [];
            var active = [];
            var pageGroupID = [];
            var subgrouporder = [];
            var sortOrder = [];
            var pageName = [];
            var projectGroup = [];

            for ( var k = 0 ; k < data.length; k++ ) {
              if (result[l].menuGroup == data[k].menuGroup && result[l].registry_id == data[k].registry_id) {
                subMenuText.push(data[k].subMenuText);
                subMenuIcon.push(data[k].subMenuIcon);
                submenulink.push(data[k].submenulink);
                active.push(data[k].active);
                pageGroupID.push(data[k].pageGroupID);
                subgrouporder.push(data[k].subgrouporder);
                sortOrder.push(data[k].SortOrder);
                pageName.push(data[k].PageName);
                projectGroup.push(data[k].ProjectGroup);
              }
            }
            temp[l].subMenuText = subMenuText;
            temp[l].subMenuIcon = subMenuIcon;
            temp[l].submenulink = submenulink;
            temp[l].active = active;
            temp[l].pageGroupID = pageGroupID;
            temp[l].subgrouporder = subgrouporder;
            temp[l].SortOrder = sortOrder;
            temp[l].PageName = pageName;
            temp[l].ProjectGroup = projectGroup;
          }
          console.log(temp);
          leftSideMenu[i] = temp;
        }
        RegistryTemplate(0);
        $(".spinner").css("display","none");
        $("#registery_content").css("opacity",1);
        $("#registery_content").addClass("fade-in"); 
        console.log(leftSideMenu);
      },
      error: function(e) {
        //called when there is an error
        console.log(e.message);
      }
    });

}
function getGrid() {
    $.ajax({
      url: 'http://localhost:4300/registry/grid',
      type: 'GET',
      success: function(data) {
        //called when successful
        grid = data;
      },
      error: function(e) {
        //called when there is an error
        console.log(e.message);
      }
    });
}
function saveRegistryChangedMainImg(id, selectedImgId, imgUrl) {
  $.ajax({
    url: 'http://localhost:4300/registry/changeMainImg',
    type: 'post',
    data: {
      id: application[id].id,
      selectedImgId: selectedImgId,
      imgUrl: imgUrl,
    },
    success: function(data) {
      //called when successful
      console.log(data);
    },
    error: function(e) {
      //called when there is an error
      console.log(e.message);
    }
  });
}
// Change Selected Registry Conent ( id is application registry id )
function RegistryTemplate(id) {
    $("#formDiv").css("display","block");
    $("#registryDiv").css("display","none");
    selectedRegistryId = id;
    //logo
    // var logo = document.getElementById("logo-normal");
    //left-side-menu
    var leftSideMenuTemp = document.getElementById("registryLeftSideMenu");
    var temp = '';
    for ( var i = 0; i < leftSideMenu[id].length; i++ ) {
      var subMenu = '';
      for ( var j = 0; j < leftSideMenu[id][i].subMenuText.length; j++ ) {
        subMenu += `
          <li class="nav-item ` + leftSideMenu[id][i].active[j] + `" id="` + i + `">
            <a id="` + j + `" class="nav-link left-nav-link" href="javascript:void(0)">
              <i class="material-icons">` + leftSideMenu[id][i].subMenuIcon[j] + `</i>
              <p class="flex-grow-1">` + leftSideMenu[id][i].subMenuText[j] + `</p>
            </a>
          </li>
        `
      }
      temp += 
        `<h5 class="menuTitle">` + leftSideMenu[id][i].menuGroup +`</h5> ` + subMenu + `<br/>`;
    }
    leftSideMenuTemp.innerHTML = temp;
    // logo.innerHTML = `<img src=` + selectedClinical.logoImg + ` style="width: 60%">`;
    // description content
    var appDescription = document.getElementById("appDescription");
    appDescription.innerHTML = `<abbr>&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;` + application[id].description + `</abbr>`;
    // Registry Name
    var appName = document.getElementById("appName");
    appName.innerHTML = application[id].name;
    // Registry Content
    var appContent = document.getElementById("appContent");
    appContent.innerHTML = application[id].content;
    // Registry Title
    var appTextTitle = document.getElementById("appTextTitle");
    appTextTitle.innerHTML = `<br/><br/>` + application[id].description;
    // first text section
    var appText1 = document.getElementById("appText1");
    appText1.innerHTML = application[id].text1;
    // second text section
    var appText2 = document.getElementById("appText2");
    appText2.innerHTML = application[id].text2;
    // first section image
    var imgHeight  = $('#appImg1').width() * 0.6;
    console.log(application[id].img1);
    var appImg1 = document.getElementById("appImg1");
    appImg1.innerHTML = ` <br/> <br/><img id="mainImg1" src=` + application[id].img1 + ` style="width: 100%; height: 10vw; cursor: pointer" onclick="registryMainImgSelect(1)">`;
    $("#mainImg1").css({'height': imgHeight + 'px'});
    // second section image
    var imgHeight  = $('#appImg2').width() * 0.6;
    var appImg2 = document.getElementById("appImg2");
    appImg2.innerHTML = ` <br/><img id="mainImg2" src=` + application[id].img2 + ` style="width: 100%; cursor: pointer" onclick="registryMainImgSelect(2)">`;
    $("#mainImg2").css({'height': imgHeight + 'px'});
    // setting box images
    var temp = '';
    for ( var i = 0; i < application[id].mainImg.length; i++ ) {
        temp += `<li><a class="img-holder switch-trigger" href="javascript:void(0)" id="` + i +  `"><img src=` + application[id].mainImg[i] + ` alt=""><i class="fa fa-times del switch-trigger"></i></a></li>`
    }

    var uploadButton = `<li class="header-title" style="margin-bottom: 10px"><a href="/" class="btn myBtn btn-round" style="font-size: 14px;text-align:center; display:block;"><i class="fa fa-upload"></i> &nbsp; UPLOAD<input type="file" name="file" id="fileInput"/></a></li>`
    // settingBox template
    var settingBox = document.getElementById("settingBox");
    settingBox.innerHTML = `
        <div class="dropdown show-dropdown">
        <a href="#" data-toggle="dropdown">
            <i class="fa fa-cog fa-2x"> </i>
        </a>
        <ul class="dropdown-menu">
            <li class="header-title"> Sidebar Filters <abbr class="switch-trigger" style="position:fixed; top: 10px; right: 15px; cursor:pointer;" onclick="toggleDesigner()"><i class="material-icons" style="font-size:24px; color: #f44336; border: 1px solid #f44336">category</i></abbr></li>
            <li class="adjustments-line">
            <a href="javascript:void(0)" class="switch-trigger active-color">
                <div class="badge-colors ml-auto mr-auto">
                <span class="badge filter badge-purple active" data-color="purple"></span>
                <span class="badge filter badge-azure" data-color="azure"></span>
                <span class="badge filter badge-green" data-color="green"></span>
                <span class="badge filter badge-warning" data-color="orange"></span>
                <span class="badge filter badge-danger" data-color="danger"></span>
                </div>
                <div class="clearfix"></div>
            </a>
            </li>
            <li class="header-title">Images</li> ` + temp + `<li><a class="img-holder switch-trigger background" id="output" href="javascript:void(0)"></a></li>` + uploadButton + `<li class="header-title"> </li></ul></div>`;
    callSettingBox();
    callLeftSideMenu();
}
// End Content


// DropDown Registry Select - when applicationSelect box change, it calls this function
function applicationChange() {
    var id = $("#applicationSelect").val();
    RegistryTemplate(id);
}
// End DropDown Registry Select

// image select change - id is mainImage ID
function registryMainImgSelect(id) {
    selectedRegistryMainImgId = id;
    var imgHeight  = $('#appImg1').width() * 0.6;
    if (id == 1) {
        $mainImg1 = $('#mainImg1');
        $mainImg2 = $('#mainImg2');
        $mainImg1.css("border","4px solid #00bcd4");
        $mainImg1.css("border-radius","8px");
        $mainImg1.css({'height': imgHeight + 'px'});
        $mainImg2.css("border","0px solid #00bcd4");
        $mainImg2.css({'height': imgHeight + 'px'});
    } else if (id == 2) {
        $mainImg1 = $('#mainImg1');
        $mainImg2 = $('#mainImg2');
        $mainImg1.css("border","0px solid #00bcd4");
        $mainImg2.css("border","4px solid #00bcd4");
        $mainImg2.css("border-radius","8px");
        $mainImg1.css({'height': imgHeight + 'px'});
        $mainImg2.css({'height': imgHeight + 'px'});
    }
}

// selected mainImage change - imgUrl is the URL of image that is you are going to display
function changeMainImg(imgUrl) {
    var id = $("#applicationSelect").val();
    if (selectedRegistryMainImgId == 1) {
      saveRegistryChangedMainImg(id, 1, imgUrl);  
      application[id].img1 = imgUrl;
      var appImg1 = document.getElementById("appImg1");
      appImg1.innerHTML = ` <br/> <br/><img id="mainImg1" src=` + imgUrl + ` style="width: 100%; cursor: pointer" onclick="registryMainImgSelect(1)">`;
      registryMainImgSelect(1);
    } else if (selectedRegistryMainImgId == 2) {
      saveRegistryChangedMainImg(id, 2, imgUrl);  
      application[id].img2 = imgUrl;
      var appImg2 = document.getElementById("appImg2");
      appImg2.innerHTML = ` <br/> <br/><img id="mainImg2" src=` + imgUrl + ` style="width: 100%; cursor: pointer" onclick="registryMainImgSelect(2)">`;
      registryMainImgSelect(2);
    }
}

// Registry change Main Image
function changeRegistryImg(registry) {
  $.ajax({
    url: 'http://localhost:4300/registry/uploadImage',
    type: 'post',
    data: {
      id: registry.id,
      mainImg: registry.mainImg,
    },
    success: function(data) {
      //called when successful
      console.log(data);
    },
    error: function(e) {
      //called when there is an error
      console.log(e.message);
    }
  });
}

function registryImageUpload() {
    var fileInput = document.getElementById('fileInput');
    var output = document.getElementById('output');
    //var buff = document.getElementById('buff');
            
    fileInput.addEventListener('change', function(e) 
    {
        var file = fileInput.files[0];
        var imageType = /image.*/;
        if (file.type.match(imageType)) 
        {
            var reader = new FileReader();
            reader.onload = function(e) 
            {
              output.innerHTML = "";
              var img = new Image();
              img.src = reader.result;
              application[selectedRegistryId].mainImg.push(reader.result);
              RegistryTemplate(selectedRegistryId);
              // save upload image on MySQL
              changeRegistryImg(application[selectedRegistryId]);
            }
            reader.readAsDataURL(file);   
            window.event.cancelBubble = true;    
        }
    else 
        {
          alert("File not supported!")
        }
    });
}
function logout() {
  location.href="./index.html";
}
function callLeftSideMenu() {
  $('.left-nav-link').click(function() {
    $(this).parent('li').siblings().removeClass('active');
    $(this).parent('li').addClass('active');
    var i = $(this).parent('li')[0].id;
    var j = $(this)[0].id;
    leftSideMenu_group = i;
    leftSideMenu_item = j;
    var registryFormId = document.getElementById("registryFormId");
    registryFormId.innerHTML = `ID: ` + leftSideMenu[selectedRegistryId][i].pageGroupID[j];
    var registryFormName = document.getElementById("registryFormName");
    registryFormName.innerHTML = `Registry Name: ` + application[selectedRegistryId].title;
    var registryFormMenuItem = document.getElementById("registryFormMenuItem");
    registryFormMenuItem.innerHTML = `Menu Item: ` + leftSideMenu[selectedRegistryId][i].subMenuText[j];
    $("#formContent").load(leftSideMenu[selectedRegistryId][i].submenulink[j]);
    //if (i == 0 && j == 0) {
    //  RegistryTemplate(selectedRegistryId);
    //} else {
      $("#formDiv").css("display","none");
      $("#registryDiv").css("display","block");
    //}
  })
}
/* -------------------------------------------------   */
/* --------------------End Registry Section -----------   */
/* -------------------------------------------------   */

// settingBox events
function callSettingBox() {
    $sidebar = $('.sidebar');
    $sidebar_img_container = $sidebar.find('.sidebar-background');
    $full_page = $('.full-page');
    $sidebar_responsive = $('body > .navbar-collapse');
    window_width = $(window).width();

    if ($('body').hasClass('homeScreenBody')) {
      $('.fixed-plugin a').click(function(event) {
      // if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
          if ($(this).hasClass('switch-trigger')) {
              if (event.stopPropagation) {
                  event.stopPropagation();
              } else if (window.event) {
                  window.event.cancelBubble = true;
              }
          }
      });

      $('.fixed-plugin .active-color span').click(function() {
          $full_page_background = $('.full-page-background');
          $(this).siblings().removeClass('active');
          $(this).addClass('active');
      });


      $('.fixed-plugin .backgroundImg').click(function() {
          $(this).parent('li').siblings().removeClass('active');
          $(this).parent('li').addClass('active');
          $("#page-header").css("background-image", "url(" + clinicals[selectAppId].mainImg[$(this)[0].id] + ")");
          saveHomeScreenBackground($(this)[0].id);
      });
      $('.fixed-plugin .del').click(function() {
          if ($(this).hasClass('switch-trigger')) {
              if (event.stopPropagation) {
                  event.stopPropagation();
              } else if (window.event) {
                  window.event.cancelBubble = true;
              }
          }
          var id = $(this).parent()[0].id;
          clinicals[selectAppId].mainImg.splice(id, 1);

          // delete image on MySQL
          changeHomeScreenImg(clinicals[selectAppId]);
          $(this).parent().parent().remove();
      });
      $('.fixed-plugin #fileInput').click(function() {
        if ($(this).hasClass('switch-trigger')) {
            if (event.stopPropagation) {
                event.stopPropagation();
            } else if (window.event) {
                window.event.cancelBubble = true;
            }
        }
        homeScreenImageUpload();
      });
    }
    else if ($('body').hasClass('registryBody')) {
        $('.fixed-plugin a').click(function(event) {
        // if we click on switch, stop propagation of the event, so the dropdown will not be hide, otherwise we set the  section active
        if ($(this).hasClass('switch-trigger')) {
            if (event.stopPropagation) {
            event.stopPropagation();
            } else if (window.event) {
            window.event.cancelBubble = true;
            }
        }
        });

        $('.fixed-plugin .active-color span').click(function() {
            $full_page_background = $('.full-page-background');

            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            var new_color = $(this).data('color');

            if ($sidebar.length != 0) {
                $sidebar.attr('data-color', new_color);
            }

            if ($full_page.length != 0) {
                $full_page.attr('filter-color', new_color);
            }

            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
            });

            $('.fixed-plugin .background-color .badge').click(function() {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');

            var new_color = $(this).data('background-color');

            if ($sidebar.length != 0) {
                $sidebar.attr('data-background-color', new_color);
            }
        });

        $('.fixed-plugin .img-holder').click(function() {
            $full_page_background = $('.full-page-background');

            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');


            if ($('.switch-sidebar-image input:checked').length == 0) {
                var new_image = $('.fixed-plugin li.active .img-holder').find("img").attr('src');
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
                var backImg = document.getElementById("backImg");
                backImg.innerHTML = `<img src="` + new_image +  `" class="backImg">`;
                changeMainImg(new_image);
            }

            if ($sidebar_responsive.length != 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });


        $('.fixed-plugin .del').click(function() {
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                } else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
            var id = $(this).parent()[0].id;
            application[selectedRegistryId].mainImg.splice(id, 1);

            // delete image on MySQL
            changeRegistryImg(application[selectedRegistryId]);
            $(this).parent().parent().remove();
        });
        $('.fixed-plugin #fileInput').click(function() {
          if ($(this).hasClass('switch-trigger')) {
              if (event.stopPropagation) {
                  event.stopPropagation();
              } else if (window.event) {
                  window.event.cancelBubble = true;
              }
          }
          registryImageUpload();
        });
    }
}


$(document).ready(function() {
    //get clinicals from database

    if ($('body').hasClass('homeScreenBody')) {
      $("#home_content").css("opacity",0);
      getClinicals();
    }
    // get registry from database
    else if ($('body').hasClass('registryBody')) {
      $("#registery_content").css("opacity",0);
      getSelectedClinicalInfo();
      getGrid();
      getRegistries();
    }
});