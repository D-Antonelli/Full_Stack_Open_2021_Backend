(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),r=t.n(c),u=(t(20),t(6)),o=t(3),a=t(2),i=t(4),s=t.n(i),l="/api/persons",b=function(e){return s.a.post(l,e).then((function(e){return e.data}))},j=function(e){return s.a.delete("".concat(l,"/").concat(e))},d=function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},f=function(){return s.a.get(l).then((function(e){return e.data}))},h=t(0),m=function(e){return Object(h.jsxs)(h.Fragment,{children:["filter shown with",Object(h.jsx)("input",{value:e.value,onChange:e.onChange})]})},O=function(e){return Object(h.jsx)("button",{onClick:e.onClick,type:e.type,className:e.className,children:e.text})},p=function(e){return Object(h.jsxs)("form",{onSubmit:e.onSubmit,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:e.newName,onChange:e.onNewName})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:e.newNumber,onChange:e.onNewNumber})]}),Object(h.jsx)("div",{children:Object(h.jsx)(O,{type:"submit",text:"add"})})]})},x=function(e){return Object(h.jsxs)(h.Fragment,{children:[e.name," ",e.number]})},v=function(e){return Object(h.jsx)("ul",{children:e.list.map((function(n){return Object(h.jsxs)("li",{children:[Object(h.jsx)(x,{name:n.name,number:n.number}),Object(h.jsx)(O,{onClick:function(){return e.onClick(n.id,n.name)},text:"delete"})]},n.id)}))})},w=function(e){var n=e.detail;return null===n?null:"success"===n.type?Object(h.jsx)("div",{className:"success",children:n.text}):"error"===n.type?Object(h.jsx)("div",{className:"error",children:n.text}):null},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=Object(a.useState)(e),t=Object(o.a)(n,2),c=t[0],r=t[1],u=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5e3;r(e),setTimeout((function(){r(null)}),n)};return[c,u]},g="success",C="error",k=function(){var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),s=i[0],l=i[1],O=Object(a.useState)(""),x=Object(o.a)(O,2),k=x[0],y=x[1],S=Object(a.useState)(""),D=Object(o.a)(S,2),E=D[0],F=D[1],J=N(null),U=Object(o.a)(J,2),A=U[0],B=U[1];Object(a.useEffect)((function(){f().then((function(e){return c(e)}))}),[]);var I=function(){l(""),y("")},P=E.length>0?t.filter((function(e){return e.name.toUpperCase().includes(E.toUpperCase())})):t;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(w,{detail:A}),Object(h.jsx)(m,{value:E,onChange:function(e){F(e.target.value)}}),Object(h.jsx)("h3",{children:"add a new"}),Object(h.jsx)(p,{onSubmit:function(e){if(e.preventDefault(),void 0===t.find((function(e){return e.name===s})))b({name:s,number:k}).then((function(e){c(t.concat(e)),B({text:"Added ".concat(s),type:g}),I()})).catch((function(e){B({text:e.response.data.error,type:C})}));else if(t.find((function(e){return e.name===s&&e.number!==k}))){if(window.confirm("".concat(s," is already added to phonebook, replace the old number with a new one?"))){var n=t.find((function(e){return e.name===s&&e.number!==k})),r=Object(u.a)(Object(u.a)({},n),{},{number:k});d(n.id,r).then((function(e){c(t.map((function(t){return t.id!==n.id?t:e}))),B({text:"Changed ".concat(s,"'s number to ").concat(k),type:g}),I()})).catch((function(e){B({text:e.response.data.error,type:C})}))}}else alert("".concat(s," is already added to phonebook"))},newName:s,onNewName:function(e){l(e.target.value)},newNumber:k,onNewNumber:function(e){y(e.target.value)}}),Object(h.jsx)("h3",{children:"Numbers"}),Object(h.jsx)(v,{list:P,onClick:function(e,n){window.confirm("Delete ".concat(n,"?"))&&j(e)&&c(t.filter((function(n){return n.id!==e})))}})]})};r.a.render(Object(h.jsx)(k,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e3ed9ebf.chunk.js.map