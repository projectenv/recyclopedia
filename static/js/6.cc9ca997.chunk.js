(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[6],{153:function(e,t,n){"use strict";var a=n(5),c=n(47),r=n(154),s=n.n(r),u=n(1);t.a=function(e){var t=e.children,n=e.type,r=void 0===n?"button":n,o=e.styledAs,i=Object(c.a)(e,["children","type","styledAs"]);return Object(u.jsx)("button",Object(a.a)(Object(a.a)({className:"\n        ".concat(s.a.button," \n        ").concat(o?s.a[o]:s.a.default," \n        ").concat(i.className||"","\n      "),type:r},i),{},{children:t}))}},154:function(e,t,n){e.exports={button:"Button_button__1_sNH",default:"Button_default__1hCTa",oval:"Button_oval__Z1YBF"}},155:function(e,t,n){"use strict";var a=n(5),c=n(47),r=n(156),s=n.n(r),u=n(0),o=n(1);t.a=function(e){var t=e.changeHandler,n=e.label,r=e.value,i=e.option,l=e.readOnly,b=e.selectAllOnFocus,p=Object(c.a)(e,["changeHandler","label","value","option","readOnly","selectAllOnFocus"]),d=i||"input",j=Object(u.useRef)(null);return Object(o.jsxs)("div",{className:s.a.group,children:[Object(o.jsx)(d,Object(a.a)(Object(a.a)(Object(a.a)({ref:j,className:"textarea"===i?s.a.textarea:s.a.input,onChange:t},b&&{onFocus:function(){var e;return null===(e=j.current)||void 0===e?void 0:e.select()}}),l&&{readOnly:!0}),p)),n&&Object(o.jsx)("label",{className:"".concat(r?s.a.shrink:""),children:n})]})}},156:function(e,t,n){e.exports={group:"Input_group___CkTD","form-input-label":"Input_form-input-label__3LBb9",shrink:"Input_shrink__1Oknc"}},159:function(e,t,n){"use strict";var a=n(2),c=n.n(a),r=n(3),s=n(5),u=n(12),o=n(16),i=n(47),l=n(160),b=n.n(l),p=n(0),d=n(155),j=n(1);t.a=function(e){var t=e.submitFn,n=e.inputItems,a=e.children,l=Object(i.a)(e,["submitFn","inputItems","children"]),O=Object.assign(Object.entries(n).map((function(e){var t=Object(o.a)(e,2),n=t[0],a=t[1];return Object(u.a)({},n,a.defaultValue||"")}))),f=Object(p.useState)(O),m=Object(o.a)(f,2),h=m[0],v=m[1],x=function(e){var t=e.target,n=t.name,a=t.value;v(Object(s.a)(Object(s.a)({},h),{},Object(u.a)({},n,a)))},_=function(){var e=Object(r.a)(c.a.mark((function e(n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!t){e.next=7;break}return e.next=4,t(h);case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0=!0;case 8:e.t0&&v(O);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{className:"".concat(b.a.form," ").concat(l.className||""),onSubmit:_,children:[Object.entries(n).map((function(e,t){var n=Object(o.a)(e,2),a=n[0],c=n[1];return Object(j.jsx)(d.a,Object(s.a)({changeHandler:x,name:a,value:h[a]},c),t)})),a]})}},160:function(e,t,n){},175:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(3),s=n(6),u=n(19),o=n(10),i=n(159),l=n(153),b=n(1);t.default=function(e){return Object(u.a)(),Object(s.g)(),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Register a New Account"}),Object(b.jsx)(i.a,{inputItems:{email:{selectAllOnFocus:!0,placeholder:"Email",required:!0},password:{selectAllOnFocus:!0,placeholder:"Password",required:!0},passwordConfirmation:{selectAllOnFocus:!0,placeholder:"Confirm Password",required:!0}},submitFn:function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.password!==t.passwordConfirmation){e.next=5;break}return e.next=3,Object(o.e)({email:t.email,password:t.password});case 3:e.next=6;break;case 5:alert("Passwords do not match!");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:Object(b.jsx)(l.a,{type:"submit",children:"Register Account"})})]})}}}]);
//# sourceMappingURL=6.cc9ca997.chunk.js.map