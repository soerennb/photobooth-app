import{Q as _}from"./QPage-CWHBaiGC.js";import{d as p,D as h,j as g,l as v,m as w,p as a,e as n,c as M,y as k,w as x,F as I,z as s,o as e}from"./index-pXyHF0TV.js";import{_ as T,I as b}from"./ItemNotAvailableError-Bo6z69YK.js";import{_ as y}from"./ReturnButton.vue_vue_type_script_setup_true_lang-JaMqSZl-.js";import"./QImg-DSvC3v7r.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QPageSticky-ZNy6v611.js";import"./vue-i18n-BHPX1aby.js";const B={key:0,class:"full-height full-width"},N={key:1,class:"full-height"},$=5e3,A=p({__name:"SlideshowPage",props:{standaloneMode:Boolean},setup(m){const c=m,t=h(),r=g(0);let o;function u(){d(),clearTimeout(o),l()}function l(){o=window.setInterval(u,$)}function d(){r.value=Math.floor(Math.random()*t.collection_number_of_items)}return v(()=>{l()}),w(()=>{clearInterval(o)}),(f,i)=>(e(),a(I,null,[n(_,{id:"slideshow-page",class:"row justify-center items-center flex flex-center absolute-full"},{default:x(()=>[s(t).collection_number_of_items>0?(e(),a("div",B,[n(T,{item:s(t).collection[r.value]},null,8,["item"])])):(e(),a("div",N,[n(b)]))]),_:1}),c.standaloneMode?k("",!0):(e(),M(y,{key:0,onTriggerReturn:i[0]||(i[0]=C=>f.$router.back())}))],64))}});export{A as default};
