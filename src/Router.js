import { createWebHistory, createRouter } from "vue-router"
import DepartamentosComponent from './components/DepartamentosComponent.vue'
import CreateDepartamento from './components/CreateDepartamento.vue'


const routes = [
    {path: "/", component: DepartamentosComponent},
    {path: "/create", component: CreateDepartamento}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;