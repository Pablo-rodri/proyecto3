import { Switch, Route, Redirect } from 'react-router-dom'
import IndexPage from './../pages/IndexPage/IndexPage'
import UsersPage from './../pages/UsersPage/UsersPage'
import UserWalkForm from '../pages/UserForm/UserWalkForm'
import UserOwnerForm from '../pages/UserForm/UserOwnerForm'
import UserDetails from '../pages/UserDetail/UserDetails'
import Login from '../pages/Login/Login'
import Profile from '../pages/Profile/Profile'
import OtherService from '../pages/OtherService/OtherService'
import DogForm from '../pages/DogForm/DogForm'
import EditUserWalkForm from '../pages/EditProfile/EditProfile'
import EditOwnerProfile from '../pages/EditProfile/EditOwnerProfile'
import DogsPage from '../pages/DogsPage/DogsPage'


const Routes = ({ storeUser, loggedUser, showAlert }) => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/usuarios" exact render={() => <UsersPage loggedUser={loggedUser} />} />
            <Route path="/usuarios/crear/paseador" render={props => <UserWalkForm {...props} />} />
            <Route path="/usuarios/crear/dueño" render={props => <UserOwnerForm {...props} />} />
            <Route path="/usuarios/detalle/:user_id" exact render={props => <UserDetails {...props} />} />
            <Route path="/iniciar-sesion" render={props => <Login {...props} storeUser={storeUser} showAlert={showAlert} />} />
            <Route path="/mi-perfil" render={() => loggedUser ? <Profile loggedUser={loggedUser} /> : <Redirect to="/" />} />
            <Route path="/otros-servicios" exact render={() => <OtherService />} />
            <Route path="/añadir-perro" render={props => <DogForm loggedUser={loggedUser} {...props} />} />
            <Route path="/usuarios/detalle/editar/:user_id" exact render={props => <EditUserWalkForm {...props} />} />
            <Route path="/usuarios/detalle/editar/dueño/:user_id" render={props => <EditOwnerProfile {...props} />} />
            {/* <Route path="/perros" exact render={() => <DogsPage loggedUser={loggedUser} />} /> */}
            <Route path="/perros/:user_id" exact render={props => <DogsPage loggedUser={loggedUser} {...props} />} />
        </Switch>
    )
}


export default Routes

