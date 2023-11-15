"use strict";(self.webpackChunktodo_list_website=self.webpackChunktodo_list_website||[]).push([[177],{487:(e,s,i)=>{i.r(s),i.d(s,{default:()=>m});var t=i(791),a=i(689),l=i(85),n=(i(462),i(670)),d=i(955),r=i(928),c=i(847),o=i(184);const m=function(){const e=(0,a.s0)(),{addTask:s}=(0,t.useContext)(n.Z),i=(0,t.useRef)(null),{CurrentUser:m}=(0,t.useContext)(d.s),[p,x]=(0,t.useState)({title:"",description:"",deadline:"",image:null}),h=e=>{const{name:s,value:i}=e.target;x((e=>({...e,[s]:i})))};(0,t.useEffect)((()=>{var e;null===(e=i.current)||void 0===e||e.focus()}),[]);const u=()=>{l.Am.error("You must sign in first"),e("/User/signin")};return(0,o.jsxs)("div",{style:{marginTop:"9%",borderRadius:"25px"},className:"container card text-black w-50",children:[(0,o.jsx)("h3",{className:"text-center text-dark  pt-3",children:" Create new Task "}),(0,o.jsxs)("form",{onSubmit:i=>{if(i.preventDefault(),m){const i=new FormData;i.append("title",p.title),i.append("description",p.description),i.append("deadline",p.deadline),i.append("image",p.image);const t={title:p.title,description:p.description,deadline:p.deadline,image:p.image};s(t).then((()=>{x({title:"",description:"",deadline:"",image:null}),e("/Tasks")})).catch((e=>{console.error(e)}))}else u()},className:"form p-3",children:[(0,o.jsxs)("div",{className:"row d-flex",children:[(0,o.jsxs)("div",{className:" mb-3 w-50  ",children:[(0,o.jsx)("label",{htmlFor:"title",children:" Task Name: "})," ",(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"text",className:"form-control",id:"title",name:"title",value:p.title,onChange:h,ref:i,required:!0})]}),(0,o.jsxs)("div",{className:"col-6",children:[(0,o.jsx)("label",{htmlFor:"deadline",children:" Deadline: "}),(0,o.jsx)("br",{}),(0,o.jsx)("input",{type:"date",className:"form-control",id:"deadline",name:"deadline",value:p.deadline,onChange:h,required:!0})]})]}),(0,o.jsxs)("div",{className:"row d-flex",children:[(0,o.jsxs)("div",{className:"col-6  ",children:[(0,o.jsx)("label",{htmlFor:"description",children:" Description: "}),(0,o.jsx)("textarea",{className:"form-control ",id:"description",name:"description",rows:10,cols:60,value:p.description,onChange:h})]}),(0,o.jsx)("div",{className:"col-6 ",children:(0,o.jsxs)("div",{className:r.Z.uploadField,children:[(0,o.jsx)("img",{src:c.Z,className:"img-fluid ",alt:"",id:"img-placeholder",width:"450px"}),(0,o.jsx)("img",{src:p.image,className:"img-fluid h-auto",alt:"",id:"img-placeholder",width:"250px",style:{position:"absolute",left:"15%",top:"15%"}}),(0,o.jsx)("input",{type:"file",hidden:!0,className:"form-control",id:"image",name:"image",onChange:e=>{const s=e.target.files[0];if(s){const e=new FileReader;e.onload=e=>{const s=e.target.result;x((e=>({...e,image:s})))},e.readAsDataURL(s)}}}),(0,o.jsxs)("label",{htmlFor:"image",children:[(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"currentColor",className:"bi bi-cloud-arrow-up-fill",viewBox:"0 0 16 16",children:(0,o.jsx)("path",{d:"M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2z"})})," ",(0,o.jsx)("br",{}),"Upload Image"]})]})})]}),(0,o.jsx)("div",{className:"text-center mt-3",children:(0,o.jsx)("button",{className:"btn btn-dark mx-2 text-light px-5 py-2 b-0",style:{zIndex:1},children:"Add Task"})})]})]})}}}]);
//# sourceMappingURL=177.35c73ba0.chunk.js.map