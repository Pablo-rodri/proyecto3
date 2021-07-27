import { Container, Button, Col, Row, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IndexPage = () => {

    return (
        <>
            <Carousel >
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://perrospequeños.es/wp-content/uploads/2019/08/cachorro-jack-russel-tumbado.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Sea como sea tu perr@</h3>
                        <p>Aqui podemos ayudarte</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://izekan.com/wp-content/uploads/2019/11/Adiestramiento-en-grupo-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Tenemos sitio para tod@s</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-img"
                        src="https://www.hogarmania.com/archivos/201609/boyero-berna-perro-raza-XxXx80.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h2>YoLoPaseo.com</h2>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <br />
            <br />
            <Container >
                <Row className="d-flex justify-content-center">

                    <Col md={5}>
                        <h3>Quiero pasear a tu perr@</h3>
                        <p>Te gustan los perro@s y tienes tiempo libre. Esta es tu Web. Antes de registrarte debes aceptar las <Link>Condiciones del servicio</Link> de <b>YoLoPaseo.com </b>. Después solo debes registrarte como paseador@ y ponerte en contacto con l@s dueñ@s de l@s perr@s. Usamos una plataforma segura de contacto.</p>
                        <Link className="d-flex justify-content-center x" to="/usuarios/crear/paseador">
                            <Button className="ov-btn-slide-left" variant="success" size="lg">Registrarme como pasead@r</Button>
                        </Link>
                    </Col>

                    <Col md={1}></Col>

                    <Col md={5}>
                        <h3>Necesito que paseen a mi perr@</h3>
                        <h5>¡No importa si tienes más de uno!</h5>
                        <p>En ocasiones no tienes tiempo para pasear a tu perr@ todo lo que necesita. Esta es tu Web. Antes de registrarte debes aceptar las <Link>Condiciones del servicio</Link> de <b>YoLoPaseo.com </b>. Después solo debes registrarte como dueñ@ y ponerte en contacto con l@s paeadores de perr@s. Usamos una plataforma segura de contacto.</p>
                        <Link className="d-flex justify-content-center x" to="/usuarios/crear/dueño">
                            <Button className="ov-btn-slide-left" variant="success" size="lg">Registrarme como dueñ@</Button>
                        </Link>
                        <br />
                        <br />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default IndexPage

