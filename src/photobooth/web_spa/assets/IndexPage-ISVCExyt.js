import{x as G,y as D,z as H,A as F,d as Q,B as L,e as d,C as O,o as K,D as E,E as $,f as i,g as o,s as m,n as u,m as p,F as W,t as N,G as X,H as J,p as c,I,l as h,q as P,v as a,J as k,Q as S,h as U,i as Y,a as Z,K as ee,L as z}from"./index-WJdzVhFN.js";import{Q as M}from"./QPageSticky-CJWUTueD.js";import{Q as te}from"./QPage-DG0nqvd7.js";import{Q as ie}from"./QCircularProgress-CwoBVeT6.js";import"./format-CJebrXOQ.js";const ne='<circle cx="12.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="0s" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5"><animate attributeName="fill-opacity" begin="100ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="300ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="600ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="12.5" r="12.5"><animate attributeName="fill-opacity" begin="800ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="52.5" r="12.5"><animate attributeName="fill-opacity" begin="400ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="12.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="700ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="52.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="500ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle><circle cx="92.5" cy="92.5" r="12.5"><animate attributeName="fill-opacity" begin="200ms" dur="1s" values="1;.2;1" calcMode="linear" repeatCount="indefinite"></animate></circle>',ae=G({name:"QSpinnerGrid",props:D,setup(v){const{cSize:t,classes:e}=H(v);return()=>F("svg",{class:e.value,fill:"currentColor",width:t.value,height:t.value,viewBox:"0 0 105 105",xmlns:"http://www.w3.org/2000/svg",innerHTML:ne})}}),se='<g fill="none" fill-rule="evenodd" stroke-width="2"><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="0s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="0s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle><circle cx="22" cy="22" r="1"><animate attributeName="r" begin="-0.9s" dur="1.8s" values="1; 20" calcMode="spline" keyTimes="0; 1" keySplines="0.165, 0.84, 0.44, 1" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" begin="-0.9s" dur="1.8s" values="1; 0" calcMode="spline" keyTimes="0; 1" keySplines="0.3, 0.61, 0.355, 1" repeatCount="indefinite"></animate></circle></g>',oe=G({name:"QSpinnerPuff",props:D,setup(v){const{cSize:t,classes:e}=H(v);return()=>F("svg",{class:e.value,stroke:"currentColor",width:t.value,height:t.value,viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",innerHTML:se})}}),re={id:"countdown-timer-container",class:"flex flex-center",style:{width:"70vw",height:"70vh"}},ce=["innerHTML"],le={style:{height:"100%"}},ue=Q({__name:"CountdownTimer",props:{duration:{},messageDuration:{default:.5},messageText:{default:"😃"}},setup(v){let t;const e=L(0),g=L(0),l=v,_=d(()=>e.value>0),r=d(()=>e.value>0),f=d(()=>e.value<=l.messageDuration);O(()=>{C()}),K(()=>{y()});const y=()=>{clearInterval(t),e.value=0},C=()=>{g.value=l.duration,e.value=g.value,console.log(`starting timer, duration=${g.value}`),t=window.setInterval(()=>{e.value-=.05,e.value<=0&&clearInterval(t)},50)};return(b,q)=>E((i(),o("div",re,[E(m("div",{id:"countdown-timer-message",style:{position:"absolute","font-size":"150px"},innerHTML:b.messageText},null,8,ce),[[$,f.value]]),m("div",le,[E(u(ie,{"show-value":!f.value,style:{width:"100%",height:"100%"},value:e.value,min:0,max:g.value,reverse:"","animation-speed":"100","font-size":"0.5em",size:"70vh",color:"primary",class:"text-secondary"},{default:p(()=>[W(N(parseFloat(e.value.toFixed(0))),1)]),_:1},8,["show-value","value","max"]),[[$,r.value]])])],512)),[[$,_.value]])}}),de={class:"row q-gutter-md action-buttons"},me={style:{"white-space":"nowrap"},class:"gt-sm"},ge=Q({__name:"FrontpageTriggerButtons",props:{triggers:{}},emits:["triggerAction"],setup(v,{emit:t}){const e=t;function g(l,_){e("triggerAction",l,_)}return(l,_)=>(i(),o("div",de,[(i(!0),o(X,null,J(l.triggers,(r,f)=>(i(),o("div",{key:f},[r.show_button&&!(c(I.isEmpty)(r.title)&&c(I.isEmpty)(r.icon))?(i(),h(S,{key:0,stack:"",color:"primary","no-caps":"",rounded:"",class:k(["action-button col-auto glass-effect",["action-button-"+f]]),onClick:y=>g(r.action,r.config_index)},{default:p(()=>[c(I.isEmpty)(r.icon)?a("",!0):(i(),h(P,{key:0,name:`sym_o_${r.icon}`},null,8,["name"])),m("div",me,N(r.title),1)]),_:2},1032,["class","onClick"])):a("",!0)]))),128))]))}}),pe={id:"preview-container"},ve={id:"preview-outer-wrapper"},fe=["src"],_e={key:0,class:"full-height full-width column justify-center content-center",style:{position:"absolute"}},he={key:1,id:"frontpage-countdown",class:"full-height full-width column justify-center content-center",style:{position:"absolute"}},ye=["innerHTML"],be={key:0},we={key:0},ke={class:"q-gutter-md"},Ce={class:"gt-sm"},xe={key:0},Te={class:"q-gutter-md"},Me={class:"gt-sm"},$e=Q({__name:"IndexPage",setup(v){const t=U(),e=Y(),g=Z(),l=L(0);ee(l,()=>{l.value>=5&&g.push("/admin"),l.value=0},{debounce:500});const _=d(()=>{const n=[];return Object.entries(e.configuration.actions).forEach(([s,T])=>{T.forEach((w,A)=>{const B={action:`actions/${s}`,config_index:A,show_button:w.trigger.ui_trigger.show_button,title:w.trigger.ui_trigger.title,icon:w.trigger.ui_trigger.icon};n.push(B)})}),console.log(n),n}),r=d(()=>{const n=t.state=="capture";return t.state=="captures_completed"||n&&!b.value}),f=d(()=>t.state=="record"),y=d(()=>e.configuration.uisettings.livestream_mirror_effect),C=d(()=>e.configuration.uisettings.admin_button_invisible),b=d(()=>{const n=t.state=="counting",s=t.state=="capture";return t.duration&&t.duration>0&&n||s}),q=d(()=>{const n=e.configuration.uisettings.enable_livestream_when_idle,s=e.configuration.uisettings.enable_livestream_when_active,T=!t.state||t.state=="finished",w=t.state=="record",A=t.state=="counting",B=t.state=="capture";return T&&n||(A||B)&&s||w}),x=d(()=>!t.state||t.state=="finished"),R=()=>{C.value?l.value++:g.push("/admin")},j=(n,s)=>{z(`/api/${n}/${s}`)},V=()=>{z("/api/actions/stop")};return(n,s)=>(i(),h(te,{id:"index-page",class:"q-pa-none column full-height"},{default:p(()=>[m("div",pe,[c(e).configuration.uisettings.livestream_blurredbackground?(i(),o("div",{key:0,id:"preview-blurredback",style:{"background-image":"url('/api/aquisition/stream.mjpg')"},class:k({mirroreffect:y.value})},null,2)):a("",!0),m("div",ve,[q.value?(i(),o("div",{key:0,id:"preview-inner-wrapper",class:k({mirroreffect:y.value})},[m("img",{src:"/api/aquisition/stream.mjpg",id:"preview-stream",class:k({countdowncounting:b.value})},null,2),c(e).configuration.uisettings.enable_livestream_frameoverlay?(i(),o("img",{key:0,id:"preview-frameoverlay",src:c(e).configuration.uisettings.livestream_frameoverlay_image,style:{"z-index":"2"}},null,8,fe)):a("",!0)],2)):a("",!0)])]),r.value?(i(),o("div",_e,[u(ae,{size:"20em"})])):a("",!0),b.value?(i(),o("div",he,[u(ue,{ref:"countdowntimer",duration:c(t).duration,"message-duration":c(e).configuration.uisettings.TAKEPIC_MSG_TIME,"message-text":c(e).configuration.uisettings.TAKEPIC_MSG_TEXT},null,8,["duration","message-duration","message-text"])])):a("",!0),x.value?(i(),o("div",{key:2,id:"frontpage_text",innerHTML:c(e).configuration.uisettings.FRONTPAGE_TEXT},null,8,ye)):a("",!0),u(M,{position:"bottom",class:"q-mb-lg"},{default:p(()=>[x.value?(i(),o("div",be,[u(ge,{triggers:_.value,onTriggerAction:j},null,8,["triggers"])])):a("",!0)]),_:1}),u(M,{position:"top-left",class:"q-ma-lg"},{default:p(()=>[x.value?(i(),o("div",we,[m("div",ke,[c(e).configuration.uisettings.show_gallery_on_frontpage?(i(),h(S,{key:0,id:"frontpage-button-to-gallery",color:"primary","no-caps":"",rounded:"",to:"/gallery",class:"action-button glass-effect"},{default:p(()=>[u(P,{left:"",name:"sym_o_photo_library"}),m("div",Ce,N(n.$t("BTN_LABEL_MAINPAGE_TO_GALLERY")),1)]),_:1})):a("",!0)])])):a("",!0)]),_:1}),u(M,{position:"top-right",class:"q-ma-lg"},{default:p(()=>[x.value?(i(),o("div",xe,[m("div",Te,[c(e).configuration.uisettings.show_admin_on_frontpage?(i(),h(S,{key:0,id:"frontpage-button-to-admin",rounded:"",color:"transparent","no-caps":"",class:k(["action-button action-button-admin glass-effect",{"action-button-admin-invisible":C.value}]),onClick:R},{default:p(()=>[u(P,{left:"",name:"sym_o_admin_panel_settings"}),m("div",Me,N(n.$t("BTN_LABEL_MAINPAGE_TO_ADMIN")),1)]),_:1},8,["class"])):a("",!0)])])):a("",!0)]),_:1}),f.value?(i(),h(M,{key:3,id:"frontpage-indicator-recording",position:"top",offset:[0,25],align:"center"},{default:p(()=>[u(oe,{color:"red",size:"10em"}),s[1]||(s[1]=m("br",null,null,-1)),u(S,{flat:"",color:"red",label:"Stop recording",onClick:s[0]||(s[0]=T=>V())})]),_:1})):a("",!0)]),_:1}))}});export{$e as default};
