import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Card, CardContent, CardMedia, Grid, Paper} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
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
}));

const AboutUs = () => {
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
            src={`${process.env.PUBLIC_URL}/ovrealtycorp.png`} // Assuming the logo is in the public folder
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
          src={`${process.env.PUBLIC_URL}/Buildings.jpg`} // Assuming the image is in the public folder
        />
        <CardContent sx={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: theme.spacing(1) }}>
          <Typography variant="h4" component="div" align="center" style={responsiveFontSize}>
            Welcome to OV Realty Corp.
          </Typography>
        </CardContent>
      </Card>
      
      {/* About Us Content */}
      <Grid container spacing={2} sx={{ padding: theme.spacing(2) }}>
        <Grid item xs={12} md={6}>
          <Card sx={{
            padding: theme.spacing(3),
            backgroundColor: '#b0c4de', // Light blue shade
          }}>
            <CardContent>
              <CardMedia
                component="img"
                sx={{
                  height: 50,
                  width: 50,
                  marginRight: theme.spacing(3),
                }}
                alt="Digital Marketing Icon"
                src={`${process.env.PUBLIC_URL}/marketing.png`}  // Assuming the icon is in the public folder
              />
              <Typography variant="h5" component="div" gutterBottom>
                Digital Marketing
              </Typography>
              <Typography variant="body1" component="div">
                Reach your target audience and grow your business online through strategic digital marketing solutions, including social media, SEO, and more.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{
            padding: theme.spacing(3),
            backgroundColor: '#b0c4de', // Darker blue shade
          }}>
            <CardMedia
              component="img"
              sx={{
                height: 50,
                width: 50,
                marginRight: theme.spacing(2),
              }}
              alt="Restaurant Icon"
              src={`${process.env.PUBLIC_URL}/restaurant.png`}  // Assuming the icon is in the public folder
            />
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
              Food and Beverages
              </Typography>
              <Typography variant="body1" component="div">
                Savor the flavor of life with our diverse range of food and beverages, carefully crafted to satisfy your cravings and nourish your body.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      
      {/* Our Mission Section */}
      <Card sx={{ 
        padding: theme.spacing(4),
        maxWidth: '95%',
        margin: 'auto',
        marginTop: theme.spacing(2),
        backgroundColor: '#b0c4de', // Light blue shade
        marginBottom: theme.spacing(2),
      }}>
        <CardContent>
          <Typography variant="h4" component="div" align="center" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1" component="div" align="justify" style={responsiveFontSize}>
            At OV Realty Corp., our mission is to provide exceptional real estate services that empower our clients to achieve their property goals. 
            We strive to create a seamless and rewarding experience through:
          </Typography>
          <ul style={{ listStyleType: 'disc', marginLeft: '2rem' }}>
            <li>
              <Typography variant="body1" component="div">
                Delivering personalized and comprehensive real estate solutions tailored to individual needs.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="div">
                Promoting transparency, honesty, and integrity in all our interactions.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="div">
                Continuously exceeding client expectations through innovative strategies and dedication.
              </Typography>
            </li>
            <li>
              <Typography variant="body1" component="div">
                Building lasting relationships based on trust and mutual respect.
              </Typography>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="body1" className={classes.footerText}>
          &copy; {new Date().getFullYear()} OV REALTY CORP. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default AboutUs;
