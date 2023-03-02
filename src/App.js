import {Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from "./components/NavbarComp";
import Recipes from "./pages/Recipes";

function App() {
    return (
        <div>
            <NavbarComp/>
            {/*<Recipes/>*/}

        </div>
    );
}

export default App;
