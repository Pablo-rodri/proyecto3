import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service' //enviamos la informacion al servicio

class UserWalkForm extends Component { //los formularios son siempre de clase

    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            role: 'Paseador',
            postalCode: '',
            image: '',
            telephone: '',
            experience: '',
            price: '',
            dogTrainer: '',
            admissionPPP: '',
            maximumDogs: '',
        }
        this.authService = new AuthService() //lo conectamos con el service de user
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => { // gestion envio del formulario
        e.preventDefault()

        const user = { ...this.state }
        user.role = this.translateRole(user.role)

        this.authService // ver en pestaña network del navegador estado 200
            .signup(user) // nombre metodo ruta servidor
            .then(() => this.props.history.push('/usuarios'))
            .catch(err => console.log(err))
    }

    translateRole(role) {  //metodo para traducir en el formulario de registro el rol
        if (role === "Paseador") {
            return "UserWalk"
        }
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>Registrate como Pasead@r</h1>
                        <hr></hr>
                    </Col>
                </Row>

                <Row className="justify-content-around">
                    <Col md={8}>
                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group controlId="role">
                                <Form.Label>
                                    <Form.Control value={this.state.role} name="role">
                                    </Form.Control>
                                </Form.Label>
                            </Form.Group>

                            <Form.Group controlId="name">
                                <Form.Label>Nombre de Usuario</Form.Label>
                                <Form.Control type="text" value={this.state.userName} onChange={this.handleInputChange} name="userName" />
                            </Form.Group>

                            <Form.Group controlId="desc">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" value={this.state.password} onChange={this.handleInputChange} name="password" />
                            </Form.Group>

                            <Form.Group controlId="postal">
                                <Form.Label>Codigo Postal</Form.Label>
                                <Form.Control type="text" value={this.state.postalCode} onChange={this.handleInputChange} name="postalCode" />
                            </Form.Group>

                            <Form.Group controlId="telf">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="text" value={this.state.telephone} onChange={this.handleInputChange} name="telephone" />
                            </Form.Group>

                            <Form.Group controlId="experience">
                                <Form.Label>Experiencia como paseador</Form.Label>
                                <Form.Control type="text" value={this.state.experience} onChange={this.handleInputChange} name="experience" />
                            </Form.Group>

                            <Form.Group controlId="price">
                                <Form.Label>Precio/hora paseo</Form.Label>
                                <Form.Control type="text" value={this.state.price} onChange={this.handleInputChange} name="price" />
                            </Form.Group>

                            <Form.Group controlId="trainer">
                                <Form.Label>Tengo carnet de entrenador/entrenadora de perr@s</Form.Label>
                                <Form.Control as="select" type="text" value={this.state.dogTrainer} onChange={this.handleInputChange} name="dogTrainer" >
                                    <option>Elige una opcion</option>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="ppp">
                                <Form.Label>Admito PPP</Form.Label>
                                <Form.Control as="select" type="text" value={this.state.admissionPPP} onChange={this.handleInputChange} name="admissionPPP" >
                                    <option>Elige una opcion</option>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="postal">
                                <Form.Label>Nunero maximo de perr@s por paseo</Form.Label>
                                <Form.Control as="select" type="text" value={this.state.maximumDogs} onChange={this.handleInputChange} name="maximumDogs" >
                                    <option>Elige una opcion</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="lng">
                                <Form.Label>Imagen (cloudinary)</Form.Label>
                                <Form.Control type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
                            </Form.Group>

                            <Button style={{ marginTop: '20px', width: '100%' }} variant="success" type="submit">Crear Usuario</Button>
                            <br />
                            <br />
                            <Link to="/">
                                <Button variant="success">Volver</Button>
                            </Link>
                            <br />
                            <br />

                        </Form>

                    </Col>
                </Row>
            </Container >
        )
    }
}

export default UserWalkForm