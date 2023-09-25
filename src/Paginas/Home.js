import React from 'react';

import NavBar from "../Componentes/NavBar";
import Header from "../Componentes/header";
import Footer from "../Componentes/footer";

import '../CSS/Home.css';
import {Button} from 'react-bootstrap';

//imagenes

import logo from '../logo.svg';
import planificacionTiempo from '../img/planificacionTiempo.png';
import solucionaImprevistos from '../img/solucionaImprevistos.png';
import tiempoParaTi from '../img/tiempoParaTi.png';

import nuestrosServicios from '../img/nuestrosServicios.jpg';
import FilaTexto from "../Componentes/FilaTexto";


export default function Home () {
    return(

        <div>
            <NavBar/>
            <Header titulo={"GOGO! TU KANGURO!"} descripcion={"Kanguros conocidos y verificados 100% · Con experiencia · Video Vigilados · Servicio 24h"} boton={true}/>

            <div className={"Service"}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="titulo0">Ayudamos a la facilitar la planificación de las famílias con niños</h2>
                            <p className="descripcion0">Para todos aquellos padres y madres que tienen responsabilidades y no pueden hacerse cargo con todo a la vez.</p>
                        </div>
                    </div>



                    <div className="row">
                        <div className="col">
                            <img class="imagen" src={planificacionTiempo}/>
                        </div>
                        <div className="col">
                            <h3>Planifica con tiempo</h3>
                            <p>¿Sabes que necesitas ayuda para planificarte y necesitas ponerle una solución immediata?</p>
                            <ul>
                                <li>Ayuda puntual</li>
                                <li>Tienes un compromiso</li>
                                <li>Te apetece una escapada, plan en pareja</li>
                                <li>Los extraescolares por las tardes</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <h3>Soluciona imprevistos</h3>
                            <p>Los niños no entienden de planes, de emergencias tampoco... Por eso mismo podrás encontrar nuestra ayuda en menos de 1h.</p><p>Sí, sí, ¡Para menos de 1h!</p>
                            <ul>
                                <li>Los días que se ponen enfermos</li>
                                <li>Si eres tú quien tiene que ir al médico</li>
                                <li>Compromiso con el trabajo</li>
                                <li>Cuando nadie puede hacerse cargo</li>
                            </ul>
                        </div>
                        <div className="col">
                            <img src={solucionaImprevistos}/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <img src={tiempoParaTi}/>
                        </div>
                        <div className="col">
                            <h3>Dedícate tiempo para ti</h3>
                            <p>A veces nos damos cuenta que nos ponemos los últimos en la lista de prioridades. La parte buena es que siempre estás a tiempo de darte un tiempo para ti.</p>
                            <ul>
                                <li>No te piedas un próximo plan</li>
                                <li>Para practicar deporte, hobbie..</li>
                                <li>Un rato de relax, un masaje, spa..</li>
                                <li>¡Despéjate! tomar tiempo libre ayuda a mejorar tu ánimo y tu relación con los peques</li>
                            </ul>
                        </div>

                    </div>
                </div>


               <FilaTexto/>


                <div className="container">
                    <div className="row">
                            <div className="col">
                            <h3>Nuestros servicios</h3>
                            <ul>
                                <li>Las mejores cuidadoras</li>
                                <li>Videovigilancia online</li>
                                <li>Servicio 24h / 7 días</li>
                                <li>Nos adaptamos a tus necesidades</li>
                                <li>Bajo la protección de “un seguro”</li>
                            </ul>
                                <br/>

                                <h3>Soluciona problemas puntuales</h3>
                            <ul>
                                <li>Planifica con tiempo</li>
                                <li>Soluciona imprevistos</li>
                                <li>Tiempo para ti</li>
                            </ul>
                                <br/>

                            <h3>¡Soluciona problemas con GoGo! Tu Kanguro…</h3>
                            <ul>
                                <li>Organiza tu tiempo</li>
                                <li>Soluciona imprevistos</li>
                                <li>Tiempo para ti</li>
                            </ul>
                            </div>
                            <div className="col">
                                <img class="imagen2" src={nuestrosServicios}/>
                            </div>
                        </div>

                </div>

            </div>


            <Footer/>
        </div>
    );
}

