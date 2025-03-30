import{a9 as W,n as z,bt as be,aV as pe,ao as ke,a5 as P,o as oe,q as le,p as k,b6 as ye,aD as ge,a8 as xe,am as me,ak as Ce,al as Q,ah as we,ai as Me,m as x,bf as G,aa as Se,bw as qe,H as re,aF as Re,R as J,T as Ve,bp as Fe,aB as Ae,j as _e,as as ue}from"./index-BzVvpN4o.js";import{u as Ee}from"./use-id-By8sEhuK.js";const ie=/^on[A-Z]/;function Be(){const{attrs:e,vnode:t}=W(),u={listeners:z({}),attributes:z({})};function i(){const f={},d={};for(const c in e)c!=="class"&&c!=="style"&&ie.test(c)===!1&&(f[c]=e[c]);for(const c in t.props)ie.test(c)===!0&&(d[c]=t.props[c]);u.attributes.value=f,u.listeners.value=d}return be(i),i(),u}function Te({validate:e,resetValidation:t,requiresQForm:u}){const i=pe(ke,!1);if(i!==!1){const{props:f,proxy:d}=W();Object.assign(d,{validate:e,resetValidation:t}),P(()=>f.disable,c=>{c===!0?(typeof t=="function"&&t(),i.unbindComponent(d)):i.bindComponent(d)}),oe(()=>{f.disable!==!0&&i.bindComponent(d)}),le(()=>{f.disable!==!0&&i.unbindComponent(d)})}else u===!0&&console.error("Parent QForm not found on useFormChild()!")}const se=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,de=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,fe=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,X=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,ee=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,ne={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>se.test(e),hexaColor:e=>de.test(e),hexOrHexaColor:e=>fe.test(e),rgbColor:e=>X.test(e),rgbaColor:e=>ee.test(e),rgbOrRgbaColor:e=>X.test(e)||ee.test(e),hexOrRgbColor:e=>se.test(e)||X.test(e),hexaOrRgbaColor:e=>de.test(e)||ee.test(e),anyColor:e=>fe.test(e)||X.test(e)||ee.test(e)},Oe=[!0,!1,"ondemand"],$e={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>Oe.includes(e)}};function Ie(e,t){const{props:u,proxy:i}=W(),f=z(!1),d=z(null),c=z(!1);Te({validate:D,resetValidation:I});let C=0,B;const S=k(()=>u.rules!==void 0&&u.rules!==null&&u.rules.length!==0),q=k(()=>u.disable!==!0&&S.value===!0&&t.value===!1),b=k(()=>u.error===!0||f.value===!0),U=k(()=>typeof u.errorMessage=="string"&&u.errorMessage.length!==0?u.errorMessage:d.value);P(()=>u.modelValue,()=>{c.value=!0,q.value===!0&&u.lazyRules===!1&&O()});function T(){u.lazyRules!=="ondemand"&&q.value===!0&&c.value===!0&&O()}P(()=>u.reactiveRules,N=>{N===!0?B===void 0&&(B=P(()=>u.rules,T,{immediate:!0,deep:!0})):B!==void 0&&(B(),B=void 0)},{immediate:!0}),P(()=>u.lazyRules,T),P(e,N=>{N===!0?c.value=!0:q.value===!0&&u.lazyRules!=="ondemand"&&O()});function I(){C++,t.value=!1,c.value=!1,f.value=!1,d.value=null,O.cancel()}function D(N=u.modelValue){if(u.disable===!0||S.value===!1)return!0;const A=++C,H=t.value!==!0?()=>{c.value=!0}:()=>{},K=(M,w)=>{M===!0&&H(),f.value=M,d.value=w||null,t.value=!1},j=[];for(let M=0;M<u.rules.length;M++){const w=u.rules[M];let E;if(typeof w=="function"?E=w(N,ne):typeof w=="string"&&ne[w]!==void 0&&(E=ne[w](N)),E===!1||typeof E=="string")return K(!0,E),!1;E!==!0&&E!==void 0&&j.push(E)}return j.length===0?(K(!1),!0):(t.value=!0,Promise.all(j).then(M=>{if(M===void 0||Array.isArray(M)===!1||M.length===0)return A===C&&K(!1),!0;const w=M.find(E=>E===!1||typeof E=="string");return A===C&&K(w!==void 0,w),w===void 0},M=>(A===C&&(console.error(M),K(!0)),!1)))}const O=ye(D,0);return le(()=>{B?.(),O.cancel()}),Object.assign(i,{resetValidation:I,validate:D}),ge(i,"hasError",()=>b.value),{isDirtyModel:c,hasRules:S,hasError:b,errorMessage:U,validate:D,resetValidation:I}}function ae(e){return e!=null&&(""+e).length!==0}const Pe={...xe,...$e,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},De={...Pe,maxlength:[Number,String]},je=["update:modelValue","clear","focus","blur"];function ze({requiredForAttr:e=!0,tagProp:t,changeEvent:u=!1}={}){const{props:i,proxy:f}=W(),d=Se(i,f.$q),c=Ee({required:e,getValue:()=>i.for});return{requiredForAttr:e,changeEvent:u,tag:t===!0?k(()=>i.tag):{value:"label"},isDark:d,editable:k(()=>i.disable!==!0&&i.readonly!==!0),innerLoading:z(!1),focused:z(!1),hasPopupOpen:!1,splitAttrs:Be(),targetUid:c,rootRef:z(null),targetRef:z(null),controlRef:z(null)}}function Ne(e){const{props:t,emit:u,slots:i,attrs:f,proxy:d}=W(),{$q:c}=d;let C=null;e.hasValue===void 0&&(e.hasValue=k(()=>ae(t.modelValue))),e.emitValue===void 0&&(e.emitValue=r=>{u("update:modelValue",r)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:a,onFocusout:n}),Object.assign(e,{clearValue:s,onControlFocusin:a,onControlFocusout:n,focus:w}),e.computedCounter===void 0&&(e.computedCounter=k(()=>{if(t.counter!==!1){const r=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,h=t.maxlength!==void 0?t.maxlength:t.maxValues;return r+(h!==void 0?" / "+h:"")}}));const{isDirtyModel:B,hasRules:S,hasError:q,errorMessage:b,resetValidation:U}=Ie(e.focused,e.innerLoading),T=e.floatingLabel!==void 0?k(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):k(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),I=k(()=>t.bottomSlots===!0||t.hint!==void 0||S.value===!0||t.counter===!0||t.error!==null),D=k(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),O=k(()=>`q-field row no-wrap items-start q-field--${D.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(T.value===!0?" q-field--float":"")+(A.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(q.value===!0?" q-field--error":"")+(q.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&I.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),N=k(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(q.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length!==0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),A=k(()=>t.labelSlot===!0||t.label!==void 0),H=k(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&q.value!==!0?` text-${t.labelColor}`:"")),K=k(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:T.value,modelValue:t.modelValue,emitValue:e.emitValue})),j=k(()=>{const r={};return e.targetUid.value&&(r.for=e.targetUid.value),t.disable===!0&&(r["aria-disabled"]="true"),r});function M(){const r=document.activeElement;let h=e.targetRef?.value;h&&(r===null||r.id!==e.targetUid.value)&&(h.hasAttribute("tabindex")===!0||(h=h.querySelector("[tabindex]")),h!==r&&h?.focus({preventScroll:!0}))}function w(){me(M)}function E(){qe(M);const r=document.activeElement;r!==null&&e.rootRef.value.contains(r)&&r.blur()}function a(r){C!==null&&(clearTimeout(C),C=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,u("focus",r))}function n(r,h){C!==null&&clearTimeout(C),C=setTimeout(()=>{C=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,u("blur",r)),h?.())})}function s(r){Ce(r),c.platform.is.mobile!==!0?(e.targetRef?.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),u("update:modelValue",null),e.changeEvent===!0&&u("change",null),u("clear",t.modelValue),Q(()=>{const h=B.value;U(),B.value=h})}function o(r){[13,32].includes(r.keyCode)&&s(r)}function m(){const r=[];return i.prepend!==void 0&&r.push(x("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:G},i.prepend())),r.push(x("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},v())),q.value===!0&&t.noErrorIcon===!1&&r.push(g("error",[x(re,{name:c.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?r.push(g("inner-loading-append",i.loading!==void 0?i.loading():[x(Re,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&r.push(g("inner-clearable-append",[x(re,{class:"q-field__focusable-action",name:t.clearIcon||c.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":c.lang.label.clear,onKeyup:o,onClick:s})])),i.append!==void 0&&r.push(x("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:G},i.append())),e.getInnerAppend!==void 0&&r.push(g("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&r.push(e.getControlChild()),r}function v(){const r=[];return t.prefix!==void 0&&t.prefix!==null&&r.push(x("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&r.push(e.getShadowControl()),e.getControl!==void 0?r.push(e.getControl()):i.rawControl!==void 0?r.push(i.rawControl()):i.control!==void 0&&r.push(x("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},i.control(K.value))),A.value===!0&&r.push(x("div",{class:H.value},J(i.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&r.push(x("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),r.concat(J(i.default))}function R(){let r,h;q.value===!0?b.value!==null?(r=[x("div",{role:"alert"},b.value)],h=`q--slot-error-${b.value}`):(r=J(i.error),h="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(r=[x("div",t.hint)],h=`q--slot-hint-${t.hint}`):(r=J(i.hint),h="q--slot-hint"));const y=t.counter===!0||i.counter!==void 0;if(t.hideBottomSpace===!0&&y===!1&&r===void 0)return;const V=x("div",{key:h,class:"q-field__messages col"},r);return x("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:G},[t.hideBottomSpace===!0?V:x(Ve,{name:"q-transition--field-message"},()=>V),y===!0?x("div",{class:"q-field__counter"},i.counter!==void 0?i.counter():e.computedCounter.value):null])}function g(r,h){return h===null?null:x("div",{key:r,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},h)}let p=!1;return we(()=>{p=!0}),Me(()=>{p===!0&&t.autofocus===!0&&d.focus()}),t.autofocus===!0&&oe(()=>{d.focus()}),le(()=>{C!==null&&clearTimeout(C)}),Object.assign(d,{focus:w,blur:E}),function(){const h=e.getControl===void 0&&i.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...j.value}:j.value;return x(e.tag.value,{ref:e.rootRef,class:[O.value,f.class],style:f.style,...h},[i.before!==void 0?x("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:G},i.before()):null,x("div",{class:"q-field__inner relative-position col self-stretch"},[x("div",{ref:e.controlRef,class:N.value,tabindex:-1,...e.controlEvents},m()),I.value===!0?R():null]),i.after!==void 0?x("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:G},i.after()):null])}}const ce={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},te={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},he=Object.keys(te);he.forEach(e=>{te[e].regex=new RegExp(te[e].pattern)});const Ke=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+he.join("")+"])|(.)","g"),ve=/[.*+?^${}()|[\]\\]/g,_="",Le={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function Ze(e,t,u,i){let f,d,c,C,B,S;const q=z(null),b=z(T());function U(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}P(()=>e.type+e.autogrow,D),P(()=>e.mask,a=>{if(a!==void 0)O(b.value,!0);else{const n=w(b.value);D(),e.modelValue!==n&&t("update:modelValue",n)}}),P(()=>e.fillMask+e.reverseFillMask,()=>{q.value===!0&&O(b.value,!0)}),P(()=>e.unmaskedValue,()=>{q.value===!0&&O(b.value)});function T(){if(D(),q.value===!0){const a=j(w(e.modelValue));return e.fillMask!==!1?E(a):a}return e.modelValue}function I(a){if(a<f.length)return f.slice(-a);let n="",s=f;const o=s.indexOf(_);if(o!==-1){for(let m=a-s.length;m>0;m--)n+=_;s=s.slice(0,o)+n+s.slice(o)}return s}function D(){if(q.value=e.mask!==void 0&&e.mask.length!==0&&U(),q.value===!1){C=void 0,f="",d="";return}const a=ce[e.mask]===void 0?e.mask:ce[e.mask],n=typeof e.fillMask=="string"&&e.fillMask.length!==0?e.fillMask.slice(0,1):"_",s=n.replace(ve,"\\$&"),o=[],m=[],v=[];let R=e.reverseFillMask===!0,g="",p="";a.replace(Ke,(V,l,F,Z,L)=>{if(Z!==void 0){const $=te[Z];v.push($),p=$.negate,R===!0&&(m.push("(?:"+p+"+)?("+$.pattern+"+)?(?:"+p+"+)?("+$.pattern+"+)?"),R=!1),m.push("(?:"+p+"+)?("+$.pattern+")?")}else if(F!==void 0)g="\\"+(F==="\\"?"":F),v.push(F),o.push("([^"+g+"]+)?"+g+"?");else{const $=l!==void 0?l:L;g=$==="\\"?"\\\\\\\\":$.replace(ve,"\\\\$&"),v.push($),o.push("([^"+g+"]+)?"+g+"?")}});const r=new RegExp("^"+o.join("")+"("+(g===""?".":"[^"+g+"]")+"+)?"+(g===""?"":"["+g+"]*")+"$"),h=m.length-1,y=m.map((V,l)=>l===0&&e.reverseFillMask===!0?new RegExp("^"+s+"*"+V):l===h?new RegExp("^"+V+"("+(p===""?".":p)+"+)?"+(e.reverseFillMask===!0?"$":s+"*")):new RegExp("^"+V));c=v,C=V=>{const l=r.exec(e.reverseFillMask===!0?V:V.slice(0,v.length+1));l!==null&&(V=l.slice(1).join(""));const F=[],Z=y.length;for(let L=0,$=V;L<Z;L++){const Y=y[L].exec($);if(Y===null)break;$=$.slice(Y.shift().length),F.push(...Y)}return F.length!==0?F.join(""):V},f=v.map(V=>typeof V=="string"?V:_).join(""),d=f.split(_).join(n)}function O(a,n,s){const o=i.value,m=o.selectionEnd,v=o.value.length-m,R=w(a);n===!0&&D();const g=j(R),p=e.fillMask!==!1?E(g):g,r=b.value!==p;o.value!==p&&(o.value=p),r===!0&&(b.value=p),document.activeElement===o&&Q(()=>{if(p===d){const y=e.reverseFillMask===!0?d.length:0;o.setSelectionRange(y,y,"forward");return}if(s==="insertFromPaste"&&e.reverseFillMask!==!0){const y=o.selectionEnd;let V=m-1;for(let l=B;l<=V&&l<y;l++)f[l]!==_&&V++;A.right(o,V);return}if(["deleteContentBackward","deleteContentForward"].indexOf(s)!==-1){const y=e.reverseFillMask===!0?m===0?p.length>g.length?1:0:Math.max(0,p.length-(p===d?0:Math.min(g.length,v)+1))+1:m;o.setSelectionRange(y,y,"forward");return}if(e.reverseFillMask===!0)if(r===!0){const y=Math.max(0,p.length-(p===d?0:Math.min(g.length,v+1)));y===1&&m===1?o.setSelectionRange(y,y,"forward"):A.rightReverse(o,y)}else{const y=p.length-v;o.setSelectionRange(y,y,"backward")}else if(r===!0){const y=Math.max(0,f.indexOf(_),Math.min(g.length,m)-1);A.right(o,y)}else{const y=m-1;A.right(o,y)}});const h=e.unmaskedValue===!0?w(p):p;String(e.modelValue)!==h&&(e.modelValue!==null||h!=="")&&u(h,!0)}function N(a,n,s){const o=j(w(a.value));n=Math.max(0,f.indexOf(_),Math.min(o.length,n)),B=n,a.setSelectionRange(n,s,"forward")}const A={left(a,n){const s=f.slice(n-1).indexOf(_)===-1;let o=Math.max(0,n-1);for(;o>=0;o--)if(f[o]===_){n=o,s===!0&&n++;break}if(o<0&&f[n]!==void 0&&f[n]!==_)return A.right(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},right(a,n){const s=a.value.length;let o=Math.min(s,n+1);for(;o<=s;o++)if(f[o]===_){n=o;break}else f[o-1]===_&&(n=o);if(o>s&&f[n-1]!==void 0&&f[n-1]!==_)return A.left(a,s);a.setSelectionRange(n,n,"forward")},leftReverse(a,n){const s=I(a.value.length);let o=Math.max(0,n-1);for(;o>=0;o--)if(s[o-1]===_){n=o;break}else if(s[o]===_&&(n=o,o===0))break;if(o<0&&s[n]!==void 0&&s[n]!==_)return A.rightReverse(a,0);n>=0&&a.setSelectionRange(n,n,"backward")},rightReverse(a,n){const s=a.value.length,o=I(s),m=o.slice(0,n+1).indexOf(_)===-1;let v=Math.min(s,n+1);for(;v<=s;v++)if(o[v-1]===_){n=v,n>0&&m===!0&&n--;break}if(v>s&&o[n-1]!==void 0&&o[n-1]!==_)return A.leftReverse(a,s);a.setSelectionRange(n,n,"forward")}};function H(a){t("click",a),S=void 0}function K(a){if(t("keydown",a),Fe(a)===!0||a.altKey===!0)return;const n=i.value,s=n.selectionStart,o=n.selectionEnd;if(a.shiftKey||(S=void 0),a.keyCode===37||a.keyCode===39){a.shiftKey&&S===void 0&&(S=n.selectionDirection==="forward"?s:o);const m=A[(a.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];if(a.preventDefault(),m(n,S===s?o:s),a.shiftKey){const v=n.selectionStart;n.setSelectionRange(Math.min(S,v),Math.max(S,v),"forward")}}else a.keyCode===8&&e.reverseFillMask!==!0&&s===o?(A.left(n,s),n.setSelectionRange(n.selectionStart,o,"backward")):a.keyCode===46&&e.reverseFillMask===!0&&s===o&&(A.rightReverse(n,o),n.setSelectionRange(s,n.selectionEnd,"forward"))}function j(a){if(a==null||a==="")return"";if(e.reverseFillMask===!0)return M(a);const n=c;let s=0,o="";for(let m=0;m<n.length;m++){const v=a[s],R=n[m];if(typeof R=="string")o+=R,v===R&&s++;else if(v!==void 0&&R.regex.test(v))o+=R.transform!==void 0?R.transform(v):v,s++;else return o}return o}function M(a){const n=c,s=f.indexOf(_);let o=a.length-1,m="";for(let v=n.length-1;v>=0&&o!==-1;v--){const R=n[v];let g=a[o];if(typeof R=="string")m=R+m,g===R&&o--;else if(g!==void 0&&R.regex.test(g))do m=(R.transform!==void 0?R.transform(g):g)+m,o--,g=a[o];while(s===v&&g!==void 0&&R.regex.test(g));else return m}return m}function w(a){return typeof a!="string"||C===void 0?typeof a=="number"?C(""+a):a:C(a)}function E(a){return d.length-a.length<=0?a:e.reverseFillMask===!0&&a.length!==0?d.slice(0,-a.length)+a:a+d.slice(a.length)}return{innerValue:b,hasMask:q,moveCursorForPaste:N,updateMaskValue:O,onMaskedKeydown:K,onMaskedClick:H}}const Ue={name:String};function lt(e){return k(()=>({type:"hidden",name:e.name,value:e.modelValue}))}function nt(e={}){return(t,u,i)=>{t[u](x("input",{class:"hidden"+(i||""),...e.value}))}}function He(e){return k(()=>e.name||e.for)}function Qe(e,t){function u(){const i=e.modelValue;try{const f="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(i)===i&&("length"in i?Array.from(i):[i]).forEach(d=>{f.items.add(d)}),{files:f.files}}catch{return{files:void 0}}}return k(()=>{if(e.type==="file")return u()})}const Ye=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,We=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ge=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Je=/[a-z0-9_ -]$/i;function Xe(e){return function(u){if(u.type==="compositionend"||u.type==="change"){if(u.target.qComposing!==!0)return;u.target.qComposing=!1,e(u)}else u.type==="compositionupdate"&&u.target.qComposing!==!0&&typeof u.data=="string"&&(Ae.is.firefox===!0?Je.test(u.data)===!1:Ye.test(u.data)===!0||We.test(u.data)===!0||Ge.test(u.data)===!0)===!0&&(u.target.qComposing=!0)}}const at=_e({name:"QInput",inheritAttrs:!1,props:{...De,...Le,...Ue,modelValue:[String,Number,FileList],shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...je,"paste","change","keydown","click","animationend"],setup(e,{emit:t,attrs:u}){const{proxy:i}=W(),{$q:f}=i,d={};let c=NaN,C,B,S=null,q;const b=z(null),U=He(e),{innerValue:T,hasMask:I,moveCursorForPaste:D,updateMaskValue:O,onMaskedKeydown:N,onMaskedClick:A}=Ze(e,t,g,b),H=Qe(e),K=k(()=>ae(T.value)),j=Xe(v),M=ze({changeEvent:!0}),w=k(()=>e.type==="textarea"||e.autogrow===!0),E=k(()=>w.value===!0||["text","search","url","tel","password"].includes(e.type)),a=k(()=>{const l={...M.splitAttrs.listeners.value,onInput:v,onPaste:m,onChange:r,onBlur:h,onFocus:ue};return l.onCompositionstart=l.onCompositionupdate=l.onCompositionend=j,I.value===!0&&(l.onKeydown=N,l.onClick=A),e.autogrow===!0&&(l.onAnimationend=R),l}),n=k(()=>{const l={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:U.value,...M.splitAttrs.attributes.value,id:M.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return w.value===!1&&(l.type=e.type),e.autogrow===!0&&(l.rows=1),l});P(()=>e.type,()=>{b.value&&(b.value.value=e.modelValue)}),P(()=>e.modelValue,l=>{if(I.value===!0){if(B===!0&&(B=!1,String(l)===c))return;O(l)}else T.value!==l&&(T.value=l,e.type==="number"&&d.hasOwnProperty("value")===!0&&(C===!0?C=!1:delete d.value));e.autogrow===!0&&Q(p)}),P(()=>e.autogrow,l=>{l===!0?Q(p):b.value!==null&&u.rows>0&&(b.value.style.height="auto")}),P(()=>e.dense,()=>{e.autogrow===!0&&Q(p)});function s(){me(()=>{const l=document.activeElement;b.value!==null&&b.value!==l&&(l===null||l.id!==M.targetUid.value)&&b.value.focus({preventScroll:!0})})}function o(){b.value?.select()}function m(l){if(I.value===!0&&e.reverseFillMask!==!0){const F=l.target;D(F,F.selectionStart,F.selectionEnd)}t("paste",l)}function v(l){if(!l||!l.target)return;if(e.type==="file"){t("update:modelValue",l.target.files);return}const F=l.target.value;if(l.target.qComposing===!0){d.value=F;return}if(I.value===!0)O(F,!1,l.inputType);else if(g(F),E.value===!0&&l.target===document.activeElement){const{selectionStart:Z,selectionEnd:L}=l.target;Z!==void 0&&L!==void 0&&Q(()=>{l.target===document.activeElement&&F.indexOf(l.target.value)===0&&l.target.setSelectionRange(Z,L)})}e.autogrow===!0&&p()}function R(l){t("animationend",l),p()}function g(l,F){q=()=>{S=null,e.type!=="number"&&d.hasOwnProperty("value")===!0&&delete d.value,e.modelValue!==l&&c!==l&&(c=l,F===!0&&(B=!0),t("update:modelValue",l),Q(()=>{c===l&&(c=NaN)})),q=void 0},e.type==="number"&&(C=!0,d.value=l),e.debounce!==void 0?(S!==null&&clearTimeout(S),d.value=l,S=setTimeout(q,e.debounce)):q()}function p(){requestAnimationFrame(()=>{const l=b.value;if(l!==null){const F=l.parentNode.style,{scrollTop:Z}=l,{overflowY:L,maxHeight:$}=f.platform.is.firefox===!0?{}:window.getComputedStyle(l),Y=L!==void 0&&L!=="scroll";Y===!0&&(l.style.overflowY="hidden"),F.marginBottom=l.scrollHeight-1+"px",l.style.height="1px",l.style.height=l.scrollHeight+"px",Y===!0&&(l.style.overflowY=parseInt($,10)<l.scrollHeight?"auto":"hidden"),F.marginBottom="",l.scrollTop=Z}})}function r(l){j(l),S!==null&&(clearTimeout(S),S=null),q?.(),t("change",l.target.value)}function h(l){l!==void 0&&ue(l),S!==null&&(clearTimeout(S),S=null),q?.(),C=!1,B=!1,delete d.value,e.type!=="file"&&setTimeout(()=>{b.value!==null&&(b.value.value=T.value!==void 0?T.value:"")})}function y(){return d.hasOwnProperty("value")===!0?d.value:T.value!==void 0?T.value:""}le(()=>{h()}),oe(()=>{e.autogrow===!0&&p()}),Object.assign(M,{innerValue:T,fieldClass:k(()=>`q-${w.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:k(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length!==0),inputRef:b,emitValue:g,hasValue:K,floatingLabel:k(()=>K.value===!0&&(e.type!=="number"||isNaN(T.value)===!1)||ae(e.displayValue)),getControl:()=>x(w.value===!0?"textarea":"input",{ref:b,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...n.value,...a.value,...e.type!=="file"?{value:y()}:H.value}),getShadowControl:()=>x("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(w.value===!0?"":" text-no-wrap")},[x("span",{class:"invisible"},y()),x("span",e.shadowText)])});const V=Ne(M);return Object.assign(i,{focus:s,select:o,getNativeElement:()=>b.value}),ge(i,"nativeEl",()=>b.value),V}});export{at as Q,nt as a,lt as b,je as c,De as d,Ne as e,ze as f,He as g,ae as h,Xe as i,ne as t,Ue as u};
