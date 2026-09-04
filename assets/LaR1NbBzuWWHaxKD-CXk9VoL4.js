import{i as e}from"./preload-helper-BdFrVu1K.js";import{n as t,t as n}from"./Bh160JcsPh6PVLct-Ck2017ad.js";var r;e((()=>{t(),r=async(e,t)=>{let r=await e.toJSON(),i=t?.whiteSpace??0,a;t?.beforeWrite?.(e,r),a=i===0?JSON.stringify(r):function(e,t=2){let n=[];function r(e){let r=t*e;return n[r]===void 0&&(n[r]=` `.repeat(r)),n[r]}function i(e,t,n,a){if(typeof e!=`object`||!e)return JSON.stringify(e);let o=r(t),s=r(t+1);if(Array.isArray(e)){let r=e.length;if(r===0)return`[]`;if(n!==0)return JSON.stringify(e);let a=`[
`;for(let o=0;o<r;o++)a+=s+i(e[o],t+1,n+1,!0),o<r-1&&(a+=`,
`);return a+=`
`+o+`]`,a}let c=Object.keys(e),l=c.length;if(l===0)return`{}`;if(!(n<2))return JSON.stringify(e);let u=`{
`;a||(n=0);for(let r=0;r<l;r++){let a=c[r];u+=s+JSON.stringify(a)+`: `+i(e[a],t+1,n,!1),r<l-1&&(u+=`,
`)}return u+=`
`+o+`}`,u}return i(e,0,0,!1)}(r,i);let o=new TextEncoder().encode(a).buffer,s=t?.compress??!0;return s&&(o=await n(o,typeof s==`string`?s:void 0)),o}}))();export{r as writeSXL};