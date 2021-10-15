import './App.css';
import { Button, Grid, TextField } from '@material-ui/core'
import { connect } from 'react-redux'
import { fetchGetNews } from './actions/fetchGetNewsInfo'
import { useState } from 'react';

function App(props) {
  const { articles, fetchGetNews } = props
  const [ newsSearch, setNewsSearch ] = useState("")

  const searchNews = () =>{    
    fetchGetNews(newsSearch)
  }

  return (
    <Grid container justifyContent="center" spacing={3}>
      <Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
        <TextField
          label="Find a news"
          value={newsSearch}
          onChange={(e) => setNewsSearch(e.target.value)}
        />
        {console.log(articles)}
      </Grid>
      <Grid item xs={12} style={{display:'flex', justifyContent:'center'}}>
        <Button variant="contained" color="primary" onClick={searchNews}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  articles: state.newsReducer,  
});

const mapDispatchToProps = {
  fetchGetNews
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
