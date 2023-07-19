'use client';
import{__rest as r}from"tslib";import{jsx as e}from"react/jsx-runtime";import{TableContextProvider as o}from"./Table.context.js";import{Tbody as s}from"./Tbody/Tbody.js";import{Td as t}from"./Td/Td.js";import{Tfoot as d}from"./Tfoot/Tfoot.js";import{Th as i}from"./Th/Th.js";import{Thead as a}from"./Thead/Thead.js";import{Tr as l}from"./Tr/Tr.js";import{useComponentTheme as m}from"../../theme/theme.context.js";import{usePropId as c}from"../../utils/usePropId.js";import{forwardRef as h}from"react";const n={borderStyle:"solid",footerBorders:!0,headerBorders:!0,headerColor:"gray",horizontalBorders:!0,hoverable:!0,outerBorders:!0,radius:"lg",size:"md",striped:!0,stripePosition:"even",verticalBorders:!1},p=h(((s,t)=>{const d=Object.assign(Object.assign({},n),s),{borderStyle:i,children:a,className:l,color:h,footerBorders:p,headerBorders:b,headerColor:f,horizontalBorders:B,hoverable:T,outerBorders:j,radius:u,size:v,striped:y,stripePosition:z,verticalBorders:g}=d,N=r(d,["borderStyle","children","className","color","footerBorders","headerBorders","headerColor","horizontalBorders","hoverable","outerBorders","radius","size","striped","stripePosition","verticalBorders"]),O=m("Table"),P=c(s.id),S={borderStyle:i,footerBorders:p,headerBorders:b,headerColor:f,horizontalBorders:B,hoverable:T,outerBorders:j,size:v,striped:y,stripePosition:z,verticalBorders:g};return e(o,Object.assign({value:S},{children:e("div",Object.assign({id:P,ref:t,className:O.wrapper({borderStyle:i,className:l,outerBorders:j,radius:u})},N,{children:e("table",Object.assign({className:O.table({radius:u,size:v})},{children:a}))}))}))}));p.displayName="Table";const b=Object.assign(p,{Thead:a,Tbody:s,Tfoot:d,Tr:l,Th:i,Td:t});export{b as default};