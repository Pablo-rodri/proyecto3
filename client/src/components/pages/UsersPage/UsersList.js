
import { Component } from "react"
import { Row, Col } from "react-bootstrap"
import UsersService from '../../../services/user.service' //trae la informacion del servidor a traves del service creado
import UserCard from "./UserCard"


class UsersList extends Component {

    // el constructor es lo 1 que se ejecuta
    constructor(props) {
        super()
        this.state = {
            users: [],
            role: props.role
        }
        this.usersService = new UsersService // me instacio los servicios
    }

    componentDidMount = () => {

        this.usersService
            .getAllUser()

            .then(response => {
                this.setState({ users: response.data })
                console.log(this.state.users)
            })

            .catch(err => console.log(err))

    }

    render() {

        return (

            <Row >
                {this.state.users.map(elm => (
                    <Col className="coluserlist" md={3}>
                        <UserCard {...elm} />
                    </Col>
                ))}

            </Row>

        )
    }
}

export default UsersList




