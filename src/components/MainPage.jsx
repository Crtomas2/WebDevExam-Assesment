import React, { useState, useEffect } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, Box, Container, TextField, ListItem, ListItemText,
  Button, Grid, InputAdornment, Card, CardContent, Paper, MenuItem, Select,
  InputLabel, FormControl, Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  TablePagination
} from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import locationsData from '../Location.json'; // Adjust the path as per your project structure
import propertiesData from '../data/Properties.json'; // Adjust the path as per your project structure

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh', // Ensure full viewport height
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    backgroundColor: 'white',
  },
  toolbar: {
    color: 'black',
  },
  cover: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/building.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 200,
    width: '100%', // Adjust width as needed for responsiveness
    marginBottom: theme.spacing(2),
  },
  searchCard: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: '20px',
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
  },
  search: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  results: {
    marginTop: theme.spacing(2),
  },
  navigationLink: {
    marginRight: theme.spacing(2),
    textDecoration: 'none',
    color: 'inherit',
  },
  footer: {
    marginTop: 'auto', // Push footer to the bottom
    padding: theme.spacing(3, 2),
    backgroundColor: theme.palette.grey[200],
  },
  footerText: {
    textAlign: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  cardRoot: {
    display: 'flex',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    borderRadius: '20px',
    backgroundColor: theme.palette.grey[200],
    padding: theme.spacing(2),
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
  },
  cardMedia: {
    width: '100%', // Adjust as needed for responsiveness
    height: 'auto',
    marginRight: theme.spacing(2),
    borderRadius: '20px 0 0 20px',
    objectFit: 'cover',
    maxWidth: 200, // Max width for image
  },
  cardCaption: {
    flexGrow: 1,
  },
  logo: {
    height: 30,
    width: 30,
    marginRight: theme.spacing(1),
  }
}));

const CustomTextField = withStyles((theme) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',
      '& fieldset': {
        borderRadius: '20px',
      },
    },
  },
}))(TextField);

const Home = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({
    city: '',
    province: '',
    houseNumber: '',
    bedroom: '',
    baths: '',
    propertyType: '',
    priceRange: [0, 10000000],
  });
  const [locations, setLocations] = useState({});
  const [properties, setProperties] = useState({});
  const [displayResults, setDisplayResults] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    // Load the locations data
    setLocations(locationsData);
    setProperties(propertiesData);
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);
  };

  const handleSearchButtonClick = () => {
    let results = [];

    // Search by property name or city name
    if (searchQuery.trim() !== '') {
      for (let province in properties) {
        if (province.toLowerCase().includes(searchQuery.toLowerCase())) {
          for (let city in properties[province]) {
            results = results.concat(properties[province][city]);
          }
        } else {
          for (let city in properties[province]) {
            if (city.toLowerCase().includes(searchQuery.toLowerCase())) {
              results = results.concat(properties[province][city]);
            }
          }
        }
      }
    } else {
      // If no search query, filter by selected province and city
      if (filters.province && filters.city) {
        const propertiesInCity = properties[filters.province][filters.city];
        if (propertiesInCity) {
          results = propertiesInCity.filter(property => {
            return (
              (filters.propertyType === '' || property.propertyType === filters.propertyType)
            );
          });
        }
      }
    }

    setDisplayResults(results);
    setSearchQuery('');
    setPage(0);
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <img src={`${process.env.PUBLIC_URL}/OVRealtyCorp.png`} alt="Logo" className={classes.logo} />
          <Typography variant="h6" className={classes.title}>
            OV REALTY CORP
          </Typography>
          <Button component={NavLink} to="/" exact activeClassName="active">
          Home
        </Button>
        <Button component={NavLink} to="/about" activeClassName="active">
          About Us
        </Button>
        <Button component={NavLink} to="/Contact" activeClassName="active">
          About Us
        </Button>
        </Toolbar>
      </AppBar>
      <Box className={classes.cover}></Box>
      <Container>
        <Card className={classes.searchCard}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Explore Locations
            </Typography>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={9}>
                <CustomTextField
                  className={classes.search}
                  label="Search by location"
                  variant="outlined"
                  fullWidth
                  value={searchQuery}
                  onChange={handleSearchChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={handleSearchButtonClick}
                >
                  Search
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2} className={classes.search}>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                  <InputLabel>Province</InputLabel>
                  <Select
                    name="province"
                    value={filters.province}
                    onChange={handleFilterChange}
                    label="Province"
                  >
                    {Object.keys(locations).map((province, index) => (
                      <MenuItem value={province} key={index}>{province}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                  <InputLabel>City</InputLabel>
                  <Select
                    name="city"
                    value={filters.city}
                    onChange={handleFilterChange}
                    label="City"
                    disabled={!filters.province}
                  >
                    {(filters.province && locations[filters.province]) ? locations[filters.province].map((city, index) => (
                      <MenuItem value={city} key={index}>{city}</MenuItem>
                    )) : <MenuItem value="">Select a province first</MenuItem>}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <FormControl variant="outlined" className={classes.formControl} fullWidth>
                  <InputLabel>Property Type</InputLabel>
                  <Select
                    name="propertyType"
                    value={filters.propertyType}
                    onChange={handleFilterChange}
                    label="Property Type"
                  >
                    <MenuItem value="">Any</MenuItem>
                    <MenuItem value="Condominium">Condominium</MenuItem>
                    <MenuItem value="Hotel">Hotel</MenuItem>
                    <MenuItem value="Offices">Offices</MenuItem>
                    <MenuItem value="Apartment">Apartment</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Property Type</TableCell>
                <TableCell>Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {displayResults
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((property, index) => (
                  <TableRow key={index}>
                    <TableCell>{property.name}</TableCell>
                    <TableCell>{property.propertyType}</TableCell>
                    <TableCell>{property.address}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={displayResults.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Container>
      <footer className={classes.footer}>
        <Typography variant="body1" className={classes.footerText}>
          &copy; {new Date().getFullYear()} OV REALTY CORP. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default Home;
