import{_ as b,a as g,b as x,m as y,r as v,o as l,d as c,e as t,j as w,F as k,k as I,t as e,i as T,h as _,f as V,w as E,n as O,g as P}from"./index-00ec6d4b.js";import{s as a}from"./sweetalert-9b455ef7.js";import{c as h}from"./cartStore-0324d56c.js";const{VITE_URL:p,VITE_PATH:m}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ph",BASE_URL:"/Mountainerring2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={data(){return{order:{products:[],user:{}},orderId:"",isProcessing:!1}},components:{RouterLink:g},methods:{getOrder(){this.$http.get(`${p}/v2/api/${m}/order/${this.orderId}`).then(n=>{const{order:o}=n.data;this.order=o}).catch(n=>{var i,d;const o=((d=(i=n.response)==null?void 0:i.data)==null?void 0:d.message)||"資料錯誤";a.fire({title:`${o}`,icon:"error"})})},payOrder(){this.isProcessing=!0,this.$http.post(`${p}/v2/api/${m}/pay/${this.orderId}`).then(()=>{this.isProcessing=!1,a.fire({title:"付款成功",icon:"success"}),this.getOrder(),this.getCart()}).catch(n=>{var i,d;const o=((d=(i=n.response)==null?void 0:i.data)==null?void 0:d.message)||"資料錯誤";a.fire({title:`${o}`,icon:"error"})})},...x(h,["getCart"])},computed:{...y(h,["cart","total","final_total"]),discount(){return this.total-this.final_total}},mounted(){this.orderId=this.$route.params.orderId,this.getOrder()}},S={class:"container"},C={class:"my-5 mx-1 row justify-content-center w-100"},L={class:"col-md-6"},N={class:"card rounded-0 py-4 mb-3"},j=t("div",{class:"card-header border-bottom-0 bg-white px-4 py-0"},[t("h2",null,"訂單資訊")],-1),$={class:"card-body px-4 py-0"},M={class:"list-group list-group-flush"},A={class:"d-flex mt-2"},B={class:"w-100 d-flex flex-column"},D={class:"d-flex justify-content-between fw-bold"},U={class:"mb-0"},z={class:"d-flex justify-content-between mt-auto"},F={class:"text-muted mb-0"},H={class:"mb-0"},q={class:"list-group-item px-0 pb-0"},G=t("table",{class:"table text-muted"},[t("tbody",null,[t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 font-weight-normal"},"Payment"),t("td",{class:"text-end border-0 px-0 pt-0"},"信用卡")])])],-1),J={class:"d-flex justify-content-between mt-2"},K=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),Q={class:"mb-0 h4 fw-bold"},W={class:"card rounded-0 p-3"},X={class:"table"},Y=t("th",{width:"100"},"Email",-1),Z=t("th",null,"姓名",-1),tt=t("th",null,"收件人電話",-1),st=t("th",null,"收件人地址",-1),et=t("th",null,"付款狀態",-1),ot={key:0,class:"d-flex mt-4 justify-content-between align-items-md-center align-items-end w-100"},rt=["disabled"],nt={key:0,class:"text-end"};function it(n,o,i,d,s,u){const f=v("RouterLink");return l(),c("div",S,[t("div",C,[t("div",L,[t("form",{onSubmit:o[0]||(o[0]=w((...r)=>u.payOrder&&u.payOrder(...r),["prevent"]))},[t("div",N,[j,t("div",$,[t("ul",M,[(l(!0),c(k,null,I(s.order.products,r=>(l(),c("li",{key:r.id,class:"list-group-item px-0"},[t("div",A,[t("div",{style:O([{width:"65px","max-height":"60px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${r.product.imageUrl})`}]),class:"rounded-0 me-3"},null,4),t("div",B,[t("div",D,[t("h5",null,e(r.product.title),1),t("p",U,"x"+e(r.qty),1)]),t("div",z,[t("p",F,[t("small",null,"NT$"+e(r.product.price),1)]),t("p",H,"NT$"+e(r.final_total),1)])])])]))),128)),t("li",q,[G,t("div",J,[K,t("p",Q,"NT$"+e(s.order.total),1)])])])])]),t("div",W,[t("table",X,[t("tbody",null,[t("tr",null,[Y,t("td",null,e(s.order.user.email),1)]),t("tr",null,[Z,t("td",null,e(s.order.user.name),1)]),t("tr",null,[tt,t("td",null,e(s.order.user.tel),1)]),t("tr",null,[st,t("td",null,e(s.order.user.address),1)]),t("tr",null,[et,t("td",null,[t("span",{class:T({"text-success":s.order.is_paid})},e(s.order.is_paid?"付款完成":"尚未付款"),3)])])])])]),s.order.is_paid===!1?(l(),c("div",ot,[t("button",{type:"submit",class:"btn btn-primary",disabled:s.isProcessing},"確認付款",8,rt)])):_("",!0)],32),s.order.is_paid?(l(),c("div",nt,[V(f,{to:"/",class:"btn btn-primary me-2 my-4"},{default:E(()=>[P("回首頁")]),_:1})])):_("",!0)])])])}const at=b(R,[["render",it]]);export{at as default};
