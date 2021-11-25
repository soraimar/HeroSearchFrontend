import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from "axios";
import '../styles/styleDetalleHeroe.css'
import {API_BASE_PATH} from '../config/const'

const API = `${API_BASE_PATH}heroes/id?idHeroe=`;
const IMAGE_ERROR = "https//encrypted-tbn0.gstatic.com/images?q=tbnANd9GcQETJg7l9pftEXciVHW-45vFeRw0zfzgXG0aA&usqp=CAU"

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
                        <p className="detalleHeroe__image--title">{heroe.name}</p>
                        <img className="detalleHeroe__image-img"
                            src={heroe.image.url}
                            onError={(e)=> {e.target.onerror = null;
                                            e.target.src= IMAGE_ERROR}}
                        />
                    </section>

                    <section className="detalleHeroe__detalle">
                        {heroe.powerstats &&
                        <div>
                            <div className= "detalleHeroe__image--title" >Power stats</div>
                            <div className="detalleHeroe__detalle__container">
                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        intelligence
                                    </div>
                                        {heroe.powerstats.intelligence}
                                </div>
                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        Strength
                                    </div>
                                    {heroe.powerstats.strength}
                                </div>
                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        Speed
                                    </div>
                                    {heroe.powerstats.speed}
                                </div>
                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        Durability
                                    </div>
                                    {heroe.powerstats.durability}
                                </div>
                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        Power
                                    </div>
                                    {heroe.powerstats.power}</div>
                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        Comba
                                    </div>
                                    {heroe.powerstats.combat}
                                </div>
                            </div>
                        </div>
                        }

                        {heroe.biography &&
                         <div>
                             <div className= "detalleHeroe__image--title" >Biography</div>
                             <div className="detalleHeroe__detalle__container">
                                 {heroe.biography['full-name'] &&
                                 <div>
                                     <div className="detalleHeroe__detalle__container--atributo">
                                         Full name
                                     </div>
                                     {heroe.biography['full-name']}
                                 </div>
                                 }

                                 {heroe.biography['alter-egos'] &&
                                 <div>
                                     <div className="detalleHeroe__detalle__container--atributo">
                                         Alter egos
                                     </div>
                                     {heroe.biography['alter-egos']}
                                 </div>
                                 }

                                 {heroe.biography.aliases &&
                                 <div>
                                     <div className="detalleHeroe__detalle__container--atributo">
                                         Aliases
                                     </div>
                                      {heroe.biography.aliases.map(aliase => (
                                     <li> {aliase} </li>
                                 ))}
                                 </div>
                                 }

                                 {heroe.biography['place-of-birth'] &&
                                 <div>
                                     <div className="detalleHeroe__detalle__container--atributo">
                                         Place ofirth
                                     </div>
                                     {heroe.biography['place-of-birth']}
                                 </div>
                                 }

                                 {heroe.biography['first-appearance'] &&
                                 <div>
                                     <div className="detalleHeroe__detalle__container--atributo">
                                         First appearance
                                     </div>
                                     {heroe.biography['first-appearance']}
                                 </div>
                                 }

                                 {heroe.biography &&
                                 <div>
                                     <div className="detalleHeroe__detalle__container--atributo">
                                         Publisher
                                     </div>
                                      {heroe.biography.publisher}
                                 </div>
                                 }

                                 {heroe.alignment &&
                                 <div>
                                     <div className="detalleHeroe__detalle__container--atributo">
                                         Alignment
                                     </div>
                                     {heroe.biography.alignment}</div>
                                 }
                             </div>
                         </div>
                         }

                        {heroe.appearance &&
                        <div>
                            <div className= "detalleHeroe__image--title" >Appearance</div>
                            <div className="detalleHeroe__detalle__container">
                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        Gender 
                                    </div>
                                    {heroe.appearance.gender}
                                </div>

                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        Race 
                                    </div>
                                    {heroe.appearance.race}
                                </div>

                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        Height 
                                    </div>
                                    { heroe.appearance.height.map(element => (
                                        <li>{element}</li>
                                    ))}
                                </div>

                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        Weight 
                                    </div>
                                    {heroe.appearance.weight}
                                </div>

                                <div>
                                    <div className="detalleHeroe__detalle__container--atributo">
                                        Hair Color 
                                    </div>
                                    {heroe.appearance['hair-color']}
                                </div>

                            </div>
                        </div>
                        }

                        {heroe.work &&
                            <div>
                                <div className= "detalleHeroe__image--title" >Work</div>
                                <div className="detalleHeroe__detalle__containerTwoAtributos">
                                    <div>
                                        <div className="detalleHeroe__detalle__container--atributo">
                                            Occupation
                                        </div>
                                        {heroe.work.occupation}
                                    </div>

                                    <div>
                                        <div className="detalleHeroe__detalle__container--atributo">
                                            Base of operation
                                        </div>
                                        {heroe.work.base}
                                    </div>
                                </div>
                            </div>
                            }

                            {heroe.connections &&
                            <div>
                                <div className= "detalleHeroe__image--title" >Connections</div>
                                <div className="detalleHeroe__detalle__containerTwoAtributos">
                                    <div>
                                        <div className="detalleHeroe__detalle__container--atributo">
                                            Group Affiliation
                                        </div>
                                        {heroe.connections['group-affiliation']} </div>
                                    <div>
                                        <div className="detalleHeroe__detalle__container--atributo">
                                            Relatives
                                        </div>
                                        {heroe.connections.relatives} </div>
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