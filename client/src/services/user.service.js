import axios from "axios";
class UserService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/user'
        })
    }

    getAllUser = () => this.app.get('/getAllUser')
    getOneUser = user_id => this.app.get(`/getOneUser/${user_id}`)
    newUser = info_user => this.app.post('/newUser', info_user)
    editUser = (user_id, info_user) => this.app.put(`/editUser/${user_id}`, info_user)
    // rutas pendientes

}

export default UserService