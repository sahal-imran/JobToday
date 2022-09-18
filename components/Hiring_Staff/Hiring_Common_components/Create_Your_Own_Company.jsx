import React, { useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

function Create_Your_Own_Company() {
    return (
        <Box sx={{ backgroundColor: '#fbfbfb', py: { md: 12, xs: 6 } }} >
            <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row-reverse', xs: "column" } }}>
                {/* Image */}
                <Box sx={{ width: { md: '45%', xs: '100%' }, height: { md: '400px', xs: '300px' }, position: 'relative' }} >
                    <Image src={'/pictures/hire/hire-cp.png'} layout='fill' objectFit='contain' />
                </Box>
                <Box sx={{ width: { md: '55%', xs: '100%' }, display: "flex", justifyContent: 'start', alignItems: 'center', }} >
                    <Box sx={{ width: { md: '60%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                        <Typography variant='h2' sx={{ fontSize: { md: '40px', xs: '28px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                            Create your own company page
                        </Typography>
                        <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'justify', mt: 3 }} >
                            Tell your brand story, increase your followers and engage with candidates directly. Post new job opportunities even faster and hire staff today.
                        </Typography>
                        <AnchorLink sx={{ fontSize: { md: '17px', xs: '16px' }, fontFamily: 'GraphikMedium', color: '#0e54ff', cursor: 'pointer', textAlign: 'start', textDecoration: 'none', "&:hover": { textDecoration: 'underline' }, mt: 3 }} >
                            Find your perfect hire
                        </AnchorLink>
                        <Button variant='contained' sx={{ px: 4, py: 2, borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', color: '#fff', backgroundColor: '#0e54ff', boxShadow: 'none', "&:hover": { backgroundColor: '#0c47d9', boxShadow: 'none', }, mt: 4 }} >
                            Create my company page
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Create_Your_Own_Company