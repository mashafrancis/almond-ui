import{__rest as r}from"tslib";import{jsx as e}from"react/jsx-runtime";import{useCardContext as t}from"../Card.context.js";import{useComponentTheme as i}from"../../../theme/theme.context.js";import{usePropId as o}from"../../../utils/usePropId.js";import{forwardRef as s,useMemo as m}from"react";import{twMerge as a}from"tailwind-merge";const c=s(((s,c)=>{const d=i("Card"),{children:l,className:n=""}=s,p=r(s,["children","className"]),{size:f,radius:u}=t(),h=o(s.id),j=m((()=>a(d.footer({className:n,radius:u,size:f}))),[d,n,u,f]);return e("div",Object.assign({id:h,ref:c,className:j},p,{children:l}))}));c.displayName="CardFooter";export{c as CardFooter};
