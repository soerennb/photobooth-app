import{d as N,_ as S,f as A,g as B,m as e,l as o,n as I,z as p,I as V,k as R,V as _,p as n,t as m,a2 as L,Z as c,$ as E,a0 as C,B as i,Q as s,a1 as d,D as q}from"./index-CJvLDmP-.js";import{Q as O}from"./QPage-MfmOlYcX.js";import{Q as $}from"./QSelect-CJy4U0JK.js";import{u as h,i as T,e as k,d as D}from"./i18n-D7cxlsn_.js";import"./use-key-composition-Ctpi_VDN.js";import"./use-id-CW_SmrpB.js";import"./QItem-UmOm1SpE.js";import"./rtl-BDvjVL0z.js";import"./selection-BPn6LAZT.js";import"./format-CJebrXOQ.js";const M=N({__name:"LanguageSwitcher",setup(r,{expose:l}){l();const{locale:u,availableLocales:a}=h({useScope:"global"}),b=new Intl.DisplayNames(["en"],{type:"language",languageDisplay:"standard"}),y=a.map(function(f){return{value:f,label:f!=T?b.of(f):"Edit translation (Crowdin)"}}).sort((f,w)=>f.label.localeCompare(w.label)),v={locale:u,availableLocales:a,languageNames:b,localeOptions:y,switchLocale:f=>{u.value=f,u.value==T?(console.log("enable crowdin in context translation"),k()):(console.log("disable crowdin in context translation"),D()),localStorage.setItem("locale",u.value),console.log("Stored locale: ",u.value)}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}),P={class:"row"};function U(r,l,u,a,b,y){return A(),B("div",P,[e($,{modelValue:a.locale,"onUpdate:modelValue":[l[0]||(l[0]=t=>a.locale=t),l[1]||(l[1]=t=>a.switchLocale(t))],options:a.localeOptions,label:"Language","emit-value":"","map-options":""},{prepend:o(()=>[e(I,{name:"sym_o_language"})]),_:1},8,["modelValue","options"])])}const Q=S(M,[["render",U],["__file","LanguageSwitcher.vue"]]),x=N({__name:"AdminDashboardPage",setup(r,{expose:l}){l();const u=p(!1),a=p(!1),b=p(!1),y=p(!1),t=p(!1),v=p(!1),f=p(!1),w=p(!1),g={confirm_reboot:u,confirm_shutdown:a,confirm_restart_service:b,confirm_reload_service:y,confirm_install_service:t,confirm_uninstall_service:v,confirm_delete_all:f,confirm_clear_recycle_directory:w,get remoteProcedureCall(){return V},LanguageSwitcher:Q};return Object.defineProperty(g,"__isScriptSetup",{enumerable:!1,value:!0}),g}}),G={class:"text-h5"},F={class:"q-ma-none"},H={class:"q-ml-sm"},W={class:"q-ml-sm"},j={class:"q-ml-sm"},Y={class:"q-ml-sm"},z={class:"q-ml-sm"},Z={class:"q-ml-sm"},J={class:"text-caption"},K={class:"text-caption"},X={class:"text-h5"},ee={class:"row"},le={class:"q-ma-sm"},ae={class:"q-gutter-sm"},oe={class:"q-ml-sm"},te={class:"q-ml-sm"},re={class:"text-h5"},se={class:"row q-gutter-sm"};function ne(r,l,u,a,b,y){return A(),R(O,{id:"admin-page",padding:""},{default:o(()=>[e(_,{flat:"",class:"q-pa-md"},{default:o(()=>[n("div",G,m(r.$t("TITLE_SERVER_CONTROL")),1),n("div",F,[n("div",null,[e(L,{modelValue:a.confirm_reboot,"onUpdate:modelValue":l[1]||(l[1]=t=>a.confirm_reboot=t)},{default:o(()=>[e(_,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[e(c,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[e(E,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),n("span",H,m(r.$t("MSG_CONFIRM_REBOOT")),1)]),_:1}),e(C,{align:"right"},{default:o(()=>[i(e(s,{flat:"",label:r.$t("BTN_LABEL_CANCEL"),color:"primary"},null,8,["label"]),[[d]]),i(e(s,{label:r.$t("BTN_LABEL_REBOOT"),color:"primary",onClick:l[0]||(l[0]=t=>a.remoteProcedureCall("/api/system/server/reboot"))},null,8,["label"]),[[d]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(L,{modelValue:a.confirm_shutdown,"onUpdate:modelValue":l[3]||(l[3]=t=>a.confirm_shutdown=t)},{default:o(()=>[e(_,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[e(c,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[e(E,{icon:"sym_o_power_settings_new",color:"primary","text-color":"white"}),n("span",W,m(r.$t("MSG_CONFIRM_SHUTDOWN")),1)]),_:1}),e(C,{align:"right"},{default:o(()=>[i(e(s,{flat:"",label:r.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[d]]),i(e(s,{label:r.$t("BTN_LABEL_SHUTDOWN"),color:"primary",onClick:l[2]||(l[2]=t=>a.remoteProcedureCall("/api/system/server/shutdown"))},null,8,["label"]),[[d]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(L,{modelValue:a.confirm_restart_service,"onUpdate:modelValue":l[5]||(l[5]=t=>a.confirm_restart_service=t)},{default:o(()=>[e(_,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[e(c,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[e(E,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),n("span",j,m(r.$t("MSG_CONFIRM_RESTART_SERVICE")),1)]),_:1}),e(C,{align:"right"},{default:o(()=>[i(e(s,{flat:"",label:r.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[d]]),i(e(s,{label:r.$t("BTN_LABEL_RESTART_SERVICE"),color:"primary",onClick:l[4]||(l[4]=t=>a.remoteProcedureCall("/api/system/service/restart"))},null,8,["label"]),[[d]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(L,{modelValue:a.confirm_reload_service,"onUpdate:modelValue":l[7]||(l[7]=t=>a.confirm_reload_service=t)},{default:o(()=>[e(_,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[e(c,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[e(E,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),n("span",Y,m(r.$t("MSG_CONFIRM_RELOAD_SERVICE")),1)]),_:1}),e(C,{align:"right"},{default:o(()=>[i(e(s,{flat:"",label:r.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[d]]),i(e(s,{label:r.$t("BTN_LABEL_RELOAD_SERVICE"),color:"primary",onClick:l[6]||(l[6]=t=>a.remoteProcedureCall("/api/system/service/reload"))},null,8,["label"]),[[d]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(L,{modelValue:a.confirm_install_service,"onUpdate:modelValue":l[9]||(l[9]=t=>a.confirm_install_service=t)},{default:o(()=>[e(_,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[e(c,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[e(E,{icon:"sym_o_add_circle",color:"primary","text-color":"white"}),n("span",z,m(r.$t("MSG_CONFIRM_INSTALL_SERVICE")),1)]),_:1}),e(C,{align:"right"},{default:o(()=>[i(e(s,{flat:"",label:r.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[d]]),i(e(s,{label:r.$t("BTN_LABEL_INSTALL_SERVICE"),color:"primary",onClick:l[8]||(l[8]=t=>a.remoteProcedureCall("/api/system/service/install"))},null,8,["label"]),[[d]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(L,{modelValue:a.confirm_uninstall_service,"onUpdate:modelValue":l[11]||(l[11]=t=>a.confirm_uninstall_service=t)},{default:o(()=>[e(_,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[e(c,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[e(E,{icon:"sym_o_cancel",color:"primary","text-color":"white"}),n("span",Z,m(r.$t("MSG_CONFIRM_UNINSTALL_SERVICE")),1)]),_:1}),e(C,{align:"right"},{default:o(()=>[i(e(s,{flat:"",label:r.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[d]]),i(e(s,{label:r.$t("BTN_LABEL_UNINSTALL_SERVICE"),color:"primary",onClick:l[10]||(l[10]=t=>a.remoteProcedureCall("/api/system/service/uninstall"))},null,8,["label"]),[[d]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(c,{class:"q-gutter-sm q-px-none"},{default:o(()=>[n("div",J,m(r.$t("Host")),1),e(s,{label:r.$t("BTN_LABEL_REBOOT_HOST"),onClick:l[12]||(l[12]=t=>a.confirm_reboot=!0)},null,8,["label"]),e(s,{label:r.$t("BTN_LABEL_SHUTDOWN_HOST"),onClick:l[13]||(l[13]=t=>a.confirm_shutdown=!0)},null,8,["label"])]),_:1}),e(c,{class:"q-gutter-sm q-px-none"},{default:o(()=>[n("div",K,m(r.$t("Service (Linux only)")),1),e(s,{label:r.$t("BTN_LABEL_INSTALL_SERVICE"),onClick:l[14]||(l[14]=t=>a.confirm_install_service=!0)},null,8,["label"]),e(s,{label:r.$t("BTN_LABEL_UNINSTALL_SERVICE"),onClick:l[15]||(l[15]=t=>a.confirm_uninstall_service=!0)},null,8,["label"]),e(s,{label:r.$t("BTN_LABEL_RESTART_SERVICE"),onClick:l[16]||(l[16]=t=>a.confirm_restart_service=!0)},null,8,["label"])]),_:1})])])]),_:1}),e(_,{flat:"",class:"q-pa-md q-mt-md"},{default:o(()=>[n("div",X,m(r.$t("TITLE_MAINTAIN_GALLERY")),1),n("div",ee,[n("div",le,[n("div",ae,[e(L,{modelValue:a.confirm_delete_all,"onUpdate:modelValue":l[18]||(l[18]=t=>a.confirm_delete_all=t)},{default:o(()=>[e(_,{class:"q-pa-sm"},{default:o(()=>[e(c,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[e(E,{icon:"sym_o_delete",color:"primary","text-color":"white"}),n("span",oe,m(r.$t("MSG_CONFIRM_DELETE_ALL_MEDIA_FILES")),1)]),_:1}),e(C,{align:"right"},{default:o(()=>[i(e(s,{flat:"",label:"Cancel",color:"primary"},null,512),[[d]]),i(e(s,{label:"Delete all",color:"primary",onClick:l[17]||(l[17]=t=>a.remoteProcedureCall("/api/mediacollection/delete_all"))},null,512),[[d]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(L,{modelValue:a.confirm_clear_recycle_directory,"onUpdate:modelValue":l[20]||(l[20]=t=>a.confirm_clear_recycle_directory=t)},{default:o(()=>[e(_,{class:"q-pa-sm"},{default:o(()=>[e(c,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[e(E,{icon:"sym_o_delete",color:"primary","text-color":"white"}),n("span",te,m(r.$t("Are you sure to clear the recycle directory?")),1)]),_:1}),e(C,{align:"right"},{default:o(()=>[i(e(s,{flat:"",label:"Cancel",color:"primary"},null,512),[[d]]),i(e(s,{label:"Yes, clear!",color:"primary",onClick:l[19]||(l[19]=t=>a.remoteProcedureCall("/api/admin/files/clearrecycledir"))},null,512),[[d]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(s,{label:r.$t("BTN_LABEL_DELETE_ALL_MEDIA_FILES"),onClick:l[21]||(l[21]=t=>a.confirm_delete_all=!0)},null,8,["label"]),e(s,{label:r.$t("Clear recycle directory"),onClick:l[22]||(l[22]=t=>a.confirm_clear_recycle_directory=!0)},null,8,["label"])])])])]),_:1}),e(_,{flat:"",class:"q-pa-md q-mt-md"},{default:o(()=>[n("div",re,m(r.$t("TITLE_LOCAL_UI_SETTINGS")),1),n("div",se,[e(a.LanguageSwitcher),e(s,{href:"https://github.com/photobooth-app/photobooth-app/blob/main/CONTRIBUTING.md#help-translate-the-app",target:"_blank"},{default:o(()=>[q(m(r.$t("Help to translate")),1)]),_:1})])]),_:1})]),_:1})}const Ce=S(x,[["render",ne],["__file","AdminDashboardPage.vue"]]);export{Ce as default};
