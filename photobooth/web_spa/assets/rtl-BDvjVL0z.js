import{z as P,bl as be,bc as Y,ae as ye,ba as J,w as H,A as pe,o as O,N as ae,bd as Te,aJ as K,bs as U,aA as we,bt as Ee,s as Ce,aZ as He,K as Se,am as ke,aH as Me,a_ as We,e as C,L as Pe,bn as qe,be as Le,bu as Be,a$ as Ae,bv as ze,bw as $e,bx as Z,by as Fe,b2 as Re,bz as Ke,aI as De,bA as Oe,bB as je,y as G,M as Qe,T as Ie,af as Ve,ad as Ne}from"./index-CJvLDmP-.js";import{c as _e}from"./selection-BPn6LAZT.js";const Xe={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Ye={...Xe,contextMenu:Boolean};function Je({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:l,emit:c}=ae(),i=P(null);let f=null;function h(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const r={};o===void 0&&(Object.assign(r,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){be(a,13)===!0&&r.toggle(a)},contextClick(a){l.hide(a),Y(a),ye(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:Y,mobileTouch(a){if(r.mobileCleanup(a),h(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const s=a.target;J(r,"anchor",[[s,"touchmove","mobileCleanup","passive"],[s,"touchend","mobileCleanup","passive"],[s,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),f=setTimeout(()=>{f=null,l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),f!==null&&(clearTimeout(f),f=null),e.value===!0&&a!==void 0&&_e()}}),o=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let s;a===!0?l.$q.platform.is.mobile===!0?s=[[i.value,"touchstart","mobileTouch","passive"]]:s=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:s=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],J(r,"anchor",s)});function d(){Te(r,"anchor")}function g(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function x(){if(n.target===!1||n.target===""||l.$el.parentNode===null)i.value=null;else if(n.target===!0)g(l.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return H(()=>n.contextMenu,a=>{i.value!==null&&(d(),o(a))}),H(()=>n.target,()=>{i.value!==null&&d(),x()}),H(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?d():o())}),pe(()=>{x(),t!==!0&&n.modelValue===!0&&i.value===null&&c("update:modelValue",!1)}),O(()=>{f!==null&&clearTimeout(f),d()}),{anchorEl:i,canShow:h,anchorEvents:r}}function Ue(e,t){const o=P(null);let n;function l(f,h){const r=`${h!==void 0?"add":"remove"}EventListener`,d=h!==void 0?h:n;f!==window&&f[r]("scroll",d,K.passive),window[r]("scroll",d,K.passive),n=h}function c(){o.value!==null&&(l(o.value),o.value=null)}const i=H(()=>e.noParentEvent,()=>{o.value!==null&&(c(),t())});return O(i),{localScrollTarget:o,unconfigureScrollTarget:c,changeScrollEvent:l}}const{notPassiveCapture:q}=K,w=[];function L(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=U.length-1;for(;o>=0;){const n=U[o].$;if(n.type.name==="QTooltip"){o--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=w.length-1;n>=0;n--){const l=w[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Ze(e){w.push(e),w.length===1&&(document.addEventListener("mousedown",L,q),document.addEventListener("touchstart",L,q))}function ee(e){const t=w.findIndex(o=>o===e);t!==-1&&(w.splice(t,1),w.length===0&&(document.removeEventListener("mousedown",L,q),document.removeEventListener("touchstart",L,q)))}let te,ne;function oe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Ge(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const D={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{D[`${e}#ltr`]=e,D[`${e}#rtl`]=e});function le(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:D[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function et(e,t){let{top:o,left:n,right:l,bottom:c,width:i,height:f}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],c+=t[1],l+=t[0],i+=t[0],f+=t[1]),{top:o,bottom:c,height:f,left:n,right:l,width:i,middle:n+(l-n)/2,center:o+(c-o)/2}}function tt(e,t,o){let{top:n,left:l}=e.getBoundingClientRect();return n+=t.top,l+=t.left,o!==void 0&&(n+=o[1],l+=o[0]),{top:n,bottom:n+1,height:1,left:l,right:l+1,width:1,middle:l,center:n}}function nt(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function ie(e,t,o,n){return{top:e[o.vertical]-t[n.vertical],left:e[o.horizontal]-t[n.horizontal]}}function ue(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{ue(e,t+1)},10);return}const{targetEl:o,offset:n,anchorEl:l,anchorOrigin:c,selfOrigin:i,absoluteOffset:f,fit:h,cover:r,maxHeight:d,maxWidth:g}=e;if(we.is.ios===!0&&window.visualViewport!==void 0){const E=document.body.style,{offsetLeft:b,offsetTop:y}=window.visualViewport;b!==te&&(E.setProperty("--q-pe-left",b+"px"),te=b),y!==ne&&(E.setProperty("--q-pe-top",y+"px"),ne=y)}const{scrollLeft:x,scrollTop:a}=o,s=f===void 0?et(l,r===!0?[0,0]:n):tt(l,f,n);Object.assign(o.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:g,maxHeight:d,visibility:"visible"});const{offsetWidth:M,offsetHeight:S}=o,{elWidth:W,elHeight:B}=h===!0||r===!0?{elWidth:Math.max(s.width,M),elHeight:r===!0?Math.max(s.height,S):S}:{elWidth:M,elHeight:S};let v={maxWidth:g,maxHeight:d};(h===!0||r===!0)&&(v.minWidth=s.width+"px",r===!0&&(v.minHeight=s.height+"px")),Object.assign(o.style,v);const p=nt(W,B);let m=ie(s,p,c,i);if(f===void 0||n===void 0)R(m,s,p,c,i);else{const{top:E,left:b}=m;R(m,s,p,c,i);let y=!1;if(m.top!==E){y=!0;const T=2*n[1];s.center=s.top-=T,s.bottom-=T+2}if(m.left!==b){y=!0;const T=2*n[0];s.middle=s.left-=T,s.right-=T+2}y===!0&&(m=ie(s,p,c,i),R(m,s,p,c,i))}v={top:m.top+"px",left:m.left+"px"},m.maxHeight!==void 0&&(v.maxHeight=m.maxHeight+"px",s.height>m.maxHeight&&(v.minHeight=v.maxHeight)),m.maxWidth!==void 0&&(v.maxWidth=m.maxWidth+"px",s.width>m.maxWidth&&(v.minWidth=v.maxWidth)),Object.assign(o.style,v),o.scrollTop!==a&&(o.scrollTop=a),o.scrollLeft!==x&&(o.scrollLeft=x)}function R(e,t,o,n,l){const c=o.bottom,i=o.right,f=Ee(),h=window.innerHeight-f,r=document.body.clientWidth;if(e.top<0||e.top+c>h)if(l.vertical==="center")e.top=t[n.vertical]>h/2?Math.max(0,h-c):0,e.maxHeight=Math.min(c,h);else if(t[n.vertical]>h/2){const d=Math.min(h,n.vertical==="center"?t.center:n.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(c,d),e.top=Math.max(0,d-c)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(c,h-e.top);if(e.left<0||e.left+i>r)if(e.maxWidth=Math.min(i,r),l.horizontal==="middle")e.left=t[n.horizontal]>r/2?Math.max(0,r-i):0;else if(t[n.horizontal]>r/2){const d=Math.min(r,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,d),e.left=Math.max(0,d-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,r-e.left)}const at=Ce({name:"QMenu",inheritAttrs:!1,props:{...Ye,...He,...Se,...ke,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:oe},self:{type:String,validator:oe},offset:{type:Array,validator:Ge},scrollTarget:Me,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...We,"click","escapeKey"],setup(e,{slots:t,emit:o,attrs:n}){let l=null,c,i,f;const h=ae(),{proxy:r}=h,{$q:d}=r,g=P(null),x=P(!1),a=C(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),s=Pe(e,d),{registerTick:M,removeTick:S}=qe(),{registerTimeout:W}=Le(),{transitionProps:B,transitionStyle:v}=Be(e),{localScrollTarget:p,changeScrollEvent:m,unconfigureScrollTarget:E}=Ue(e,_),{anchorEl:b,canShow:y}=Je({showing:x}),{hide:T}=Ae({showing:x,canShow:y,handleShow:fe,handleHide:he,hideOnRouteChange:a,processOnMount:!0}),{showPortal:j,hidePortal:Q,renderPortal:se}=ze(h,g,ve,"menu"),A={anchorEl:b,innerRef:g,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return T(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&Ne(u),!0}},I=C(()=>le(e.anchor||(e.cover===!0?"center middle":"bottom start"),d.lang.rtl)),re=C(()=>e.cover===!0?I.value:le(e.self||"top start",d.lang.rtl)),ce=C(()=>(e.square===!0?" q-menu--square":"")+(s.value===!0?" q-menu--dark q-dark":"")),de=C(()=>e.autoClose===!0?{onClick:me}:{}),V=C(()=>x.value===!0&&e.persistent!==!0);H(V,u=>{u===!0?($e($),Ze(A)):(Z($),ee(A))});function z(){Ve(()=>{let u=g.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function fe(u){if(l=e.noRefocus===!1?document.activeElement:null,Fe(X),j(),_(),c=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const F=Re(u);if(F.left!==void 0){const{top:ge,left:xe}=b.value.getBoundingClientRect();c={left:F.left-xe,top:F.top-ge}}}i===void 0&&(i=H(()=>d.screen.width+"|"+d.screen.height+"|"+e.self+"|"+e.anchor+"|"+d.lang.rtl,k)),e.noFocus!==!0&&document.activeElement.blur(),M(()=>{k(),e.noFocus!==!0&&z()}),W(()=>{d.platform.is.ios===!0&&(f=e.autoClose,g.value.click()),k(),j(!0),o("show",u)},e.transitionDuration)}function he(u){S(),Q(),N(!0),l!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?l.closest('[tabindex]:not([tabindex^="-"])'):void 0)||l).focus(),l=null),W(()=>{Q(!0),o("hide",u)},e.transitionDuration)}function N(u){c=void 0,i!==void 0&&(i(),i=void 0),(u===!0||x.value===!0)&&(Ke(X),E(),ee(A),Z($)),u!==!0&&(l=null)}function _(){(b.value!==null||e.scrollTarget!==void 0)&&(p.value=De(b.value,e.scrollTarget),m(p.value,k))}function me(u){f!==!0?(Oe(r,u),o("click",u)):f=!1}function X(u){V.value===!0&&e.noFocus!==!0&&je(g.value,u.target)!==!0&&z()}function $(u){o("escapeKey"),T(u)}function k(){ue({targetEl:g.value,offset:e.offset,anchorEl:b.value,anchorOrigin:I.value,selfOrigin:re.value,absoluteOffset:c,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ve(){return G(Ie,B.value,()=>x.value===!0?G("div",{role:"menu",...n,ref:g,tabindex:-1,class:["q-menu q-position-engine scroll"+ce.value,n.class],style:[n.style,v.value],...de.value},Qe(t.default)):null)}return O(N),Object.assign(r,{focus:z,updatePosition:k}),se}});let ot=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,ot=e.scrollLeft>=0,e.remove()}export{at as Q,ot as r};
