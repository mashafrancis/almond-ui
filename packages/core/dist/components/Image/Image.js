'use client';
import{__rest as a}from"tslib";import{jsxs as e,jsx as i}from"react/jsx-runtime";import{useComponentTheme as t}from"../../theme/theme.context.js";import{usePropId as s}from"../../utils/usePropId.js";import{forwardRef as r,useMemo as m}from"react";import{twMerge as o}from"tailwind-merge";const c={fit:"contain",height:"auto",loading:"lazy",mode:"dark",radius:"none",width:"100%"},d=r(((r,d)=>{const l=t("Image"),n=Object.assign(Object.assign({},c),r),{alt:g="",caption:p,children:h,wrapperClassName:f="",className:u="",fit:N,radius:w,src:j,width:b,height:O,imageRef:x,loading:I,mode:y}=n,C=a(n,["alt","caption","children","wrapperClassName","className","fit","radius","src","width","height","imageRef","loading","mode"]),R=s(r.id),k=m((()=>o(l.base({className:u,fit:N,radius:w}))),[l,u,N,w]);return e("div",Object.assign({id:R,ref:d,className:o(l.wrapper({className:f}))},C,{children:[i("img",{className:k,src:j,alt:g,height:O,width:b,loading:I,ref:x}),p&&i("figcaption",Object.assign({className:l.caption({mode:y})},{children:p}))]}))}));d.displayName="Image";export{d as default};
