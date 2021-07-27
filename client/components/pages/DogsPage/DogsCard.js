import { Card } from "react-bootstrap"


const DogsCard = ({ name, age, dogBreed, dogPPP, observations, image }) => {
    return (

        <>
            <Card border="primary">
                <Card.Img className="imgusercard" variant="top" src={image} />
                <Card.Body>

                    <Card.Title>Nombre:{name}</Card.Title>
                    <Card.Title>Edad:{age}</Card.Title>
                    <Card.Title>Raza:{dogBreed}</Card.Title>
                    <Card.Title>PPP:{dogPPP == true ? 'Si' : 'No'}</Card.Title>
                    <Card.Title>Observaciones:{observations}</Card.Title>


                </Card.Body>
            </Card>

        </>
    )
}

export default DogsCard