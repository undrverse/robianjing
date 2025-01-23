import{r as u,G as h,j as s}from"./app-Dj-x9gWf.js";import{T as n,I as d}from"./InputError-B2l-ujNv.js";import{I as c}from"./InputLabel-BAGiTGSB.js";import{P as v}from"./PrimaryButton-DS3TSvPW.js";import{X as _}from"./transition-1oIjx2WC.js";function I({className:m=""}){const l=u.useRef(),p=u.useRef(),{data:r,setData:a,errors:t,put:w,reset:o,processing:x,recentlySuccessful:f}=h({current_password:"",password:"",password_confirmation:""}),j=e=>{e.preventDefault(),w(route("password.update"),{preserveScroll:!0,onSuccess:()=>o(),onError:i=>{i.password&&(o("password","password_confirmation"),l.current.focus()),i.current_password&&(o("current_password"),p.current.focus())}})};return s.jsxs("section",{className:m,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-slate-900 dark:text-slate-100",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-slate-600 dark:text-slate-400",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:j,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(c,{htmlFor:"current_password",value:"Current Password"}),s.jsx(n,{id:"current_password",ref:p,value:r.current_password,onChange:e=>a("current_password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"current-password"}),s.jsx(d,{message:t.current_password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(c,{htmlFor:"password",value:"New Password"}),s.jsx(n,{id:"password",ref:l,value:r.password,onChange:e=>a("password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(d,{message:t.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(c,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(n,{id:"password_confirmation",value:r.password_confirmation,onChange:e=>a("password_confirmation",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(d,{message:t.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(v,{disabled:x,children:"Save"}),s.jsx(_,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-400",children:"Saved."})})]})]})]})}export{I as default};