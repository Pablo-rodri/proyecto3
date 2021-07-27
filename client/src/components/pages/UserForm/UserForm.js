import { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import UserService from '../../../services/user.service' //enviamos la informacion al servicio

class UserForm extends Component { //los formularios son siempre de clase

    constructor() {
        super()
        this.state = {
            userName: '',
            password: '',
            role: '',
            postalCode: '',
            image: ''
        }
        this.userService = new UserService()
    }


    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.userService // ver en pestaña network del navegador estado 200
            .saveUser(this.state)
            .then(() => {
                this.props.refreshUser()
                this.setState({ userName: '', password: '', role: '', postalCode: '', image: '' })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Container>

                <Form onSubmit={this.handleFormSubmit}>   {/* gestion de envio del formulario */}

                    <Form.Group controlId="name">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control type="text" value={this.state.userName} onChange={this.handleInputChange} name="userName" />
                    </Form.Group>

                    <Form.Group controlId="desc">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" value={this.state.password} onChange={this.handleInputChange} name="password" />
                    </Form.Group>
                    {/* enum: ['UserWalk', 'UserOwner'] */}
                    <Form.Group controlId="inve">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" value={this.state.role} onChange={this.handleInputChange} name="role" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Codigo Postal</Form.Label>
                        <Form.Control type="text" value={this.state.postalCode} onChange={this.handleInputChange} name="postalCode" />
                    </Form.Group>

                    <Form.Group controlId="lng">
                        <Form.Label>Imagen (cloudinary)</Form.Label>
                        <Form.Control type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
                    </Form.Group>

                    <Button style={{ marginTop: '20px', width: '100%' }} variant="success" type="submit">Crear Usuario</Button>

                </Form>

            </Container>
        )
    }
}

export default UserForm