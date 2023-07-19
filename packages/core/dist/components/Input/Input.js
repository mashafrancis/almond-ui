'use client';
import{__rest as s}from"tslib";import{jsx as e,jsxs as a}from"react/jsx-runtime";import{useFormControlContext as i}from"../FormControl/FormControl.context.js";import{useInputGroupContext as o}from"../InputGroup/InputGroup.context.js";import{usePropId as t}from"../../utils/usePropId.js";import{forwardRef as n,useMemo as r,cloneElement as c}from"react";import{twMerge as l}from"tailwind-merge";import{useComponentTheme as m}from"../../theme/theme.context.js";import d from"../Spinner/Spinner.js";const p={color:"dark",disabled:!1,loading:!1,radius:"md",shadow:"none",size:"md",tone:"light",validation:"none",withRing:!0},g=n(((n,g)=>{const h=m("Input"),u=Object.assign(Object.assign(Object.assign(Object.assign({},p),i()),o()),n),{className:I="",color:b,controlId:f,leftIcon:j,loading:N,radius:w,rightIcon:z,shadow:O,size:x,tone:y,type:v="text",validation:R,withRing:W}=u,C=s(u,["className","color","controlId","leftIcon","loading","radius","rightIcon","shadow","size","tone","type","validation","withRing"]),F=t(n.id),G=f||F,S=!!j,k=!!z,L=n.disabled||N,P=r((()=>l(h.base({className:I,color:b,disabled:L,hasLeftIcon:S,hasRightIcon:k,loading:N,radius:w,shadow:O,size:x,tone:y,type:v,validation:R,withRing:W}))),[I,b,L,S,k,N,w,O,x,h,y,v,R,W]),q=e("input",Object.assign({id:G,type:v,ref:g,className:P},C,{disabled:L}));return S||k||N?a("div",Object.assign({className:h.wrapper()},{children:[j&&e("span",Object.assign({className:h.leftIconWrapper({size:x})},{children:c(j,{className:h.icon({tone:y,size:x,className:j.props.className})})})),q,z&&!N&&e("span",Object.assign({className:h.rightIconWrapper({size:x})},{children:c(z,{className:h.icon({tone:y,size:x,className:z.props.className})})})),N&&e("span",Object.assign({className:h.rightIconWrapper({size:x})},{children:e(d,{size:x,color:"gray"})}))]})):q}));g.displayName="Input";export{g as default};
