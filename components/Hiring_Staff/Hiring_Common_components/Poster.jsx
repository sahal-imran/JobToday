import React, { useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

function Poster() {
    return (
        <Box sx={{ backgroundColor: '#0e54ff', py: { md: 14, xs: 6 } }} >
            <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Typography variant='h2' sx={{ fontSize: { md: '40px', xs: '28px' }, fontFamily: 'GraphikSemibold', color: 'white', textAlign: 'center' }} >
                    Start Hiring with the UK's #1 Hiring App
                </Typography>
                <Button variant='contained' sx={{ px: 4, py: 2, borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', color: '#252525', backgroundColor: 'white', boxShadow: 'none', "&:hover": { backgroundColor: 'white', boxShadow: 'none', }, mt: 4 }} >
                    Hire Great Staff Now
                </Button>
            </Container>
        </Box>
    )
}

export default Poster