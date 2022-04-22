import{H as k,a as x}from"./index.30ab558b.js";import{o as s,c as b,a as l,_ as w,H as m,m as o,q as e,B as n,A as a,F as h,z as _,G as i}from"./index.74d19a4d.js";function v(t,r){return s(),b("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},[l("path",{"fill-rule":"evenodd",d:"M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z","clip-rule":"evenodd"})])}const y={data(){return{mount:!1}},components:{Header:k,ArrowNarrowLeftIcon:v},mounted(){var t={method:"get",url:`https://restcountries.com/v2/name/${this.$route.query.country}`,headers:{}};x(t).then(r=>{this.countries=r.data,this.mount=!0}).catch(function(r){console.log(r)})},methods:{goHome(){this.$router.push("/")}}},N={key:0},H={class:"lg:mt-40 mt-28 lg:mx-32 mx-4 pb-10"},L={class:"flex"},B=e("p",null,"Back",-1),C={class:"mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-28"},D=["src"],A={class:"flex flex-col justify-center gap-2"},V={class:"dark:text-white text-black text-2xl font-bold"},$={class:"grid lg:grid-cols-2 grid-cols-1 gap-y-10"},I={class:"mt-4 dark:text-white text-black text-sm font-semibold"},j=i("Native Name: "),q={key:0,class:"font-medium"},z={class:"mt-4 dark:text-white text-black text-sm font-semibold"},F=i("Population: "),R={key:0,class:"font-medium"},S={class:"mt-4 dark:text-white text-black text-sm font-semibold"},T=i("Region: "),E={key:0,class:"font-medium"},G={class:"mt-4 dark:text-white text-black text-sm font-semibold"},M=i("Sub Region: "),P={key:0,class:"font-medium"},J={class:"mt-4 dark:text-white text-black text-sm font-semibold"},K=i("Capital: "),O={key:0,class:"font-medium"},Q={class:"mt-4 dark:text-white text-black text-sm font-semibold"},U=i("Top Level Domain: "),W={key:0,class:"font-medium"},X={class:"mt-4 dark:text-white text-black text-sm font-semibold"},Y=i("Currencies: "),Z={key:0,class:"font-medium"},ee={class:"mt-4 dark:text-white text-black text-sm font-semibold"},te=i("Languages: "),se={class:"lg:col-span-2 mt-4 flex items-center gap-2"},oe=e("h3",{class:"dark:text-white text-black text-sm font-semibold"},"Border Countries:",-1),ne={class:"flex flex-wrap gap-2"};function ae(t,r,ie,re,p,u){const f=m("Header"),g=m("ArrowNarrowLeftIcon");return p.mount?(s(),o("div",N,[l(f),e("main",H,[e("div",L,[e("div",{class:"shadow-3xl-dark dark:bg-header-dark flex py-[0.35rem] px-6 items-center justify-center gap-4 rounded-lg cursor-pointer dark:text-gray-200 text-black",onClick:r[0]||(r[0]=(...d)=>u.goHome&&u.goHome(...d))},[l(g,{class:"h-5 w-5"}),B])]),e("div",C,[e("img",{src:t.countries[0].flag,class:"w-full",alt:""},null,8,D),e("div",A,[e("h1",V,n(t.countries[0].name),1),e("div",$,[e("div",null,[e("p",I,[j,t.countries[0].nativeName!=null?(s(),o("span",q,n(t.countries[0].nativeName),1)):a("",!0)]),e("p",z,[F,t.countries[0].population!=null?(s(),o("span",R,n(t.countries[0].population),1)):a("",!0)]),e("p",S,[T,t.countries[0].region!=null?(s(),o("span",E,n(t.countries[0].region),1)):a("",!0)]),e("p",G,[M,t.countries[0].subregion!=null?(s(),o("span",P,n(t.countries[0].subregion),1)):a("",!0)]),e("p",J,[K,t.countries[0].capital!=null?(s(),o("span",O,n(t.countries[0].capital),1)):a("",!0)])]),e("div",null,[e("p",Q,[U,t.countries[0].topLevelDomain!=null?(s(),o("span",W,n(t.countries[0].topLevelDomain[0]),1)):a("",!0)]),e("p",X,[Y,t.countries[0].currencies!=null?(s(),o("span",Z,n(t.countries[0].currencies[0].code),1)):a("",!0)]),e("p",ee,[te,(s(!0),o(h,null,_(t.countries[0].languages,(d,c)=>(s(),o("span",{class:"font-medium",key:c},n(d.nativeName)+", ",1))),128))])]),e("div",se,[oe,e("div",ne,[(s(!0),o(h,null,_(t.countries[0].borders,(d,c)=>(s(),o("div",{key:c,class:"px-4 py-1 text-center text-xs font-semibold shadow-3xl bg-white dark:bg-header-dark rounded-md dark:text-white"},n(d),1))),128))])])])])])])])):a("",!0)}var le=w(y,[["render",ae]]);export{le as default};
