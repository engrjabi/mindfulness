import React from "react";
import { useLoadThirdParty } from "./utils/useLoadThirdParty";

const thirdPartyLibs = [
  "assets/plugins/daterangepicker/daterangepicker.js",
  "assets/plugins/jqvmap/jquery-jvectormap-2.0.2.min.js",
  "assets/plugins/jqvmap/gdp-data.js",
  "assets/plugins/jqvmap/maps/jquery-jvectormap-world-mill-en.js",
  "assets/plugins/chartist/chartist.js",
  "assets/plugins/apex-chart/apexcharts.min.js",
  "assets/plugins/apex-chart/irregular-data-series.js",
  "assets/plugins/flot/jquery.flot.js",
  "assets/plugins/flot/jquery.flot.pie.js",
  "assets/plugins/flot/jquery.flot.resize.js",
  "assets/plugins/flot/sampledata.js",
  "assets/js/dashboard/sales-dashboard-init.js"
];

function App() {
  const [isReady] = useLoadThirdParty(thirdPartyLibs);

  if (isReady) {
    require("./utils/legacyCode");
  }

  return (
    <div>
      {/*================================*/}
      {/* Page Container Start */}
      {/*================================*/}
      <div className="page-container">
        {/*================================*/}
        {/* Page Sidebar Start */}
        {/*================================*/}
        <div className="page-sidebar">
          <div className="logo">
            <a className="logo-img" href="index.html">
              <img className="desktop-logo" src="assets/images/logo.png" alt="" />
              <img className="small-logo" src="assets/images/small-logo.png" alt="" />
            </a>
            <a id="sidebar-toggle-button-close">
              <i className="wd-20" data-feather="x" />{" "}
            </a>
          </div>
          {/*================================*/}
          {/* Sidebar Menu Start */}
          {/*================================*/}
          <div className="page-sidebar-inner">
            <div className="page-sidebar-menu">
              <ul className="accordion-menu">
                <li className="mg-l-20-force mg-t-25-force menu-navigation">Navigation</li>
                <li className="open active">
                  <a href="#">
                    <i data-feather="home" />
                    <span>Dashboard</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu" style={{ display: "block" }}>
                    {/* Active Page */}
                    <li className="active">
                      <a href="index.html">Sales</a>
                    </li>
                    <li>
                      <a href="index2.html">Analytics</a>
                    </li>
                    <li>
                      <a href="index3.html">Cryptocurrency</a>
                    </li>
                    <li>
                      <a href="index4.html">Helpdesk</a>
                    </li>
                    <li>
                      <a href="index5.html">Project</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="mail" />
                    <span>Mailbox</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="mailbox.html">Inbox</a>
                    </li>
                    <li>
                      <a href="mailbox-message.html">View Mail</a>
                    </li>
                    <li>
                      <a href="mailbox-compose.html">Compose Mail</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="feather" />
                    <span>Apps View</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="app-chatroom.html">Chat Room</a>
                    </li>
                    <li>
                      <a href="app-calendar.html">Calendar</a>
                    </li>
                    <li>
                      <a href="app-file-manager.html">File Manager</a>
                    </li>
                  </ul>
                </li>
                <li className="mg-l-20-force mg-t-25-force menu-elements">Elements</li>
                <li>
                  <a href="#">
                    <i data-feather="underline" />
                    <span>UI Elements</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="uie-accordion.html">Accordion</a>
                    </li>
                    <li>
                      <a href="uie-alert.html">Alerts</a>
                    </li>
                    <li>
                      <a href="uie-avatar.html">Avatar</a>
                    </li>
                    <li>
                      <a href="uie-badge.html">Badges</a>
                    </li>
                    <li>
                      <a href="uie-breadcrumbs.html">Breadcrumbs</a>
                    </li>
                    <li>
                      <a href="uie-buttons.html">Buttons</a>
                    </li>
                    <li>
                      <a href="uie-button-groups.html">Button Groups</a>
                    </li>
                    <li>
                      <a href="uie-cards.html">Cards</a>
                    </li>
                    <li>
                      <a href="uie-carousel.html">Carousel</a>
                    </li>
                    <li>
                      <a href="uie-collapse.html">Collapse</a>
                    </li>
                    <li>
                      <a href="uie-dropdown.html">Dropdown</a>
                    </li>
                    <li>
                      <a href="uie-images.html">Images</a>
                    </li>
                    <li>
                      <a href="uie-list-group.html">List Group</a>
                    </li>
                    <li>
                      <a href="uie-marker.html">Marker</a>
                    </li>
                    <li>
                      <a href="uie-modal.html">Modal</a>
                    </li>
                    <li>
                      <a href="uie-navs.html">Navs</a>
                    </li>
                    <li>
                      <a href="uie-navbar.html">Navbar</a>
                    </li>
                    <li>
                      <a href="uie-pagination.html">Pagination</a>
                    </li>
                    <li>
                      <a href="uie-placeholder.html">Placeholder</a>
                    </li>
                    <li>
                      <a href="uie-popovers.html">Popovers</a>
                    </li>
                    <li>
                      <a href="uie-progress.html">Progress</a>
                    </li>
                    <li>
                      <a href="uie-scrollbar.html">Scrollbar</a>
                    </li>
                    <li>
                      <a href="uie-scrollspy.html">Scrollspy</a>
                    </li>
                    <li>
                      <a href="uie-spinners.html">Spinners</a>
                    </li>
                    <li>
                      <a href="uie-tooltips.html">Tooltips</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="aperture" />
                    <span>UI Utilities</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="uiu-background.html">Background</a>
                    </li>
                    <li>
                      <a href="uiu-borders.html">Borders</a>
                    </li>
                    <li>
                      <a href="uiu-colors.html">Colors</a>
                    </li>
                    <li>
                      <a href="uiu-display.html">Display </a>
                    </li>
                    <li>
                      <a href="uiu-embeds.html">Embeds</a>
                    </li>
                    <li>
                      <a href="uiu-flex.html">Flex</a>
                    </li>
                    <li>
                      <a href="uiu-margin.html">Margin</a>
                    </li>
                    <li>
                      <a href="uiu-padding.html">Padding</a>
                    </li>
                    <li>
                      <a href="uiu-float.html">Float</a>
                    </li>
                    <li>
                      <a href="uiu-position.html">Position</a>
                    </li>
                    <li>
                      <a href="uiu-screenreaders.html">Screenreaders</a>
                    </li>
                    <li>
                      <a href="uiu-sizing.html">Sizing</a>
                    </li>
                    <li>
                      <a href="uiu-spacing.html">Spacing</a>
                    </li>
                    <li>
                      <a href="uiu-text.html">Text</a>
                    </li>
                    <li>
                      <a href="uiu-vertical-alignment.html">Vertical Alignment</a>
                    </li>
                    <li>
                      <a href="uiu-width.html">Width</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="grid" />
                    <span>Grid</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="grid-utilities-layout.html">Utilities for Layout</a>
                    </li>
                    <li>
                      <a href="grid-auto-layout-columns.html">Auto-layout Columns</a>
                    </li>
                    <li>
                      <a href="grid-responsive-classes.html">Responsive Classes</a>
                    </li>
                    <li>
                      <a href="grid-alignment.html">Alignment</a>
                    </li>
                    <li>
                      <a href="grid-reordering.html">Reordering</a>
                    </li>
                    <li>
                      <a href="grid-customizing-grid.html">Customizing Grid</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="gift" />
                    <span>Icons</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="icon-font-awesome.html">Font Awesome</a>
                    </li>
                    <li>
                      <a href="icon-feather.html">Feather Icons</a>
                    </li>
                    <li>
                      <a href="icon-mdi.html">Mdi icons</a>
                    </li>
                    <li>
                      <a href="icon-flag.html">Flag icons</a>
                    </li>
                    <li>
                      <a href="icon-simple-line.html">Simple line icons</a>
                    </li>
                    <li>
                      <a href="icon-themify.html">Themify icons</a>
                    </li>
                    <li>
                      <a href="icon-weather.html">Weather Icons</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="calendar" />
                    <span>Forms</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="form-element.html">Form Elements</a>
                    </li>
                    <li>
                      <a href="form-formatter.html">Form Formatter </a>
                    </li>
                    <li>
                      <a href="form-input-group.html">Input Group</a>
                    </li>
                    <li>
                      <a href="form-input-tag.html">Input Tags</a>
                    </li>
                    <li>
                      <a href="form-input-masks.html">Input Masks</a>
                    </li>
                    <li>
                      <a href="form-layout.html">Form Layouts</a>
                    </li>
                    <li>
                      <a href="form-validation.html">Form Validation</a>
                    </li>
                    <li>
                      <a href="form-wizard.html">Form Wizard</a>
                    </li>
                    <li>
                      <a href="form-range-slider.html">Range Slider</a>
                    </li>
                    <li>
                      <a href="form-date-pickers.html">Date Pickers</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="database" />
                    <span>Tables</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="table-static.html">Static</a>
                    </li>
                    <li>
                      <a href="table-responsive.html">Responsive</a>
                    </li>
                    <li>
                      <a href="table-datatable.html">Data Tables</a>
                    </li>
                    <li>
                      <a href="table-footable.html">Foo Tables</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="pie-chart" />
                    <span>Charts</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="chart-apex.html">Apex</a>
                    </li>
                    <li>
                      <a href="chart-google.html">Google</a>
                    </li>
                    <li>
                      <a href="chart-morris.html">Morris</a>
                    </li>
                    <li>
                      <a href="chart-chartjs.html">ChartJS</a>
                    </li>
                    <li>
                      <a href="chart-flot.html">Flot</a>
                    </li>
                    <li>
                      <a href="chart-chartlist.html">Chartlist</a>
                    </li>
                    <li>
                      <a href="chart-sparkline.html">Sparkline</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="map" />
                    <span>Maps</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="map-google.html">Google Maps</a>
                    </li>
                    <li>
                      <a href="map-vector.html">Vector Maps</a>
                    </li>
                  </ul>
                </li>
                <li className="mg-l-20-force mg-t-25-force menu-extras">Extras</li>
                <li>
                  <a href="#">
                    <i data-feather="cpu" />
                    <span>Authentication</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="aut-error404.html">404 Page</a>
                    </li>
                    <li>
                      <a href="aut-error500.html">500 Page</a>
                    </li>
                    <li>
                      <a href="aut-signin.html">Login</a>
                    </li>
                    <li>
                      <a href="aut-signup.html">Register</a>
                    </li>
                    <li>
                      <a href="aut-unlock.html">Lockscreen</a>
                    </li>
                    <li>
                      <a href="aut-password.html">password Reset</a>
                    </li>
                    <li>
                      <a href="aut-logign-register.html">Login + Register</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="git-pull-request" />
                    <span>Plugins</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="plg-bootbox.html">Bootbox</a>
                    </li>
                    <li>
                      <a href="plg-block-ui.html">BlockUI</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-data-table.html">Bootstrap dataTable</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-daterangepicker.html">Bootstrap Daterangepicker</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-dateTimePicker.html">Bootstrap DateTimePicker</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-dual-listbox.html">Bootstrap Dual Listbox</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-slider.html">Bootstrap Slider</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-markdown.html">Bootstrap Markdown</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-maxlength.html">Bootstrap Maxlength</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-multiselect.html">Bootstrap Multiselect</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-pwstrength.html">Bootstrap Pwstrength</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-select.html">Bootstrap Select</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-sortable.html">Bootstrap Sortable</a>
                    </li>
                    <li>
                      <a href="plg-bootstrap-tagsinput.html">Bootstrap Tagsinput</a>
                    </li>
                    <li>
                      <a href="plg-cropper.html">Cropper</a>
                    </li>
                    <li>
                      <a href="plg-clipboard.html">Clipboard</a>
                    </li>
                    <li>
                      <a href="plg-codeeditor.html">Code Editor</a>
                    </li>
                    <li>
                      <a href="plg-dropzone.html">Dropzone</a>
                    </li>
                    <li>
                      <a href="plg-dragula.html">Dragula</a>
                    </li>
                    <li>
                      <a href="plg-flow-js.html">Flow.js</a>
                    </li>
                    <li>
                      <a href="plg-fullcalendar.html">Fullcalendar</a>
                    </li>
                    <li>
                      <a href="plg-flatpickr.html">Flatpickr</a>
                    </li>
                    <li>
                      <a href="plg-growl.html">Growl</a>
                    </li>
                    <li>
                      <a href="plg-idle-timer.html">IdleTimer</a>
                    </li>
                    <li>
                      <a href="plg-knob.html">Knob</a>
                    </li>
                    <li>
                      <a href="plg-ladda.html">Ladda</a>
                    </li>
                    <li>
                      <a href="plg-masonry.html">Masonry</a>
                    </li>
                    <li>
                      <a href="plg-nestable.html">Nestable</a>
                    </li>
                    <li>
                      <a href="plg-numeral.html">Numeral</a>
                    </li>
                    <li>
                      <a href="plg-no-ui-slider.html">noUiSlider</a>
                    </li>
                    <li>
                      <a href="plg-photoswipe.html">Photoswipe</a>
                    </li>
                    <li>
                      <a href="plg-plyr.html">Plyr</a>
                    </li>
                    <li>
                      <a href="plg-sortable-js.html">Sortable.js</a>
                    </li>
                    <li>
                      <a href="plg-spinkit.html">Spinkit</a>
                    </li>
                    <li>
                      <a href="plg-swiper.html">Swiper</a>
                    </li>
                    <li>
                      <a href="plg-select2.html">Select2</a>
                    </li>
                    <li>
                      <a href="plg-sweet-alert2.html">SweetAlert2</a>
                    </li>
                    <li>
                      <a href="plg-SmartWizard.html">SmartWizard</a>
                    </li>
                    <li>
                      <a href="plg-typeahead.html">Typeahead</a>
                    </li>
                    <li>
                      <a href="plg-toastr.html">Toastr</a>
                    </li>
                    <li>
                      <a href="plg-jstree.html">Tree</a>
                    </li>
                    <li>
                      <a href="plg-vanilla-text-mask.html">Vanilla Text Mask</a>
                    </li>
                    <li>
                      <a href="plg-wysiwyg.html">WYSIWYG Editor</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="codepen" />
                    <span>Pages</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="pages-article.html">Articles</a>
                    </li>
                    <li>
                      <a href="pages-contact.html">Contacts</a>
                    </li>
                    <li>
                      <a href="pages-faq.html">FAQ's</a>
                    </li>
                    <li>
                      <a href="pages-forum.html">Forum</a>
                    </li>
                    <li>
                      <a href="pages-gallery.html">Gallery</a>
                    </li>
                    <li>
                      <a href="pages-invoice.html">Invoice</a>
                    </li>
                    <li>
                      <a href="pages-profile.html">Profile</a>
                    </li>
                    <li>
                      <a href="pages-product.html">Products</a>
                    </li>
                    <li>
                      <a href="pages-pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="pages-project.html">Projects</a>
                    </li>
                    <li>
                      <a href="pages-search.html">Search</a>
                    </li>
                    <li>
                      <a href="pages-ticket.html">Tickets</a>
                    </li>
                    <li>
                      <a href="pages-voting.html">Voting</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="codepen" />
                    <span>UI Kit</span>
                    <i className="accordion-icon fa fa-angle-left" />
                  </a>
                  <ul className="sub-menu">
                    <li>
                      <a href="uik-base.html" target="_blank">
                        Base
                      </a>
                    </li>
                    <li>
                      <a href="uik-company.html" target="_blank">
                        Company
                      </a>
                    </li>
                    <li>
                      <a href="uik-ecommerce.html" target="_blank">
                        E-Commerce
                      </a>
                    </li>
                    <li>
                      <a href="uik-magazine.html" target="_blank">
                        Magazine
                      </a>
                    </li>
                    <li>
                      <a href="uik-social.html" target="_blank">
                        Social
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="email-template.html">
                    <i data-feather="printer" />
                    <span>Mail Template</span>
                  </a>
                </li>
                <li className="mg-l-20-force mg-t-25-force menu-others">Others</li>
                <li>
                  <a href="../documentation/documentation.html">
                    <i data-feather="life-buoy" />
                    <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a href="../documentation/changelog.html">
                    <i data-feather="coffee" />
                    <span>Changelog</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/*/ Sidebar Menu End */}
          {/*================================*/}
          {/* Sidebar Footer Start */}
          {/*================================*/}
          <div className="sidebar-footer">
            <a className="pull-left" href="pages-profile.html" data-toggle="tooltip" data-placement="top" data-original-title="Profile">
              <i data-feather="user" className="wd-16" />
            </a>
            <a className="pull-left " href="mailbox.html" data-toggle="tooltip" data-placement="top" data-original-title="Mailbox">
              <i data-feather="mail" className="wd-16" />
            </a>
            <a className="pull-left" href="aut-unlock.html" data-toggle="tooltip" data-placement="top" data-original-title="Lockscreen">
              <i data-feather="lock" className="wd-16" />
            </a>
            <a className="pull-left" href="aut-signin.html" data-toggle="tooltip" data-placement="top" data-original-title="Sing Out">
              <i data-feather="log-out" className="wd-16" />
            </a>
          </div>
          {/*/ Sidebar Footer End */}
        </div>
        {/*/ Page Sidebar End */}
        {/*================================*/}
        {/* Page Content Start */}
        {/*================================*/}
        <div className="page-content">
          {/*================================*/}
          {/* Page Header Start */}
          {/*================================*/}
          <div className="page-header">
            <div className="search-form">
              <form action="#" method="GET">
                <div className="input-group">
                  <input className="form-control search-input typeahead" name="search" placeholder="Type something..." type="text" />
                  <span className="input-group-btn">
                    <span id="close-search">
                      <i data-feather="x" className="wd-16" />
                    </span>
                  </span>
                </div>
              </form>
            </div>
            <nav className="navbar navbar-default">
              {/*================================*/}
              {/* Brand and Logo Start */}
              {/*================================*/}
              <div className="navbar-header">
                <div className="navbar-brand">
                  <ul className="list-inline">
                    {/* Mobile Toggle and Logo */}
                    <li className="list-inline-item">
                      <a className="hidden-md hidden-lg" href="#" id="sidebar-toggle-button">
                        <i data-feather="menu" className="wd-20" />
                      </a>
                    </li>
                    {/* PC Toggle and Logo */}
                    <li className="list-inline-item">
                      <a className=" hidden-xs hidden-sm" href="#" id="collapsed-sidebar-toggle-button">
                        <i data-feather="menu" className="wd-20" />
                      </a>
                    </li>
                    <li className="list-inline-item mg-l-10">
                      <a href="#" id="search-button">
                        <i data-feather="search" className="wd-20" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/*/ Brand and Logo End */}
              {/*================================*/}
              {/* Header Right Start */}
              {/*================================*/}
              <div className="header-right pull-right">
                <ul className="list-inline justify-content-end">
                  {/*================================*/}
                  {/* Languages Dropdown Start */}
                  {/*================================*/}
                  <li className="list-inline-item dropdown hidden-xs">
                    <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="flag-icon flag-icon-us" />
                    </a>
                    <ul className="dropdown-menu languages-dropdown">
                      <li>
                        <a href="#" data-lang="en">
                          <i className="flag-icon flag-icon-us mr-2" />
                          <span>English-US</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" data-lang="es">
                          <i className="flag-icon flag-icon-es mr-2" />
                          <span>Spanish</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" data-lang="fr">
                          <i className="flag-icon flag-icon-fr mr-2" />
                          <span>French</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" data-lang="gr">
                          <i className="flag-icon flag-icon-de mr-2" />
                          <span>German</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" data-lang="ru">
                          <i className="flag-icon flag-icon-ru mr-2" />
                          <span>Russian</span>
                        </a>
                      </li>
                      <li>
                        <a href="#" data-lang="ru">
                          <i className="flag-icon flag-icon-gb mr-2" />
                          <span>English-UK</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/*/ Languages Dropdown End */}
                  {/*================================*/}
                  {/* Notifications Dropdown Start */}
                  {/*================================*/}
                  <li className="list-inline-item dropdown hidden-xs">
                    <a className=" notification-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i data-feather="bell" className="wd-20" />
                      <span className="notification-count wave in" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      {/* Top Notifications Area */}
                      <div className="top-notifications-area">
                        {/* Heading */}
                        <div className="notifications-heading">
                          <div className="heading-title">
                            <h6>Notifications</h6>
                          </div>
                          <span>5+ New Notifications</span>
                        </div>
                        <div className="notifications-box" id="notificationsBox">
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="wd-35 ht-35 mg-r-10 d-flex align-items-center justify-content-center rounded-circle card-icon-success">
                                <i data-feather="smile" className="wd-20" />
                              </div>
                            </div>
                            <div className="wd-100p">
                              <div className="d-flex justify-content-between">
                                <h3 className="tx-13 tx-semibold mb-0">Your order is placed</h3>
                                <span className="small tx-gray-500 ft-right">Mar 15, 12:32pm</span>
                              </div>
                              <div className="tx-gray-700">System reboot has been successfully completed</div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="wd-35 ht-35 mg-r-10 d-flex align-items-center justify-content-center rounded-circle card-icon-warning">
                                <i data-feather="bell" className="wd-20" />
                              </div>
                            </div>
                            <div className="wd-100p">
                              <div className="d-flex justify-content-between">
                                <h3 className="tx-13 tx-semibold mb-0">Document available</h3>
                                <span className="small tx-gray-500 ft-right">Mar 15, 12:32pm</span>
                              </div>
                              <div className="tx-gray-700">New user feedback received</div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="wd-35 ht-35 mg-r-10 d-flex align-items-center justify-content-center rounded-circle card-icon-success">
                                <i data-feather="check-circle" className="wd-20" />
                              </div>
                            </div>
                            <div className="wd-100p">
                              <div className="d-flex justify-content-between">
                                <h3 className="tx-13 tx-semibold mb-0">Payment failed!</h3>
                                <span className="small tx-gray-500 ft-right">Mar 15, 12:32pm</span>
                              </div>
                              <div className="tx-gray-700">New file has been uploaded</div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="wd-35 ht-35 mg-r-10 d-flex align-items-center justify-content-center rounded-circle card-icon-primary">
                                <i data-feather="info" className="wd-20" />
                              </div>
                            </div>
                            <div className="wd-100p">
                              <div className="d-flex justify-content-between">
                                <h3 className="tx-13 tx-semibold mb-0">Document available</h3>
                                <span className="small tx-gray-500 ft-right">Mar 15, 12:32pm</span>
                              </div>
                              <div className="tx-gray-700">New order has been received</div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="wd-35 ht-35 mg-r-10 d-flex align-items-center justify-content-center rounded-circle card-icon-primary">
                                <i data-feather="info" className="wd-20" />
                              </div>
                            </div>
                            <div className="wd-100p">
                              <div className="d-flex justify-content-between">
                                <h3 className="tx-13 tx-semibold mb-0">New order available</h3>
                                <span className="small tx-gray-500 ft-right">Mar 15, 12:32pm</span>
                              </div>
                              <div className="tx-gray-700">New order has been received</div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="wd-35 ht-35 mg-r-10 d-flex align-items-center justify-content-center rounded-circle card-icon-success">
                                <i data-feather="smile" className="wd-20" />
                              </div>
                            </div>
                            <div className="wd-100p">
                              <div className="d-flex justify-content-between">
                                <h3 className="tx-13 tx-semibold mb-0">Your order is placed</h3>
                                <span className="small tx-gray-500 ft-right">Mar 15, 12:32pm</span>
                              </div>
                              <div className="tx-gray-700">System reboot has been successfully completed</div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="wd-35 ht-35 mg-r-10 d-flex align-items-center justify-content-center rounded-circle card-icon-warning">
                                <i data-feather="bell" className="wd-20" />
                              </div>
                            </div>
                            <div className="wd-100p">
                              <div className="d-flex justify-content-between">
                                <h3 className="tx-13 tx-semibold mb-0">Document available</h3>
                                <span className="small tx-gray-500 ft-right">Mar 15, 12:32pm</span>
                              </div>
                              <div className="tx-gray-700">New user feedback received</div>
                            </div>
                          </a>
                        </div>
                        <div className="notifications-footer">
                          <a href="#">View all Notifications</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*/ Notifications Dropdown End */}
                  {/*================================*/}
                  {/* Messages Dropdown Start */}
                  {/*================================*/}
                  <li className="list-inline-item dropdown hidden-xs">
                    <a className=" message-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i data-feather="message-square" className="wd-20" />
                      <span className="messages-count wave in" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="top-message-area">
                        <div className="top-message-heading">
                          <div className="heading-title">
                            <h6>Messages</h6>
                          </div>
                          <span>5+ New Messages</span>
                        </div>
                        <div className="message-box" id="messageBox">
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="pd-r-10">
                                <span className="avatar avatar-online">
                                  <img src="assets/images/users-face/1.png" className="img-fluid" alt="" />
                                  <i />
                                </span>
                              </div>
                              <div>
                                <span className="tx-semibold">Mary Adams</span>
                                <span className="small tx-gray-500 ft-right">Mar 20, 22:21pm</span>
                                <div className="tx-gray-700">Congratulate! Socrates Itumayfor work anniversaries</div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="pd-r-10">
                                <span className="avatar avatar-online">
                                  <img src="assets/images/users-face/2.png" className="img-fluid" alt="" />
                                  <i />
                                </span>
                              </div>
                              <div>
                                <span className="tx-semibold">Richards Caleb</span>
                                <span className="small tx-gray-500 ft-right">Mar 2, 22:21pm</span>
                                <div className="tx-gray-700">Richards Caleb, just created a new blog post</div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="pd-r-10">
                                <span className="avatar avatar-busy">
                                  <img src="assets/images/users-face/3.png" className="img-fluid" alt="" />
                                  <i />
                                </span>
                              </div>
                              <div>
                                <span className="tx-semibold">Lane Richards</span>
                                <span className="small tx-gray-500 ft-right">Mar 12, 22:21pm</span>
                                <div className="tx-gray-700">Richards Caleb, just created a new blog post</div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="pd-r-10">
                                <span className="avatar avatar-busy">
                                  <img src="assets/images/users-face/4.png" className="img-fluid" alt="" />
                                  <i />
                                </span>
                              </div>
                              <div>
                                <span className="tx-semibold">Edward Lane</span>
                                <span className="small tx-gray-500 ft-right">Mar 15, 02:21pm</span>
                                <div className="tx-gray-700">Adrian Monino, added new comment on your photo</div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="pd-r-10">
                                <span className="avatar avatar-offline">
                                  <img src="assets/images/users-face/5.png" className="img-fluid" alt="" />
                                  <i />
                                </span>
                              </div>
                              <div>
                                <span className="tx-semibold">Lane Richards</span>
                                <span className="small tx-gray-500 ft-right">Mar 20, 08:28pm</span>
                                <div className="tx-gray-700">Edward Lane, added new comment on your photo</div>
                              </div>
                            </div>
                          </a>
                          <a className="dropdown-item list-group-item" href="#">
                            <div className="d-flex justify-content-between">
                              <div className="pd-r-10">
                                <span className="avatar avatar-offline">
                                  <img src="assets/images/users-face/6.png" className="img-fluid" alt="" />
                                  <i />
                                </span>
                              </div>
                              <div>
                                <span className="tx-semibold">Edward Lane</span>
                                <span className="small tx-gray-500 ft-right">Mar 21, 22:21pm</span>
                                <div className="tx-gray-700">Edward Lane, just created a new blog post</div>
                              </div>
                            </div>
                          </a>
                        </div>
                        <div className="top-message-footer">
                          <a href="#">View all Messages</a>
                        </div>
                      </div>
                    </div>
                  </li>
                  {/*/ Messages Dropdown End */}
                  {/*================================*/}
                  {/* Profile Dropdown Start */}
                  {/*================================*/}
                  <li className="list-inline-item dropdown">
                    <a href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <img src="assets/images/users-face/1.png" className="img-fluid wd-30 ht-30 rounded-circle" alt="" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right dropdown-profile">
                      <div className="user-profile-area">
                        <div className="user-profile-heading">
                          <div className="profile-thumbnail">
                            <img src="assets/images/users-face/1.png" className="img-fluid wd-35 ht-35 rounded-circle" alt="" />
                          </div>
                          <div className="profile-text">
                            <h6>Ruhul Hasan</h6>
                            <span>email@example.com</span>
                          </div>
                        </div>
                        <a href="#" className="dropdown-item">
                          <i data-feather="user" className="wd-16 mr-2" /> My profile
                        </a>
                        <a href="#" className="dropdown-item">
                          <i data-feather="message-square" className="wd-16 mr-2" /> Messages
                        </a>
                        <a href="#" className="dropdown-item">
                          <i data-feather="settings" className="wd-16 mr-2" /> Settings
                        </a>
                        <a href="#" className="dropdown-item">
                          <i data-feather="activity" className="wd-16 mr-2" /> My Activity
                        </a>
                        <a href="#" className="dropdown-item">
                          <i data-feather="download" className="wd-16 mr-2" /> My Download
                        </a>
                        <a href="#" className="dropdown-item">
                          <i data-feather="life-buoy" className="wd-16 mr-2" /> Support
                        </a>
                        <a href="aut-logign-register.html" className="dropdown-item">
                          <i data-feather="power" className="wd-16 mr-2" /> Sign-out
                        </a>
                      </div>
                    </div>
                  </li>
                  {/* Profile Dropdown End */}
                </ul>
              </div>
              {/*/ Header Right End */}
            </nav>
          </div>
          {/*/ Page Header End */}
          {/*================================*/}
          {/* Page Inner Start */}
          {/*================================*/}
          <div className="page-inner">
            {/*================================*/}
            {/* Breadcrumb Start */}
            {/*================================*/}
            <div className="pageheader pd-t-25 pd-b-35">
              <div className="d-flex justify-content-between">
                <div className="clearfix">
                  <div className="pd-t-5 pd-b-5">
                    <h1 className="pd-0 mg-0 tx-20 tx-dark">Sales Monitoring</h1>
                  </div>
                  <div className="breadcrumb pd-0 mg-0">
                    <a className="breadcrumb-item" href="index.html">
                      <i className="icon ion-ios-home-outline" /> Home
                    </a>
                    <a className="breadcrumb-item" href="#">
                      Dashboard
                    </a>
                    <span className="breadcrumb-item active">Sales Monitoring</span>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <button id="dashboardDate" className="btn btn-default dropdown-toggle mr-2 d-none d-md-block pd-y-8-force" />
                  <button type="button" className="btn btn-default mr-2 d-none d-none d-lg-block pd-t-6-force pd-b-5-force">
                    <i data-feather="log-in" className="wd-16 mr-2" />
                    Import
                  </button>
                  <button type="button" className="btn btn-default mr-2 mb-2 mb-md-0 d-none d-lg-block pd-t-6-force pd-b-5-force">
                    <i data-feather="printer" className="wd-16 mr-2" />
                    Print
                  </button>
                  <button type="button" className="btn btn-default mb-2 mb-md-0 d-none d-lg-block pd-t-6-force pd-b-5-force">
                    <i data-feather="download" className="wd-16 mr-2" />
                    Download Report
                  </button>
                </div>
              </div>
            </div>
            {/*/ Breadcrumb End */}
            {/*================================*/}
            {/*  Start */}
            {/*================================*/}
            <div className="row clearfix">
              {/*================================*/}
              {/* Heard Card Start */}
              {/*================================*/}
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card mg-b-30">
                  <div className="card-body">
                    <h5 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Today Sales</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">$1,181</h2>
                    </div>
                    <div className="d-flex align-items-center tx-gray-500 tx-11">
                      <span className="tx-success mr-2 d-flex align-items-center">
                        <i className="ti-arrow-up tx-8 mr-1 tx-8" />
                        +1,551
                      </span>
                      since last day
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card mg-b-30">
                  <div className="card-body">
                    <h5 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Today Earning</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">$11,241</h2>
                    </div>
                    <div className="d-flex align-items-center tx-gray-500 tx-11">
                      <span className="tx-danger mr-2 d-flex align-items-center">
                        <i className="ti-arrow-down tx-8 mr-1 tx-8" />
                        -1,003
                      </span>
                      since last day
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card mg-b-30">
                  <div className="card-body">
                    <h5 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Average Order Value</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">$3,241</h2>
                    </div>
                    <div className="d-flex align-items-center tx-gray-500 tx-11">
                      <span className="tx-success mr-2 d-flex align-items-center">
                        <i className="ti-arrow-up tx-8 mr-1 tx-8" />
                        +2,012
                      </span>
                      since last day
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 col-xl-3">
                <div className="card mg-b-30">
                  <div className="card-body">
                    <h5 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Total Earning</h5>
                    <div className="d-flex justify-content-between align-items-center">
                      <h2 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">$74,254</h2>
                    </div>
                    <div className="d-flex align-items-center tx-gray-500 tx-11">
                      <span className="tx-danger mr-2 d-flex align-items-center">
                        <i className="ti-arrow-down tx-8 mr-1 tx-8" />
                        -1,120
                      </span>
                      since last month
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Heard Card End */}
            </div>
            <div className="row clearfix">
              {/*================================*/}
              {/* Annual Report and Bar Chart Start */}
              {/*================================*/}
              <div className="col-xl-9">
                <div className="card mg-b-30">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-xl-3">
                        <div className="row mg-b-20">
                          <div className="col-sm-12 col-md-6 col-xl-12 mg-t-0">
                            <div className="d-flex justify-content-between">
                              <h6 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Today Sales</h6>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mg-b-5">
                              <h5 className="mg-b-0 tx-dark tx-rubik tx-normal">
                                <span className="counter">$1,860</span>
                              </h5>
                              <div className="d-flex align-items-center tx-gray-700">
                                <span className="small text-success mr-2 d-flex align-items-center">
                                  <i className="ti-arrow-up mr-1 tx-8" />
                                  +351
                                </span>
                              </div>
                            </div>
                            <div className="progress ht-3 mg-b-0">
                              <div
                                className="progress-bar bg-teal wd-70p"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-xl-12 mg-t-30 mg-md-t-0 mg-xl-t-30">
                            <div className="d-flex justify-content-between">
                              <h6 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Today Earning</h6>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mg-b-5">
                              <h5 className="mg-b-0 tx-dark tx-rubik tx-normal">
                                <span className="counter">$2,530</span>
                              </h5>
                              <div className="d-flex align-items-center tx-gray-700">
                                <span className="small text-success mr-2 d-flex align-items-center">
                                  <i className="ti-arrow-up mr-1 tx-8" />
                                  +425
                                </span>
                              </div>
                            </div>
                            <div className="progress ht-3 mg-b-0">
                              <div
                                className="progress-bar bg-success wd-80p"
                                role="progressbar"
                                aria-valuenow={80}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-xl-12 mg-t-30">
                            <div className="d-flex justify-content-between">
                              <h6 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Average Order</h6>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mg-b-5">
                              <h5 className="mg-b-0 tx-dark tx-rubik tx-normal">
                                <span className="counter">$2,148</span>
                              </h5>
                              <div className="d-flex align-items-center tx-gray-700">
                                <span className="small text-danger mr-2 d-flex align-items-center">
                                  <i className="ti-arrow-down mr-1 tx-8" />
                                  -211
                                </span>
                              </div>
                            </div>
                            <div className="progress ht-3 mg-b-0">
                              <div
                                className="progress-bar bg-danger wd-70p"
                                role="progressbar"
                                aria-valuenow={70}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          <div className="col-sm-12 col-md-6 col-xl-12 mg-t-30">
                            <div className="d-flex justify-content-between">
                              <h6 className="tx-uppercase tx-spacing-1 tx-semibold tx-10 mg-b-2">Total Revenue</h6>
                            </div>
                            <div className="d-flex align-items-end justify-content-between mg-b-5">
                              <h5 className="mg-b-0 tx-dark tx-rubik tx-normal">
                                <span className="counter">$11,290</span>
                              </h5>
                              <div className="d-flex align-items-center tx-gray-700">
                                <span className="small text-success mr-2 d-flex align-items-center">
                                  <i className="ti-arrow-up mr-1 tx-8" />
                                  +151
                                </span>
                              </div>
                            </div>
                            <div className="progress ht-3 mg-b-0">
                              <div
                                className="progress-bar bg-primary wd-65p"
                                role="progressbar"
                                aria-valuenow={65}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-9">
                        <div className="clearfix">
                          <div id="salesBarChart" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mg-b-30">
                      <div className="card-body">
                        <div className="pd-b-20">
                          <h3 className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-0">Profit Share</h3>
                          <p className="tx-13 tx-gray-500 mb-0">Profit Share between customers</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="wd-50p ht-100" id="salesDonut1" />
                          <div>
                            <div className="d-flex align-items-center">
                              <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-primary mr-2" />
                              <div className="tx-gray-500">37% Sport Tickets</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-warning mr-2" />
                              <div className="tx-gray-500">47% Business Events</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-success mr-2" />
                              <div className="tx-gray-500">19% Others</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="card mg-b-30">
                      <div className="card-body">
                        <div className="pd-b-20">
                          <h3 className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-0">Revenue Change</h3>
                          <p className="tx-13 tx-gray-500 mb-0">Revenue change breakdown by cities</p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="wd-50p ht-100" id="salesDonut2" />
                          <div>
                            <div className="d-flex align-items-center">
                              <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-primary mr-2" />
                              <div className="tx-gray-500">+10% New York</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-warning mr-2" />
                              <div className="tx-gray-500">-7% London</div>
                            </div>
                            <div className="d-flex align-items-center">
                              <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-success mr-2" />
                              <div className="tx-gray-500">+20% California</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Annual Report and Bar Chart End */}
              {/*================================*/}
              {/* Earnings Details Start */}
              {/*================================*/}
              <div className="col-xl-3">
                <div className="card mg-b-30">
                  <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-12">
                      <div className="media pd-t-20 pd-x-20">
                        <div className="wd-40 ht-40 bg-primary tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                          <i data-feather="bar-chart-2" />
                        </div>
                        <div className="media-body">
                          <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-gray-500 mg-b-5">Gross Earnings</h6>
                          <h5 className="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">
                            $51,958<small className="tx-12">.50</small>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-12">
                      <div className="media pd-y-20 pd-x-20">
                        <div className="wd-40 ht-40 bg-warning tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                          <i data-feather="bar-chart-2" />
                        </div>
                        <div className="media-body">
                          <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-gray-500 mg-b-5">Net Earnings</h6>
                          <h5 className="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">
                            $31,608<small className="tx-12">.50</small>
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4 col-xl-12">
                      <div className="media pd-b-20 pd-x-20 pd-md-t-20 pd-xl-t-0">
                        <div className="wd-40 ht-40 bg-pink tx-white mg-r-10 mg-md-r-10 d-flex align-items-center justify-content-center rounded">
                          <i data-feather="bar-chart-2" />
                        </div>
                        <div className="media-body">
                          <h6 className="tx-uppercase tx-10 tx-spacing-1 tx-gray-500 mg-b-5">Tax Withheld</h6>
                          <h5 className="tx-20 tx-sm-18 tx-md-20 tx-normal tx-rubik mg-b-0">
                            $24,769<small className="tx-12">.50</small>
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pd-0">
                    <div className="table-responsive">
                      <table className="table table-hover tx-12 mb-0">
                        <thead className="tx-10 tx-uppercase">
                          <tr>
                            <th className="wd-40">Date</th>
                            <th className="wd-25 text-right">Orders</th>
                            <th className="wd-35 text-right">Earnings</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="tx-13">05/04/2019</td>
                            <td className="text-right tx-teal">2,369</td>
                            <td className="text-right tx-pink">$258,963</td>
                          </tr>
                          <tr>
                            <td className="tx-13">01/05/2019</td>
                            <td className="text-right tx-teal">1,950</td>
                            <td className="text-right tx-pink">$123,654</td>
                          </tr>
                          <tr>
                            <td className="tx-13">02/05/2019</td>
                            <td className="text-right tx-teal">1,198</td>
                            <td className="text-right tx-pink">$369,852</td>
                          </tr>
                          <tr>
                            <td className="tx-13">12/06/2019</td>
                            <td className="text-right tx-teal">1,456</td>
                            <td className="text-right tx-pink">$789,125</td>
                          </tr>
                          <tr>
                            <td className="tx-13">20/06/2019</td>
                            <td className="text-right tx-teal">1,198</td>
                            <td className="text-right tx-pink">$357,489</td>
                          </tr>
                          <tr>
                            <td className="tx-13">02/06/2019</td>
                            <td className="text-right tx-teal">1,458</td>
                            <td className="text-right tx-pink">$541,478</td>
                          </tr>
                          <tr>
                            <td className="tx-13">01/07/2019</td>
                            <td className="text-right tx-teal">1,257</td>
                            <td className="text-right tx-pink">$951,357</td>
                          </tr>
                          <tr>
                            <td className="tx-13">02/07/2019</td>
                            <td className="text-right tx-teal">1,147</td>
                            <td className="text-right tx-pink">$124,452</td>
                          </tr>
                          <tr>
                            <td className="tx-13">04/08/2019</td>
                            <td className="text-right tx-teal">1,478</td>
                            <td className="text-right tx-pink">$145,452</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* table-responsive */}
                  </div>
                </div>
              </div>
              {/*/ Earnings Details End */}
            </div>
            <div className="row">
              {/*================================*/}
              {/* Expansions Details Start */}
              {/*================================*/}
              <div className="col-xl-6">
                <div className="card mg-b-30">
                  <div className="card-body pd-b-0">
                    <div className="row mg-b-20">
                      <div className="col-lg-6">
                        <h5 className="mb-0 tx-14 tx-semibold">Your Most Recent Earnings</h5>
                        <div className="tx-12 tx-gray-500">Customers who have upgraded the level of your products or service.</div>
                      </div>
                      <div className="col-lg-6 d-none d-lg-block">
                        <div className="d-inline-ock btn-group mb-3 mb-md-0 ft-right" role="group">
                          <button type="button" className="btn btn-default">
                            Today
                          </button>
                          <button type="button" className="btn btn-default d-none d-md-block">
                            Week
                          </button>
                          <button type="button" className="btn btn-default">
                            Month
                          </button>
                          <button type="button" className="btn btn-default">
                            Year
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="row clearfix mg-b-20">
                      <div className="col-md-4 col-lg-4 col-xl-4 mg-t-20 mg-sm-t-0 mg-md-t-20 mg-lg-t-0">
                        <div className="media">
                          <div className="wd-40 ht-40 rounded bd bd-2 bd-primary d-flex flex-shrink-0 align-items-center justify-content-center">
                            <i data-feather="bar-chart-2" className="wd-20 ht-20 tx-primary" />
                          </div>
                          <div className="media-body mg-l-10">
                            <p className="tx-10 tx-uppercase tx-primary tx-spacing-1 mg-b-0 tx-medium">Expansions</p>
                            <h5 className="tx-normal tx-rubik lh-1 mg-b-5">
                              $92,350<small>.50</small>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 col-xl-4 mg-t-20 mg-sm-t-0 mg-md-t-20 mg-lg-t-0">
                        <div className="media">
                          <div className="wd-40 ht-40 rounded bd bd-2 bd-danger d-flex flex-shrink-0 align-items-center justify-content-center">
                            <i data-feather="bar-chart-2" className="wd-20 ht-20 tx-danger" />
                          </div>
                          <div className="media-body mg-l-10">
                            <p className="tx-10 tx-uppercase tx-danger tx-spacing-1 mg-b-0 tx-medium">Cancellations</p>
                            <h5 className="tx-normal tx-rubik lh-1 mg-b-5">
                              $10,301<small>.00</small>
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 col-xl-4 mg-t-20 mg-sm-t-0 mg-md-t-20 mg-lg-t-0">
                        <div className="media">
                          <div className="wd-40 ht-40 rounded bd bd-2 bd-success d-flex flex-shrink-0 align-items-center justify-content-center">
                            <i data-feather="bar-chart-2" className="wd-20 ht-20 tx-success" />
                          </div>
                          <div className="media-body mg-l-10">
                            <p className="tx-10 tx-uppercase tx-success tx-spacing-1 mg-b-0 tx-medium">Revenue</p>
                            <h5 className="tx-normal tx-rubik lh-1 mg-b-5">
                              $45,254<small>.00</small>
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix mg-b-20">
                      <div id="stackedBarChart" style={{ height: "220px" }} />
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-dashboard mg-b-0">
                      <thead className="tx-10 tx-uppercase">
                        <tr>
                          <th>Date</th>
                          <th className="text-right">Gross Earnings</th>
                          <th className="text-right">Total Orders</th>
                          <th className="text-right">Net Earnings</th>
                        </tr>
                      </thead>
                      <tbody className="tx-13">
                        <tr>
                          <td>02/04/2019</td>
                          <td className="tx-success tx-right">
                            $30,123<small>.50</small>
                          </td>
                          <td className="tx-primary tx-right">5,258</td>
                          <td className="tx-gray-500 tx-right">
                            $25,147{" "}
                            <span className="mg-l-5 tx-10  tx-success">
                              <i className="ti-arrow-up tx-8" /> 2.41%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>03/04/2019</td>
                          <td className="tx-success tx-right">
                            $28,325<small>.50</small>
                          </td>
                          <td className="tx-primary tx-right">4,257</td>
                          <td className="tx-gray-500 tx-right">
                            $24,152{" "}
                            <span className="mg-l-5 tx-10  tx-danger">
                              <i className="ti-arrow-down tx-8" /> 2.41%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>01/05/2019</td>
                          <td className="tx-success tx-right">
                            $26,789<small>.50</small>
                          </td>
                          <td className="tx-primary tx-right">3,271</td>
                          <td className="tx-gray-500 tx-right">
                            $20,369{" "}
                            <span className="mg-l-5 tx-10  tx-success">
                              <i className="ti-arrow-up tx-8" /> 2.41%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>08/05/2019</td>
                          <td className="tx-success tx-right">
                            $22,963<small>.50</small>
                          </td>
                          <td className="tx-primary tx-right">2,854</td>
                          <td className="tx-gray-500 tx-right">
                            $19,475{" "}
                            <span className="mg-l-5 tx-10  tx-success">
                              <i className="ti-arrow-up tx-8" /> 2.41%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>12/06/2019</td>
                          <td className="tx-success tx-right">
                            $20,145<small>.50</small>
                          </td>
                          <td className="tx-primary tx-right">2,147</td>
                          <td className="tx-gray-500 tx-right">
                            $14,478{" "}
                            <span className="mg-l-5 tx-10  tx-danger">
                              <i className="ti-arrow-down tx-8" /> 2.41%
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>22/06/2019</td>
                          <td className="tx-success tx-right">
                            $18,123<small>.50</small>
                          </td>
                          <td className="tx-primary tx-right">1,563</td>
                          <td className="tx-gray-500 tx-right">
                            $12,452{" "}
                            <span className="mg-l-5 tx-10  tx-success">
                              <i className="ti-arrow-up tx-8" /> 2.41%
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/*/ Expansions Details End */}
              {/*================================*/}
              {/* Search Result Details Start */}
              {/*================================*/}
              <div className="col-xl-6">
                <div className="card mg-b-30">
                  <div className="card-body pd-b-0">
                    <div id="world-map" style={{ height: "340px" }} />
                    <div className="row search-statistic">
                      <div className="col-sm-4 col-md-4 col-lg-4 pd-20 bd-r bd-b">
                        <div className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Organic Search</div>
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-primary mr-2" />
                          <div className="tx-12 tx-gray-500">
                            1,125,367 <small className="tx-success">+27%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 pd-20 bd-r bd-b">
                        <div className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Google Search</div>
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-success mr-2" />
                          <div className="tx-12 tx-gray-500">
                            1,125,367 <small className="tx-success">+34%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 pd-20">
                        <div className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Bing Search</div>
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-warning mr-2" />
                          <div className="tx-12 tx-gray-500">
                            1,125,367 <small className="tx-danger">-32%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 pd-20 bd-t bd-r">
                        <div className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Yandex Search</div>
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-danger mr-2" />
                          <div className="tx-12 tx-gray-500">
                            1,125,367 <small className="tx-danger">-22%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 pd-20 bd-t bd-r">
                        <div className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">DuckDuckGo Search</div>
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-teal mr-2" />
                          <div className="tx-12 tx-gray-500">
                            1,125,367 <small className="tx-success">+42%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 pd-20 bd-t">
                        <div className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Baidu Search</div>
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-info mr-2" />
                          <div className="tx-12 tx-gray-500">
                            1,125,367 <small className="tx-success">+15%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 pd-20 bd-t bd-r">
                        <div className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">DuckDuckGo Search</div>
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-teal mr-2" />
                          <div className="tx-12 tx-gray-500">
                            1,125,367 <small className="tx-success">+42%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 pd-20 bd-t bd-r">
                        <div className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Baidu Search</div>
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-info mr-2" />
                          <div className="tx-12 tx-gray-500">
                            1,125,367 <small className="tx-success">+15%</small>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4 pd-20 bd-t bd-r">
                        <div className="tx-11 tx-uppercase tx-spacing-1 tx-semibold mg-b-5">Yandex Search</div>
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-danger mr-2" />
                          <div className="tx-12 tx-gray-500">
                            1,125,367 <small className="tx-danger">-22%</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Search Result Details End */}
            </div>
            {/*================================*/}
            {/* Sales Details Start */}
            {/*================================*/}
            <div className="row clearfix">
              <div className="col-lg-6">
                <div className="card mg-b-30">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-5 col-lg-4 col-xl-6 order-1 order-sm-0 mg-t-20 mg-sm-t-0">
                        <div className="clearfix">
                          <div id="flotBarRecentOrders" style={{ height: "100px" }} />
                        </div>
                      </div>
                      <div className="col-md-7 col-lg-8 col-xl-6">
                        <div className="pd-0">
                          <div className="d-flex align-items-baseline mg-b-5">
                            <h1 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">1,245</h1>
                            <span className="d-flex align-items-center tx-success mg-l-2 tx-10">
                              <i className="ti-arrow-up tx-8 tx-success tx-8 mr-1" />
                              11.24%
                            </span>
                          </div>
                          <h6 className="tx-11 tx-primary tx-uppercase">Recent Orders</h6>
                          <p className="tx-11 tx-sm-12 mg-b-0 tx-gray-500">
                            Habi tasse labo rum purus, vesti bulum at
                            <span className="d-none d-sm-inline"> vivamus tempor port titor vulpu</span>
                            ... <a href="#">Learn More</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* row */}
                  </div>
                </div>
                {/* card */}
              </div>
              <div className="col-lg-6">
                <div className="card mg-b-30">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-5 col-lg-4 col-xl-6 order-1 order-sm-0 mg-t-20 mg-sm-t-0">
                        <div className="clearfix">
                          <div id="flotBarCompleteOrders" style={{ height: "100px" }} />
                        </div>
                      </div>
                      <div className="col-md-7 col-lg-8 col-xl-6">
                        <div className="pd-0">
                          <div className="d-flex align-items-baseline mg-b-5">
                            <h1 className="tx-20 tx-sm-18 tx-md-24 mg-b-0 tx-rubik tx-dark tx-normal">9,540</h1>
                            <span className="d-flex align-items-center tx-danger mg-l-2 tx-10">
                              <i className="ti-arrow-down tx-8 tx-danger tx-8 mr-1" />
                              10.9%
                            </span>
                          </div>
                          <h6 className="tx-11 tx-pink tx-uppercase">Complete Orders</h6>
                          <p className="tx-12 mg-b-0 tx-gray-500">
                            Habi tasse labo rum purus, vesti bulum
                            <span className="d-none d-sm-inline"> at vivamus tempor port titor vulpu</span>
                            ... <a href="#">Learn More</a>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* row */}
                  </div>
                </div>
                {/* card */}
              </div>
            </div>
            {/*/ Sales Details End */}
            <div className="row">
              {/*================================*/}
              {/* New Customers Start */}
              {/*================================*/}
              <div className="col-lg-6 col-xl-4">
                <div className="card mg-b-30">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h6 className="tx-13 mb-0">New Customers</h6>
                    <div className="card-header-btn">
                      <div className="dropdown">
                        <a href="#" data-toggle="dropdown">
                          <i className="ti-more" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#" className="dropdown-item">
                            <i data-feather="info" className="wd-16 mr-2" />
                            View Details
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="share" className="wd-16 mr-2" />
                            Share
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="download" className="wd-16 mr-2" />
                            Download
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="copy" className="wd-16 mr-2" />
                            Copy to
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="folder" className="wd-16 mr-2" />
                            Move to
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="edit" className="wd-16 mr-2" />
                            Rename
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="trash" className="wd-16 mr-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pd-y-20">
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center mg-b-15">
                        <a href="#">
                          <div className="avatar avatar-online">
                            <span className="avatar-initial rounded-circle bg-gray-800">A</span>
                            <i />
                          </div>
                        </a>
                        <div className="media-body pd-l-15 lh-2">
                          <p className="tx-medium mg-b-2">
                            <a href="#">Archie Cantones</a>
                          </p>
                          <span className="tx-12 tx-gray-500">Joined: 01 Mar, 2019</span>
                        </div>
                        <div className="mg-l-auto d-flex align-self-center action-icon">
                          <nav className="nav nav-icon-only">
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Send Message">
                              <i data-feather="mail" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Add to Fiend">
                              <i data-feather="user-plus" className="wd-16" />
                            </a>
                            <a href="#" className="mr-2 tx-gray-500" data-toggle="tooltip" data-placement="top" data-original-title="Flag User">
                              <i data-feather="flag" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="tx-gray-500" data-placement="top" data-original-title="More Options">
                              <i data-feather="more-vertical" className="wd-16" />
                            </a>
                          </nav>
                        </div>
                      </li>
                      <li className="d-flex align-items-center mg-b-15">
                        <a href="#">
                          <div className="avatar avatar-online">
                            <span className="avatar-initial rounded-circle bg-primary">H</span>
                            <i />
                          </div>
                        </a>
                        <div className="media-body pd-l-15 lh-2">
                          <p className="tx-medium mg-b-2">
                            <a href="#">Holmes Cherryman</a>
                          </p>
                          <span className="tx-12 tx-gray-500">Joined: 06 Mar, 2019</span>
                        </div>
                        <div className="mg-l-auto d-flex align-self-center action-icon">
                          <nav className="nav nav-icon-only">
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Send Message">
                              <i data-feather="mail" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Add to Fiend">
                              <i data-feather="user-plus" className="wd-16" />
                            </a>
                            <a href="#" className="mr-2 tx-gray-500" data-toggle="tooltip" data-placement="top" data-original-title="Flag User">
                              <i data-feather="flag" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="tx-gray-500" data-placement="top" data-original-title="More Options">
                              <i data-feather="more-vertical" className="wd-16" />
                            </a>
                          </nav>
                        </div>
                      </li>
                      <li className="d-flex align-items-center mg-b-15">
                        <a href="#">
                          <div className="avatar avatar-online">
                            <span className="avatar-initial rounded-circle bg-danger">M</span>
                            <i />
                          </div>
                        </a>
                        <div className="media-body pd-l-15 lh-2">
                          <p className="tx-medium mg-b-2">
                            <a href="#">Malanie Hanvey</a>
                          </p>
                          <span className="tx-12 tx-gray-500">Joined: 11 Mar, 2019</span>
                        </div>
                        <div className="mg-l-auto d-flex align-self-center action-icon">
                          <nav className="nav nav-icon-only">
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Send Message">
                              <i data-feather="mail" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Add to Fiend">
                              <i data-feather="user-plus" className="wd-16" />
                            </a>
                            <a href="#" className="mr-2 tx-gray-500" data-toggle="tooltip" data-placement="top" data-original-title="Flag User">
                              <i data-feather="flag" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="tx-gray-500" data-placement="top" data-original-title="More Options">
                              <i data-feather="more-vertical" className="wd-16" />
                            </a>
                          </nav>
                        </div>
                      </li>
                      <li className="d-flex align-items-center mg-b-15">
                        <a href="#">
                          <div className="avatar avatar-offline">
                            <span className="avatar-initial rounded-circle bg-teal">K</span>
                            <i />
                          </div>
                        </a>
                        <div className="media-body pd-l-15 lh-2">
                          <p className="tx-medium mg-b-2">
                            <a href="#">Kenneth Hune</a>
                          </p>
                          <span className="tx-12 tx-gray-500">Joined: 12 Mar, 2019</span>
                        </div>
                        <div className="mg-l-auto d-flex align-self-center action-icon">
                          <nav className="nav nav-icon-only">
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Send Message">
                              <i data-feather="mail" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Add to Fiend">
                              <i data-feather="user-plus" className="wd-16" />
                            </a>
                            <a href="#" className="mr-2 tx-gray-500" data-toggle="tooltip" data-placement="top" data-original-title="Flag User">
                              <i data-feather="flag" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="tx-gray-500" data-placement="top" data-original-title="More Options">
                              <i data-feather="more-vertical" className="wd-16" />
                            </a>
                          </nav>
                        </div>
                      </li>
                      <li className="d-flex align-items-center mg-b-15">
                        <a href="#">
                          <div className="avatar avatar-offline">
                            <span className="avatar-initial rounded-circle bg-success">V</span>
                            <i />
                          </div>
                        </a>
                        <div className="media-body pd-l-15 lh-2">
                          <p className="tx-medium mg-b-2">
                            <a href="#">Valentine Maton</a>
                          </p>
                          <span className="tx-12 tx-gray-500">Joined: 15 Mar, 2019</span>
                        </div>
                        <div className="mg-l-auto d-flex align-self-center action-icon">
                          <nav className="nav nav-icon-only">
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Send Message">
                              <i data-feather="mail" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Add to Fiend">
                              <i data-feather="user-plus" className="wd-16" />
                            </a>
                            <a href="#" className="mr-2 tx-gray-500" data-toggle="tooltip" data-placement="top" data-original-title="Flag User">
                              <i data-feather="flag" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="tx-gray-500" data-placement="top" data-original-title="More Options">
                              <i data-feather="more-vertical" className="wd-16" />
                            </a>
                          </nav>
                        </div>
                      </li>
                      <li className="d-flex align-items-center mg-b-15">
                        <a href="#">
                          <div className="avatar avatar-offline">
                            <span className="avatar-initial rounded-circle bg-primary">M</span>
                            <i />
                          </div>
                        </a>
                        <div className="media-body pd-l-15 lh-2">
                          <p className="tx-medium mg-b-2">
                            <a href="#">Madsen Daniel</a>
                          </p>
                          <span className="tx-12 tx-gray-500">Joined: 20 Mar, 2019</span>
                        </div>
                        <div className="mg-l-auto d-flex align-self-center action-icon">
                          <nav className="nav nav-icon-only">
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Send Message">
                              <i data-feather="mail" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Add to Fiend">
                              <i data-feather="user-plus" className="wd-16" />
                            </a>
                            <a href="#" className="mr-2 tx-gray-500" data-toggle="tooltip" data-placement="top" data-original-title="Flag User">
                              <i data-feather="flag" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="tx-gray-500" data-placement="top" data-original-title="More Options">
                              <i data-feather="more-vertical" className="wd-16" />
                            </a>
                          </nav>
                        </div>
                      </li>
                      <li className="d-flex align-items-center">
                        <a href="#">
                          <div className="avatar avatar-offline">
                            <span className="avatar-initial rounded-circle bg-warning">M</span>
                            <i />
                          </div>
                        </a>
                        <div className="media-body pd-l-15 lh-2">
                          <p className="tx-medium mg-b-2">
                            <a href="#">Jesse Ross</a>
                          </p>
                          <span className="tx-12 tx-gray-500">Joined: 21 Mar, 2019</span>
                        </div>
                        <div className="mg-l-auto d-flex align-self-center action-icon">
                          <nav className="nav nav-icon-only">
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Send Message">
                              <i data-feather="mail" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="mr-2 tx-gray-500" data-placement="top" data-original-title="Add to Fiend">
                              <i data-feather="user-plus" className="wd-16" />
                            </a>
                            <a href="#" className="mr-2 tx-gray-500" data-toggle="tooltip" data-placement="top" data-original-title="Flag User">
                              <i data-feather="flag" className="wd-16" />
                            </a>
                            <a href="#" data-toggle="tooltip" className="tx-gray-500" data-placement="top" data-original-title="More Options">
                              <i data-feather="more-vertical" className="wd-16" />
                            </a>
                          </nav>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*/ New Customers End */}
              {/*================================*/}
              {/* Transaction History Start */}
              {/*================================*/}
              <div className="col-lg-6 col-xl-4">
                <div className="card mg-b-30">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h6 className="tx-13 mb-0">Transaction History</h6>
                    <div className="card-header-btn">
                      <div className="dropdown">
                        <a href="#" data-toggle="dropdown">
                          <i className="ti-more" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#" className="dropdown-item">
                            <i data-feather="info" className="wd-16 mr-2" />
                            View Details
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="share" className="wd-16 mr-2" />
                            Share
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="download" className="wd-16 mr-2" />
                            Download
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="copy" className="wd-16 mr-2" />
                            Copy to
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="folder" className="wd-16 mr-2" />
                            Move to
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="edit" className="wd-16 mr-2" />
                            Rename
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="trash" className="wd-16 mr-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body pd-0 pd-y-15">
                    <ul className="list-group list-group-flush tx-13">
                      <li className="list-group-item d-flex pd-y-9 pd-sm-x-20">
                        <div className="d-none d-sm-block">
                          <span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-primary tx-white">
                            <i className="ti-check" />
                          </span>
                        </div>
                        <div className="pd-sm-l-10">
                          <p className="mg-b-0">
                            Lorem Ipsum is simply{" "}
                            <a href="#" className="tx-dark mg-b-0 tx-semibold">
                              #985632
                            </a>
                          </p>
                          <span className="tx-12 mg-b-0 tx-gray-500">Transaction ID: #857423</span>
                        </div>
                        <div className="mg-l-auto text-right">
                          <p className="mg-b-0 tx-rubik">
                            $4,550<small className="tx-8">.50</small>
                          </p>
                          <span className="tx-success tx-12">Completed</span>
                        </div>
                      </li>
                      <li className="list-group-item d-flex pd-y-9 pd-sm-x-20">
                        <div className="d-none d-sm-block">
                          <span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-warning tx-dark">
                            <i className="ti-anchor" />
                          </span>
                        </div>
                        <div className="pd-sm-l-10">
                          <p className="mg-b-0">
                            Lorem Ipsum is simply <a className="tx-dark mg-b-0 tx-semibold">#698524</a>
                          </p>
                          <span className="tx-12 mg-b-0 tx-gray-500">Transaction ID: #452356</span>
                        </div>
                        <div className="mg-l-auto text-right">
                          <p className="mg-b-0 tx-rubik">
                            $2,645<small className="tx-8">.40</small>
                          </p>
                          <span className="tx-warning tx-12">Pending</span>
                        </div>
                      </li>
                      <li className="list-group-item d-flex pd-y-9 pd-sm-x-20">
                        <div className="d-none d-sm-block">
                          <span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-primary tx-white">
                            <i className="ti-check" />
                          </span>
                        </div>
                        <div className="pd-sm-l-10">
                          <p className="mg-b-0">
                            Lorem Ipsum is simply <a className="tx-dark mg-b-0 tx-semibold">#458762</a>
                          </p>
                          <span className="tx-12 mg-b-0 tx-gray-500">Transaction ID: #354155</span>
                        </div>
                        <div className="mg-l-auto text-right">
                          <p className="mg-b-0 tx-rubik">
                            $3,248<small className="tx-8">.80</small>
                          </p>
                          <span className="tx-success tx-12">Completed</span>
                        </div>
                      </li>
                      <li className="list-group-item d-flex pd-y-9 pd-sm-x-20">
                        <div className="d-none d-sm-block">
                          <span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-warning tx-dark">
                            <i className="ti-anchor" />
                          </span>
                        </div>
                        <div className="pd-sm-l-10">
                          <p className="mg-b-0">
                            Lorem Ipsum is simply <a className="tx-dark mg-b-0 tx-semibold">#698524</a>
                          </p>
                          <span className="tx-12 mg-b-0 tx-gray-500">Transaction ID: #452356</span>
                        </div>
                        <div className="mg-l-auto text-right">
                          <p className="mg-b-0 tx-rubik">
                            $1,243<small className="tx-8">.60</small>
                          </p>
                          <p className="mg-b-0 tx-12 tx-warning">Pending</p>
                        </div>
                      </li>
                      <li className="list-group-item d-flex pd-y-9 pd-sm-x-20">
                        <div className="d-none d-sm-block">
                          <span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-primary tx-white">
                            <i className="ti-check" />
                          </span>
                        </div>
                        <div className="pd-sm-l-10">
                          <p className="mg-b-0">
                            Lorem Ipsum is simply <a className="tx-dark mg-b-0 tx-semibold">#365845</a>
                          </p>
                          <span className="tx-12 mg-b-0 tx-gray-500">Transaction ID: #748562</span>
                        </div>
                        <div className="mg-l-auto text-right">
                          <p className="mg-b-0 tx-rubik">
                            $5,319<small className="tx-10">.10</small>
                          </p>
                          <span className="tx-success tx-12">Completed</span>
                        </div>
                      </li>
                      <li className="list-group-item d-flex pd-y-9 pd-sm-x-20">
                        <div className="d-none d-sm-block">
                          <span className="wd-40 ht-40 mg-r-10 d-flex align-items-center justify-content-center rounded bg-danger tx-white">
                            <i className="ti-close" />
                          </span>
                        </div>
                        <div className="pd-sm-l-10">
                          <p className="mg-b-0">
                            Lorem Ipsum is simply <a className="tx-dark mg-b-0 tx-semibold">#475821</a>
                          </p>
                          <span className="tx-12 mg-b-0 tx-gray-500">Transaction ID: #457771</span>
                        </div>
                        <div className="mg-l-auto text-right">
                          <p className="mg-b-0 tx-rubik">
                            $4,347<small className="tx-8">.90</small>
                          </p>
                          <span className="tx-danger tx-12">Canceled</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*/ Transaction History End */}
              {/*================================*/}
              {/* Customer Satisfaction Start */}
              {/*================================*/}
              <div className="col-xl-4">
                <div className="card mg-b-30">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <h6 className="tx-13 mb-0">Customer Satisfaction</h6>
                    <div className="card-header-btn">
                      <div className="dropdown">
                        <a href="#" data-toggle="dropdown">
                          <i className="ti-more" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#" className="dropdown-item">
                            <i data-feather="info" className="wd-16 mr-2" />
                            View Details
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="share" className="wd-16 mr-2" />
                            Share
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="download" className="wd-16 mr-2" />
                            Download
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="copy" className="wd-16 mr-2" />
                            Copy to
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="folder" className="wd-16 mr-2" />
                            Move to
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="edit" className="wd-16 mr-2" />
                            Rename
                          </a>
                          <a href="#" className="dropdown-item">
                            <i data-feather="trash" className="wd-16 mr-2" />
                            Delete
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex align-items-baseline">
                      <h1 className="mg-b-0 mg-r-5">
                        9.5
                        <span className="tx-10 tx-success">
                          (
                          <i className="ti-arrow-up tx-8 tx-success tx-8 mr-1" />
                          8.60%)
                        </span>
                      </h1>
                      <div className="tx-16">
                        <i className="fa fa-star tx-warning" />
                        <i className="fa fa-star tx-warning" />
                        <i className="fa fa-star tx-warning" />
                        <i className="fa fa-star tx-warning" />
                        <i className="fa fa-star-half-empty tx-warning" />
                      </div>
                    </div>
                    <p className="tx-11 tx-sm-12 mg-b-20 tx-gray-500">
                      Habi tasse labo rum purus, vesti bulum at
                      <span className="d-none d-sm-inline"> vivamus tempor port titor vulpu</span>
                      ... <a href="#">Learn More</a>
                    </p>
                    <div className="card-progressbar">
                      <label className="tx-10 tx-uppercase tx-gray-500 mg-b-0">Score</label>
                      <div className="progress" style={{ height: "3px" }}>
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "15%" }}
                          aria-valuenow={15}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "30%" }}
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "20%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "10%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <label className="tx-10 tx-uppercase tx-gray-500 mg-b-0">
                        85%
                        <i className="ti-arrow-up tx-8 tx-success tx-8 ml-1" />
                      </label>
                    </div>
                    <div className="list-group list-group-flush m-t-10 tx-13">
                      <div className="list-group-item pd-0 pd-y-10 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-primary mr-2" />
                          <span className="tx-semibold">Excellent</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="mg-r-5">3,345</div>
                          <div className="tx-10 tx-gray-500">
                            (
                            <i className="ti-arrow-up tx-8 tx-success tx-8 mr-1" />
                            4.7%)
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item pd-0 pd-y-10 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-danger mr-2" />
                          <span className="tx-semibold">Very Good</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="mg-r-5">2,854</div>
                          <div className="tx-10 tx-gray-500">
                            (
                            <i className="ti-arrow-down tx-8 tx-danger tx-8 mr-1" />
                            5.8%)
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item pd-0 pd-y-10 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-warning mr-2" />
                          <span className="tx-semibold">Good</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="mg-r-5">2,145</div>
                          <div className="tx-10 tx-gray-500">
                            (
                            <i className="ti-arrow-up tx-8 tx-success tx-8 mr-1" />
                            2.8%)
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item pd-0 pd-y-10 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-info mr-2" />
                          <span className="tx-semibold">Fair</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="mg-r-5">1,574</div>
                          <div className="tx-10 tx-gray-500">
                            (
                            <i className="ti-arrow-down tx-8 tx-danger tx-8 mr-1" />
                            3.7%)
                          </div>
                        </div>
                      </div>
                      <div className="list-group-item pd-0 pd-y-10 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="wd-12 ht-12 bd bd-3 rounded-circle bd-success mr-2" />
                          <span className="tx-semibold">Poor</span>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="mg-r-5">1,540</div>
                          <div className="tx-10 tx-gray-500">
                            (
                            <i className="ti-arrow-up tx-8 tx-success tx-8 mr-1" />
                            5.5%)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ Customer Satisfaction End */}
            </div>
          </div>
          {/*/ Page Inner End */}
          {/*================================*/}
          {/* Page Footer Start */}
          {/*================================*/}
          <footer className="page-footer">
            <div className="pd-t-4 pd-b-0 pd-x-20">
              <div className="tx-10 tx-uppercase tx-gray-500 tx-spacing-1">
                <p className="pd-y-10 mb-0">
                  Copyright© 2019 | Created By{" "}
                  <a href="https://themeforest.net/user/colorlibcode/portfolio" target="_blank">
                    ColorlibCode
                  </a>
                </p>
              </div>
            </div>
          </footer>
          {/*/ Page Footer End */}
        </div>
        {/*/ Page Content End */}
      </div>
      {/*/ Page Container End */}
      {/*================================*/}
      {/* Scroll To Top Start*/}
      {/*================================*/}
      <a href="#" data-click="scroll-top" className="btn-scroll-top fade">
        <i className="fa fa-arrow-up" />
      </a>
      {/*/ Scroll To Top End */}
      {/*================================*/}
      {/* Template Customizer Start*/}
      {/*================================*/}
      <div className="avesta-settings">
        <a href="#" id="avestaSettingsShow" className="avesta-settings-link">
          <i data-feather="settings" className="wd-20" />
        </a>
        <div className="avesta-settings-body">
          <div className="pd-y-20">
            <img src="assets/images/logo-dark.png" className="d-block" alt="" />
            <span className="tx-10 tx-uppercase tx-spacing-1">Template Customizer</span>
          </div>
          <div className="pd-y-20 bd-t">
            <label className="tx-10 tx-uppercase tx-bold tx-spacing-1 mg-b-15">Skin Mode</label>
            <div className="row">
              <div className="col-12 d-flex justify-content-between">
                <span className="avesta-demo-customizer-name tx-spacing-1">Default Skin</span>
                <a href="#" className="avesta-mode avesta-mode-default active" data-title="default-skin" />
              </div>
              <div className="col-12 d-flex justify-content-between">
                <span className="avesta-demo-customizer-name">Light Skin</span>
                <a href="#" className="avesta-mode avesta-mode-light" data-title="light-skin">
                  <span className="demo-color-palet-1" />
                  <span className="demo-color-palet-2" />
                </a>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <span className="avesta-demo-customizer-name tx-spacing-1">Cool Skin</span>
                <a href="#" className="avesta-mode avesta-mode-cool" data-title="cool-skin">
                  <span className="bg-primary" />
                  <span className="bg-primary" />
                </a>
              </div>
              {/* row */}
            </div>
          </div>
          <div className="pd-y-20 bd-t">
            <label className="tx-10 tx-uppercase tx-bold tx-spacing-1 mg-b-15">Navigation Skin</label>
            <div className="row">
              <div className="col-12 d-flex justify-content-between">
                <span className="avesta-demo-customizer-name">Default</span>
                <a href="#" className="avesta-demo-customizer avesta-demo-customizer-default active" data-title="default">
                  <span />
                  <span />
                </a>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <span className="avesta-demo-customizer-name">Light</span>
                <a href="#" className="avesta-demo-customizer avesta-demo-customizer-light" data-title="light">
                  <span />
                  <span />
                </a>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <span className="avesta-demo-customizer-name">Blue Purple</span>
                <a href="#" className="avesta-demo-customizer avesta-demo-customizer-bluepurple" data-title="bluepurple">
                  <span />
                  <span />
                </a>
              </div>
              <div className="col-12 d-flex justify-content-between">
                <span className="avesta-demo-customizer-name">Gradient</span>
                <a href="#" className="avesta-demo-customizer avesta-demo-customizer-gradient" data-title="gradient">
                  <span />
                  <span />
                </a>
              </div>
            </div>
            {/* row */}
          </div>
          <div className="pd-y-20 bd-t">
            <label className="tx-10 tx-uppercase tx-bold tx-spacing-1 mg-b-15">Font Family Mode</label>
            <div className="row font-customize">
              <div className="col-12">
                <a href="#" id="setFontBase" className="active-font">
                  IBM Plex Sans
                </a>
              </div>
              {/* col */}
              <div className="col-12">
                <a href="#" id="setFontRoboto">
                  Roboto
                </a>
              </div>
              {/* col */}
              <div className="col-12">
                <a href="#" id="setFontPoppins">
                  Poppins
                </a>
              </div>
              {/* col */}
              <div className="col-12">
                <a href="#" id="setFontOpenSans">
                  Open Sans
                </a>
              </div>
              {/* col */}
            </div>
            {/* row */}
          </div>
        </div>
        {/* avesta-settings-body */}
      </div>
      {/*/ Template Customizer End */}
    </div>
  );
}

export default App;
