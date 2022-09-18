import React, { useState } from 'react';
import Navigation from './Navigation';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import NewsLetter from './NewsLetter';
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from './Hiring_Common_components/HeroBanner';



var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 0,
                dots: false

            }
        }
    ]
};

function Advertising_Reach() {
    return (
        <>
            <Navigation />
            <HeroBanner id={''} Title={'Find us on a television or billboard near you'} subTitle={'Here at JOB TODAY we maintain the best marketing practises at scale. That’s why you’ll find us on national TV, the radio, billboards and public transportation. Thousands of new jobseekers sign up to our platform each day. There’s never been a better time to advertise your job on the UK’s #1 hiring app.'} Button_text={'Start hiring now'} />

            {/* JOB TODAY is on national TV and the radio */}
            <Box sx={{ backgroundColor: 'white', py: { md: 12, xs: 6 } }} >
                <Container maxWidth='lg' sx={{
                    m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }
                }}>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mr: { md: 6 } }} >
                        <Typography variant='h2' sx={{ fontSize: { md: '40px', xs: '28px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                            JOB TODAY is on national TV and the radio
                        </Typography>
                        <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'justify', mt: 3 }} >
                            Our latest TV advert is currently running on Channel 4, More4, E4, Dave and many other channels across the UK. You can also hear our radio spots on stations such as Kiss and Capital FM. We have big plans for TV and radio over the coming months - we are always attracting new jobseekers.
                        </Typography>
                        <Box sx={{ width: { md: '70%', xs: '100%' }, mt: 3 }} >
                            <Grid container rowSpacing={1} columnSpacing={1} >
                                <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                    <Image src={'/pictures/hire/tv-partners-1.png'} width={50} height={50} objectFit='contain' />
                                </Grid>
                                <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                    <Image src={'/pictures/hire/tv-partners-2.png'} width={50} height={50} objectFit='contain' />
                                </Grid>
                                <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                    <Image src={'/pictures/hire/tv-partners-3.png'} width={70} height={50} objectFit='contain' />
                                </Grid>
                                <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                    <Image src={'/pictures/hire/tv-partners-4.png'} width={50} height={50} objectFit='contain' />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'center', mt: { md: 0, xs: 3 } }} >
                        <Box sx={{ borderRadius: '8px', overflow: 'hidden', position: 'relative', width: '100%', height: { md: '300px', xs: '200px' }, ml: { md: 6 } }} >
                            <Image src={'/pictures/hire/buffered-video.jpg'} layout='fill' objectFit='cover' />
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Find us around town */}
            <Box sx={{ backgroundColor: '#fbfbfb', py: { md: 12, xs: 6 } }} >
                <Container maxWidth='lg' sx={{
                    m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column'
                }}>
                    <Typography variant='h2' sx={{ fontSize: { md: '40px', xs: '28px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                        Find us around town
                    </Typography>
                    <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'center', maxWidth: { md: '70%' }, mt: 3 }} >
                        We run massive outdoor advertising campaigns across the UK. We hit billboards, bus shelters, railway stations, London buses and the London Underground in order to spread the word of JOB TODAY and our superfast hiring platform.
                    </Typography>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, mt: 3 }} >
                        <Grid container rowSpacing={1} columnSpacing={1} >
                            <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                <Image src={'/pictures/hire/outa-image-1.png'} width={120} height={60} objectFit='contain' />
                            </Grid>
                            <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                <Image src={'/pictures/hire/outa-image-2.png'} width={120} height={60} objectFit='fill' />
                            </Grid>
                            <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                <Image src={'/pictures/hire/outa-image-3.png'} width={140} height={40} objectFit='fill' />
                            </Grid>
                            <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                <Image src={'/pictures/hire/outa-image-4.png'} width={130} height={50} objectFit='contain' />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{ width: { md: '80%', xs: '100%' }, mt: 6 }} >
                        <Grid container spacing={2} >
                            <Grid item md={4} xs={12} >
                                <Box sx={{ position: 'relative', height: '220px' }} >
                                    <Image src={'/pictures/hire/ar-outdoor-2.jpg'} layout="fill" objectFit='cover' />
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={12} >
                                <Box sx={{ position: 'relative', height: '220px' }} >
                                    <Image src={'/pictures/hire/ar-outdoor-3.jpg'} layout="fill" objectFit='cover' />
                                </Box>
                            </Grid>
                            <Grid item md={4} xs={12} >
                                <Box sx={{ position: 'relative', height: '220px' }} >
                                    <Image src={'/pictures/hire/ar-outdoor-1.jpg'} layout="fill" objectFit='cover' />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* Find us online */}
            <Box sx={{ backgroundColor: 'white', py: { md: 32, xs: 6 } }} >
                <Container maxWidth='lg' sx={{
                    m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: {
                        md: 'row',
                        xs: 'column'
                    }
                }}>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mr: { md: 6 } }} >
                        <Typography variant='h2' sx={{ fontSize: { md: '40px', xs: '28px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                            JOB TODAY is on national TV and the radio
                        </Typography>
                        <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'justify', mt: 3 }} >
                            Our latest TV advert is currently running on Channel 4, More4, E4, Dave and many other channels across the UK. You can also hear our radio spots on stations such as Kiss and Capital FM. We have big plans for TV and radio over the coming months - we are always attracting new jobseekers.
                        </Typography>
                        <Box sx={{ width: { md: '100%', xs: '100%' }, mt: 3 }} >
                            <Grid container spacing={{ md: 0, xs: 3 }} columns={{ md: 15, xs: 12 }} >
                                <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                    <Image src={'/pictures/hire/oa-image-1.png'} width={100} height={50} objectFit='contain' />
                                </Grid>
                                <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                    <Image src={'/pictures/hire/oa-image-2.png'} width={100} height={50} objectFit='contain' />
                                </Grid>
                                <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                    <Image src={'/pictures/hire/oa-image-3.png'} width={100} height={50} objectFit='contain' />
                                </Grid>
                                <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                    <Image src={'/pictures/hire/oa-image-4.png'} width={100} height={50} objectFit='contain' />
                                </Grid>
                                <Grid item md={3} xs={6} sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                    <Image src={'/pictures/hire/oa-image-5.png'} width={100} height={50} objectFit='contain' />
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'center', pt: { md: 0, xs: 30 }, pb: { md: 0, xs: 20 }, position: 'relative' }} >
                        <Box sx={{ position: 'absolute', width: { md: '220px', xs: '220px' }, height: { md: '400px', xs: '400px' }, left: '0px' }} >
                            <Image src={'/pictures/hire/FB_2.jpg'} layout='fill' objectFit='contain' />
                        </Box>
                        <Box sx={{ position: 'absolute', width: { md: '180px', xs: '220px' }, height: { md: '260px', xs: '400px' }, right: '0px' }} >
                            <Image src={'/pictures/hire/FB_3.jpg'} layout='fill' objectFit='contain' />
                        </Box>
                        <Box sx={{ position: 'absolute', width: { md: '260px', xs: '220px' }, height: { md: '460px', xs: '400px' } }} >
                            <Image src={'/pictures/hire/IG-1.jpg'} layout='fill' objectFit='contain' />
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Slider */}
            <Box sx={{ backgroundColor: '#fbfbfb', py: { md: 12, xs: 6 } }} >
                <Container maxWidth='lg' sx={{
                    m: 'auto', position: 'relative'
                }}>
                    <Slider {...settings} >
                        {
                            SliderItem.map((item, index) => {
                                return <Box key={index} sx={{ px: 1 }} >
                                    <Box sx={{ width: '100%', background: 'white', p: 1, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                        <Box sx={{ position: 'relative', width: '100%', height: '120px' }} >
                                            <Image src={item.ImgURL} layout='fill' objectFit='fill' />
                                        </Box>
                                        <Typography variant='h2' sx={{ fontSize: { md: '24px', xs: '20px' }, fontFamily: 'GraphikMedium', color: '#0e54ff', textAlign: 'start', mt: { md: 12, xs: 3 } }} >
                                            {item.Title}
                                        </Typography>
                                    </Box>
                                </Box>
                            })
                        }
                    </Slider>
                </Container>
            </Box>

            {/* News Letter */}
            <NewsLetter />

        </>
    )
}

export default Advertising_Reach;

const SliderItem = [
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: '  Nursery Education'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: '  Nursery Education'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: '  Nursing Assistant'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: '  Nursery Education'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: '  Nursery Education'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: '  Nursing Assistant'
    },
    {
        ImgURL: '/pictures/hire/Chef.jpg',
        Title: ' Head Chef'
    },
]