"use strict";var e=require("tslib"),r=require("react/jsx-runtime"),a=require("../Selector.context.cjs"),t=require("../../../theme/theme.context.cjs"),s=require("../../../utils/usePropId.cjs"),i=require("react"),o=require("tailwind-merge");const c=i.forwardRef(((c,n)=>{const l=t.useComponentTheme("Selector"),d=Object.assign(Object.assign({},a.useSelectorContext()),c),{activeTabAnchor:u,anchor:b,children:h,className:m="",color:p,disabled:j=!1,label:x,orientation:g,radius:q,separator:v,setActiveTabAnchor:w,shadow:N,size:S,tone:T,withSeparator:f}=d,A=e.__rest(d,["activeTabAnchor","anchor","children","className","color","disabled","label","orientation","radius","separator","setActiveTabAnchor","shadow","size","tone","withSeparator"]),z=s.usePropId(c.id),O=b===u,C="string"==typeof x?x:void 0,I=i.useMemo((()=>o.twMerge(l.tab({active:O,className:m,color:p,orientation:g,radius:q,size:S,tone:T}))),[O,m,p,g,q,S,l,T]);return r.jsxs(r.Fragment,{children:[r.jsx("button",Object.assign({id:z,ref:n,role:"radio","aria-checked":O,"aria-label":C,onClick:()=>{w(b)},className:I,disabled:j,tabIndex:O?0:-1},A,{children:r.jsx("span",Object.assign({className:"z-40 h-full flex items-center"},{children:x}))})),f&&(v||r.jsx("span",{className:l.separator({orientation:g,size:S})}))]})}));c.displayName="SelectorTab",exports.SelectorTab=c;