import React from "react";
import material, { CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import { sizing } from '@material-ui/system';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles({
  dropDown: {
    textDecorationColor: "#fafafa",
    color: 'secondary',
    padding: '25px',
    height: 'auto',
    width: 'auto',
  }

});

const categories = ['All', 'General Knowledge', 'Entertainment: Books', 'Entertainment: Film', 'Entertainment: Music', 'Entertainment: Musicals & Theatres', 'Entertainment: Television', 'Entertainment: Video Games', 'Entertainment: Board Games', 'Science & Nature', 'Science: Computers', 'Science: Mathematics', 'Mythology',  'Sports', 'Geography', 'History', 'Politics', 'Art', 'Celebrities', 'Animals', 'Vehicles', 'Entertainment: Comics', 'Science: Gadgets', 'Entertainment: Anime', 'Entertainmet: Cartoons'];

const categoryList = categories.map((cat, index) =>
  <MenuItem key={index} value={cat}>{cat}</MenuItem>
);
const difficulties = ['Any', 'Easy', 'Medium', 'Hard'];

const diffList = difficulties.map((diff, index) =>
  <MenuItem key={index} value={diff}>{diff}</MenuItem>
)

function LetsPlay(props) {
  const classes = useStyles();

  const setCategory = (event) => {
    props.setCategory(event.target.value);
  }
  const setDifficulty = (event) => {
    props.setDifficulty(event.target.value);
  }

  return (
    <Grid container justify='center' direction='row' spacing={1} style={{ margin: '8px' }}>
      <Grid container justify='center' spacing={1} style={{ marginBottom: '8px' }}>
        <Card>
          <CardContent>
            <Grid item xs={2} >

              <FormControl color='secondary' variant='outlined' className={classes.dropDown} >
                <InputLabel color='secondary' style={{ color: '#ffca28' }} id="selectCategory">Category</InputLabel>
                <Select
                  labelId="selectCategory"
                  id="category"
                  value={props.state.category || 'All'}
                  required
                  color="secondary"
                  onChange={setCategory}
                >
                  <FormHelperText style={{ color: '#ffca28' }} color='secondary'>Pick a Category!</FormHelperText>
                  {categoryList}
                </Select>
              </FormControl>

            </Grid>

            <Grid item xs={2}>

              <FormControl color='secondary' variant='outlined' className={classes.dropDown} >
                <InputLabel color='secondary' style={{ color: '#ffca28' }} id="selectDifficulty">Difficulty</InputLabel>
                <Select
                  labelId="selectDifficulty"
                  id="difficulty"
                  value={props.state.difficulty || 'Any'}
                  required
                  color="secondary"
                  onChange={setDifficulty}
                >
                  <FormHelperText style={{ color: '#ffca28' }} color='secondary'>Choose your Difficulty!</FormHelperText>
                  {diffList}
                </Select>
              </FormControl>


            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Button stlye={{ height: '25px', marginTop: '8px' }} variant='contained' color='secondary' onClick={props.gameOn}>Game On!</Button>
    </Grid >

  )
}

export default LetsPlay;