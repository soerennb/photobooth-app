import{d as S,f as B,g as V,n as l,m as a,q as R,p as f,ar as q,j as O,B as L,l as k,X as m,s as n,t as d,a3 as E,$ as _,a0 as v,a1 as C,D as r,Q as s,a2 as i,M as y,F as M}from"./index-x-yFzLoN.js";import{Q as D}from"./QPage-mkCqzv_8.js";import{Q as U}from"./QSelect-B42_9ejy.js";import{u as h,i as A,e as Q,d as F}from"./i18n-BWrUcHr7.js";import"./use-key-composition-Cg2lLw86.js";import"./use-id-Dd4s8hID.js";import"./position-engine-DGeMvu6T.js";import"./selection-cI33PBGq.js";import"./rtl-DluBzGS8.js";import"./format-CJebrXOQ.js";const G={class:"row"},x=S({__name:"LanguageSwitcher",setup(I){const{locale:c,availableLocales:T}=h({useScope:"global"}),N=new Intl.DisplayNames(["en"],{type:"language",languageDisplay:"standard"}),w=T.map(function(u){return{value:u,label:u!=A?N.of(u):"Edit translation (Crowdin)"}}).sort((u,p)=>u.label.localeCompare(p.label)),$=u=>{c.value=u,c.value==A?(console.log("enable crowdin in context translation"),Q()):(console.log("disable crowdin in context translation"),F()),localStorage.setItem("locale",c.value),console.log("Stored locale: ",c.value)};return(u,p)=>(B(),V("div",G,[l(U,{modelValue:f(c),"onUpdate:modelValue":[p[0]||(p[0]=b=>q(c)?c.value=b:null),p[1]||(p[1]=b=>$(b))],options:f(w),label:"Language","emit-value":"","map-options":""},{prepend:a(()=>[l(R,{name:"sym_o_language"})]),_:1},8,["modelValue","options"])]))}}),H={class:"text-h5"},P={class:"q-ma-none"},W={class:"q-ml-sm"},Y={class:"q-ml-sm"},j={class:"q-ml-sm"},X={class:"q-ml-sm"},z={class:"q-ml-sm"},J={class:"q-ml-sm"},K={class:"text-caption"},Z={class:"text-caption"},ll={class:"text-h5"},el={class:"row"},al={class:"q-ma-sm"},tl={class:"q-gutter-sm"},ol={class:"q-ml-sm"},sl={class:"q-ml-sm"},nl={class:"text-h5"},rl={class:"row q-gutter-sm"},vl=S({__name:"AdminDashboardPage",setup(I){const c=O(),T=L(!1),N=L(!1),w=L(!1),$=L(!1),u=L(!1),p=L(!1),b=L(!1),g=L(!1);return(t,e)=>(B(),k(D,{id:"admin-page",padding:""},{default:a(()=>[l(m,{flat:"",class:"q-pa-md"},{default:a(()=>[n("div",H,d(t.$t("TITLE_SERVER_CONTROL")),1),n("div",P,[n("div",null,[l(E,{modelValue:T.value,"onUpdate:modelValue":e[1]||(e[1]=o=>T.value=o)},{default:a(()=>[l(m,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:a(()=>[l(_,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:a(()=>[l(v,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),n("span",W,d(t.$t("MSG_CONFIRM_REBOOT")),1)]),_:1}),l(C,{align:"right"},{default:a(()=>[r(l(s,{flat:"",label:t.$t("BTN_LABEL_CANCEL"),color:"primary"},null,8,["label"]),[[i]]),r(l(s,{label:t.$t("BTN_LABEL_REBOOT"),color:"primary",onClick:e[0]||(e[0]=o=>f(y)("/api/system/server/reboot"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(E,{modelValue:N.value,"onUpdate:modelValue":e[3]||(e[3]=o=>N.value=o)},{default:a(()=>[l(m,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:a(()=>[l(_,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:a(()=>[l(v,{icon:"sym_o_power_settings_new",color:"primary","text-color":"white"}),n("span",Y,d(t.$t("MSG_CONFIRM_SHUTDOWN")),1)]),_:1}),l(C,{align:"right"},{default:a(()=>[r(l(s,{flat:"",label:t.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),r(l(s,{label:t.$t("BTN_LABEL_SHUTDOWN"),color:"primary",onClick:e[2]||(e[2]=o=>f(y)("/api/system/server/shutdown"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(E,{modelValue:w.value,"onUpdate:modelValue":e[5]||(e[5]=o=>w.value=o)},{default:a(()=>[l(m,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:a(()=>[l(_,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:a(()=>[l(v,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),n("span",j,d(t.$t("MSG_CONFIRM_RESTART_SERVICE")),1)]),_:1}),l(C,{align:"right"},{default:a(()=>[r(l(s,{flat:"",label:t.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),r(l(s,{label:t.$t("BTN_LABEL_RESTART_SERVICE"),color:"primary",onClick:e[4]||(e[4]=o=>f(y)("/api/system/service/restart"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(E,{modelValue:$.value,"onUpdate:modelValue":e[7]||(e[7]=o=>$.value=o)},{default:a(()=>[l(m,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:a(()=>[l(_,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:a(()=>[l(v,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),n("span",X,d(t.$t("MSG_CONFIRM_RELOAD_SERVICE")),1)]),_:1}),l(C,{align:"right"},{default:a(()=>[r(l(s,{flat:"",label:t.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),r(l(s,{label:t.$t("BTN_LABEL_RELOAD_SERVICE"),color:"primary",onClick:e[6]||(e[6]=o=>f(y)("/api/system/service/reload"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(E,{modelValue:u.value,"onUpdate:modelValue":e[9]||(e[9]=o=>u.value=o)},{default:a(()=>[l(m,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:a(()=>[l(_,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:a(()=>[l(v,{icon:"sym_o_add_circle",color:"primary","text-color":"white"}),n("span",z,d(t.$t("MSG_CONFIRM_INSTALL_SERVICE")),1)]),_:1}),l(C,{align:"right"},{default:a(()=>[r(l(s,{flat:"",label:t.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),r(l(s,{label:t.$t("BTN_LABEL_INSTALL_SERVICE"),color:"primary",onClick:e[8]||(e[8]=o=>f(y)("/api/system/service/install"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(E,{modelValue:p.value,"onUpdate:modelValue":e[11]||(e[11]=o=>p.value=o)},{default:a(()=>[l(m,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:a(()=>[l(_,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:a(()=>[l(v,{icon:"sym_o_cancel",color:"primary","text-color":"white"}),n("span",J,d(t.$t("MSG_CONFIRM_UNINSTALL_SERVICE")),1)]),_:1}),l(C,{align:"right"},{default:a(()=>[r(l(s,{flat:"",label:t.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),r(l(s,{label:t.$t("BTN_LABEL_UNINSTALL_SERVICE"),color:"primary",onClick:e[10]||(e[10]=o=>f(y)("/api/system/service/uninstall"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(_,{class:"q-gutter-sm q-px-none"},{default:a(()=>[n("div",K,d(t.$t("Host")),1),l(s,{label:t.$t("BTN_LABEL_REBOOT_HOST"),onClick:e[12]||(e[12]=o=>T.value=!0)},null,8,["label"]),l(s,{label:t.$t("BTN_LABEL_SHUTDOWN_HOST"),onClick:e[13]||(e[13]=o=>N.value=!0)},null,8,["label"])]),_:1}),l(_,{class:"q-gutter-sm q-px-none"},{default:a(()=>[n("div",Z,d(t.$t("Service (Linux only)")),1),l(s,{label:t.$t("BTN_LABEL_INSTALL_SERVICE"),onClick:e[14]||(e[14]=o=>u.value=!0)},null,8,["label"]),l(s,{label:t.$t("BTN_LABEL_UNINSTALL_SERVICE"),onClick:e[15]||(e[15]=o=>p.value=!0)},null,8,["label"]),l(s,{label:t.$t("BTN_LABEL_RESTART_SERVICE"),onClick:e[16]||(e[16]=o=>w.value=!0)},null,8,["label"])]),_:1})])])]),_:1}),l(m,{flat:"",class:"q-pa-md q-mt-md"},{default:a(()=>[n("div",ll,d(t.$t("TITLE_MAINTAIN_GALLERY")),1),n("div",el,[n("div",al,[n("div",tl,[l(E,{modelValue:b.value,"onUpdate:modelValue":e[18]||(e[18]=o=>b.value=o)},{default:a(()=>[l(m,{class:"q-pa-sm"},{default:a(()=>[l(_,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:a(()=>[l(v,{icon:"sym_o_delete",color:"primary","text-color":"white"}),n("span",ol,d(t.$t("MSG_CONFIRM_DELETE_ALL_MEDIA_FILES")),1)]),_:1}),l(C,{align:"right"},{default:a(()=>[r(l(s,{flat:"",label:"Cancel",color:"primary"},null,512),[[i]]),r(l(s,{label:"Delete all",color:"primary",onClick:e[17]||(e[17]=o=>f(c).deleteAllItems())},null,512),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(E,{modelValue:g.value,"onUpdate:modelValue":e[20]||(e[20]=o=>g.value=o)},{default:a(()=>[l(m,{class:"q-pa-sm"},{default:a(()=>[l(_,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:a(()=>[l(v,{icon:"sym_o_delete",color:"primary","text-color":"white"}),n("span",sl,d(t.$t("Are you sure to clear the recycle directory?")),1)]),_:1}),l(C,{align:"right"},{default:a(()=>[r(l(s,{flat:"",label:"Cancel",color:"primary"},null,512),[[i]]),r(l(s,{label:"Yes, clear!",color:"primary",onClick:e[19]||(e[19]=o=>f(y)("/api/admin/files/clearrecycledir"))},null,512),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(s,{label:t.$t("BTN_LABEL_DELETE_ALL_MEDIA_FILES"),onClick:e[21]||(e[21]=o=>b.value=!0)},null,8,["label"]),l(s,{label:t.$t("Clear recycle directory"),onClick:e[22]||(e[22]=o=>g.value=!0)},null,8,["label"])])])])]),_:1}),l(m,{flat:"",class:"q-pa-md q-mt-md"},{default:a(()=>[n("div",nl,d(t.$t("TITLE_LOCAL_UI_SETTINGS")),1),n("div",rl,[l(x),l(s,{href:"https://github.com/photobooth-app/photobooth-app/blob/main/CONTRIBUTING.md#help-translate-the-app",target:"_blank"},{default:a(()=>[M(d(t.$t("Help to translate")),1)]),_:1})])]),_:1})]),_:1}))}});export{vl as default};
