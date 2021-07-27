import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {

    return (
        <footer>
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        Contacta con nosotros
                    </Col>
                    <Col xs={6} md={4}>
                        Politica de Diversidad
                    </Col>
                    <Col xs={6} md={4}>
                        Sigue nuestras novedades en twitter
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer