import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./layout/dashboard/index";
import Index from "./layout/index/Index";
import Registrate from './layout/auth/Registro/Index'
function App() {
  return (

<>
<BrowserRouter
    >
<Routes>
        <Route
          index
          name="Indezx"
          type="route"
          path="/"
          element={<Index />}
        />
        ,
        <Route
          key="dashboard"
          name="Dashboard"
          type="route"
          path="/dashboard"
          element={<Dashboard />}
        />
        ,
        <Route
          key="registrate"
          name="Registrate"
          type="route"
          path="/registrate"
          element={<Registrate/>}
        />
        ,
      </Routes>
</BrowserRouter>
</>

  )
}

export default App;