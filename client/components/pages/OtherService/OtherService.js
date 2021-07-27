import { Container, Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const OtherService = () => {

    return (
        <>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={6}>
                        <br />
                        <h2>Te ayudamos a que cuides de tu perr@</h2>
                        <p>Empresas que colaboran con nosotr@s</p>
                    </Col>
                </Row>
                <hr></hr>
            </Container>

            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={3} >
                        <img
                            className="imgservice"
                            src="https://www.mixpeludos.es/wp-content/uploads/2019/12/Favicon-logotipo-mixpeludos-peluqueria-canina-felina-perro-gato.jpg"
                            alt="Third slide"
                        />
                        <h5> Peluqueria canina "Pelos"</h5>
                        <p><Link>Contacta con nosotros</Link> grandes descuentos para usuarios registrados en <b>YoLoPaseo.com </b></p>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <img
                            className="imgservice"
                            src="https://i.pinimg.com/originals/02/62/33/0262331c9eb1a5a9a878065f1f899726.jpg"
                            alt="Third slide"
                        />
                        <h5> Centro veterinario "HelpCan"</h5>
                        <p><Link>Contacta con nosotros</Link> grandes descuentos para usuarios registrados en <b>YoLoPaseo.com </b></p>
                    </Col>
                    <Col md={1}></Col>
                    <Col md={3}>
                        <img
                            className="imgservice"
                            src="https://st2.depositphotos.com/5592054/8345/v/600/depositphotos_83454704-stock-illustration-pet-shop-dog-logo.jpg"
                            alt="Third slide"
                        />
                        <h5> Tienda de accesorios para tu mascota "Dog Accessories"</h5>
                        <p><Link>Contacta con nosotros</Link> grandes descuentos para usuarios registrados en <b>YoLoPaseo.com </b></p>
                    </Col>
                </Row>
            </Container>

            <br />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md={4} className="d-flex justify-content-center">
                        <Link to="/">
                            <Button variant="success" size="lg">Inico</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default OtherService