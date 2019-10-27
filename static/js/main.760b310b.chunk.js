(window.webpackJsonpforms=window.webpackJsonpforms||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(3),o=t.n(s),l=t(1),c=t(4),m=t(5),i=t(7),d=t(6),u=t(8),h=[{id:1,name:"Ukraine"},{id:2,name:"Germany"},{id:3,name:"France"},{id:4,name:"Spain"},{id:5,name:"USA"}],g=function(e){var a=e.id,t=e.labelText,r=e.type,s=e.placeholder,o=e.name,l=e.value,c=e.onChange,m=e.error;return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:a},t),n.a.createElement("input",{id:a,type:r,className:"form-control",placeholder:s,name:o,value:l,onChange:c}),m?n.a.createElement("div",{className:"invalid-feedback"},m):null)},p=function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(i.a)(this,Object(d.a)(a).call(this))).onChange=function(a){console.log(a.target.name,a.target.value),e.setState(Object(l.a)({},a.target.name,a.target.value))},e.onChangeAgree=function(a){console.log(a.target.name,a.target.value,a.target.checked),console.log(typeof a.target.value),e.setState(Object(l.a)({},a.target.name,a.target.checked))},e.onChangeAvatar=function(a){var t=new FileReader;t.onload=function(a){e.setState({avatar:a.target.result})},t.readAsDataURL(a.target.files[0])},e.onSubmit=function(a){a.preventDefault();var t={};e.state.username.length<6&&(t.usarname="Must be 6 characters or more"),e.state.password.length<4&&(t.password="Must be 4 characters or more"),e.state.password!==e.state.repeatPassword&&(t.repeatPassword="Must be equal password"),Object.keys(t).length>0?e.setState({errors:t}):(e.setState({errors:{}}),console.log("submit",e.state))},e.getItemsOptions=function(e){return e.map((function(e){return n.a.createElement("option",{key:e.id,value:e.id},e.name)}))},e.incrementAge=function(){e.setState({age:e.state.age+1})},e.decrementAge=function(){e.setState({age:e.state.age-1})},e.state={username:"",password:"",repeatPassword:"",country:"1",gender:"male",agree:!0,avatar:"",age:0,errors:{usarname:!1,password:!1,repeatPassword:!1,age:!1}},e}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"form-container card"},n.a.createElement("form",{className:"form card-body"},n.a.createElement(g,{id:"username",labelText:"Username",type:"text",placeholder:"Enter username",name:"username",value:this.state.username,onChange:this.onChange,error:this.state.errors.usarname}),n.a.createElement(g,{id:"password",labelText:"Password",type:"password",placeholder:"Enter password",name:"password",value:this.state.password,onChange:this.onChange,error:this.state.errors.password}),n.a.createElement(g,{id:"repeatPassword",labelText:"Repeat password",type:"password",placeholder:"Repeat your password",name:"repeatPassword",value:this.state.repeatPassword,onChange:this.onChange,error:this.state.errors.repeatPassword}),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"country"},"Country"),n.a.createElement("select",{className:"form-control",id:"country",name:"country",value:this.state.country,onChange:this.onChange},this.getItemsOptions(h))),n.a.createElement("fieldset",{className:"form-group"},n.a.createElement("div",null,"Gender"),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",id:"male",name:"gender",value:"male",checked:"male"===this.state.gender,onChange:this.onChange}),n.a.createElement("label",{className:"form-check-label",htmlFor:"male"},"Male")),n.a.createElement("div",{className:"form-check"},n.a.createElement("input",{className:"form-check-input",type:"radio",id:"female",name:"gender",value:"female",checked:"female"===this.state.gender,onChange:this.onChange}),n.a.createElement("label",{className:"form-check-label",htmlFor:"female"},"Female"))),n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"avatar"},"Avatar"),n.a.createElement("input",{type:"file",className:"form-control-file",id:"avatar",name:"avatar",onChange:this.onChangeAvatar})),n.a.createElement("div",{className:"form-check mb-2"},n.a.createElement("input",{className:"form-check-input",type:"checkbox",id:"agree",name:"agree",value:this.state.agree,onChange:this.onChangeAgree,checked:this.state.agree}),n.a.createElement("label",{className:"form-check-label",htmlFor:"agree"},"Confirm the processing of data")),n.a.createElement("button",{type:"submit",className:"btn btn-primary w-100",onClick:this.onSubmit},"Submit")))}}]),a}(n.a.Component);t(14);o.a.render(n.a.createElement(p,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.760b310b.chunk.js.map