import{_ as v,b as V,a as g,m as x,r as d,o as k,d as E,e,f as a,w as p,j as c,p as P,v as S,h as w}from"./index-bd14b04a.js";import{c as y,l as R}from"./cartStore-49c01826.js";import{s as f}from"./sweetalert-c419e3fa.js";const{VITE_URL:T,VITE_PATH:U}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ph",BASE_URL:"/Mountainerring2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},C={data(){return{data:{user:{email:"",name:"",tel:"",address:""},message:""},isProcessing:!1}},methods:{createtOrder(){this.isProcessing=!0;const l=this.data;this.$http.post(`${T}/v2/api/${U}/order`,{data:l}).then(s=>{const{orderId:u,message:_}=s.data;this.isProcessing=!1,f.fire({title:`${_}`,icon:"success"}),this.getCart(),this.$router.push(`/checkout/${u}`)}).catch(()=>{f.fire({title:"無法新增訂單，請確認資料是否填寫完整",icon:"error"})})},isPhone(l){return/^(09)[0-9]{8}$/.test(l)?!0:"需要正確的電話號碼"},...V(y,["getCart"])},components:{RouterLink:g},computed:{...x(R,["loadingStatus"])}},L={class:"container"},I={class:"my-5 row justify-content-center"},N={class:"mb-3"},O=e("label",{for:"email",class:"form-label"},"Email",-1),A={class:"mb-3"},B=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),D={class:"mb-3"},q=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),M={class:"mb-3"},j=e("label",{for:"address",class:"form-label"},"收件人地址",-1),H={class:"mb-3"},z=e("label",{for:"message",class:"form-label"},"留言",-1),F={class:"row"},G={class:"text-start col"},J={class:"text-end col"},K=["disabled"];function Q(l,s,u,_,t,m){const r=d("v-field"),i=d("error-message"),b=d("RouterLink"),h=d("v-form");return k(),E("div",L,[e("div",I,[a(h,{class:"col-md-6",onSubmit:m.createtOrder},{default:p(({errors:n})=>[e("div",N,[O,a(r,{id:"email",name:"email",type:"email",class:c(["form-control",{"is-invalid":n.email}]),placeholder:"請輸入 Email",rules:"required|email",modelValue:t.data.user.email,"onUpdate:modelValue":s[0]||(s[0]=o=>t.data.user.email=o)},null,8,["class","modelValue"]),a(i,{name:"email",class:"invalid-feedback"})]),e("div",A,[B,a(r,{id:"name",name:"姓名",type:"text",class:c(["form-control",{"is-invalid":n.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:t.data.user.name,"onUpdate:modelValue":s[1]||(s[1]=o=>t.data.user.name=o)},null,8,["class","modelValue"]),a(i,{name:"姓名",class:"invalid-feedback"})]),e("div",D,[q,a(r,{id:"tel",name:"電話",type:"tel",class:c(["form-control",{"is-invalid":n.電話}]),placeholder:"請輸入電話",rules:m.isPhone,modelValue:t.data.user.tel,"onUpdate:modelValue":s[2]||(s[2]=o=>t.data.user.tel=o)},null,8,["class","rules","modelValue"]),a(i,{name:"電話",class:"invalid-feedback"})]),e("div",M,[j,a(r,{id:"address",name:"地址",type:"text",class:c(["form-control",{"is-invalid":n.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:t.data.user.address,"onUpdate:modelValue":s[3]||(s[3]=o=>t.data.user.address=o)},null,8,["class","modelValue"]),a(i,{name:"地址",class:"invalid-feedback"})]),e("div",H,[z,P(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[4]||(s[4]=o=>t.data.message=o)},null,512),[[S,t.data.message]])]),e("div",F,[e("div",G,[a(b,{to:"/cart",class:"btn btn-danger"},{default:p(()=>[w("回購物車")]),_:1})]),e("div",J,[e("button",{type:"submit",class:"btn btn-primary",onClick:s[5]||(s[5]=()=>m.createtOrder()),disabled:t.isProcessing}," 送出訂單 ",8,K)])])]),_:1},8,["onSubmit"])])])}const Z=v(C,[["render",Q]]);export{Z as default};
