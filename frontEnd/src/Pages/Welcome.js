import React from 'react';
import '../CSS/App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
// TODO: Fix the error of missign "{" check this page for more info https://www.pluralsight.com/guides/extracting-input-from-a-form-with-reactjs


class Welcome extends React.Component {

  handleNameChange(event) { 
    var user = this.state.user; 
    user.name = event.target.value; 
    this.setState({user:user}); 
  }

  handleButtonClicked(){
    console.log(this.state.user); 
    alert(this.state.user); 
  }

  constructor(props) {
    super(props);
    this.state = { 
      user: {
        name: props.name
      }
    }
  }




  render() {
    return (
      <div>
        <div className='box'>
          <form action="">
            <span className="text-center">Welcome to Valgrind</span>
            <div className="input-container">
              <input type="email" required="required" placeholder="User@gmail.com" value={this.state.user.name} onChange={this.handleNameChange(this)} />
              <label>User:
          </label>
            </div>
            <div className="input-container">
              <input type="password" placeholder="************" />
              <label>Password:</label>
            </div>
            <ButtonGroup aria-label="Toolbar">
              {/* <Button variant="default me-md-2" className="btn" href='#/Portal'>Ingresar</Button>{''} */}
              <Button variant="default me-md-2" className="btn" >setDData</Button>{''}
              {/* <Button variant="default me-md-2" className="btn" href='#/Register'>Registrar</Button>{''} */}
              <Button variant="default me=md-2" className="btn" onClick={this.handleButtonClicked.bind(this)}> getData </Button> 
            </ButtonGroup>
          </form>
        </div>
      </div>
    );
  }
}
export default Welcome; 