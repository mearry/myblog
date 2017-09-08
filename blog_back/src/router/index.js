import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import main from '@/components/main'
import main_index from '@/components/page/main_index'


// 接口文档
import add_api from '@/components/page/api/api_insert'
import api_list_font from '@/components/page/api/api_list_font'
import api_list_back from '@/components/page/api/api_list_back'
import api_detail from '@/components/page/api/api_detail'
import api_amend from '@/components/page/api/api_amend'

// 分类管理
import add_class_one from '@/components/page/class/add_class_one'
import add_class_two from '@/components/page/class/add_class_two'
import listing from '@/components/page/listings'

//修改页面
import amentOne from '@/components/page/class/amentOne'


//文章管理
import add_article  from '@/components/page/article/add_article'
import list_article  from '@/components/page/article/list_article'

Vue.use(Router)
export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: login
    }, {
        path: '/main',
        component: main,
        children: [{
            path: '/',
            name: 'main_index',
            component: main_index,
        }, {
            path: 'add_class_one',
            name: 'add_class_one',
            component: add_class_one,
        }, {
            path: 'add_api',
            name: 'add_api',
            component: add_api,
        }, {
            path: 'api_list_font',
            name: 'api_list_font',
            component: api_list_font,
        }, {
            path: 'api_list_back',
            name: 'api_list_back',
            component: api_list_back,
        }, {
            path: 'api_detail',
            name: 'api_detail',
            component: api_detail,
        }, {
            path: 'api_amend',
            name: 'api_amend',
            component: api_amend,
        },
        {
            path: 'listing',
            name: 'listing',
            component: listing,
        },
        {
            path: 'add_class_two',
            name: 'add_class_two',
            component: add_class_two,
        },
         {
            path: 'add_article',
            name: 'add_article',
            component: add_article,
        },
        {
            path: 'amentOne',
            name: 'amentOne',
            component: amentOne,
        },
        {
            path: 'list_article',
            name: 'list_article',
            component: list_article,
        },
        ]
    }]
})