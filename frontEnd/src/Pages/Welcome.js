import React from 'react';
import '../CSS/App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// TODO: Fix the error of missign "{" check this page for more info https://www.pluralsight.com/guides/extracting-input-from-a-form-with-reactjs


class Welcome extends React.Component {

  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.state = {
      id: '',
      name: '',
      password: '',
      position: ''
    }
  }

  onChangeName(e) {
    this.setState({ name: e.target.value })
  }
  onChangePassword(e) {
    this.setState({ password: e.target.value })
  }

  async getCredentials() {
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: this.state.name }),
    };
    const response = await fetch('login', options);
    const data = await response.json();
    console.log("this is the data")
    console.log(data);
    sessionStorage.clear();
    if (data.login) {
      sessionStorage.setItem('name', data.resultado.name);
      sessionStorage.setItem('id', data.resultado.id);
      sessionStorage.setItem('position', data.resultado.position);
      sessionStorage.setItem('manager', data.resultado.manager);
      sessionStorage.setItem('password', data.resultado.password);
      window.open('#/Portal', "_self")
    }
    else {
      alert("username or password is wrong")
    }
  }

  render() {
    return (
      <div>
        <div className='box'>
          <form action="">
            <span className="text-center">Welcome to Valgrind</span>
            <div className="input-container">
              <input type="email" required="required" placeholder="User@gmail.com" value={this.state.name} onChange={this.onChangeName.bind(this)} />
              <label>User:</label>
            </div>
            <div className="input-container">
              <input type="password" required='required' placeholder="************" value={this.state.password} onChange={this.onChangePassword.bind(this)} />
              <label>Password:</label>
            </div>
            <ButtonGroup aria-label="Toolbar">
              <Button variant="default me-md-2" className="btn" onClick={this.getCredentials.bind(this)}>Login</Button>{''}

              <Button variant="default me-md-2" className="btn" href='#/Register'>Register</Button>{''}
            </ButtonGroup>
          </form>
        </div>
      </div>
    );
  }
}
export default Welcome;