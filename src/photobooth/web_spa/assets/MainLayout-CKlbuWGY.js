import{Q as p,a as i}from"./QLayout-DNgatlcD.js";import{d as c,u as _,a as m,b as l,c as d,w as o,e as r,r as f,o as h}from"./index-pXyHF0TV.js";const x=c({__name:"MainLayout",setup(v){const a=_(),t=l(),s=m();return a.$subscribe((n,e)=>{e.state=="counting"&&s.path!="/"&&(console.log("counting state received, pushing to index page to countdown"),t.push("/")),e.state=="present_capture"&&t.push({name:"itempresenter",params:{id:a.last_captured_mediaitem_id}}),e.state=="approve_capture"&&e.ask_user_for_approval&&t.push({path:"/itemapproval"})}),(n,e)=>{const u=f("router-view");return h(),d(p,{id:"main-layout",view:"hHh lpR fFf"},{default:o(()=>[r(i,null,{default:o(()=>[r(u)]),_:1})]),_:1})}}});export{x as default};
