import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import AuthService from '../../../services/auth.service' //enviamos la informacion al servicio


class UserOwnerForm extends Component { //los formularios son siempre de clase

    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            role: 'Dueñ@',
            postalCode: '',
            image: '',
            numberDogs: '',
            dogsPPP: ''

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
        console.log(user)
        this.authService // ver en pestaña network del navegador estado 200
            .signup(user) // nombre metodo ruta servidor
            .then(() => this.props.history.push('/usuarios'))
            .catch(err => console.log(err))
    }

    translateRole(role) {  //metodo para traducir en el formulario de registro el rol
        if (role === "Dueñ@") {
            return "UserOwner"
        }
    }
    render() {
        return (
            <Container>
                <Row>

                    <Col md={{ span: 8, offset: 2 }}>
                        <h1>Registrate como Dueñ@</h1>
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

                            <Form.Group controlId="control">
                                <Form.Label>Codigo Postal</Form.Label>
                                <Form.Control type="text" value={this.state.postalCode} onChange={this.handleInputChange} name="postalCode" />
                            </Form.Group>

                            <Form.Group controlId="ppp">
                                <Form.Label>Algun perr@ es PPP</Form.Label>
                                <Form.Control as="select" type="text" value={this.state.dogsPPP} onChange={this.handleInputChange} name="dogsPPP" >
                                    <option>Elige una opcion</option>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="num">
                                <Form.Label>Numero de perr@s </Form.Label>
                                <Form.Control as="select" type="number" value={this.state.numberDogs} onChange={this.handleInputChange} name="numberDogs" >
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

                        </Form>
                        <br />
                        <Link to="/">
                            <Button variant="success">Volver</Button>
                        </Link>

                    </Col>


                </Row>
            </Container>
        )
    }
}

export default UserOwnerForm