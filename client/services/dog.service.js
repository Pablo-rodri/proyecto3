import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/dog',
            withCredentials: true
        })
    }
    getAllDogsUser = user_id => this.app.get(`/getAllDogsUser/${user_id}`)
    getOneDog = dog_id => this.app.get(`/getOneDog/${dog_id}`)
    newDog = (data) => this.app.post('/newDog', data)

}

export default AuthService