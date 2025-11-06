import express from 'express'
import { UserRoutes } from '../modules/user/user.routes'
import { AdminRoutes } from '../modules/admin/admin.routes'


const router = express.Router()

const moduleRoutes = [
    {
        path:"/user",
        router: UserRoutes
    },
    {
        path:"/admin",
        router: AdminRoutes
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.router))

export default router;