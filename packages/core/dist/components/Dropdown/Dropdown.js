'use client';
import{__rest as o}from"tslib";import{jsx as e}from"react/jsx-runtime";import{DropdownContent as r}from"./DropdownContent/DropdownContent.js";import{DropdownDivider as t}from"./DropdownDivider/DropdownDivider.js";import{DropdownItem as i}from"./DropdownItem/DropdownItem.js";import{DropdownLabel as n}from"./DropdownLabel/DropdownLabel.js";import{DropdownTrigger as s}from"./DropdownTrigger/DropdownTrigger.js";import{useDropdown as a}from"./use-dropdown.hook.js";import{useKeypress as p}from"../../hooks/use-keypress.js";import{usePropId as d}from"../../utils/usePropId.js";import{forwardRef as m}from"react";import{DropdownContextProvider as l}from"./Dropdown.context.js";const c={chevronRotation:!0,color:"white",initiallyOpen:!1,itemColor:"gray",mode:"spacey",outsidePress:!0,placement:"bottom",radius:"md",shadow:"none",size:"sm",tone:"solid",trigger:"click",withChevron:!0,withinPortal:!0},g=m(((r,t)=>{const i=Object.assign(Object.assign({},c),r),{chevronRotation:n,children:s,color:m,initiallyOpen:g,itemColor:w,mode:h,outsidePress:f,placement:u,radius:j,shadow:D,size:v,tone:P,trigger:y,withChevron:b,withinPortal:C}=i,O=o(i,["chevronRotation","children","color","initiallyOpen","itemColor","mode","outsidePress","placement","radius","shadow","size","tone","trigger","withChevron","withinPortal"]),R=d(r.id),{arrowRef:x,context:k,floating:z,getFloatingProps:I,getReferenceProps:T,open:L,setOpen:F,reference:N,strategy:q,x:A,y:B}=a({outsidePress:f,placement:u,initiallyOpen:g,trigger:y}),E={arrowRef:x,chevronRotation:n,color:m,context:k,floating:z,getFloatingProps:I,getReferenceProps:T,itemColor:w,mode:h,open:L,setOpen:F,radius:j,reference:N,shadow:D,size:v,strategy:q,tone:P,withChevron:b,withinPortal:C,x:A,y:B};return p("Tab",L,(()=>{L&&F(!1)})),e(l,Object.assign({value:E},{children:e("div",Object.assign({id:R,ref:t},O,{children:s}))}))}));g.displayName="Dropdown";const w=Object.assign(g,{Trigger:s,Content:r,Label:n,Divider:t,Item:i});export{w as default};
