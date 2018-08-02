import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('@/components/Home').default
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: require('@/components/Ticket').default
    },
    {
      path: '/kb',
      name: 'Knowledge',
      component: require('@/components/Knowledge').default
    },
    {
      path: '/messages',
      name: 'Messages',
      component: require('@/components/Messages').default
    },
    {
      path: '/chat',
      name: 'Chat',
      component: require('@/components/Chat').default
    },
    {
      path: '/terminal',
      name: 'Terminal',
      component: require('@/components/Terminal').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
