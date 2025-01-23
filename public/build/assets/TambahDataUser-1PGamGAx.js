import{G as B,j as e,S as F,x as C}from"./app-Dj-x9gWf.js";import{T as h,I as i}from"./InputError-B2l-ujNv.js";import{I as x}from"./InputLabel-BAGiTGSB.js";import{P as I}from"./PrimaryButton-DS3TSvPW.js";import{S as A}from"./SecondaryButton-1Mdl9h7K.js";import{S as g}from"./SelectInput-CAO20tKw.js";import{A as R}from"./AuthenticatedLayout-DFpkwVPj.js";import"./transition-1oIjx2WC.js";import"./DarkModeToggle-BmCRQVkg.js";import"./Money-CmnXgzPo.js";function O({attributes:t}){const{data:l,setData:p,post:j,errors:n,processing:f,reset:v}=B({}),N=t.DataRekening,k=t.MyBCA,w=t.Bisnis,y=t.Foto,o=a=>{const{name:s,type:r}=a.target,d=r==="file"?a.target.files[0]:a.target.value;if(p(c=>({...c,[s]:d})),r==="file"&&d&&d.type.startsWith("image/")){const c=new FileReader;c.onload=D=>{p(S=>({...S,[`${s}_preview`]:D.target.result}))},c.readAsDataURL(d)}},u=a=>{a.preventDefault(),j(route("rekening.store"),l,{forceFormData:!0,onSuccess:()=>{v()}})},m=(a,s)=>{switch(a.type){case"select":return e.jsxs("div",{className:"mb-4 col-span-1",children:[e.jsx(x,{htmlFor:a.data,value:a.header}),e.jsxs(g,{id:a.data,name:a.data,value:l[a.data],onChange:o,children:[e.jsxs("option",{value:"",children:["Pilih ",a.header]}),a.options.map((r,d)=>e.jsx(g.Option,{value:r,children:r},d))]}),e.jsx(i,{message:n[a.data],className:"mt-2"})]},s);case"file":return e.jsxs("div",{className:"relative mb-4 col-span-3 sm:col-span-2",children:[l[a.path]&&e.jsx(x,{className:`${(l[a.path]||l[`${a.data}_preview`])&&"absolute max-w-fit"}  p-2 border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-slate-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm`,htmlFor:a.data,value:a.header}),l[`${a.data}_preview`]?e.jsx("img",{src:l[`${a.data}_preview`],alt:"Preview",className:"object-cover sm:w-full rounded-md p-2 bg-white dark:bg-slate-800"}):e.jsx("img",{src:`/storage/${l[a.path]}`,alt:a.header,className:"object-cover sm:w-full rounded-md p-2 bg-white dark:bg-slate-800"}),e.jsx(h,{id:a.data,type:"file",name:a.data,onChange:o,className:"mt-[.5rem] bg-white dark:bg-slate-800"}),e.jsx(i,{message:n[a.data],className:"mt-2"})]},s);case"text":return e.jsxs("div",{className:"mb-4 col-span-1",children:[e.jsx(x,{htmlFor:a.data,value:a.header}),e.jsx(h,{id:a.data,name:a.data,type:a.type,value:l[a.data],onChange:o,placeholder:a.header}),e.jsx(i,{message:n[a.data],className:"mt-2"})]},s);default:return e.jsxs("div",{className:"mb-4 col-span-1",children:[e.jsx(x,{htmlFor:a.data,value:a.header}),e.jsx(h,{id:a.data,name:a.data,type:a.type,value:l[a.data],onChange:o,placeholder:a.header}),e.jsx(i,{message:n[a.data],className:"mt-2"})]},s)}};return e.jsxs(R,{header:e.jsx("h2",{className:"font-semibold text-xl text-slate-800 dark:text-slate-200 leading-tight",children:"Tambah Data User"}),children:[e.jsx(F,{title:"Tambah Data User"}),e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 sm:my-[1rem]",children:e.jsxs("form",{className:"flex flex-col gap-4",onSubmit:u,encType:"multipart/form-data",children:[e.jsxs("div",{className:"p-6 text-slate-900 dark:text-slate-100 bg-white dark:bg-slate-800 shadow-sm sm:rounded-lg transition-all",children:[e.jsx("h2",{className:"mb-6 font-bold text-2xl text-slate-800 dark:text-slate-200 leading-tight",children:"Data Rekening"}),e.jsx("div",{className:"sm:grid grid-cols-2 gap-4",children:N.map((a,s)=>m(a,s))}),e.jsx("h2",{className:"mb-6 font-bold text-2xl text-slate-800 dark:text-slate-200 leading-tight",children:"My BCA"}),e.jsx("div",{className:"sm:grid grid-cols-2 gap-4",children:k.map((a,s)=>m(a,s))}),e.jsx("h2",{className:"mb-6 font-bold text-2xl text-slate-800 dark:text-slate-200 leading-tight",children:"Bisnis"}),e.jsx("div",{className:"sm:grid grid-cols-3 gap-4",children:w.map((a,s)=>m(a,s))})]}),e.jsxs("div",{className:"p-6 text-slate-900 dark:text-slate-100 transition-all",children:[e.jsx("h2",{className:"mb-6 font-bold text-2xl text-slate-800 dark:text-slate-200 leading-tight",children:"Foto"}),e.jsx("div",{className:"sm:grid grid-cols-4 gap-4",children:y.map((a,s)=>m(a,s))}),e.jsxs("div",{className:"flex pt-4 mt-4 gap-2 border-t-2 border-slate-600",children:[e.jsx(I,{disabled:f,type:"submit",children:"Simpan"}),e.jsx(C,{href:route("rekening.index"),as:"button",type:"button",children:e.jsx(A,{children:"Batal"})})]})]})]})})]})}export{O as default};