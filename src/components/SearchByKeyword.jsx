import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Box, Container, TextField, ListItem, ListItemText, Button, Grid, Paper } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    backgroundColor: 'white',
    color: theme.palette.text.primary, // Set text color to black
  },
  cover: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/building.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 200,
    width: 1600,
    marginBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
  },
  search: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  results: {
    marginTop: theme.spacing(2),
    flex: 1, // Fill remaining vertical space
  },
  resultItem: {
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
  },
  navigationLink: {
    marginRight: theme.spacing(2),
    textDecoration: 'none',
    color: 'inherit',
  },
  footer: {
    marginTop: 'auto', // Push footer to the bottom
    backgroundColor: theme.palette.grey[200],
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2),
    textAlign: 'center',
  },
}));

const Keyword = () => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedTerm, setSelectedTerm] = useState(null); // Track selected term

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    // Simulate search results (can be replaced with actual search logic)
    const filteredResults = terms.filter(term =>
      term.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filteredResults);
    setSelectedTerm(null); // Reset selected term when search changes
  };

  const handleResultClick = (term) => {
    setSelectedTerm(term === selectedTerm ? null : term); // Toggle selected term
  };

  const renderSearchResults = () => {
    if (searchResults.length === 0 && searchQuery !== '') {
      return (
        <Typography variant="body1">
          The keyword "{searchQuery}" is not available.
        </Typography>
      );
    }

    return (
      <Grid container spacing={2}>
        {searchResults.map((result, index) => (
          <Grid item xs={12} key={index}>
            <ListItem
              button
              className={classes.resultItem}
              onClick={() => handleResultClick(result)}
            >
              <ListItemText
                primary={result}
                secondary={selectedTerm === result ? definitions[result] : null}
              />
            </ListItem>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            OV REALTY CORP
          </Typography>
          <Button component={RouterLink} to="/" className={classes.navigationLink}>
            Explore Locations
          </Button>
        </Toolbar>
      </AppBar>
      <Box className={classes.cover}></Box>
      <Container>
        <Typography variant="h5" gutterBottom>
          Explore Keywords
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={9}>
            <TextField
              className={classes.search}
              label="Search by keyword"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleResultClick(searchQuery)}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <div className={classes.results}>
          {renderSearchResults()}
        </div>
      </Container>
      <Paper className={classes.footer} elevation={0}>
        <Typography variant="body2" color="textSecondary" className={classes.footerText}>
          © 2024 OV Realty Corp. All rights reserved.
        </Typography>
        <Typography variant="body2" color="textSecondary" className={classes.footerText}>
          Contact Us: contact@ovrealtycorp.com | Phone: (123) 456-7890
        </Typography>
        <Typography variant="body2" color="textSecondary" className={classes.footerText}>
          Address: 123 Main Street, Tagaytay City, Philippines
        </Typography>
      </Paper>
    </div>
  );
};

// Hardcoded list of digital marketing terms and jargons
const terms = [
  'SEO',
  'PPC',
  'Content Marketing',
  'Social Media Marketing',
  'Email Marketing',
  'Affiliate Marketing',
  'Influencer Marketing',
  'Conversion Rate Optimization',
  'A/B Testing',
  'Keyword Research',
  'Analytics',
  'Customer Journey',
  'Marketing Automation',
  'Lead Generation',
  'Retargeting',
  'CTR (Click-Through Rate)',
  'CPC (Cost Per Click)',
  'CPA (Cost Per Acquisition)',
  'ROI (Return on Investment)',
  'B2B (Business to Business)',
  'B2C (Business to Consumer)',
  'CTA (Call to Action)',
  'UX (User Experience)',
  'SEM (Search Engine Marketing)',
];

// Hardcoded definitions for the terms
const definitions = {
  'SEO': 'Search Engine Optimization: The process of improving the visibility of a website on search engines.',
  'PPC': 'Pay-Per-Click: A model of internet marketing where advertisers pay a fee each time one of their ads is clicked.',
  'Content Marketing': 'A type of marketing that involves the creation and sharing of online material that does not explicitly promote a brand but is intended to stimulate interest in its products or services.',
  'Social Media Marketing': 'The use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic.',
  'Email Marketing': 'The act of sending a commercial message, typically to a group of people, using email.',
  'Affiliate Marketing': 'A type of performance-based marketing in which a business rewards one or more affiliates for each visitor or customer brought by the affiliate\'s own marketing efforts.',
  'Influencer Marketing': 'A form of social media marketing involving endorsements and product placement from influencers, people and organizations who have a purported expert level of knowledge or social influence in their field.',
  'Conversion Rate Optimization': 'The process of increasing the percentage of users or website visitors to take a desired action.',
  'A/B Testing': 'A method of comparing two versions of a webpage or app against each other to determine which one performs better.',
  'Keyword Research': 'The process of finding and analyzing actual search terms that people enter into search engines.',
  'Analytics': 'The discovery, interpretation, and communication of meaningful patterns in data.',
  'Customer Journey': 'The complete sum of experiences that customers go through when interacting with your company and brand.',
  'Marketing Automation': 'Technology that manages marketing processes and multifunctional campaigns, across multiple channels, automatically.',
  'Lead Generation': 'The initiation of consumer interest or inquiry into products or services of a business.',
  'Retargeting': 'A form of online advertising that keeps your brand in front of bounced traffic after they leave your website.',
  'CTR (Click-Through Rate)': 'The ratio of users who click on a specific link to the number of total users who view a page, email, or advertisement.',
  'CPC (Cost Per Click)': 'An internet advertising model used to drive traffic to websites, in which an advertiser pays a publisher when the ad is clicked.',
  'CPA (Cost Per Acquisition)': 'A marketing metric that measures the aggregate cost to acquire one paying customer on a campaign or channel level.',
  'ROI (Return on Investment)': 'A performance measure used to evaluate the efficiency or profitability of an investment.',
  'B2B (Business to Business)': 'Transactions conducted between companies, rather than between a company and individual consumers.',
  'B2C (Business to Consumer)': 'Transactions conducted directly between a company and consumers who are the end-users of its products or services.',
  'CTA (Call to Action)': 'A prompt on a website that tells the user to take some specified action.',
  'UX (User Experience)': 'The overall experience of a person using a product such as a website or a computer application, especially in terms of how easy or pleasing it is to use.',
  'SEM (Search Engine Marketing)': 'A form of internet marketing that involves the promotion of websites by increasing their visibility in search engine results pages primarily through paid advertising.',
};

export default Keyword;
