import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import UserService from '../../../services/user.service'


class EditOwnerProfile extends Component {

    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            role: '',
            postalCode: '',
            image: '',
            numberDogs: '',
            dogsPPP: '',
            telephone: ''

        }
        this.userService = new UserService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
        console.log(this.state)
    }

    handleFormSubmit = e => {
        e.preventDefault()

        const user = { ...this.state }
        user.role = this.translateRole(user.role)
        console.log("hola ")
        console.log(user)
        this.userService
            .editUser(user.user_id, user)
            .then(() => this.props.history.push('/usuarios'))
            .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.userService.getOneUser(this.props.match.params.user_id).then(response => {
            console.log(response)
            this.setState({
                userName: response.data.userName,
                role: response.data.role,
                postalCode: response.data.postalCode,
                image: response.data.image,
                experience: response.data.numberDogs,
                price: response.data.dogsPPP,
                user_id: response.data._id,
                password: response.data.password,
                telephone: response.data.telephone

            })
        })
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
                        <h1>Editar datos6</h1>
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

                            <Form.Group controlId="control">
                                <Form.Label>Codigo Postal</Form.Label>
                                <Form.Control type="text" value={this.state.postalCode} onChange={this.handleInputChange} name="postalCode" />
                            </Form.Group>

                            <Form.Group controlId="tele">
                                <Form.Label>Telefono</Form.Label>
                                <Form.Control type="text" value={this.state.telephone} onChange={this.handleInputChange} name="telephone" />
                            </Form.Group>

                            <Form.Group controlId="ppp">
                                <Form.Label>Algun perr@ es PPP</Form.Label>
                                <Form.Control as="select" type="text" value={this.state.dogsPPP} onChange={this.handleInputChange} name="dogsPPP" >
                                    <option>Elige una opcion</option>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="postal">
                                <Form.Label>Numero de perr@s maximo </Form.Label>
                                <Form.Control as="select" type="text" value={this.state.numberDogs} onChange={this.handleInputChange} name="numberDogs" >
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

                            <Button style={{ marginTop: '20px', width: '100%' }} variant="success" type="submit">Modificar Datos</Button>

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

export default EditOwnerProfile