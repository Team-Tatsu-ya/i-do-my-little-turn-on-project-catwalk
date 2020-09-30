import React from 'react';
import StarRating from './StarRating.jsx';
import StarButton from './StarButton.jsx';
import XButton from './XButton.jsx';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

export default class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.current,
      list: 'related',
      classes: {
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
      }
    };

    this.useStyles = this.useStyles.bind(this);
  }

  componentDidMount () {
    this.useStyles();
  }

  useStyles() {
    makeStyles(this.state.classes);
  }

  // TODO: create some kind of if statement that toggles list between related and outfit

  render() {
    if (this.state.list === 'related') {
      var button = (
        <StarButton />
      );
    } else {
      button = (
        <XButton />
      );
    }

    return (
      <Card className={this.state.classes.root} variant="outlined">
        <CardContent>
          <IconButton list={this.state.list}>{button}</IconButton>
          <img src="https://i5.walmartimages.com/asr/112eb075-76cb-4e22-9024-8705b28ed68c_1.db544800fcbb66a69ac23cd555ec102f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" width="195" height="195" alt="" />
          <Typography className={this.state.classes.category} color="textSecondary" gutterBottom>
            {this.state.product.category.toUpperCase()}
          </Typography>
          <Typography className={this.state.classes.name} variant="h6" component="h2">
            <b>{this.state.product.name}</b>
          </Typography>
          <Typography className={this.state.classes.price} color="textSecondary">
            ${this.state.product.default_price}
          </Typography>
          <StarRating stars={this.props.stars} />
        </CardContent>
      </Card>
    );
  }
}





/*
COPY OF CODE IN CASE I MESS EVERYTHING UP

import React from 'react';
import StarRating from './StarRating.jsx';
import StarButton from './StarButton.jsx';
import XButton from './XButton.jsx';

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


export default function ProductCard (props) {
  const product = props.current;
  const classes = useStyles();
  const list = 'related';

  // TODO: create some kind of if statement that toggles list between related and outfit

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <StarButton list={list}/>
        <img src="https://i5.walmartimages.com/asr/112eb075-76cb-4e22-9024-8705b28ed68c_1.db544800fcbb66a69ac23cd555ec102f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff" width="195" height="195" alt="" />
        <Typography className={classes.category} color="textSecondary" gutterBottom>
          {product.category.toUpperCase()}
        </Typography>
        <Typography className={classes.name} variant="h6" component="h2">
          <b>{product.name}</b>
        </Typography>
        <Typography className={classes.price} color="textSecondary">
          ${product.default_price}
        </Typography>
        <StarRating stars={props.stars} />
      </CardContent>
    </Card>
  );

}

*/