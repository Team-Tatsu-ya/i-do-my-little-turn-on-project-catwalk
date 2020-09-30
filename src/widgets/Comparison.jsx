import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import CheckIcon from '@material-ui/icons/Check';

// Instructions for creating modal window: https://material-ui.com/components/modal/

const useStyles = makeStyles({
  header: {
    fontSize: 10
  },
  name: {
    fontSize: 13
  },
  characteristic: {
    fontSize: 11,
    alignContent: 'center'
  },
  check: {
    alignContent: 'center'
  }
});

// const handleOpen = () => {
//   setOpen(true);
// };

// const handleClose = () => {
//   setOpen(false);
// };

export default function Comparison(props) {
  const classes = useStyles();

  // TODO: methods for pulling in characteristics data for both products

  return (
    <div>
      <Typography className={classes.header} color="textSecondary" gutterBottom>
        COMPARING
      </Typography>


      <table>
        <thead>
          <td>
            <Typography className={classes.name} variant="h6" component="h2">
              {/* need to align left */}
              <b>Current Product Name</b>
            </Typography>
          </td>
          <td></td>
          <td>
            <Typography className={classes.name} variant="h6" component="h2">
              {/* need to align right */}
              <b>Selected Product Name</b>
            </Typography>
          </td>
        </thead>
        {/* need to map over join table of characteristics of both products and create a table row with each characteristic in column 2 */}
        <tbody>
          <tr>
            <td><CheckIcon /></td>
            <td>
              <Typography className={classes.characteristic} color="textSecondary" gutterBottom>
                Characteristic 1
              </Typography>
            </td>
            <td><CheckIcon /></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Typography className={classes.characteristic} color="textSecondary" gutterBottom>
                Characteristic 2
              </Typography>
            </td>
            <td><CheckIcon /></td>
          </tr>
          <tr>
            <td><CheckIcon /></td>
            <td>
              <Typography className={classes.characteristic} color="textSecondary" gutterBottom>
                Characteristic 3
              </Typography>
            </td>
            <td></td>
          </tr>
          {/* columns 1 and 3 will note characteristics for each product (true will render <CheckIcon/> and values will display) */}
        </tbody>
      </table>
    </div>
  );
}