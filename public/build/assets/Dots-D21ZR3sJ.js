import{j as e,r as d,x as F}from"./app-Dj-x9gWf.js";import{r as v}from"./DarkModeToggle-BmCRQVkg.js";import{a as S}from"./AuthenticatedLayout-DFpkwVPj.js";import{f as I}from"./formatDateToIndonesia-CSaSNsCs.js";import{X as j}from"./transition-1oIjx2WC.js";import{P as k}from"./dialog-DFDsRvSU.js";var T=v.GenIcon,z=function(t){return T({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(t)};function D({...s}){return e.jsx(z,{...s})}function $({value:s,onChange:t}){return e.jsxs("form",{className:"flex items-center",children:[e.jsx("label",{htmlFor:"simple-search",className:"sr-only",children:"Search"}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",children:e.jsx(D,{className:"text-slate-500 dark:text-slate-400"})}),e.jsx("input",{type:"text",id:"simple-search",className:"bg-slate-100 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 transition-all",placeholder:"Search",required:"",value:s,onChange:t})]})]})}var H=v.GenIcon,M=function(t){return H({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z"}}]})(t)};function L({...s}){return e.jsx(M,{...s})}function G({onFilterChange:s,category:t}){const[l,i]=d.useState(!1),[m,p]=d.useState([]),f=r=>{const c=m.includes(r)?m.filter(x=>x!==r):[...m,r];p(c),s(c)};return e.jsxs("div",{className:"relative z-10",children:[e.jsxs("button",{onClick:()=>i(!l),"data-dropdown-toggle":"filterDropdown",className:"w-full md:w-auto flex items-center justify-center gap-2 py-2 px-4 text-sm font-medium text-slate-900 focus:outline-none bg-slate-100 rounded-lg border border-slate-200 hover:bg-slate-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-slate-200 dark:focus:ring-slate-700 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600 dark:hover:text-white dark:hover:bg-slate-700 transition-all",type:"button",children:[e.jsx(L,{}),"Filter",e.jsx(S,{})]}),e.jsxs("div",{id:"filterDropdown",className:`absolute ${!l&&"hidden"} sm:right-6 sm:top-8 ring-2 w-48 p-3 bg-white rounded-lg shadow dark:bg-slate-700`,children:[e.jsx("h6",{className:"mb-3 text-sm font-medium text-slate-900 dark:text-white",children:"Pilih Kategori"}),e.jsx("ul",{className:"space-y-2 text-sm grid grid-cols-2",children:t.map((r,c)=>e.jsxs("li",{className:"flex items-center",children:[e.jsx("input",{type:"checkbox",id:`category-${c}`,value:r,checked:m.includes(r),onChange:()=>f(r),className:"w-4 h-4 bg-slate-100 border-slate-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-slate-700 focus:ring-2 dark:bg-slate-600 dark:border-slate-500"}),e.jsx("label",{htmlFor:`category-${c}`,className:"ml-2 text-sm font-medium text-slate-900 dark:text-slate-100",children:r})]},c))})]})]})}function P({data:s}){const t=s.links;return e.jsx("ul",{className:"inline-flex items-stretch -space-x-px",children:t.map((l,i)=>e.jsx("li",{children:e.jsx(F,{href:l.url,className:`${l.active&&"text-indigo-100 dark:text-indigo-100 hover:text-indigo-50 bg-indigo-700 dark:bg-indigo-700 hover:bg-indigo-800 dark:hover:bg-indigo-500"}
                        ${i===0&&"rounded-l-md"}
                        ${i===t.length-1&&"rounded-r-md"}
                        flex items-center justify-center text-sm py-2 px-3 leading-tight text-slate-500 border border-slate-300 hover:bg-slate-100 hover:text-slate-700 bg-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white transition-all`,children:e.jsx("div",{dangerouslySetInnerHTML:{__html:l.label}})})},i))})}function V({data:s,field:t,attributes:l,filterCategory:i,TopTableLeft:m,TopTableRight:p,handeActionSelectedRow:f}){const[r,c]=d.useState(""),[x,y]=d.useState([]),[h,b]=d.useState([]),u=d.useMemo(()=>s.filter(a=>{const n=Object.values(a).some(g=>g&&g.toString().toLowerCase().includes(r.toLowerCase())),o=x.length===0||x.includes(a.bank);return n&&o}),[s,r,x]),w=a=>{y(a)},N=a=>{b(n=>n.includes(a)?n.filter(o=>o!==a):[...n,a])},C=()=>{if(h.length===u.length)b([]);else{const a=u.map(n=>n.id);b(a)}};return e.jsxs("div",{className:"p-2 bg-white dark:bg-slate-800 transition-all shadow-md sm:rounded-lg",children:[e.jsxs("header",{className:"flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4",children:[e.jsxs("div",{className:"flex justify-center items-center gap-4",children:[e.jsx($,{value:r,onChange:a=>c(a.target.value||"")}),e.jsx("button",{onClick:()=>{if(h.length===0){alert("Tidak ada data yang dipilih");return}f(h)},className:"inline-block bg-red-600 text-white p-2 rounded-lg",children:"Hapus"}),m]}),e.jsx("div",{className:"w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0",children:e.jsxs("div",{className:"flex items-center space-x-3 w-full md:w-auto",children:[i&&e.jsx(G,{category:i,onFilterChange:w}),p]})})]}),e.jsx("main",{className:"overflow-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-slate-50 dark:scrollbar-thumb-slate-600 dark:scrollbar-track-slate-400",children:u.length===0?e.jsx("div",{className:"text-center bg-red-400 dark:bg-red-600 h-[3rem] sm:h-[4rem] my-4 mx-2 sm:mx-8 flex justify-center items-center font-bold text-lg rounded-lg ring-2 ring-red-500 dark:ring-red-400 text-slate-50 dark:text-slate-100",children:"Tidak ada data !"}):e.jsxs("table",{className:"w-full text-sm text-left text-slate-500 dark:text-slate-400",children:[e.jsx("thead",{className:"text-xs text-slate-700 uppercase bg-slate-200 dark:bg-slate-700 dark:text-slate-400 transition-all",children:e.jsxs("tr",{children:[e.jsx("th",{className:"border-2 border-slate-300 dark:border-slate-800 px-4 py-3 whitespace-nowrap",children:e.jsx("input",{type:"checkbox",checked:h.length===u.length,onChange:C})}),l.map((a,n)=>e.jsx("th",{scope:"col",className:"border-2 border-slate-300 dark:border-slate-800 px-4 py-3 whitespace-nowrap",children:a.header},n))]})}),e.jsx("tbody",{className:"bg-white divide-y divide-slate-200 dark:bg-slate-800 dark:divide-slate-700 text-slate-800 dark:text-slate-100 transition-all",children:u.map((a,n)=>e.jsxs("tr",{className:"relative border-b-2 text-slate-800 dark:text-slate-200 dark:border-slate-700",children:[e.jsx("td",{className:"p-[1rem] whitespace-nowrap",children:e.jsx("input",{type:"checkbox",checked:h.includes(a.id),onChange:()=>N(a.id)})}),l.map((o,g)=>e.jsx("td",{className:"p-[1rem] whitespace-nowrap",children:(()=>{switch(o.type){case"date":return I(a[o.data]||"-");case"file":return a[o.data]?"Lihat Foto di Detail":"-";default:return e.jsx("div",{className:"max-w-[10rem] overflow-hidden overflow-ellipsis",children:a[o.data]||o.cell&&o.cell(a)||"-"})}})()},g))]},n))})]})}),e.jsxs("footer",{className:"flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4","aria-label":"Table navigation",children:[e.jsxs("span",{className:"flex gap-2 text-sm font-normal text-slate-500 dark:text-slate-400",children:["Showing",e.jsx("span",{className:"font-semibold text-slate-900 dark:text-white",children:t.from===null||t.to===null?"0":t.from+"-"+t.to}),"of",e.jsx("span",{className:"font-semibold text-slate-900 dark:text-white",children:t.total})]}),e.jsx(P,{data:t})]})]})}function X({isOpen:s,closeModal:t,onConfirm:l,itemName:i}){return e.jsx(j,{appear:!0,show:s,as:d.Fragment,children:e.jsxs(k,{as:"div",className:"relative z-10",onClose:t,children:[e.jsx(j.Child,{as:d.Fragment,enter:"ease-out duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-100",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-25"})}),e.jsx("div",{className:"fixed inset-0 overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-center justify-center p-4 text-center",children:e.jsx(j.Child,{as:d.Fragment,enter:"ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-100",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsxs(k.Panel,{className:"dark:bg-slate-800 w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all",children:[e.jsx(k.Title,{as:"h3",className:"text-lg font-medium leading-6 text-slate-900 dark:text-white",children:"Konfirmasi Penghapusan"}),e.jsx("div",{className:"mt-2",children:e.jsxs("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:['Apakah Anda yakin ingin menghapus data "',i,'"?']})}),e.jsxs("div",{className:"mt-4 flex justify-end space-x-2",children:[e.jsx("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2",onClick:l,children:"Hapus"}),e.jsx("button",{type:"button",className:"inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",onClick:t,children:"Batal"})]})]})})})})]})})}var O=v.GenIcon,_=function(t){return O({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"}}]})(t)};function W({...s}){return e.jsx(_,{...s})}export{X as D,G as F,V as T,W as a};
