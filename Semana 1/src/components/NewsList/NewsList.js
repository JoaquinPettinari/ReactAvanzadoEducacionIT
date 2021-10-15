import { Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import { connect } from "react-redux";
import LinkIcon from '@material-ui/icons/Link';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteNews } from '../../actions/action';
import { formatCurrentDay } from '../../utils/dateFormatter'
const useStyles = makeStyles(() => ({
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}))

function NewsList(props){
    const { articles, deleteNews } = props
    const classes = useStyles()


    const goToPost = (url) => {
        window.open(url, '_blank')
    }

    const removeNews = (index) => {
        deleteNews(index)
    }    

    return(
        <Grid container spacing={2} justifyContent="center">
            {console.log(articles)}
            { articles.map((news, index) => {
                const { author, title, description, url, urlToImage, publishedAt } = news
                return(
                    <Grid key={index} item xs={11} sm={6} md={4}>
                        <Card>
                            <CardHeader
                                title={title}
                                subheader={`${author ? `${author} -` : ''} ${formatCurrentDay(publishedAt)}`}
                                action={
                                    <IconButton aria-label="settings" onClick={() => goToPost(url)}>
                                      <LinkIcon />
                                    </IconButton>
                                }
                            />
                            <CardMedia
                                className={classes.media}
                                image={urlToImage}
                                title={title}
                                />
                        </Card>
                        <CardContent>
                            <Typography variant="body1">
                                {description}
                            </Typography>                            
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton onClick={() => removeNews(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </CardActions>
                    </Grid>
                )
            })
            }
        </Grid>
    )
}

const mapStateToProps = state => ({
    articles: state.newsReducer.articles,  
});

const mapDispatchToProps = {
    deleteNews
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);






