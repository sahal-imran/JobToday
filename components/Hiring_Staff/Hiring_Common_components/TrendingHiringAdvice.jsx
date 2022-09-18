import React, { useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

function TrendingHiringAdvice() {
    return (
        <Box sx={{ backgroundColor: 'white', py: { md: 12, xs: 6 } }} >
            <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Box sx={{ width: '100%', display: "flex", justifyContent: 'space-between', alignItems: 'center', }} >
                    <Typography variant='h2' sx={{ fontSize: { md: '24px', xs: '20px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                        Trending Hiring Advice
                    </Typography>
                    <Link href={''} >
                        <AnchorLink sx={{ textDecoration: 'none', fontSize: '16px', fontFamily: 'GraphikMedium', color: '#0e54ff', cursor: 'pointer', "&:hover": { textDecoration: 'underline' } }} >
                            See more
                        </AnchorLink>
                    </Link>
                </Box>
                <Box sx={{ width: '100%', mt: 4 }} >
                    <Grid container rowSpacing={{ md: 0, xs: 4 }} columnSpacing={{ md: 2 }} >
                        <Grid item md={6} xs={12}>
                            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                                <Box sx={{ width: '30%', height: '160px', position: 'relative', borderRadius: '8px', overflow: 'hidden' }} >
                                    <Image src={'/pictures/hire/shutterstock_740131420.jpg'} layout='fill' objectFit='cover' />
                                </Box>
                                <Box sx={{ width: '60%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', px: 2 }} >
                                    <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                                        Need to hire fast? Find great employees in 3 steps
                                    </Typography>
                                    <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#a6a6a6' }} >
                                        By:  Doris Benitez
                                    </Typography>
                                    <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#555', height: '40px', overflow: 'hidden', mt: 2 }} >
                                        So business is booming and you’re looking to expand your team. But how do you find new employees?
                                    </Typography>
                                    <Typography variant='h2' sx={{ fontSize: '14px', fontFamily: 'GraphikRegular', color: '#959595', mt: 2 }} >
                                        Reading time: 3 min
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                                <Box sx={{ width: '30%', height: '160px', position: 'relative', borderRadius: '8px', overflow: 'hidden' }} >
                                    <Image src={'/pictures/hire/shutterstock_606559658.jpg'} layout='fill' objectFit='cover' />
                                </Box>
                                <Box sx={{ width: '60%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', px: 2 }} >
                                    <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                                        7 ways to get the best bar staff and keep them
                                    </Typography>
                                    <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#a6a6a6' }} >
                                        By:  Doris Benitez
                                    </Typography>
                                    <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#555', height: '40px', overflow: 'hidden', mt: 2 }} >
                                        You might have the coolest bar, the trendiest food, the best music, but if you’ve also got the worst staff then you’ve a big problem.
                                    </Typography>
                                    <Typography variant='h2' sx={{ fontSize: '14px', fontFamily: 'GraphikRegular', color: '#959595', mt: 2 }} >
                                        Reading time: 4 min
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default TrendingHiringAdvice