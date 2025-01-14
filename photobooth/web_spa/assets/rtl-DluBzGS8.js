import{x as ne,aT as ae,N as se,an as ue,aH as le,aU as ie,B as A,e as u,O as re,aV as ce,aW as de,aX as fe,aY as ge,aZ as he,w as M,bv as ve,bw as R,bx as me,b9 as ye,by as be,aI as xe,bz as Pe,bA as Te,A as D,P as Ce,V as ke,o as Se,R as Oe,ag as qe,ae as Be}from"./index-x-yFzLoN.js";import{g as Ee,v as H,c as we,d as Fe,e as Ae,p as K,f as Me,r as W,s as Re}from"./position-engine-DGeMvu6T.js";const We=ne({name:"QMenu",inheritAttrs:!1,props:{...Ee,...ae,...se,...ue,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:H},self:{type:String,validator:H},offset:{type:Array,validator:we},scrollTarget:le,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...ie,"click","escapeKey"],setup(e,{slots:c,emit:d,attrs:g}){let a=null,f,l,h;const P=Oe(),{proxy:v}=P,{$q:o}=v,n=A(null),s=A(!1),j=u(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),L=re(e,o),{registerTick:Q,removeTick:I}=ce(),{registerTimeout:T}=de(),{transitionProps:U,transitionStyle:V}=fe(e),{localScrollTarget:C,changeScrollEvent:_,unconfigureScrollTarget:z}=Fe(e,w),{anchorEl:i,canShow:N}=Ae({showing:s}),{hide:k}=ge({showing:s,canShow:N,handleShow:p,handleHide:G,hideOnRouteChange:j,processOnMount:!0}),{showPortal:S,hidePortal:O,renderPortal:X}=he(P,n,ee,"menu"),m={anchorEl:i,innerRef:n,onClickOutside(t){if(e.persistent!==!0&&s.value===!0)return k(t),(t.type==="touchstart"||t.target.classList.contains("q-dialog__backdrop"))&&Be(t),!0}},q=u(()=>K(e.anchor||(e.cover===!0?"center middle":"bottom start"),o.lang.rtl)),Y=u(()=>e.cover===!0?q.value:K(e.self||"top start",o.lang.rtl)),Z=u(()=>(e.square===!0?" q-menu--square":"")+(L.value===!0?" q-menu--dark q-dark":"")),$=u(()=>e.autoClose===!0?{onClick:J}:{}),B=u(()=>s.value===!0&&e.persistent!==!0);M(B,t=>{t===!0?(ve(b),Me(m)):(R(b),W(m))});function y(){qe(()=>{let t=n.value;t&&t.contains(document.activeElement)!==!0&&(t=t.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||t.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||t.querySelector("[autofocus], [data-autofocus]")||t,t.focus({preventScroll:!0}))})}function p(t){if(a=e.noRefocus===!1?document.activeElement:null,me(F),S(),w(),f=void 0,t!==void 0&&(e.touchPosition||e.contextMenu)){const x=ye(t);if(x.left!==void 0){const{top:te,left:oe}=i.value.getBoundingClientRect();f={left:x.left-oe,top:x.top-te}}}l===void 0&&(l=M(()=>o.screen.width+"|"+o.screen.height+"|"+e.self+"|"+e.anchor+"|"+o.lang.rtl,r)),e.noFocus!==!0&&document.activeElement.blur(),Q(()=>{r(),e.noFocus!==!0&&y()}),T(()=>{o.platform.is.ios===!0&&(h=e.autoClose,n.value.click()),r(),S(!0),d("show",t)},e.transitionDuration)}function G(t){I(),O(),E(!0),a!==null&&(t===void 0||t.qClickOutside!==!0)&&(((t&&t.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),T(()=>{O(!0),d("hide",t)},e.transitionDuration)}function E(t){f=void 0,l!==void 0&&(l(),l=void 0),(t===!0||s.value===!0)&&(be(F),z(),W(m),R(b)),t!==!0&&(a=null)}function w(){(i.value!==null||e.scrollTarget!==void 0)&&(C.value=xe(i.value,e.scrollTarget),_(C.value,r))}function J(t){h!==!0?(Pe(v,t),d("click",t)):h=!1}function F(t){B.value===!0&&e.noFocus!==!0&&Te(n.value,t.target)!==!0&&y()}function b(t){d("escapeKey"),k(t)}function r(){Re({targetEl:n.value,offset:e.offset,anchorEl:i.value,anchorOrigin:q.value,selfOrigin:Y.value,absoluteOffset:f,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ee(){return D(ke,U.value,()=>s.value===!0?D("div",{role:"menu",...g,ref:n,tabindex:-1,class:["q-menu q-position-engine scroll"+Z.value,g.class],style:[g.style,V.value],...$.value},Ce(c.default)):null)}return Se(E),Object.assign(v,{focus:y,updatePosition:r}),X}});let De=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const c=document.createElement("div");Object.assign(c.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(c),e.scrollLeft=-1e3,De=e.scrollLeft>=0,e.remove()}export{We as Q,De as r};
