import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
// import { positions } from '@material-ui/system';


const useStyles = makeStyles({
  starButton: {
    edge: -10
  }
});

export default function ActionButton(props) {
  const classes = useStyles();
  // var type = 'star' || 'x';

  // TODO: an if statement that changes type between star and x depending on whether the product card is for related list or outfit list, each will also have their own icon and actions, can pull type from each list's state as prop

  return (
    <IconButton aria-label="add to outfit" className={classes.starButton}>
      <StarBorderRoundedIcon size="small"/>
    </IconButton>
  );
}