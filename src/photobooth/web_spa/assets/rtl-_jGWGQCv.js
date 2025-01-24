import{x as P,e as b,A as p,O as R,M as I,aj as Ce,N,ak as pe,B as H,P as $,bo as de,ad as fe,aR as Te,bh as te,ae as Se,az as ne,w as L,C as Be,o as V,ay as Le,aS as O,bu as le,aL as He,bv as Me,aq as We,am as Pe,ar as Ae,as as _e,at as Re,au as $e,av as ze,aw as Fe,ax as Qe,bw as Ke,bx as ae,by as je,b8 as Oe,bz as De,aA as Ie,bA as Ne,bB as Ve,U as Ue,af as Xe}from"./index-WJdzVhFN.js";import{c as Ye}from"./selection-DOWrMyhv.js";const ct=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=b(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>p("div",{class:l.value},R(t.default))}}),dt=P({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const l=b(()=>parseInt(e.lines,10)),n=b(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(l.value===1?" ellipsis":"")),a=b(()=>e.lines!==void 0&&l.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":l.value}:null);return()=>p("div",{style:a.value,class:n.value},R(t.default))}}),ft=P({name:"QItem",props:{...I,...Ce,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=$(),a=N(e,n),{hasLink:s,linkAttrs:o,linkClass:m,linkTag:h,navigateOnClick:d}=pe(),f=H(null),v=H(null),x=b(()=>e.clickable===!0||s.value===!0||e.tag==="label"),i=b(()=>e.disable!==!0&&x.value===!0),r=b(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(a.value===!0?" q-item--dark":"")+(s.value===!0&&e.active===null?m.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(i.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),T=b(()=>e.insetLevel===void 0?null:{["padding"+(n.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function E(c){i.value===!0&&(v.value!==null&&(c.qKeyEvent!==!0&&document.activeElement===f.value?v.value.focus():document.activeElement===v.value&&f.value.focus()),d(c))}function S(c){if(i.value===!0&&de(c,[13,32])===!0){fe(c),c.qKeyEvent=!0;const y=new MouseEvent("click",c);y.qKeyEvent=!0,f.value.dispatchEvent(y)}l("keyup",c)}function M(){const c=Te(t.default,[]);return i.value===!0&&c.unshift(p("div",{class:"q-focus-helper",tabindex:-1,ref:v})),c}return()=>{const c={ref:f,class:r.value,style:T.value,role:"listitem",onClick:E,onKeyup:S};return i.value===!0?(c.tabindex=e.tabindex||"0",Object.assign(c,o.value)):x.value===!0&&(c["aria-disabled"]="true"),p(h.value,c,M())}}}),Ge=["ul","ol"],mt=P({name:"QList",props:{...I,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const l=$(),n=N(e,l.proxy.$q),a=b(()=>Ge.includes(e.tag)?null:"list"),s=b(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>p(e.tag,{class:s.value,role:a.value},R(t.default))}}),Je={target:{type:[Boolean,String,Element],default:!0},noParentEvent:Boolean},Ze={...Je,contextMenu:Boolean};function et({showing:e,avoidEmit:t,configureAnchorEl:l}){const{props:n,proxy:a,emit:s}=$(),o=H(null);let m=null;function h(i){return o.value===null?!1:i===void 0||i.touches===void 0||i.touches.length<=1}const d={};l===void 0&&(Object.assign(d,{hide(i){a.hide(i)},toggle(i){a.toggle(i),i.qAnchorHandled=!0},toggleKey(i){de(i,13)===!0&&d.toggle(i)},contextClick(i){a.hide(i),te(i),Se(()=>{a.show(i),i.qAnchorHandled=!0})},prevent:te,mobileTouch(i){if(d.mobileCleanup(i),h(i)!==!0)return;a.hide(i),o.value.classList.add("non-selectable");const r=i.target;ne(d,"anchor",[[r,"touchmove","mobileCleanup","passive"],[r,"touchend","mobileCleanup","passive"],[r,"touchcancel","mobileCleanup","passive"],[o.value,"contextmenu","prevent","notPassive"]]),m=setTimeout(()=>{m=null,a.show(i),i.qAnchorHandled=!0},300)},mobileCleanup(i){o.value.classList.remove("non-selectable"),m!==null&&(clearTimeout(m),m=null),e.value===!0&&i!==void 0&&Ye()}}),l=function(i=n.contextMenu){if(n.noParentEvent===!0||o.value===null)return;let r;i===!0?a.$q.platform.is.mobile===!0?r=[[o.value,"touchstart","mobileTouch","passive"]]:r=[[o.value,"mousedown","hide","passive"],[o.value,"contextmenu","contextClick","notPassive"]]:r=[[o.value,"click","toggle","passive"],[o.value,"keyup","toggleKey","passive"]],ne(d,"anchor",r)});function f(){Le(d,"anchor")}function v(i){for(o.value=i;o.value.classList.contains("q-anchor--skip");)o.value=o.value.parentNode;l()}function x(){if(n.target===!1||n.target===""||a.$el.parentNode===null)o.value=null;else if(n.target===!0)v(a.$el.parentNode);else{let i=n.target;if(typeof n.target=="string")try{i=document.querySelector(n.target)}catch{i=void 0}i!=null?(o.value=i.$el||i,l()):(o.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return L(()=>n.contextMenu,i=>{o.value!==null&&(f(),l(i))}),L(()=>n.target,()=>{o.value!==null&&f(),x()}),L(()=>n.noParentEvent,i=>{o.value!==null&&(i===!0?f():l())}),Be(()=>{x(),t!==!0&&n.modelValue===!0&&o.value===null&&s("update:modelValue",!1)}),V(()=>{m!==null&&clearTimeout(m),f()}),{anchorEl:o,canShow:h,anchorEvents:d}}function tt(e,t){const l=H(null);let n;function a(m,h){const d=`${h!==void 0?"add":"remove"}EventListener`,f=h!==void 0?h:n;m!==window&&m[d]("scroll",f,O.passive),window[d]("scroll",f,O.passive),n=h}function s(){l.value!==null&&(a(l.value),l.value=null)}const o=L(()=>e.noParentEvent,()=>{l.value!==null&&(s(),t())});return V(o),{localScrollTarget:l,unconfigureScrollTarget:s,changeScrollEvent:a}}const{notPassiveCapture:A}=O,C=[];function _(e){const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let l=le.length-1;for(;l>=0;){const n=le[l].$;if(n.type.name==="QTooltip"){l--;continue}if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;l--}for(let n=C.length-1;n>=0;n--){const a=C[n];if((a.anchorEl.value===null||a.anchorEl.value.contains(t)===!1)&&(t===document.body||a.innerRef.value!==null&&a.innerRef.value.contains(t)===!1))e.qClickOutside=!0,a.onClickOutside(e);else return}}function nt(e){C.push(e),C.length===1&&(document.addEventListener("mousedown",_,A),document.addEventListener("touchstart",_,A))}function ie(e){const t=C.findIndex(l=>l===e);t!==-1&&(C.splice(t,1),C.length===0&&(document.removeEventListener("mousedown",_,A),document.removeEventListener("touchstart",_,A)))}let oe,ue;function se(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function lt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const D={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{D[`${e}#ltr`]=e,D[`${e}#rtl`]=e});function re(e,t){const l=e.split(" ");return{vertical:l[0],horizontal:D[`${l[1]}#${t===!0?"rtl":"ltr"}`]}}function at(e,t){let{top:l,left:n,right:a,bottom:s,width:o,height:m}=e.getBoundingClientRect();return t!==void 0&&(l-=t[1],n-=t[0],s+=t[1],a+=t[0],o+=t[0],m+=t[1]),{top:l,bottom:s,height:m,left:n,right:a,width:o,middle:n+(a-n)/2,center:l+(s-l)/2}}function it(e,t,l){let{top:n,left:a}=e.getBoundingClientRect();return n+=t.top,a+=t.left,l!==void 0&&(n+=l[1],a+=l[0]),{top:n,bottom:n+1,height:1,left:a,right:a+1,width:1,middle:a,center:n}}function ot(e,t){return{top:0,center:t/2,bottom:t,left:0,middle:e/2,right:e}}function ce(e,t,l,n){return{top:e[l.vertical]-t[n.vertical],left:e[l.horizontal]-t[n.horizontal]}}function me(e,t=0){if(e.targetEl===null||e.anchorEl===null||t>5)return;if(e.targetEl.offsetHeight===0||e.targetEl.offsetWidth===0){setTimeout(()=>{me(e,t+1)},10);return}const{targetEl:l,offset:n,anchorEl:a,anchorOrigin:s,selfOrigin:o,absoluteOffset:m,fit:h,cover:d,maxHeight:f,maxWidth:v}=e;if(He.is.ios===!0&&window.visualViewport!==void 0){const B=document.body.style,{offsetLeft:q,offsetTop:k}=window.visualViewport;q!==oe&&(B.setProperty("--q-pe-left",q+"px"),oe=q),k!==ue&&(B.setProperty("--q-pe-top",k+"px"),ue=k)}const{scrollLeft:x,scrollTop:i}=l,r=m===void 0?at(a,d===!0?[0,0]:n):it(a,m,n);Object.assign(l.style,{top:0,left:0,minWidth:null,minHeight:null,maxWidth:v,maxHeight:f,visibility:"visible"});const{offsetWidth:T,offsetHeight:E}=l,{elWidth:S,elHeight:M}=h===!0||d===!0?{elWidth:Math.max(r.width,T),elHeight:d===!0?Math.max(r.height,E):E}:{elWidth:T,elHeight:E};let c={maxWidth:v,maxHeight:f};(h===!0||d===!0)&&(c.minWidth=r.width+"px",d===!0&&(c.minHeight=r.height+"px")),Object.assign(l.style,c);const y=ot(S,M);let g=ce(r,y,s,o);if(m===void 0||n===void 0)j(g,r,y,s,o);else{const{top:B,left:q}=g;j(g,r,y,s,o);let k=!1;if(g.top!==B){k=!0;const w=2*n[1];r.center=r.top-=w,r.bottom-=w+2}if(g.left!==q){k=!0;const w=2*n[0];r.middle=r.left-=w,r.right-=w+2}k===!0&&(g=ce(r,y,s,o),j(g,r,y,s,o))}c={top:g.top+"px",left:g.left+"px"},g.maxHeight!==void 0&&(c.maxHeight=g.maxHeight+"px",r.height>g.maxHeight&&(c.minHeight=c.maxHeight)),g.maxWidth!==void 0&&(c.maxWidth=g.maxWidth+"px",r.width>g.maxWidth&&(c.minWidth=c.maxWidth)),Object.assign(l.style,c),l.scrollTop!==i&&(l.scrollTop=i),l.scrollLeft!==x&&(l.scrollLeft=x)}function j(e,t,l,n,a){const s=l.bottom,o=l.right,m=Me(),h=window.innerHeight-m,d=document.body.clientWidth;if(e.top<0||e.top+s>h)if(a.vertical==="center")e.top=t[n.vertical]>h/2?Math.max(0,h-s):0,e.maxHeight=Math.min(s,h);else if(t[n.vertical]>h/2){const f=Math.min(h,n.vertical==="center"?t.center:n.vertical===a.vertical?t.bottom:t.top);e.maxHeight=Math.min(s,f),e.top=Math.max(0,f-s)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===a.vertical?t.top:t.bottom),e.maxHeight=Math.min(s,h-e.top);if(e.left<0||e.left+o>d)if(e.maxWidth=Math.min(o,d),a.horizontal==="middle")e.left=t[n.horizontal]>d/2?Math.max(0,d-o):0;else if(t[n.horizontal]>d/2){const f=Math.min(d,n.horizontal==="middle"?t.middle:n.horizontal===a.horizontal?t.right:t.left);e.maxWidth=Math.min(o,f),e.left=Math.max(0,f-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===a.horizontal?t.left:t.right),e.maxWidth=Math.min(o,d-e.left)}const ht=P({name:"QMenu",inheritAttrs:!1,props:{...Ze,...We,...I,...Pe,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:se},self:{type:String,validator:se},offset:{type:Array,validator:lt},scrollTarget:Ae,touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[..._e,"click","escapeKey"],setup(e,{slots:t,emit:l,attrs:n}){let a=null,s,o,m;const h=$(),{proxy:d}=h,{$q:f}=d,v=H(null),x=H(!1),i=b(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),r=N(e,f),{registerTick:T,removeTick:E}=Re(),{registerTimeout:S}=$e(),{transitionProps:M,transitionStyle:c}=ze(e),{localScrollTarget:y,changeScrollEvent:g,unconfigureScrollTarget:B}=tt(e,Z),{anchorEl:q,canShow:k}=et({showing:x}),{hide:w}=Fe({showing:x,canShow:k,handleShow:xe,handleHide:ye,hideOnRouteChange:i,processOnMount:!0}),{showPortal:U,hidePortal:X,renderPortal:he}=Qe(h,v,ke,"menu"),z={anchorEl:q,innerRef:v,onClickOutside(u){if(e.persistent!==!0&&x.value===!0)return w(u),(u.type==="touchstart"||u.target.classList.contains("q-dialog__backdrop"))&&fe(u),!0}},Y=b(()=>re(e.anchor||(e.cover===!0?"center middle":"bottom start"),f.lang.rtl)),ve=b(()=>e.cover===!0?Y.value:re(e.self||"top start",f.lang.rtl)),ge=b(()=>(e.square===!0?" q-menu--square":"")+(r.value===!0?" q-menu--dark q-dark":"")),be=b(()=>e.autoClose===!0?{onClick:qe}:{}),G=b(()=>x.value===!0&&e.persistent!==!0);L(G,u=>{u===!0?(Ke(Q),nt(z)):(ae(Q),ie(z))});function F(){Xe(()=>{let u=v.value;u&&u.contains(document.activeElement)!==!0&&(u=u.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.querySelector("[autofocus], [data-autofocus]")||u,u.focus({preventScroll:!0}))})}function xe(u){if(a=e.noRefocus===!1?document.activeElement:null,je(ee),U(),Z(),s=void 0,u!==void 0&&(e.touchPosition||e.contextMenu)){const K=Oe(u);if(K.left!==void 0){const{top:we,left:Ee}=q.value.getBoundingClientRect();s={left:K.left-Ee,top:K.top-we}}}o===void 0&&(o=L(()=>f.screen.width+"|"+f.screen.height+"|"+e.self+"|"+e.anchor+"|"+f.lang.rtl,W)),e.noFocus!==!0&&document.activeElement.blur(),T(()=>{W(),e.noFocus!==!0&&F()}),S(()=>{f.platform.is.ios===!0&&(m=e.autoClose,v.value.click()),W(),U(!0),l("show",u)},e.transitionDuration)}function ye(u){E(),X(),J(!0),a!==null&&(u===void 0||u.qClickOutside!==!0)&&(((u&&u.type.indexOf("key")===0?a.closest('[tabindex]:not([tabindex^="-"])'):void 0)||a).focus(),a=null),S(()=>{X(!0),l("hide",u)},e.transitionDuration)}function J(u){s=void 0,o!==void 0&&(o(),o=void 0),(u===!0||x.value===!0)&&(De(ee),B(),ie(z),ae(Q)),u!==!0&&(a=null)}function Z(){(q.value!==null||e.scrollTarget!==void 0)&&(y.value=Ie(q.value,e.scrollTarget),g(y.value,W))}function qe(u){m!==!0?(Ne(d,u),l("click",u)):m=!1}function ee(u){G.value===!0&&e.noFocus!==!0&&Ve(v.value,u.target)!==!0&&F()}function Q(u){l("escapeKey"),w(u)}function W(){me({targetEl:v.value,offset:e.offset,anchorEl:q.value,anchorOrigin:Y.value,selfOrigin:ve.value,absoluteOffset:s,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function ke(){return p(Ue,M.value,()=>x.value===!0?p("div",{role:"menu",...n,ref:v,tabindex:-1,class:["q-menu q-position-engine scroll"+ge.value,n.class],style:[n.style,c.value],...be.value},R(t.default)):null)}return V(J),Object.assign(d,{focus:F,updatePosition:W}),he}});let ut=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,ut=e.scrollLeft>=0,e.remove()}export{ht as Q,mt as a,ft as b,ct as c,dt as d,lt as e,tt as f,et as g,nt as h,ut as i,re as p,ie as r,me as s,Je as u,se as v};
