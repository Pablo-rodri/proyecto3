import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import UserService from '../../../services/user.service'

class EditUserWalkForm extends Component {

    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            role: '',
            postalCode: '',
            image: '',
            email: '',
            experience: '',
            price: '',
            dogTrainer: '',
            admissionPPP: '',
            maximumDogs: '',
        }
        this.userService = new UserService() //lo conectamos con el service de user
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => { // gestion envio del formulario
        e.preventDefault()

        const user = { ...this.state }
        user.role = this.translateRole(user.role)

        this.userService
            .editUser(user)
            .then(() => this.props.history.push('/usuarios'))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {

        this.userService
            .getOneUser(this.props.match.params.user_id)
            .then(response => this.setState({
                userName: response.data.userName,
                role: response.data.role,
                postalCode: response.data.postalCode,
                image: response.data.image,
                email: response.data.email,
                experience: response.data.experience,
                price: response.data.price,
                dogTrainer: response.data.dogTrainer,
                admissionPPP: response.data.admissionPPP,
                maximumDogs: response.data.maximumDogs,
            }))
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
                        <h1>Editar datos</h1>
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

                            <Form.Group controlId="postal">
                                <Form.Label>Codigo Postal</Form.Label>
                                <Form.Control type="text" value={this.state.postalCode} onChange={this.handleInputChange} name="postalCode" />
                            </Form.Group>

                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} name="email" />
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

                            <Form.Group controlId="num">
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

                            <Button style={{ marginTop: '20px', width: '100%' }} variant="success" type="submit">Modificar datos</Button>
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

export default EditUserWalkForm