import {createRouter, createWebHistory} from "vue-router"
import LoginPage from "../views/LoginPage.vue"
import Home from "../views/Home.vue"
import Welcome from "../views/Welcome.vue"
import AddItem from "../views/AddItem.vue"
import NewEvent from "../views/NewEvent.vue"
import Edit from "../views/Edit.vue"
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path: "/",
            name: "home",
            component: Home,
        },
        
        {
        path: "/LoginPage",
        name: "login-page",
        component: LoginPage
        },
        {
            path: '/Welcome',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/Add',
            name: 'Add-item',
            component: AddItem
        },
        {
            path: '/NewEvent',
            name: 'New-event',
            component: NewEvent 

        },
        {
            path: '/Edit',
            name: 'edit',
            component: Edit
        }
]
})

export default router