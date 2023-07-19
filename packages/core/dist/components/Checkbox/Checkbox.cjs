'use client';
"use strict";var e=require("tslib"),s=require("react/jsx-runtime"),a=require("../../theme/theme.context.cjs"),i=require("../../utils/usePropId.cjs"),r=require("react"),l=require("tailwind-merge");const t={color:"dark",disabled:!1,radius:"md",size:"md",tone:"solid",withRing:!0},d=r.forwardRef(((d,c)=>{const n=a.useComponentTheme("Checkbox"),o=Object.assign(Object.assign({},t),d),{children:m,className:b="",color:u,disabled:g,radius:N,size:h,tone:j,withRing:p,label:x,labelClassName:w="",description:C,descriptionClassName:O="",error:z,errorClassName:q=""}=o,v=e.__rest(o,["children","className","color","disabled","radius","size","tone","withRing","label","labelClassName","description","descriptionClassName","error","errorClassName"]),f=i.usePropId(d.id),M=z?"invalid":"valid",R=r.useMemo((()=>l.twMerge(n.base({className:b,color:u,radius:N,size:h,tone:j,validation:M,withRing:p}))),[n,u,j,h,N,M,p,b]);return s.jsxs("div",Object.assign({className:"flex items-center"},{children:[s.jsx("input",Object.assign({id:f,ref:c,type:"checkbox","aria-labelledby":`${f}-label`,className:R,disabled:g},v)),s.jsxs("div",Object.assign({className:"grid grid-cols-1 justify-items-start"},{children:[s.jsx("label",Object.assign({id:`${f}-label`,htmlFor:f,className:l.twMerge(n.label({disabled:g,size:h,className:w}))},{children:x})),C&&s.jsx("span",Object.assign({className:l.twMerge(n.description({disabled:g,size:h,className:O}))},{children:C})),z&&s.jsx("span",Object.assign({className:l.twMerge(n.error({disabled:g,size:h,className:q}))},{children:z}))]}))]}))}));d.displayName="Checkbox",module.exports=d;