//VISTA PAGINA USUARIOS
// la lista de usuarios se crea de manera independiente para poderla reutilizar

import UsersList from './UsersList'
import { Container } from 'react-bootstrap'

const UsersPage = () => {
    return (
        <Container>

            <UsersList />

        </Container>
    )
}

export default UsersPage