import{__rest as t}from"tslib";import{jsx as e}from"react/jsx-runtime";import{useInputGroupContext as r}from"../InputGroup.context.js";import{useComponentTheme as s}from"../../../theme/theme.context.js";import{usePropId as i}from"../../../utils/usePropId.js";import{forwardRef as o,useMemo as m}from"react";import{twMerge as a}from"tailwind-merge";const n=o(((o,n)=>{const c=s("InputGroup"),p=Object.assign(Object.assign({},r()),o),{className:u="",children:d,tone:l,size:f,radius:j}=p,x=t(p,["className","children","tone","size","radius"]),h=i(o.id),N=m((()=>a(c.text({className:u,tone:l,radius:j,size:f}))),[u,j,f,c,l]);return e("div",Object.assign({id:h,ref:n,className:N},x,{children:d}))}));n.displayName="InputGroupText";export{n as InputGroupText};