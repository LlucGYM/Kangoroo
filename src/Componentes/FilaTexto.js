import React from "react";
import {Button} from "react-bootstrap";

export default function FilaTexto () {
    return(
        <div className="container-expand">
            <div className="container">
                <div className="row">
                    <div className="col recuardo1eracolumna">
                        <div className={"Textorecuadro"}>
                            <h3>¿Necesitas un kanguro para hoy?</h3>
                            <p>Estamos 24h a tu servicio para poder brindar a tus pequeños los mejores cuidados con la mejor atención. Además, contamos con cámaras de videovigilancia que podrás ver en linea durante el servicio de tu peque.</p>
                            <Button class="btn btn-info" variant={"dark"} href={"/Reservas"} size={"lg"}>Buscar kanguro</Button>
                        </div>
                    </div>

                    <div className="col recuardo2ndacolumna">
                        <div className={"Textorecuadro"}>
                            <h3>¿Te gustaría trabajar como kanguro?</h3>
                            <p>Hemos tenido una muy buena acogida hasta ahora, y estamos haciendo lo que está en nuestra mano para ofrecer a todos los que quieren ser canguros un puesto de trabajo.</p>
                            <Button class="btn btn-warning" variant={"outline-dark"} href={"/ComoSerKanguro"} size={"lg"}>Trabaja con nosotros</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
