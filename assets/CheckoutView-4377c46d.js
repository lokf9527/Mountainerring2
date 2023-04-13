import{_ as v,a as w,b as k,m as L,r as I,o as l,d as a,e as t,k as T,F as V,l as E,t as e,j as O,h as f,f as R,w as S,n as C,g as N}from"./index-1db2262d.js";import{s as c,c as b}from"./cartStore-9d53360f.js";import"./sweetalert2.all-82ac8f21.js";const{VITE_URL:g,VITE_PATH:x}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ph",BASE_URL:"/Mountainerring2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},$={data(){return{order:{products:[],user:{}},orderId:""}},components:{RouterLink:w},methods:{getOrder(){this.isLoading=!0,this.$http.get(`${g}/v2/api/${x}/order/${this.orderId}`).then(i=>{this.isLoading=!1;const{order:o}=i.data;this.order=o}).catch(i=>{var n,d;const o=((d=(n=i.response)==null?void 0:n.data)==null?void 0:d.message)||"資料錯誤";c.fire({title:`${o}`,icon:"error"}),this.isLoading=!1})},payOrder(){this.isLoading=!0,this.$http.post(`${g}/v2/api/${x}/pay/${this.orderId}`).then(()=>{this.isLoading=!1,c.fire({title:"付款成功",icon:"success"}),this.getOrder(),this.getCart()}).catch(i=>{var n,d;const o=((d=(n=i.response)==null?void 0:n.data)==null?void 0:d.message)||"資料錯誤";c.fire({title:`${o}`,icon:"error"}),this.isLoading=!1})},...k(b,["getCart"])},computed:{...L(b,["cart","total","final_total"]),discount(){return(this.total-this.final_total).toFixed(2)}},mounted(){this.orderId=this.$route.params.orderId,this.getOrder()}},j={class:"container"},M={class:"my-5 mx-1 row justify-content-center w-100"},A={class:"col-md-6"},B={class:"card rounded-0 py-4 mb-3"},D=t("div",{class:"card-header border-bottom-0 bg-white px-4 py-0"},[t("h2",null,"訂單資訊")],-1),P={class:"card-body px-4 py-0"},U={class:"list-group list-group-flush"},z={class:"d-flex mt-2"},F={class:"w-100 d-flex flex-column"},H={class:"d-flex justify-content-between fw-bold"},q={class:"mb-0"},G={class:"d-flex justify-content-between mt-auto"},J={class:"text-muted mb-0"},K={class:"mb-0"},Q={class:"list-group-item px-0 pb-0"},W=t("table",{class:"table text-muted"},[t("tbody",null,[t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 font-weight-normal"}," Payment "),t("td",{class:"text-end border-0 px-0 pt-0"},"信用卡")])])],-1),X={class:"d-flex justify-content-between mt-2"},Y=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),Z={class:"mb-0 h4 fw-bold"},tt={class:"card rounded-0 p-3"},st={class:"table"},et=t("th",{width:"100"},"Email",-1),ot=t("th",null,"姓名",-1),rt=t("th",null,"收件人電話",-1),it=t("th",null,"收件人地址",-1),nt=t("th",null,"付款狀態",-1),dt={key:0,class:"d-flex mt-4 justify-content-between align-items-md-center align-items-end w-100"},lt=t("button",{type:"submit",class:"btn btn-primary"},"確認付款",-1),at=[lt],ct={key:0,class:"text-end"};function ut(i,o,n,d,s,u){const y=I("RouterLink");return l(),a("div",j,[t("div",M,[t("div",A,[t("form",{onSubmit:o[0]||(o[0]=T((...r)=>u.payOrder&&u.payOrder(...r),["prevent"]))},[t("div",B,[D,t("div",P,[t("ul",U,[(l(!0),a(V,null,E(s.order.products,r=>{var _,h,p,m;return l(),a("li",{key:r.id,class:"list-group-item px-0"},[t("div",z,[t("div",{style:C([{width:"65px","max-height":"60px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${(_=r.product)==null?void 0:_.imageUrl})`}]),class:"rounded-0 me-3"},null,4),t("div",F,[t("div",H,[t("h5",null,e((h=r.product)==null?void 0:h.title),1),t("p",q,"x"+e(r.qty),1)]),t("div",G,[t("p",J,[t("small",null," NT$"+e((p=r.product)==null?void 0:p.price),1)]),t("p",K," NT$"+e((m=r.product)==null?void 0:m.price),1)])])])])}),128)),t("li",Q,[W,t("div",X,[Y,t("p",Z," NT$"+e(s.order.total),1)])])])])]),t("div",tt,[t("table",st,[t("tbody",null,[t("tr",null,[et,t("td",null,e(s.order.user.email),1)]),t("tr",null,[ot,t("td",null,e(s.order.user.name),1)]),t("tr",null,[rt,t("td",null,e(s.order.user.tel),1)]),t("tr",null,[it,t("td",null,e(s.order.user.address),1)]),t("tr",null,[nt,t("td",null,[t("span",{class:O({"text-success":s.order.is_paid})},e(s.order.is_paid?"付款完成":"尚未付款"),3)])])])])]),s.order.is_paid===!1?(l(),a("div",dt,at)):f("",!0)],32),s.order.is_paid?(l(),a("div",ct,[R(y,{to:"/",class:"btn btn-primary me-2 my-4"},{default:S(()=>[N(" 回首頁 ")]),_:1})])):f("",!0)])])])}const mt=v($,[["render",ut]]);export{mt as default};
