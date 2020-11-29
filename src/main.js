import Vue from 'vue'
import App from './App.vue'
import { Button } from 'vant';

import VueRouter from "vue-router";
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Button);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
import firstcomponent from './component/first_component.vue'
import secondcomponent from './component/second_component.vue'
import thirdcomponent from './component/third_component.vue'
import fourthcomponent from './component/four_component.vue'

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/first',
      component: firstcomponent
    },
    {
      path: '/second',
      component: secondcomponent
    },
    {
      path: '/third',
      component: thirdcomponent
    },
    {
      path: '/four',
      component: fourthcomponent
    },
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
