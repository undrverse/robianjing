import{G as d,j as s,S as l}from"./app-Dj-x9gWf.js";import{G as p}from"./GuestLayout-BcEzpNvQ.js";import{T as c,I as u}from"./InputError-B2l-ujNv.js";import{I as f}from"./InputLabel-BAGiTGSB.js";import{P as x}from"./PrimaryButton-DS3TSvPW.js";import"./DarkModeToggle-BmCRQVkg.js";import"./Money-CmnXgzPo.js";function g(){const{data:e,setData:a,post:t,processing:o,errors:i,reset:m}=d({password:""}),n=r=>{r.preventDefault(),t(route("password.confirm"),{onFinish:()=>m("password")})};return s.jsxs(p,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-slate-600 dark:text-slate-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(c,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>a("password",r.target.value)}),s.jsx(u,{message:i.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{g as default};
