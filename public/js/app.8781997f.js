(function(e){function t(t){for(var n,s,u=t[0],i=t[1],c=t[2],l=0,f=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var i=r[s];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},a={app:0},o=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"d6fbdc08","chunk-2d2086b7":"a4a85293","chunk-2d217357":"a62f99a1","chunk-53279185":"71ed69c0"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=s(e);var c=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(l);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Navbar"),r("div",{staticClass:"container mt-3"},[e.error?r("Errors",{attrs:{msg:e.error}}):e._e(),r("router-view")],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[r("div",{staticClass:"container-fluid"},[r("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[e._v("Navbar")]),e._m(0),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav ml-auto mb-2 mb-lg-0"},[r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link active",attrs:{"aria-current":"page",to:"/"}},[e._v("Home")])],1),r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{"aria-current":"page",to:"/about"}},[e._v("About")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{"aria-current":"page",to:"/login"}},[e._v("Login")])],1),e.isLoggedIn?e._e():r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{"aria-current":"page",to:"/register"}},[e._v("Register")])],1),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("router-link",{staticClass:"nav-link",attrs:{"aria-current":"page",to:"/profile"}},[e._v("Profile")])],1):e._e(),e.isLoggedIn?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{"aria-current":"page",to:"/logout"},on:{click:function(t){return t.preventDefault(),e.logout.apply(null,arguments)}}},[e._v("Logout")])]):e._e()])])],1)])},u=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],i=r("5530"),c=r("2f62"),l={computed:Object(i["a"])({},Object(c["c"])(["isLoggedIn"])),methods:Object(i["a"])(Object(i["a"])({},Object(c["b"])(["logout"])),{},{logoutUser:function(){this.logout()}})},p=l,f=r("2877"),g=Object(f["a"])(p,s,u,!1,null,null,null),d=g.exports,m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"alert alert-danger alert-dismissible fade show",attrs:{role:"alert"}},[r("strong",[e._v("Error!")]),e._v(" "+e._s(e.msg)+". "),r("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"alert","aria-label":"Close"}})])},v=[],b={props:["msg"]},h=b,_=Object(f["a"])(h,m,v,!1,null,null,null),k=_.exports,w={components:{Navbar:d,Errors:k},computed:Object(c["c"])(["error"])},C=w,y=(r("034f"),Object(f["a"])(C,a,o,!1,null,null,null)),j=y.exports,O=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},S=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("This is an Home page")])])}],E={name:"Home",components:{}},L=E,I=Object(f["a"])(L,x,S,!1,null,null,null),P=I.exports,R=r("1da1"),A=(r("96cf"),r("bc3a")),$=r.n(A),T={token:localStorage.getItem("token")||"",user:{},status:"",error:null},q={login_success:function(e,t,r){e.token=t,e.user=r,e.status="success",e.error=null},login_error:function(e,t){e.error=t.response.data.message},register_success:function(e){e.status="success",e.error=null},register_error:function(e,t){e.error=t.response.data.message},logout_success:function(e){e.token="",e.user={},e.status="",e.error=null},logout_error:function(e,t){e.error=t.response.data.message},profile_success:function(e,t){e.status="success",e.user=t,e.error=null},profile_error:function(e,t){e.error=t.response.data.message}},H={login:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a,o,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,$.a.post("/api/users/login",t);case 4:if(a=r.sent,"success"!==a.data.status){r.next=13;break}return o=a.data.user,s=a.data.token,r.next=10,localStorage.setItem("token",s);case 10:$.a.defaults.headers.common["Authorization"]=s,n("login_success",s,o),U.push("/profile");case 13:return r.abrupt("return",a);case 16:return r.prev=16,r.t0=r["catch"](1),n("login_error",r.t0),r.abrupt("return");case 20:case"end":return r.stop()}}),r,null,[[1,16]])})))()},register:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,$.a.post("/api/users/register",t);case 4:return a=r.sent,"success"===a.data.status&&(n("register_success"),U.push("/login")),r.abrupt("return",a);case 9:return r.prev=9,r.t0=r["catch"](1),n("register_error",r.t0),r.abrupt("return");case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()},logout:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,localStorage.removeItem("token");case 4:delete $.a.defaults.headers.common["Authorization"],r("logout_success"),U.push("/login"),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),r("logout_error",t.t0);case 12:return t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()},getProfile:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.prev=1,t.next=4,$.a.get("/api/users/profile");case 4:return n=t.sent,r("profile_success",n.data.user),t.abrupt("return",n);case 9:return t.prev=9,t.t0=t["catch"](1),r("profile_error",t.t0),t.abrupt("return");case 13:case"end":return t.stop()}}),t,null,[[1,9]])})))()}},M={isLoggedIn:function(e){return!!e.token},authState:function(e){return e.status},user:function(e){return e.user},error:function(e){return e.error}},z={getters:M,state:T,mutations:q,actions:H};n["a"].use(c["a"]);var G=new c["a"].Store({state:{},mutations:{},actions:{},modules:{Auth:z}});n["a"].use(O["a"]);var N=[{path:"/",name:"Home",component:P},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/register",name:"Register",component:function(){return r.e("chunk-53279185").then(r.bind(null,"73cf"))},meta:{requireGuest:!0}},{path:"/login",name:"Login",component:function(){return r.e("chunk-2d2086b7").then(r.bind(null,"a55b"))},meta:{requireGuest:!0}},{path:"/profile",name:"Profile",component:function(){return r.e("chunk-2d217357").then(r.bind(null,"c66d"))},meta:{requireAuth:!0}}],J=new O["a"]({mode:"history",base:"/",routes:N}),D=function(e,t,r){e.matched.some((function(e){return e.meta.requireAuth}))?G.getters.isLoggedIn?r():r("/login"):e.matched.some((function(e){return e.meta.requireGuest}))&&G.getters.isLoggedIn?r("/profile"):r()};J.beforeEach(D);var U=J;n["a"].config.productionTip=!1,n["a"].prototype.$http=$.a;var B=localStorage.getItem("token");B&&(n["a"].prototype.$http.defaults.headers.common["Authorization"]=B),new n["a"]({router:U,store:G,render:function(e){return e(j)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.8781997f.js.map