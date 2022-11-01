import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage'
import AddRestro from './components/AddRestro'
import UpdateRestro from './components/UpdateRestro'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoginPage',
        component: LoginPage,
        path: '/login'
    },
    {
        name: 'AddRestro',
        component: AddRestro,
        path: '/add-restro'
    },
    {
        name: 'UpdateRestro',
        component: UpdateRestro,
        path: '/update-restro'
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router