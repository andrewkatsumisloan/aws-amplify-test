import './App.css';
import logo from './taxfoundationlogo.png'
import Button from './Buttons/Button.js'
import InputField from './Search/InputField.js'


const App = () => {

  const submitHandler = () => {

    console.log('Submit Handler Test')
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" width='250' height='180' />
        <h1> Taxes and Growth Model </h1>
        <p>
          This is a test application to demo AWS-Amplify. <br />
          Let's make a basic interface for the TAG model.
        </p>
      </header>
      <form>
        <div className='table'>
          <table >
            <tr>
              <InputField label='Parameter Name:' name='Name'> </InputField>
            </tr>
            <br></br>

            <tr>
              <InputField label='Parameter Value:' name='Value'> </InputField>
            </tr>
            <br></br>

            <tr>
              <InputField label='Year:' name='Year'> </InputField>
            </tr>
            <br></br>
          </table>
        </div>
      </form>

      <form>
        <label> Subsample: </label>
        <input type="checkbox" />
      </form>

      <div className='buttons'>
        <Button
          value='Add Parameter'
          onClick={submitHandler}>
        </Button>
        <Button value='Clear Parameters'> </Button>
        <Button value='Run Single-Year Model'> </Button>
        <Button value='Terminate'> </Button>
      </div>
    </div >
  );
}


export default App;
