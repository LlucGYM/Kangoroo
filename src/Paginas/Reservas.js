import React from 'react';
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/footer";
import Header from "../Componentes/header";

export default function Reservas () {
    return(

        <div>
            <NavBar/>
            <Header titulo={"RESERVA TU KANGURO"} descripcion={"Reserva el dia y hora de una manera rápida y sencilla"} boton={false}/>
            <div className={"Service"}>
                <div className="container">
                    <div className= "row">
                        <div className="col">
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </div>

    );
}
