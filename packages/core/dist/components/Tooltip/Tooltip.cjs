'use client';
"use strict";var e=require("react/jsx-runtime"),t=require("./use-tooltip.hook.cjs"),i=require("@floating-ui/react"),o=require("../../theme/theme.context.cjs"),r=require("../../utils/usePropId.cjs"),s=require("react"),l=require("tailwind-merge");const a={color:"dark",initiallyOpen:!1,offset:6,placement:"top",radius:"md",shadow:"none",size:"sm",tone:"solid",withinPortal:!0},n=s.forwardRef(((n,c)=>{const u=o.useComponentTheme("Tooltip"),{tone:d,children:p,className:m="",color:f,initiallyOpen:g,label:h,offset:w,placement:j,radius:x,shadow:b,size:y,withinPortal:O}=Object.assign(Object.assign({},a),n),q=r.usePropId(n.id),[P,T]=s.useState(!g),[N,v]=s.useState(null),{arrowRef:F,arrowSide:R,context:S,floating:z,getFloatingProps:M,getReferenceProps:k,open:C,reference:E,strategy:I,x:A,y:B}=t.useTooltip({initiallyOpen:g,offset:w,placement:j});s.useEffect((()=>{N&&clearTimeout(N),v(setTimeout((()=>T(!C)),C?0:75))}),[C]);const D=s.Children.only(p),G=i.useMergeRefs([E,c||null]),H=s.useMemo((()=>l.twMerge(u.base({tone:d,arrowSide:R,className:m,color:f,open:C,radius:x,shadow:b,size:y}))),[d,R,m,f,C,x,b,y,u]),J=!P&&e.jsxs("div",Object.assign({id:q,ref:z,className:H,role:"dialog","aria-modal":"true","aria-hidden":!C,style:{position:I,top:null!=B?B:0,left:null!=A?A:0,visibility:null==A?"hidden":"visible"}},M,{children:[e.jsx(i.FloatingArrow,{className:u.arrow({tone:d,color:f}),ref:F,width:8,height:4,context:S}),h]})),K=s.cloneElement(D,Object.assign(Object.assign({ref:G},D.props),k));return e.jsxs(e.Fragment,{children:[O?e.jsx(i.FloatingPortal,{children:J}):J,K]})}));n.displayName="Tooltip",module.exports=n;