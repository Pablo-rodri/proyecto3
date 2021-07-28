import { Component } from 'react'
import UsersService from '../../../services/user.service'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class UserDetails extends Component {

    constructor() {
        super()
        this.state = {
            users: '',
            role: ''
        }
        this.usersService = new UsersService()


    }
    componentDidMount() {
        const { user_id } = this.props.match.params

        this.usersService
            .getOneUser(user_id)
            .then(response => {
                this.setState({ users: response.data })
                console.log(response.data)

            })
            .catch(err => console.log(err))
    }

    handleClick = e => {
        this.props.showAlert('email enviado. Espera respuesta')
    }

    render() {

        return (
            <>
                {"UserWalk" == this.state.users.role
                    ?                   //si no esta logeado
                    <>
                        <Container>

                            <Row className="justify-content-around">
                                <Col md={6}>
                                    <h1>{this.state.users.userName}</h1>
                                    <p>{this.state.users.experience}</p>
                                    <hr />
                                    <p>Precio / hora: <b> {this.state.users.price}</b></p>
                                    <p>Entrenador: {this.state.users.dogTrainer == true ? <b> <p>Si</p> </b> : <b> <p>No</p> </b>}</p>
                                    <p>Admite perr@s PPP: {this.state.users.admisionPPP == true ? <b> <p>Si</p> </b> : <b> <p>No</p> </b>}</p>
                                    <p>Numero de perr@s maximo para pasear: <b>{this.state.users.maximumDogs}</b></p>
                                    <hr />
                                    <Link to="/usuarios" className="btn btn-success">Volver al listado</Link>
                                    <br />
                                    <br />
                                    <p>¿Quieres que <b> {this.state.users.userName} </b>te pasee a el/los perr@s?</p>
                                    <p>Nuestro sistema de contacto enviara a <b> {this.state.users.userName}</b> un email automaticamente con tu solicitud</p>
                                    <Link to="/usuarios/detalle/:user_id" onClick={this.handleClick} className="btn btn-success">Contactar</Link>
                                </Col>
                                <Col md={4}>
                                    <img src={this.state.users.image} alt={this.state.users.userName} style={{ width: '100%' }} />
                                </Col>
                            </Row>
                        </Container>
                    </>
                    :
                    <>
                        <Container>
                            <Row className="justify-content-around">
                                <Col md={6}>
                                    <h1>{this.state.users.userName}</h1>
                                    <hr />
                                    <p>Numero de perr@s: <b> {this.state.users.numberDogs}</b></p>
                                    <p>Perr@s PPP: {this.state.users.DogsPPP == true ? <b> <p>Si</p> </b> : <b> <p>No</p> </b>}</p>
                                    <p>Zona de paseo (codigo postal): <b> {this.state.users.postalCode}</b></p>
                                    <hr />
                                    <br />
                                    <Link to="/usuarios" className="btn btn-success">Volver al listado</Link>
                                    <br />
                                    <br />
                                    <p>¿Quieres sacar l@s perr@s de <b> {this.state.users.userName} </b>?</p>
                                    <p>Nuestro sistema de contacto enviara a <b> {this.state.users.userName}</b> un email automaticamente con tu solicitud</p>
                                    <Link to="/usuarios/detalle/:user_id" onClick={this.handleClick} className="btn btn-success">Contactar</Link>

                                </Col>
                                <Col md={4}>
                                    <img src={this.state.users.image} alt={this.state.users.userName} style={{ width: '100%' }} />
                                </Col>
                            </Row>
                        </Container>
                    </>
                }
            </>
        )
    }
}


export default UserDetails