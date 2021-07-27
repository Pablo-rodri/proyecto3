import { Container, Row, Col } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Profile = ({ loggedUser }) => { //como le indico el role del usuario logeado
    console.log(loggedUser)

    return (

        <>
            {"UserWalk" === loggedUser.role
                ?
                <>
                    <Container>
                        <h1>Bienvenid@, {loggedUser.userName}</h1>

                        <Row>
                            <Col md={6}>
                                <img className="imgprofile" src={loggedUser.image} />
                            </Col>

                            <Col md={1}> </Col>

                            <Col md={4}>
                                <p>
                                    Bienvenid@, desde tu perfil personal podras modificar todos tus datos
                                </p>
                                <Link to="/usuarios" className="btn btn-secondary">Listado de usuari@s</Link>
                                <hr />
                                <Link to={`/usuarios/detalle/editar/${loggedUser._id}`} className="btn btn-secondary">Editar perfil</Link>
                                <br />
                                <br />
                                <Link to="/usuarios/detalle/eliminar" className="btn btn-danger">Eliminar perfil</Link>

                            </Col>
                        </Row>
                    </Container>

                </>
                :
                <>
                    <Container>
                        <Row>
                            <Col md={5}>
                                <img className="imgprofile" src={loggedUser.image} />
                            </Col>
                            <Col md={1}> </Col>
                            <Col md={4}>
                                <p>
                                    Bienvenid@, desde tu perfil personal podras modificar todos tus datos
                                </p>
                                <h5>
                                    <b> ¡¡No te olvides de añadir a tus perr@s!!</b>
                                    <Link to={`/añadir-perro/usuarios/detalle/perros/${loggedUser._id}/añadir-perro`} className="btn btn-warning linkprofile1">Añadir perr@s</Link>
                                    <hr />
                                    <Link to={`/perros/${loggedUser._id}`} className="btn btn-warning linkprofile1">Mis perr@s</Link>
                                </h5>
                                <Link to="/usuarios" className="btn btn-secondary linkprofile">Listado de usuari@s</Link>
                                <hr />

                                <Link to={`/usuarios/detalle/editar/dueño/${loggedUser._id}`} className="btn btn-secondary linkprofile">Editar perfil</Link>
                                <Link to="/usuarios/detalle/eliminar" className="btn btn-danger linkprofile">Eliminar perfil</Link>

                            </Col>
                        </Row>
                    </Container>

                </>

            }
        </>


    )

}
export default Profile