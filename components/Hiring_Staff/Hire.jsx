import React, { useState } from 'react';
import Navigation from './Navigation';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import NewsLetter from './NewsLetter';
import HeroBanner from './Hiring_Common_components/HeroBanner';
import Card_top from './Hiring_Common_components/Card_top';
import Card_middle from './Hiring_Common_components/Card_middle';
import Card_Bottom from './Hiring_Common_components/Card_Bottom';
import Poster from './Hiring_Common_components/Poster';
import HiringApp from './Hiring_Common_components/HiringApp';
import AccessQualifiedCandidates from './Hiring_Common_components/AccessQualifiedCandidates';
import Create_Your_Own_Company from './Hiring_Common_components/Create_Your_Own_Company';
import TrendingHiringAdvice from './Hiring_Common_components/TrendingHiringAdvice';


function Hire() {

    return (
        <>
            <Navigation />

            <HeroBanner id={'Hire'} Title={'Hire great staff in 24 hours'} subTitle={'Get set up in seconds, start receiving applications in minutes, fill your vacancy today. Take the hassle out of hiring.'} Button_text={'Post a Job Now'} />


            {/* Card top */}
            <Card_top Title={'Fulfil your immediate hiring needs'} subTitle={'Hire staff in 24 hours! Over 74% of the jobs posted on our job board find their ideal match under 24 hours.'} Button_text={'Post a job now'} />


            {/* Card middle */}
            <Card_middle Title={'Find motivated and engaged candidates'} subTitle={'Enjoy access to our national pool of talent of 6 million candidates. We got it all: chefs, sales experts, waiting staff, drivers, bartenders and much more!'} Button_text={'Find your perfect hire'} />

            {/* Card Bottom */}
            <Card_Bottom Title={'Connect and chat on the platform'} subTitle={'Chat directly with your applicants and get to know them. Ask questions, shortlist and interview away!'} Button_text={'Connect with candidates'} />

            {/* poster */}
            <Poster />

            {/* Companies Hiring Now */}

            <Box sx={{ backgroundColor: '#fbfbfb', py: { md: 12, xs: 6 } }} >
                <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}>
                    <Typography variant='h2' sx={{ fontSize: { md: '24px', xs: '20px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                        Companies Hiring Now
                    </Typography>
                    <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', mt: 2 }} >
                        Small businesses, corporate chains, staffing agencies and recruitment companies use JOB TODAY to hire staff.
                    </Typography>
                </Container>

                {/* Hiring companies */}
                <Box sx={{ flexGrow: 1, width: '100%', mt: { md: 10, xs: 4 }, pb: 10, borderBottom: '1px solid rgba(0,0,0,.1)' }}>
                    <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}>
                        <Grid container rowSpacing={{ md: 0, xs: 8 }} columnSpacing={{ md: 4 }} >
                            <Grid item md={4} xs={12}>
                                <Box sx={{
                                    position: 'relative',
                                    "& :before": {
                                        content: `"“"`,
                                        position: 'absolute',
                                        top: '-36px',
                                        left: '-10px',
                                        color: 'rgb(14, 84, 255)',
                                        fontSize: '60px',
                                        fontFamily: 'GraphikRegular',
                                    },
                                    display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', px: 2
                                }} >
                                    <Typography variant='h2' sx={{ fontSize: { md: '20px', xs: '18px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                                        JOB TODAY is so easy to use, I can't believe how simple it is to hire staff.
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                        <Box sx={{ borderRadius: '50%' }} >
                                            <Image src={'/pictures/hire/benugo-1421856673.png'} width={40} height={40} objectFit='contain' />
                                        </Box>
                                        <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', ml: 2 }} >
                                            Benugo
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box sx={{
                                    position: 'relative',
                                    "& :before": {
                                        content: `"“"`,
                                        position: 'absolute',
                                        top: '-36px',
                                        left: '-10px',
                                        color: 'rgb(14, 84, 255)',
                                        fontSize: '60px',
                                        fontFamily: 'GraphikRegular',
                                    },
                                    display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', px: 2
                                }} >
                                    <Typography variant='h2' sx={{ fontSize: { md: '20px', xs: '18px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                                        Easy to use, great on mobile and works well for my needs.
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                        <Box sx={{ borderRadius: '50%' }} >
                                            <Image src={'/pictures/hire/greene-king-logo.png'} width={40} height={40} objectFit='contain' />
                                        </Box>
                                        <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', ml: 2 }} >
                                            Greene King
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <Box sx={{
                                    position: 'relative',
                                    "& :before": {
                                        content: `"“"`,
                                        position: 'absolute',
                                        top: '-36px',
                                        left: '-10px',
                                        color: 'rgb(14, 84, 255)',
                                        fontSize: '60px',
                                        fontFamily: 'GraphikRegular',
                                    },
                                    display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', px: 2
                                }} >
                                    <Typography variant='h2' sx={{ fontSize: { md: '20px', xs: '18px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                                        It's quick and lowers the barriers to human interaction. Incredible platform.
                                    </Typography>
                                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                        <Box sx={{ borderRadius: '50%' }} >
                                            <Image src={'/pictures/hire/repairly-logo.png'} width={40} height={40} objectFit='contain' />
                                        </Box>
                                        <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', ml: 2 }} >
                                            Repairly
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
                <Box sx={{ flexGrow: 1, width: '100%', py: 10 }}>
                    <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }}>
                        <Grid container rowSpacing={{ md: 0, xs: 3 }} columnSpacing={3} columns={{ md: 16, xs: 12 }} >
                            {
                                companirs.map((item, index) => {
                                    return <Grid key={index} item md={2} xs={6}>
                                        <Box sx={{ width: '100%', height: '80px', position: 'relative', border: '1px solid rgba(0,0,0,.1)', borderRadius: '4px' }} >
                                            <Image src={item.URL} layout='fill' objectFit='contain' />
                                        </Box>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Container>
                </Box>
            </Box>

            {/* Hiring App */}
            <HiringApp />


            {/* Access qualified candidates from any sector */}
            <AccessQualifiedCandidates />

            {/* Create your own company page */}
            <Create_Your_Own_Company />

            {/* Trending Hiring Advice */}
            <TrendingHiringAdvice />

            {/* News Letter */}
            <NewsLetter />

        </>
    )
}

export default Hire;

const companirs = [
    {
        URL: "/pictures/hire/1.jpg"
    },
    {
        URL: "/pictures/hire/2.png"
    },
    {
        URL: "/pictures/hire/3.png"
    },
    {
        URL: "/pictures/hire/4.jpg"
    },
    {
        URL: "/pictures/hire/5.png"
    },
    {
        URL: "/pictures/hire/6.jpeg"
    },
    {
        URL: "/pictures/hire/7.jpg"
    },
    {
        URL: "/pictures/hire/8.png"
    },

]
