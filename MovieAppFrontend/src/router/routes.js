
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      authAdmin: true
    },
    children: [
      { path: '', name: 'dashboardAdmin', component: () => import('src/pages/Admin/Index.vue') },
      { path: 'InputBarang', name: 'InputBarang', component: () => import('src/pages/Admin/InputBarang.vue') },
      { path: 'dataUser', name: 'dataUser', component: () => import('src/pages/Admin/DataUser.vue') },
      { path: 'DataDVD', name: 'DataDVD', component: () => import('src/pages/Admin/DataDVD.vue') },
      { path: 'formedit/:id', name: 'formEditDVD', component: () => import('src/pages/Admin/FormEdit.vue') }
    ]
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    meta: {
      authUser: true
    },
    children: [
      { path: '', name: 'homeUser', component: () => import('pages/User/Index.vue') },
      { path: '/myorder', name: 'myOrder', component: () => import('pages/User/MyOrder.vue') }
    ]
  },
  {
    path: '/login',
    name: 'loginPage',
    component: () => import('pages/guest/Login.vue')
  },
  {
    path: '/register',
    name: 'registerPage',
    component: () => import('pages/guest/Register.vue')
  }
]
export default routes
