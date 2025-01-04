import{r as b,b8 as oe,R as w,ai as le,w as V,a1 as X,e as M,a6 as te,d as i,aX as re,as as ne,a5 as ue,a3 as ae,a4 as ie,$ as se,a0 as de,z as a,ba as F,O as fe,bb as ce,Q as K,au as ve,P as $,V as pe,N as me,aq as ge}from"./index-BNUf-CLs.js";import{u as be}from"./use-id-bS9pwKKH.js";const N=/^on[A-Z]/;function he(){const{attrs:e,vnode:o}=w(),t={listeners:b({}),attributes:b({})};function r(){const f={},s={};for(const u in e)u!=="class"&&u!=="style"&&N.test(u)===!1&&(f[u]=e[u]);for(const u in o.props)N.test(u)===!0&&(s[u]=o.props[u]);t.attributes.value=f,t.listeners.value=s}return oe(r),r(),t}function Ce({validate:e,resetValidation:o,requiresQForm:t}){const r=le(te,!1);if(r!==!1){const{props:f,proxy:s}=w();Object.assign(s,{validate:e,resetValidation:o}),V(()=>f.disable,u=>{u===!0?(typeof o=="function"&&o(),r.unbindComponent(s)):r.bindComponent(s)}),X(()=>{f.disable!==!0&&r.bindComponent(s)}),M(()=>{f.disable!==!0&&r.unbindComponent(s)})}else t===!0&&console.error("Parent QForm not found on useFormChild()!")}const Q=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,Z=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,J=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,E=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,I=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,D={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>Q.test(e),hexaColor:e=>Z.test(e),hexOrHexaColor:e=>J.test(e),rgbColor:e=>E.test(e),rgbaColor:e=>I.test(e),rgbOrRgbaColor:e=>E.test(e)||I.test(e),hexOrRgbColor:e=>Q.test(e)||E.test(e),hexaOrRgbaColor:e=>Z.test(e)||I.test(e),anyColor:e=>J.test(e)||E.test(e)||I.test(e)},ye=[!0,!1,"ondemand"],qe={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>ye.includes(e)}};function _e(e,o){const{props:t,proxy:r}=w(),f=b(!1),s=b(null),u=b(!1);Ce({validate:x,resetValidation:_});let c=0,m;const B=i(()=>t.rules!==void 0&&t.rules!==null&&t.rules.length!==0),g=i(()=>t.disable!==!0&&B.value===!0&&o.value===!1),q=i(()=>t.error===!0||f.value===!0),P=i(()=>typeof t.errorMessage=="string"&&t.errorMessage.length!==0?t.errorMessage:s.value);V(()=>t.modelValue,()=>{u.value=!0,g.value===!0&&t.lazyRules===!1&&C()});function A(){t.lazyRules!=="ondemand"&&g.value===!0&&u.value===!0&&C()}V(()=>t.reactiveRules,h=>{h===!0?m===void 0&&(m=V(()=>t.rules,A,{immediate:!0,deep:!0})):m!==void 0&&(m(),m=void 0)},{immediate:!0}),V(()=>t.lazyRules,A),V(e,h=>{h===!0?u.value=!0:g.value===!0&&t.lazyRules!=="ondemand"&&C()});function _(){c++,o.value=!1,u.value=!1,f.value=!1,s.value=null,C.cancel()}function x(h=t.modelValue){if(t.disable===!0||B.value===!1)return!0;const S=++c,O=o.value!==!0?()=>{u.value=!0}:()=>{},y=(d,v)=>{d===!0&&O(),f.value=d,s.value=v||null,o.value=!1},R=[];for(let d=0;d<t.rules.length;d++){const v=t.rules[d];let p;if(typeof v=="function"?p=v(h,D):typeof v=="string"&&D[v]!==void 0&&(p=D[v](h)),p===!1||typeof p=="string")return y(!0,p),!1;p!==!0&&p!==void 0&&R.push(p)}return R.length===0?(y(!1),!0):(o.value=!0,Promise.all(R).then(d=>{if(d===void 0||Array.isArray(d)===!1||d.length===0)return S===c&&y(!1),!0;const v=d.find(p=>p===!1||typeof p=="string");return S===c&&y(v!==void 0,v),v===void 0},d=>(S===c&&(console.error(d),y(!0)),!1)))}const C=re(x,0);return M(()=>{m!==void 0&&m(),C.cancel()}),Object.assign(r,{resetValidation:_,validate:x}),ne(r,"hasError",()=>q.value),{isDirtyModel:u,hasRules:B,hasError:q,errorMessage:P,validate:x,resetValidation:_}}function xe(e){return e!=null&&(""+e).length!==0}const Se={...me,...qe,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},ke={...Se,maxlength:[Number,String]},$e=["update:modelValue","clear","focus","blur"];function Ee({requiredForAttr:e=!0,tagProp:o,changeEvent:t=!1}={}){const{props:r,proxy:f}=w(),s=fe(r,f.$q),u=be({required:e,getValue:()=>r.for});return{requiredForAttr:e,changeEvent:t,tag:o===!0?i(()=>r.tag):{value:"label"},isDark:s,editable:i(()=>r.disable!==!0&&r.readonly!==!0),innerLoading:b(!1),focused:b(!1),hasPopupOpen:!1,splitAttrs:he(),targetUid:u,rootRef:b(null),targetRef:b(null),controlRef:b(null)}}function Ie(e){const{props:o,emit:t,slots:r,attrs:f,proxy:s}=w(),{$q:u}=s;let c=null;e.hasValue===void 0&&(e.hasValue=i(()=>xe(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{t("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:T,onFocusout:j}),Object.assign(e,{clearValue:z,onControlFocusin:T,onControlFocusout:j,focus:v}),e.computedCounter===void 0&&(e.computedCounter=i(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,n=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(n!==void 0?" / "+n:"")}}));const{isDirtyModel:m,hasRules:B,hasError:g,errorMessage:q,resetValidation:P}=_e(e.focused,e.innerLoading),A=e.floatingLabel!==void 0?i(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):i(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),_=i(()=>o.bottomSlots===!0||o.hint!==void 0||B.value===!0||o.counter===!0||o.error!==null),x=i(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),C=i(()=>`q-field row no-wrap items-start q-field--${x.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(A.value===!0?" q-field--float":"")+(S.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(g.value===!0?" q-field--error":"")+(g.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&_.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),h=i(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(g.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),S=i(()=>o.labelSlot===!0||o.label!==void 0),O=i(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&g.value!==!0?` text-${o.labelColor}`:"")),y=i(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:A.value,modelValue:o.modelValue,emitValue:e.emitValue})),R=i(()=>{const l={};return e.targetUid.value&&(l.for=e.targetUid.value),o.disable===!0&&(l["aria-disabled"]="true"),l});function d(){const l=document.activeElement;let n=e.targetRef!==void 0&&e.targetRef.value;n&&(l===null||l.id!==e.targetUid.value)&&(n.hasAttribute("tabindex")===!0||(n=n.querySelector("[tabindex]")),n&&n!==l&&n.focus({preventScroll:!0}))}function v(){ue(d)}function p(){ce(d);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function T(l){c!==null&&(clearTimeout(c),c=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,t("focus",l))}function j(l,n){c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,t("blur",l)),n!==void 0&&n())})}function z(l){ae(l),u.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),t("update:modelValue",null),e.changeEvent===!0&&t("change",null),t("clear",o.modelValue),ie(()=>{const n=m.value;P(),m.value=n})}function G(l){[13,32].includes(l.keyCode)&&z(l)}function W(){const l=[];return r.prepend!==void 0&&l.push(a("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:F},r.prepend())),l.push(a("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},Y())),g.value===!0&&o.noErrorIcon===!1&&l.push(k("error",[a(K,{name:u.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(k("inner-loading-append",r.loading!==void 0?r.loading():[a(ve,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(k("inner-clearable-append",[a(K,{class:"q-field__focusable-action",name:o.clearIcon||u.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":u.lang.label.clear,onKeyup:G,onClick:z})])),r.append!==void 0&&l.push(a("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:F},r.append())),e.getInnerAppend!==void 0&&l.push(k("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function Y(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(a("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):r.rawControl!==void 0?l.push(r.rawControl()):r.control!==void 0&&l.push(a("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},r.control(y.value))),S.value===!0&&l.push(a("div",{class:O.value},$(r.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(a("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat($(r.default))}function ee(){let l,n;g.value===!0?q.value!==null?(l=[a("div",{role:"alert"},q.value)],n=`q--slot-error-${q.value}`):(l=$(r.error),n="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[a("div",o.hint)],n=`q--slot-hint-${o.hint}`):(l=$(r.hint),n="q--slot-hint"));const U=o.counter===!0||r.counter!==void 0;if(o.hideBottomSpace===!0&&U===!1&&l===void 0)return;const H=a("div",{key:n,class:"q-field__messages col"},l);return a("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:F},[o.hideBottomSpace===!0?H:a(pe,{name:"q-transition--field-message"},()=>H),U===!0?a("div",{class:"q-field__counter"},r.counter!==void 0?r.counter():e.computedCounter.value):null])}function k(l,n){return n===null?null:a("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},n)}let L=!1;return se(()=>{L=!0}),de(()=>{L===!0&&o.autofocus===!0&&s.focus()}),o.autofocus===!0&&X(()=>{s.focus()}),M(()=>{c!==null&&clearTimeout(c)}),Object.assign(s,{focus:v,blur:p}),function(){const n=e.getControl===void 0&&r.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...R.value}:R.value;return a(e.tag.value,{ref:e.rootRef,class:[C.value,f.class],style:f.style,...n},[r.before!==void 0?a("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:F},r.before()):null,a("div",{class:"q-field__inner relative-position col self-stretch"},[a("div",{ref:e.controlRef,class:h.value,tabindex:-1,...e.controlEvents},W()),_.value===!0?ee():null]),r.after!==void 0?a("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:F},r.after()):null])}}const Pe={name:String};function Oe(e){return i(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function ze(e={}){return(o,t,r)=>{o[t](a("input",{class:"hidden"+(r||""),...e.value}))}}function De(e){return i(()=>e.name||e.for)}const Re=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ve=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Be=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Ae=/[a-z0-9_ -]$/i;function Me(e){return function(t){if(t.type==="compositionend"||t.type==="change"){if(t.target.qComposing!==!0)return;t.target.qComposing=!1,e(t)}else t.type==="compositionupdate"&&t.target.qComposing!==!0&&typeof t.data=="string"&&(ge.is.firefox===!0?Ae.test(t.data)===!1:Re.test(t.data)===!0||Ve.test(t.data)===!0||Be.test(t.data)===!0)===!0&&(t.target.qComposing=!0)}}export{ze as a,Oe as b,ke as c,$e as d,De as e,Ee as f,Ie as g,xe as h,Me as i,D as t,Pe as u};
