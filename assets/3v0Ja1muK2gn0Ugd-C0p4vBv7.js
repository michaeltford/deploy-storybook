import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./ajcZYkb4oD-Z5FNN-B07cI2HM.js";var n;function r(){return(r=e((()=>{n=async(e,n)=>{let r=await e.toJSON(),i=n?.whiteSpace??0,a;n?.beforeWrite?.(e,r),a=i===0?JSON.stringify(r):function(e,t=2){let n=[];function r(e){let r=t*e;return n[r]===void 0&&(n[r]=` `.repeat(r)),n[r]}function i(e,t,n,a){if(typeof e!=`object`||!e){let t=JSON.stringify(e);return t===void 0?`null`:t}let o=r(t),s=r(t+1);if(Array.isArray(e)){let r=e.length;if(r===0)return`[]`;if(n!==0)return JSON.stringify(e);let a=`[
`;for(let o=0;o<r;o++)a+=s+i(e[o],t+1,n+1,!0),o<r-1&&(a+=`,
`);return a+=`
`+o+`]`,a}let c=Object.keys(e),l=[],u=[];for(let t=0;t<c.length;t++){let n=e[c[t]];n!==void 0&&typeof n!=`function`&&typeof n!=`symbol`&&(l.push(c[t]),u.push(n))}let d=l.length;if(d===0)return`{}`;if(!(n<2))return JSON.stringify(e);let f=`{
`;a||(n=0);for(let e=0;e<d;e++)f+=s+JSON.stringify(l[e])+`: `+i(u[e],t+1,n,!1),e<d-1&&(f+=`,
`);return f+=`
`+o+`}`,f}return i(e,0,0,!1)}(r,i);let o=new TextEncoder().encode(a).buffer,s=n?.compress??!0;return s&&(o=await t(o,typeof s==`string`?s:void 0)),o}})))()}r();export{n as writeSXL};