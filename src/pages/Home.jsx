import React, {useState} from 'react'
import Axios from "axios";
import ReactPaginate from 'react-paginate'
import '../styles/styleSearchEngine.css';
import '../styles/styleContainerHeroes.css'
import '../styles/Pagination.css';


const API = 'http://localhost:3001/heroes?nameHeroes=';
const ENTER = 13;
const INITIAL_PAGE = 0;

const Home = () => {
    const [valueSearch, setValueSearch] = useState("");
    let [heroesList, setHeroesList] = useState({});
    const [pageNumber, setPageNumber] = useState(INITIAL_PAGE);
    const [favoriteHeroes, setFavoriteHeroes] = useState([]);

    let pageCount
    let changePage
    const heroesPerPage = 10
    const pagesVisited = pageNumber * heroesPerPage;

    async function handleKeyPress(event){
        if(event.keyCode === ENTER || event.charCode === ENTER) {
           await handleClick(valueSearch)
        }
    }

    async function handleClick(heroes){
        console.log("heroes:: " + heroes)
        await Axios.get(API + heroes)
            .then(response => {
                setHeroesList(response.data)
            }).catch(error =>{
                console.log(error)
            })
    }

    if (heroesList && heroesList.results && heroesList.results.length ){
        pageCount = Math.ceil(heroesList.results.length / heroesPerPage);

        changePage = ({ selected }) => {
            setPageNumber(selected);
        };
    }


    return (
        <section className="home">
            <div className="home-search">
                <h2 className="home__title">¿Que h&eacute;roe deseas buscar?</h2>
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

            {heroesList.results &&
            <section>
                <section className="container">
                    <div className="container__heroes">
                        {heroesList.results &&
                        heroesList.results.length &&
                        heroesList.results
                            .slice(pagesVisited, pagesVisited + heroesPerPage)
                            .map(heroe => (
                            <div className="container__heroes--item">
                                <img className="container__heroes--item__img"
                                     src={heroe.image.url}
                                     onError={(e)=>{e.target.onerror = null;
                                         e.target.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETJg7l9pftEXciVHW-45vFeRw0zfzgXG0aA&usqp=CAU"}}
                                />

                                <div className="container__heroes--item__details">
                                    <p className="container__heroes__item--title">{heroe.name}</p>
                                    <button className="buttonView">Ver detalles</button>
                                    <button className="buttonView"
                                            onClick= {() => setFavoriteHeroes( favoriteHeroes => [...favoriteHeroes, heroe])}
                                    >Agregar a favorito</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                {pageCount > 1 &&
                    <section className="paginacion">
                        <ul>
                            <ReactPaginate
                                previousLabel={"Anterior"}
                                nextLabel={"Siguiente"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}
                            />
                        </ul>
                    </section>
                }
            </section>
            }

            {favoriteHeroes && favoriteHeroes.length > 0  &&
            <section>
                <section className="categories__title">
                    <h2 className="categories__title"> Tus favoritos: </h2>
                </section>

                <section className="carousel">
                    <div className="carousel__container">
                        {favoriteHeroes.map(heroe => (
                            <div className="carousel-item">
                                <img className="carousel-item__img"
                                     src={heroe.image.url}
                                     alt="image-heroe"/>
                                <div className="carousel-item__details">
                                    <p className="carousel-item__details--subtitle">{heroe.name}</p>
                                    <button className="buttonView">Ver detalles</button>
                                    <button className="buttonView">Eliminar de favoritos
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
            }
        </section>
    )
}

export default Home;