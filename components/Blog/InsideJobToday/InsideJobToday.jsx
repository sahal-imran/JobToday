import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/system/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import Button from '@mui/material/Button';
import Navigation from '../Navigation';
import Divider from '@mui/material/Divider';
import CareerAdviceCard from '../Home/CareerAdviceCard';
import Pagination from '../../Pagination/Pagination';

function JobInsitetoday() {
  const router = useRouter();

  const [Founders_Thoughts, Set_Founders_Thoughts] = useState(false);

  const ToggleButton = () => {
    Set_Founders_Thoughts(true)
  }

  const IsInnerNavActive = () => {
    if (!Founders_Thoughts) {
      return false;
    }
    else if (Founders_Thoughts) {
      return true;
    }
  }

  useEffect(() => {

    Set_Founders_Thoughts(false);

  }, [router.pathname])


  return (
    <>
      <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
        {/* Navigation bar */}
        <Navigation />


        <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column', mt: 2 }}>

          {/* First Card Desktop */}
          {
            !IsInnerNavActive() &&
            <Link href={''} >
              <AnchorLink sx={{ textDecoration: 'none', cursor: 'pointer', width: '100%', display: { md: 'block', xs: 'none' } }} >
                <Box sx={{ width: '100%', height: '510px', position: 'relative' }} >
                  <Image src={'/pictures/Blog/JobInsiteToday/hero.jpg'} layout='fill' objectFit='cover' />

                  <Box sx={{ width: '100%', height: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 0, right: 0, top: 0 }} >
                    <Box sx={{ width: '50%' }} >

                    </Box>
                    <Box sx={{ width: '50%', height: '100%', display: "flex", justifyContent: 'start', alignItems: 'start', flexDirection: 'column', pr: 4 }} >
                      {/* Card Type */}
                      <Typography sx={{ my: 2.5, fontSize: '15px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '#00ae64', alignSelf: 'start' }} >
                        Recommended
                      </Typography>
                      <Typography sx={{ fontSize: '30px', lineHeight: '40px', fontFamily: 'GraphikSemiBold', color: '#000', alignSelf: 'start' }} >
                        6 tips for writing an interview-winning CV profile
                      </Typography>
                      {/* Card SubTitle */}
                      <Box sx={{ maxHeight: '80px', overflow: 'hidden', mt: 1 }} >
                        <Typography sx={{ fontSize: '26px', fontFamily: 'GraphikRegular', color: '#000', alignSelf: 'start' }} >
                          Your personal profile is at the top of your CV and is the first thing that a recruiter or employer will read. Here are some tips on how to write an awesome one!
                        </Typography>
                      </Box>
                      {/* Card Text */}
                      <Box sx={{ display: "flex", justifyContent: 'start', alignItems: 'center', width: '100%', height: '30px' }} >
                        <Typography sx={{ fontSize: '14px', fontFamily: 'GraphikMedium', color: '#959595', }} >
                          Doris Benitez
                        </Typography>
                        <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 2 }} />
                        <Typography sx={{ fontSize: '14px', fontFamily: 'GraphikRegular', color: '#959595', whiteSpace: 'nowrap' }} >
                          Reading time:
                          4
                          min
                        </Typography>
                      </Box>
                      <Link href={''} >
                        <AnchorLink sx={{ fontSize: '16px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: 'white', cursor: 'pointer', whiteSpace: 'nowrap', background: '#0e54ff', px: 6, py: 2.5, borderRadius: '8px', mt: 8, "&:hover": { background: '0c47d9' } }} >
                          Read more
                        </AnchorLink>
                      </Link>
                    </Box>
                  </Box>
                </Box>
              </AnchorLink>
            </Link>
          }
          {/* First Card phone */}
          {
            !IsInnerNavActive() &&
            <Box sx={{ display: { md: 'none', xs: 'block' } }} >
              <CareerAdviceCard URL={'/pictures/Blog/JobInsiteToday/hero.jpg'} Type={'Recommended'} Title={`6 tips for writing an interview-winning CV profile`} SubTilte={`Your personal profile is at the top of your CV and is the first thing that a recruiter or employer will read. Here are some tips on how to write an awesome one!`} Author={`Doris Benitez`} LastRead={`Reading time:5min`} />
            </Box>
          }

          {/* ++++++++++++++++++++++++++ */}
          {/* Nav and sections */}
          {/* ++++++++++++++++++++++++++ */}

          {/* Navigation */}
          <Box sx={{ width: '100%', display: "flex", justifyContent: 'start', alignItems: 'center', maxWidth: '100%', overflow: 'auto', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <Button onClick={() => ToggleButton()} variant='text' sx={Founders_Thoughts ? { fontSize: '17px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#000`, cursor: 'pointer', transition: 'all 0.3s ease', whiteSpace: 'nowrap', pb: 3, pt: 4, borderBottom: `3px solid #000`, textTransform: 'capitalize', "&:hover": { background: 'transparent', color: '#000' }, borderRadius: 'unset' } : { fontSize: '17px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#0e54ff`, cursor: 'pointer', transition: 'all 0.3s ease', whiteSpace: 'nowrap', pb: 3, pt: 4, borderBottom: `3px solid transparent`, textTransform: 'capitalize', "&:hover": { background: 'transparent', color: '#000' }, borderRadius: 'unset' }} >
              Founders' Thoughts
            </Button>
          </Box>

          {
            Founders_Thoughts &&
            <Box sx={{ width: '100%', mt: 8 }} >
              <Grid container rowSpacing={{ md: 0, xs: 6 }} columnSpacing={{ md: 4 }}>
                {
                  Find_Apply_Data.map((item, index) => {
                    return <Grid key={index} item sx={12} md={4}>
                      <CareerAdviceCard URL={item.ImgURL} Type={item.Type} Title={item.Title} SubTilte={item.Subtitle} Author={item.Aurthor} LastRead={item.LastRead} ImgHeight={'230px'} />
                    </Grid>
                  })
                }
              </Grid>
            </Box>
          }

          {
            IsInnerNavActive() &&
            <Pagination />
          }

          {/* ++++++++++++++++++++++++++ */}
          {/* Nav and sections end here */}
          {/* ++++++++++++++++++++++++++ */}

          {
            !IsInnerNavActive() &&
            <Box sx={{ width: '100%', mt: 12 }} >
              <Grid container rowSpacing={{ md: 0, xs: 6 }} columnSpacing={3}>
                <Grid item sx={12} md={4}>
                  <CareerAdviceCard URL={'/pictures/Blog/JobInsiteToday/2a.png'} Title={`TOP-8 Job Interview Tips`} ImgHeight={'260px'} justTitle={true} />
                </Grid>
                <Grid item sx={12} md={4}>
                  <CareerAdviceCard URL={'/pictures/Blog/JobInsiteToday/2b.jpg'} Title={`How to make it as a Chef.`} ImgHeight={'260px'} justTitle={true} />
                </Grid>
                <Grid item sx={12} md={4}>
                  <CareerAdviceCard URL={'/pictures/Blog/JobInsiteToday/2c.jpg'} Title={`Job Today Chit-Chat - Education & Experience vs Attitude.`} ImgHeight={'260px'} justTitle={true} />
                </Grid>
              </Grid>
            </Box>
          }

          {/* Pagination */}
          {
            !IsInnerNavActive() &&
            <Pagination />
          }
        </Container>

      </Box>
    </>
  )
}

export default JobInsitetoday;


const Find_Apply_Data = [
  {
    ImgURL: '/pictures/Blog/Home/hero.jpg',
    Type: '4 Ways to Manage Stress While Job Hunting',
    Title: 'How Can You Create an Employer Brand?',
    Subtitle: 'Your employer brand is how both your current and potential employees perceive you. You can save serious hiring costs and have access to the best talent pool by designing a great employer brand!',
    Aurthor: 'Doris Benitez',
    LastRead: 'Reading time:5min'
  },
  {
    ImgURL: '/pictures/Blog/CareerAdvice/second.jpg',
    Type: '4 Ways to Manage Stress While Job Hunting',
    Title: '5 Skills That’ll Get You Hired Fast as a Caretaker',
    Subtitle: 'Your employer brand is how both your current and potential employees perceive you. You can save serious hiring costs and have access to the best talent pool by designing a great employer brand!',
    Aurthor: 'Doris Benitez',
    LastRead: 'Reading time:5min'
  },
  {
    ImgURL: '/pictures/Blog/CareerAdvice/fourth.jpg',
    Type: '4 Ways to Manage Stress While Job Hunting',
    Title: 'Why You’ll Love Being a Carer',
    Subtitle: 'Your employer brand is how both your current and potential employees perceive you. You can save serious hiring costs and have access to the best talent pool by designing a great employer brand!',
    Aurthor: 'Doris Benitez',
    LastRead: 'Reading time:5min'
  },
  {
    ImgURL: '/pictures/Blog/CareerAdvice/third.jpg',
    Type: '4 Ways to Manage Stress While Job Hunting',
    Title: 'How Can You Create an Employer Brand?',
    Subtitle: 'Your employer brand is how both your current and potential employees perceive you. You can save serious hiring costs and have access to the best talent pool by designing a great employer brand!',
    Aurthor: 'Doris Benitez',
    LastRead: 'Reading time:5min'
  },
  {
    ImgURL: '/pictures/Blog/Home/hero.jpg',
    Type: '4 Ways to Manage Stress While Job Hunting',
    Title: 'How to Find a Job this Christmas',
    Subtitle: 'Your employer brand is how both your current and potential employees perceive you. You can save serious hiring costs and have access to the best talent pool by designing a great employer brand!',
    Aurthor: 'Doris Benitez',
    LastRead: 'Reading time:5min'
  },
  {
    ImgURL: '/pictures/Blog/CareerAdvice/third.jpg',
    Type: '4 Ways to Manage Stress While Job Hunting',
    Title: 'How Can You Create an Employer Brand?',
    Subtitle: 'Your employer brand is how both your current and potential employees perceive you. You can save serious hiring costs and have access to the best talent pool by designing a great employer brand!',
    Aurthor: 'Doris Benitez',
    LastRead: 'Reading time:5min'
  }
]