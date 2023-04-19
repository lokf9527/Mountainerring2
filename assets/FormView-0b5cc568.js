import{_ as v,b as V,a as g,m as x,r as d,o as k,d as E,e,f as t,w as f,j as n,p as S,v as w,h as y}from"./index-42dca719.js";import{c as R,l as T}from"./cartStore-5dc8c455.js";import{s as p}from"./sweetalert-12376531.js";const{VITE_URL:U,VITE_PATH:P}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ph",BASE_URL:"/Mountainerring2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},C={data(){return{data:{user:{email:"",name:"",tel:"",address:""},message:""},isProcessing:!1}},methods:{createtOrder(){this.isProcessing=!0;const c=this.data;this.$http.post(`${U}/v2/api/${P}/order`,{data:c}).then(s=>{const{orderId:m,message:u}=s.data;this.isProcessing=!1,p.fire({title:`${u}`,icon:"success"}),this.getCart(),this.$router.push(`/checkout/${m}`)}).catch(()=>{p.fire({title:"無法新增訂單，請確認資料是否填寫完整",icon:"error"})})},...V(R,["getCart"])},components:{RouterLink:g},computed:{...x(T,["loadingStatus"])}},L={class:"container"},I={class:"my-5 row justify-content-center"},O={class:"mb-3"},q=e("label",{for:"email",class:"form-label"},"Email",-1),A={class:"mb-3"},B=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),D={class:"mb-3"},M=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),N={class:"mb-3"},j=e("label",{for:"address",class:"form-label"},"收件人地址",-1),H={class:"mb-3"},z=e("label",{for:"message",class:"form-label"},"留言",-1),F={class:"row"},G={class:"text-start col"},J={class:"text-end col"},K=["disabled"];function Q(c,s,m,u,a,_){const l=d("v-field"),r=d("error-message"),b=d("RouterLink"),h=d("v-form");return k(),E("div",L,[e("div",I,[t(h,{class:"col-md-6",onSubmit:_.createtOrder},{default:f(({errors:i})=>[e("div",O,[q,t(l,{id:"email",name:"email",type:"email",class:n(["form-control",{"is-invalid":i.email}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:a.data.user.email,"onUpdate:modelValue":s[0]||(s[0]=o=>a.data.user.email=o)},null,8,["class","modelValue"]),t(r,{name:"email",class:"invalid-feedback"})]),e("div",A,[B,t(l,{id:"name",name:"姓名",type:"text",class:n(["form-control",{"is-invalid":i.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:a.data.user.name,"onUpdate:modelValue":s[1]||(s[1]=o=>a.data.user.name=o)},null,8,["class","modelValue"]),t(r,{name:"姓名",class:"invalid-feedback"})]),e("div",D,[M,t(l,{id:"tel",name:"電話",type:"tel",class:n(["form-control",{"is-invalid":i.電話}]),placeholder:"請輸入電話",rules:"required",modelValue:a.data.user.tel,"onUpdate:modelValue":s[2]||(s[2]=o=>a.data.user.tel=o)},null,8,["class","modelValue"]),t(r,{name:"電話",class:"invalid-feedback"})]),e("div",N,[j,t(l,{id:"address",name:"地址",type:"text",class:n(["form-control",{"is-invalid":i.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:a.data.user.address,"onUpdate:modelValue":s[3]||(s[3]=o=>a.data.user.address=o)},null,8,["class","modelValue"]),t(r,{name:"地址",class:"invalid-feedback"})]),e("div",H,[z,S(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=o=>a.data.message=o)},null,512),[[w,a.data.message]])]),e("div",F,[e("div",G,[t(b,{to:"/cart",class:"btn btn-danger"},{default:f(()=>[y("回購物車")]),_:1})]),e("div",J,[e("button",{type:"submit",class:"btn btn-primary",onClick:s[5]||(s[5]=()=>_.createtOrder()),disabled:a.isProcessing}," 送出訂單",8,K)])])]),_:1},8,["onSubmit"])])])}const Z=v(C,[["render",Q]]);export{Z as default};