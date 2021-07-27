import { Toast } from "react-bootstrap"
import logo from "./logo.png"

const Alert = ({ text, show, closeAlert }) => {

    return (

        <Toast show={show} delay={3000} onClose={closeAlert} autohide style={{ position: 'absolute', right: 40, bottom: 100 }}>
            <Toast.Header closeButton={false}>
                <img
                    src={logo}
                    className="rounded mr-2"
                    alt=""
                    style={{ width: 30 }}
                />
                <strong className="mr-auto"><br />Aviso al Usuario</strong>

            </Toast.Header>
            <Toast.Body>{text}</Toast.Body>
        </Toast>
    )

}

export default Alert

// onClose={() => setShow(false)} show={show} no las reconoce