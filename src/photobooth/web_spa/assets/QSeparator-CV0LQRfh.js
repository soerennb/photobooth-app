import{f as d,a2 as g,a4 as $,a3 as h,k as t,i as f}from"./index-BBZX_fHx.js";const x={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},s={xs:2,sm:4,md:8,lg:16,xl:24},k=d({name:"QSeparator",props:{...g,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const o=h(),c=$(e,o.proxy.$q),i=t(()=>e.vertical===!0?"vertical":"horizontal"),n=t(()=>` q-separator--${i.value}`),l=t(()=>e.inset!==!1?`${n.value}-${x[e.inset]}`:""),u=t(()=>`q-separator${n.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(c.value===!0?" q-separator--dark":"")),m=t(()=>{const a={};if(e.size!==void 0&&(a[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const v=e.spaced===!0?`${s.md}px`:e.spaced in s?`${s[e.spaced]}px`:e.spaced,r=e.vertical===!0?["Left","Right"]:["Top","Bottom"];a[`margin${r[0]}`]=a[`margin${r[1]}`]=v}return a});return()=>f("hr",{class:u.value,style:m.value,"aria-orientation":i.value})}});export{k as Q};
