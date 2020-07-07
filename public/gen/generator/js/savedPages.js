/** savedPages.js **/

var _pages = [
    new Page(
        'left_right', 
        `
        <div class="row h-100 w-100">

            <div class="left col-6 "></div>

            <div class="right col-6"></div>

        </div>
        `
    ),
    new Page(
        'top_bottom', 
        `
        <div class="d-flex flex-column h-100 w-100">
    
            <div class="top flex-grow-1"></div>

            <div class="bottom flex-grow-1"></div>

        </div>
        `
    ),
    new Page(
        'preview', 
        `
            
            <div class=" h-100 border">
                <h1>HEADER</h1>
                <div class="row m-0 h-100">
                    <div class="left col-6 border">
                        <h5> col-6</h5>
                    </div>

                    <div class="right col-6 border">
                        <h5>col-6</h5>
                    </div>
                </div>
            </div>
        `
    ),
]


var myclinicals_form = new Page("myclinicals_form", 
    `
    
    
  <style>
  .btn-mat{
    font-size:100%;
  }
  
  .btn-mat.sm{
      font-size:75%;
  }

.col-form-label{
    border-bottom:1px dotted #dee2e6;
    color:#222;
}

.myclinicals-section{
    background:#f8f9fa;
    border: 1px solid #dee2e6;
    padding:5px;
    margin-bottom:5px;
    color:#222;
}

.tab-content{
    background:#fff;
    padding:5px;
    border:1px solid #dee2e6;
    border-top:0px;
    color:#222;
}

.myclinicals-thead{
    background:#f8f9fa;
    background-color:#f8f9fa;
    color:#222;
    padding:5px;
}

.myclinicals-columns-table tbody {
}

.myclinicals-columns-table td {
    align-items:center;
    justify-content:left;
    text-align:left;
    border-bottom:1px dotted #dee2e6;
    padding-left:1em;
}


</style>

<div class="p-0 m-0 h-100 w-100 d-flex flex-column overflow-hidden" style="max-height:100vh;">




<!--                    Registry Header                              -->
<div *ngIf="header" [style.background]="header.BACKGROUND_COLOR" >
    <div class="container-fluid d-flex flex-column text-center ">
      <h5 [style.color]="header.TITLE_COLOR">
          {{header ? header.TITLE : ""}}
      </h5>
      <p [style.color]="header.DETAIL_COLOR">
          {{header ? header.DETAIL : ""}}
      </p>
    </div>
</div> 
<!--                End of  Registry Header                         -->
<!-- Icons Grid -->
<div class="text-center h-100 position-relative">
  

<div class="page-wrapper chiller-theme toggled">
  <style>

@keyframes swing {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(10deg);
  }
  30% {
    transform: rotate(0deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  60% {
    transform: rotate(5deg);
  }
  70% {
    transform: rotate(0deg);
  }
  80% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes sonar {
  0% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
body {
  font-size: 0.9rem;
}
.page-wrapper .sidebar-wrapper,
.sidebar-wrapper .sidebar-brand > a,
.sidebar-wrapper .sidebar-dropdown > a:after,
.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before,
.sidebar-wrapper ul li a i,
.page-wrapper .page-content,
.sidebar-wrapper .sidebar-search input.search-menu,
.sidebar-wrapper .sidebar-search .input-group-text,
.sidebar-wrapper .sidebar-menu ul li a,
#show-sidebar,
#close-sidebar {
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

/*----------------page-wrapper----------------*/


.page-wrapper .theme {
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 4px;
  margin: 2px;
}

/*----------------toggeled sidebar----------------*/

.page-wrapper.toggled .sidebar-wrapper {
  left: 0px;
}

@media screen and (min-width: 768px) {
  .page-wrapper.toggled .page-content {
    padding-left: 300px;
  }
}
/*----------------show sidebar button----------------*/
#show-sidebar {
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 0 4px 4px 0px;
  width: 35px;
  transition-delay: 0.1s;
  z-index:10000000000000;
}
.page-wrapper.toggled #show-sidebar {
  left: -40px;
}
/*----------------sidebar-wrapper----------------*/

.sidebar-wrapper {
  width: 290px;
  height: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  left: -300px;
  z-index: 999;
}

.sidebar-wrapper ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar-wrapper a {
  text-decoration: none;
}

/*----------------sidebar-content----------------*/

.sidebar-content {
  max-height: calc(100% - 30px);
  height: calc(100% - 30px);
  overflow-y: auto;
  position: relative;
}

.sidebar-content.desktop {
  overflow-y: hidden;
}

/*--------------------sidebar-brand----------------------*/

.sidebar-wrapper .sidebar-brand {
  padding: 10px 20px;
  display: flex;
  align-items: center;
}

.sidebar-wrapper .sidebar-brand > a {
  text-transform: uppercase;
  font-weight: bold;
  flex-grow: 1;
}

.sidebar-wrapper .sidebar-brand #close-sidebar {
  cursor: pointer;
  font-size: 20px;
}
/*--------------------sidebar-header----------------------*/

.sidebar-wrapper .sidebar-header {
  padding: 20px;
  overflow: hidden;
}

.sidebar-wrapper .sidebar-header .user-pic {
  float: left;
  width: 60px;
  padding: 2px;
  border-radius: 12px;
  margin-right: 15px;
  overflow: hidden;
}

.sidebar-wrapper .sidebar-header .user-pic img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}

.sidebar-wrapper .sidebar-header .user-info {
  float: left;
}

.sidebar-wrapper .sidebar-header .user-info > span {
  display: block;
}

.sidebar-wrapper .sidebar-header .user-info .user-role {
  font-size: 12px;
}

.sidebar-wrapper .sidebar-header .user-info .user-status {
  font-size: 11px;
  margin-top: 4px;
}

.sidebar-wrapper .sidebar-header .user-info .user-status i {
  font-size: 8px;
  margin-right: 4px;
  color: #5cb85c;
}

/*-----------------------sidebar-search------------------------*/

.sidebar-wrapper .sidebar-search > div {
  padding: 10px 20px;
}

/*----------------------sidebar-menu-------------------------*/

.sidebar-wrapper .sidebar-menu {
  padding-bottom: 10px;
}

.sidebar-wrapper .sidebar-menu .header-menu span {
  font-weight: bold;
  font-size: 14px;
  padding: 15px 20px 5px 20px;
  display: inline-block;
}

.sidebar-wrapper .sidebar-menu ul li a {
  display: inline-block;
  width: 100%;
  text-decoration: none;
  position: relative;
  padding: 8px 30px 8px 20px;
}

.sidebar-wrapper .sidebar-menu ul li a i {
  margin-right: 10px;
  font-size: 12px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 4px;
}

.sidebar-wrapper .sidebar-menu ul li a:hover > i::before {
  display: inline-block;
  animation: swing ease-in-out 0.5s 1 alternate;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown > a:after {
  font-weight: 900;
  font-style: normal;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: 0 0;
  position: absolute;
  right: 15px;
  top: 14px;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu ul {
  padding: 5px 0;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li {
  padding-left: 25px;
  font-size: 13px;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a:before {
  content: "\f111";
  font-family: "Font Awesome 5 Free";
  font-weight: 400;
  font-style: normal;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 10px;
  font-size: 8px;
}

.sidebar-wrapper .sidebar-menu ul li a span.label,
.sidebar-wrapper .sidebar-menu ul li a span.badge {
  float: right;
  margin-top: 8px;
  margin-left: 5px;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .badge,
.sidebar-wrapper .sidebar-menu .sidebar-dropdown .sidebar-submenu li a .label {
  float: right;
  margin-top: 0px;
}

.sidebar-wrapper .sidebar-menu .sidebar-submenu {
  display: none;
}

.sidebar-wrapper .sidebar-menu .sidebar-dropdown.active > a:after {
  transform: rotate(90deg);
  right: 17px;
}

/*--------------------------side-footer------------------------------*/

.sidebar-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  display: flex;
}

.sidebar-footer > a {
  flex-grow: 1;
  text-align: center;
  height: 30px;
  line-height: 30px;
  position: relative;
}

.sidebar-footer > a .notification {
  position: absolute;
  top: 0;
}

.badge-sonar {
  display: inline-block;
  background: #980303;
  border-radius: 50%;
  height: 8px;
  width: 8px;
  position: absolute;
  top: 0;
}

.badge-sonar:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  border: 2px solid #980303;
  opacity: 0;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  animation: sonar 1.5s infinite;
}

/*--------------------------page-content-----------------------------*/

.page-wrapper .page-content {
  display: inline-block;
  width: 100%;
}

.page-wrapper .page-content > div {
}

.page-wrapper .page-content {
  overflow-x: hidden;
}

/*------scroll bar---------------------*/

::-webkit-scrollbar {
  width: 5px;
  height: 7px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #525965;
  border: 0px none #ffffff;
  border-radius: 0px;
}
::-webkit-scrollbar-thumb:hover {
  background: #525965;
}
::-webkit-scrollbar-thumb:active {
  background: #525965;
}
::-webkit-scrollbar-track {
  background: transparent;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: transparent;
}
::-webkit-scrollbar-track:active {
  background: transparent;
}
::-webkit-scrollbar-corner {
  background: transparent;
}


/*-----------------------------chiller-theme-------------------------------------------------*/

.chiller-theme .sidebar-wrapper {
    background: #f8f9fa;
}

.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {
    border-color: transparent;
    box-shadow: none;
}

.chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-role,
.chiller-theme .sidebar-wrapper .sidebar-header .user-info .user-status,
.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text,
.chiller-theme .sidebar-wrapper .sidebar-brand>a,
.chiller-theme .sidebar-wrapper .sidebar-menu ul li a,
.chiller-theme .sidebar-footer>a {
    color: #5f6368;
}

.chiller-theme .sidebar-wrapper .sidebar-menu ul li:hover>a,
.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active>a,
.chiller-theme .sidebar-wrapper .sidebar-header .user-info,
.chiller-theme .sidebar-wrapper .sidebar-brand>a:hover,
.chiller-theme .sidebar-footer>a:hover i {
    color: #222;
}

.page-wrapper.chiller-theme.toggled #close-sidebar {
    color: #bdbdbd;
}

.page-wrapper.chiller-theme.toggled #close-sidebar:hover {
    color: #ccc;
}

.chiller-theme .sidebar-wrapper ul li:hover a i,
.chiller-theme .sidebar-wrapper .sidebar-dropdown .sidebar-submenu li a:hover:before,
.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu:focus+span,
.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown.active a i {
    color: #222;
    text-shadow:0px 0px 10px rgba(22, 199, 255, 0.5);
}

.chiller-theme .sidebar-wrapper .sidebar-menu ul li a i,
.chiller-theme .sidebar-wrapper .sidebar-menu .sidebar-dropdown div,
.chiller-theme .sidebar-wrapper .sidebar-search input.search-menu,
.chiller-theme .sidebar-wrapper .sidebar-search .input-group-text {
    background: #f2f2f2;
}

.chiller-theme .sidebar-wrapper .sidebar-menu .header-menu span {
    color: #222;
}

.chiller-theme .sidebar-footer {
    background: #dfe1e5;
    box-shadow: 0px -1px 5px #282c33;
    border-top: 1px solid #dee2e6;
}

.chiller-theme .sidebar-footer>a:first-child {
    border-left: none;
}

.chiller-theme .sidebar-footer>a:last-child {
    border-right: none;
}

li {
    cursor:pointer;
}

#close-sidebar{
    color:#222 !important;
}

.sidebar-wrapper{
    background:#f8f9fa;
}
</style>


<a id="show-sidebar" class="btn btn-light cursor-pointer">
<fa-icon icon="angle-double-right"></fa-icon>
</a>

<nav id="sidebar" class="sidebar-wrapper" style="border: 1px solid #dee2e6">
<div class="sidebar-content">

  <!-- sidebar-search  -->
  <div class="sidebar-menu">
      
    <ul *ngIf="groups">
        
        <div class="pr-3 pt-3 text-right">
          <fa-icon id="close-sidebar" icon="angle-double-left" class="cursor-pointer"></fa-icon>
        </div>

      <li class="sidebar-dropdown text-left" *ngFor="let group of groups">
        <a>
          <span>{{group.TITLE}}</span>
        </a>
        <div class="sidebar-submenu" >
          <ul>
            <li *ngFor="let item of group.PAGES" >
              <a>{{item.TITLE}}</a>
            </li>

          </ul>
        </div>
      </li>

      
    </ul>
  </div>
  <!-- sidebar-menu  -->
</div>
<!-- sidebar-content  -->
</nav>
<!-- sidebar-wrapper  -->
  <!-- sidebar-wrapper  -->
  
  
  <main class="page-content container-fluid pt-1">
      
    

<nav id="nav" class="navbar myclinicals-section navbar-light" *ngIf="header" >

        <div class="flex-grow-1 row align-items-center">
            
            <div class="col-12 col-sm-3 col-md-2 col-lg-2 text-center ">
                <div class=" dropright show ">
                  <button class="p-0 dropdown-toggle bg-transparent" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>Template Private  </span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item w-100 d-flex"><span>Study</span> <fa-icon class="ml-auto" icon="file"></fa-icon> </a>
    
                  </div>
                </div> 
            </div>
            
            <div class="col-4 col-sm-3 col-md-1 col-lg-1 text-center justify-content-center">
                <span class="text-nowrap"><fa-icon icon="file"></fa-icon> Form </span>
            </div>
            
            <input class="col-4 col-sm-3 col-md-1 col-lg-1 " placeholder="filter"/>
            
            <input class="col-4 col-sm-3 col-md-1 col-lg-1 " placeholder="images"/>
            
            <div class="col-12 col-sm-3 col-md-2 col-lg-2 text-center">
               <div class="dropdown show">
                  <button class=" dropdown-toggle bg-transparent" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>All Records  </span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item w-100 d-flex"><span>Patient 1</span> <fa-icon class="ml-auto" icon="file"></fa-icon> </a>
                  </div>
                </div> 
            </div>
            
            <div class="col-6 col-sm-6 col-md-3 col-lg-3 d-flex justify-content-center text-nowrap">
                
                <div class="p-1">
                    Record:
                </div>
                
                <div class="p-1">
                    <button class="btn-mat transparent flat "><fa-icon icon="arrow-circle-left"></fa-icon></button>
                </div>
                
                <div class="p-1">
                    1 of 1 
                </div>
               
                
                <div class="p-1">
                    <button class="btn-mat transparent flat "><fa-icon icon="arrow-circle-right"></fa-icon></button>
                </div>
            </div>
            
            <div class="col-6 col-sm-3 col-md-2 col-lg-2 d-flex justify-content-center text-nowrap" >
                <div class="p-1">
                    Page:
                </div>
                
                <div class="p-1">
                    <button class="btn-mat transparent flat "><fa-icon icon="arrow-circle-left"></fa-icon></button>
                </div>
                <div class="p-1">
                    <button class="btn-mat transparent flat "><fa-icon icon="arrow-circle-right"></fa-icon></button>
                </div>
            </div>
            
        </div>

</nav> 




    
    <div class="w-100">
        
        <div class="myclinicals-section text-left">
            Patient: RA  Hospital: CHU
        </div>
        
        <div class="myclinicals-section text-left d-flex">
            <div class="flex-grow-1">
               <div class="dropright show ">
                  <button class="p-0 btn-mat dropdown-mat transparent dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>Patients...  </span>
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item w-100 d-flex"><span>Patient 1</span> <fa-icon class="ml-auto" icon="file"></fa-icon> </a>
    
                  </div>
                </div> 
            </div>
          
            <div class="flex-grow-1 text-right">
                <button class="btn-mat gray flat sm "><span>SAVE PATIENT</span></button>
                <button class="btn-mat transparent flat sm ml-1 text-green"><span>REFRESH <fa-icon icon="sync"></fa-icon></span></button>
            </div>
        </div>
        
        <div class="myclinicals-section">
           <ul class=" nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="home" aria-selected="true">Profile</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#registration" role="tab" aria-controls="profile" aria-selected="false">Registration</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#pre-treatment" role="tab" aria-controls="contact" aria-selected="false">Pre-Treatment</a>
              </li>
            </ul>
            <div class="tab-content mb-3" id="myTabContent">
              <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab" >
                  tab 1
              </div>
              <div class="tab-pane fade" id="registration" role="tabpanel" aria-labelledby="registration-tab">
                  tab 2
              </div>
              <div class="tab-pane fade" id="pre-treatment" role="tabpanel" aria-labelledby="pre-treatment-tab">
                  tab 3
              </div>
            </div> 
        </div>

        <div class="table-responsive-sm">
            table 1

        </div>

        
        
    </div>

  </main>
  <!-- page-content" -->
</div>
<!-- page-wrapper -->
</div>
<!--                    Registry Footer                              -->
<footer class="footer bg-light">
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-6 h-100 text-center text-lg-left my-auto">
      <ul class="list-inline mb-2">
        <li class="list-inline-item">
          <a href="#">About</a>
        </li>
        <li class="list-inline-item">&sdot;</li>
        <li class="list-inline-item">
          <a href="#">Contact</a>
        </li>
        <li class="list-inline-item">&sdot;</li>
        <li class="list-inline-item">
          <a href="#">Terms of Use</a>
        </li>
        <li class="list-inline-item">&sdot;</li>
        <li class="list-inline-item">
          <a href="#">Privacy Policy</a>
        </li>
      </ul>
      <p class="text-muted small mb-4 mb-lg-0">&copy; MyClinicals 2020. All Rights Reserved.</p>
    </div>

  </div>
</div>
</footer>
<!--           End of Registry Footer                          --> 
</div>









    `
)


_pages.push(myclinicals_form)
    