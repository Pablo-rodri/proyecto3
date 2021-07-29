import { Component } from 'react'
import UsersService from '../../../services/user.service'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DogService from '../../../services/dog.service'
import DogsCard from './DogsCard'

class DogsListOwner extends Component {

    constructor() {
        console.log("prueba")
        super()
        this.state = {
            dogs: []
        }
        this.dogService = new DogService


    }
    componentDidMount() {

        const { user_id } = this.props.match.params
        console.log("hasdgsad")
        console.log(user_id)
        this.dogService
            .getAllDogsUser(user_id)
            .then(response => this.setState({ dogs: response.data }))
            .catch(err => console.log(err))
    }

    render() {

        return (

            <Row >
                {this.state.dogs.map(elm => (
                    <Col className="coluserlist" md={3}>
                        <DogsCard {...elm} />
                    </Col>
                ))}

                <Link className="linkprofile" to="/usuarios">
                    <Button className=".linkprofile" variant="success" block >Lista de usuari@s</Button>
                </Link>

            </Row>

        )
    }
}
export default DogsListOwner