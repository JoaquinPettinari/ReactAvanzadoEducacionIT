import { Grid } from '@material-ui/core';
import './App.css';
import NewsList from './components/NewsList/NewsList';
import Seeker from './components/Seeker/Seeker';

function App() {  

  return (
    <Grid>
      <Seeker />
      <NewsList />
    </Grid>
  );
}

export default App;
