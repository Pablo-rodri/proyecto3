import { Container, Button } from 'react-bootstrap'
import DogsList from './DogsList'
import { Link } from 'react-router-dom'

const DogsPage = (props) => {
    return (
        <Container>

            <DogsList loggedUser={props.loggedUser} />
            <Link to="/mi-perfil">
                <Button className="btn btn-secondary linkprofile">Volver al perfil</Button>
            </Link>

        </Container>

    )
}

export default DogsPage