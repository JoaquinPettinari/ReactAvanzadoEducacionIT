import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { connect } from "react-redux";
import { fetchGetNews } from '../../actions/fetchGetNewsInfo'

const useStyles = makeStyles(() => ({
    root:{
        margin:'20px',
        display:'flex',
        justifyContent:'center'
    },    
}))

function Seeker(props){
    const { fetchGetNews } = props
    const classes = useStyles()
    const [ newsSearch, setNewsSearch ] = useState("")

    const searchNews = () =>{    
        fetchGetNews(newsSearch)
    }

    return(
        <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={10} className={classes.root}>                
                <TextField
                    label="Find a news"
                    value={newsSearch}
                    onChange={(e) => setNewsSearch(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={searchNews}>
                    Search
                </Button>                
            </Grid>
        </Grid>
    )
}

const mapStateToProps = state => ({
    articles: state.newsReducer,  
});
  
const mapDispatchToProps = {
    fetchGetNews
};

export default connect(mapStateToProps, mapDispatchToProps)(Seeker);