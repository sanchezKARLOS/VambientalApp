import {Routes,Route, Link} from "react-router-dom"
import Dashboard from '../assets/components/Panel/Dashboard'
// import ViewSalon from '../assets/components/Panel/Componente/VistaSalon/ViewSalon'
// import SetSalones from "../assets/components/Panel/Componente/Salones"
// import { SalonProvider } from "../assets/components/Panel/Componente/ComponeSalon/SalonProvider"
import Index from '../Principal'
function AppRouter() {
  return (
    <Routes>

    <Route path="/" element={<Index/>}/>
    <Route path="/Cpanel" element={<Dashboard/>}/>
    {/* <Route path="/Salon/:id" element={<ViewSalon/>}/> */}
    {/* <Route path="/Cpanel/nav" component={SetSalones} /> */}
   </Routes>
  )
}

export default AppRouter;