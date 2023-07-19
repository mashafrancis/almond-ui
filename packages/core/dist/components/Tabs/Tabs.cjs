'use client';
"use strict";var e=require("tslib"),t=require("react/jsx-runtime"),s=require("./Tab/Tab.cjs"),r=require("./TabContent/TabContent.cjs"),i=require("./TabList/TabList.cjs"),a=require("../../theme/theme.context.cjs"),o=require("../../utils/usePropId.cjs"),n=require("react"),c=require("./Tabs.context.cjs");const d={color:"dark",method:"hide",radius:"none",size:"md",tone:"line"},u=n.forwardRef(((s,r)=>{const i=Object.assign(Object.assign({},d),s),{children:u,color:b,defaultTab:l,fullWidth:T,method:h,radius:j,size:m,tone:f}=i,q=e.__rest(i,["children","color","defaultTab","fullWidth","method","radius","size","tone"]),p=a.useComponentTheme("Tabs"),x=o.usePropId(s.id),[v,C]=n.useState(l),g={activeTabAnchor:v,baseId:x,color:b,fullWidth:T,method:h,radius:j,setActiveTabAnchor:C,size:m,tone:f};return t.jsx(c.TabsContextProvider,Object.assign({value:g},{children:t.jsx("div",Object.assign({id:x,ref:r,className:p.wrapper({fullWidth:T})},q,{children:u}))}))}));u.displayName="Tabs";const b=Object.assign(u,{Tab:s.Tab,List:i.TabList,Content:r.TabContent});module.exports=b;