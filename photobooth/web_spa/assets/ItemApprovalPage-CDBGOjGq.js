import{Q as L}from"./QImg-F7_Ct8Qf.js";import{v as O,M as g,N as h,e as A,z as d,O as m,P as q,d as y,a as Q,h as S,f as E,k as P,l as n,s as T,m as t,Q as v,p as f,q as o,t as i,n as k,L as b}from"./index-DMTCEbHD.js";import{Q as I}from"./QPageSticky-DhBmdmM2.js";import{Q as M}from"./QPage-DAiiHfxw.js";const R=O({name:"QBanner",props:{...g,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(s,{slots:a}){const{proxy:{$q:r}}=q(),c=h(s,r),_=A(()=>"q-banner row items-center"+(s.dense===!0?" q-banner--dense":"")+(c.value===!0?" q-banner--dark q-dark":"")+(s.rounded===!0?" rounded-borders":"")),p=A(()=>`q-banner__actions row items-center justify-end col-${s.inlineActions===!0?"auto":"all"}`);return()=>{const u=[d("div",{class:"q-banner__avatar col-auto row items-center self-start"},m(a.avatar)),d("div",{class:"q-banner__content col text-body2"},m(a.default))],e=m(a.action);return e!==void 0&&u.push(d("div",{class:p.value},e)),d("div",{class:_.value+(s.inlineActions===!1&&e!==void 0?" q-banner--top-padding":""),role:"alert"},u)}}}),$={class:"text-h5"},B={class:"text-subtitle2"},N=y({__name:"ItemApprovalPage",setup(s){const a=Q(),r=S(),c=A(()=>r.last_captured_mediaitem&&r.last_captured_mediaitem.preview),_=()=>{b("/api/actions/confirm"),a.push("/")},p=()=>{b("/api/actions/reject"),a.push("/")},u=()=>{b("/api/actions/abort"),a.push("/")};return(e,l)=>(E(),P(M,{id:"itemapproval-page",class:"fullscreen flex flex-center"},{default:n(()=>[c.value?(E(),P(L,{key:0,src:c.value,fit:"contain",style:{height:"95%"}},null,8,["src"])):T("",!0),t(I,{position:"bottom",class:"q-ma-lg"},{default:n(()=>[t(R,{rounded:"","inline-actions":""},{action:n(()=>[t(v,{id:"item-approval-button-reject",color:"negative","no-caps":"",class:"",onClick:l[0]||(l[0]=C=>p())},{default:n(()=>[t(f,{left:"",size:"xl",name:"sym_o_thumb_down"}),o("div",null,i(e.$t("MSG_APPROVE_COLLAGE_ITEM_RETRY")),1)]),_:1}),t(v,{id:"item-approval-button-abort",flat:"",color:"grey","no-caps":"",class:"",onClick:l[1]||(l[1]=C=>u())},{default:n(()=>[t(f,{left:"",size:"xl",name:"sym_o_cancel"}),o("div",null,i(e.$t("MSG_APPROVE_COLLAGE_ITEM_CANCEL_COLLAGE")),1)]),_:1}),t(v,{id:"item-approval-button-approve",color:"positive","no-caps":"",onClick:l[2]||(l[2]=C=>_())},{default:n(()=>[t(f,{left:"",size:"xl",name:"sym_o_thumb_up"}),o("div",null,[o("div",null,i(e.$t("MSG_APPROVE_COLLAGE_ITEM_APPROVE")),1)])]),_:1})]),default:n(()=>[o("div",null,[o("div",$,i(e.$t("TITLE_ITEM_APPROVAL")),1),o("div",B,i(e.$t("MSG_APPROVE_COLLAGE_ITEM_NO_OF_TOTAL",{no:k(r).number_captures_taken,total:k(r).total_captures_to_take})),1)])]),_:1})]),_:1})]),_:1}))}});export{N as default};
