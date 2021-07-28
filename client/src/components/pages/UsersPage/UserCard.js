import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'


const UserCard = ({ userName, role, image, _id, telephone }) => {

    return (
        <>
            {"UserWalk" === role
                ?
                <>
                    <Card border="primary">
                        <Card.Img className="imgusercard" variant="top" src={image} />
                        <Card.Body>

                            <Card.Title>{userName}</Card.Title>
                            <Card.Title>Paseador/Paseadora</Card.Title>

                            <Link className="linkprofile" to={`/usuarios/detalle/${_id}`}>
                                <Button variant="success" block >Ver detalles</Button>
                            </Link>

                            <Link to={{ pathname: "https://wa.me/" + telephone + "?text=Hola " + userName + " Quiero+contactar+con+usted" }} target="_blank" >

                                <Button className="linkprofile" variant="success" block >Contactar por WhatsApp  </Button>
                            </Link>

                        </Card.Body>
                    </Card>
                </>
                :
                <>
                    <Card border="primary">
                        <Card.Img className="imgusercard" variant="top" src={image} />
                        <Card.Body>

                            <Card.Title>{userName}</Card.Title>
                            <Card.Title>Dueñ@</Card.Title>

                            <Link className="linkprofile" to={`/usuarios/detalle/${_id}`}>
                                <Button className=".linkprofile" variant="success" block >Ver detalles</Button>
                            </Link>
                            <Link to={`/perros_usuario/${_id}`} className="btn btn-warning linkprofile1">Mis perr@s</Link>
                            <Link to={{ pathname: "https://wa.me/" + telephone + "?text=Hola " + userName + " Quiero+contactar+con+usted" }} target="_blank" >

                                <Button className="linkprofile" variant="success" block >Contactar por WhatsApp  </Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </>
            }
        </>
    )
}

export default UserCard

// to={`/perros/${loggedUser._id}`}