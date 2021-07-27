import { Component } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DogService from '../../../services/dog.service'

class DogForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            age: '',
            dogBreed: '',
            dogPPP: '',
            observations: '',
            dogOwner: '',
            image: ''
        }
        this.dogService = new DogService()
    }
    componentDidMount() {
        this.setState({ dogOwner: this.props.loggedUser._id })
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        e.preventDefault()

        this.dogService // ver en pestaña network del navegador estado 200
            .newDog(this.state)
            .then(() => {
                this.props.history.push('/mi-perfil') //crearlo en un usuario 
                this.setState({ name: '', age: '', dogBreed: '', dogPPP: '', observations: '', image: '' })
            })
            .catch(err => console.log(err))
    }

    render() {
        { console.log(this.props) }
        return (
            <Container>

                <Row>
                    <Col md={6}>
                        <Form onSubmit={this.handleFormSubmit}>   {/* gestion de envio del formulario */}

                            <Form.Group controlId="name">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={this.handleInputChange} name="name" />
                            </Form.Group>

                            <Form.Group controlId="age">
                                <Form.Label>Edad</Form.Label>
                                <Form.Control type="text" value={this.state.age} onChange={this.handleInputChange} name="age" />
                            </Form.Group>

                            <Form.Group controlId="Breed">
                                <Form.Label>Raza</Form.Label>
                                <Form.Control type="text" value={this.state.dogBreed} onChange={this.handleInputChange} name="dogBreed" />
                            </Form.Group>

                            <Form.Group controlId="lng">
                                <Form.Label>Perr@ PPP.</Form.Label>
                                <Form.Control as="select" type="text" value={this.state.dogPPP} onChange={this.handleInputChange} name="dogPPP" >
                                    <option>Elige una opcion</option>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="lng">
                                <Form.Label>Observaciones dueñ@</Form.Label>
                                <Form.Control type="text" value={this.state.observations} onChange={this.handleInputChange} name="observations" />
                            </Form.Group>

                            <Form.Group controlId="lng">
                                <Form.Label>Imagen (cloudinary)</Form.Label>
                                <Form.Control type="text" value={this.state.image} onChange={this.handleInputChange} name="image" />
                            </Form.Group>

                            <Button style={{ marginTop: '20px', width: '100%' }} variant="success" type="submit">Añadir perr@ </Button>

                        </Form>
                    </Col>

                    <Col md={1}></Col>

                    <Col md={4}>
                        <br />

                        <h4> Completa todos los datos para facilitar a los paseadores la información para cubrir las nesidades y cuidados de tu mascota</h4>
                        <Link className="d-flex justify-content-center x" to="/mi-perfil">
                            <Button className="ov-btn-slide-left" variant="success" size="lg">Regresa a tu perfil</Button>
                        </Link>

                    </Col>
                </Row>

            </Container >
        )
    }
}

export default DogForm