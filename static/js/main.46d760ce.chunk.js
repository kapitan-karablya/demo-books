(this["webpackJsonpbook-catalog_test-task"]=this["webpackJsonpbook-catalog_test-task"]||[]).push([[0],[,,,,,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var o=t(1),n=t.n(o),c=t(6),a=t.n(c),r=(t(11),t(12),t(2)),i=(t(13),t(14),t(3)),s=t(4),l=(t(15),t(0));var u=function(A){var e=Object(o.useState)(A.bookId?JSON.parse(localStorage.getItem(A.bookId)):{title:"",author:"",cover:""}),t=Object(r.a)(e,2),n=t[0],c=t[1],a=function(A){var e=A.target,t=e.name,o=e.value;c(Object(s.a)(Object(s.a)({},n),{},Object(i.a)({},t,o)))};return Object(l.jsxs)("form",{className:"book-form",onSubmit:function(e){var t;if(e.preventDefault(),A.bookId)t=A.bookId;else{var o=localStorage.getItem("lastId");t=null===o?1:parseInt(o)+1,localStorage.setItem("lastId",t)}localStorage.setItem(t,JSON.stringify(n)),c({title:"",author:"",cover:""}),document.querySelector(".book-form-picture").value="",A.update()},children:[Object(l.jsx)("label",{className:"book-form-label",htmlFor:"book-title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043d\u0438\u0433\u0438"}),Object(l.jsx)("input",{className:"book-form-input",id:"book-title",type:"text",name:"title",value:n.title,onChange:a}),Object(l.jsx)("label",{className:"book-form-label",htmlFor:"book-author",children:"\u0410\u0432\u0442\u043e\u0440 \u043a\u043d\u0438\u0433\u0438"}),Object(l.jsx)("input",{className:"book-form-input",id:"book-author",type:"text",name:"author",value:n.author,onChange:a}),Object(l.jsx)("label",{className:"book-form-label",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043e\u0431\u043b\u043e\u0436\u043a\u0443 (145x205)"}),Object(l.jsx)("input",{className:"book-form-picture",type:"file",name:"cover",accept:"image/*",onChange:function(A){var e=A.target.files[0];if(void 0!==e){var t=A.target.name;(function(A){return new Promise((function(e,t){var o=new FileReader;o.readAsDataURL(A),o.onload=function(){return e(o.result)},o.onerror=function(A){return t(A)}}))})(e).then((function(A){return c(Object(s.a)(Object(s.a)({},n),{},Object(i.a)({},t,A)))}))}}}),Object(l.jsx)("button",{className:"book-form-submit",type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var b=function(A){return Object(l.jsxs)("div",{className:"add-book-field",children:[Object(l.jsx)("p",{className:"add-book-title",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443"}),Object(l.jsx)(u,{update:A.update})]})};t(17),t(18);var d=function(A){var e=Object(o.useState)(JSON.parse(localStorage.getItem(A.id))),t=Object(r.a)(e,1)[0];return Object(l.jsxs)("div",{className:"book",children:[Object(l.jsx)("div",{className:"book-cover",children:Object(l.jsx)("img",{width:"145",height:"205",src:""===t.cover?"data:image/jpeg;base64,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":t.cover,alt:""})}),Object(l.jsxs)("div",{className:"book-info",children:[Object(l.jsx)("p",{className:"book-title",children:""===t.title?"\u0411\u0435\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f":t.title}),Object(l.jsx)("p",{className:"book-author",children:""===t.author?"\u0410\u0432\u0442\u043e\u0440 \u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u0435\u043d":t.author})]}),Object(l.jsxs)("div",{className:"hide-book-buttons",children:[Object(l.jsx)("button",{className:"book-button book-edit-button",onClick:function(){return A.clickEditButton(A.id)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"}),Object(l.jsx)("button",{className:"book-button book-delete-button",onClick:function(){localStorage.removeItem(A.id),A.update()},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})]})};var j=function(A){return Object(l.jsx)("div",{className:"book-list",children:Object.keys(A.books).slice(0).reverse().map((function(e){return Object(l.jsx)(d,{id:e,update:A.update,clickEditButton:A.clickEditButton},e)}))})};t(19);var m=function(A){var e=function(e){"Escape"===e.key&&A.onClose()};return Object(o.useEffect)((function(){return document.addEventListener("keydown",e),function(){return document.removeEventListener("keydown",e)}})),A.visible?Object(l.jsx)("div",{className:"modal",onClick:function(){return A.onClose()},children:Object(l.jsxs)("div",{className:"modal-dialog",onClick:function(A){return A.stopPropagation()},children:[Object(l.jsx)("p",{className:"modal-title",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443"}),Object(l.jsx)(u,{bookId:A.bookId,update:function(){A.update(A.bookId),A.onClose()}}),Object(l.jsx)("span",{className:"modal-close",onClick:function(){return A.onClose()},children:"\xd7"})]})}):null};var f=function(){var A=Object(o.useState)(!1),e=Object(r.a)(A,2),t=e[0],n=e[1],c=Object(o.useState)(void 0),a=Object(r.a)(c,2),i=a[0],s=a[1],u=function(){for(var A={},e=0;e<localStorage.length;e++){var t=localStorage.key(e);"lastId"!==t&&(A[t]=JSON.parse(localStorage.getItem(t)))}return A},d=Object(o.useState)(u()),f=Object(r.a)(d,2),k=f[0],p=f[1];return Object(l.jsxs)("main",{className:"App-main",children:[Object(l.jsx)(b,{update:function(){return p(u())}}),Object(l.jsx)(j,{books:k,clickEditButton:function(A){s(A),n(!0)},update:function(){return p(u())}}),Object(l.jsx)(m,{visible:t,title:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",onClose:function(){return n(!1)},bookId:i,update:function(){return p({}),void setTimeout(p,0,u())}})]})};var k=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043a\u043d\u0438\u0433"})}),Object(l.jsx)(f,{})]})},p=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(e){var t=e.getCLS,o=e.getFID,n=e.getFCP,c=e.getLCP,a=e.getTTFB;t(A),o(A),n(A),c(A),a(A)}))};a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),p()}],[[20,1,2]]]);
//# sourceMappingURL=main.46d760ce.chunk.js.map