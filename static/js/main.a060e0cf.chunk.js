(this["webpackJsonpreact-todo-app"]=this["webpackJsonpreact-todo-app"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),a=n(11),i=n.n(a),r=n(12),s=n(10),l=n(4),d=n(2),u=n(8),j=n.n(u),b=n(7),p=n(1),m=function(e){var t=Object(c.useState)(!1),n=Object(d.a)(t,2),o=n[0],a=n[1],i=e.todo,r=i.completed,s=i.id,l=i.title,u={},m={};return o?u.display="none":m.display="none",Object(c.useEffect)((function(){return function(){console.log("cleaning...")}}),[]),Object(p.jsxs)("li",{className:j.a.item,children:[Object(p.jsxs)("div",{onDoubleClick:function(){a(!0)},style:u,children:[Object(p.jsx)("input",{className:j.a.checkbox,checked:r,onChange:function(){return e.handleChangeProps(s)},type:"checkbox"}),Object(p.jsx)("button",{onClick:function(){return e.deleteTodoProps(s)},children:Object(p.jsx)(b.b,{style:{color:"orangered",fontSize:"16px"}})}),Object(p.jsx)("span",{style:r?{fontStyle:"italic",color:"#595959",opacity:.4,textDecoration:"line-through"}:null,children:l})]}),Object(p.jsx)("input",{type:"text",style:m,value:l,onChange:function(t){e.setUpdate(t.target.value,s)},onKeyDown:function(e){"Enter"===e.key&&a(!1)},className:j.a.textInput})]})},O=function(e){return Object(p.jsx)("ul",{children:e.todos.map((function(t){return Object(p.jsx)(m,{todo:t,handleChangeProps:e.handleChangeProps,deleteTodoProps:e.deleteTodoProps,setUpdate:e.setUpdate},t.id)}))})},f=function(){return Object(p.jsx)("header",{style:{padding:"20px 0",lineHeight:"1.5em"},children:Object(p.jsx)("h1",{style:{fontSize:"6rem",fontWeight:"600",marginBottom:"2rem",lineHeight:"1em",color:"#ececec",textTransform:"lowercase",textAlign:"center"},children:"todos"})})},h=n(6),x=function(e){var t=Object(c.useState)({title:""}),n=Object(d.a)(t,2),o=n[0],a=n[1];return Object(p.jsxs)("form",{onSubmit:function(t){t.preventDefault(),o.title.trim()?(e.addTodoProps(o.title),a({title:""})):alert("Please write item")},className:"form-container",children:[Object(p.jsx)("input",{type:"text",className:"input-text",placeholder:"Add todo...",value:o.title,name:"title",onChange:function(e){a(Object(l.a)(Object(l.a)({},o),{},Object(h.a)({},e.target.name,e.target.value)))}}),Object(p.jsx)("button",{className:"input-submit",children:Object(p.jsx)(b.a,{color:"darkcyan",size:"20px",className:"submit-icon"})})]})},g=n(21),y=function(){var e=Object(c.useState)(function(){var e=localStorage.getItem("todos");return JSON.parse(e)||[]}()),t=Object(d.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("todos",e)}),[n]),Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"container",children:Object(p.jsxs)("div",{className:"inner",children:[Object(p.jsx)(f,{}),Object(p.jsx)(x,{addTodoProps:function(e){var t={id:Object(g.a)(),title:e,completed:!1};o([].concat(Object(s.a)(n),[t]))}}),Object(p.jsx)(O,{todos:n,handleChangeProps:function(e){o((function(t){return t.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{completed:!t.completed}):t}))}))},deleteTodoProps:function(e){o(Object(s.a)(n.filter((function(t){return t.id!==e}))))},setUpdate:function(e,t){o(n.map((function(n){return n.id===t&&(n.title=e),n})))}})]})})})};n(18);i.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(r.a,{children:Object(p.jsx)(y,{})})}),document.getElementById("root"))},8:function(e,t,n){e.exports={item:"TodoItem_item__1WLjn",checkbox:"TodoItem_checkbox__1AFzW",textInput:"TodoItem_textInput__4NtOd"}}},[[19,1,2]]]);
//# sourceMappingURL=main.a060e0cf.chunk.js.map