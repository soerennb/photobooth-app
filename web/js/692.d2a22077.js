"use strict";(globalThis["webpackChunkqPhotobooth"]=globalThis["webpackChunkqPhotobooth"]||[]).push([[692],{692:(e,l,a)=>{a.r(l),a.d(l,{default:()=>U});var o=a(9835);const r=(0,o._)("div",{class:"text-h5"},"Server Control",-1),t={class:"row"},s={class:"q-ma-sm"},m={class:"text-no-wrap"},c=(0,o._)("span",{class:"q-ml-sm"},"You sure to reboot the system?",-1),i=(0,o._)("span",{class:"q-ml-sm"},"You sure to shutdown the system?",-1),n=(0,o._)("span",{class:"q-ml-sm"},"You sure to restart the service?",-1),d=(0,o._)("span",{class:"q-ml-sm"},"You sure to reload the service?",-1),u=(0,o._)("div",{class:"text-h5"},"Maintain Gallery",-1),_={class:"row"},w={class:"q-ma-sm"},f={class:"text-no-wrap"},p=(0,o._)("span",{class:"q-ml-sm"},"Are you sure to delete all media items from gallery?",-1);function W(e,l,a,W,h,y){const v=(0,o.up)("q-avatar"),b=(0,o.up)("q-card-section"),q=(0,o.up)("q-btn"),C=(0,o.up)("q-card-actions"),g=(0,o.up)("q-card"),V=(0,o.up)("q-dialog"),k=(0,o.up)("q-page"),P=(0,o.Q2)("close-popup");return(0,o.wg)(),(0,o.j4)(k,{padding:""},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"q-pa-md"},{default:(0,o.w5)((()=>[r,(0,o._)("div",t,[(0,o._)("div",s,[(0,o._)("div",m,[(0,o.Wm)(V,{modelValue:e.confirm_reboot,"onUpdate:modelValue":l[1]||(l[1]=l=>e.confirm_reboot=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{icon:"restart_alt",color:"primary","text-color":"white"}),c])),_:1}),(0,o.Wm)(C,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel",color:"primary"},null,512),[[P]]),(0,o.wy)((0,o.Wm)(q,{label:"Reboot",color:"primary",onClick:l[0]||(l[0]=l=>e.remoteProcedureCall("/system/server/reboot"))},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(V,{modelValue:e.confirm_shutdown,"onUpdate:modelValue":l[3]||(l[3]=l=>e.confirm_shutdown=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{icon:"power_settings_new",color:"primary","text-color":"white"}),i])),_:1}),(0,o.Wm)(C,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel"},null,512),[[P]]),(0,o.wy)((0,o.Wm)(q,{label:"Shutdown",color:"primary",onClick:l[2]||(l[2]=l=>e.remoteProcedureCall("/system/server/shutdown"))},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(V,{modelValue:e.confirm_restart_service,"onUpdate:modelValue":l[5]||(l[5]=l=>e.confirm_restart_service=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{icon:"restart_alt",color:"primary","text-color":"white"}),n])),_:1}),(0,o.Wm)(C,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel"},null,512),[[P]]),(0,o.wy)((0,o.Wm)(q,{label:"Restart",color:"primary",onClick:l[4]||(l[4]=l=>e.remoteProcedureCall("/system/service/restart"))},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(V,{modelValue:e.confirm_reload_service,"onUpdate:modelValue":l[7]||(l[7]=l=>e.confirm_reload_service=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{icon:"restart_alt",color:"primary","text-color":"white"}),d])),_:1}),(0,o.Wm)(C,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel"},null,512),[[P]]),(0,o.wy)((0,o.Wm)(q,{label:"Reload",color:"primary",onClick:l[6]||(l[6]=l=>e.remoteProcedureCall("/system/service/reload"))},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(q,{class:"q-mr-sm",label:"Reboot Host",onClick:l[8]||(l[8]=l=>e.confirm_reboot=!0)}),(0,o.Wm)(q,{class:"q-mr-sm",label:"Shutdown Host",onClick:l[9]||(l[9]=l=>e.confirm_shutdown=!0)}),(0,o.Wm)(q,{class:"q-mr-sm",label:"Restart Service",onClick:l[10]||(l[10]=l=>e.confirm_restart_service=!0)}),(0,o.Wm)(q,{class:"q-mr-sm",label:"Reload Service",onClick:l[11]||(l[11]=l=>e.confirm_reload_service=!0)})])])])])),_:1}),(0,o.Wm)(g,{class:"q-pa-md q-mt-md"},{default:(0,o.w5)((()=>[u,(0,o._)("div",_,[(0,o._)("div",w,[(0,o._)("div",f,[(0,o.Wm)(V,{modelValue:e.confirm_delete_all,"onUpdate:modelValue":l[13]||(l[13]=l=>e.confirm_delete_all=l)},{default:(0,o.w5)((()=>[(0,o.Wm)(g,{class:"q-pa-sm"},{default:(0,o.w5)((()=>[(0,o.Wm)(b,{class:"row items-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{icon:"delete",color:"primary","text-color":"white"}),p])),_:1}),(0,o.Wm)(C,{align:"right"},{default:(0,o.w5)((()=>[(0,o.wy)((0,o.Wm)(q,{flat:"",label:"Cancel",color:"primary"},null,512),[[P]]),(0,o.wy)((0,o.Wm)(q,{label:"Delete all",color:"primary",onClick:l[12]||(l[12]=l=>e.remoteProcedureCall("/mediacollection/delete_all"))},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(q,{class:"q-mr-sm",label:"Delete all media files",onClick:l[14]||(l[14]=l=>e.confirm_delete_all=!0)})])])])])),_:1})])),_:1})}var h=a(499),y=a(7575),v=a(1569);const b=(0,o.aZ)({name:"MainLayout",setup(){const e=(0,y.h)();return{store:e,remoteProcedureCall:v.remoteProcedureCall,confirm_reboot:(0,h.iH)(!1),confirm_shutdown:(0,h.iH)(!1),confirm_restart_service:(0,h.iH)(!1),confirm_reload_service:(0,h.iH)(!1),confirm_delete_all:(0,h.iH)(!1)}}});var q=a(1639),C=a(9885),g=a(4458),V=a(7743),k=a(3190),P=a(1357),Z=a(1821),x=a(8879),Q=a(2146),H=a(9984),R=a.n(H);const S=(0,q.Z)(b,[["render",W]]),U=S;R()(b,"components",{QPage:C.Z,QCard:g.Z,QDialog:V.Z,QCardSection:k.Z,QAvatar:P.Z,QCardActions:Z.Z,QBtn:x.Z}),R()(b,"directives",{ClosePopup:Q.Z})}}]);