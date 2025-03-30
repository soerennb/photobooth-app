import{Q as E,c as o,a as m,b as f}from"./position-engine-C6J-XFij.js";import{d as tl,au as al,J as ol,n as g,f as $,w as e,x as w,g as l,t as V,V as y,B as q,y as u,z as t,Q as i,C as s,S as b,A as S,F as N,W as v,a1 as L,s as p,r as h,a0 as k,i as _,G as nl,X as c}from"./index-BzVvpN4o.js";import{Q as R}from"./QTooltip-B73VvuTj.js";import{Q as O}from"./QSeparator-Cf_uwABQ.js";import{Q}from"./QLinearProgress-Cb68srBt.js";import{Q as ul}from"./QPage-D5F7xgSS.js";import{getLanguageName as rl,preferredLanguages as sl,enableInContextTranslation as il}from"./i18n-DlHk4jpY.js";import{u as dl}from"./vue-i18n-CTR_TNDa.js";import"./selection-HJl5A4JM.js";const fl={class:"q-pa-none q-mt-none row col-xs-12 col-sm-4 col-md-3 col-lg-3"},ml={class:"q-ml-sm"},_l={class:"q-ml-sm"},pl={class:"q-ml-sm"},cl={class:"q-ml-sm"},yl={class:"q-ml-sm"},bl={class:"q-ml-sm"},$l={class:"q-ml-sm"},vl={class:"q-ml-sm"},Cl={class:"q-ml-sm"},gl={class:"q-ml-sm"},Al=tl({__name:"AdminDashboardPage",setup(wl){const{locale:P}=dl({useScope:"global"}),d=al(),J=ol(),A=g(""),T=g(!1),I=g(!1),M=g(!1),U=g(!1),D=g(!1),F=g(!1),G=g(!1),z=g(!1),j=g(!1),H=g(!1),X=new Date("2025-03-30T10:10:59.267Z").toLocaleString(),Y=a=>{A.value=a,T.value=!0},W=a=>{A.value=a,I.value=!0},Z=()=>{h("/api/admin/information/cntr/reset/"+A.value),I.value=!1},K=()=>{h("/api/admin/share/cntr/reset/"+A.value),T.value=!1};return(a,n)=>(_(),$(ul,{id:"admin-page",padding:""},{default:e(()=>[w("div",fl,[l(b,{flat:"",class:"q-mr-md q-mb-md"},{default:e(()=>[l(y,null,{default:e(()=>[l(E,null,{default:e(()=>[l(o,{header:""},{default:e(()=>[u(t(a.$t("TITLE_SERVER_CONTROL")),1)]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("Host")),1)]),_:1}),l(o,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("Reboot Host"),onClick:n[0]||(n[0]=r=>M.value=!0)},null,8,["label"])]),_:1}),l(o,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("Shutdown Host"),onClick:n[1]||(n[1]=r=>U.value=!0)},null,8,["label"])]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("Service")),1)]),_:1}),l(o,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("Reload services"),onClick:n[2]||(n[2]=r=>D.value=!0)},null,8,["label"])]),_:1})]),_:1})]),_:1}),s(d).information.platform_system=="Linux"?(_(),$(m,{key:0},{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("Systemctl (Linux only)")),1)]),_:1}),l(o,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("install systemctl service"),onClick:n[3]||(n[3]=r=>G.value=!0)},null,8,["label"])]),_:1}),l(o,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("uninstall systemctl service"),onClick:n[4]||(n[4]=r=>z.value=!0)},null,8,["label"])]),_:1}),l(o,null,{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("restart systemctl service"),onClick:n[5]||(n[5]=r=>F.value=!0)},null,8,["label"])]),_:1})]),_:1})]),_:1})):q("",!0)]),_:1})]),_:1})]),_:1}),l(b,{flat:"",class:"q-mr-md q-mb-md column"},{default:e(()=>[l(y,{style:{"flex-grow":"1"}},{default:e(()=>[l(E,null,{default:e(()=>[l(o,{header:""},{default:e(()=>[u(t(a.$t("Language")),1)]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("Selected language")),1)]),_:1}),l(o,null,{default:e(()=>[u(t(s(rl)(s(P)))+", "+t(s(P)),1)]),_:1})]),_:1}),l(f,{side:""},{default:e(()=>[l(i,{flat:"",color:"primary",round:"",icon:"sym_o_translate",href:"https://github.com/photobooth-app/photobooth-app/blob/main/CONTRIBUTING.md#help-translate-the-app",target:"_blank"},{default:e(()=>[l(R,{class:""},{default:e(()=>[u(t(a.$t("Learn how to help translating the app")),1)]),_:1})]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("Browsers preferred languages")),1)]),_:1}),(_(!0),V(N,null,S(s(sl),(r,C)=>(_(),$(o,{key:r,class:nl({"text-italic":C==0})},{default:e(()=>[u(t(r),1)]),_:2},1032,["class"]))),128))]),_:1}),l(f,{side:""},{default:e(()=>[l(i,{flat:"",color:"primary",round:"",icon:"sym_o_open_in_new",href:"https://github.com/photobooth-app/photobooth-frontend/tree/main/src/i18n/locales",target:"_blank"},{default:e(()=>[l(R,{class:""},{default:e(()=>[u(t(a.$t("Check which languages are supported by the app.")),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(O),l(v,{align:"right",vertical:""},{default:e(()=>[l(i,{flat:"",color:"primary",onClick:n[6]||(n[6]=r=>s(il)())},{default:e(()=>[u(t(a.$t("Translate in context using Crowdin")),1)]),_:1})]),_:1})]),_:1}),l(b,{flat:"",class:"q-mr-md q-mb-md"},{default:e(()=>[l(y,null,{default:e(()=>[l(E,null,{default:e(()=>[l(o,{header:""},{default:e(()=>[u(t(a.$t("system information")),1)]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("data directory")),1)]),_:1}),l(o,null,{default:e(()=>[u(t(s(d).information.data_directory),1)]),_:1})]),_:1}),l(f,{side:""},{default:e(()=>[l(i,{flat:"",round:"",color:"primary",icon:"sym_o_folder_shared",to:"/admin/files"})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("app version")),1)]),_:1}),l(o,null,{default:e(()=>[u(t(s(d).information.version),1)]),_:1})]),_:1}),l(f,{side:""},{default:e(()=>[l(i,{flat:"",round:"",color:"primary",icon:"sym_o_upgrade",href:"https://pypi.org/project/photobooth-app/",target:"_blank"})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("Frontend build date")),1)]),_:1}),l(o,null,{default:e(()=>[u(t(s(X)),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("cpu load")),1)]),_:1}),l(o,null,{default:e(()=>[l(Q,{size:"lg",value:s(d).information.cpu_percent/100},null,8,["value"])]),_:1}),l(o,null,{default:e(()=>[u(t(s(d).information.cpu_percent)+"% ",1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("disk space")),1)]),_:1}),l(o,null,{default:e(()=>[l(Q,{size:"lg",value:s(d).information.disk.used/s(d).information.disk.total},null,8,["value"])]),_:1}),l(o,null,{default:e(()=>[u(t((s(d).information.disk.free/1024**3).toFixed(1))+t(a.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("memory")),1)]),_:1}),l(o,null,{default:e(()=>[l(Q,{size:"lg",value:s(d).information.memory.used/s(d).information.memory.total},null,8,["value"])]),_:1}),l(o,null,{default:e(()=>[u(t((s(d).information.memory.available/1024**3).toFixed(1))+t(a.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),s(d).information.battery_percent!==null?(_(),$(m,{key:0},{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("Battery")),1)]),_:1}),l(o,null,{default:e(()=>[l(Q,{size:"lg",value:s(d).information.battery_percent/100},null,8,["value"])]),_:1}),l(o,null,{default:e(()=>[u(t(s(d).information.battery_percent.toFixed(0))+"% ",1)]),_:1})]),_:1})]),_:1})):q("",!0),Object.keys(s(d).information.temperatures).length>0?(_(),$(m,{key:1},{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("System Temperatures")),1)]),_:1}),(_(!0),V(N,null,S(s(d).information.temperatures,(r,C,B)=>(_(),$(m,{key:B},{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(C),1)]),_:2},1024),l(o,null,{default:e(()=>[u(t(r),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):q("",!0)]),_:1})]),_:1})]),_:1}),l(b,{flat:"",class:"q-mr-md q-mb-md"},{default:e(()=>[l(y,null,{default:e(()=>[l(E,null,{default:e(()=>[l(o,{header:""},{default:e(()=>[u(t(a.$t("platform")),1)]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("hostname")),1)]),_:1}),l(o,null,{default:e(()=>[u(t(s(d).information.platform_node),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("machine")),1)]),_:1}),l(o,null,{default:e(()=>[u(t(a.$t("{platform_machine}, {cpu_count} cores",{platform_machine:s(d).information.platform_machine,cpu_count:s(d).information.platform_cpu_count})),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("platform system")),1)]),_:1}),l(o,null,{default:e(()=>[u(t(s(d).information.platform_system)+" "+t(s(d).information.platform_release),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("computer model")),1)]),_:1}),l(o,null,{default:e(()=>[u(t(s(d).information.model),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("python executable")),1)]),_:1}),l(o,null,{default:e(()=>[u(t(s(d).information.python_executable),1)]),_:1})]),_:1})]),_:1}),l(m,null,{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(a.$t("python version")),1)]),_:1}),l(o,null,{default:e(()=>[u(t(s(d).information.platform_python_version),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),l(b,{flat:"",class:"q-mr-md q-mb-md column"},{default:e(()=>[l(y,{style:{"flex-grow":"1"}},{default:e(()=>[l(E,null,{default:e(()=>[l(o,{header:""},{default:e(()=>[u(t(a.$t("Media Database")),1)]),_:1}),Object.keys(s(d).information.mediacollection).length==0?(_(),$(m,{key:0},{default:e(()=>[u(t(a.$t("Currently there is no item to display.")),1)]),_:1})):q("",!0),(_(!0),V(N,null,S(s(d).information.mediacollection,(r,C)=>(_(),$(m,{key:C},{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(C),1)]),_:2},1024),l(o,null,{default:e(()=>[l(o,null,{default:e(()=>[u(t(r),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l(O),l(v,{align:"right",vertical:""},{default:e(()=>[l(i,{flat:"",color:"primary",label:a.$t("BTN_LABEL_DELETE_ALL_MEDIA_FILES"),onClick:n[7]||(n[7]=r=>j.value=!0)},null,8,["label"]),l(i,{flat:"",color:"primary",label:a.$t("Clear recycle directory"),onClick:n[8]||(n[8]=r=>H.value=!0)},null,8,["label"])]),_:1})]),_:1}),(_(!0),V(N,null,S(s(d).information.backends,(r,C,B)=>(_(),$(b,{key:B,flat:"",class:"q-mr-md q-mb-md"},{default:e(()=>[l(y,null,{default:e(()=>[l(E,null,{default:e(()=>[l(o,{header:""},{default:e(()=>[u(t(a.$t("Backend Index: "))+t(B),1)]),_:2},1024),(_(!0),V(N,null,S(r,(x,ll,el)=>(_(),$(m,{key:el},{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(ll),1)]),_:2},1024),l(o,null,{default:e(()=>[u(t(x),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),l(b,{flat:"",class:"q-mr-md q-mb-md column"},{default:e(()=>[l(y,{style:{"flex-grow":"1"}},{default:e(()=>[l(E,null,{default:e(()=>[l(o,{header:""},{default:e(()=>[u(t(a.$t("Stats counter")),1)]),_:1}),Object.keys(s(d).information.stats_counter).length==0?(_(),$(m,{key:0},{default:e(()=>[u(t(a.$t("Currently there is no item to display.")),1)]),_:1})):q("",!0),(_(!0),V(N,null,S(s(d).information.stats_counter,(r,C)=>(_(),$(m,{key:C},{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(r.action),1)]),_:2},1024),l(o,null,{default:e(()=>[l(R,null,{default:e(()=>[u(" last used at: "+t(r.last_used_at),1)]),_:2},1024),l(o,null,{default:e(()=>[u(t(r.count),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),l(f,{side:""},{default:e(()=>[l(i,{flat:"",color:"primary",icon:"sym_o_history",onClick:B=>W(r.action)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l(O),l(v,{align:"right"},{default:e(()=>[l(i,{flat:"",color:"primary",label:"reset",onClick:n[9]||(n[9]=r=>W(""))})]),_:1})]),_:1}),l(b,{flat:"",class:"q-mr-md q-mb-md column"},{default:e(()=>[l(y,{style:{"flex-grow":"1"}},{default:e(()=>[l(E,null,{default:e(()=>[l(o,{header:""},{default:e(()=>[u(t(a.$t("Limits counter")),1)]),_:1}),Object.keys(s(d).information.limits_counter).length==0?(_(),$(m,{key:0},{default:e(()=>[u(t(a.$t("Currently there is no item to display.")),1)]),_:1})):q("",!0),(_(!0),V(N,null,S(s(d).information.limits_counter,(r,C)=>(_(),$(m,{key:C},{default:e(()=>[l(f,null,{default:e(()=>[l(o,{caption:""},{default:e(()=>[u(t(r.action),1)]),_:2},1024),l(o,null,{default:e(()=>[l(R,null,{default:e(()=>[u(" last used at: "+t(r.last_used_at),1)]),_:2},1024),l(o,null,{default:e(()=>[u(t(r.count),1)]),_:2},1024)]),_:2},1024)]),_:2},1024),l(f,{side:""},{default:e(()=>[l(i,{flat:"",color:"primary",icon:"sym_o_history",onClick:B=>Y(r.action)},null,8,["onClick"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1}),l(O),l(v,{align:"right"},{default:e(()=>[l(i,{flat:"",color:"primary",label:"reset",onClick:n[10]||(n[10]=r=>Y(""))})]),_:1})]),_:1})]),l(k,{modelValue:M.value,"onUpdate:modelValue":n[12]||(n[12]=r=>M.value=r)},{default:e(()=>[l(b,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(y,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(L,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),w("span",ml,t(a.$t("MSG_CONFIRM_REBOOT")),1)]),_:1}),l(v,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL"),color:"primary"},null,8,["label"]),[[c]]),p(l(i,{label:a.$t("BTN_LABEL_REBOOT"),color:"primary",onClick:n[11]||(n[11]=r=>s(h)("/api/system/host/reboot"))},null,8,["label"]),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(k,{modelValue:U.value,"onUpdate:modelValue":n[14]||(n[14]=r=>U.value=r)},{default:e(()=>[l(b,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(y,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(L,{icon:"sym_o_power_settings_new",color:"primary","text-color":"white"}),w("span",_l,t(a.$t("MSG_CONFIRM_SHUTDOWN")),1)]),_:1}),l(v,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[c]]),p(l(i,{label:a.$t("BTN_LABEL_SHUTDOWN"),color:"primary",onClick:n[13]||(n[13]=r=>s(h)("/api/system/host/shutdown"))},null,8,["label"]),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(k,{modelValue:D.value,"onUpdate:modelValue":n[16]||(n[16]=r=>D.value=r)},{default:e(()=>[l(b,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(y,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(L,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),w("span",pl,t(a.$t("You sure to reload the services?")),1)]),_:1}),l(v,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[c]]),p(l(i,{label:a.$t("BTN_LABEL_RELOAD_SERVICE"),color:"primary",onClick:n[15]||(n[15]=r=>s(h)("/api/system/service/reload"))},null,8,["label"]),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(k,{modelValue:F.value,"onUpdate:modelValue":n[18]||(n[18]=r=>F.value=r)},{default:e(()=>[l(b,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(y,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(L,{icon:"sym_o_restart_alt",color:"primary","text-color":"white"}),w("span",cl,t(a.$t("MSG_CONFIRM_RESTART_SERVICE")),1)]),_:1}),l(v,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[c]]),p(l(i,{label:a.$t("BTN_LABEL_RESTART_SERVICE"),color:"primary",onClick:n[17]||(n[17]=r=>s(h)("/api/system/systemctl/restart"))},null,8,["label"]),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(k,{modelValue:G.value,"onUpdate:modelValue":n[20]||(n[20]=r=>G.value=r)},{default:e(()=>[l(b,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(y,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(L,{icon:"sym_o_add_circle",color:"primary","text-color":"white"}),w("span",yl,t(a.$t("MSG_CONFIRM_INSTALL_SERVICE")),1)]),_:1}),l(v,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[c]]),p(l(i,{label:a.$t("BTN_LABEL_INSTALL_SERVICE"),color:"primary",onClick:n[19]||(n[19]=r=>s(h)("/api/system/systemctl/install"))},null,8,["label"]),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(k,{modelValue:z.value,"onUpdate:modelValue":n[22]||(n[22]=r=>z.value=r)},{default:e(()=>[l(b,{class:"q-pa-sm",style:{"min-width":"350px"}},{default:e(()=>[l(y,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(L,{icon:"sym_o_cancel",color:"primary","text-color":"white"}),w("span",bl,t(a.$t("MSG_CONFIRM_UNINSTALL_SERVICE")),1)]),_:1}),l(v,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:a.$t("BTN_LABEL_CANCEL")},null,8,["label"]),[[c]]),p(l(i,{label:a.$t("BTN_LABEL_UNINSTALL_SERVICE"),color:"primary",onClick:n[21]||(n[21]=r=>s(h)("/api/system/systemctl/uninstall"))},null,8,["label"]),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(k,{modelValue:I.value,"onUpdate:modelValue":n[24]||(n[24]=r=>I.value=r)},{default:e(()=>[l(b,{class:"q-pa-sm"},{default:e(()=>[l(y,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(L,{icon:"sym_o_history",color:"primary","text-color":"white"}),w("span",$l,t(a.$t("Are you sure you want to reset the usage statistics counter?")),1)]),_:1}),l(v,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:"Cancel",color:"primary"},null,512),[[c]]),p(l(i,{label:"Yes, reset!",color:"primary",onClick:n[23]||(n[23]=r=>Z())},null,512),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(k,{modelValue:T.value,"onUpdate:modelValue":n[26]||(n[26]=r=>T.value=r)},{default:e(()=>[l(b,{class:"q-pa-sm"},{default:e(()=>[l(y,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(L,{icon:"sym_o_history",color:"primary","text-color":"white"}),w("span",vl,t(a.$t("Are you sure you want to reset the share limits counter?")),1)]),_:1}),l(v,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:"Cancel",color:"primary"},null,512),[[c]]),p(l(i,{label:"Yes, reset!",color:"primary",onClick:n[25]||(n[25]=r=>K())},null,512),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(k,{modelValue:j.value,"onUpdate:modelValue":n[28]||(n[28]=r=>j.value=r)},{default:e(()=>[l(b,{class:"q-pa-sm"},{default:e(()=>[l(y,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(L,{icon:"sym_o_delete",color:"primary","text-color":"white"}),w("span",Cl,t(a.$t("MSG_CONFIRM_DELETE_ALL_MEDIA_FILES")),1)]),_:1}),l(v,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:"Cancel",color:"primary"},null,512),[[c]]),p(l(i,{label:"Delete all",color:"primary",onClick:n[27]||(n[27]=r=>s(J).deleteAllItems())},null,512),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"]),l(k,{modelValue:H.value,"onUpdate:modelValue":n[30]||(n[30]=r=>H.value=r)},{default:e(()=>[l(b,{class:"q-pa-sm"},{default:e(()=>[l(y,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:e(()=>[l(L,{icon:"sym_o_delete",color:"primary","text-color":"white"}),w("span",gl,t(a.$t("Are you sure to clear the recycle directory?")),1)]),_:1}),l(v,{align:"right"},{default:e(()=>[p(l(i,{flat:"",label:"Cancel",color:"primary"},null,512),[[c]]),p(l(i,{label:"Yes, clear!",color:"primary",onClick:n[29]||(n[29]=r=>s(h)("/api/admin/files/clearrecycledir"))},null,512),[[c]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1}))}});export{Al as default};
