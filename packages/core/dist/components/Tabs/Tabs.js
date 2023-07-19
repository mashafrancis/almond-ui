'use client';
import{__rest as t}from"tslib";import{jsx as e}from"react/jsx-runtime";import{Tab as o}from"./Tab/Tab.js";import{TabContent as i}from"./TabContent/TabContent.js";import{TabList as r}from"./TabList/TabList.js";import{useComponentTheme as s}from"../../theme/theme.context.js";import{usePropId as a}from"../../utils/usePropId.js";import{forwardRef as n,useState as d}from"react";import{TabsContextProvider as m}from"./Tabs.context.js";const c={color:"dark",method:"hide",radius:"none",size:"md",tone:"line"},l=n(((o,i)=>{const r=Object.assign(Object.assign({},c),o),{children:n,color:l,defaultTab:b,fullWidth:f,method:h,radius:u,size:p,tone:T}=r,j=t(r,["children","color","defaultTab","fullWidth","method","radius","size","tone"]),g=s("Tabs"),O=a(o.id),[v,x]=d(b),z={activeTabAnchor:v,baseId:O,color:l,fullWidth:f,method:h,radius:u,setActiveTabAnchor:x,size:p,tone:T};return e(m,Object.assign({value:z},{children:e("div",Object.assign({id:O,ref:i,className:g.wrapper({fullWidth:f})},j,{children:n}))}))}));l.displayName="Tabs";const b=Object.assign(l,{Tab:o,List:r,Content:i});export{b as default};
