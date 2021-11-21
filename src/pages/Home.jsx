import React, {useState} from 'react'
import Axios from "axios";
import '../styles/styleSearchEngine.css';
import '../styles/styleCarosel.css';

const API = 'http://localhost:3001/heroes?nameHeroes=';
const ENTER = 13;

const Home = () => {
    const [valueSearch, setValueSearch] = useState("");

    async function handleKeyPress(event){
        if(event.keyCode === ENTER || event.charCode === ENTER) {
           await handleClick(valueSearch)
        }
    }

    async function handleClick(heroes){
        console.log("heroes:: " + heroes)
        await Axios.get(API + heroes)
    }

    return (
        <section>
            <div className="home">
                <h2 className="home__title">¿Que super heroe quieres ver hoy?</h2>
                <div className="home__search">
                    <input className="inputSearchHeroes"
                           placeholder="Buscar..."
                           value ={valueSearch}
                           onKeyPress={(e) => handleKeyPress(e)}
                           onChange={(e) => setValueSearch(e.target.value)}/>
                    <input type="submit"
                           value="buscar"
                           onClick={() => handleClick(valueSearch)}>
                    </input>
                </div>
            </div>
        </section>
    )
}

export default Home;