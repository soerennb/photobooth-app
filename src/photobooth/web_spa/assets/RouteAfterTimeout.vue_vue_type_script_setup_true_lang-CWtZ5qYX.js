import{d,a8 as h,a9 as w,k as i,m as y,a0 as s,p as v,aa as M,b as _,o as T}from"./index-BRXcKeA0.js";const N=d({__name:"RouteAfterTimeout",props:{route:{type:String,required:!0},timeoutMs:{type:Number,required:!0},warningMessage:{type:String,default:"The application has been idle for a long time. Click anywhere to stay on this page..."},warningTimeMs:{type:Number,default:1e4}},setup(r){const u=M(),m=_(),e=r,{idle:p,lastActive:c}=h(e.timeoutMs),l=w({interval:1e3}),o=i(()=>e.timeoutMs-(l.value-c.value)),f=i(()=>e.warningTimeMs>o.value);let n=null;function g(){n=u.notify({progress:!0,message:e.warningMessage,type:"info",multiLine:!0,timeout:o.value})}function a(){n&&n()}return y(()=>{a()}),s(f,t=>{t?g():a()}),s(p,t=>{t&&(a(),m.push({path:e.route}))}),(t,b)=>(T(),v("div"))}});export{N as _};
