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

export default function StarButton(props) {
  const classes = useStyles();

  // TODO: add onClick functionality that opens comparison modal window
  // onClick={() => { this.showModal(); }} ?

  return (
    <StarBorderRoundedIcon size="small"/>
  );
}

