import{__rest as r}from"tslib";import{jsx as e}from"react/jsx-runtime";import{useCardContext as i}from"../Card.context.js";import{useComponentTheme as t}from"../../../theme/theme.context.js";import{usePropId as m}from"../../../utils/usePropId.js";import{forwardRef as o,useMemo as s}from"react";import{twMerge as a}from"tailwind-merge";const d=o(((o,d)=>{const c=t("Card"),{children:l,className:n=""}=o,p=r(o,["children","className"]),{size:f,withDivider:h}=i(),j=m(o.id),N=s((()=>a(c.body({className:n,size:f,withDivider:h}))),[c,n,f,h]);return e("div",Object.assign({id:j,ref:d,className:N},p,{children:l}))}));d.displayName="CardBody";export{d as CardBody};