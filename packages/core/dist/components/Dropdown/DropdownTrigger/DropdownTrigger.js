import{jsx as r,Fragment as e}from"react/jsx-runtime";import{useDropdownContext as o}from"../Dropdown.context.js";import{forwardRef as n,Children as t,cloneElement as a}from"react";import{useMergeRefs as i}from"@floating-ui/react";const p=n(((n,p)=>{const{children:s}=n,{open:c,reference:m,getReferenceProps:d}=o(),f=t.only(s),g=i([m,p||null]),l=a(f,Object.assign(Object.assign(Object.assign({ref:g},{"aria-expanded":c,"aria-pressed":!0,"aria-haspopup":!0}),f.props),d));return r(e,{children:l})}));p.displayName="DropdownTrigger";export{p as DropdownTrigger};
