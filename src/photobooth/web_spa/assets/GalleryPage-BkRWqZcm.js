import{I,J as $,f as B,j as C,K as p,k as u,i as g,T as P,L as D,M as Q,d as S,p as c,o as r,e as _,q as b,E as T,D as E,c as f,w as v,y as k,F as L,x as N,z as h,r as V,N as j}from"./index-pXyHF0TV.js";import{Q as G}from"./QPage-CWHBaiGC.js";import{Q as F}from"./QImg-DSvC3v7r.js";import{_ as H}from"./ReturnButton.vue_vue_type_script_setup_true_lang-JaMqSZl-.js";import{_ as R}from"./RouteAfterTimeout.vue_vue_type_script_setup_true_lang-Bzcf1YnE.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./QPageSticky-ZNy6v611.js";import"./vue-i18n-BHPX1aby.js";const w={threshold:0,root:null,rootMargin:"0px"};function M(e,t,n){let o,i,a;typeof n=="function"?(o=n,i=w,a=t.cfg===void 0):(o=n.handler,i=Object.assign({},w,n.cfg),a=t.cfg===void 0||$(t.cfg,i)===!1),t.handler!==o&&(t.handler=o),a===!0&&(t.cfg=i,t.observer!==void 0&&t.observer.unobserve(e),t.observer=new IntersectionObserver(([s])=>{if(typeof t.handler=="function"){if(s.rootBounds===null&&document.body.contains(e)===!0){t.observer.unobserve(e),t.observer.observe(e);return}(t.handler(s,t.observer)===!1||t.once===!0&&s.isIntersecting===!0)&&q(e)}},i),t.observer.observe(e))}function q(e){const t=e.__qvisible;t!==void 0&&(t.observer!==void 0&&t.observer.unobserve(e),delete e.__qvisible)}const O=I({name:"intersection",mounted(e,{modifiers:t,value:n}){const o={once:t.once===!0};M(e,o,n),e.__qvisible=o},updated(e,t){const n=e.__qvisible;n!==void 0&&M(e,n,t.value)},beforeUnmount:q}),Y=B({name:"QIntersection",props:{tag:{type:String,default:"div"},once:Boolean,transition:String,transitionDuration:{type:[String,Number],default:300},ssrPrerender:Boolean,margin:String,threshold:[Number,Array],root:{default:null},disable:Boolean,onVisibility:Function},setup(e,{slots:t,emit:n}){const o=C(p.value===!0?e.ssrPrerender:!1),i=u(()=>e.root!==void 0||e.margin!==void 0||e.threshold!==void 0?{handler:d,cfg:{root:e.root,rootMargin:e.margin,threshold:e.threshold}}:d),a=u(()=>e.disable!==!0&&(p.value!==!0||e.once!==!0||e.ssrPrerender!==!0)),s=u(()=>[[O,i.value,void 0,{once:e.once}]]),l=u(()=>`--q-transition-duration: ${e.transitionDuration}ms`);function d(m){o.value!==m.isIntersecting&&(o.value=m.isIntersecting,e.onVisibility!==void 0&&n("visibility",o.value))}function y(){if(o.value===!0)return[g("div",{key:"content",style:l.value},Q(t.default))];if(t.hidden!==void 0)return[g("div",{key:"hidden",style:l.value},t.hidden())]}return()=>{const m=e.transition?[g(P,{name:"q-transition--"+e.transition},y)]:y();return D(e.tag,{class:"q-intersection"},m,"main",a.value,()=>s.value)}}}),z={key:0},J={key:1},K={class:"absolute-full"},U=["src"],W=S({__name:"MediaItemThumbnailViewer",props:{item:{}},setup(e){return(t,n)=>t.item.media_type!="video"?(r(),c("div",z,[_(F,{src:`/media/thumbnail/${t.item.id}`,loading:"eager","no-transition":"","loading-show-delay":"800",ratio:1,class:"rounded-borders"},null,8,["src"])])):(r(),c("div",J,[n[0]||(n[0]=b("div",{style:{"padding-bottom":"100%"}},null,-1)),b("div",K,[b("video",{style:{width:"100%",height:"100%","object-fit":"cover","object-position":"50% 50%"},autoplay:"",loop:"",muted:"",playsinline:"",src:`/media/thumbnail/${t.item.id}`,class:"rounded-borders"},null,8,U)])]))}}),X={key:0,class:"row justify-center q-gutter-sm"},Z=["innerHTML"],x=S({__name:"GalleryPage",props:{standaloneMode:Boolean},setup(e){const t=e,n=T(),o=E(),i=u(()=>o.collection_number_of_items==0);return(a,s)=>{const l=V("router-link");return r(),f(G,{id:"gallery-page",padding:""},{default:v(()=>[i.value?(r(),c("div",{key:1,innerHTML:h(n).configuration.uisettings.GALLERY_EMPTY_MSG},null,8,Z)):(r(),c("div",X,[(r(!0),c(L,null,N(h(o).collection,d=>(r(),f(Y,{key:d.id,once:"",class:"preview-item"},{default:v(()=>[_(l,{to:{name:"mediaviewer",params:{id:d.id}}},{default:v(()=>[_(j,{class:"q-ma-xs no-shadow"},{default:v(()=>[_(W,{item:d},null,8,["item"])]),_:2},1024)]),_:2},1032,["to"])]),_:2},1024))),128))])),t.standaloneMode?k("",!0):(r(),f(H,{key:2,onTriggerReturn:s[0]||(s[0]=d=>a.$router.back())})),t.standaloneMode?k("",!0):(r(),f(R,{key:3,route:"/","timeout-ms":h(n).configuration.uisettings.show_frontpage_timeout*60*1e3},null,8,["timeout-ms"]))]),_:1})}}}),de=A(x,[["__scopeId","data-v-dec1be6d"]]);export{de as default};
