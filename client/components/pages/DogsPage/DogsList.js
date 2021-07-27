import { Component } from "react"
import { Row, Col } from "react-bootstrap"
import DogService from '../../../services/dog.service'
import DogsCard from "./DogsCard"


class DogsList extends Component {

    constructor() {
        super()
        this.state = {
            dogs: [],
        }
        this.dogService = new DogService
    }

    componentDidMount = () => {
        console.log(this.props)
        let user_id = this.props
        this.dogService
            .getAllDogsUser(this.props.loggedUser._id)
            .then(response => this.setState({ dogs: response.data }))

    }

    render() {

        return (

            <Row >
                {this.state.dogs.map(elm => (
                    <Col className="coluserlist" md={3}>
                        <DogsCard {...elm} />
                    </Col>
                ))}

            </Row>

        )
    }
}

export default DogsList



