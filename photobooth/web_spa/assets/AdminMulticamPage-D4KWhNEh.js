import{d as k,i as C,e as v,f as r,l as c,m as e,n as a,X as u,s as l,t as i,$ as m,Q as o,p,M as f,g as Q,G as $,H as w,a1 as q,F as g}from"./index-x-yFzLoN.js";import{Q as B}from"./QImg-dXaGt8HD.js";import{Q as S}from"./QPage-mkCqzv_8.js";const N={class:"text-h5"},V={class:"q-ma-none"},y={class:"text-caption"},E={class:"text-caption"},M={class:"q-pa-md row items-start q-gutter-md"},P={class:"absolute-bottom"},h={class:"text-subtitle2"},j=k({__name:"AdminMulticamPage",setup(A){const d=C(),_=v(()=>{const s=d.getConfigElement("backends.group_backends",null),t=d.getConfigElement("backends.index_backend_multicam",null);return s==null||t==null?(console.error("cannot get multicam backend from config"),[]):s[t].wigglecam.nodes});return(s,t)=>(r(),c(S,{id:"multicam-page",padding:""},{default:e(()=>[a(u,{flat:"",class:"q-pa-md"},{default:e(()=>[l("div",N,i(s.$t("Multicamera Tool")),1),l("div",V,[a(m,{class:"q-gutter-sm q-px-none"},{default:e(()=>[l("div",y,i(s.$t("Single Camera Calibration")),1),a(o,{label:s.$t("calibrate intrinsics"),onClick:t[0]||(t[0]=n=>p(f)("/api/wigglecam/xxx"))},null,8,["label"]),a(o,{label:s.$t("calibrate extrinsics"),onClick:t[1]||(t[1]=n=>p(f)("/api/wigglecam/xxx"))},null,8,["label"])]),_:1}),a(m,{class:"q-px-none"},{default:e(()=>[l("div",E,i(s.$t("Live View")),1),l("div",M,[(r(!0),Q($,null,w(_.value,(n,b,x)=>(r(),c(u,{key:x,style:{width:"100%","max-width":"250px"}},{default:e(()=>[a(B,{fit:"contain",src:`${n.base_url}api/camera/stream.mjpg`},{default:e(()=>[l("div",P,[t[2]||(t[2]=l("div",{class:"text-subtitle2"},null,-1)),l("div",h,i(b)+": "+i(n.description),1)])]),_:2},1032,["src"]),a(q,null,{default:e(()=>[a(o,{flat:""},{default:e(()=>t[3]||(t[3]=[g("calibrate")])),_:1}),a(o,{flat:""},{default:e(()=>t[4]||(t[4]=[g("capture")])),_:1})]),_:1})]),_:2},1024))),128))])]),_:1})])]),_:1})]),_:1}))}});export{j as default};
