import Home from "../pages/Home"
import Login from "../pages/Login"
import Appointment from "../pages/Appointment"
import Hospitals from "../pages/Hospitals"
import ContactDesk from "../pages/ContactDesk"
import HospRegister from '../pages/HospRegister'

const AuthRoutes = [
    {
        name: <Home />,
        path: ''
    },
    {
        name: <Login />,
        path: 'login'
    },
    {
        name: <Appointment />,
        path: 'appointment'
    },
    {
        name: <Hospitals />,
        path: 'hospitals'
    },
    {
        name: <HospRegister />,
        path: 'hospital-register'
    },
    {
        name: <ContactDesk />,
        path: '/contactDesk'
    },
]

export default AuthRoutes
