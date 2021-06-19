(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[2],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"e",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"f",(function(){return g}));var r,c=n(2),a=n.n(c),i=n(3),o=n(7),s=n(30),u=n(13);!function(e){e[e.NotLoggedIn=0]="NotLoggedIn",e[e.Anonymous=1]="Anonymous",e[e.User=2]="User",e[e.Admin=3]="Admin"}(r||(r={}));var l={loginType:r.NotLoggedIn,accountDetails:{email:"",password:""}};function d(e){return f.apply(this,arguments)}function f(){return(f=Object(i.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===(n=u.a.application)||void 0===n?void 0:n.emailPasswordAuth.registerUser(t.email,t.password);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return b.apply(this,arguments)}function b(){return(b=Object(i.a)(a.a.mark((function e(t){var n,c,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t?s.b.emailPassword(t.email,t.password):s.b.anonymous(),c=void 0,e.prev=2,e.next=5,null===(i=u.a.application)||void 0===i?void 0:i.logIn(n);case 5:return c=e.sent,e.abrupt("return",{type:r.User,user:c});case 9:return e.prev=9,e.t0=e.catch(2),e.next=13,null===(o=u.a.application)||void 0===o?void 0:o.logIn(s.b.anonymous());case 13:return c=e.sent,e.abrupt("return",{type:r.Anonymous,user:c});case 15:return e.prev=15,u.a.applicationUser=c,e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[2,9,15,18]])})))).apply(this,arguments)}var p=Object(o.b)("admin/loginWithEmailAndPassword",function(){var e=Object(i.a)(a.a.mark((function e(t){var n,c,i,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:if(n=e.sent,c=n.type,i=n.user,c===r.Anonymous){e.next=8;break}return o="admin"===(null===i||void 0===i?void 0:i.customData.status)&&r.Admin,e.abrupt("return",{accountDetails:t,type:o||c});case 8:return e.abrupt("return",{type:c});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),j=Object(o.d)({name:"admin",initialState:l,reducers:{logout:function(e){e.loginType=r.NotLoggedIn}},extraReducers:function(e){e.addCase(p.fulfilled,(function(e,t){var n=t.payload;switch(n.type){case r.User:case r.Admin:e.accountDetails=n.accountDetails,e.loginType=n.type}}))}}),m=j.actions.logout;t.b=j.reducer;var v=function(e){return e.admin},g=Object(o.c)(v,(function(e){return e.loginType}));Object(o.c)(v,(function(e){return e.accountDetails}))},13:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return b})),n.d(t,"f",(function(){return m})),n.d(t,"c",(function(){return v})),n.d(t,"h",(function(){return g})),n.d(t,"e",(function(){return O})),n.d(t,"k",(function(){return _})),n.d(t,"j",(function(){return w})),n.d(t,"g",(function(){return A})),n.d(t,"i",(function(){return k}));var r=n(5),c=n(2),a=n.n(c),i=n(3),o=n(7),s=n(10),u=n(19),l=n(30),d=n(18),f={application:null,applicationUser:null};function h(e){return function(){var t=Object(i.a)(a.a.mark((function t(n,r){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!f.applicationUser){t.next=7;break}return t.next=4,e(f.applicationUser,n,r);case 4:return t.abrupt("return",t.sent);case 7:throw new Error("No user? This is some real bad news");case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),console.error("Call with user error: ",t.t0),t.abrupt("return",r.rejectWithValue(t.t0.response.data));case 14:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e,n){return t.apply(this,arguments)}}()}var b=Object(o.b)("articles/initApi",function(){var e=Object(i.a)(a.a.mark((function e(t,n){var r,c,i,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,c=n.dispatch,i=n.rejectWithValue,o=r(),e.prev=2,f.application=new l.a({id:t}),u=o.admin.accountDetails,e.next=7,c(Object(s.c)(u));case 7:c(p(void 0)),c(j(void 0)),e.next=15;break;case 11:return e.prev=11,e.t0=e.catch(2),console.error("Failed to login because: ",e.t0),e.abrupt("return",i(e.t0.response.data));case 15:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}()),p=Object(o.b)("articles/queryForArticles",h(function(){var e=Object(i.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.functions.getAllArticles();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),j=Object(o.b)("articles/queryForAllTags",h(function(){var e=Object(i.a)(a.a.mark((function e(t,n,r){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.functions.getAllTags();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),m=Object(o.b)("articles/migrateArticle",h(function(){var e=Object(i.a)(a.a.mark((function e(t,n,r){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.dispatch,e.next=3,t.functions.migrateArticle(n.name,n.newName);case 3:return i=e.sent,c(p(void 0)),e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),v=Object(o.b)("articles/deleteArticle",h(function(){var e=Object(i.a)(a.a.mark((function e(t,n,r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.dispatch,e.next=3,t.functions.removeArticle(n);case 3:c(p(void 0));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),g=Object(o.b)("articles/restoreArticle",h(function(){var e=Object(i.a)(a.a.mark((function e(t,n,r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.dispatch,e.next=3,t.functions.restoreArticle(n);case 3:c(p(void 0));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),O=Object(o.b)("articles/insertArticle",h(function(){var e=Object(i.a)(a.a.mark((function e(t,n,r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.dispatch,e.next=3,t.functions.createOrUpdateArticle(n);case 3:c(p(void 0));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),x=(Object(o.b)("articles/setFeaturedArticle",h(function(){var e=Object(i.a)(a.a.mark((function e(t,n,r){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.dispatch,e.next=3,t.functions.featureArticleByName(n);case 3:c(p(void 0));case 4:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}())),Object(o.d)({name:"api",initialState:{status:"idle",articlesData:{featuredArticle:null,articles:[],recycledArticles:[]},allTags:[]},reducers:{},extraReducers:function(e){e.addCase(b.pending,(function(e){e.status="loading"})).addCase(b.rejected,(function(e){e.status="failed"})).addCase(b.fulfilled,(function(e){e.status="succeed"})).addCase(p.fulfilled,(function(e,t){e.articlesData=t.payload})).addCase(j.fulfilled,(function(e,t){e.allTags=t.payload.slice(0),Object(d.g)(d.a.General,"Loaded Tags: ",e.allTags)}))}}));t.b=x.reducer;var y=function(e){return e.articles},_=Object(o.c)(y,(function(e){return e.status})),w=Object(o.c)(y,(function(e){return e.articlesData}));Object(o.c)(y,(function(e){return e.articlesData.featuredArticle}));function A(){var e=Object(u.b)(s.f),t=Object(u.b)(w);if(e===s.a.Admin)return t;var n=t.articles.filter((function(e){return!e.draftStatus}));return Object(r.a)(Object(r.a)({},t),{},{articles:n})}var k=Object(o.c)(y,(function(e){return e.allTags.slice(0)}))},152:function(e,t,n){"use strict";n.r(t);n(80);var r,c,a=n(0),i=n.n(a),o=n(42),s=n.n(o),u=n(12),l=n(71),d=n(35),f=n(14),h=n(7),b=n(22),p=n(72),j=n.n(p),m=n(13),v=n(10),g={key:"root",storage:j.a,whitelist:["admin"]},O=Object(f.b)({articles:m.b,admin:v.b}),x=Object(b.g)(g,O),y=Object(h.a)({reducer:x,middleware:function(e){return e({serializableCheck:{ignoredActions:[b.a,b.f,b.b,b.c,b.d,b.e,"articles/queryForArticles/fulfilled"],ignoredPaths:["articles.articlesData"]}})}}),_=Object(b.h)(y),w=n(40),A=n.n(w),k=n(6),R=n(19),C=n(45),L=n(18),D=n(36),I=n(53),N=n(54),T=n(1),S=N.a.div(r||(r=Object(I.a)(["\n  @keyframes sk-stretchdelay {\n    0%, 40%, 100% { \n      transform: scaleY(0.4);\n    }  20% { \n      transform: scaleY(1.0);\n    }\n  }\n"]))),E=N.a.div(c||(c=Object(I.a)(["\n  display: inline-block;\n  background-color: ",";\n  height: ","px;\n  width: ","px;\n  margin: 0 ","px;\n\n  animation: sk-stretchdelay ","s infinite ease-in-out;\n  animation-delay: -","s;\n"])),(function(e){return e.color}),(function(e){return e.height}),(function(e){return e.width}),(function(e){return e.width/3}),(function(e){return.7+e.num/10}),(function(e){return 1.1-e.index/10}));function M(e){var t=e.num,n=void 0===t?5:t,r=e.height,c=void 0===r?50:r,a=e.width,i=void 0===a?6:a,o=e.color,s=void 0===o?"white":o;return Object(T.jsx)(S,{children:Object(D.a)(Array(n)).map((function(e,t){return Object(T.jsx)(E,{index:t,num:n,color:s,height:c,width:i},t)}))})}var B=n(31),U=n.n(B);function P(e,t){if(0===t.length||function(e){for(var t=0;t<e.length;){if(" "!==e[t])return!1;t++}return!0}(t))return{matchScore:-9999,validMatch:!1};for(var n=0,r=0,c=0,a=e.length===t.length,i=0;n<e.length&&r<t.length;){for(;(null===(o=e[n])||void 0===o?void 0:o.toLowerCase())===(null===(s=t[r])||void 0===s?void 0:s.toLowerCase());){var o,s;e[n]===t[r]&&(c+=10),n===r?c+=15:(c+=2,a=!1),i++,r++}c-=1,n++}return r>=t.length&&(c+=10,a&&(c+=20)),0===i&&(c-=50),{matchScore:c,validMatch:i>0}}function F(e,t){return e.map((function(e){return{entry:e,matchScore:P(e.name,t)}})).filter((function(e){return e.matchScore.validMatch})).sort((function(e,t){return t.matchScore.matchScore-e.matchScore.matchScore})).map((function(e){return e.entry}))}var H=n(16),G=n(77),W=n.n(G),z=n(25),Y=n.n(z),q=function(e,t,n,r){var c=Object(a.useRef)(n);Object(a.useEffect)((function(){c.current=n}),[n]),Object(a.useEffect)((function(){if(e&&e.addEventListener){var n=function(e){return c.current(e)};return e.addEventListener(t,n,r),function(){return e.removeEventListener(t,n,r)}}}),[e,t,r])};function J(e){var t=e.isSearchResultsOpened,n=e.returnInput,r=Object(a.useState)(""),c=Object(H.a)(r,2),i=c[0],o=c[1],s=Object(a.useRef)(null),u=Object(a.useRef)((new Date).getTime());q(document.body,"keydown",(function(e){var t;"/"===e.key&&(e.preventDefault(),null===(t=s.current)||void 0===t||t.focus())}));return Object(T.jsxs)("div",{className:"\n        ".concat(Y.a.searchbar,"\n        ").concat(s&&t?Y.a.focused:"","\n      "),onFocus:function(){o((function(e){return n(e),e}))},children:[Object(T.jsx)("input",{autoFocus:!0,type:"text",placeholder:"Search",ref:s,value:i,onChange:function(e){o(e.target.value),function(e){u.current=(new Date).getTime(),setTimeout((function(){(new Date).getTime()-u.current>=500&&n(e)}),500)}(e.target.value)}}),i&&Object(T.jsx)("div",{id:Y.a.searchbarControl,children:Object(T.jsx)("div",{id:Y.a.clear,className:"material-icons",onClick:function(){o(""),s.current&&s.current.focus()},children:"clear"})})]})}function V(e,t){return e.length>0?Object(T.jsx)("div",{className:Y.a.searchResults,children:e.slice(0,5).map((function(e){var n=e.name;return Object(T.jsx)(u.b,{to:Object(L.m)(n),onClick:function(){return t([])},children:n},n)}))}):null}var K=function(e){var t=e.searchFunction,n=e.renderFunction,r=Object(m.g)(),c=Object(a.useState)([]),i=Object(H.a)(c,2),o=i[0],s=i[1],u=Object(a.useRef)(null);return Object(T.jsxs)("div",{className:W.a.searchbar,ref:u,onBlur:function(){var e;(null===(e=u.current)||void 0===e?void 0:e.matches(":focus-within"))||s([])},children:[Object(T.jsx)(J,{isSearchResultsOpened:0!==o.length,returnInput:function(e){s(e?t(r.articles,e):[])}}),n(o,s)]})},Z=function(){var e=Object(R.a)(),t=Object(R.b)(v.f);return Object(T.jsxs)("header",{id:U.a.header,children:[Object(T.jsx)(u.b,{to:"/",children:Object(T.jsx)("div",{id:U.a.logoDiv})}),Object(T.jsx)(K,{searchFunction:F,renderFunction:V}),Object(T.jsxs)("nav",{id:U.a.navbar,children:[Object(T.jsx)("button",{className:"material-icons "+U.a.menu,children:"menu"}),Object(T.jsxs)("button",{className:U.a.links,children:[Object(T.jsx)(u.b,{to:"/index",children:"Index"}),t!==v.a.Anonymous&&t!==v.a.NotLoggedIn?Object(T.jsxs)(T.Fragment,{children:[t===v.a.Admin?Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(u.b,{to:"/admin/recycling_bin",children:"Recycling Bin"}),Object(T.jsx)(u.b,{to:"/admin",children:"Create New Article"})]}):Object(T.jsx)(T.Fragment,{}),Object(T.jsx)("button",{onClick:function(){e(Object(v.d)())},children:"Logout"})]}):Object(T.jsx)(u.b,{to:"/account",children:"Login"})]})]})]})},Q=n(41),X=n.n(Q),$=n(61);function ee(e){var t=e.articlesData.articles,n=t.length?Object(L.h)(t):{name:"no article name",content:"no articles"},r=n.name,c=n.content;return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsxs)("div",{className:X.a.articleDisplay,children:[Object(T.jsx)("h2",{children:"Featured Article"}),Object(T.jsxs)("div",{children:[Object(T.jsx)("p",{children:"TODO what is the best way to determine a featured article?"}),Object(T.jsx)("p",{children:"Honestly, that might have to be manually audited since that depends on a lot of things."})]})]}),Object(T.jsxs)("div",{className:X.a.articleDisplay,children:[Object(T.jsx)(u.b,{to:Object(L.m)(r),children:Object(T.jsx)("h2",{children:"Random Article"})}),Object(T.jsxs)("div",{children:[Object(T.jsx)("h2",{children:r}),Object(T.jsx)($.a,{className:X.a.searchResult,children:"".concat(c.substr(0,800).replaceAll(/(@@.*)|(@@.*@@)/g,""))})]})]})]})}var te=function(e){var t=e.articlesData;return Object(T.jsxs)("div",{id:X.a.homepage,children:[Object(T.jsx)("h1",{children:"Welcome to Recyclopedia"}),Object(T.jsx)("p",{children:"Recyclopedia is a freely accessible wiki designed to be a complete source for environmentally friendly actions. While it is primarily meant to be a comprehensive source of ways to recycle items appropriately. It may also contain other methods of sustaining an environmentally friendly lifestyle."}),Object(T.jsxs)("p",{children:["This is developed by ",Object(T.jsx)("a",{href:"https://www.projectenv.org/",children:"The Environment Project"})]}),Object(T.jsx)(ee,{articlesData:t})]})},ne=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(0),n.e(8)]).then(n.bind(null,172))})),re=Object(a.lazy)((function(){return n.e(6).then(n.bind(null,175))})),ce=Object(a.lazy)((function(){return n.e(7).then(n.bind(null,173))})),ae=Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(0)]).then(n.bind(null,171))})),ie=Object(a.lazy)((function(){return n.e(5).then(n.bind(null,174))}));function oe(){var e=Object(R.b)(v.f),t=Object(m.g)();return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(Z,{}),Object(T.jsx)("main",{id:A.a.main,children:Object(T.jsxs)(k.d,{children:[Object(T.jsx)(k.b,{exact:!0,path:"/",children:Object(T.jsx)(te,{articlesData:t})}),Object(T.jsxs)(a.Suspense,{fallback:Object(T.jsx)("p",{children:"Please wait! Loading Recyclopedia..."}),children:[Object(T.jsx)(k.b,{exact:!0,path:"/index",children:Object(T.jsx)(re,{})}),Object(T.jsx)(k.b,{path:"/account",children:Object(T.jsx)(ie,{})}),Object(T.jsx)(k.b,{exact:!0,path:"/admin",children:e===v.a.Admin?Object(T.jsx)(ae,{currentArticle:void 0}):Object(T.jsx)(k.a,{to:"/"})}),Object(T.jsx)(k.b,{exact:!0,path:"/admin/recycling_bin/",children:Object(T.jsx)(ce,{})}),e===v.a.Admin?t.recycledArticles.map((function(e){return Object(T.jsx)(k.b,{exact:!0,path:"/admin/recycling_bin"+Object(L.m)(e.name),children:Object(T.jsx)(ne,{inRecycling:!0,article:e})},e.name)})):Object(T.jsx)(T.Fragment,{}),t.articles.map((function(e){return Object(T.jsx)(k.b,{exact:!0,path:Object(L.m)(e.name),children:Object(T.jsx)(ne,{inRecycling:!1,article:e})},e.name)}))]}),Object(T.jsx)(k.b,{path:"*",children:"404"})]})})]})}var se=function(){var e=Object(R.a)();Object(a.useEffect)((function(){e(Object(m.d)(C.a.RECYCLOPEDIA_APPLICATION_ID))}),[e]);var t=Object(R.b)(m.k);return"failed"===t?Object(T.jsxs)("div",{id:A.a.errorScreen,children:[Object(T.jsx)("div",{className:A.a.errorImg}),Object(T.jsx)("p",{children:"MongoDB is probably offline. Crap..."})]}):"succeed"===t?Object(T.jsx)(oe,{}):Object(T.jsxs)("div",{id:A.a.loadingScreen,children:[Object(T.jsx)(M,{color:"black"}),Object(T.jsx)("p",{children:"Please wait! Loading Recyclopedia..."})]})};s.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(d.a,{store:y,children:Object(T.jsx)(l.a,{persistor:_,children:Object(T.jsx)(u.a,{basename:"/recyclopedia",children:Object(T.jsx)(se,{})})})})}),document.getElementById("root"))},18:function(e,t,n){"use strict";n.d(t,"m",(function(){return l})),n.d(t,"l",(function(){return d})),n.d(t,"i",(function(){return h})),n.d(t,"d",(function(){return p})),n.d(t,"e",(function(){return j})),n.d(t,"h",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"c",(function(){return g})),n.d(t,"f",(function(){return x})),n.d(t,"k",(function(){return w})),n.d(t,"j",(function(){return A})),n.d(t,"a",(function(){return y})),n.d(t,"g",(function(){return k}));var r=n(2),c=n.n(r),a=n(28),i=n(5),o=n(3),s=(n(0),n(62)),u=n(45),l=function(e){return"/".concat(e.toLowerCase().trim().replace(/ +/g,"_"))};function d(e){return f.apply(this,arguments)}function f(){return(f=Object(o.a)(c.a.mark((function e(t){var n,r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("image",t),600,r="https://api.imgbb.com/1/upload?expiration".concat(600,"&key=").concat(u.a.IMGBB_KEY),console.log(r),e.next=7,fetch(r,{method:"POST",body:n});case 7:return a=e.sent,console.log("waiting..."),e.next=11,a.json();case 11:return e.abrupt("return",e.sent);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(c.a.mark((function e(t,n){var r,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t,(a=document.createElement("img")).src=URL.createObjectURL(r),console.log("attempting to load: ",r),a.onload=Object(o.a)(c.a.mark((function e(){var t,r,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=document.createElement("canvas"),(r=t.getContext("2d"))?(t.width=a.width,t.height=a.height,r.drawImage(a,0,0),i=t.toDataURL().split(",")[1],console.log("image data retrieved"),n(i)):console.log("null canvas?");case 3:case"end":return e.stop()}}),e)})));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e,t,n){var r=Object(i.a)({},e);return r[t]=n(e[t]),r}function j(e,t,n){if(t.length>1){var r=Object(i.a)({},e);return r[t[0]]=j(r[t[0]],t.slice(1),n),r}return p(e,t[0],n)}function m(e){return e[Math.floor(Math.random()*e.length)]}function v(e){for(;e.classList.length>0;)e.classList.remove(e.classList.item(0)||"")}function g(e,t){v(e),console.log(e.classList);var n,r=Object(a.a)(t);try{for(r.s();!(n=r.n()).done;){var c=n.value;e.classList.add(c)}}catch(i){r.e(i)}finally{r.f()}console.log(e.classList)}var O=["BR","BASE","AREA","COL","COMMAND","EMBED","HR","IMG","INPUT","KEYGEN","LINK","META","PARAM","SOURCE","TRACK","WBR"];function x(e){if(e.nodeType===s.a.Element){var t,n=e,r=Object(a.a)(O);try{for(r.s();!(t=r.n()).done;){var c=t.value;if(n.tagName===c)return!0}}catch(i){r.e(i)}finally{r.f()}}return!1}var y,_=[];function w(){var e=window.getSelection(),t=null===e||void 0===e?void 0:e.getRangeAt(0);t&&(null===e||void 0===e||e.removeRange(t),_.push(t))}function A(){if(_.length){var e=window.getSelection();null===e||void 0===e||e.addRange(_.pop())}}function k(e,t){var n=console.log,r=[],c="";switch(e){case y.Todo:case y.Note:case y.General:e===y.Todo?(c+="%cTODO%c",r.push("background-color: black; color: orange; font-size: 1.2em;","unset: all;")):e===y.Note?(c+="%cNOTE:%c",r.push("background-color: black; color: lightgreen; font-size: 1.2em;","unset: all;")):(c+="%cINFO: %c",r.push("background-color: black; color: white; font-size: 1.2em;","unset: all;")),n=console.log;break;case y.Warning:c+="%cWARNING%c",r.push("background-color: black; color: white; font-size: 1.2em;","unset: all;"),n=console.warn;break;case y.Error:n=console.error,c+="%cERROR!%c",r.push("background-color: black; color: red; font-size: 1.2em;","unset: all;")}c+=t||"";for(var a=arguments.length,i=new Array(a>2?a-2:0),o=2;o<a;o++)i[o-2]=arguments[o];for(var s=0,u=i;s<u.length;s++){var l=u[s];r.push(l)}n(c,r)}!function(e){e[e.General=0]="General",e[e.Warning=1]="Warning",e[e.Error=2]="Error",e[e.Todo=3]="Todo",e[e.Note=4]="Note"}(y||(y={}))},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var r=n(35),c=function(){return Object(r.b)()},a=r.c},20:function(e,t,n){e.exports={articleControls:"Article_articleControls__95Evd",deleteBtn:"Article_deleteBtn__1sdHc",title:"Article_title__G_BGG",tableOfContents:"Article_tableOfContents__2Op3Q",article:"Article_article__3AVYo",tagView:"Article_tagView__1GfRl",floatCenter:"Article_floatCenter__1RUh-",floatLeft:"Article_floatLeft__2IJ3p",floatRight:"Article_floatRight__3pqbI",noWrapAroundText:"Article_noWrapAroundText__2dudq",captionBox:"Article_captionBox__1tZ2s",captionImagePreview:"Article_captionImagePreview__3saqr",captionBoxInner:"Article_captionBoxInner__ZRS_C"}},25:function(e,t,n){e.exports={searchbar:"Searchbar_searchbar__2jLRV",focused:"Searchbar_focused__39Jjj",searchbarControl:"Searchbar_searchbarControl__3mGMh",clear:"Searchbar_clear__3uANO",search:"Searchbar_search__1ch6H",searchResults:"Searchbar_searchResults__18l6O"}},31:function(e,t,n){e.exports={header:"Header_header__2fJbI",links:"Header_links__Bc9bG",menu:"Header_menu__TfZLm",navbar:"Header_navbar__2ot4g",logoDiv:"Header_logoDiv__1Hf0g"}},40:function(e,t,n){e.exports={loadingScreen:"App_loadingScreen__J9ldS",errorScreen:"App_errorScreen__3OgjQ",errorImg:"App_errorImg__3nX-t",main:"App_main__2Jffb"}},41:function(e,t,n){e.exports={homepage:"Homepage_homepage__2XFyl",articleDisplay:"Homepage_articleDisplay__33qDe"}},45:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={RECYCLOPEDIA_APPLICATION_ID:"recyclopedia-api-uuuus",ADMIN_PASSWORD:"tonyisugly",IMGBB_KEY:"5eba0537206ecc76b4a505e866868853"}},61:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(78),c=n.n(r),a=n(1),i=c()({html:!0,breaks:!0,linkify:!0,typographer:!0}),o=function(e){return i.render(e)};t.a=function(e){var t=e.className,n=e.children;return Object(a.jsx)("div",{className:t,dangerouslySetInnerHTML:{__html:o(n)}})}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return f}));var r=n(20),c=n.n(r);function a(e){return function(t){for(var n=0,r=0,c=0;c<t.length;++c)if(" "!==t[c]){n=c-1;break}for(var a=t.length-1;a>0&&" "===t[a];--a)r++;return"".concat(n>0?" ".repeat(n):"").concat(e).concat(t.trim()).concat(e).concat(r>0?" ".repeat(r):"")}}var i,o,s={B:a("**"),STRONG:a("**"),I:a("_"),EM:a("_"),U:a("__")};function u(e){var t=function(e){return e.classList,e.classList.contains(c.a.captionBox)?o.CaptionedImage:e.classList.contains(c.a.article)?o.Article:o.Unknown}(e);switch(console.log(t),t){case o.CaptionedImage:var n,r=e.children[0],a=e.children[1].children[0],i="";return i+="src = '".concat(r.src,"' |"),i+="width = ".concat(r.width," |"),i+="height = ".concat(r.height," |"),i+="caption = '".concat(null===(n=a.textContent)||void 0===n?void 0:n.trim(),"'"),e.classList.contains(c.a.floatLeft)?i+="| floatingMethod = floatLeft":e.classList.contains(c.a.floatCenter)?i+="| floatingMethod = floatCenter":e.classList.contains(c.a.floatRight)&&(i+="| floatingMethod = floatRight"),"@@ "+i+" @@";case o.Article:return l(e);case o.Unknown:default:return console.error("This is unusual... Unknown Div structure?"),""}}function l(e){for(var t="",n=0,r=Array.from(e.childNodes);n<r.length;n++){t+=d(r[n])}return t}function d(e){if(e.nodeType===i.Text)return e.textContent||"";switch(e.tagName){case"DIV":return u(e);case"A":var t=e,n=t.textContent,r=t.href;return"[".concat(n,"](").concat(r,")");case"IMG":var a=e,o="";return o+="src = '".concat(a.src,"' |"),o+="width = ".concat(a.width," |"),o+="height = ".concat(a.height),a.classList.contains(c.a.floatLeft)?o+="| floatingMethod = floatLeft":a.classList.contains(c.a.floatCenter)?o+="| floatingMethod = floatCenter":a.classList.contains(c.a.floatRight)&&(o+="| floatingMethod = floatRight"),"@@ "+o+" @@\n";case"H6":case"H5":case"H4":case"H3":case"H2":case"H1":return"\n"+"#".repeat(Number(e.tagName[1]))+" "+l(e)+"\n";case"B":case"U":case"I":case"STRONG":case"EM":var d=l(e);if(console.log("TWEEN",d),""!==d)return(y=s[e.tagName],function(){return y?y.apply(void 0,arguments):arguments.length<=0?void 0:arguments[0]})(d);break;case"OL":for(var f="",h=1,b=0,p=Array.from(e.childNodes);b<p.length;b++){var j=p[b];j.nodeType===i.Element&&(f+="".concat(h++,". ")+l(j)+"\n")}return f+"\n";case"UL":for(var m="",v=0,g=Array.from(e.childNodes);v<g.length;v++){var O=g[v];O.nodeType===i.Element&&(m+="- "+l(O)+"\n")}return m+"\n";case"P":var x=Array.from(e.children);return 1===x.length&&"BR"===x[0].tagName?e.outerHTML+"\n":l(e)+"\n\n";default:console.error("Unhandled case: ",e.tagName)}var y;return""}function f(e){return d(e)}!function(e){e[e.Element=1]="Element",e[e.Attribute=2]="Attribute",e[e.Text=3]="Text",e[e.CDataSection=4]="CDataSection",e[e.ProcessingInformation=5]="ProcessingInformation",e[e.Comment=6]="Comment",e[e.Document=7]="Document",e[e.DocumentType=8]="DocumentType",e[e.DocumentFragment=9]="DocumentFragment"}(i||(i={})),function(e){e[e.Unknown=0]="Unknown",e[e.CaptionedImage=1]="CaptionedImage",e[e.Article=2]="Article"}(o||(o={}))},77:function(e,t,n){e.exports={searchbar:"Search_searchbar__1jRdR"}},80:function(e,t,n){}},[[152,3,4]]]);
//# sourceMappingURL=main.c949d444.chunk.js.map