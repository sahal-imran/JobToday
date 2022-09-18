import React, { useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

function HiringApp() {
    return (
        <>
            <Box sx={{ backgroundColor: 'white', py: { md: 12, xs: 6 } }} >
                <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: "column" } }}>
                    {/* Image */}
                    <Box sx={{ width: { md: '45%', xs: '100%' }, height: { md: '400px', xs: '300px' }, position: 'relative' }} >
                        <Image src={'/pictures/hire/on-the-move.png'} layout='fill' objectFit='contain' />
                    </Box>
                    <Box sx={{ width: { md: '55%', xs: '100%' }, display: "flex", justifyContent: 'end', alignItems: 'center', }} >
                        <Box sx={{ width: { md: '60%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                            <Typography variant='h2' sx={{ fontSize: { md: '40px', xs: '28px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                                #1 Hiring App in the UK
                            </Typography>
                            <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'justify', mt: 3 }} >
                                Always on the move? Download the JOB TODAY app from Google play or the AppStore.
                            </Typography>
                            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: 4 }} >
                                <AnchorLink sx={{ cursor: 'pointer' }} >
                                    <Image src={'/pictures/hire/AS-UK.png'} width={140} height={40} objectFit='contain' />
                                </AnchorLink>
                                <AnchorLink sx={{ cursor: 'pointer', ml: 3 }} >
                                    <Image src={'/pictures/hire/GplayUK.png'} width={140} height={40} objectFit='contain' />
                                </AnchorLink>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box sx={{ backgroundColor: 'white', py: { md: 12, xs: 6 } }} >
                <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant='h2' sx={{ fontSize: { md: '24px', xs: '20px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                        Attract quality candidates with engaging job postings
                    </Typography>
                    <Button variant='contained' sx={{ px: 3, py: 1.5, borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', color: '#0e54ff', backgroundColor: '#f5f8ff', boxShadow: 'none', "&:hover": { backgroundColor: '#f5f8ff', boxShadow: 'none', } }} >
                        Explore more jobs
                    </Button>
                </Container>
            </Box>
        </>
    )
}

export default HiringApp