import{Q as m}from"./QPage-mkCqzv_8.js";import{d as u,j as f,B as d,C as _,o as h,f as o,l as p,m as v,p as l,g as i,n as s}from"./index-x-yFzLoN.js";import{_ as x,I as g}from"./ItemNotAvailableError-kCuIYweW.js";import"./QImg-dXaGt8HD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const w={key:0,class:"full-height full-width"},I={key:1,class:"full-height"},M=5e3,j=u({__name:"SlideshowPage",setup(k){const e=f(),a=d(0);let t;function r(){c(),clearTimeout(t),n()}function n(){t=window.setInterval(r,M)}function c(){a.value=Math.floor(Math.random()*e.collection_number_of_items)}return _(()=>{n()}),h(()=>{clearInterval(t)}),(B,T)=>(o(),p(m,{id:"slideshow-page",class:"row justify-center items-center flex flex-center absolute-full"},{default:v(()=>[l(e).collection_number_of_items>0?(o(),i("div",w,[s(x,{item:l(e).collection[a.value]},null,8,["item"])])):(o(),i("div",I,[s(g)]))]),_:1}))}});export{j as default};
