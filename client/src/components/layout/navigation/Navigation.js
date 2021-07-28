import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AuthService from '../../../services/auth.service'

const Navigation = ({ storeUser, loggedUser, showAlert }) => {


    const authserVice = new AuthService()


    const logout = () => {
        authserVice
            .logout()
            .then(() => {
                showAlert('Sesion cerrada')
                storeUser(undefined)
            })
            .catch(err => console.log(err))
    }

    return (

        <>

            {!loggedUser
                ?                   //si no esta logeado
                <>
                    <Navbar bg="success " variant="dark">

                        <Navbar.Brand href="/">
                            <img
                                alt="" //CAMBIAR IMAGEN
                                src="https://previews.123rf.com/images/lcosmo/lcosmo1512/lcosmo151200014/50040572-icono-o-s%C3%ADmbolo-del-coraz%C3%B3n-con-la-huella-de-la-pata-del-perro-de-animal-ideal-para-veterinario-info.jpg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}

                            <Navbar.Brand href="/">YoLoPaseo.com</Navbar.Brand>
                        </Navbar.Brand>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="mr-auto justify-content-end">

                                <Link className="nav-link" to="/iniciar-sesion">Iniciar sesion</Link>
                                <Link className="nav-link" to="/usuarios">Lista usuario(prueba)</Link>
                                <Link className="nav-link" to="/otros-servicios">Otros servicios</Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </>                  //si esta logeado
                :
                <>
                    <Navbar bg="success " variant="dark">
                        <Navbar.Brand href="/">
                            <img
                                alt="" //CAMBIAR IMAGEN
                                src="https://previews.123rf.com/images/lcosmo/lcosmo1512/lcosmo151200014/50040572-icono-o-s%C3%ADmbolo-del-coraz%C3%B3n-con-la-huella-de-la-pata-del-perro-de-animal-ideal-para-veterinario-info.jpg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}

                            <Navbar.Brand href="/">YoLoPaseo.com</Navbar.Brand>
                        </Navbar.Brand>


                        <Navbar.Collapse className="justify-content-end">
                            <Nav className="mr-auto justify-content-end">
                                <Navbar.Brand href="/">
                                    <img
                                        alt="" //CAMBIAR IMAGEN
                                        src={loggedUser.image}
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                    />{' '}

                                </Navbar.Brand>

                                <Link className="nav-link" to="/mi-perfil">Perfil</Link>
                                <Link className="nav-link" to="/" onClick={logout}>Cerrar sesión</Link>
                                <Link className="nav-link" to="/usuarios">Lista usuari@s</Link>
                                <Link className="nav-link" to="/otros-servicios">Otros servicios</Link>
                                <span className="nav-link">¡Bienvenid@, {loggedUser ? loggedUser.userName : 'invitad@'}!</span>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                </>
            }


        </>
    )
}

export default Navigation