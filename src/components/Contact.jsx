import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Card, CardMedia, CardContent, Grid, TextField, MenuItem, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(4),
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.grey[200], // Light gray color
  },
  footerText: {
    textAlign: 'center',
  },
  coverImage: {
    height: 200, // Fixed height
    width: '100%', // Takes full width of the container
    objectFit: 'cover',
  },
  card: {
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    backgroundColor: '#f5f5f5', // Light grey background
    maxWidth: '700px',
  },
  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  formControl: {
    marginBottom: theme.spacing(2),
    minWidth: 120,
  },
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  const responsiveFontSize = {
    [theme.breakpoints.up('md')]: {
      fontSize: '1.5rem', // Adjust font size for medium screens and up
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem', // Adjust font size for small screens
    },
  };

  const subjects = [
    'General Inquiry',
    'Sales',
    'Support',
    'Other',
  ];

  return (
    <div>
      {/* Header */}
      <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
        <Toolbar>
          <CardMedia
            component="img"
            sx={{
              height: 30,
              width: 30,
              marginRight: 2,
            }}
            alt="Company Logo"
            src="/OVRealtyCorp.png" // Assuming the logo is in the public folder
          />
          <Typography variant="h6">
            OV REALTY CORP
          </Typography>
          <Button component={NavLink} to="/" exact activeClassName="active">
          Home
        </Button>
        <Button component={NavLink} to="/About" activeClassName="active">
          About Us
        </Button>
        <Button component={NavLink} to="/Contact" activeClassName="active">
          Contact
        </Button>
        </Toolbar>
      </AppBar>
      
      {/* Cover Page/Banner */}
      <Card sx={{ margin: 'auto', marginBottom: theme.spacing(2), maxWidth: '100%' }}>
        <CardMedia
          component="img"
          className={classes.coverImage}
          alt="Building Image"
          src="/building.jpg" // Assuming the image is in the public folder
        />
        <CardContent sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: theme.spacing(1) }}>
          <Typography variant="h4" component="div" align="center" style={responsiveFontSize}>
            Welcome to OV Realty Corp.
          </Typography>
        </CardContent>
      </Card>

      {/* Information and Contact Form Cards */}
      <Grid container justifyContent="flex-start" spacing={2}>
        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Information
              </Typography>
              <Grid container alignItems="center" className={classes.textField}>
                <LocationOnIcon className={classes.icon} />
                <Typography variant="body1" component="div">
                  Office Address: 21st Flr Century Diamond Tower, Century City, Kalayaan Avenue Cor. Salamanca St., 
                  Brgy. Poblacion, Makati City. 
                </Typography>
              </Grid>
              <Grid container alignItems="center">
                <PhoneIcon className={classes.icon} />
                <Typography variant="body1" component="div">
                  Contact Number: +63 912 345 6789
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Contact Us
              </Typography>
              <form noValidate autoComplete="off">
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="First Name"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Last Name"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Contact Number"
                  variant="outlined"
                  margin="normal"
                />
                <TextField
                  className={classes.textField}
                  fullWidth
                  select
                  label="Select Subject"
                  variant="outlined"
                  margin="normal"
                  defaultValue=""
                >
                  {subjects.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  className={classes.textField}
                  fullWidth
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  margin="normal"
                />
                <Button variant="contained" color="primary">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="body1" className={classes.footerText}>
          &copy; {new Date().getFullYear()} OV REALTY CORP. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default Contact;
