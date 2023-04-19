import{_ as g,b as v,m as _,a as f,r as u,o as i,d as n,f as d,e as t,F as x,l as y,t as r,p as w,v as N,w as c,h as p}from"./index-46c9470e.js";import{c as h,l as C}from"./cartStore-f038000b.js";import"./sweetalert-5f610025.js";const k={data(){return{code:"",product:{},id:"",qty:1,isLoading:!1}},methods:{...v(h,["getCart","updateCart","deleteCart","deleteAllCart","addCouponCode"])},computed:{..._(h,["cart","total","final_total"]),..._(C,["loadingStatus"]),discount(){return this.total-this.final_total}},components:{RouterLink:f},mounted(){this.getCart(),this.isLoading=!0,setTimeout(()=>{this.isLoading=!1},500)}},j={class:"container"},T={key:0,class:"mt-3"},L=t("h3",{class:"mt-3 mb-4"},"購物車",-1),S={class:"row"},P={class:"col-md-8"},$={class:"text-end"},V={class:"table"},q=t("thead",null,[t("tr",null,[t("th",{scope:"col",class:"border-0 ps-0"},"商品資料"),t("th",{scope:"col",class:"border-0"},"數量"),t("th",{scope:"col",class:"border-0"},"價格"),t("th",{scope:"col",class:"border-0"})])],-1),A={class:"border-bottom border-top"},B={scope:"row",class:"border-0 px-0 font-weight-normal py-4"},R=["src","alt"],D={class:"mb-0 fw-bold ms-lg-3 d-inline-block"},O={class:"border-0 align-middle px-0",style:{"max-width":"160px"}},I={class:"input-group pe-lg-5"},z={class:"input-group-prepend"},F=["onClick","disabled"],H=t("i",{class:"bi bi-dash-lg"},null,-1),U=[H],E=["value"],J={class:"input-group-append"},K=["onClick","disabled"],Q=t("i",{class:"bi bi-plus-lg"},null,-1),Y=[Q],Z={class:"border-0 align-middle ps-4 ps-md-2"},M={class:"mb-0 ms-auto"},G={class:"border-0 align-middle px-0"},W=["onClick","disabled"],X=t("i",{class:"bi bi-x-lg"},null,-1),tt=[X],st={class:"col-md-4"},ot={class:"border p-4 mb-4"},dt=t("h4",{class:"fw-bold mb-4"},"訂單資訊",-1),et={class:"table text-muted border-bottom"},ct=t("th",{scope:"row",class:"border-0 px-0 pt-4 font-weight-normal"},"小計",-1),at={class:"text-end border-0 px-0 pt-4"},lt=t("tr",null,[t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"付款方式"),t("td",{class:"text-end border-0 px-0 pt-0 pb-4"},"信用卡")],-1),it=t("th",{scope:"row",class:"border-0 px-0 pt-0 pb-4 font-weight-normal"},"折扣金額",-1),nt={class:"text-end border-0 px-0 pt-0 pb-4"},rt={class:"input-group mb-3 input-group-sm"},_t={class:"input-group-append"},ut=["disabled"],pt={class:"d-flex justify-content-between mt-4"},ht=t("p",{class:"mb-0 h4 fw-bold"},"總計",-1),bt={class:"mb-0 h4 fw-bold"},mt=t("h4",{class:"fw-bold mt-1"},"你可能會有興趣 ...",-1),gt={class:"row my-4"},vt={class:"col-md-3"},ft={class:"card border-0 mb-4 cardProducts"},xt=t("img",{src:"https://greathunger.com.tw/images/images/activity2_20221202152957.jpg",class:"card-img-top rounded-0",alt:"能高安東軍縱走"},null,-1),yt=t("div",{class:"card-body text-start"},[t("h5",null,"水鹿的故鄉｜能高安東軍縱走"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text text-muted mb-0 h6"}," NT$12500 ")])],-1),wt={class:"col-md-3"},Nt={class:"card border-0 mb-4 cardProducts"},Ct=t("img",{src:"https://greathunger.com.tw/images/images/activity8_20221114191552.jpg",class:"card-img-top rounded-0",alt:"戒茂斯上嘉明湖"},null,-1),kt=t("div",{class:"card-body text-start"},[t("h5",null,"天使的眼淚｜戒茂斯上嘉明湖"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text text-muted mb-0 h6"}," NT$4500 ")])],-1),jt={class:"col-md-3"},Tt={class:"card border-0 mb-4 cardProducts"},Lt=t("img",{src:"https://greathunger.com.tw/images/images/activity0_20221115212626.jpg",class:"card-img-top rounded-0",alt:"加羅湖"},null,-1),St=t("div",{class:"card-body text-start"},[t("h5",null,"散落的珍珠｜加羅湖"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text text-muted mb-0 h6"}," NT$4380 ")])],-1),Pt={class:"col-md-3"},$t={class:"card border-0 mb-4 cardProducts"},Vt=t("img",{src:"https://greathunger.com.tw/images/activity_20221115211124.jpg",class:"card-img-top rounded-0",alt:"水漾森林"},null,-1),qt=t("div",{class:"card-body text-start"},[t("h5",null,"即將消失的秘境｜水漾森林"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text text-muted mb-0 h6"}," NT$4500 ")])],-1),At={key:1},Bt=t("h2",{class:"mt-5"},"購物車目前是空的，快來挑選商品吧！",-1),Rt=t("h4",{class:"fw-bold mt-5"},"你可能會有興趣 ...",-1),Dt={class:"row mt-4 mb-5"},Ot={class:"col-md-3"},It={class:"card border-0 mb-4 cardProducts"},zt=t("img",{src:"https://greathunger.com.tw/images/images/activity2_20221202152957.jpg",class:"card-img-top rounded-0",alt:"能高安東軍縱走"},null,-1),Ft=t("div",{class:"card-body text-start"},[t("h5",null,"水鹿的故鄉｜能高安東軍縱走"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text text-muted mb-0 h6"}," NT$12500 ")])],-1),Ht={class:"col-md-3"},Ut={class:"card border-0 mb-4 cardProducts"},Et=t("img",{src:"https://greathunger.com.tw/images/images/activity8_20221114191552.jpg",class:"card-img-top rounded-0",alt:"戒茂斯上嘉明湖"},null,-1),Jt=t("div",{class:"card-body text-start"},[t("h5",null,"天使的眼淚｜戒茂斯上嘉明湖"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text text-muted mb-0 h6"}," NT$4500 ")])],-1),Kt={class:"col-md-3"},Qt={class:"card border-0 mb-4 cardProducts"},Yt=t("img",{src:"https://greathunger.com.tw/images/images/activity0_20221115212626.jpg",class:"card-img-top rounded-0",alt:"加羅湖"},null,-1),Zt=t("div",{class:"card-body text-start"},[t("h5",null,"散落的珍珠｜加羅湖"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text text-muted mb-0 h6"}," NT$4380 ")])],-1),Mt={class:"col-md-3"},Gt={class:"card border-0 mb-4 cardProducts"},Wt=t("img",{src:"https://greathunger.com.tw/images/activity_20221115211124.jpg",class:"card-img-top rounded-0",alt:"水漾森林"},null,-1),Xt=t("div",{class:"card-body text-start"},[t("h5",null,"即將消失的秘境｜水漾森林"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text text-muted mb-0 h6"}," NT$4500 ")])],-1);function ts(o,a,ss,os,l,b){const m=u("VueLoading"),e=u("RouterLink");return i(),n("div",j,[d(m,{active:l.isLoading,"onUpdate:active":a[0]||(a[0]=s=>l.isLoading=s)},null,8,["active"]),o.cart.length?(i(),n("div",T,[L,t("div",S,[t("div",P,[t("div",$,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:a[1]||(a[1]=()=>o.deleteAllCart())},"清空購物車")]),t("table",V,[q,(i(!0),n(x,null,y(o.cart,s=>(i(),n("tbody",{key:s.id},[t("tr",A,[t("th",B,[t("img",{src:s.product.imageUrl,alt:s.product.title,style:{width:"72px",height:"72px","object-fit":"cover"}},null,8,R),t("p",D,r(s.product.title),1)]),t("td",O,[t("div",I,[t("div",z,[t("button",{class:"btn btn-outline-dark border-0 py-2 px-0 px-md-2",type:"button",id:"button-addon1",onClick:()=>o.updateCart(s,"reduce"),disabled:o.loadingStatus===s.id||s.qty===1},U,8,F)]),t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1",readonly:"",value:s.qty},null,8,E),t("div",J,[t("button",{class:"btn btn-outline-dark border-0 py-2 ps-0 pe-0 px-md-2",type:"button",id:"button-addon2",onClick:()=>o.updateCart(s,"increase"),disabled:o.loadingStatus===s.id},Y,8,K)])])]),t("td",Z,[t("p",M,"NT$"+r(s.product.price),1)]),t("td",G,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:()=>o.deleteCart(s),disabled:o.loadingStatus===s.id},tt,8,W)])])]))),128))])]),t("div",st,[t("div",ot,[dt,t("table",et,[t("tbody",null,[t("tr",null,[ct,t("td",at,"NT$"+r(o.total),1)]),lt,t("tr",null,[it,t("td",nt,"NT$"+r(b.discount),1)])])]),t("div",rt,[w(t("input",{type:"text",class:"form-control",placeholder:"請輸入優惠碼 VIP777","onUpdate:modelValue":a[2]||(a[2]=s=>l.code=s)},null,512),[[N,l.code]]),t("div",_t,[t("button",{class:"btn btn-outline-primary",style:{"border-top-left-radius":"0%","border-bottom-left-radius":"0%"},type:"button",onClick:a[3]||(a[3]=s=>o.addCouponCode(l.code)),disabled:o.loadingStatus===l.code}," 套用優惠碼 ",8,ut)])]),t("div",pt,[ht,t("p",bt,"NT$"+r(o.final_total),1)]),d(e,{to:"/form",class:"btn btn-dark w-100 mt-4"},{default:c(()=>[p("前往結帳")]),_:1})])])]),mt,t("div",gt,[t("div",vt,[t("div",ft,[d(e,{to:"/product/-NN0TN0Oy7quf2LBeINs"},{default:c(()=>[xt]),_:1}),yt])]),t("div",wt,[t("div",Nt,[d(e,{to:"/product/-NKpwDun9A4lFDuSlmJL"},{default:c(()=>[Ct]),_:1}),kt])]),t("div",jt,[t("div",Tt,[d(e,{to:"/product/-NR2IkrzZx0QBHqSbOca"},{default:c(()=>[Lt]),_:1}),St])]),t("div",Pt,[t("div",$t,[d(e,{to:"/product/-NR2CbYAl8zohH3Px7O1"},{default:c(()=>[Vt]),_:1}),qt])])])])):(i(),n("div",At,[Bt,d(e,{class:"btn btn-primary my-5 text-end",to:"/products"},{default:c(()=>[p(" 查看行程 ")]),_:1}),Rt,t("div",Dt,[t("div",Ot,[t("div",It,[d(e,{to:"/product/-NN0TN0Oy7quf2LBeINs"},{default:c(()=>[zt]),_:1}),Ft])]),t("div",Ht,[t("div",Ut,[d(e,{to:"/product/-NKpwDun9A4lFDuSlmJL"},{default:c(()=>[Et]),_:1}),Jt])]),t("div",Kt,[t("div",Qt,[d(e,{to:"/product/-NR2IkrzZx0QBHqSbOca"},{default:c(()=>[Yt]),_:1}),Zt])]),t("div",Mt,[t("div",Gt,[d(e,{to:"/product/-NR2CbYAl8zohH3Px7O1"},{default:c(()=>[Wt]),_:1}),Xt])])])]))])}const as=g(k,[["render",ts]]);export{as as default};
