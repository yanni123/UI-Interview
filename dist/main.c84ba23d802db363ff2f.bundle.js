webpackJsonp([1],{0:function(e,n,t){e.exports=t("cDNt")},"345u":function(e,n,t){"use strict";var r=t("/oeL");t.d(n,"a",function(){return c});var s=this&&this.__decorate||function(e,n,t,r){var s,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(n,t,a):s(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},a=function(){function e(e){this.el=e}return e.prototype.toggle=function(){this.el.nativeElement.classList.toggle("open")},e}();a=s([t.i(r.Directive)({selector:"[appNavDropdown]"}),o("design:paramtypes",["function"==typeof(l=void 0!==r.ElementRef&&r.ElementRef)&&l||Object])],a);var i=function(){function e(e){this.dropdown=e}return e.prototype.toggleOpen=function(e){e.preventDefault(),this.dropdown.toggle()},e}();s([t.i(r.HostListener)("click",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],i.prototype,"toggleOpen",null),i=s([t.i(r.Directive)({selector:"[appNavDropdownToggle]"}),o("design:paramtypes",[a])],i);var l,c=[a,i]},"7mm+":function(e,n,t){"use strict";var r=t("/oeL");t.d(n,"a",function(){return d});var s=this&&this.__decorate||function(e,n,t,r){var s,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(n,t,a):s(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},a=function(){function e(){}return e.prototype.toggleOpen=function(e){e.preventDefault(),document.querySelector("body").classList.toggle("sidebar-hidden")},e}();s([t.i(r.HostListener)("click",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],a.prototype,"toggleOpen",null),a=s([t.i(r.Directive)({selector:"[appSidebarToggler]"}),o("design:paramtypes",[])],a);var i=function(){function e(){}return e.prototype.toggleOpen=function(e){e.preventDefault(),document.querySelector("body").classList.toggle("sidebar-minimized")},e}();s([t.i(r.HostListener)("click",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],i.prototype,"toggleOpen",null),i=s([t.i(r.Directive)({selector:"[appSidebarMinimizer]"}),o("design:paramtypes",[])],i);var l=function(){function e(){}return e.prototype.hasClass=function(e,n){return new RegExp("(\\s|^)"+n+"(\\s|$)").test(e.className)},e.prototype.toggleOpen=function(e){e.preventDefault(),document.querySelector("body").classList.toggle("sidebar-mobile-show")},e}();s([t.i(r.HostListener)("click",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],l.prototype,"toggleOpen",null),l=s([t.i(r.Directive)({selector:"[appMobileSidebarToggler]"}),o("design:paramtypes",[])],l);var c=function(){function e(){}return e.prototype.hasClass=function(e,n){return new RegExp("(\\s|^)"+n+"(\\s|$)").test(e.className)},e.prototype.toggleClass=function(e,n){var t=" "+e.className.replace(/[\t\r\n]/g," ")+" ";if(this.hasClass(e,n)){for(;t.indexOf(" "+n+" ")>=0;)t=t.replace(" "+n+" "," ");e.className=t.replace(/^\s+|\s+$/g,"")}else e.className+=" "+n},e.prototype.toggleOpen=function(e){e.preventDefault(),this.hasClass(document.querySelector("body"),"sidebar-off-canvas")&&this.toggleClass(document.querySelector("body"),"sidebar-opened")},e}();s([t.i(r.HostListener)("click",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],c.prototype,"toggleOpen",null),c=s([t.i(r.Directive)({selector:"[appSidebarClose]"}),o("design:paramtypes",[])],c);var d=[a,i,c,l]},"8Sw2":function(e,n,t){function r(e){return t(s(e))}function s(e){var n=o[e];if(!(n+1))throw new Error("Cannot find module '"+e+"'.");return n}var o={"./af":"FQor","./af.js":"FQor","./ar":"EcI0","./ar-dz":"cw72","./ar-dz.js":"cw72","./ar-kw":"fu+8","./ar-kw.js":"fu+8","./ar-ly":"7CVz","./ar-ly.js":"7CVz","./ar-ma":"1dFW","./ar-ma.js":"1dFW","./ar-sa":"UxV2","./ar-sa.js":"UxV2","./ar-tn":"nm31","./ar-tn.js":"nm31","./ar.js":"EcI0","./az":"EbpX","./az.js":"EbpX","./be":"SQlX","./be.js":"SQlX","./bg":"R3V+","./bg.js":"R3V+","./bn":"cAX3","./bn.js":"cAX3","./bo":"dHgA","./bo.js":"dHgA","./br":"W7ww","./br.js":"W7ww","./bs":"lZ6K","./bs.js":"lZ6K","./ca":"udbC","./ca.js":"udbC","./cs":"oSQb","./cs.js":"oSQb","./cv":"yPEm","./cv.js":"yPEm","./cy":"PpYB","./cy.js":"PpYB","./da":"oiZG","./da.js":"oiZG","./de":"LYe6","./de-at":"KOG5","./de-at.js":"KOG5","./de-ch":"o3JY","./de-ch.js":"o3JY","./de.js":"LYe6","./dv":"OkYT","./dv.js":"OkYT","./el":"QFnp","./el.js":"QFnp","./en-au":"dBGl","./en-au.js":"dBGl","./en-ca":"vv0C","./en-ca.js":"vv0C","./en-gb":"IoCy","./en-gb.js":"IoCy","./en-ie":"qVAg","./en-ie.js":"qVAg","./en-nz":"FbT0","./en-nz.js":"FbT0","./eo":"y/6j","./eo.js":"y/6j","./es":"ivpd","./es-do":"DBbP","./es-do.js":"DBbP","./es.js":"ivpd","./et":"FrUj","./et.js":"FrUj","./eu":"LAVD","./eu.js":"LAVD","./fa":"J2cK","./fa.js":"J2cK","./fi":"5FCP","./fi.js":"5FCP","./fo":"jIZb","./fo.js":"jIZb","./fr":"Lq8I","./fr-ca":"ICRA","./fr-ca.js":"ICRA","./fr-ch":"QWmo","./fr-ch.js":"QWmo","./fr.js":"Lq8I","./fy":"Fbnp","./fy.js":"Fbnp","./gd":"zhFu","./gd.js":"zhFu","./gl":"o10m","./gl.js":"o10m","./gom-latn":"UoXv","./gom-latn.js":"UoXv","./he":"gbvS","./he.js":"gbvS","./hi":"+UQz","./hi.js":"+UQz","./hr":"qGYH","./hr.js":"qGYH","./hu":"hGGh","./hu.js":"hGGh","./hy-am":"1AR5","./hy-am.js":"1AR5","./id":"Ie9h","./id.js":"Ie9h","./is":"piS+","./is.js":"piS+","./it":"5P9/","./it.js":"5P9/","./ja":"3cRe","./ja.js":"3cRe","./jv":"vwCJ","./jv.js":"vwCJ","./ka":"R7aq","./ka.js":"R7aq","./kk":"d8hV","./kk.js":"d8hV","./km":"nCdc","./km.js":"nCdc","./kn":"5K8n","./kn.js":"5K8n","./ko":"1jN3","./ko.js":"1jN3","./ky":"74/W","./ky.js":"74/W","./lb":"XAyT","./lb.js":"XAyT","./lo":"w/Mz","./lo.js":"w/Mz","./lt":"IetG","./lt.js":"IetG","./lv":"CRPd","./lv.js":"CRPd","./me":"1mee","./me.js":"1mee","./mi":"yRr3","./mi.js":"yRr3","./mk":"bfn1","./mk.js":"bfn1","./ml":"r1ky","./ml.js":"r1ky","./mr":"+K6p","./mr.js":"+K6p","./ms":"asMk","./ms-my":"IcWU","./ms-my.js":"IcWU","./ms.js":"asMk","./my":"Isng","./my.js":"Isng","./nb":"FjNp","./nb.js":"FjNp","./ne":"P9zQ","./ne.js":"P9zQ","./nl":"pejQ","./nl-be":"c3/i","./nl-be.js":"c3/i","./nl.js":"pejQ","./nn":"ALD8","./nn.js":"ALD8","./pa-in":"1YTd","./pa-in.js":"1YTd","./pl":"Gs99","./pl.js":"Gs99","./pt":"eunO","./pt-br":"uHKL","./pt-br.js":"uHKL","./pt.js":"eunO","./ro":"1FZw","./ro.js":"1FZw","./ru":"Cy48","./ru.js":"Cy48","./sd":"+28k","./sd.js":"+28k","./se":"EiHj","./se.js":"EiHj","./si":"77bI","./si.js":"77bI","./sk":"BgyH","./sk.js":"BgyH","./sl":"K7sG","./sl.js":"K7sG","./sq":"pwQJ","./sq.js":"pwQJ","./sr":"N0T2","./sr-cyrl":"9OoP","./sr-cyrl.js":"9OoP","./sr.js":"N0T2","./ss":"Mh9L","./ss.js":"Mh9L","./sv":"YZAt","./sv.js":"YZAt","./sw":"/7jV","./sw.js":"/7jV","./ta":"VKBt","./ta.js":"VKBt","./te":"TIcV","./te.js":"TIcV","./tet":"BlC1","./tet.js":"BlC1","./th":"Zi3L","./th.js":"Zi3L","./tl-ph":"D4Y9","./tl-ph.js":"D4Y9","./tlh":"muBP","./tlh.js":"muBP","./tr":"82s3","./tr.js":"82s3","./tzl":"vjXv","./tzl.js":"vjXv","./tzm":"Vhfe","./tzm-latn":"m0Pg","./tzm-latn.js":"m0Pg","./tzm.js":"Vhfe","./uk":"Y3Ex","./uk.js":"Y3Ex","./ur":"4DIg","./ur.js":"4DIg","./uz":"wDue","./uz-latn":"Li28","./uz-latn.js":"Li28","./uz.js":"wDue","./vi":"UbP6","./vi.js":"UbP6","./x-pseudo":"fQLM","./x-pseudo.js":"fQLM","./yo":"evMD","./yo.js":"evMD","./zh-cn":"DV5H","./zh-cn.js":"DV5H","./zh-hk":"iEKH","./zh-hk.js":"iEKH","./zh-tw":"X9uL","./zh-tw.js":"X9uL"};r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id="8Sw2"},BGN2:function(e,n,t){"use strict";var r=t("/oeL");t.d(n,"a",function(){return a});var s=this&&this.__decorate||function(e,n,t,r){var s,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(n,t,a):s(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},a=function(){function e(){}return e.prototype.ngOnInit=function(){setTimeout(function(){var e=new Image,n=document.getElementById("myCanvas"),t=n.getContext("2d");e.src="assets/003_IMAGE_02-300x300.jpg",e.onload=function(){t.drawImage(e,0,0,170,200)}},300)},e.prototype.ngAfterViewInit=function(){},e.prototype.ngOnDestroy=function(){},e}();a=s([t.i(r.Component)({template:t("PAy/")}),o("design:paramtypes",[])],a)},L4sf:function(e,n,t){"use strict";var r=t("/oeL"),s=t("BkNc");t.d(n,"a",function(){return i});var o=this&&this.__decorate||function(e,n,t,r){var s,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(n,t,a):s(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},a=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},i=function(){function e(e){this.router=e}return e.prototype.ngOnInit=function(){this.router.navigate(["uIInterviewBoard"])},e}();i=o([t.i(r.Component)({selector:"app-dashboard",template:t("xfcI")}),a("design:paramtypes",["function"==typeof(l=void 0!==s.b&&s.b)&&l||Object])],i);var l},MHwY:function(e,n,t){"use strict";var r=(t("wQAS"),t("aR8+"));t.d(n,"a",function(){return r.a})},"PAy/":function(e,n){e.exports='<div class="animated fadeIn">\r\n    <div class="offset-md-1">\r\n        <div class="row">\r\n            <div class="col-md-3">\r\n                <div style="background:#e0e9eb" class="card">\r\n                    <div class="card-block">\r\n                        <canvas id="myCanvas" width="170" height="200" style="border:1px solid #d3d3d3;"></canvas>\r\n                        <p></p>\r\n                        <h5 style="color:darkblue"><b>Jane Goldman</b></h5>\r\n                        <h6>Main applicant</h6>\r\n                        <br>\r\n                        <h6 class="text-danger"><i class="glyphicons glyphicons-alert"></i><u>Under compliance investigation</u></h6>\r\n                        <br>\r\n                        <h6 class="text-danger"><i class="glyphicons glyphicons-alert"></i><u>Naderia es ut aut ea doles qui pellaborest explibus</u></h6>\r\n                        <br>\r\n                        <h6 class="text-danger"><i class="glyphicons glyphicons-alert"></i><u>History of violence</u></h6>\r\n                        <br>\r\n                        <div class="row">\r\n                            <h6 class="pl-3">Aliases(2)</h6>\r\n                            <div class="offset-md-5">\r\n                                <div class="btn-group btn-group-md float-right" dropdown>\r\n                                    <button type="button" class=" text-primary btn btn-transparent dropdown-toggle p-0" style="color:black;" dropdownToggle>\r\n                                    Expand       \r\n                            </button>\r\n                                    <div class="dropdown-menu" *dropdownMenu>\r\n                                        <a class="dropdown-item">Option 1</a>\r\n                                        <a class="dropdown-item">Option 2</a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <br>\r\n                        <h6><b>Nationality</b></h6>\r\n                        <h6>British</h6>\r\n                        <br>\r\n                        <h6><b>Date of birth</b></h6>\r\n                        <h6>22 Jan 1990</h6>\r\n                        <br>\r\n                        <h6><b>Gender</b></h6>\r\n                        <h6>Female</h6>\r\n                        <br>\r\n                        <h6><b>Passport</b></h6>\r\n                        <h6>432432488848</h6>\r\n                        <br>\r\n                        <h6><b>Lorem Ipsum Number</b></h6>\r\n                        <h6>ZU1457367</h6>\r\n                        <br>\r\n                        <h6><b>Lorem Ipsum/kdslk fjj</b></h6>\r\n                        <h6>51937</h6>\r\n                        <br>\r\n                        <h6><b>Lorem ipsum</b></h6>\r\n                        <h6>34234324343</h6>\r\n                        <br>\r\n                        <h6><b>Address</b></h6>\r\n                        <h6>Lorem ipsum</h6>\r\n                        <br>\r\n                        <h6><b>Telephone</b></h6>\r\n                        <h6>-</h6>\r\n                        <br>\r\n                        <br>\r\n                        <h6><b>Sponsor organisation name</b></h6>\r\n                        <h6>Lorem ipsum sit dolor</h6>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class="col-md-9">\r\n                <div class="pl-4">\r\n\r\n                    <h4 style="color:black"><b>A case name and service delivery name goes here</b></h4>\r\n                    <br>\r\n                    <h2 style="color:darkviolet"><b>A task name goes here</b></h2>\r\n                    <p>Last activity: J Bloggs, 27 Feb 2006 14:33</p>\r\n                    <p></p>\r\n                    <h4 style="color:black"><b>A page title goes in here</b></h4>\r\n                    <br>\r\n                    <br>\r\n                    <div class="row">\r\n                        <button style="color:darkblue" type="button" class="btn btn-outline-secondary"><b>Exit task</b></button>\r\n                        <div class="offset-md-3">\r\n                            <button style="color:darkblue" type="button" class="btn btn-secondary-color"><b>Save progress</b></button>\r\n                            <button type="button" class="btn btn-primary"><b>Save and continue</b></button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <br>\r\n                <br>\r\n\r\n                <div class="col-md-11">\r\n\r\n                    <div class="card">\r\n                        <div class="card-block">\r\n                            <div class="row">\r\n                                <h6 class="pl-3">NOTA address</h6>\r\n                                <div class="offset-md-3">\r\n                                    <h6>Valid address</h6>\r\n                                </div>\r\n                            </div>\r\n                            <h6>23 Trews Street</h6>\r\n                            <h6>Edinburgh</h6>\r\n                            <h6>EH2 3RT</h6>\r\n                        </div>\r\n                    </div>\r\n                    <div class="card">\r\n                        <div class="card-block">\r\n                            <h6>UPRN address</h6>\r\n                            <div class="row">\r\n                                <div>\r\n                                    <h6 class="pl-3">Address line 1</h6>\r\n                                    <h6 class="pl-3">Address line 2</h6>\r\n                                    <h6 class="pl-3">Address line 3</h6>\r\n                                    <h6 class="pl-3">Edinburgh</h6>\r\n                                    <h6 class="pl-3">EH2 3RT</h6>\r\n                                </div>\r\n                                <div class="offset-md-3">\r\n                                    <h5><b>Select an address</b></h5>\r\n                                    <label style="background:#FFCCCB" class="form-control-label" for="select">                      \r\n                    <b>You must select an address or \'Address not listed\'</b>                      \r\n                    </label>\r\n                                    <select id="select" name="select" class="form-control">\r\n                                <option value="0">Select valid address...</option>                           \r\n                                <option value="0" selected>4, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                <option value="1">5, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                <option value="2">6, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                <option value="3">7, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                <option value="0">Address not listed</option>\r\n                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="card">\r\n                        <div class="card-block">\r\n                            <h6>NONE Address</h6>\r\n                            <div class="row">\r\n                                <div>\r\n                                    <h6 class="pl-3">Address line 1</h6>\r\n                                    <h6 class="pl-3">Address line 2</h6>\r\n                                    <h6 class="pl-3">Address line 3</h6>\r\n                                    <h6 class="pl-3">Edinburgh</h6>\r\n                                    <h6 class="pl-3">EH2 3RT</h6>\r\n                                </div>\r\n                                <div class="offset-md-3">\r\n                                    <h5><b>Select an address</b></h5>\r\n                                    <select id="select" name="select" class="form-control">\r\n                                    <option value="0">Select valid address...</option>                           \r\n                                    <option value="0">4, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                    <option value="1">5, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                    <option value="2">6, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                    <option value="3">7, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                    <option value="0" selected>Address not listed</option>\r\n                        </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="card">\r\n                        <div class="card-block">\r\n                            <h6>NULL Address</h6>\r\n                            <div class="row">\r\n                                <div>\r\n                                    <h6 class="pl-3">Address line 1</h6>\r\n                                    <h6 class="pl-3">Address line 2</h6>\r\n                                    <h6 class="pl-3">Address line 3</h6>\r\n                                    <h6 class="pl-3">Edinburgh</h6>\r\n                                    <h6 class="pl-3">EH2 3RT</h6>\r\n                                </div>\r\n                                <div class="offset-md-3">\r\n                                    <h5><b>Select an address</b></h5>\r\n                                    <select id="select" name="select" class="form-control">\r\n                                        <option value="0" selected>Select valid address...</option>                           \r\n                                        <option value="0">4, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                        <option value="1">5, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                        <option value="2">6, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                        <option value="3">7, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                                        <option value="0">Address not listed</option>\r\n                            </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class="card">\r\n                        <div class="card-block">\r\n                            <h6>Not selected yet</h6>\r\n                            <div class="row">\r\n                                <div>\r\n                                    <h6 class="pl-3">Address line 1</h6>\r\n                                    <h6 class="pl-3">Address line 2</h6>\r\n                                    <h6 class="pl-3">23 Trews Street</h6>\r\n                                    <h6 class="pl-3">Edinburgh</h6>\r\n                                    <h6 class="pl-3">EH2 3RT</h6>\r\n                                </div>\r\n                                <div class="offset-md-3">\r\n                                    <h5><b>Select an address</b></h5>\r\n                                    <select id="select" name="select" class="form-control">\r\n                        <option value="0" selected>Select valid address...</option>                           \r\n                        <option value="0">4, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                        <option value="1">5, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                        <option value="2">6, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                        <option value="3">7, LUKIN DRIVE, NURSLING, SOUTHAMPTON</option>\r\n                        <option value="0">Address not listed</option>\r\n                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <br>\r\n                    <div class="row">\r\n                        <div class="pl-3">\r\n                            <button style="color:darkblue" type="button" class="btn btn-outline-secondary"><b>Exit task</b></button>\r\n                        </div>\r\n                        <div class="offset-md-3">\r\n                            <button style="color:darkblue" type="button" class="btn btn-secondary-color"><b>Save progress</b></button>\r\n                            <button type="button" class="btn btn-primary"><b>Save and continue</b></button>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <br>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'},"TU+8":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("GWWY"),s=(t.n(r),t("f/CF")),o=(t.n(s),t("KvE9")),a=(t.n(o),t("zbpw")),i=(t.n(a),t("NzKl")),l=(t.n(i),t("ajBu")),c=(t.n(l),t("feEK")),d=(t.n(c),t("r24B")),u=(t.n(d),t("pEMT")),p=(t.n(u),t("jOBH")),f=(t.n(p),t("Rjcp")),b=(t.n(f),t("W8w6")),v=(t.n(b),t("yJzT")),h=(t.n(v),t("/wY1")),m=(t.n(h),t("+iEx")),g=(t.n(m),t("eFQL"));t.n(g)},"aR8+":function(e,n,t){"use strict";var r=t("/oeL"),s=t("fc+i"),o=t("qbdv"),a=t("wQAS"),i=t("ZBFC"),l=t("bqRb"),c=t("345u"),d=t("7mm+"),u=t("z4Ee"),p=t("lB00"),f=t("jHMo"),b=t("CPp0"),v=t("bm2B"),h=t("WYiA"),m=t("ewrg"),g=(t.n(m),t("fL27")),y=t("+TzR"),j=t("L4sf"),R=t("BGN2");t.d(n,"a",function(){return N});var O=this&&this.__decorate||function(e,n,t,r){var s,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(n,t,a):s(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},N=function(){function e(){}return e}();N=O([t.i(r.NgModule)({imports:[s.BrowserModule,f.a,i.a.forRoot(),l.a,b.a,o.CommonModule,v.ReactiveFormsModule,v.FormsModule,m.SelectModule,y.a,g.a,h.a.forRoot()],declarations:[a.a,j.a,R.a,c.a,p.a,d.a,u.a],providers:[{provide:o.LocationStrategy,useClass:o.HashLocationStrategy}],bootstrap:[a.a]})],N)},cDNt:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=(t("TU+8"),t("Qa4U")),s=t("/oeL"),o=t("p5Ee"),a=t("MHwY");o.a.production&&t.i(s.enableProdMode)(),t.i(r.a)().bootstrapModule(a.a)},jHMo:function(e,n,t){"use strict";var r=t("/oeL"),s=t("BkNc"),o=t("L4sf"),a=t("BGN2");t.d(n,"a",function(){return c});var i=this&&this.__decorate||function(e,n,t,r){var s,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(n,t,a):s(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},l=[{path:"",component:o.a,children:[{path:"uIInterviewBoard",component:a.a}]}],c=function(){function e(){}return e}();c=i([t.i(r.NgModule)({imports:[s.d.forRoot(l)],exports:[s.d]})],c)},lB00:function(e,n,t){"use strict";var r=t("/oeL"),s=t("BkNc"),o=t("gbhw");t.n(o);t.d(n,"a",function(){return l});var a=this&&this.__decorate||function(e,n,t,r){var s,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(n,t,a):s(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},i=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},l=function(){function e(e,n){this.router=e,this.route=n}return e.prototype.ngOnInit=function(){var e=this;this.router.events.filter(function(e){return e instanceof s.a}).subscribe(function(n){e.breadcrumbs=[];var t=e.route.root,r="";do{var s=t.children;t=null,s.forEach(function(n){if("primary"===n.outlet){var s=n.snapshot;r+="/"+s.url.map(function(e){return e.path}).join("/"),e.breadcrumbs.push({label:n.snapshot.data,url:r}),t=n}})}while(t)})},e}();l=a([t.i(r.Component)({selector:"app-breadcrumbs",template:'\n  <ng-template ngFor let-breadcrumb [ngForOf]="breadcrumbs" let-last = last>\n    <li class="breadcrumb-item"\n        *ngIf="breadcrumb.label.title&&breadcrumb.url.substring(breadcrumb.url.length-1) == \'/\'||breadcrumb.label.title&&last"\n        [ngClass]="{active: last}">\n      <a *ngIf="!last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</a>\n      <span *ngIf="last" [routerLink]="breadcrumb.url">{{breadcrumb.label.title}}</span>\n    </li>\n  </ng-template>'}),i("design:paramtypes",["function"==typeof(c=void 0!==s.b&&s.b)&&c||Object,"function"==typeof(d=void 0!==s.c&&s.c)&&d||Object])],l);var c,d},n7du:function(e,n){function t(e){throw new Error("Cannot find module '"+e+"'.")}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id="n7du"},p5Ee:function(e,n,t){"use strict";t.d(n,"a",function(){return r});var r={production:!0}},wQAS:function(e,n,t){"use strict";var r=t("/oeL");t.d(n,"a",function(){return o});var s=this&&this.__decorate||function(e,n,t,r){var s,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(n,t,a):s(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},o=function(){function e(){}return e}();o=s([t.i(r.Component)({selector:"body",template:"<router-outlet></router-outlet>"})],o)},xfcI:function(e,n){e.exports='<header class="app-header navbar">\n    <button class="navbar-toggler d-lg-none" type="button" appMobileSidebarToggler>&#9776;</button>\n    <ul class="nav navbar-nav d-md-down-none">\n        <li class="nav-item">\n            <a class="nav-link navbar-toggler" href="#" appSidebarToggler>&#9776;</a>\n        </li>\n        <li class="nav-item">\n\n        </li>\n    </ul>\n    <ul class="nav navbar-nav ml-auto">\n        <li class="nav-item dropdown" dropdown placement="bottom right">\n\n        </li>\n        <li class="nav-item d-md-down-none">\n            \x3c!-- <a class="nav-link navbar-toggler" href="#" appAsideMenuToggler>&#9776;</a>--\x3e\n        </li>\n    </ul>\n</header>\n<div class="app-body">\n    <div class="sidebar">\n        <nav class="sidebar-nav">\n            <ul class="nav">\n                <li class="nav-title">\n                    DashBoard\n                </li>\n                <li class="divider"></li>\n                <li class="nav-item">\n                    <a class="nav-link" routerLinkActive="active" [routerLink]="[\'/uIInterviewBoard\']"><i class="fa fa-dashboard"></i>UI Interview</a>\n                </li>                \n            </ul>\n        </nav>\n    </div>\n\n    \x3c!-- Main content --\x3e\n    <main class="main">\n\n        \x3c!-- Breadcrumb --\x3e\n        <ol class="breadcrumb mb-0">\n            <app-breadcrumbs></app-breadcrumbs>\n        </ol>\n\n        <div class="container-fluid">\n            <router-outlet></router-outlet>\n        </div>\n        \x3c!-- /.conainer-fluid --\x3e\n    </main>\n</div>\n\n<footer class="app-footer">\n</footer>'},z4Ee:function(e,n,t){"use strict";var r=t("/oeL");t.d(n,"a",function(){return a});var s=this&&this.__decorate||function(e,n,t,r){var s,o=arguments.length,a=o<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,n,t,r);else for(var i=e.length-1;i>=0;i--)(s=e[i])&&(a=(o<3?s(a):o>3?s(n,t,a):s(n,t))||a);return o>3&&a&&Object.defineProperty(n,t,a),a},o=this&&this.__metadata||function(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)},a=function(){function e(){}return e.prototype.toggleOpen=function(e){e.preventDefault(),document.querySelector("body").classList.toggle("aside-menu-hidden")},e}();s([t.i(r.HostListener)("click",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],a.prototype,"toggleOpen",null),a=s([t.i(r.Directive)({selector:"[appAsideMenuToggler]"}),o("design:paramtypes",[])],a)}},[0]);