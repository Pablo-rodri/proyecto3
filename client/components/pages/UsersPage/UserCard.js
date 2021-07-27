import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

const UserCard = ({ userName, role, image, _id }) => {
    return (
        <>
            {"UserWalk" === role
                ?
                <>
                    <Card border="primary">
                        <Card.Img className="imgusercard" variant="top" src={image} />
                        <Card.Body>

                            <Card.Title>{userName}</Card.Title>
                            <Card.Title>Paseador</Card.Title>

                            <Link to={`/usuarios/detalle/${_id}`}>
                                <Button variant="success" block >Ver detalles</Button>
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

                            <Link to={`/usuarios/detalle/${_id}`}>
                                <Button variant="success" block >Ver detalles</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </>
            }
        </>
    )
}

export default UserCard