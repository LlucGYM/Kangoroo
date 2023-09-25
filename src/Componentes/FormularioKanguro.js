import React , {useState} from "react";
import {Col, Form, Row, Button, Alert} from "react-bootstrap";
import useMail from "../Servicios/enviarMail";

export default function Formulario () {
    const {enviaMail} = useMail();
    const [profile, setProfile] = useState({});


    const handleChange = ({ target }) => {
        const  {name, value} = target;
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value
        }));
    };

    const handleSumbit = (event) => {
        event.preventDefault();
        enviaMail(profile);
    }

    return (
        <Form onSubmit={handleSumbit} className={"FromularioKanguro"}>
            <Row>
                <Form.Group as={Col} controlId="formNombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control  value={profile.nombre || ''} name="nombre" type="nombre" placeholder="Nombre" onChange={handleChange} required/>
                </Form.Group>
                <Form.Group as={Col} controlId="formApellidos">
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control value={profile.apellidos || ''} name="apellidos" type="apellido" placeholder="Apellidos" onChange={handleChange} required />
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={profile.email || ''} name="email" type="email" placeholder="Email" onChange={handleChange} required />
                </Form.Group>
                <Form.Group as={Col} controlId="formTelefono">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control value={profile.telefono || ''} name="telefono" type="text" placeholder="Teléfono" onChange={handleChange} required/>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} controlId="formFile" className="mb-3">
                    <Form.Label>Curriculum</Form.Label>
                    <br/>
                    <input name="file" type={"file"} accept={".pdf"} onChange={handleChange} required/>
                    <p><small>*Solo se admiten documentos .pdf*</small></p>

                </Form.Group>
            </Row>
            <Row>
                <Form.Group as={Col} className="mb-3" controlId="ControlTextarea1">
                    <Form.Label>Mensaje</Form.Label>

                    <Form.Control value={profile.descripcion || ''} name="descripcion" as="textarea" rows={3} placeholder={"Indroduzca aquí una breve presentación"} onChange={handleChange} required/>
                </Form.Group>
            </Row>

            <Button variant={"dark"} type="submit" className="mb-2" size={"lg"}>
                Enviar
            </Button>
        </Form>
    );
}
