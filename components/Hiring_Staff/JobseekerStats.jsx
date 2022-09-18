import React, { useState } from 'react';
import Navigation from './Navigation';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import NewsLetter from './NewsLetter';
import HeroBanner from './Hiring_Common_components/HeroBanner';






function JobseekerStats() {
  return (
    <>
      <Navigation />
      <HeroBanner id={'jobSeekers'} Title={'Reach Professional Millennials like Never Before'} subTitle={'Get set up in seconds, start receiving applications in minutes, fill your vacancy today. Take the hassle out of hiring.'} Button_text={'Post a Job Now'} />

      {/* Ready for some mind-blowing numbers? */}
      <Box sx={{ backgroundColor: 'white', py: { md: 10, xs: 6 } }} >
        <Container maxWidth='lg' sx={{
          m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: {
            md: 'row',
            xs: 'column'
          }
        }}>
          <Box sx={{ width: { md: '40%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
            <Typography variant='h2' sx={{ fontSize: { md: '40px', xs: '28px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
              Ready for some mind-blowing numbers?
            </Typography>
            <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'justify', mt: 3 }} >
              We process over 6 million applications every month and get thousands of new candidates every day! No other hiring platform will give you this kind of access to the mobile-first millennial demographic.
            </Typography>
          </Box>
          <Box sx={{ width: { md: '60%', xs: '100%' }, ml: { md: 6 } }} >
            <Grid container rowSpacing={2} columnSpacing={2} >
              {
                Stats.map((sta, index) => {
                  return <Grid key={index} item md={4} sm={6} xs={12}>
                    <Box sx={{
                      width: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column'
                    }} >
                      <Typography variant='h2' sx={{ fontSize: { md: '30px', xs: '24px' }, fontFamily: 'GraphikSemibold', color: '#0e54ff' }} >
                        {sta.no}
                      </Typography>
                      <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'start' }} >
                        {sta.title}
                      </Typography>
                    </Box>
                  </Grid>
                })
              }
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* We Generate Maximum Demand for Your Vacancies */}
      <Box sx={{ backgroundColor: '#fbfbfb', py: { md: 12, xs: 6 } }} >
        <Container maxWidth='lg' sx={{
          m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: {
            md: 'row',
            xs: 'column'
          }
        }}>
          <Box sx={{ width: { md: '50%', xs: '100%' }, display: "flex", justifyContent: 'start', alignItems: 'center', mt: { md: '-140px' } }} >
            <Image src={'/pictures/hire/jobseeeker-stats.png'} width={500} height={700} objectFit='contain' />
          </Box>
          <Box sx={{ width: { md: '50%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
            <Typography variant='h2' sx={{ fontSize: { md: '40px', xs: '28px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
              Reach Professional Millennials like Never Before
            </Typography>
            <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'justify', mt: 3 }} >
              People find work fast with JOB TODAY. Luckily, successful jobseekers are always recommending us to their friends. We also keep the jobseeker stream flowing by running targeted marketing campaigns each month. You can find JOB TODAY everywhere from TV, Facebook and Google, to the London Underground, the London bus network and specialist industry events. Our campaigns are carefully targeted at jobseekers with the right skills for the jobs available on our platform. Post a job today and start receiving applications within minutes.
            </Typography>
            <Button variant='contained' sx={{ px: 4, py: 2, borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', color: '#fff', backgroundColor: '#0e54ff', boxShadow: 'none', "&:hover": { backgroundColor: '#0c47d9', boxShadow: 'none', }, mt: 4 }} >
              Start hiring
            </Button>
          </Box>
        </Container>
      </Box>

      {/* News Letter */}
      <NewsLetter />


    </>
  )
}

export default JobseekerStats;

const Stats = [
  {
    no: '6 million',
    title: 'active jobseekers'
  },
  {
    no: '6 million',
    title: 'applications per month'
  },
  {
    no: '10 million',
    title: 'searches every month'
  },
  {
    no: '70%',
    title: 'of job matches happen within 24 hours'
  },
  {
    no: '79%',
    title: 'of active jobseekers are below the age of 35.'
  },
  {
    no: '1000s',
    title: 'of new jobseekers joining daily.'
  }
]