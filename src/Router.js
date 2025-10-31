import { createWebHistory, createRouter } from "vue-router"
import DepartamentosComponent from './components/DepartamentosComponent.vue'
import CreateDepartamento from './components/CreateDepartamento.vue'
import DetailsDepartamento from './components/DetailsDepartamento.vue'
import UpdateDepartamento from './components/UpdateDepartamento.vue'

const routes = [
    {path: "/", component: DepartamentosComponent},
    {path: "/create", component: CreateDepartamento},
    {path: "/details/:numero/:nombre/:localidad", component: DetailsDepartamento},
    {path:"/update/:numero", component: UpdateDepartamento}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router;