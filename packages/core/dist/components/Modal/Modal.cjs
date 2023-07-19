'use client';
"use strict";var e=require("tslib"),r=require("react/jsx-runtime"),s=require("./ModalGroup/ModalGroup.cjs"),o=require("./ModalGroup/ModalGroup.context.cjs"),i=require("@floating-ui/react"),t=require("../../hooks/use-focus-trap.hook.cjs"),a=require("../../hooks/use-keypress.cjs"),l=require("../../theme/theme.context.cjs"),n=require("../../utils/usePropId.cjs"),c=require("react"),u=require("../Overlay/Overlay.cjs"),d=require("tailwind-merge");const p={closeOnEscape:!0,color:"white",mode:"dialog",open:!1,overlayBlur:"sm",overlayCloseOnClick:!0,overlayColor:"dark",overlayOpacity:"50",position:"top",radius:"md",shadow:"base",size:"sm"},y=c.forwardRef(((s,y)=>{const m=l.useComponentTheme("Modal"),f=Object.assign(Object.assign({},p),s),{children:h,className:v="",closeOnEscape:g,color:j,mode:b,onClose:O,open:C,overlayBlur:x,overlayCloseOnClick:M,overlayColor:q,overlayOpacity:w,position:k,radius:E,shadow:G,size:N}=f,R=e.__rest(f,["children","className","closeOnEscape","color","mode","onClose","open","overlayBlur","overlayCloseOnClick","overlayColor","overlayOpacity","position","radius","shadow","size"]),z=n.usePropId(s.id),Y=c.useRef(null),[B,F]=c.useState(!1),I=t.useFocusTrap(B),P=i.useMergeRefs([Y,I||null,y||null]),T=c.useRef(null),{activeModalId:K,registry:_,setRegistry:A}=o.useModalGroupContext(),S=c.useMemo((()=>{if("fullscreen"===b)return"0%";switch(k){case"top":case"bottom":return"0%";default:return"-50%"}}),[k,b]);c.useEffect((()=>{if(!A||!_||!Y.current)return;const e=C?[..._,Y.current]:_.filter((e=>e!==Y.current));if(A(e),0!==e.length&&!C&&e.length<_.length){e[e.length-1].animate([{opacity:0,transform:"translateY(-50px)",visibility:"hidden"},{opacity:1,transform:"translateY(0%)",visibility:"visible"}],{duration:150}),F(!1)}}),[C]);const $=c.useMemo((()=>d.twMerge(m({className:v,color:j,mode:b,position:k,radius:E,shadow:G,size:N}))),[v,j,b,k,E,G,N,m]);a.useKeypress("Escape",g,O);return c.useEffect((()=>{const e=C?"ease-in-out":"ease-out",r=C?150:100,s=new KeyframeEffect(Y.current,[{opacity:0,transform:"translateY(-100px)",visibility:"hidden"},{opacity:1,transform:`translateY(${S})`,visibility:"visible"}],{duration:r,fill:"both",easing:e});T.current=new Animation(s,document.timeline)}),[C,Y]),c.useEffect((()=>{T.current&&(C?(T.current.play(),T.current.onfinish=()=>{F(!0)}):(T.current.reverse(),F(!1)))}),[C]),c.useEffect((()=>{T.current&&(K===z?setTimeout((()=>{F(!0)}),100):F(!1))}),[K]),r.jsxs(r.Fragment,{children:["fullscreen"!==b&&r.jsx(u,{open:C,onClick:()=>{M&&O&&O()},blur:x,color:q,opacity:w,closeOnClick:M}),r.jsx(i.FloatingPortal,{children:r.jsx("div",Object.assign({className:"flex justify-center"},{children:r.jsx("div",Object.assign({id:z,role:"dialog","aria-modal":"true","aria-hidden":!C,style:{opacity:0,visibility:"hidden"},ref:P,className:$},R,{children:h}))}))})]})}));y.displayName="Modal";const m=Object.assign(y,{Group:s.ModalGroup});module.exports=m;
