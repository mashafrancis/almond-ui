'use client';
"use strict";var e=require("tslib"),a=require("react/jsx-runtime"),s=require("../../theme/theme.context.cjs"),i=require("../../utils/usePropId.cjs"),r=require("react"),t=require("tailwind-merge");const c={fit:"contain",height:"auto",loading:"lazy",mode:"dark",radius:"none",width:"100%"},d=r.forwardRef(((d,n)=>{const m=s.useComponentTheme("Image"),l=Object.assign(Object.assign({},c),d),{alt:o="",caption:g,children:u,wrapperClassName:h="",className:p="",fit:f,radius:w,src:j,width:N,height:b,imageRef:q,loading:x,mode:I}=l,O=e.__rest(l,["alt","caption","children","wrapperClassName","className","fit","radius","src","width","height","imageRef","loading","mode"]),C=i.usePropId(d.id),M=r.useMemo((()=>t.twMerge(m.base({className:p,fit:f,radius:w}))),[m,p,f,w]);return a.jsxs("div",Object.assign({id:C,ref:n,className:t.twMerge(m.wrapper({className:h}))},O,{children:[a.jsx("img",{className:M,src:j,alt:o,height:b,width:N,loading:x,ref:q}),g&&a.jsx("figcaption",Object.assign({className:m.caption({mode:I})},{children:g}))]}))}));d.displayName="Image",module.exports=d;
