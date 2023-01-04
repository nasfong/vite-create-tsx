import{g as M,r as c,b as u,j as t,k as T,a,h as n,i as N,C as v}from"./index.9fad1ff6.js";import{T as j,P as I,M as d}from"./Toolbar.fa9249db.js";const p="administrator";function A(){var k,_,F;const{pathname:x}=M(),C={username:"",firstname:"",lastname:"",password:""},[i,f]=c.exports.useState(C),[o,r]=c.exports.useState([]),[l,m]=c.exports.useState(),[S,w]=c.exports.useState(!1),y=()=>{w(!0)},h=()=>{w(!1),f(C),m()};c.exports.useEffect(()=>{u.get(`/${p}`).then(e=>r(e.data.data)).catch(e=>console.log(e.message))},[]);const g=e=>{m();const{value:s,name:b}=e.target;f({...i,[b]:s})},L=async e=>{await u.delete(`/${p}/${e}`).then(s=>{s.status===200&&r(o.filter(b=>b._id!==e))}).catch(s=>console.log(s))},$=async()=>{i._id&&await u.put(`/${p}/${i._id}`,i).then(e=>{console.log(e.data),e.status===200?(r(o.map(s=>s._id===i._id?e.data.data:s)),h()):e.status===201&&m(e.data.data)}).catch(e=>console.log(e)),await u.post(`/${p}`,i).then(e=>{console.log(e.data),e.status===200?(r(o.concat(e.data.data)),h()):e.status===201&&m(e.data.data)}).catch(e=>console.log(e.message))};return t(T,{children:[t(j,{children:[a("div",{className:"text-capitalize float-start",children:I(x)}),a("div",{className:"float-end",children:a("button",{onClick:y,className:"btn btn-primary btn-sm",children:"Add"})})]}),t("div",{className:"card",children:[t("table",{className:"table",children:[a("thead",{className:"text-muted",children:t("tr",{children:[a("th",{children:"Info"}),a("th",{children:"Name"}),a("th",{children:"Role"}),a("th",{className:"text-end",children:"Action"})]})}),a("tbody",{className:"text-muted",children:o.map((e,s)=>t("tr",{children:[a("td",{children:t("div",{className:"popup",children:[a("span",{children:"Hover"}),t("div",{className:"popup-content",children:[a("div",{"data-link-hover":"true",onClick:()=>{f({...i,_id:e._id,username:e.username,firstname:e.firstname,lastname:e.lastname}),y()},children:"edit"}),a("div",{"data-link-hover":"true",onClick:()=>L(e._id),children:"delete"})]})]})}),t("td",{children:[e.firstname," ",e.lastname]}),a("td",{children:e.role})]},e._id))})]}),t(d,{show:S,onHide:h,size:"lg",children:[t(d.Header,{children:[a(d.Title,{className:"text-capitalize",children:I(x)}),a("div",{className:"btn btn-icon btn-sm btn-light-primary text-primary",onClick:h,children:t("svg",{width:"23",height:"23",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a("rect",{id:"time-3-icon",opacity:"0.5",x:"6",y:"17.3137",width:"16",height:"2",rx:"1",transform:"rotate(-45 6 17.3137)",fill:"black"}),a("rect",{id:"time-3-icon",x:"7.41422",y:"6",width:"16",height:"2",rx:"1",transform:"rotate(45 7.41422 6)",fill:"black"})]})})]}),t(d.Body,{children:[t(n.Group,{as:N,className:"mb-3",children:[a(n.Label,{column:!0,lg:"3",className:"required",children:"Name"}),t(v,{lg:"9",className:"fv-row",children:[a(n.Control,{type:"text",name:"name",defaultValue:i.name,onChange:g,isInvalid:!!(l!=null&&l.name),className:"form-control-solid",placeholder:"Todo-name"}),a(n.Control.Feedback,{type:"invalid",children:(k=l==null?void 0:l.name)==null?void 0:k.message})]})]}),t(n.Group,{as:N,className:"mb-3",children:[a(n.Label,{column:!0,lg:"3",className:"required",children:"Url"}),t(v,{lg:"9",className:"fv-row",children:[a(n.Control,{type:"text",name:"url",defaultValue:i.url,onChange:g,isInvalid:!!(l!=null&&l.url),className:"form-control-solid",placeholder:"url"}),a(n.Control.Feedback,{type:"invalid",children:(_=l==null?void 0:l.url)==null?void 0:_.message})]})]}),t(n.Group,{as:N,className:"mb-3",children:[a(n.Label,{column:!0,lg:"3",className:"required",children:"Icon"}),t(v,{lg:"9",className:"fv-row",children:[a(n.Control,{type:"text",name:"icon",defaultValue:i.icon,onChange:g,isInvalid:!!(l!=null&&l.icon),className:"form-control-solid",placeholder:"icon"}),a(n.Control.Feedback,{type:"invalid",children:(F=l==null?void 0:l.icon)==null?void 0:F.message})]})]})]}),a(d.Footer,{children:a("button",{className:"btn btn-primary",onClick:$,children:i._id?"Update":"Save"})})]})]})]})}export{A as default};