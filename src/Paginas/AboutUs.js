import React from 'react';
import NavBar from "../Componentes/NavBar";
import Footer from "../Componentes/footer";
import Header from "../Componentes/header";

export default function AboutUs () {
    return(

        <div>
            <NavBar/>
            <Header titulo={"SOBRE NOSOTROS"} descripcion={"Conócenos y confia plenamente en tu Kanguro"} boton={false}/>
            <div className="container">
                <div className= "row">
                    <div className="col">

                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    );
}
