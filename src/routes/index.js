import configRoutes from '../config/routes'
import Home from '../pages/Home'
import {DefaultLayout} from '../components/Layouts'

const publicRoutes = [
    {path: configRoutes.home, component: Home, layout:DefaultLayout}
]

const privateRoutes = [
    
]

export {publicRoutes, privateRoutes}