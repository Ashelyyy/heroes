// 导入vue-router
import VueRouter from 'vue-router';
// 导入Vue
import Vue from 'vue';
// 导入组件
import HeroesList from '../views/heroes/List.vue';
import HeroesAdd  from '../views/heroes/Add.vue';
import HeroesEdit  from '../views/heroes/Edit.vue';
import EquipsList from '../views/equips/List.vue';
import WeaponsList  from '../views/weapons/List.vue';


// 注册VueRouter插件
Vue.use(VueRouter);

// 创建路由对象
var router = new VueRouter({

  // 配置激活的类样式
  // 路由地址只要包含a标签的href属性值,就显示高亮
  linkActiveClass: 'active',

  // 路由地址和a标签的href属性值完全一致,就显示高亮
  // linkExactActiveClass: 'active',

  // 路由规则
  routes: [
    { path: '/', redirect: '/heroes' },
    { name: 'heroes', path: '/heroes', component: HeroesList },
    { name: 'heroadd', path: '/heroes/add', component: HeroesAdd },
    { name: 'heroedit', path: '/heroes/:id', component: HeroesEdit, props: true },
    { name: 'equips', path: '/equips', component: EquipsList },
    { name: 'weapons', path: '/weapons', component: WeaponsList }
  ]
});

// 导出路由
export default router;

