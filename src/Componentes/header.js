import React, {useEffect, useState} from "react";
import '../CSS/header.css';
import {Button} from "react-bootstrap";

export default function Header ({titulo, descripcion, boton}) {

    const [state, setState] = useState("HeaderTitle");

    useEffect(() => {
        setState("HeaderTitleFinal");
    },[])


    return (
        <div className="Header">
            <div className="container">
                <div className="row">
                    <div className="col-auto">
                        <h1 className={state}>{titulo}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto">
                        <p className="HeaderSubtitle">{descripcion}</p>
                    </div>
                </div>
                { boton ?
                    <div className="row">
                        <div className="col">
                            <Button variant={"outline-dark"} href={"/Reservas"} size={"lg"}>Kanguros</Button>
                        </div>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    );

}
