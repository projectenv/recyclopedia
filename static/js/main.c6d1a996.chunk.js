(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[2],{11:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"f",(function(){return g}));var r,a=n(2),c=n.n(a),i=n(3),o=n(7),s=n(31),u=n(13);!function(e){e[e.NotLoggedIn=0]="NotLoggedIn",e[e.Anonymous=1]="Anonymous",e[e.User=2]="User",e[e.Admin=3]="Admin"}(r||(r={}));var l={loginType:r.NotLoggedIn,accountDetails:{email:"",password:""}};function d(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(c.a.mark((function e(t){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=u.a.application)||void 0===n?void 0:n.emailPasswordAuth.registerUser(t.email,t.password);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){return h.apply(this,arguments)}function h(){return(h=Object(i.a)(c.a.mark((function e(t){var n,a,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?s.b.emailPassword(t.email,t.password):s.b.anonymous(),a=void 0,e.prev=2,e.next=5,null===(i=u.a.application)||void 0===i?void 0:i.logIn(n);case 5:return a=e.sent,e.abrupt("return",{type:r.User,user:a});case 9:return e.prev=9,e.t0=e.catch(2),e.next=13,null===(o=u.a.application)||void 0===o?void 0:o.logIn(s.b.anonymous());case 13:return a=e.sent,e.abrupt("return",{type:r.Anonymous,user:a});case 15:return e.prev=15,u.a.applicationUser=a,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,9,15,18]])})))).apply(this,arguments)}var p=Object(o.b)("admin/loginWithEmailAndPassword",function(){var e=Object(i.a)(c.a.mark((function e(t){var n,a,i,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b(t);case 2:if(n=e.sent,a=n.type,i=n.user,a===r.Anonymous){e.next=8;break}return o="admin"===(null===i||void 0===i?void 0:i.customData.status)&&r.Admin,e.abrupt("return",{accountDetails:t,type:o||a});case 8:return e.abrupt("return",{type:a});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(o.d)({name:"admin",initialState:l,reducers:{logout:function(e){e.loginType=r.NotLoggedIn}},extraReducers:function(e){e.addCase(p.fulfilled,(function(e,t){var n=t.payload;switch(n.type){case r.User:case r.Admin:e.accountDetails=n.accountDetails,e.loginType=n.type}}))}}),m=j.actions.logout;t.b=j.reducer;var v=function(e){return e.admin},g=Object(o.c)(v,(function(e){return e.loginType}));Object(o.c)(v,(function(e){return e.accountDetails}))},13:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"h",(function(){return g})),n.d(t,"e",(function(){return O})),n.d(t,"m",(function(){return x})),n.d(t,"l",(function(){return w})),n.d(t,"j",(function(){return A})),n.d(t,"k",(function(){return k})),n.d(t,"g",(function(){return R})),n.d(t,"i",(function(){return N}));var r=n(4),a=n(2),c=n.n(a),i=n(3),o=n(7),s=n(11),u=n(17),l=n(31),d=n(19),f={application:null,applicationUser:null};function b(e){return function(){var t=Object(i.a)(c.a.mark((function t(n,r){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!f.applicationUser){t.next=7;break}return t.next=4,e(f.applicationUser,n,r);case 4:return t.abrupt("return",t.sent);case 7:throw new Error("No user? This is some real bad news");case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),console.error("Call with user error: ",t.t0),t.abrupt("return",r.rejectWithValue(t.t0.response.data));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}var h=Object(o.b)("articles/initApi",function(){var e=Object(i.a)(c.a.mark((function e(t,n){var r,a,i,o,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,a=n.dispatch,i=n.rejectWithValue,o=r(),e.prev=2,f.application=new l.a({id:t}),u=o.admin.accountDetails,e.next=7,a(Object(s.c)(u));case 7:a(p(void 0)),a(j(void 0)),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(2),console.error("Failed to login because: ",e.t0),e.abrupt("return",i(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}()),p=Object(o.b)("articles/queryForArticles",b(function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.functions.getAllArticles();case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),j=Object(o.b)("articles/queryForAllTags",b(function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.functions.getAllTags();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),m=Object(o.b)("articles/migrateArticle",b(function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){var a,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.dispatch,e.next=3,t.functions.migrateArticle(n.name,n.newName);case 3:return i=e.sent,a(p(void 0)),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),v=Object(o.b)("articles/deleteArticle",b(function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.dispatch,e.next=3,t.functions.removeArticle(n);case 3:a(p(void 0));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),g=Object(o.b)("articles/restoreArticle",b(function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.dispatch,e.next=3,t.functions.restoreArticle(n);case 3:a(p(void 0));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),O=Object(o.b)("articles/insertArticle",b(function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.dispatch,e.next=3,t.functions.createOrUpdateArticle(n);case 3:a(p(void 0));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),x=Object(o.b)("articles/setFeaturedArticle",b(function(){var e=Object(i.a)(c.a.mark((function e(t,n,r){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.dispatch,e.next=3,t.functions.setFeaturedArticle(n);case 3:a(p(void 0));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),y=Object(o.d)({name:"api",initialState:{status:"idle",articlesData:{featuredArticle:null,articles:[],recycledArticles:[]},allTags:[]},reducers:{},extraReducers:function(e){e.addCase(h.pending,(function(e){e.status="loading"})).addCase(h.rejected,(function(e){e.status="failed"})).addCase(h.fulfilled,(function(e){e.status="succeed"})).addCase(p.fulfilled,(function(e,t){e.articlesData=t.payload})).addCase(j.fulfilled,(function(e,t){e.allTags=t.payload.slice(0),Object(d.g)(d.a.General,"Loaded Tags: ",e.allTags)}))}});t.b=y.reducer;var _=function(e){return e.articles},w=Object(o.c)(_,(function(e){return e.status})),A=Object(o.c)(_,(function(e){return e.articlesData})),k=Object(o.c)(_,(function(e){return e.articlesData.featuredArticle}));function R(){var e=Object(u.b)(s.f),t=Object(u.b)(A);if(e===s.a.Admin)return t;var n=t.articles.filter((function(e){return!e.draftStatus}));return Object(r.a)(Object(r.a)({},t),{},{articles:n})}var N=Object(o.c)(_,(function(e){return e.allTags.slice(0)}))},153:function(e,t,n){"use strict";n.r(t);n(81);var r,a,c=n(0),i=n.n(c),o=n(44),s=n.n(o),u=n(14),l=n(73),d=n(37),f=n(15),b=n(7),h=n(23),p=n(74),j=n.n(p),m=n(13),v=n(11),g={key:"root",storage:j.a,whitelist:["admin"]},O=Object(f.b)({articles:m.b,admin:v.b}),x=Object(h.g)(g,O),y=Object(b.a)({reducer:x,middleware:function(e){return e({serializableCheck:{ignoredActions:[h.a,h.f,h.b,h.c,h.d,h.e,"articles/queryForArticles/fulfilled"],ignoredPaths:["articles.articlesData"]}})}}),_=Object(h.h)(y),w=n(42),A=n.n(w),k=n(6),R=n(17),N=n(47),C=n(19),L=n(38),T=n(55),I=n(56),D=n(1),E=I.a.div(r||(r=Object(T.a)(["\n  @keyframes sk-stretchdelay {\n    0%, 40%, 100% { \n      transform: scaleY(0.4);\n    }  20% { \n      transform: scaleY(1.0);\n    }\n  }\n"]))),S=I.a.div(a||(a=Object(T.a)(["\n  display: inline-block;\n  background-color: ",";\n  height: ","px;\n  width: ","px;\n  margin: 0 ","px;\n\n  animation: sk-stretchdelay ","s infinite ease-in-out;\n  animation-delay: -","s;\n"])),(function(e){return e.color}),(function(e){return e.height}),(function(e){return e.width}),(function(e){return e.width/3}),(function(e){return.7+e.num/10}),(function(e){return 1.1-e.index/10}));function M(e){var t=e.num,n=void 0===t?5:t,r=e.height,a=void 0===r?50:r,c=e.width,i=void 0===c?6:c,o=e.color,s=void 0===o?"white":o;return Object(D.jsx)(E,{children:Object(L.a)(Array(n)).map((function(e,t){return Object(D.jsx)(S,{index:t,num:n,color:s,height:a,width:i},t)}))})}var F=n(43),B=n.n(F);function U(e,t){if(0===t.length||function(e){for(var t=0;t<e.length;){if(" "!==e[t])return!1;t++}return!0}(t))return{matchScore:-9999,validMatch:!1};for(var n=0,r=0,a=0,c=e.length===t.length,i=0;n<e.length&&r<t.length;){for(;(null===(o=e[n])||void 0===o?void 0:o.toLowerCase())===(null===(s=t[r])||void 0===s?void 0:s.toLowerCase());){var o,s;e[n]===t[r]&&(a+=10),n===r?a+=15:(a+=2,c=!1),i++,r++}a-=1,n++}return r>=t.length&&(a+=10,c&&(a+=20)),0===i&&(a-=50),{matchScore:a,validMatch:i>0}}function P(e,t){return e.map((function(e){return{entry:e,matchScore:U(e.name,t)}})).filter((function(e){return e.matchScore.validMatch})).sort((function(e,t){return t.matchScore.matchScore-e.matchScore.matchScore})).map((function(e){return e.entry}))}var H=n(12),G=n(26),W=n.n(G),z=n(9),Y=n(32),q=n.n(Y),J=function(e,t,n,r){var a=Object(c.useRef)(n);Object(c.useEffect)((function(){a.current=n}),[n]),Object(c.useEffect)((function(){if(e&&e.addEventListener){var n=function(e){return a.current(e)};return e.addEventListener(t,n,r),function(){return e.removeEventListener(t,n,r)}}}),[e,t,r])};function V(e){var t=e.isSearchResultsOpened,n=e.returnInput,r=Object(c.useState)(""),a=Object(H.a)(r,2),i=a[0],o=a[1],s=Object(c.useRef)(null),u=Object(c.useRef)((new Date).getTime());J(document.body,"keydown",(function(e){var t;"/"===e.key&&(e.preventDefault(),null===(t=s.current)||void 0===t||t.focus())}));return Object(D.jsxs)("div",{className:q()(W.a.searchbar,Object(z.a)({},W.a.focused,s&&t)),onFocus:function(){o((function(e){return n(e),e}))},children:[Object(D.jsx)("input",{autoFocus:!0,type:"text",placeholder:"Search",ref:s,value:i,onChange:function(e){o(e.target.value),function(e){u.current=(new Date).getTime(),setTimeout((function(){(new Date).getTime()-u.current>=500&&n(e)}),500)}(e.target.value)}}),i&&Object(D.jsx)("div",{id:W.a.searchbarControl,children:Object(D.jsx)("div",{id:W.a.clear,className:"material-icons",onClick:function(){o(""),s.current&&s.current.focus()},children:"clear"})})]})}function K(e,t){return e.length>0?Object(D.jsx)("div",{className:W.a.searchResults,children:e.slice(0,5).map((function(e){var n=e.name;return Object(D.jsx)(u.b,{to:Object(C.m)(n),onClick:function(){return t([])},children:n},n)}))}):null}var Q=function(e){var t=e.searchFunction,n=e.renderFunction,r=Object(m.g)(),a=Object(c.useState)([]),i=Object(H.a)(a,2),o=i[0],s=i[1],u=Object(c.useRef)(null);return Object(D.jsxs)("div",{ref:u,onBlur:function(){var e;(null===(e=u.current)||void 0===e?void 0:e.matches(":focus-within"))||s([])},children:[Object(D.jsx)(V,{isSearchResultsOpened:0!==o.length,returnInput:function(e){s(e?t(r.articles,e):[])}}),n(o,s)]})},Z=n(4),X=n(33),$=n(22),ee=n.n($);var te=function(e){var t,n=e.sidebarToggle,r=e.children,a=e.className,i=Object(X.a)(e,["sidebarToggle","children","className"]),o=Object(c.useRef)(null),s=Object(c.useState)(!0),u=Object(H.a)(s,2),l=u[0],d=u[1],f=Object(c.useState)(!1),b=Object(H.a)(f,2),h=b[0],p=b[1],j=function(){var e,t=o.current;t&&(null===(e=t.parentElement)||void 0===e?void 0:e.parentElement)&&(t.getBoundingClientRect().width>=t.parentElement.parentElement.getBoundingClientRect().width?d(!0):d(!1))};return Object(c.useEffect)((function(){j()}),[r]),J(window,"resize",(function(){j()})),Object(D.jsxs)("nav",Object(Z.a)(Object(Z.a)({className:q()(ee.a.nav,a)},i),{},{children:[l&&n(p),Object(D.jsx)("div",{className:q()(ee.a.overlay,(t={},Object(z.a)(t,ee.a.shrunk,l),Object(z.a)(t,ee.a.opened,h),t)),onClick:function(e){var t=e.target;t===e.currentTarget&&(t.classList.add(ee.a.slideOut),t.addEventListener("animationend",(function(){t.classList.contains(ee.a.slideOut)&&(t.classList.remove(ee.a.slideOut),p(!1))})))},children:Object(D.jsx)("div",{ref:o,className:ee.a.links,children:r})})]}))},ne=function(){var e=Object(R.a)(),t=Object(R.b)(v.f);return Object(D.jsxs)("header",{id:B.a.header,children:[Object(D.jsx)(u.b,{to:"/",children:Object(D.jsx)("div",{id:B.a.logoDiv})}),Object(D.jsx)(Q,{searchFunction:P,renderFunction:K}),Object(D.jsxs)(te,{id:B.a.navbar,sidebarToggle:function(e){return Object(D.jsx)("button",{className:"material-icons "+B.a.menu,onClick:function(){return e(!0)},children:"menu"})},children:[Object(D.jsx)(u.b,{to:"/index",children:"Index"}),t!==v.a.Anonymous&&t!==v.a.NotLoggedIn?Object(D.jsxs)(D.Fragment,{children:[t===v.a.Admin?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.b,{to:"/admin/recycling_bin",children:"Recycling Bin"}),Object(D.jsx)(u.b,{to:"/admin",children:"Create New Article"})]}):Object(D.jsx)(D.Fragment,{}),Object(D.jsx)("button",{onClick:function(){e(Object(v.d)())},children:"Logout"})]}):Object(D.jsx)(u.b,{to:"/account",children:"Login"})]})]})},re=n(49),ae=n.n(re),ce=n(63);function ie(e){var t=e.previewTitle,n=e.article;return n?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(u.b,{to:Object(C.m)(n.name),children:Object(D.jsx)("h2",{children:t})}),Object(D.jsxs)("div",{className:ae.a.articleDisplay,children:[Object(D.jsx)("h2",{children:n.name}),Object(D.jsx)(ce.a,{className:ae.a.searchResult,children:"".concat(n.content.substr(0,800).replaceAll(/(@@.*)|(@@.*@@)/g,""))})]})]}):Object(D.jsx)(D.Fragment,{})}function oe(e){var t=e.articlesData.articles,n=t.length?Object(C.h)(t):{name:"no article name",content:"no articles"},r=Object(R.b)(m.k),a=t.find((function(e){return e.name===r}));return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ie,{previewTitle:"Featured Article",article:a}),Object(D.jsx)(ie,{previewTitle:"Random Article",article:n})]})}var se=function(e){var t=e.articlesData;return Object(D.jsxs)("div",{id:ae.a.homepage,children:[Object(D.jsx)("h1",{children:"Welcome to Recyclopedia"}),Object(D.jsx)("p",{children:"Recyclopedia is a freely accessible wiki designed to be a complete source for environmentally friendly actions. While it is primarily meant to be a comprehensive source of ways to recycle items appropriately. It may also contain other methods of sustaining an environmentally friendly lifestyle."}),Object(D.jsxs)("p",{children:["This is developed by ",Object(D.jsx)("a",{href:"https://www.projectenv.org/",children:"The Environment Project"})]}),Object(D.jsx)(oe,{articlesData:t})]})},ue=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(5),n.e(0),n.e(6)]).then(n.bind(null,190))})),le=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,192))})),de=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,188))})),fe=Object(c.lazy)((function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,179))})),be=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,191))}));function he(){var e=Object(R.b)(v.f),t=Object(m.g)();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(ne,{}),Object(D.jsx)("main",{id:A.a.main,children:Object(D.jsxs)(k.d,{children:[Object(D.jsx)(k.b,{exact:!0,path:"/",children:Object(D.jsx)(se,{articlesData:t})}),Object(D.jsxs)(c.Suspense,{fallback:Object(D.jsx)("p",{children:"Please wait! Loading Recyclopedia..."}),children:[Object(D.jsx)(k.b,{exact:!0,path:"/index",children:Object(D.jsx)(le,{})}),Object(D.jsx)(k.b,{path:"/account",children:Object(D.jsx)(be,{})}),Object(D.jsx)(k.b,{exact:!0,path:"/admin",children:e===v.a.Admin?Object(D.jsx)(fe,{currentArticle:void 0}):Object(D.jsx)(k.a,{to:"/"})}),Object(D.jsx)(k.b,{exact:!0,path:"/admin/recycling_bin/",children:Object(D.jsx)(de,{})}),e===v.a.Admin?t.recycledArticles.map((function(e){return Object(D.jsx)(k.b,{exact:!0,path:"/admin/recycling_bin"+Object(C.m)(e.name),children:Object(D.jsx)(ue,{inRecycling:!0,article:e})},e.name)})):Object(D.jsx)(D.Fragment,{}),t.articles.map((function(e){return Object(D.jsx)(k.b,{exact:!0,path:Object(C.m)(e.name),children:Object(D.jsx)(ue,{inRecycling:!1,article:e})},e.name)}))]}),Object(D.jsx)(k.b,{path:"*",children:"404"})]})})]})}var pe=function(){var e=Object(R.a)();Object(c.useEffect)((function(){e(Object(m.d)(N.a.RECYCLOPEDIA_APPLICATION_ID))}),[e]);var t=Object(R.b)(m.l);return"failed"===t?Object(D.jsxs)("div",{id:A.a.errorScreen,children:[Object(D.jsx)("div",{className:A.a.errorImg}),Object(D.jsx)("p",{children:"MongoDB is probably offline. Crap..."})]}):"succeed"===t?Object(D.jsx)(he,{}):Object(D.jsxs)("div",{id:A.a.loadingScreen,children:[Object(D.jsx)(M,{color:"black"}),Object(D.jsx)("p",{children:"Please wait! Loading Recyclopedia..."})]})};s.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(d.a,{store:y,children:Object(D.jsx)(l.a,{persistor:_,children:Object(D.jsx)(u.a,{basename:"/recyclopedia",children:Object(D.jsx)(pe,{})})})})}),document.getElementById("root"))},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(37),a=function(){return Object(r.b)()},c=r.c},19:function(e,t,n){"use strict";n.d(t,"m",(function(){return l})),n.d(t,"l",(function(){return d})),n.d(t,"i",(function(){return b})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return j})),n.d(t,"h",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return x})),n.d(t,"k",(function(){return w})),n.d(t,"j",(function(){return A})),n.d(t,"a",(function(){return y})),n.d(t,"g",(function(){return k}));var r=n(2),a=n.n(r),c=n(29),i=n(4),o=n(3),s=(n(0),n(64)),u=n(47),l=function(e){return"/".concat(e.toLowerCase().trim().replace(/ +/g,"_"))};function d(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(a.a.mark((function e(t){var n,r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t),600,r="https://api.imgbb.com/1/upload?expiration".concat(600,"&key=").concat(u.a.IMGBB_KEY),console.log(r),e.next=7,fetch(r,{method:"POST",body:n});case 7:return c=e.sent,console.log("waiting..."),e.next=11,c.json();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){return h.apply(this,arguments)}function h(){return(h=Object(o.a)(a.a.mark((function e(t,n){var r,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t,(c=document.createElement("img")).src=URL.createObjectURL(r),console.log("attempting to load: ",r),c.onload=Object(o.a)(a.a.mark((function e(){var t,r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.createElement("canvas"),(r=t.getContext("2d"))?(t.width=c.width,t.height=c.height,r.drawImage(c,0,0),i=t.toDataURL().split(",")[1],console.log("image data retrieved"),n(i)):console.log("null canvas?");case 3:case"end":return e.stop()}}),e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,n){var r=Object(i.a)({},e);return r[t]=n(e[t]),r}function j(e,t,n){if(t.length>1){var r=Object(i.a)({},e);return r[t[0]]=j(r[t[0]],t.slice(1),n),r}return p(e,t[0],n)}function m(e){return e[Math.floor(Math.random()*e.length)]}function v(e){for(;e.classList.length>0;)e.classList.remove(e.classList.item(0)||"")}function g(e,t){v(e),console.log(e.classList);var n,r=Object(c.a)(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;e.classList.add(a)}}catch(i){r.e(i)}finally{r.f()}console.log(e.classList)}var O=["BR","BASE","AREA","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function x(e){if(e.nodeType===s.a.Element){var t,n=e,r=Object(c.a)(O);try{for(r.s();!(t=r.n()).done;){var a=t.value;if(n.tagName===a)return!0}}catch(i){r.e(i)}finally{r.f()}}return!1}var y,_=[];function w(){var e=window.getSelection(),t=null===e||void 0===e?void 0:e.getRangeAt(0);t&&(null===e||void 0===e||e.removeRange(t),_.push(t))}function A(){if(_.length){var e=window.getSelection();null===e||void 0===e||e.addRange(_.pop())}}function k(e,t){var n=console.log,r=[],a="";switch(e){case y.Todo:case y.Note:case y.General:e===y.Todo?(a+="%cTODO%c",r.push("background-color: black; color: orange; font-size: 1.2em;","unset: all;")):e===y.Note?(a+="%cNOTE:%c",r.push("background-color: black; color: lightgreen; font-size: 1.2em;","unset: all;")):(a+="%cINFO: %c",r.push("background-color: black; color: white; font-size: 1.2em;","unset: all;")),n=console.log;break;case y.Warning:a+="%cWARNING%c",r.push("background-color: black; color: white; font-size: 1.2em;","unset: all;"),n=console.warn;break;case y.Error:n=console.error,a+="%cERROR!%c",r.push("background-color: black; color: red; font-size: 1.2em;","unset: all;")}a+=t||"";for(var c=arguments.length,i=new Array(c>2?c-2:0),o=2;o<c;o++)i[o-2]=arguments[o];for(var s=0,u=i;s<u.length;s++){var l=u[s];r.push(l)}n(a,r)}!function(e){e[e.General=0]="General",e[e.Warning=1]="Warning",e[e.Error=2]="Error",e[e.Todo=3]="Todo",e[e.Note=4]="Note"}(y||(y={}))},20:function(e,t,n){e.exports={articleControls:"Article_articleControls__95Evd",deleteBtn:"Article_deleteBtn__1sdHc",title:"Article_title__G_BGG",article:"Article_article__3AVYo",floatCenter:"Article_floatCenter__1RUh-",floatLeft:"Article_floatLeft__2IJ3p",floatRight:"Article_floatRight__3pqbI",noWrapAroundText:"Article_noWrapAroundText__2dudq",captionBox:"Article_captionBox__1tZ2s",captionImagePreview:"Article_captionImagePreview__3saqr",captionBoxInner:"Article_captionBoxInner__ZRS_C"}},22:function(e,t,n){e.exports={nav:"ResponsiveNav_nav__zeHnk",links:"ResponsiveNav_links__15CAz",overlay:"ResponsiveNav_overlay__1IidR",shrunk:"ResponsiveNav_shrunk__2OMOW",opened:"ResponsiveNav_opened__3QRzf",slideIn:"ResponsiveNav_slideIn__2CQLm",slideOut:"ResponsiveNav_slideOut__3HVvW"}},26:function(e,t,n){e.exports={searchbar:"Searchbar_searchbar__2jLRV",focused:"Searchbar_focused__39Jjj",searchbarControl:"Searchbar_searchbarControl__3mGMh",clear:"Searchbar_clear__3uANO",search:"Searchbar_search__1ch6H",searchResults:"Searchbar_searchResults__18l6O"}},42:function(e,t,n){e.exports={loadingScreen:"App_loadingScreen__J9ldS",errorScreen:"App_errorScreen__3OgjQ",errorImg:"App_errorImg__3nX-t",main:"App_main__2Jffb"}},43:function(e,t,n){e.exports={header:"Header_header__2fJbI",menu:"Header_menu__TfZLm",logoDiv:"Header_logoDiv__1Hf0g"}},47:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={RECYCLOPEDIA_APPLICATION_ID:"recyclopedia-api-uuuus",ADMIN_PASSWORD:"tonyisugly",IMGBB_KEY:"5eba0537206ecc76b4a505e866868853"}},49:function(e,t,n){e.exports={homepage:"Homepage_homepage__2XFyl",articleDisplay:"Homepage_articleDisplay__33qDe"}},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(79),a=n.n(r),c=n(1),i=a()({html:!0,breaks:!0,linkify:!0,typographer:!0}),o=function(e){return i.render(e)};t.a=function(e){var t=e.className,n=e.children;return Object(c.jsx)("div",{className:t,dangerouslySetInnerHTML:{__html:o(n)}})}},64:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return f}));var r=n(20),a=n.n(r);function c(e){return function(t){for(var n=0,r=0,a=0;a<t.length;++a)if(" "!==t[a]){n=a-1;break}for(var c=t.length-1;c>0&&" "===t[c];--c)r++;return"".concat(n>0?" ".repeat(n):"").concat(e).concat(t.trim()).concat(e).concat(r>0?" ".repeat(r):"")}}var i,o,s={B:c("**"),STRONG:c("**"),I:c("_"),EM:c("_"),U:c("__")};function u(e){var t=function(e){return e.classList,e.classList.contains(a.a.captionBox)?o.CaptionedImage:e.classList.contains(a.a.article)?o.Article:o.Unknown}(e);switch(console.log(t),t){case o.CaptionedImage:var n,r=e.children[0],c=e.children[1].children[0],i="";return i+="src = '".concat(r.src,"' |"),i+="width = ".concat(r.width," |"),i+="height = ".concat(r.height," |"),i+="caption = '".concat(null===(n=c.textContent)||void 0===n?void 0:n.trim(),"'"),e.classList.contains(a.a.floatLeft)?i+="| floatingMethod = floatLeft":e.classList.contains(a.a.floatCenter)?i+="| floatingMethod = floatCenter":e.classList.contains(a.a.floatRight)&&(i+="| floatingMethod = floatRight"),"@@ "+i+" @@";case o.Article:return l(e);case o.Unknown:default:return console.error("This is unusual... Unknown Div structure?"),""}}function l(e){for(var t="",n=0,r=Array.from(e.childNodes);n<r.length;n++){t+=d(r[n])}return t}function d(e){if(e.nodeType===i.Text)return e.textContent||"";switch(e.tagName){case"DIV":return u(e);case"A":var t=e,n=t.textContent,r=t.href;return"[".concat(n,"](").concat(r,")");case"IMG":var c=e,o="";return o+="src = '".concat(c.src,"' |"),o+="width = ".concat(c.width," |"),o+="height = ".concat(c.height),c.classList.contains(a.a.floatLeft)?o+="| floatingMethod = floatLeft":c.classList.contains(a.a.floatCenter)?o+="| floatingMethod = floatCenter":c.classList.contains(a.a.floatRight)&&(o+="| floatingMethod = floatRight"),"@@ "+o+" @@\n";case"H6":case"H5":case"H4":case"H3":case"H2":case"H1":return"\n"+"#".repeat(Number(e.tagName[1]))+" "+l(e)+"\n";case"B":case"U":case"I":case"STRONG":case"EM":var d=l(e);if(console.log("TWEEN",d),""!==d)return(y=s[e.tagName],function(){return y?y.apply(void 0,arguments):arguments.length<=0?void 0:arguments[0]})(d);break;case"OL":for(var f="",b=1,h=0,p=Array.from(e.childNodes);h<p.length;h++){var j=p[h];j.nodeType===i.Element&&(f+="".concat(b++,". ")+l(j)+"\n")}return f+"\n";case"UL":for(var m="",v=0,g=Array.from(e.childNodes);v<g.length;v++){var O=g[v];O.nodeType===i.Element&&(m+="- "+l(O)+"\n")}return m+"\n";case"P":var x=Array.from(e.children);return 1===x.length&&"BR"===x[0].tagName?e.outerHTML+"\n":l(e)+"\n\n";default:console.error("Unhandled case: ",e.tagName)}var y;return""}function f(e){return d(e)}!function(e){e[e.Element=1]="Element",e[e.Attribute=2]="Attribute",e[e.Text=3]="Text",e[e.CDataSection=4]="CDataSection",e[e.ProcessingInformation=5]="ProcessingInformation",e[e.Comment=6]="Comment",e[e.Document=7]="Document",e[e.DocumentType=8]="DocumentType",e[e.DocumentFragment=9]="DocumentFragment"}(i||(i={})),function(e){e[e.Unknown=0]="Unknown",e[e.CaptionedImage=1]="CaptionedImage",e[e.Article=2]="Article"}(o||(o={}))},81:function(e,t,n){}},[[153,3,4]]]);
//# sourceMappingURL=main.c6d1a996.chunk.js.map