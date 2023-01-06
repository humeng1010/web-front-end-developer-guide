import {
    Button,
    Tabbar,
    TabbarItem,
    Search,
    Icon,
    Tab, Tabs,
    PullRefresh
} from 'vant';
export default {
    install(Vue) {
        Vue.use(Button)
        Vue.use(Tabbar);
        Vue.use(TabbarItem);
        Vue.use(Search)
        Vue.use(Icon)
        Vue.use(Tab);
        Vue.use(Tabs);
        Vue.use(PullRefresh)
    }
}