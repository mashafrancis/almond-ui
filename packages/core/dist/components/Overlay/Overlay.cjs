'use client';
"use strict";var e=require("tslib"),r=require("react/jsx-runtime"),s=require("../../theme/theme.context.cjs"),o=require("../../utils/usePropId.cjs"),c=require("react"),i=require("tailwind-merge");const t={blur:"sm",opacity:"50",color:"dark",closeOnClick:!1},l=c.forwardRef(((l,a)=>{const n=s.useComponentTheme("Overlay"),u=Object.assign(Object.assign({},t),l),{blur:d,color:m,opacity:p,closeOnClick:b,onClose:y,open:O,className:f=""}=u,j=e.__rest(u,["blur","color","opacity","closeOnClick","onClose","open","className"]),v=o.usePropId(l.id),h=c.useMemo((()=>i.twMerge(n({blur:d,className:f,color:m,open:O,opacity:p}))),[d,f,m,O,p,n]);return c.useEffect((()=>{O?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")}),[O]),r.jsx("div",Object.assign({id:v,ref:a,className:h,"aria-hidden":"true"},j))}));l.displayName="Overlay",module.exports=l;
