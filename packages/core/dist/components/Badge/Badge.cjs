'use client';
"use strict";var e=require("tslib"),s=require("react/jsx-runtime"),r=require("../../theme/theme.context.cjs"),a=require("../../theme/variant.context.cjs"),o=require("../../utils/usePropId.cjs"),i=require("react"),t=require("tailwind-merge");const n={color:"dark",radius:"md",shadow:"none",shadowColor:"none",size:"sm",tone:"solid"},d=i.forwardRef(((d,c)=>{const l=a.useComponentVariant("Badge",d.variant),u=r.useComponentTheme("Badge"),m=Object.assign(Object.assign(Object.assign({},n),l),d),{children:h,className:w="",color:g,radius:j,shadow:p,shadowColor:q,size:C,tone:b,variant:v}=m,x=e.__rest(m,["children","className","color","radius","shadow","shadowColor","size","tone","variant"]),N=i.useMemo((()=>t.twMerge(u({className:w,color:g,radius:j,shadow:p,shadowColor:q,size:C,tone:b}))),[u,w,g,j,p,q,C,b]),z=o.usePropId(d.id);return s.jsx("span",Object.assign({id:z,ref:c,className:N},x,{children:h}))}));d.displayName="Badge",module.exports=d;
