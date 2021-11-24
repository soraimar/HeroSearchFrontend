import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import '../styles/styleDetalleHeroe.css'

const API = 'http://localhost:3001/heroes/id?idHeroe=';
const IMAGE_ERROR = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQETJg7l9pftEXciVHW-45vFeRw0zfzgXG0aA&usqp=CAU"

const DetalleHeroe = () => {

    let params = useParams();
    let apiHeroe = API + params.id;

    const [heroe, setHeroe] = useState([]);

    useEffect(async () => {
        console.log(heroe)
        const response = await axios(apiHeroe)
        setHeroe(response.data);
    },[])

    return(
        <section>
            {heroe && heroe.id &&
                <section className="detalleHeroe">

                    <section className="detalleHeroe__image">
                        <p className="detalleHeroe__image-title">{heroe.name}</p>
                        <img className="detalleHeroe__image-img"
                            src={heroe.image.url}
                            onError={(e)=> {e.target.onerror = null;
                                            e.target.src= IMAGE_ERROR}}
                        />
                    </section>

                    <section className="detalleHeroe__detalle">
                        {heroe.powerstats &&
                        <div>
                            <div className= "detalleHeroe__image-title" >Powerstats:</div>
                            <div className="detalleHeroe__detalle__container">
                                <div> intelligence: {heroe.powerstats.intelligence} </div>
                                <div> strength: {heroe.powerstats.strength}</div>
                                <div> speed: {heroe.powerstats.speed}</div>
                                <div> durability: {heroe.powerstats.durability}</div>
                                <div> power: {heroe.powerstats.power}</div>
                                <div> comba: {heroe.powerstats.combat}</div>
                            </div>
                        </div>

                        }

                       {heroe.biography &&
                        <div>
                            <div className= "detalleHeroe__image-title" >Biography</div>
                            <div className="detalleHeroe__detalle__container">
                                {heroe.biography['full-name'] &&
                                <div> full-name: {heroe.biography['full-name']}</div>
                                }
                                {heroe.biography['alter-egos'] &&
                                <div> alter-egos: {heroe.biography['alter-egos']}</div>
                                }
                                {heroe.biography.aliases &&
                                <div> aliases: {heroe.biography.aliases.map(aliase => (
                                    <div> Alias: {aliase} </div>
                                ))}
                                </div>
                                }
                                {heroe.biography['place-of-birth'] &&
                                <div> place-ofirth: {heroe.biography['place-of-birth']}</div>
                                }

                                {heroe.biography['first-appearance'] &&
                                <div> first-appearance: {heroe.biography['first-appearance']}</div>
                                }
                                {heroe.biography &&
                                <div> publisher: {heroe.biography.publisher}</div>
                                }
                                {heroe.alignment &&
                                <div> alignment: {heroe.biography.alignment}</div>
                                }
                            </div>
                        </div>
                        }

                        {heroe.appearance &&
                        <div>
                            <div className= "detalleHeroe__image-title" >Appearance</div>
                            <div className="detalleHeroe__detalle__container">
                                <div> Gender : {heroe.appearance.gender}</div>
                                <div> Race : {heroe.appearance.race}</div>
                                <div> Height : { heroe.appearance.height.map(element => (
                                    <p>{element}</p>
                                ))}
                                </div>
                                <div> Weight : {heroe.appearance.weight}</div>
                                <div> Eye Color : {heroe.appearance['eye-color']}</div>
                                <div> Hair Color : {heroe.appearance['hair-color']}</div>
                            </div>
                        </div>
                        }

                        {heroe.work &&
                        <div>
                            <div className= "detalleHeroe__image-title" >Work</div>
                            <div className="detalleHeroe__detalle__container">
                                <div> Occupation: {heroe.work.occupation}</div>
                                <div> Base of operation: {heroe.work.base}</div>
                            </div>
                        </div>
                        }

                        {heroe.connections &&
                        <div>
                            <div className= "detalleHeroe__image-title" >Connections</div>
                            <div className="detalleHeroe__detalle__container">
                                <div> Group Affiliation: {heroe.connections['group-affiliation']} </div>
                                <div> Relatives: {heroe.connections.relatives} </div>
                            </div>
                        </div>
                        }
                    </section>
                </section>
            }
        </section>

    )
}

export default DetalleHeroe;