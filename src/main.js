import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/all.scss'

import App from './App.vue'
import router from './router'


import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import './assets/main.css'
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import {
  required,
  email,
  min,
  length,
  numeric,
  confirmed
} from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTw from '@vee-validate/i18n/dist/locale/zh_TW.json'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('length', length)
defineRule('numeric', numeric) // 必數字
defineRule('confirmed', confirmed) // 字串全等
configure({
  generateMessage: localize({
    zh_TW: zhTw
  }),
  validateOnInput: true
})
setLocale('zh_TW')

const app = createApp(App)
app.use(VueAxios, axios)
app.use(createPinia())
app.use(router)
// 全域組件
app.component('VueLoading', Loading);
app.component('VForm', Form)
app.component('VField', Field)
app.component('ErrorMessage', ErrorMessage)

app.mount('#app')
