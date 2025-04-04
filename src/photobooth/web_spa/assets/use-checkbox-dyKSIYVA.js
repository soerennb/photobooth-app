import{c as mt,d as Ue,e as St,f as gt,u as ht,g as $t,h as st,i as Nt,a as jt}from"./QInput-kUzVdZnz.js";import{a0 as Kt,ab as Te,n as M,p as s,a7 as Ve,an as te,b8 as Qt,N as Ut,aj as Wt,ak as Xt,q as bt,m,j as We,aR as yt,aa as Vt,ac as wt,aS as Ct,S as Yt,bb as Gt,H as Re,aT as Jt,am as Z,P as Ae,br as Zt,bh as Ne,bv as el,bw as tl,au as be,bq as ll,a2 as ul,ad as kt,bx as ye,U as nl}from"./index-D9pOAo_m.js";import{b as al,c as ol,a as il}from"./position-engine-YupXWmem.js";import{r as Qe,Q as rl}from"./rtl-D_7SKGwT.js";import{n as ct}from"./format-CJebrXOQ.js";const Q=1e3,sl=["start","center","end","start-force","center-force","end-force"],xt=Array.prototype.filter,cl=window.getComputedStyle(document.body).overflowAnchor===void 0?Kt:function(e,r){e!==null&&(e._qOverflowAnimationFrame!==void 0&&cancelAnimationFrame(e._qOverflowAnimationFrame),e._qOverflowAnimationFrame=requestAnimationFrame(()=>{if(e===null)return;e._qOverflowAnimationFrame=void 0;const u=e.children||[];xt.call(u,_=>_.dataset&&_.dataset.qVsAnchor!==void 0).forEach(_=>{delete _.dataset.qVsAnchor});const f=u[r];f?.dataset&&(f.dataset.qVsAnchor="")}))};function we(e,r){return e+r}function je(e,r,u,f,_,o,A,y){const S=e===window?document.scrollingElement||document.documentElement:e,O=_===!0?"offsetWidth":"offsetHeight",c={scrollStart:0,scrollViewSize:-A-y,scrollMaxSize:0,offsetStart:-A,offsetEnd:-y};if(_===!0?(e===window?(c.scrollStart=window.pageXOffset||window.scrollX||document.body.scrollLeft||0,c.scrollViewSize+=document.documentElement.clientWidth):(c.scrollStart=S.scrollLeft,c.scrollViewSize+=S.clientWidth),c.scrollMaxSize=S.scrollWidth,o===!0&&(c.scrollStart=(Qe===!0?c.scrollMaxSize-c.scrollViewSize:0)-c.scrollStart)):(e===window?(c.scrollStart=window.pageYOffset||window.scrollY||document.body.scrollTop||0,c.scrollViewSize+=document.documentElement.clientHeight):(c.scrollStart=S.scrollTop,c.scrollViewSize+=S.clientHeight),c.scrollMaxSize=S.scrollHeight),u!==null)for(let C=u.previousElementSibling;C!==null;C=C.previousElementSibling)C.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetStart+=C[O]);if(f!==null)for(let C=f.nextElementSibling;C!==null;C=C.nextElementSibling)C.classList.contains("q-virtual-scroll--skip")===!1&&(c.offsetEnd+=C[O]);if(r!==e){const C=S.getBoundingClientRect(),V=r.getBoundingClientRect();_===!0?(c.offsetStart+=V.left-C.left,c.offsetEnd-=V.width):(c.offsetStart+=V.top-C.top,c.offsetEnd-=V.height),e!==window&&(c.offsetStart+=c.scrollStart),c.offsetEnd+=c.scrollMaxSize-c.offsetStart}return c}function dt(e,r,u,f){r==="end"&&(r=(e===window?document.body:e)[u===!0?"scrollWidth":"scrollHeight"]),e===window?u===!0?(f===!0&&(r=(Qe===!0?document.body.scrollWidth-document.documentElement.clientWidth:0)-r),window.scrollTo(r,window.pageYOffset||window.scrollY||document.body.scrollTop||0)):window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,r):u===!0?(f===!0&&(r=(Qe===!0?e.scrollWidth-e.offsetWidth:0)-r),e.scrollLeft=r):e.scrollTop=r}function Ie(e,r,u,f){if(u>=f)return 0;const _=r.length,o=Math.floor(u/Q),A=Math.floor((f-1)/Q)+1;let y=e.slice(o,A).reduce(we,0);return u%Q!==0&&(y-=r.slice(o*Q,u).reduce(we,0)),f%Q!==0&&f!==_&&(y-=r.slice(f,A*Q).reduce(we,0)),y}const pt={virtualScrollSliceSize:{type:[Number,String],default:10},virtualScrollSliceRatioBefore:{type:[Number,String],default:1},virtualScrollSliceRatioAfter:{type:[Number,String],default:1},virtualScrollItemSize:{type:[Number,String],default:24},virtualScrollStickySizeStart:{type:[Number,String],default:0},virtualScrollStickySizeEnd:{type:[Number,String],default:0},tableColspan:[Number,String]},xl=Object.keys(pt),ft={virtualScrollHorizontal:Boolean,onVirtualScroll:Function,...pt};function dl({virtualScrollLength:e,getVirtualScrollTarget:r,getVirtualScrollEl:u,virtualScrollItemSizeComputed:f}){const _=Te(),{props:o,emit:A,proxy:y}=_,{$q:S}=y;let O,c,C,V=[],p;const k=M(0),E=M(0),d=M({}),D=M(null),U=M(null),P=M(null),F=M({from:0,to:0}),re=s(()=>o.tableColspan!==void 0?o.tableColspan:100);f===void 0&&(f=s(()=>o.virtualScrollItemSize));const L=s(()=>f.value+";"+o.virtualScrollHorizontal),K=s(()=>L.value+";"+o.virtualScrollSliceRatioBefore+";"+o.virtualScrollSliceRatioAfter);Ve(K,()=>{W()}),Ve(L,Y);function Y(){ce(c,!0)}function le(l){ce(l===void 0?c:l)}function G(l,i){const h=r();if(h==null||h.nodeType===8)return;const z=je(h,u(),D.value,U.value,o.virtualScrollHorizontal,S.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd);C!==z.scrollViewSize&&W(z.scrollViewSize),v(h,z,Math.min(e.value-1,Math.max(0,parseInt(l,10)||0)),0,sl.indexOf(i)!==-1?i:c!==-1&&l>c?"end":"start")}function se(){const l=r();if(l==null||l.nodeType===8)return;const i=je(l,u(),D.value,U.value,o.virtualScrollHorizontal,S.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd),h=e.value-1,z=i.scrollMaxSize-i.offsetStart-i.offsetEnd-E.value;if(O===i.scrollStart)return;if(i.scrollMaxSize<=0){v(l,i,0,0);return}C!==i.scrollViewSize&&W(i.scrollViewSize),$(F.value.from);const R=Math.floor(i.scrollMaxSize-Math.max(i.scrollViewSize,i.offsetEnd)-Math.min(p[h],i.scrollViewSize/2));if(R>0&&Math.ceil(i.scrollStart)>=R){v(l,i,h,i.scrollMaxSize-i.offsetEnd-V.reduce(we,0));return}let x=0,w=i.scrollStart-i.offsetStart,T=w;if(w<=z&&w+i.scrollViewSize>=k.value)w-=k.value,x=F.value.from,T=w;else for(let b=0;w>=V[b]&&x<h;b++)w-=V[b],x+=Q;for(;w>0&&x<h;)w-=p[x],w>-i.scrollViewSize?(x++,T=w):T=p[x]+w;v(l,i,x,T)}function v(l,i,h,z,R){const x=typeof R=="string"&&R.indexOf("-force")!==-1,w=x===!0?R.replace("-force",""):R,T=w!==void 0?w:"start";let b=Math.max(0,h-d.value[T]),N=b+d.value.total;N>e.value&&(N=e.value,b=Math.max(0,N-d.value.total)),O=i.scrollStart;const ee=b!==F.value.from||N!==F.value.to;if(ee===!1&&w===void 0){Ce(h);return}const{activeElement:ze}=document,J=P.value;ee===!0&&J!==null&&J!==ze&&J.contains(ze)===!0&&(J.addEventListener("focusout",ue),setTimeout(()=>{J?.removeEventListener("focusout",ue)})),cl(J,h-b);const _e=w!==void 0?p.slice(b,h).reduce(we,0):0;if(ee===!0){const ne=N>=F.value.from&&b<=F.value.to?F.value.to:N;F.value={from:b,to:ne},k.value=Ie(V,p,0,b),E.value=Ie(V,p,N,e.value),requestAnimationFrame(()=>{F.value.to!==N&&O===i.scrollStart&&(F.value={from:F.value.from,to:N},E.value=Ie(V,p,N,e.value))})}requestAnimationFrame(()=>{if(O!==i.scrollStart)return;ee===!0&&$(b);const ne=p.slice(b,h).reduce(we,0),ae=ne+i.offsetStart+k.value,Oe=ae+p[h];let xe=ae+z;if(w!==void 0){const Le=ne-_e,pe=i.scrollStart+Le;xe=x!==!0&&pe<ae&&Oe<pe+i.scrollViewSize?pe:w==="end"?Oe-i.scrollViewSize:ae-(w==="start"?0:Math.round((i.scrollViewSize-p[h])/2))}O=xe,dt(l,xe,o.virtualScrollHorizontal,S.lang.rtl),Ce(h)})}function $(l){const i=P.value;if(i){const h=xt.call(i.children,b=>b.classList&&b.classList.contains("q-virtual-scroll--skip")===!1),z=h.length,R=o.virtualScrollHorizontal===!0?b=>b.getBoundingClientRect().width:b=>b.offsetHeight;let x=l,w,T;for(let b=0;b<z;){for(w=R(h[b]),b++;b<z&&h[b].classList.contains("q-virtual-scroll--with-prev")===!0;)w+=R(h[b]),b++;T=w-p[x],T!==0&&(p[x]+=T,V[Math.floor(x/Q)]+=T),x++}}}function ue(){P.value?.focus()}function ce(l,i){const h=1*f.value;(i===!0||Array.isArray(p)===!1)&&(p=[]);const z=p.length;p.length=e.value;for(let x=e.value-1;x>=z;x--)p[x]=h;const R=Math.floor((e.value-1)/Q);V=[];for(let x=0;x<=R;x++){let w=0;const T=Math.min((x+1)*Q,e.value);for(let b=x*Q;b<T;b++)w+=p[b];V.push(w)}c=-1,O=void 0,k.value=Ie(V,p,0,F.value.from),E.value=Ie(V,p,F.value.to,e.value),l>=0?($(F.value.from),te(()=>{G(l)})):de()}function W(l){if(l===void 0&&typeof window<"u"){const w=r();w!=null&&w.nodeType!==8&&(l=je(w,u(),D.value,U.value,o.virtualScrollHorizontal,S.lang.rtl,o.virtualScrollStickySizeStart,o.virtualScrollStickySizeEnd).scrollViewSize)}C=l;const i=parseFloat(o.virtualScrollSliceRatioBefore)||0,h=parseFloat(o.virtualScrollSliceRatioAfter)||0,z=1+i+h,R=l===void 0||l<=0?1:Math.ceil(l/f.value),x=Math.max(1,R,Math.ceil((o.virtualScrollSliceSize>0?o.virtualScrollSliceSize:10)/z));d.value={total:Math.ceil(x*z),start:Math.ceil(x*i),center:Math.ceil(x*(.5+i)),end:Math.ceil(x*(1+i)),view:R}}function Ee(l,i){const h=o.virtualScrollHorizontal===!0?"width":"height",z={["--q-virtual-scroll-item-"+h]:f.value+"px"};return[l==="tbody"?m(l,{class:"q-virtual-scroll__padding",key:"before",ref:D},[m("tr",[m("td",{style:{[h]:`${k.value}px`,...z},colspan:re.value})])]):m(l,{class:"q-virtual-scroll__padding",key:"before",ref:D,style:{[h]:`${k.value}px`,...z}}),m(l,{class:"q-virtual-scroll__content",key:"content",ref:P,tabindex:-1},i.flat()),l==="tbody"?m(l,{class:"q-virtual-scroll__padding",key:"after",ref:U},[m("tr",[m("td",{style:{[h]:`${E.value}px`,...z},colspan:re.value})])]):m(l,{class:"q-virtual-scroll__padding",key:"after",ref:U,style:{[h]:`${E.value}px`,...z}})]}function Ce(l){c!==l&&(o.onVirtualScroll!==void 0&&A("virtualScroll",{index:l,from:F.value.from,to:F.value.to-1,direction:l<c?"decrease":"increase",ref:y}),c=l)}W();const de=Qt(se,S.platform.is.ios===!0?120:35);Ut(()=>{W()});let ke=!1;return Wt(()=>{ke=!0}),Xt(()=>{if(ke!==!0)return;const l=r();O!==void 0&&l!==void 0&&l!==null&&l.nodeType!==8?dt(l,O,o.virtualScrollHorizontal,S.lang.rtl):G(c)}),bt(()=>{de.cancel()}),Object.assign(y,{scrollTo:G,reset:Y,refresh:le}),{virtualScrollSliceRange:F,virtualScrollSliceSizeComputed:d,setVirtualScrollSize:W,onVirtualScrollEvt:de,localResetVirtualScroll:ce,padVirtualScroll:Ee,scrollTo:G,reset:Y,refresh:le}}const fl=We({name:"QField",inheritAttrs:!1,props:{...Ue,tag:{type:String,default:"label"}},emits:mt,setup(){return St(gt({tagProp:!0}))}}),vl={xs:8,sm:10,md:14,lg:20,xl:24},ml=We({name:"QChip",props:{...Vt,...yt,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:r,emit:u}){const{proxy:{$q:f}}=Te(),_=wt(e,f),o=Ct(e,vl),A=s(()=>e.selected===!0||e.icon!==void 0),y=s(()=>e.selected===!0?e.iconSelected||f.iconSet.chip.selected:e.icon),S=s(()=>e.iconRemove||f.iconSet.chip.remove),O=s(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),c=s(()=>{const d=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(d?` text-${d} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(O.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(_.value===!0?" q-chip--dark q-dark":"")}),C=s(()=>{const d=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},D={...d,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||f.lang.label.remove};return{chip:d,remove:D}});function V(d){d.keyCode===13&&p(d)}function p(d){e.disable||(u("update:selected",!e.selected),u("click",d))}function k(d){(d.keyCode===void 0||d.keyCode===13)&&(Z(d),e.disable===!1&&(u("update:modelValue",!1),u("remove")))}function E(){const d=[];O.value===!0&&d.push(m("div",{class:"q-focus-helper"})),A.value===!0&&d.push(m(Re,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const D=e.label!==void 0?[m("div",{class:"ellipsis"},[e.label])]:void 0;return d.push(m("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},Jt(r.default,D))),e.iconRight&&d.push(m(Re,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&d.push(m(Re,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:S.value,...C.value.remove,onClick:k,onKeyup:k})),d}return()=>{if(e.modelValue===!1)return;const d={class:c.value,style:o.value};return O.value===!0&&Object.assign(d,C.value.chip,{onClick:p,onKeyup:V}),Yt("div",d,E(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[Gt,e.ripple]])}}}),vt=e=>["add","add-unique","toggle"].includes(e),Sl=".*+?^${}()|[]\\",gl=Object.keys(Ue);function Ke(e,r){if(typeof e=="function")return e;const u=e!==void 0?e:r;return f=>f!==null&&typeof f=="object"&&u in f?f[u]:f}const pl=We({name:"QSelect",inheritAttrs:!1,props:{...ft,...ht,...Ue,modelValue:{required:!0},multiple:Boolean,displayValue:[String,Number],displayValueHtml:Boolean,dropdownIcon:String,options:{type:Array,default:()=>[]},optionValue:[Function,String],optionLabel:[Function,String],optionDisable:[Function,String],hideSelected:Boolean,hideDropdownIcon:Boolean,fillInput:Boolean,maxValues:[Number,String],optionsDense:Boolean,optionsDark:{type:Boolean,default:null},optionsSelectedClass:String,optionsHtml:Boolean,optionsCover:Boolean,menuShrink:Boolean,menuAnchor:String,menuSelf:String,menuOffset:Array,popupContentClass:String,popupContentStyle:[String,Array,Object],popupNoRouteDismiss:Boolean,useInput:Boolean,useChips:Boolean,newValueMode:{type:String,validator:vt},mapOptions:Boolean,emitValue:Boolean,disableTabSelection:Boolean,inputDebounce:{type:[Number,String],default:500},inputClass:[Array,String,Object],inputStyle:[Array,String,Object],tabindex:{type:[String,Number],default:0},autocomplete:String,transitionShow:{},transitionHide:{},transitionDuration:{},behavior:{type:String,validator:e=>["default","menu","dialog"].includes(e),default:"default"},virtualScrollItemSize:ft.virtualScrollItemSize.type,onNewValue:Function,onFilter:Function},emits:[...mt,"add","remove","inputValue","keyup","keypress","keydown","popupShow","popupHide","filterAbort"],setup(e,{slots:r,emit:u}){const{proxy:f}=Te(),{$q:_}=f,o=M(!1),A=M(!1),y=M(-1),S=M(""),O=M(!1),c=M(!1);let C=null,V=null,p,k,E,d=null,D,U,P,F;const re=M(null),L=M(null),K=M(null),Y=M(null),le=M(null),G=$t(e),se=Nt(nt),v=s(()=>Array.isArray(e.options)?e.options.length:0),$=s(()=>e.virtualScrollItemSize===void 0?e.optionsDense===!0?24:48:e.virtualScrollItemSize),{virtualScrollSliceRange:ue,virtualScrollSliceSizeComputed:ce,localResetVirtualScroll:W,padVirtualScroll:Ee,onVirtualScrollEvt:Ce,scrollTo:de,setVirtualScrollSize:ke}=dl({virtualScrollLength:v,getVirtualScrollTarget:zt,getVirtualScrollEl:lt,virtualScrollItemSizeComputed:$}),l=gt(),i=s(()=>{const t=e.mapOptions===!0&&e.multiple!==!0,n=e.modelValue!==void 0&&(e.modelValue!==null||t===!0)?e.multiple===!0&&Array.isArray(e.modelValue)?e.modelValue:[e.modelValue]:[];if(e.mapOptions===!0&&Array.isArray(e.options)===!0){const a=e.mapOptions===!0&&p!==void 0?p:[],g=n.map(I=>It(I,a));return e.modelValue===null&&t===!0?g.filter(I=>I!==null):g}return n}),h=s(()=>{const t={};return gl.forEach(n=>{const a=e[n];a!==void 0&&(t[n]=a)}),t}),z=s(()=>e.optionsDark===null?l.isDark.value:e.optionsDark),R=s(()=>st(i.value)),x=s(()=>{let t="q-field__input q-placeholder col";return e.hideSelected===!0||i.value.length===0?[t,e.inputClass]:(t+=" q-field__input--padding",e.inputClass===void 0?t:[t,e.inputClass])}),w=s(()=>(e.virtualScrollHorizontal===!0?"q-virtual-scroll--horizontal":"")+(e.popupContentClass?" "+e.popupContentClass:"")),T=s(()=>v.value===0),b=s(()=>i.value.map(t=>j.value(t)).join(", ")),N=s(()=>e.displayValue!==void 0?e.displayValue:b.value),ee=s(()=>e.optionsHtml===!0?()=>!0:t=>t?.html===!0),ze=s(()=>e.displayValueHtml===!0||e.displayValue===void 0&&(e.optionsHtml===!0||i.value.some(ee.value))),J=s(()=>l.focused.value===!0?e.tabindex:-1),_e=s(()=>{const t={tabindex:e.tabindex,role:"combobox","aria-label":e.label,"aria-readonly":e.readonly===!0?"true":"false","aria-autocomplete":e.useInput===!0?"list":"none","aria-expanded":o.value===!0?"true":"false","aria-controls":`${l.targetUid.value}_lb`};return y.value>=0&&(t["aria-activedescendant"]=`${l.targetUid.value}_${y.value}`),t}),ne=s(()=>({id:`${l.targetUid.value}_lb`,role:"listbox","aria-multiselectable":e.multiple===!0?"true":"false"})),ae=s(()=>i.value.map((t,n)=>({index:n,opt:t,html:ee.value(t),selected:!0,removeAtIndex:At,toggleOption:oe,tabindex:J.value}))),Oe=s(()=>{if(v.value===0)return[];const{from:t,to:n}=ue.value;return e.options.slice(t,n).map((a,g)=>{const I=fe.value(a)===!0,q=De(a)===!0,H=t+g,B={clickable:!0,active:q,activeClass:pe.value,manualFocus:!0,focused:!1,disable:I,tabindex:-1,dense:e.optionsDense,dark:z.value,role:"option","aria-selected":q===!0?"true":"false",id:`${l.targetUid.value}_${H}`,onClick:()=>{oe(a)}};return I!==!0&&(y.value===H&&(B.focused=!0),_.platform.is.desktop===!0&&(B.onMousemove=()=>{o.value===!0&&ve(H)})),{index:H,opt:a,html:ee.value(a),label:j.value(a),selected:B.active,focused:B.focused,toggleOption:oe,setOptionIndex:ve,itemProps:B}})}),xe=s(()=>e.dropdownIcon!==void 0?e.dropdownIcon:_.iconSet.arrow.dropdown),Le=s(()=>e.optionsCover===!1&&e.outlined!==!0&&e.standout!==!0&&e.borderless!==!0&&e.rounded!==!0),pe=s(()=>e.optionsSelectedClass!==void 0?e.optionsSelectedClass:e.color!==void 0?`text-${e.color}`:""),X=s(()=>Ke(e.optionValue,"value")),j=s(()=>Ke(e.optionLabel,"label")),fe=s(()=>Ke(e.optionDisable,"disable")),Fe=s(()=>i.value.map(X.value)),qt=s(()=>{const t={onInput:nt,onChange:se,onKeydown:tt,onKeyup:Ze,onKeypress:et,onFocus:Ge,onClick(n){k===!0&&be(n)}};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=se,t});Ve(i,t=>{p=t,e.useInput===!0&&e.fillInput===!0&&e.multiple!==!0&&l.innerLoading.value!==!0&&(A.value!==!0&&o.value!==!0||R.value!==!0)&&(E!==!0&&he(),(A.value===!0||o.value===!0)&&me(""))},{immediate:!0}),Ve(()=>e.fillInput,he),Ve(o,Pe),Ve(v,Pt);function Xe(t){return e.emitValue===!0?X.value(t):t}function He(t){if(t!==-1&&t<i.value.length)if(e.multiple===!0){const n=e.modelValue.slice();u("remove",{index:t,value:n.splice(t,1)[0]}),u("update:modelValue",n)}else u("update:modelValue",null)}function At(t){He(t),l.focus()}function Ye(t,n){const a=Xe(t);if(e.multiple!==!0){e.fillInput===!0&&qe(j.value(t),!0,!0),u("update:modelValue",a);return}if(i.value.length===0){u("add",{index:0,value:a}),u("update:modelValue",e.multiple===!0?[a]:a);return}if(n===!0&&De(t)===!0||e.maxValues!==void 0&&e.modelValue.length>=e.maxValues)return;const g=e.modelValue.slice();u("add",{index:g.length,value:a}),g.push(a),u("update:modelValue",g)}function oe(t,n){if(l.editable.value!==!0||t===void 0||fe.value(t)===!0)return;const a=X.value(t);if(e.multiple!==!0){n!==!0&&(qe(e.fillInput===!0?j.value(t):"",!0,!0),ie()),L.value?.focus(),(i.value.length===0||Ae(X.value(i.value[0]),a)!==!0)&&u("update:modelValue",e.emitValue===!0?a:t);return}if((k!==!0||O.value===!0)&&l.focus(),Ge(),i.value.length===0){const q=e.emitValue===!0?a:t;u("add",{index:0,value:q}),u("update:modelValue",e.multiple===!0?[q]:q);return}const g=e.modelValue.slice(),I=Fe.value.findIndex(q=>Ae(q,a));if(I!==-1)u("remove",{index:I,value:g.splice(I,1)[0]});else{if(e.maxValues!==void 0&&g.length>=e.maxValues)return;const q=e.emitValue===!0?a:t;u("add",{index:g.length,value:q}),g.push(q)}u("update:modelValue",g)}function ve(t){if(_.platform.is.desktop!==!0)return;const n=t!==-1&&t<v.value?t:-1;y.value!==n&&(y.value=n)}function Be(t=1,n){if(o.value===!0){let a=y.value;do a=ct(a+t,-1,v.value-1);while(a!==-1&&a!==y.value&&fe.value(e.options[a])===!0);y.value!==a&&(ve(a),de(a),n!==!0&&e.useInput===!0&&e.fillInput===!0&&Me(a>=0?j.value(e.options[a]):D,!0))}}function It(t,n){const a=g=>Ae(X.value(g),t);return e.options.find(a)||n.find(a)||t}function De(t){const n=X.value(t);return Fe.value.find(a=>Ae(a,n))!==void 0}function Ge(t){e.useInput===!0&&L.value!==null&&(t===void 0||L.value===t.target&&t.target.value===b.value)&&L.value.select()}function Je(t){ll(t,27)===!0&&o.value===!0&&(be(t),ie(),he()),u("keyup",t)}function Ze(t){const{value:n}=t.target;if(t.keyCode!==void 0){Je(t);return}if(t.target.value="",C!==null&&(clearTimeout(C),C=null),V!==null&&(clearTimeout(V),V=null),he(),typeof n=="string"&&n.length!==0){const a=n.toLocaleLowerCase(),g=q=>{const H=e.options.find(B=>String(q.value(B)).toLocaleLowerCase()===a);return H===void 0?!1:(i.value.indexOf(H)===-1?oe(H):ie(),!0)},I=q=>{g(X)!==!0&&q!==!0&&g(j)!==!0&&me(n,!0,()=>I(!0))};I()}else l.clearValue(t)}function et(t){u("keypress",t)}function tt(t){if(u("keydown",t),Zt(t)===!0)return;const n=S.value.length!==0&&(e.newValueMode!==void 0||e.onNewValue!==void 0),a=t.shiftKey!==!0&&e.disableTabSelection!==!0&&e.multiple!==!0&&(y.value!==-1||n===!0);if(t.keyCode===27){Ne(t);return}if(t.keyCode===9&&a===!1){Se();return}if(t.target===void 0||t.target.id!==l.targetUid.value||l.editable.value!==!0)return;if(t.keyCode===40&&l.innerLoading.value!==!0&&o.value===!1){Z(t),ge();return}if(t.keyCode===8&&(e.useChips===!0||e.clearable===!0)&&e.hideSelected!==!0&&S.value.length===0){e.multiple===!0&&Array.isArray(e.modelValue)===!0?He(e.modelValue.length-1):e.multiple!==!0&&e.modelValue!==null&&u("update:modelValue",null);return}(t.keyCode===35||t.keyCode===36)&&(typeof S.value!="string"||S.value.length===0)&&(Z(t),y.value=-1,Be(t.keyCode===36?1:-1,e.multiple)),(t.keyCode===33||t.keyCode===34)&&ce.value!==void 0&&(Z(t),y.value=Math.max(-1,Math.min(v.value,y.value+(t.keyCode===33?-1:1)*ce.value.view)),Be(t.keyCode===33?1:-1,e.multiple)),(t.keyCode===38||t.keyCode===40)&&(Z(t),Be(t.keyCode===38?-1:1,e.multiple));const g=v.value;if((P===void 0||F<Date.now())&&(P=""),g>0&&e.useInput!==!0&&t.key!==void 0&&t.key.length===1&&t.altKey===!1&&t.ctrlKey===!1&&t.metaKey===!1&&(t.keyCode!==32||P.length!==0)){o.value!==!0&&ge(t);const I=t.key.toLocaleLowerCase(),q=P.length===1&&P[0]===I;F=Date.now()+1500,q===!1&&(Z(t),P+=I);const H=new RegExp("^"+P.split("").map($e=>Sl.indexOf($e)!==-1?"\\"+$e:$e).join(".*"),"i");let B=y.value;if(q===!0||B<0||H.test(j.value(e.options[B]))!==!0)do B=ct(B+1,-1,g-1);while(B!==y.value&&(fe.value(e.options[B])===!0||H.test(j.value(e.options[B]))!==!0));y.value!==B&&te(()=>{ve(B),de(B),B>=0&&e.useInput===!0&&e.fillInput===!0&&Me(j.value(e.options[B]),!0)});return}if(!(t.keyCode!==13&&(t.keyCode!==32||e.useInput===!0||P!=="")&&(t.keyCode!==9||a===!1))){if(t.keyCode!==9&&Z(t),y.value!==-1&&y.value<g){oe(e.options[y.value]);return}if(n===!0){const I=(q,H)=>{if(H){if(vt(H)!==!0)return}else H=e.newValueMode;if(qe("",e.multiple!==!0,!0),q==null)return;(H==="toggle"?oe:Ye)(q,H==="add-unique"),e.multiple!==!0&&(L.value?.focus(),ie())};if(e.onNewValue!==void 0?u("newValue",S.value,I):I(S.value),e.multiple!==!0)return}o.value===!0?Se():l.innerLoading.value!==!0&&ge()}}function lt(){return k===!0?le.value:K.value!==null&&K.value.contentEl!==null?K.value.contentEl:void 0}function zt(){return lt()}function _t(){return e.hideSelected===!0?[]:r["selected-item"]!==void 0?ae.value.map(t=>r["selected-item"](t)).slice():r.selected!==void 0?[].concat(r.selected()):e.useChips===!0?ae.value.map((t,n)=>m(ml,{key:"option-"+n,removable:l.editable.value===!0&&fe.value(t.opt)!==!0,dense:!0,textColor:e.color,tabindex:J.value,onRemove(){t.removeAtIndex(n)}},()=>m("span",{class:"ellipsis",[t.html===!0?"innerHTML":"textContent"]:j.value(t.opt)}))):[m("span",{class:"ellipsis",[ze.value===!0?"innerHTML":"textContent"]:N.value})]}function ut(){if(T.value===!0)return r["no-option"]!==void 0?r["no-option"]({inputValue:S.value}):void 0;const t=r.option!==void 0?r.option:a=>m(il,{key:a.index,...a.itemProps},()=>m(al,()=>m(ol,()=>m("span",{[a.html===!0?"innerHTML":"textContent"]:a.label}))));let n=Ee("div",Oe.value.map(t));return r["before-options"]!==void 0&&(n=r["before-options"]().concat(n)),kt(r["after-options"],n)}function Ot(t,n){const a=n===!0?{..._e.value,...l.splitAttrs.attributes.value}:void 0,g={ref:n===!0?L:void 0,key:"i_t",class:x.value,style:e.inputStyle,value:S.value!==void 0?S.value:"",type:"search",...a,id:n===!0?l.targetUid.value:void 0,maxlength:e.maxlength,autocomplete:e.autocomplete,"data-autofocus":t===!0||e.autofocus===!0||void 0,disabled:e.disable===!0,readonly:e.readonly===!0,...qt.value};return t!==!0&&k===!0&&(Array.isArray(g.class)===!0?g.class=[...g.class,"no-pointer-events"]:g.class+=" no-pointer-events"),m("input",g)}function nt(t){C!==null&&(clearTimeout(C),C=null),V!==null&&(clearTimeout(V),V=null),!(t&&t.target&&t.target.qComposing===!0)&&(Me(t.target.value||""),E=!0,D=S.value,l.focused.value!==!0&&(k!==!0||O.value===!0)&&l.focus(),e.onFilter!==void 0&&(C=setTimeout(()=>{C=null,me(S.value)},e.inputDebounce)))}function Me(t,n){S.value!==t&&(S.value=t,n===!0||e.inputDebounce===0||e.inputDebounce==="0"?u("inputValue",t):V=setTimeout(()=>{V=null,u("inputValue",t)},e.inputDebounce))}function qe(t,n,a){E=a!==!0,e.useInput===!0&&(Me(t,!0),(n===!0||a!==!0)&&(D=t),n!==!0&&me(t))}function me(t,n,a){if(e.onFilter===void 0||n!==!0&&l.focused.value!==!0)return;l.innerLoading.value===!0?u("filterAbort"):(l.innerLoading.value=!0,c.value=!0),t!==""&&e.multiple!==!0&&i.value.length!==0&&E!==!0&&t===j.value(i.value[0])&&(t="");const g=setTimeout(()=>{o.value===!0&&(o.value=!1)},10);d!==null&&clearTimeout(d),d=g,u("filter",t,(I,q)=>{(n===!0||l.focused.value===!0)&&d===g&&(clearTimeout(d),typeof I=="function"&&I(),c.value=!1,te(()=>{l.innerLoading.value=!1,l.editable.value===!0&&(n===!0?o.value===!0&&ie():o.value===!0?Pe(!0):o.value=!0),typeof q=="function"&&te(()=>{q(f)}),typeof a=="function"&&te(()=>{a(f)})}))},()=>{l.focused.value===!0&&d===g&&(clearTimeout(d),l.innerLoading.value=!1,c.value=!1),o.value===!0&&(o.value=!1)})}function Ft(){return m(rl,{ref:K,class:w.value,style:e.popupContentStyle,modelValue:o.value,fit:e.menuShrink!==!0,cover:e.optionsCover===!0&&T.value!==!0&&e.useInput!==!0,anchor:e.menuAnchor,self:e.menuSelf,offset:e.menuOffset,dark:z.value,noParentEvent:!0,noRefocus:!0,noFocus:!0,noRouteDismiss:e.popupNoRouteDismiss,square:Le.value,transitionShow:e.transitionShow,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,separateClosePopup:!0,...ne.value,onScrollPassive:Ce,onBeforeShow:ot,onBeforeHide:Bt,onShow:Mt},ut)}function Bt(t){it(t),Se()}function Mt(){ke()}function Rt(t){be(t),L.value?.focus(),O.value=!0,window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,0)}function Tt(t){be(t),te(()=>{O.value=!1})}function Et(){const t=[m(fl,{class:`col-auto ${l.fieldClass.value}`,...h.value,for:l.targetUid.value,dark:z.value,square:!0,loading:c.value,itemAligned:!1,filled:!0,stackLabel:S.value.length!==0,...l.splitAttrs.listeners.value,onFocus:Rt,onBlur:Tt},{...r,rawControl:()=>l.getControl(!0),before:void 0,after:void 0})];return o.value===!0&&t.push(m("div",{ref:le,class:w.value+" scroll",style:e.popupContentStyle,...ne.value,onClick:Ne,onScrollPassive:Ce},ut())),m(ul,{ref:Y,modelValue:A.value,position:e.useInput===!0?"top":void 0,transitionShow:U,transitionHide:e.transitionHide,transitionDuration:e.transitionDuration,noRouteDismiss:e.popupNoRouteDismiss,onBeforeShow:ot,onBeforeHide:Lt,onHide:Ht,onShow:Dt},()=>m("div",{class:"q-select__dialog"+(z.value===!0?" q-select__dialog--dark q-dark":"")+(O.value===!0?" q-select__dialog--focused":"")},t))}function Lt(t){it(t),Y.value!==null&&Y.value.__updateRefocusTarget(l.rootRef.value.querySelector(".q-field__native > [tabindex]:last-child")),l.focused.value=!1}function Ht(t){ie(),l.focused.value===!1&&u("blur",t),he()}function Dt(){const t=document.activeElement;(t===null||t.id!==l.targetUid.value)&&L.value!==null&&L.value!==t&&L.value.focus(),ke()}function Se(){A.value!==!0&&(y.value=-1,o.value===!0&&(o.value=!1),l.focused.value===!1&&(d!==null&&(clearTimeout(d),d=null),l.innerLoading.value===!0&&(u("filterAbort"),l.innerLoading.value=!1,c.value=!1)))}function ge(t){l.editable.value===!0&&(k===!0?(l.onControlFocusin(t),A.value=!0,te(()=>{l.focus()})):l.focus(),e.onFilter!==void 0?me(S.value):(T.value!==!0||r["no-option"]!==void 0)&&(o.value=!0))}function ie(){A.value=!1,Se()}function he(){e.useInput===!0&&qe(e.multiple!==!0&&e.fillInput===!0&&i.value.length!==0&&j.value(i.value[0])||"",!0,!0)}function Pe(t){let n=-1;if(t===!0){if(i.value.length!==0){const a=X.value(i.value[0]);n=e.options.findIndex(g=>Ae(X.value(g),a))}W(n)}ve(n)}function Pt(t,n){o.value===!0&&l.innerLoading.value===!1&&(W(-1,!0),te(()=>{o.value===!0&&l.innerLoading.value===!1&&(t>n?W():Pe(!0))}))}function at(){A.value===!1&&K.value!==null&&K.value.updatePosition()}function ot(t){t!==void 0&&be(t),u("popupShow",t),l.hasPopupOpen=!0,l.onControlFocusin(t)}function it(t){t!==void 0&&be(t),u("popupHide",t),l.hasPopupOpen=!1,l.onControlFocusout(t)}function rt(){k=_.platform.is.mobile!==!0&&e.behavior!=="dialog"?!1:e.behavior!=="menu"&&(e.useInput===!0?r["no-option"]!==void 0||e.onFilter!==void 0||T.value===!1:!0),U=_.platform.is.ios===!0&&k===!0&&e.useInput===!0?"fade":e.transitionShow}return el(rt),tl(at),rt(),bt(()=>{C!==null&&clearTimeout(C),V!==null&&clearTimeout(V)}),Object.assign(f,{showPopup:ge,hidePopup:ie,removeAtIndex:He,add:Ye,toggleOption:oe,getOptionIndex:()=>y.value,setOptionIndex:ve,moveOptionSelection:Be,filter:me,updateMenuPosition:at,updateInputValue:qe,isOptionSelected:De,getEmittingOptionValue:Xe,isOptionDisabled:(...t)=>fe.value.apply(null,t)===!0,getOptionValue:(...t)=>X.value.apply(null,t),getOptionLabel:(...t)=>j.value.apply(null,t)}),Object.assign(l,{innerValue:i,fieldClass:s(()=>`q-select q-field--auto-height q-select--with${e.useInput!==!0?"out":""}-input q-select--with${e.useChips!==!0?"out":""}-chips q-select--${e.multiple===!0?"multiple":"single"}`),inputRef:re,targetRef:L,hasValue:R,showPopup:ge,floatingLabel:s(()=>e.hideSelected!==!0&&R.value===!0||typeof S.value=="number"||S.value.length!==0||st(e.displayValue)),getControlChild:()=>{if(l.editable.value!==!1&&(A.value===!0||T.value!==!0||r["no-option"]!==void 0))return k===!0?Et():Ft();l.hasPopupOpen===!0&&(l.hasPopupOpen=!1)},controlEvents:{onFocusin(t){l.onControlFocusin(t)},onFocusout(t){l.onControlFocusout(t,()=>{he(),Se()})},onClick(t){if(Ne(t),k!==!0&&o.value===!0){Se(),L.value?.focus();return}ge(t)}},getControl:t=>{const n=_t(),a=t===!0||A.value!==!0||k!==!0;if(e.useInput===!0)n.push(Ot(t,a));else if(l.editable.value===!0){const I=a===!0?_e.value:void 0;n.push(m("input",{ref:a===!0?L:void 0,key:"d_t",class:"q-select__focus-target",id:a===!0?l.targetUid.value:void 0,value:N.value,readonly:!0,"data-autofocus":t===!0||e.autofocus===!0||void 0,...I,onKeydown:tt,onKeyup:Je,onKeypress:et})),a===!0&&typeof e.autocomplete=="string"&&e.autocomplete.length!==0&&n.push(m("input",{class:"q-select__autocomplete-input",autocomplete:e.autocomplete,tabindex:-1,onKeyup:Ze}))}if(G.value!==void 0&&e.disable!==!0&&Fe.value.length!==0){const I=Fe.value.map(q=>m("option",{value:q,selected:!0}));n.push(m("select",{class:"hidden",name:G.value,multiple:e.multiple},I))}const g=e.useInput===!0||a!==!0?void 0:l.splitAttrs.attributes.value;return m("div",{class:"q-field__native row items-center",...g,...l.splitAttrs.listeners.value},n)},getInnerAppend:()=>e.loading!==!0&&c.value!==!0&&e.hideDropdownIcon!==!0?[m(Re,{class:"q-select__dropdown-icon"+(o.value===!0?" rotate-180":""),name:xe.value})]:null}),St(l)}});function hl(e,r){const u=M(null),f=s(()=>e.disable===!0?null:m("span",{ref:u,class:"no-outline",tabindex:-1}));function _(o){const A=r.value;o?.qAvoidFocus!==!0&&(o?.type.indexOf("key")===0?document.activeElement!==A&&A?.contains(document.activeElement)===!0&&A.focus():u.value!==null&&(o===void 0||A?.contains(o.target)===!0)&&u.value.focus())}return{refocusTargetEl:f,refocusTarget:_}}const bl={xs:30,sm:35,md:40,lg:50,xl:60},ql={...Vt,...yt,...ht,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},Al=["update:modelValue"];function Il(e,r){const{props:u,slots:f,emit:_,proxy:o}=Te(),{$q:A}=o,y=wt(u,A),S=M(null),{refocusTargetEl:O,refocusTarget:c}=hl(u,S),C=Ct(u,bl),V=s(()=>u.val!==void 0&&Array.isArray(u.modelValue)),p=s(()=>{const v=ye(u.val);return V.value===!0?u.modelValue.findIndex($=>ye($)===v):-1}),k=s(()=>V.value===!0?p.value!==-1:ye(u.modelValue)===ye(u.trueValue)),E=s(()=>V.value===!0?p.value===-1:ye(u.modelValue)===ye(u.falseValue)),d=s(()=>k.value===!1&&E.value===!1),D=s(()=>u.disable===!0?-1:u.tabindex||0),U=s(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(u.disable===!0?" disabled":"")+(y.value===!0?` q-${e}--dark`:"")+(u.dense===!0?` q-${e}--dense`:"")+(u.leftLabel===!0?" reverse":"")),P=s(()=>{const v=k.value===!0?"truthy":E.value===!0?"falsy":"indet",$=u.color!==void 0&&(u.keepColor===!0||(e==="toggle"?k.value===!0:E.value!==!0))?` text-${u.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${v}${$}`}),F=s(()=>{const v={type:"checkbox"};return u.name!==void 0&&Object.assign(v,{".checked":k.value,"^checked":k.value===!0?"checked":void 0,name:u.name,value:V.value===!0?u.val:u.trueValue}),v}),re=jt(F),L=s(()=>{const v={tabindex:D.value,role:e==="toggle"?"switch":"checkbox","aria-label":u.label,"aria-checked":d.value===!0?"mixed":k.value===!0?"true":"false"};return u.disable===!0&&(v["aria-disabled"]="true"),v});function K(v){v!==void 0&&(Z(v),c(v)),u.disable!==!0&&_("update:modelValue",Y(),v)}function Y(){if(V.value===!0){if(k.value===!0){const v=u.modelValue.slice();return v.splice(p.value,1),v}return u.modelValue.concat([u.val])}if(k.value===!0){if(u.toggleOrder!=="ft"||u.toggleIndeterminate===!1)return u.falseValue}else if(E.value===!0){if(u.toggleOrder==="ft"||u.toggleIndeterminate===!1)return u.trueValue}else return u.toggleOrder!=="ft"?u.trueValue:u.falseValue;return u.indeterminateValue}function le(v){(v.keyCode===13||v.keyCode===32)&&Z(v)}function G(v){(v.keyCode===13||v.keyCode===32)&&K(v)}const se=r(k,d);return Object.assign(o,{toggle:K}),()=>{const v=se();u.disable!==!0&&re(v,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const $=[m("div",{class:P.value,style:C.value,"aria-hidden":"true"},v)];O.value!==null&&$.push(O.value);const ue=u.label!==void 0?kt(f.default,[u.label]):nl(f.default);return ue!==void 0&&$.push(m("div",{class:`q-${e}__label q-anchor--skip`},ue)),m("div",{ref:S,class:U.value,...L.value,onClick:K,onKeydown:le,onKeyup:G},$)}}export{pl as Q,dl as a,Al as b,ql as c,Il as d,xl as e,ft as u};
