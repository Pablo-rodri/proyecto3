import { Component } from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            userName: '',
            password: ''

        }
        this.authService = new AuthService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {

        e.preventDefault()

        const { userName, password } = this.state

        this.authService
            .login(userName, password)
            .then(loggedUserfromServer => {
                this.props.storeUser(loggedUserfromServer.data)
                this.props.history.push('/mi-perfil')
            })
            .catch(err => this.props.showAlert(err.response.data.message))
    }



    render() {
        return (

            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>

                        <h1>Iniciar sesión</h1>
                        <hr></hr>

                        <Form onSubmit={this.handleFormSubmit}>

                            <Form.Group controlId="username">
                                <Form.Label>Usuario</Form.Label>
                                <Form.Control type="text" value={this.state.userName} onChange={this.handleInputChange} name="userName" />
                            </Form.Group>

                            <Form.Group controlId="pwd">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" value={this.state.password} onChange={this.handleInputChange} name="password" />
                            </Form.Group>

                            <Button style={{ marginTop: '20px', width: '100%' }} variant="success" type="submit">Acceder</Button>

                        </Form>
                        <hr></hr>
                        <Link to="/">
                            <Button variant="success">Volver</Button>
                        </Link>

                    </Col>
                </Row>
            </Container >

        )
    }
}


export default Login