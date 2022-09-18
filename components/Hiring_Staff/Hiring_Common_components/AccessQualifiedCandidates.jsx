import React, { useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

function AccessQualifiedCandidates() {
    return (
        <Box sx={{ flexGrow: 1, width: '100%', backgroundColor: 'white', py: 10 }}>
            <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}>
                <Typography variant='h2' sx={{ fontSize: { md: '24px', xs: '20px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                    Access qualified candidates from any sector
                </Typography>
                <Box sx={{ width: '100%', mt: 4 }} >
                    <Grid container spacing={2} >
                        {
                            JobTypes.map((item, index) => {
                                return <Grid key={index} item md={3} xs={6}>
                                    <Box sx={{ width: '100%', height: '80px', backgroundColor: '#f5f8ff', borderRadius: '8px', display: "flex", justifyContent: 'center', alignItems: 'center', transition: 'all 0.3s ease', "&:hover": { backgroundColor: '#e9ebf2' } }} >
                                        <Link href={''} >
                                            <AnchorLink sx={{ textDecoration: 'none', fontSize: { md: '24px', xs: '16px' }, fontFamily: 'GraphikMedium', color: '#0e54ff', cursor: 'pointer' }} >
                                                {item.Name}
                                            </AnchorLink>
                                        </Link>
                                    </Box>
                                </Grid>
                            })
                        }
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default AccessQualifiedCandidates;

const JobTypes = [
    {
      Name: 'Waiters'
    },
    {
      Name: 'Chef & Cook'
    },
    {
      Name: 'Management'
    },
    {
      Name: 'Retail'
    },
    {
      Name: 'Office & Admin'
    },
    {
      Name: 'Barista'
    },
    {
      Name: 'Kitchen Porter'
    },
    {
      Name: 'Cleaning'
    },
    {
      Name: 'Customer Service'
    },
  
    {
      Name: 'Education'
    },
    {
      Name: 'Sales & Marketing'
    },
    {
      Name: 'Driver & Delivery'
    },
    {
      Name: 'Warehouses'
    },
    {
      Name: 'Healthcare'
    },
    {
      Name: 'Salon & Beauty'
    },
    {
      Name: ' Construction & Trades'
    },
  ]