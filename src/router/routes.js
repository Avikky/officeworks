const routes = [{
    path: '/',
    redirect: '/login',
    component: () => import('layouts/InitialLayout.vue'),
    children: [{
        path: '/login',
        component: () => import('pages/Login.vue')
      },
      {
        path: '/register',
        component: () => import('pages/Register.vue')
      },
      {
        path: '/reset-password',
        component: () => import('pages/Resetpassword.vue')
      },
    ]
  },
  {
    path: '/dashboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
        path: '/dashboard',
        component: () => import('pages/Dashboard.vue')
      },

    ]
  },
  {
    path: '/notification',
    component: () => import('layouts/NotificationLayout.vue'),
    children: [{
      path: '/notification',
      component: () => import('pages/Notification.vue'),
    }]
  },
  {
    path: '/messages',
    component: () => import('layouts/MessageLayout.vue'),
    children: [{
      path: '/messages',
      component: () => import('pages/Messages.vue')
    }]
  },
  {
    path: '/search-user',
    component: () => import('layouts/SearchLayout.vue'),
    children: [{
      path: '/search-user',
      component: () => import('pages/SearchUsers.vue')
    }]
  },
  {
    path: '/request',
    component: () => import('layouts/RequestLayout.vue'),
    children: [{
      path: '/request',
      component: () => import('pages/Request.vue')
    }]
  },
  {
    path: '/expenses',
    component: () => import('layouts/ExpensesLayout.vue'),
    children: [{
      path: '/expenses',
      component: () => import('pages/Expenses.vue')
    }]
  },
  {
    path: '/edit-expenses',
    component: () => import('layouts/EditExpensesLayout.vue'),
    children: [{
      path: '/edit-expenses',
      component: () => import('pages/EditExpenses.vue')
    }]
  },
  {
    path: '/project',
    component: () => import('layouts/ProjectLayout.vue'),
    children: [{
      path: '/project',
      component: () => import('pages/Projects.vue')
    }]
  }

]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
