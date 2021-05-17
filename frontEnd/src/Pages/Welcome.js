import '../CSS/App.css';
import Button from '@material-ui/core/Button'; 
import ButtonGroup from '@material-ui/core/ButtonGroup'; 

function Welcome() {
  return (
    <div>
      <div className='box'>
        <form action="">
          <span className="text-center">Welcome to Valgrind</span>
          <div className="input-container">
            <input type="email" required="required" placeholder="User@gmail.com" href='/UserProfile' />
            <label>User:
          </label>
          </div>
          <div className="input-container">
            <input type="password" required="required" placeholder="************" />
            <label>Password:</label>
          </div>
          <ButtonGroup aria-label="Toolbar">
            <Button variant="default me-md-2" className="btn" href='#/Portal'>Ingresar</Button>{''}
            <Button variant="default me-md-2" className="btn" href='#/Register'>Registrar</Button>{''}
          </ButtonGroup>
        </form>
      </div>
    </div>
  );
}

export default Welcome;
