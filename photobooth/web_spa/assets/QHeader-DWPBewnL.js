import{b as H}from"./QLayout-D2SQFIhX.js";import{x as Q,aG as O,bj as c,bk as R,B as g,e as r,w as s,o as _,aS as $,A as v,R as p}from"./index-Bt8Z_6Yt.js";const L=Q({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(t,{slots:V,emit:h}){const{proxy:{$q:d}}=p(),a=O(R,c);if(a===c)return console.error("QHeader needs to be child of QLayout"),c;const i=g(parseInt(t.heightHint,10)),l=g(!0),f=r(()=>t.reveal===!0||a.view.value.indexOf("H")!==-1||d.platform.is.ios&&a.isContainer.value===!0),m=r(()=>{if(t.modelValue!==!0)return 0;if(f.value===!0)return l.value===!0?i.value:0;const e=i.value-a.scroll.value.position;return e>0?e:0}),y=r(()=>t.modelValue!==!0||f.value===!0&&l.value!==!0),q=r(()=>t.modelValue===!0&&y.value===!0&&t.reveal===!0),x=r(()=>"q-header q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-top"+(t.bordered===!0?" q-header--bordered":"")+(y.value===!0?" q-header--hidden":"")+(t.modelValue!==!0?" q-layout--prevent-focus":"")),z=r(()=>{const e=a.rows.value.top,n={};return e[0]==="l"&&a.left.space===!0&&(n[d.lang.rtl===!0?"right":"left"]=`${a.left.size}px`),e[2]==="r"&&a.right.space===!0&&(n[d.lang.rtl===!0?"left":"right"]=`${a.right.size}px`),n});function u(e,n){a.update("header",e,n)}function o(e,n){e.value!==n&&(e.value=n)}function w({height:e}){o(i,e),u("size",e)}function B(e){q.value===!0&&o(l,!0),h("focusin",e)}s(()=>t.modelValue,e=>{u("space",e),o(l,!0),a.animate()}),s(m,e=>{u("offset",e)}),s(()=>t.reveal,e=>{e===!1&&o(l,t.modelValue)}),s(l,e=>{a.animate(),h("reveal",e)}),s(a.scroll,e=>{t.reveal===!0&&o(l,e.direction==="up"||e.position<=t.revealOffset||e.position-e.inflectionPoint<100)});const b={};return a.instances.header=b,t.modelValue===!0&&u("size",i.value),u("space",t.modelValue),u("offset",m.value),_(()=>{a.instances.header===b&&(a.instances.header=void 0,u("size",0),u("offset",0),u("space",!1))}),()=>{const e=$(V.default,[]);return t.elevated===!0&&e.push(v("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),e.push(v(H,{debounce:0,onResize:w})),v("header",{class:x.value,style:z.value,onFocusin:B},e)}}});export{L as Q};
