(this["webpackJsonpreact-2"]=this["webpackJsonpreact-2"]||[]).push([[0],{18:function(t,e,n){},19:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(11),s=n.n(r),i=(n(18),n(12)),o=n(10),l=n(2),u=n(3),m=n(4),b=n(7),d=n(6),j=n(24),h=(n(19),n(5)),f=n(0),p=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).nameId=Object(j.a)(),t.numberId=Object(j.a)(),t.state={name:"",number:""},t.inputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(l.a)({},a,c))},t.submit=function(e){e.preventDefault();var n=Object(h.a)(t),a=n.props,c=n.state,r=n.reset;a.onSubmit(c),r()},t.reset=function(){return t.setState({name:"",number:""})},t}return Object(m.a)(n,[{key:"render",value:function(){var t=this.submit,e=this.nameId,n=this.state,a=this.inputChange,c=this.numberId;return Object(f.jsxs)("form",{className:"form",onSubmit:t,children:[Object(f.jsx)("label",{className:"label",htmlFor:e,children:"Name"}),Object(f.jsx)("input",{id:e,className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",value:n.name,onChange:a}),Object(f.jsx)("label",{className:"label",htmlFor:c,children:"Number"}),Object(f.jsx)("input",{id:c,className:"input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435,  \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off",value:n.number,onChange:a}),Object(f.jsx)("button",{className:"button",type:"submit",children:"Add contact"})]})}}]),n}(a.Component),O=p;var v=function(t){var e=t.id,n=t.value,a=t.onChange;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("label",{className:"label",htmlFor:e,children:"Find contacts by name"}),Object(f.jsx)("input",{id:e,className:"input",name:"filter",type:"text",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u0449\u0438\u0442\u0435",autoComplete:"off",value:n,onChange:a})]})},g=n(8),C=n.n(g);var x=function(t){var e=t.id,n=t.name,a=t.number,c=t.onClick;return Object(f.jsxs)("li",{className:"listItem",id:e,children:[Object(f.jsxs)("span",{className:"name",children:[n,":"]})," ",a,Object(f.jsx)("button",{className:"deleteBtn",type:"button",onClick:c,children:"Delete"})]})};x.PropTypes={names:C.a.arrayOf(C.a.object),onClick:C.a.func};var N=function(t){var e=t.names,n=t.onClick;return Object(f.jsx)("ul",{className:"list",children:e().map((function(t){return Object(f.jsx)(x,{id:t.id,name:t.name,number:t.number,onClick:n},t.id)}))})},y=function(t){Object(b.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).filterFieldId=Object(j.a)(),t.state={contacts:[],filter:""},t.inputChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(l.a)({},a,c))},t.submit=function(e){if(t.state.contacts.find((function(t){return t.name===e.name})))return alert("".concat(e.name," is already in contacts"));t.setState((function(t){return{contacts:[Object(i.a)({id:Object(j.a)()},e)].concat(Object(o.a)(t.contacts))}}))},t.contactsFiltering=function(){var e=t.state,n=e.contacts,a=e.filter.toLocaleLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.target.parentNode.id}))}}))},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){localStorage.getItem("contacts")&&this.setState({contacts:Object(o.a)(JSON.parse(localStorage.getItem("contacts")))})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts.length!==e.contacts.length&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.inputChange,e=this.submit,n=this.filterFieldId,a=this.state,c=this.contactsFiltering,r=this.deleteContact;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(O,{onSubmit:e})]}),Object(f.jsxs)("div",{className:"wrapper",children:[Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(v,{id:n,value:a.filter,onChange:t}),Object(f.jsx)(N,{names:c,onClick:r})]})]})}}]),n}(a.Component),S=y;s.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(S,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.83a5c979.chunk.js.map