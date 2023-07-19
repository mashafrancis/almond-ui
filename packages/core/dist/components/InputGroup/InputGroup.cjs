'use client';
"use strict";var e=require("tslib"),t=require("react/jsx-runtime"),r=require("../Button/Button.cjs"),s=require("../Combobox/Combobox.cjs"),o=require("../FormControl/FormControl.context.cjs"),n=require("../Input/Input.cjs"),u=require("./InputGroupText/InputGroupText.cjs"),i=require("../Select/Select.cjs"),a=require("../Textarea/Textarea.cjs"),c=require("../../theme/theme.context.cjs"),d=require("../../utils/usePropId.cjs"),l=require("react"),p=require("tailwind-merge"),m=require("./InputGroup.context.cjs");const j={radius:"md",shadow:"none",size:"md",tone:"light"},h=l.forwardRef(((r,s)=>{const n=c.useComponentTheme("InputGroup"),u=Object.assign(Object.assign(Object.assign({},o.useFormControlContext()),j),r),{className:i="",controlId:a,radius:h,shadow:x,size:b,tone:q}=u,I=e.__rest(u,["className","controlId","radius","shadow","size","tone"]),g=d.usePropId(r.id),C=l.useMemo((()=>p.twMerge(n.base({className:i,radius:h,shadow:x,size:b}))),[i,h,x,b,n]),O={tone:q,size:b,radius:h},T=[];return l.Children.toArray(r.children).forEach(((e,t)=>{T.push(l.cloneElement(e,Object.assign(Object.assign({},e.props),{"data-has-right-element":t<l.Children.count(r.children)-1,"data-has-left-element":t>0})))})),t.jsx(m.InputGroupContextProvider,Object.assign({value:O},{children:t.jsx("div",Object.assign({id:g,ref:s,className:C},I,{children:T}))}))}));h.displayName="InputGroup";const x=Object.assign(h,{Input:n,Textarea:a,Select:i,Combobox:s,Text:u.InputGroupText,Button:r});module.exports=x;
