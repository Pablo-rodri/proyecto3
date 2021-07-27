import axios from 'axios'

class AuthService {

    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/auth',
            withCredentials: true
        })
    }

    login = (userName, password) => this.app.post('/login', { userName, password })
    signup = (data) => this.app.post('/signup', data)
    logout = () => this.app.get('/logout')
    isLoggedIn = () => this.app.post('/isLoggedIn')
}

export default AuthService