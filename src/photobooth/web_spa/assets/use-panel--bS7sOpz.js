import{M as ge,bc as I,aB as B,bd as X,Z as we,be as $,b4 as U,bf as me,as as oe,bg as Ce,ak as G,j as We,b0 as Ve,a8 as Fe,b1 as Ie,a9 as qe,aa as Xe,bh as xe,aV as je,bi as ue,bj as Ye,n as F,p,b2 as Re,bk as Ue,a5 as q,bl as He,al as pe,o as Ke,q as Qe,s as Ze,m as A,P as he,R as de,T as Ge,aA as Je,bm as et}from"./index-BzVvpN4o.js";import{c as Pe}from"./selection-HJl5A4JM.js";import{b as Z}from"./format-CJebrXOQ.js";const ce={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},tt=Object.keys(ce);ce.all=!0;function J(e){const a={};for(const u of tt)e[u]===!0&&(a[u]=!0);return Object.keys(a).length===0?ce:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const nt=["INPUT","TEXTAREA"];function ee(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&nt.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function le(e,a,u){const h=U(e);let n,t=h.left-a.event.x,o=h.top-a.event.y,s=Math.abs(t),d=Math.abs(o);const c=a.direction;c.horizontal===!0&&c.vertical!==!0?n=t<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?n=o<0?"up":"down":c.up===!0&&o<0?(n="up",s>d&&(c.left===!0&&t<0?n="left":c.right===!0&&t>0&&(n="right"))):c.down===!0&&o>0?(n="down",s>d&&(c.left===!0&&t<0?n="left":c.right===!0&&t>0&&(n="right"))):c.left===!0&&t<0?(n="left",s<d&&(c.up===!0&&o<0?n="up":c.down===!0&&o>0&&(n="down"))):c.right===!0&&t>0&&(n="right",s<d&&(c.up===!0&&o<0?n="up":c.down===!0&&o>0&&(n="down")));let r=!1;if(n===void 0&&u===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};n=a.event.lastDir,r=!0,n==="left"||n==="right"?(h.left-=t,s=0,t=0):(h.top-=o,d=0,o=0)}return{synthetic:r,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:h,direction:n,isFirst:a.event.isFirst,isFinal:u===!0,duration:Date.now()-a.event.time,distance:{x:s,y:d},offset:{x:t,y:o},delta:{x:h.left-a.event.lastX,y:h.top-a.event.lastY}}}}let at=0;const se=ge({name:"touch-pan",beforeMount(e,{value:a,modifiers:u}){if(u.mouse!==!0&&B.has.touch!==!0)return;function h(t,o){u.mouse===!0&&o===!0?G(t):(u.stop===!0&&oe(t),u.prevent===!0&&me(t))}const n={uid:"qvtp_"+at++,handler:a,modifiers:u,direction:J(u),noop:we,mouseStart(t){ee(t,n)&&Ce(t)&&($(n,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),n.start(t,!0))},touchStart(t){if(ee(t,n)){const o=t.target;$(n,"temp",[[o,"touchmove","move","notPassiveCapture"],[o,"touchcancel","end","passiveCapture"],[o,"touchend","end","passiveCapture"]]),n.start(t)}},start(t,o){if(B.is.firefox===!0&&X(e,!0),n.lastEvt=t,o===!0||u.stop===!0){if(n.direction.all!==!0&&(o!==!0||n.modifiers.mouseAllDir!==!0&&n.modifiers.mousealldir!==!0)){const c=t.type.indexOf("mouse")!==-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);t.defaultPrevented===!0&&me(c),t.cancelBubble===!0&&oe(c),Object.assign(c,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:t.qClonedBy===void 0?[n.uid]:t.qClonedBy.concat(n.uid)}),n.initialEvent={target:t.target,event:c}}oe(t)}const{left:s,top:d}=U(t);n.event={x:s,y:d,time:Date.now(),mouse:o===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:d}},move(t){if(n.event===void 0)return;const o=U(t),s=o.left-n.event.x,d=o.top-n.event.y;if(s===0&&d===0)return;n.lastEvt=t;const c=n.event.mouse===!0,r=()=>{h(t,c);let g;u.preserveCursor!==!0&&u.preservecursor!==!0&&(g=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Pe(),n.styleCleanup=f=>{if(n.styleCleanup=void 0,g!==void 0&&(document.documentElement.style.cursor=g),document.body.classList.remove("non-selectable"),c===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};f!==void 0?setTimeout(()=>{P(),f()},50):P()}else f!==void 0&&f()}};if(n.event.detected===!0){n.event.isFirst!==!0&&h(t,n.event.mouse);const{payload:g,synthetic:f}=le(t,n,!1);g!==void 0&&(n.handler(g)===!1?n.end(t):(n.styleCleanup===void 0&&n.event.isFirst===!0&&r(),n.event.lastX=g.position.left,n.event.lastY=g.position.top,n.event.lastDir=f===!0?void 0:g.direction,n.event.isFirst=!1));return}if(n.direction.all===!0||c===!0&&(n.modifiers.mouseAllDir===!0||n.modifiers.mousealldir===!0)){r(),n.event.detected=!0,n.move(t);return}const w=Math.abs(s),m=Math.abs(d);w!==m&&(n.direction.horizontal===!0&&w>m||n.direction.vertical===!0&&w<m||n.direction.up===!0&&w<m&&d<0||n.direction.down===!0&&w<m&&d>0||n.direction.left===!0&&w>m&&s<0||n.direction.right===!0&&w>m&&s>0?(n.event.detected=!0,n.move(t)):n.end(t,!0))},end(t,o){if(n.event!==void 0){if(I(n,"temp"),B.is.firefox===!0&&X(e,!1),o===!0)n.styleCleanup?.(),n.event.detected!==!0&&n.initialEvent!==void 0&&n.initialEvent.target.dispatchEvent(n.initialEvent.event);else if(n.event.detected===!0){n.event.isFirst===!0&&n.handler(le(t===void 0?n.lastEvt:t,n).payload);const{payload:s}=le(t===void 0?n.lastEvt:t,n,!0),d=()=>{n.handler(s)};n.styleCleanup!==void 0?n.styleCleanup(d):d()}n.event=void 0,n.initialEvent=void 0,n.lastEvt=void 0}}};if(e.__qtouchpan=n,u.mouse===!0){const t=u.mouseCapture===!0||u.mousecapture===!0?"Capture":"";$(n,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}B.has.touch===!0&&$(n,"main",[[e,"touchstart","touchStart",`passive${u.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const u=e.__qtouchpan;u!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&u.end(),u.handler=a.value),u.direction=J(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),I(a,"main"),I(a,"temp"),B.is.firefox===!0&&X(e,!1),a.styleCleanup?.(),delete e.__qtouchpan)}}),ye=150,ct=We({name:"QDrawer",inheritAttrs:!1,props:{...Ie,...Fe,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...Ve,"onLayout","miniState"],setup(e,{slots:a,emit:u,attrs:h}){const n=qe(),{proxy:{$q:t}}=n,o=Xe(e,t),{preventBodyScroll:s}=He(),{registerTimeout:d,removeTimeout:c}=xe(),r=je(Ye,ue);if(r===ue)return console.error("QDrawer needs to be child of QLayout"),ue;let w,m=null,g;const f=F(e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint),P=p(()=>e.mini===!0&&f.value!==!0),C=p(()=>P.value===!0?e.miniWidth:e.width),y=F(e.showIfAbove===!0&&f.value===!1?!0:e.modelValue===!0),j=p(()=>e.persistent!==!0&&(f.value===!0||ke.value===!0));function Y(i,v){if(H(),i!==!1&&r.animate(),T(0),f.value===!0){const k=r.instances[x.value];k?.belowBreakpoint===!0&&k.hide(!1),D(1),r.isContainer.value!==!0&&s(!0)}else D(0),i!==!1&&ae(!1);d(()=>{i!==!1&&ae(!0),v!==!0&&u("show",i)},ye)}function L(i,v){W(),i!==!1&&r.animate(),D(0),T(E.value*C.value),ie(),v!==!0?d(()=>{u("hide",i)},ye):c()}const{show:z,hide:N}=Re({showing:y,hideOnRouteChange:j,handleShow:Y,handleHide:L}),{addToHistory:H,removeFromHistory:W}=Ue(y,N,j),V={belowBreakpoint:f,hide:N},S=p(()=>e.side==="right"),E=p(()=>(t.lang.rtl===!0?-1:1)*(S.value===!0?1:-1)),K=F(0),M=F(!1),l=F(!1),b=F(C.value*E.value),x=p(()=>S.value===!0?"left":"right"),O=p(()=>y.value===!0&&f.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:C.value:0),te=p(()=>e.overlay===!0||e.miniToOverlay===!0||r.view.value.indexOf(S.value?"R":"L")!==-1||t.platform.is.ios===!0&&r.isContainer.value===!0),R=p(()=>e.overlay===!1&&y.value===!0&&f.value===!1),ke=p(()=>e.overlay===!0&&y.value===!0&&f.value===!1),Se=p(()=>"fullscreen q-drawer__backdrop"+(y.value===!1&&M.value===!1?" hidden":"")),Te=p(()=>({backgroundColor:`rgba(0,0,0,${K.value*.4})`})),ve=p(()=>S.value===!0?r.rows.value.top[2]==="r":r.rows.value.top[0]==="l"),Be=p(()=>S.value===!0?r.rows.value.bottom[2]==="r":r.rows.value.bottom[0]==="l"),Ae=p(()=>{const i={};return r.header.space===!0&&ve.value===!1&&(te.value===!0?i.top=`${r.header.offset}px`:r.header.space===!0&&(i.top=`${r.header.size}px`)),r.footer.space===!0&&Be.value===!1&&(te.value===!0?i.bottom=`${r.footer.offset}px`:r.footer.space===!0&&(i.bottom=`${r.footer.size}px`)),i}),Ee=p(()=>{const i={width:`${C.value}px`,transform:`translateX(${b.value}px)`};return f.value===!0?i:Object.assign(i,Ae.value)}),Me=p(()=>"q-drawer__content fit "+(r.isContainer.value!==!0?"scroll":"overflow-auto")),Oe=p(()=>`q-drawer q-drawer--${e.side}`+(l.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(o.value===!0?" q-drawer--dark q-dark":"")+(M.value===!0?" no-transition":y.value===!0?"":" q-layout--prevent-focus")+(f.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(te.value===!0||R.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ve.value===!0?" q-drawer--top-padding":""))),De=p(()=>{const i=t.lang.rtl===!0?e.side:x.value;return[[se,ze,void 0,{[i]:!0,mouse:!0}]]}),_e=p(()=>{const i=t.lang.rtl===!0?x.value:e.side;return[[se,fe,void 0,{[i]:!0,mouse:!0}]]}),$e=p(()=>{const i=t.lang.rtl===!0?x.value:e.side;return[[se,fe,void 0,{[i]:!0,mouse:!0,mouseAllDir:!0}]]});function ne(){Ne(f,e.behavior==="mobile"||e.behavior!=="desktop"&&r.totalWidth.value<=e.breakpoint)}q(f,i=>{i===!0?(w=y.value,y.value===!0&&N(!1)):e.overlay===!1&&e.behavior!=="mobile"&&w!==!1&&(y.value===!0?(T(0),D(0),ie()):z(!1))}),q(()=>e.side,(i,v)=>{r.instances[v]===V&&(r.instances[v]=void 0,r[v].space=!1,r[v].offset=0),r.instances[i]=V,r[i].size=C.value,r[i].space=R.value,r[i].offset=O.value}),q(r.totalWidth,()=>{(r.isContainer.value===!0||document.qScrollPrevented!==!0)&&ne()}),q(()=>e.behavior+e.breakpoint,ne),q(r.isContainer,i=>{y.value===!0&&s(i!==!0),i===!0&&ne()}),q(r.scrollbarWidth,()=>{T(y.value===!0?0:void 0)}),q(O,i=>{_("offset",i)}),q(R,i=>{u("onLayout",i),_("space",i)}),q(S,()=>{T()}),q(C,i=>{T(),re(e.miniToOverlay,i)}),q(()=>e.miniToOverlay,i=>{re(i,C.value)}),q(()=>t.lang.rtl,()=>{T()}),q(()=>e.mini,()=>{e.noMiniAnimation||e.modelValue===!0&&(Le(),r.animate())}),q(P,i=>{u("miniState",i)});function T(i){i===void 0?pe(()=>{i=y.value===!0?0:C.value,T(E.value*i)}):(r.isContainer.value===!0&&S.value===!0&&(f.value===!0||Math.abs(i)===C.value)&&(i+=E.value*r.scrollbarWidth.value),b.value=i)}function D(i){K.value=i}function ae(i){const v=i===!0?"remove":r.isContainer.value!==!0?"add":"";v!==""&&document.body.classList[v]("q-body--drawer-toggle")}function Le(){m!==null&&clearTimeout(m),n.proxy&&n.proxy.$el&&n.proxy.$el.classList.add("q-drawer--mini-animate"),l.value=!0,m=setTimeout(()=>{m=null,l.value=!1,n?.proxy?.$el?.classList.remove("q-drawer--mini-animate")},150)}function ze(i){if(y.value!==!1)return;const v=C.value,k=Z(i.distance.x,0,v);if(i.isFinal===!0){k>=Math.min(75,v)===!0?z():(r.animate(),D(0),T(E.value*v)),M.value=!1;return}T((t.lang.rtl===!0?S.value!==!0:S.value)?Math.max(v-k,0):Math.min(0,k-v)),D(Z(k/v,0,1)),i.isFirst===!0&&(M.value=!0)}function fe(i){if(y.value!==!0)return;const v=C.value,k=i.direction===e.side,Q=(t.lang.rtl===!0?k!==!0:k)?Z(i.distance.x,0,v):0;if(i.isFinal===!0){Math.abs(Q)<Math.min(75,v)===!0?(r.animate(),D(1),T(0)):N(),M.value=!1;return}T(E.value*Q),D(Z(1-Q/v,0,1)),i.isFirst===!0&&(M.value=!0)}function ie(){s(!1),ae(!0)}function _(i,v){r.update(e.side,i,v)}function Ne(i,v){i.value!==v&&(i.value=v)}function re(i,v){_("size",i===!0?e.miniWidth:v)}return r.instances[e.side]=V,re(e.miniToOverlay,C.value),_("space",R.value),_("offset",O.value),e.showIfAbove===!0&&e.modelValue!==!0&&y.value===!0&&e["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!0),Ke(()=>{u("onLayout",R.value),u("miniState",P.value),w=e.showIfAbove===!0;const i=()=>{(y.value===!0?Y:L)(!1,!0)};if(r.totalWidth.value!==0){pe(i);return}g=q(r.totalWidth,()=>{g(),g=void 0,y.value===!1&&e.showIfAbove===!0&&f.value===!1?z(!1):i()})}),Qe(()=>{g?.(),m!==null&&(clearTimeout(m),m=null),y.value===!0&&ie(),r.instances[e.side]===V&&(r.instances[e.side]=void 0,_("size",0),_("offset",0),_("space",!1))}),()=>{const i=[];f.value===!0&&(e.noSwipeOpen===!1&&i.push(Ze(A("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),De.value)),i.push(he("div",{ref:"backdrop",class:Se.value,style:Te.value,"aria-hidden":"true",onClick:N},void 0,"backdrop",e.noSwipeBackdrop!==!0&&y.value===!0,()=>$e.value)));const v=P.value===!0&&a.mini!==void 0,k=[A("div",{...h,key:""+v,class:[Me.value,h.class]},v===!0?a.mini():de(a.default))];return e.elevated===!0&&y.value===!0&&k.push(A("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),i.push(he("aside",{ref:"content",class:Oe.value,style:Ee.value},k,"contentclose",e.noSwipeClose!==!0&&f.value===!0,()=>_e.value)),A("div",{class:"q-drawer-container"},i)}}});function it(e){const a=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((u,h)=>{const n=parseFloat(u);n&&(a[h]=n)}),a}const rt=ge({name:"touch-swipe",beforeMount(e,{value:a,arg:u,modifiers:h}){if(h.mouse!==!0&&B.has.touch!==!0)return;const n=h.mouseCapture===!0?"Capture":"",t={handler:a,sensitivity:it(u),direction:J(h),noop:we,mouseStart(o){ee(o,t)&&Ce(o)&&($(t,"temp",[[document,"mousemove","move",`notPassive${n}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(ee(o,t)){const s=o.target;$(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","notPassiveCapture"],[s,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,s){B.is.firefox===!0&&X(e,!0);const d=U(o);t.event={x:d.left,y:d.top,time:Date.now(),mouse:s===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){G(o);return}const s=Date.now()-t.event.time;if(s===0)return;const d=U(o),c=d.left-t.event.x,r=Math.abs(c),w=d.top-t.event.y,m=Math.abs(w);if(t.event.mouse!==!0){if(r<t.sensitivity[1]&&m<t.sensitivity[1]){t.end(o);return}}else if(window.getSelection().toString()!==""){t.end(o);return}else if(r<t.sensitivity[2]&&m<t.sensitivity[2])return;const g=r/s,f=m/s;t.direction.vertical===!0&&r<m&&r<100&&f>t.sensitivity[0]&&(t.event.dir=w<0?"up":"down"),t.direction.horizontal===!0&&r>m&&m<100&&g>t.sensitivity[0]&&(t.event.dir=c<0?"left":"right"),t.direction.up===!0&&r<m&&w<0&&r<100&&f>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&r<m&&w>0&&r<100&&f>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&r>m&&c<0&&m<100&&g>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&r>m&&c>0&&m<100&&g>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(G(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Pe(),t.styleCleanup=P=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const C=()=>{document.body.classList.remove("no-pointer-events--children")};P===!0?setTimeout(C,50):C()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:s,distance:{x:r,y:m}})):t.end(o)},end(o){t.event!==void 0&&(I(t,"temp"),B.is.firefox===!0&&X(e,!1),t.styleCleanup?.(!0),o!==void 0&&t.event.dir!==!1&&G(o),t.event=void 0)}};if(e.__qtouchswipe=t,h.mouse===!0){const o=h.mouseCapture===!0||h.mousecapture===!0?"Capture":"";$(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}B.has.touch===!0&&$(t,"main",[[e,"touchstart","touchStart",`passive${h.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const u=e.__qtouchswipe;u!==void 0&&(a.oldValue!==a.value&&(typeof a.value!="function"&&u.end(),u.handler=a.value),u.direction=J(a.modifiers))},beforeUnmount(e){const a=e.__qtouchswipe;a!==void 0&&(I(a,"main"),I(a,"temp"),B.is.firefox===!0&&X(e,!1),a.styleCleanup?.(),delete e.__qtouchswipe)}});function ot(){let e=Object.create(null);return{getCache:(a,u)=>e[a]===void 0?e[a]=typeof u=="function"?u():u:e[a],setCache(a,u){e[a]=u},hasCache(a){return Object.hasOwnProperty.call(e,a)},clearCache(a){a!==void 0?delete e[a]:e=Object.create(null)}}}const vt={name:{required:!0},disable:Boolean},be={setup(e,{slots:a}){return()=>A("div",{class:"q-panel scroll",role:"tabpanel"},de(a.default))}},ft={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},mt=["update:modelValue","beforeTransition","transition"];function pt(){const{props:e,emit:a,proxy:u}=qe(),{getCache:h}=ot(),{registerTimeout:n}=xe();let t,o;const s=F(null),d={value:null};function c(l){const b=e.vertical===!0?"up":"left";W((u.$q.lang.rtl===!0?-1:1)*(l.direction===b?1:-1))}const r=p(()=>[[rt,c,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),w=p(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),m=p(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),g=p(()=>`--q-transition-duration: ${e.transitionDuration}ms`),f=p(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),P=p(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),C=p(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);q(()=>e.modelValue,(l,b)=>{const x=L(l)===!0?z(l):-1;o!==!0&&H(x===-1?0:x<z(b)?-1:1),d.value!==x&&(d.value=x,a("beforeTransition",l,b),n(()=>{a("transition",l,b)},e.transitionDuration))});function y(){W(1)}function j(){W(-1)}function Y(l){a("update:modelValue",l)}function L(l){return l!=null&&l!==""}function z(l){return t.findIndex(b=>b.props.name===l&&b.props.disable!==""&&b.props.disable!==!0)}function N(){return t.filter(l=>l.props.disable!==""&&l.props.disable!==!0)}function H(l){const b=l!==0&&e.animated===!0&&d.value!==-1?"q-transition--"+(l===-1?w.value:m.value):null;s.value!==b&&(s.value=b)}function W(l,b=d.value){let x=b+l;for(;x!==-1&&x<t.length;){const O=t[x];if(O!==void 0&&O.props.disable!==""&&O.props.disable!==!0){H(l),o=!0,a("update:modelValue",O.props.name),setTimeout(()=>{o=!1});return}x+=l}e.infinite===!0&&t.length!==0&&b!==-1&&b!==t.length&&W(l,l===-1?t.length:-1)}function V(){const l=z(e.modelValue);return d.value!==l&&(d.value=l),!0}function S(){const l=L(e.modelValue)===!0&&V()&&t[d.value];return e.keepAlive===!0?[A(et,P.value,[A(C.value===!0?h(f.value,()=>({...be,name:f.value})):be,{key:f.value,style:g.value},()=>l)])]:[A("div",{class:"q-panel scroll",style:g.value,key:f.value,role:"tabpanel"},[l])]}function E(){if(t.length!==0)return e.animated===!0?[A(Ge,{name:s.value},S)]:S()}function K(l){return t=Je(de(l.default,[])).filter(b=>b.props!==null&&b.props.slot===void 0&&L(b.props.name)===!0),t.length}function M(){return t}return Object.assign(u,{next:y,previous:j,goTo:Y}),{panelIndex:d,panelDirectives:r,updatePanelsList:K,updatePanelIndex:V,getPanelContent:E,getEnabledPanels:N,getPanels:M,isValidPanelName:L,keepAliveProps:P,needsUniqueKeepAliveWrapper:C,goToPanelByOffset:W,goToPanel:Y,nextPanel:y,previousPanel:j}}export{ct as Q,rt as T,mt as a,ft as b,pt as c,se as d,ot as e,vt as u};
