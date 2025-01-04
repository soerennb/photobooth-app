import{b as o,Q as u,a as n}from"./QItem-mk3X0vol.js";import{Q as g}from"./QLinearProgress-BuEjrMbA.js";import{Q as v}from"./QList-BnvJdTPM.js";import{_ as P,j,J as m,K as z,r as S,L as w,f as s,p as f,q as t,C as A,s as e,a8 as c,D as r,E as a,t as q,h as y,G as h,F as $,Y as k,ae as V,ad as D,A as L,X as I,af as F}from"./index-BNUf-CLs.js";import{Q as N}from"./QSeparator-DJQf4k11.js";import{Q as G}from"./QPage-48wgfSVz.js";const R=j({name:"MainLayout",components:{QBtn:m},setup(){const l=z(),d=S(!1),B=S("");return{store:l,remoteProcedureCall:w,confirm_reset_counter:d,selected_field:B}},methods:{displayResetConfirm(l){this.selected_field=l,this.confirm_reset_counter=!0},confirmAction(){w("/api/admin/information/sttscntr/reset/"+this.selected_field),this.confirm_reset_counter=!1}}}),E={class:"row col-xs-12 col-sm-4 col-md-3 col-lg-3"},M={class:"q-ml-sm"};function T(l,d,B,Y,J,K){return s(),f(G,{id:"status-page",padding:""},{default:t(()=>[A("div",E,[e(k,{flat:"",class:"q-mr-md q-mb-md"},{default:t(()=>[e(c,null,{default:t(()=>[e(v,{separator:""},{default:t(()=>[e(o,{header:""},{default:t(()=>[r(a(l.$t("system information")),1)]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("data directory")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.data_directory),1)]),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(m,{flat:"",round:"",color:"primary",icon:"sym_o_folder_shared",to:"/admin/files"})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("app version")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.version),1)]),_:1})]),_:1}),e(n,{side:""},{default:t(()=>[e(m,{flat:"",round:"",color:"primary",icon:"sym_o_upgrade",href:"https://pypi.org/project/photobooth-app/",target:"_blank"})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("cpu load")),1)]),_:1}),e(o,null,{default:t(()=>[e(g,{size:"lg",value:l.store.information.cpu1_5_15[0]/100},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("disk space")),1)]),_:1}),e(o,null,{default:t(()=>[e(g,{size:"lg",value:l.store.information.disk.used/l.store.information.disk.total},null,8,["value"])]),_:1}),e(o,null,{default:t(()=>[r(a((l.store.information.disk.free/1024**3).toFixed(1))+a(l.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("memory")),1)]),_:1}),e(o,null,{default:t(()=>[e(g,{size:"lg",value:l.store.information.memory.used/l.store.information.memory.total},null,8,["value"])]),_:1}),e(o,null,{default:t(()=>[r(a((l.store.information.memory.available/1024**3).toFixed(1))+a(l.$t("GB available")),1)]),_:1})]),_:1})]),_:1}),l.store.information.battery_percent!==null?(s(),f(u,{key:0},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("Battery")),1)]),_:1}),e(o,null,{default:t(()=>[e(g,{size:"lg",value:l.store.information.battery_percent/100},null,8,["value"])]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.battery_percent.toFixed(0))+"% ",1)]),_:1})]),_:1})]),_:1})):q("",!0),Object.keys(l.store.information.temperatures).length>0?(s(),f(u,{key:1},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("System Temperatures")),1)]),_:1}),(s(!0),y($,null,h(l.store.information.temperatures,(i,p,_)=>(s(),f(u,{key:_},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(p),1)]),_:2},1024),e(o,null,{default:t(()=>[r(a(i),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})):q("",!0)]),_:1})]),_:1})]),_:1}),e(k,{flat:"",class:"q-mr-md q-mb-md"},{default:t(()=>[e(c,null,{default:t(()=>[e(v,{separator:""},{default:t(()=>[e(o,{header:""},{default:t(()=>[r(a(l.$t("platform")),1)]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("hostname")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.platform_node),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("machine")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.$t("{platform_machine}, {cpu_count} cores",{platform_machine:l.store.information.platform_machine,cpu_count:l.store.information.platform_cpu_count})),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("platform system")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.platform_system)+" "+a(l.store.information.platform_release),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("computer model")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.model),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("python executable")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.python_executable),1)]),_:1})]),_:1})]),_:1}),e(u,null,{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(l.$t("python version")),1)]),_:1}),e(o,null,{default:t(()=>[r(a(l.store.information.platform_python_version),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),(s(!0),y($,null,h(l.store.information.backends,(i,p,_)=>(s(),f(k,{key:_,flat:"",class:"q-mr-md q-mb-md"},{default:t(()=>[e(c,null,{default:t(()=>[e(v,{separator:""},{default:t(()=>[e(o,{header:""},{default:t(()=>[r(a(l.$t("Backend Index: "))+a(_),1)]),_:2},1024),(s(!0),y($,null,h(i,(b,Q,C)=>(s(),f(u,{key:C},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(Q),1)]),_:2},1024),e(o,null,{default:t(()=>[r(a(b),1)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128)),e(k,{flat:"",class:"q-mr-md q-mb-md"},{default:t(()=>[e(c,null,{default:t(()=>[e(v,{separator:""},{default:t(()=>[e(o,{header:""},{default:t(()=>[r(a(l.$t("Stats counter")),1)]),_:1}),(s(!0),y($,null,h(l.store.information.stats_counter,(i,p,_)=>(s(),f(u,{key:_},{default:t(()=>[e(n,null,{default:t(()=>[e(o,{caption:""},{default:t(()=>[r(a(p),1)]),_:2},1024),i&&typeof i=="object"?(s(),f(o,{key:0},{default:t(()=>[(s(!0),y($,null,h(i,(b,Q,C)=>(s(),f(o,{key:C},{default:t(()=>[r(a(Q)+": "+a(b),1)]),_:2},1024))),128))]),_:2},1024)):(s(),f(o,{key:1},{default:t(()=>[r(a(i),1)]),_:2},1024))]),_:2},1024),["last_reset"].includes(p)?q("",!0):(s(),f(n,{key:0,side:""},{default:t(()=>[e(m,{flat:"",color:"primary",icon:"sym_o_history",onClick:b=>l.displayResetConfirm(p)},null,8,["onClick"])]),_:2},1024))]),_:2},1024))),128))]),_:1})]),_:1}),e(N),e(V,{align:"right"},{default:t(()=>[e(m,{flat:"",color:"primary",icon:"sym_o_history",label:"reset",onClick:d[0]||(d[0]=i=>l.displayResetConfirm(""))})]),_:1})]),_:1})]),e(I,{modelValue:l.confirm_reset_counter,"onUpdate:modelValue":d[2]||(d[2]=i=>l.confirm_reset_counter=i)},{default:t(()=>[e(k,{class:"q-pa-sm"},{default:t(()=>[e(c,{class:"row items-center",style:{"flex-wrap":"nowrap"}},{default:t(()=>[e(D,{icon:"sym_o_history",color:"primary","text-color":"white"}),A("span",M,a(l.$t("Are you sure to reset the counter?")),1)]),_:1}),e(V,{align:"right"},{default:t(()=>[L(e(m,{flat:"",label:"Cancel",color:"primary"},null,512),[[F]]),L(e(m,{label:"Yes, reset!",color:"primary",onClick:d[1]||(d[1]=i=>l.confirmAction())},null,512),[[F]])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})}const x=P(R,[["render",T]]);export{x as default};
