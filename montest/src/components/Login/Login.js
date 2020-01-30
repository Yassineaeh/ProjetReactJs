import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
//import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends React.Component{
    
        state = {
            login :"",
            passe:"",
            suivant:false
          }

          vers(){
              if(this.state.login===""||this.state.passe){
                  alert("L'un des champs est vide")
              }
          }

         

    render(){
        return(
        <div>
            <form>
                
                    <Label>Nom d'utilisateur</Label>
                    <Input style={{width:"20%",marginLeft:"40%"}} className="log" type="text" 
                    onChange={(e)=> this.setState({login: e.target.value})}/>

                     <Label>Mot de passe</Label>
                     <Input style={{width:"20%",marginLeft:"40%"}} className="log" type="password"
                     value={this.state.passe}
                     onChange={(e)=> this.setState({passe: e.target.value})}/>

                    <Button onClick={this.vers}>Connexion</Button>
            </form>
        </div>
        )
    }

}
export default Login