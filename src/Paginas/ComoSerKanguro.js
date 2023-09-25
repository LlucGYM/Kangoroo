import React from 'react';
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/footer";
import Header from "../Componentes/header";
import Maps from "../Componentes/Maps";

import "../CSS/ComoSerKanguro.css";

import logo from '../logo.svg';
import Formulario from "../Componentes/FormularioKanguro";

export default function ComoSerKanguro () {

    function redirect(){
        window.location.href = "mailto:gogotukanguro@gmail.com";
    }


    return(

        <div>
            <NavBar/>
            <Header titulo={"¡TRABAJA CON NOSOTROS!"} descripcion={"descripcion...."} boton={false}/>

            <div className={"Service"}>
                <div className="container">
                    <div className= "row">
                        <div className="col">
                            <h3>¿Cómo trabajamos?</h3>
                        </div>
                        <div className="col">
                            <img src={logo}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className= "row">
                        <div className="col">
                            <h3>Forma Parte de Kanguro</h3>
                            <p>Si estás interesada en formar parte GoGo! Tu Kanguro! estás en el lugar indicado.</p>
                            <p>Para poder integrarte en nuestro equipo de Kanguros necesitamos que nos facilites la siguiente información.</p>
                            <p>En cuanto podamos te llamaremos!</p>

                            <Formulario/>
                        </div>
                        <div className="col">
                            <h3>¿Dónde encontranos?</h3>
                            <ul className="listaContacto">
                                <li><p><strong>Mail:</strong></p>
                                    <p className={"Mail"} onClick={() => redirect()}>gogotukanguro@gmail.com</p></li>
                                <li><p><strong>Teléfono:</strong></p>
                                    <p> +34 600 00 00 00</p>
                                </li>
                                <li><p><strong>Localización:</strong></p>
                                    <p>Carrer de Víctor Català local 4</p>
                                    <p>08191 Rubí, Spain</p>
                                </li>

                            </ul>
                            <Maps zoom={13} lat={41.4851409} lng={2.0323243} height={"400px"} width={"400px"}/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}
