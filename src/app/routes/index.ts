import express from 'express'
import { UserRoutes } from '../modules/user/user.routes'


const router = express.Router()

const moduleRoutes = [
    {
        path:"/user",
        router: UserRoutes
    },
]

moduleRoutes.forEach(route => router.use(route.path, route.router))

export default router;