import Vue from 'vue'
import {Button,
  ButtonGroup,
  Container,
  Aside,
  Main,
  Dialog,
  Input,
  Switch,
  Notification} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/el-style/index.css'

Vue.use(Button)
Vue.use(ButtonGroup)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(Switch)
Vue.prototype.$Notification = Notification

