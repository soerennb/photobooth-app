import{_ as v,f as g,h as T,q as l,p as o,Q as $,j as N,K as A,r as _,m as S,n as B,B as r,D as m,X as p,Y as d,ab as u,af as f,ag as c,z as n,I as s,C as I,ah as i}from"./index-BMVz2vNn.js";import{Q as V}from"./QPage-SNchBjuI.js";import{Q as R}from"./QSelect-DyK8ODLl.js";import{u as q,i as w,e as O,d as h}from"./i18n-DRfRE0U0.js";import"./use-key-composition-CWW3ewP7.js";import"./use-id-DjXJFnL_.js";import"./QItem-BPusK3r4.js";import"./QMenu-CjojQn6x.js";import"./rtl-DFPa-2ov.js";import"./format-CJebrXOQ.js";const k={setup(){const{locale:e,availableLocales:a}=q({useScope:"global"}),b=new Intl.DisplayNames(["en"],{type:"language",languageDisplay:"standard"}),C=a.map(function(L){return{value:L,label:L!=w?b.of(L):"Edit translation (Crowdin)"}}).sort((L,y)=>L.label.localeCompare(y.label));return{locale:e,localeOptions:C}},methods:{switchLocale(e){this.locale=e,e==w?(console.log("enable crowdin in context translation"),O()):(console.log("disable crowdin in context translation"),h()),localStorage.setItem("locale",e),console.log("Stored locale: ",e)}}},D={class:"row"};function M(e,a,b,C,L,y){return g(),T("div",D,[l(R,{modelValue:C.locale,"onUpdate:modelValue":[a[0]||(a[0]=E=>C.locale=E),a[1]||(a[1]=E=>y.switchLocale(E))],options:C.localeOptions,label:"Language","emit-value":"","map-options":""},{prepend:o(()=>[l($,{name:"sym_o_language"})]),_:1},8,["modelValue","options"])])}const U=v(k,[["render",M],["__file","LanguageSwitcher.vue"]]),P=N({name:"MainLayout",components:{LanguageSwitcher:U},setup(){return{remoteProcedureCall:A,confirm_reboot:_(!1),confirm_shutdown:_(!1),confirm_restart_service:_(!1),confirm_reload_service:_(!1),confirm_install_service:_(!1),confirm_uninstall_service:_(!1),confirm_delete_all:_(!1),confirm_clear_recycle_directory:_(!1)}}}),Q={class:"text-h5"},G={class:"q-ma-none"},F={class:"q-ml-sm"},H={class:"q-ml-sm"},W={class:"q-ml-sm"},Y={class:"q-ml-sm"},j={class:"q-ml-sm"},z={class:"q-ml-sm"},K={class:"text-caption"},X={class:"text-caption"},J={class:"text-h5"},Z={class:"row"},x={class:"q-ma-sm"},ee={class:"q-gutter-sm"},le={class:"q-ml-sm"},ae={class:"q-ml-sm"},oe={class:"text-h5"},te={class:"row q-gutter-sm"};function se(e,a,b,C,L,y){const E=S("language-switcher");return g(),B(V,{id:"admin-page",padding:""},{default:o(()=>[l(d,{flat:"",class:"q-pa-md"},{default:o(()=>[r("div",Q,m(e.$t("TITLE_SERVER_CONTROL")),1),r("div",G,[r("div",null,[l(p,{modelValue:e.confirm_reboot,"onUpdate:modelValue":a[1]||(a[1]=t=>e.confirm_reboot=t)},{default:o(()=>[l(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[l(u,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[l(f,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),r("span",F,m(e.$t("MSG_CONFIRM_REBOOT")),1)]),_:1}),l(c,{align:"right"},{default:o(()=>[n(l(s,{flat:"",label:e.$t("BTN_LABEL_CANCEL"),color:"primary"},null,8,["label"]),[[i]]),n(l(s,{label:e.$t("BTN_LABEL_REBOOT"),color:"primary",onClick:a[0]||(a[0]=t=>e.remoteProcedureCall("/api/system/server/reboot"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:e.confirm_shutdown,"onUpdate:modelValue":a[3]||(a[3]=t=>e.confirm_shutdown=t)},{default:o(()=>[l(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[l(u,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[l(f,{icon:"sym_o_power_settings_new",color:"primary","text-color":"white"}),r("span",H,m(e.$t("MSG_CONFIRM_SHUTDOWN")),1)]),_:1}),l(c,{align:"right"},{default:o(()=>[n(l(s,{flat:"",label:e.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),n(l(s,{label:e.$t("BTN_LABEL_SHUTDOWN"),color:"primary",onClick:a[2]||(a[2]=t=>e.remoteProcedureCall("/api/system/server/shutdown"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:e.confirm_restart_service,"onUpdate:modelValue":a[5]||(a[5]=t=>e.confirm_restart_service=t)},{default:o(()=>[l(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[l(u,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[l(f,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),r("span",W,m(e.$t("MSG_CONFIRM_RESTART_SERVICE")),1)]),_:1}),l(c,{align:"right"},{default:o(()=>[n(l(s,{flat:"",label:e.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),n(l(s,{label:e.$t("BTN_LABEL_RESTART_SERVICE"),color:"primary",onClick:a[4]||(a[4]=t=>e.remoteProcedureCall("/api/system/service/restart"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:e.confirm_reload_service,"onUpdate:modelValue":a[7]||(a[7]=t=>e.confirm_reload_service=t)},{default:o(()=>[l(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[l(u,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[l(f,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),r("span",Y,m(e.$t("MSG_CONFIRM_RELOAD_SERVICE")),1)]),_:1}),l(c,{align:"right"},{default:o(()=>[n(l(s,{flat:"",label:e.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),n(l(s,{label:e.$t("BTN_LABEL_RELOAD_SERVICE"),color:"primary",onClick:a[6]||(a[6]=t=>e.remoteProcedureCall("/api/system/service/reload"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:e.confirm_install_service,"onUpdate:modelValue":a[9]||(a[9]=t=>e.confirm_install_service=t)},{default:o(()=>[l(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[l(u,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[l(f,{icon:"sym_o_add_circle",color:"primary","text-color":"white"}),r("span",j,m(e.$t("MSG_CONFIRM_INSTALL_SERVICE")),1)]),_:1}),l(c,{align:"right"},{default:o(()=>[n(l(s,{flat:"",label:e.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),n(l(s,{label:e.$t("BTN_LABEL_INSTALL_SERVICE"),color:"primary",onClick:a[8]||(a[8]=t=>e.remoteProcedureCall("/api/system/service/install"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:e.confirm_uninstall_service,"onUpdate:modelValue":a[11]||(a[11]=t=>e.confirm_uninstall_service=t)},{default:o(()=>[l(d,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:o(()=>[l(u,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[l(f,{icon:"sym_o_cancel",color:"primary","text-color":"white"}),r("span",z,m(e.$t("MSG_CONFIRM_UNINSTALL_SERVICE")),1)]),_:1}),l(c,{align:"right"},{default:o(()=>[n(l(s,{flat:"",label:e.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[i]]),n(l(s,{label:e.$t("BTN_LABEL_UNINSTALL_SERVICE"),color:"primary",onClick:a[10]||(a[10]=t=>e.remoteProcedureCall("/api/system/service/uninstall"))},null,8,["label"]),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(u,{class:"q-gutter-sm q-px-none"},{default:o(()=>[r("div",K,m(e.$t("Host")),1),l(s,{label:e.$t("BTN_LABEL_REBOOT_HOST"),onClick:a[12]||(a[12]=t=>e.confirm_reboot=!0)},null,8,["label"]),l(s,{label:e.$t("BTN_LABEL_SHUTDOWN_HOST"),onClick:a[13]||(a[13]=t=>e.confirm_shutdown=!0)},null,8,["label"])]),_:1}),l(u,{class:"q-gutter-sm q-px-none"},{default:o(()=>[r("div",X,m(e.$t("Service (Linux only)")),1),l(s,{label:e.$t("BTN_LABEL_INSTALL_SERVICE"),onClick:a[14]||(a[14]=t=>e.confirm_install_service=!0)},null,8,["label"]),l(s,{label:e.$t("BTN_LABEL_UNINSTALL_SERVICE"),onClick:a[15]||(a[15]=t=>e.confirm_uninstall_service=!0)},null,8,["label"]),l(s,{label:e.$t("BTN_LABEL_RESTART_SERVICE"),onClick:a[16]||(a[16]=t=>e.confirm_restart_service=!0)},null,8,["label"])]),_:1})])])]),_:1}),l(d,{flat:"",class:"q-pa-md q-mt-md"},{default:o(()=>[r("div",J,m(e.$t("TITLE_MAINTAIN_GALLERY")),1),r("div",Z,[r("div",x,[r("div",ee,[l(p,{modelValue:e.confirm_delete_all,"onUpdate:modelValue":a[18]||(a[18]=t=>e.confirm_delete_all=t)},{default:o(()=>[l(d,{class:"q-pa-sm"},{default:o(()=>[l(u,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[l(f,{icon:"sym_o_delete",color:"primary","text-color":"white"}),r("span",le,m(e.$t("MSG_CONFIRM_DELETE_ALL_MEDIA_FILES")),1)]),_:1}),l(c,{align:"right"},{default:o(()=>[n(l(s,{flat:"",label:"Cancel",color:"primary"},null,512),[[i]]),n(l(s,{label:"Delete all",color:"primary",onClick:a[17]||(a[17]=t=>e.remoteProcedureCall("/api/mediacollection/delete_all"))},null,512),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(p,{modelValue:e.confirm_clear_recycle_directory,"onUpdate:modelValue":a[20]||(a[20]=t=>e.confirm_clear_recycle_directory=t)},{default:o(()=>[l(d,{class:"q-pa-sm"},{default:o(()=>[l(u,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:o(()=>[l(f,{icon:"sym_o_delete",color:"primary","text-color":"white"}),r("span",ae,m(e.$t("Are you sure to clear the recycle directory?")),1)]),_:1}),l(c,{align:"right"},{default:o(()=>[n(l(s,{flat:"",label:"Cancel",color:"primary"},null,512),[[i]]),n(l(s,{label:"Yes, clear!",color:"primary",onClick:a[19]||(a[19]=t=>e.remoteProcedureCall("/api/admin/files/clearrecycledir"))},null,512),[[i]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(s,{label:e.$t("BTN_LABEL_DELETE_ALL_MEDIA_FILES"),onClick:a[21]||(a[21]=t=>e.confirm_delete_all=!0)},null,8,["label"]),l(s,{label:e.$t("Clear recycle directory"),onClick:a[22]||(a[22]=t=>e.confirm_clear_recycle_directory=!0)},null,8,["label"])])])])]),_:1}),l(d,{flat:"",class:"q-pa-md q-mt-md"},{default:o(()=>[r("div",oe,m(e.$t("TITLE_LOCAL_UI_SETTINGS")),1),r("div",te,[l(E),l(s,{href:"https://github.com/photobooth-app/photobooth-app/blob/main/CONTRIBUTING.md#help-translate-the-app",target:"_blank"},{default:o(()=>[I(m(e.$t("Help to translate")),1)]),_:1})])]),_:1})]),_:1})}const Le=v(P,[["render",se],["__file","AdminDashboardPage.vue"]]);export{Le as default};
