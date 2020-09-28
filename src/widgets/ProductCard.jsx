import React from 'react';
import StarRating from './StarRating.jsx';
import ActionButton from './ActionButton.jsx';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth: 200,
    minHeight: 300,
    maxHeight: 500
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  category: {
    fontSize: 10,
  },
  name: {
    fontSize: 13
  },
  price: {
    fontSize: 10,
    marginBottom: 8,
  },
});

export default function ProductCard(props) {
  var product = props.current;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <ActionButton />
        <img src="https://i5.walmartimages.com/asr/112eb075-76cb-4e22-9024-8705b28ed68c_1.db544800fcbb66a69ac23cd555ec102f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" width="195" height="195" alt=""/>
        <Typography className={classes.category} color="textSecondary" gutterBottom>
          {product.category.toUpperCase()}
        </Typography>
        <Typography className={classes.name} variant="h6" component="h2">
          <b>{product.name}</b>
        </Typography>
        <Typography className={classes.price} color="textSecondary">
          ${product.default_price}
        </Typography>
        <StarRating stars={props.stars}/>
      </CardContent>
    </Card>
  );
}