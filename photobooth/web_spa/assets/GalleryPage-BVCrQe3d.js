import{G as y,Q as k}from"./GalleryImageDetail-obXLYmDX.js";import{S as C,T as P,v as q,r as _,U as S,d as m,z as v,V as B,W as E,P as G,_ as M,K as Q,l as V,m as j,n as L,f as l,p,q as f,h as c,F as T,G as N,s as g,X as F,Y as H,C as b}from"./index-CTZOk7JZ.js";import{Q as O}from"./QPage-CtOIhIz6.js";import"./QHeader-CFwRq-CN.js";import"./QLayout-uk5-M_nV.js";import"./QLinearProgress-CKqADvbx.js";import"./use-panel-_gqEfoej.js";import"./QMenu-C7BKmuIW.js";import"./format-CJebrXOQ.js";import"./use-fullscreen-CZlBLFBX.js";import"./QPageSticky-DgJc7hwu.js";import"./QBtnDropdown-BxiZx-xw.js";import"./use-id-DOom3635.js";const I={threshold:0,root:null,rootMargin:"0px"};function D(e,t,i){let n,s,o;typeof i=="function"?(n=i,s=I,o=t.cfg===void 0):(n=i.handler,s=Object.assign({},I,i.cfg),o=t.cfg===void 0||P(t.cfg,s)===!1),t.handler!==n&&(t.handler=n),o===!0&&(t.cfg=s,t.observer!==void 0&&t.observer.unobserve(e),t.observer=new IntersectionObserver(([a])=>{if(typeof t.handler=="function"){if(a.rootBounds===null&&document.body.contains(e)===!0){t.observer.unobserve(e),t.observer.observe(e);return}(t.handler(a,t.observer)===!1||t.once===!0&&a.isIntersecting===!0)&&w(e)}},s),t.observer.observe(e))}function w(e){const t=e.__qvisible;t!==void 0&&(t.observer!==void 0&&t.observer.unobserve(e),delete e.__qvisible)}const U=C({name:"intersection",mounted(e,{modifiers:t,value:i}){const n={once:t.once===!0};D(e,n,i),e.__qvisible=n},updated(e,t){const i=e.__qvisible;i!==void 0&&D(e,i,t.value)},beforeUnmount:w}),Y=q({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(e,{slots:t,emit:i}){const n=_(S.value===!0?e.ssrPrerender:!1),s=m(()=>e.root!==void 0||e.margin!==void 0||e.threshold!==void 0?{handler:d,cfg:{root:e.root,rootMargin:e.margin,threshold:e.threshold}}:d),o=m(()=>e.disable!==!0&&(S.value!==!0||e.once!==!0||e.ssrPrerender!==!0)),a=m(()=>[[U,s.value,void 0,{once:e.once}]]),r=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`);function d(u){n.value!==u.isIntersecting&&(n.value=u.isIntersecting,e.onVisibility!==void 0&&i("visibility",n.value))}function h(){if(n.value===!0)return[v("div",{key:"content",style:r.value},G(t.default))];if(t.hidden!==void 0)return[v("div",{key:"hidden",style:r.value},t.hidden())]}return()=>{const u=e.transition?[v(B,{name:"q-transition--"+e.transition},h)]:h();return E(e.tag,{class:"q-intersection"},u,"main",o.value,()=>a.value)}}}),z={components:{GalleryImageDetail:y},setup(){const e=Q(),t=V(),i=j();return{store:e,configurationStore:t,mediacollectionStore:i,GalleryImageDetail:y,indexSelected:_(null),showImageDetail:_(!1)}},computed:{itemId(){return this.$route.params.id},isGalleryEmpty(){return this.mediacollectionStore.collection_number_of_items==0}},watch:{itemId(e){const t=this.mediacollectionStore.getIndexOfItemId(e);t==-1?console.error(`image id not found ${e}`):this.openPic(t)}},mounted(){},methods:{getImageDetail(e,t="thumbnail"){return this.mediacollectionStore.collection[e][t]},openPic(e){this.indexSelected=e,this.showImageDetail=!0}}},A={key:0,class:"row justify-center q-gutter-sm"},R={key:0},K={key:1},W={class:"absolute-full"},X=["src"],x=["innerHTML"];function J(e,t,i,n,s,o){const a=L("gallery-image-detail");return l(),p(O,{id:"gallery-page",padding:""},{default:f(()=>[o.isGalleryEmpty?(l(),c("div",{key:1,innerHTML:n.configurationStore.getConfigElement("uisettings.GALLERY_EMPTY_MSG")},null,8,x)):(l(),c("div",A,[(l(!0),c(T,null,N(n.mediacollectionStore.collection,(r,d)=>(l(),p(Y,{key:r.id,once:"",class:"preview-item"},{default:f(()=>[g(H,{class:"q-ma-xs no-shadow",onClick:h=>o.openPic(d)},{default:f(()=>[r.media_type!="video"?(l(),c("div",R,[g(k,{src:o.getImageDetail(d),loading:"eager","no-transition":"","no-spinner":"",ratio:1,class:"rounded-borders"},null,8,["src"])])):(l(),c("div",K,[t[2]||(t[2]=b("div",{style:{"padding-bottom":"100%"}},null,-1)),b("div",W,[b("video",{style:{width:"100%",height:"100%","object-fit":"cover","object-position":"50% 50%"},autoplay:"",loop:"",muted:"",playsinline:"",src:o.getImageDetail(d),class:"rounded-borders"},null,8,X)])]))]),_:2},1032,["onClick"])]),_:2},1024))),128))])),g(F,{modelValue:n.showImageDetail,"onUpdate:modelValue":t[1]||(t[1]=r=>n.showImageDetail=r),"transition-show":"jump-up","transition-hide":"jump-down",maximized:""},{default:f(()=>[g(a,{"item-repository":n.mediacollectionStore.collection,"index-selected":n.indexSelected,class:"full-height",onCloseEvent:t[0]||(t[0]=r=>n.showImageDetail=!1)},null,8,["item-repository","index-selected"])]),_:1},8,["modelValue"])]),_:1})}const ue=M(z,[["render",J],["__scopeId","data-v-056b5c3b"]]);export{ue as default};
