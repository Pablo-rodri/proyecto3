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
                                    <p>Precio / hora: {this.state.users.price}</p>
                                    <p>Entrenador: {this.state.users.dogTrainer == true ? <p>Si</p> : <p>No</p>}</p>
                                    <p>Admite perr@s PPP: {this.state.users.admisionPPP == true ? <p>Si</p> : <p>No</p>}</p>
                                    <p>Numero de perr@s maximo para pasear: {this.state.users.maximumDogs}</p>
                                    <hr />
                                    <Link to="/usuarios" className="btn btn-success">Volver al listado</Link>
                                    <br />
                                    <br />
                                    <p>¿Quieres que <b> {this.state.users.userName} </b>te pasee a el/los perr@s?</p>
                                    <p>Nuestro sistema de contacto enviara a <b> {this.state.users.userName}</b> un email automaticamente con tu solicitud</p>
                                    <Link to="/usuarios" className="btn btn-success">Contactar</Link>
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
                                    <p>{this.state.users.experience}</p>
                                    <hr />
                                    <p>Numero de perr@s: {this.state.users.numberDogs}</p>
                                    <p>Perr@s PPP: {this.state.users.DogsPPP == true ? <p>Si</p> : <p>No</p>}</p>
                                    <p>Zona de paseo (codigo postal): {this.state.users.postalCode}</p>
                                    <hr />
                                    <br />
                                    <Link to="/usuarios" className="btn btn-success">Volver al listado</Link>
                                    <br />
                                    <br />
                                    <p>¿Quieres sacar l@s perr@s de <b> {this.state.users.userName} </b>?</p>
                                    <p>Nuestro sistema de contacto enviara a <b> {this.state.users.userName}</b> un email automaticamente con tu solicitud</p>
                                    <Link to="/usuarios" className="btn btn-success">Contactar</Link>
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