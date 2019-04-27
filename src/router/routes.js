import Msite from '../pages/Msite/Msite'
import Order from '../pages/Order/Order'
import Search from '../pages/Search/Search'
import Profile from '../pages/Profile/Profile'
import Login from "../pages/Login/Login"
import Shop from "../pages/Shop/Shop"
import Goods from "../pages/Shop/Goods/Goods"
import Info from "../pages/Shop/Info/Info"
import Ratings from "../pages/Shop/Ratings/Ratings"




export default [
  {
    path: '/msite',
    component: Msite,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/order',
    component: Order,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      isShowFooter: false
    }
  },
  {
    path: '/shop',
    component: Shop,
    children: [
      {
        path: '/shop/goods',
        component: Goods,
      },
      {
        path: '/shop/ratings',
        component: Ratings,
      },{
        path: '/shop/info',
        component: Info,
      },
    ]
  },
  {
    path: '/',
    redirect: '/msite'
  }
]

