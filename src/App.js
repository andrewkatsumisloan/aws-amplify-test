import './App.css';
import logo from './taxfoundationlogo.png'
import Button from './Buttons/Button.js'
import SearchBox from './Search/SearchBox.js'
import Box from "@material-ui/core/Box";


function App() {
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
        <label> Parameter Name:  </label>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="1vh"
        >
          <SearchBox className='searchbox' name='Name' />
        </Box>
        <br />

        <label> Parameter Value:  </label>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="1vh"
        >
          <SearchBox className='searchbox' name='Value' />
        </Box>
        <br />

        <label> Year:  </label>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="1vh"
        >
          <SearchBox className='searchbox' name='Year' />
        </Box>
      </form>

      <form>
        <label> Subsample: </label>
        <input type="checkbox" />
      </form>

      <div className='buttons'>
        <Button value='Add Parameter'> </Button>
        <Button value='Clear Parameters'> </Button>
        <Button value='Run Single-Year Model'> </Button>
        <Button value='Terminate'> </Button>
      </div>
    </div>
  );
}


export default App;
