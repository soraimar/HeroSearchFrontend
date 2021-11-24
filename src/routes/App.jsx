import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "../pages/Home";
import Layout from "../containers/Layout"
import Detail from '../pages/DetalleHeroe'

function App(){
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element = {<Home/>}/>
                    <Route exact path="/detail/:id" element={<Detail/>}/>
                    <Route exact path="/*" element={<h1>Not found 404</h1>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;