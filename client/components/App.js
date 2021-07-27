import { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from './layout/footer/Footer'
import Navigation from './layout/navigation/Navigation'
import Routes from './routes'
import AuthService from '../services/auth.service'
import Alert from './shared/Alert/Alert';



class App extends Component {  //convierto app en un componente de clase

  constructor() {
    super()
    this.state = {
      loggedUser: undefined,
      toast: {
        text: '',
        show: false
      }
    }
    this.authService = new AuthService()
  }

  storeUser = loggedUser => this.setState({ loggedUser })
  showAlert = text => this.setState({ toast: { show: true, text } })
  fetchUser = () => { // metodo que guarda al usuario logeado en caso de que estuviera logeado
    this.authService
      .isLoggedIn()
      .then(theLoggedUser => {

        this.storeUser(theLoggedUser.data)
        console.log(theLoggedUser.data)
      })

      .catch(() => this.storeUser(undefined))

  }

  componentDidMount = () => this.fetchUser()

  render() {

    return (
      <>
        <Navigation storeUser={this.storeUser} loggedUser={this.state.loggedUser} showAlert={this.showAlert} />

        <Routes storeUser={this.storeUser} loggedUser={this.state.loggedUser} showAlert={this.showAlert} />

        <Footer />
        <Alert show={this.state.toast.show} text={this.state.toast.text} closeAlert={() => this.setState({ toast: { ...this.state.toast, show: false } })} />
      </>
    )
  }
}

export default App;

//app. componente raiz. funcion que retorna JSX
