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
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';


// assets
import QR from "../../public/pictures/home/QR.png"


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EmployerInfo() {
    const [Chat, setChat] = React.useState(false);
    const handleClickChat = () => {
        setChat(true);
    };
    return (
        <>
            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }} >

                <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', py: 4 }}>
                    <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' } }} >
                        <Box sx={{ width: { md: '60%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                            <Typography variant='h2' sx={{ fontSize: '32px', fontFamily: 'GraphikBold', color: '#29293d' }} >
                                Car Developer
                            </Typography>
                            <Typography variant='h2' sx={{ fontSize: '14px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#9b9b9b', mt: 1.5 }} >
                                Job • 1-10 Employees
                            </Typography>
                            <Typography variant='h2' sx={{ fontSize: '14px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#9b9b9b', mt: 1.5 }} >
                                Hiring with us since June, 2022
                            </Typography>
                            <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#29293d', mt: 2 }} >
                                Car Developer
                            </Typography>
                            <Box sx={{ width: '100%', display: "flex", justifyContent: 'start', alignItems: 'center', borderBottom: '1px solid rgba(0,0,0,.08)', py: 4 }} >
                                <Image src={'/pictures/JonDetail/feed-job-address.svg'} width={28} height={28} objectFit='contain' />
                                <Typography variant='h2' sx={{ fontSize: '18px', fontFamily: 'GraphikSemibold', color: '#9b9b9b', textTransform: 'capitalize', ml: 1, mt: '4px' }} >
                                    ManChester, UK
                                </Typography>
                            </Box>
                            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', borderBottom: '1px solid rgba(0,0,0,.08)', py: 3 }} >
                                <Typography variant='h2' sx={{ fontSize: '20px', fontFamily: 'GraphikBold', color: '#29293d' }} >
                                    Chat with us
                                </Typography>
                                <Box sx={{ width: '100%', display: "flex", justifyContent: 'space-between', alignItems: 'center', mt: 2 }} >
                                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                        <Box sx={{ borderRadius: '8px', overflow: 'hidden', width: '64px', display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                            <Image src={'/pictures/JonDetail/s.jpg'} width={64} height={64} objectFit='cover' />
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column', ml: 2 }} >
                                            <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000' }} >
                                                Sahal Imran
                                            </Typography>
                                            <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#9b9b9b' }} >
                                                Owner•Active 2 months ago
                                            </Typography>
                                        </Box>
                                    </Box>

                                    <Button onClick={() => setChat(true)} variant='outlined' sx={{ width: '100px', height: '46px', border: '1px solid #0e54ff', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium' }} >
                                        Chat
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ width: { md: '40%', xs: '100%' }, height: { md: '390px' }, display: "flex", justifyContent: 'center', alignItems: 'start', mt: { md: 0, xs: 4 } }} >
                            <Box sx={{ width: { md: '60%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                <Typography variant='h2' sx={{ fontSize: '19px', fontFamily: 'GraphikRegular', color: '#29293d' }} >
                                    Follow us to get job updates!
                                </Typography>
                                <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: 1 }} >
                                    <Box sx={{ borderRadius: '8px', overflow: 'hidden', width: '40px', display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                        <Image src={'/pictures/JonDetail/s.jpg'} width={40} height={40} objectFit='cover' />
                                    </Box>
                                    <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', ml: 2 }} >
                                        1 <Box component={'span'} sx={{ fontFamily: 'GraphikRegular' }} >Follower</Box>
                                    </Typography>
                                </Box>
                                <Button onClick={() => setChat(true)} variant='contained' sx={{ width: '100%', height: '56px', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', boxShadow: 'none', backgroundColor: '#0e54ff', "&:hover": { boxShadow: 'none', backgroundColor: '#0e54ff' }, mt: 3 }} >
                                    Follow
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                    <Typography variant='h2' sx={{ fontSize: '20px', fontFamily: 'GraphikBold', color: '#29293d', mt: 2, alignSelf: 'start' }} >
                        1 active job
                    </Typography>
                    {/* Job section */}
                    <Box sx={{ flexGrow: 1, width: '100%', mt: 2 }}>
                        <Grid container columnSpacing={{ md: 2, xs: 0 }} rowSpacing={{ md: 2, xs: 4 }}>
                            {
                                Jobs.map((job, index) => {
                                    return <Grid key={index} item xs={12} sm={6} md={4}>
                                        <Link href={`/jobdetail/${job.URL.country}&${job.URL.city}&${job.id}`} >
                                            <AnchorLink sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', boxShadow: 'rgba(0,0,0,.05)0px 2px 4px', borderRadius: '8px', border: '1px solid #e7ebee', overflow: 'hidden', cursor: 'pointer', textDecoration: 'none' }} >
                                                {/* Image */}
                                                <Box sx={{ position: 'relative', width: '100%', height: '200px' }} >
                                                    <Image src={job.ImageURL} layout='fill' objectFit='cover' />
                                                </Box>
                                                {/* Description */}
                                                <Box sx={{ width: '100%', p: 2, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                                    <Typography variant='h2' sx={{ fontSize: '16px', fontFamily: 'GraphikSemibold', color: '#0e54ff' }} >
                                                        {job.salary} <Box component={'span'} sx={{ fontFamily: 'GraphikRegular', color: '#29293d', ml: 1, textTransform: 'capitalize' }} >{job.employment}</Box>
                                                    </Typography>
                                                    <Typography variant='h2' sx={{ fontSize: '17px', fontFamily: 'GraphikBold', color: '#29293d', mt: 1 }} >
                                                        {job.jobTitle}
                                                    </Typography>
                                                    <Typography variant='h2' sx={{ fontSize: '15px', fontFamily: 'GraphikRegular', color: '#29293d', whiteSpace: 'nowrap', textTransform: 'capitalize', mt: '6px' }} >
                                                        {job.comapany}
                                                    </Typography>
                                                    <Typography variant='h2' sx={{ fontSize: '15px', fontFamily: 'GraphikRegular', color: '#93939a', mt: '6px', mb: 2 }} >
                                                        {job.jobDes.slice(0, 120) + '...'}
                                                    </Typography>
                                                    {/* Location */}
                                                    <Box sx={{ width: '100%', display: "flex", justifyContent: 'space-between', alignItems: 'center', }} >
                                                        <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                                                            <Image src={'/pictures/JonDetail/feed-job-address.svg'} width={16} height={16} objectFit='contain' />
                                                            <Typography variant='h2' sx={{ fontSize: '15px', lineHeight: '24px', fontFamily: 'GraphikRegular', color: '#93939a', ml: '6px', textTransform: 'capitalize' }} >
                                                                {job.jobLocation}
                                                            </Typography>
                                                        </Box>
                                                        <Typography variant='h2' sx={{ fontSize: '14px', fontFamily: 'GraphikRegular', color: '#93939a' }} >
                                                            {job.postedDate}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </AnchorLink>
                                        </Link>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Box>
                </Container>

            </Box>

            {/* For Chat */}
            <Dialog
                open={Chat}
                sx={{
                    display: {
                        md: 'block',
                        xs: 'none'
                    }
                }}
            >
                <Box sx={{ width: { lg: '1080px', xs: '90%' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '32px', p: 5 }} >
                    {/* ++++++++++ */}
                    {/* Cross icon */}
                    {/* +++++++++++*/}
                    <Box onClick={() => setChat(false)} sx={{ alignSelf: 'end', cursor: 'pointer' }} >
                        <Image src={'/pictures/home/cross.svg'} width={30} height={30} objectFit={'objectfit'} />
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                        <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                            <Typography variant='h2' sx={{ fontSize: '42px', lineHeight: '48px', fontFamily: 'GraphikSemibold', letterSpacing: '.5px', color: '#000' }} >
                                Download the app
                            </Typography>
                            <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikRegular', color: '#000', mt: 2 }} >
                                Scan the QR code to download the app to <Box component={'span'} sx={{ fontFamily: 'GraphikSemibold', }} >chat with employers</Box>, apply to jobs in one click, create your CV and follow companies you are interested in.
                            </Typography>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }} >
                                <Image src={QR} width={200} height={200} objectFit={'cover'} />
                            </Box>
                            <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#93939a', alignSelf: 'center', mt: 2 }} >
                                Or download the app from the app stores:
                            </Typography>
                            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                <AnchorLink href='' >
                                    <Image src={'/pictures/home/white-playstore.jpg'} width={127} height={56} objectFit={'contain'} alt={'icon'} />
                                </AnchorLink>
                                <AnchorLink href='' sx={{ ml: 2 }} >
                                    <Image src={'/pictures/home/white-appstore.jpg'} width={142} height={56} objectFit={'contain'} alt={'icon'} />
                                </AnchorLink>
                            </Box>
                        </Box>
                        <Box sx={{ width: '50%', height: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} >
                            <Image src={'/pictures/JonDetail/mobileApp.png'} layout="fill" objectFit={'contain'} alt={'icon'} />
                        </Box>
                    </Box>
                </Box>
            </Dialog>

            <Dialog
                open={Chat}
                sx={{
                    display: {
                        md: 'none',
                        xs: 'block'
                    }
                }}
                TransitionComponent={Transition}
                fullScreen
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '32px', p: { md: 5, xs: 3 } }} >
                    {/* ++++++++++ */}
                    {/* Cross icon */}
                    {/* +++++++++++*/}
                    <Box onClick={() => setChat(false)} sx={{ alignSelf: 'end', cursor: 'pointer' }} >
                        <Image src={'/pictures/home/cross.svg'} width={30} height={30} objectFit={'objectfit'} />
                    </Box>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: 'column-reverse' } }} >
                        <Box sx={{ width: { md: '50%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: { md: 'start', xs: 'center' }, flexDirection: 'column', mt: { md: 0, xs: 4 } }} >
                            <Typography variant='h2' sx={{ fontSize: '42px', lineHeight: '48px', fontFamily: 'GraphikSemibold', letterSpacing: '.5px', color: '#000', textAlign: { md: 'start', xs: 'center' } }} >
                                Download the app
                            </Typography>
                            <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikRegular', color: '#000', mt: 2, textAlign: { md: 'start', xs: 'center' } }} >
                                Scan the QR code to download the app to <Box component={'span'} sx={{ fontFamily: 'GraphikSemibold', }} >chat with employers</Box>, apply to jobs in one click, create your CV and follow companies you are interested in.
                            </Typography>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }} >
                                <Image src={QR} width={200} height={200} objectFit={'cover'} />
                            </Box>
                            <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#93939a', alignSelf: 'center', mt: 2 }} >
                                Or download the app from the app stores:
                            </Typography>
                            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                <AnchorLink href='' >
                                    <Image src={'/pictures/home/white-playstore.jpg'} width={127} height={56} objectFit={'contain'} alt={'icon'} />
                                </AnchorLink>
                                <AnchorLink href='' sx={{ ml: 2 }} >
                                    <Image src={'/pictures/home/white-appstore.jpg'} width={142} height={56} objectFit={'contain'} alt={'icon'} />
                                </AnchorLink>
                            </Box>
                        </Box>
                        <Box sx={{ width: { md: '50%', xs: '100%' }, height: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} >
                            <Image src={'/pictures/JonDetail/mobileApp.png'} layout="fill" objectFit={'contain'} alt={'icon'} />
                        </Box>
                    </Box>
                </Box>
            </Dialog>
        </>
    )
}

export default EmployerInfo;

const Jobs = [
    {
        id: 1,
        jobTitle: 'Web developer',
        jobDes: 'Driver and Cook At Private Company Lahore. As per latest Private Company jobs August',
        jobLocation: 'UK, UK',
        postedTime: '2 days ago',
        comapany: 'Brightcore.com',
        salary: '$1000 monthly',
        employment: 'full-time',
        experience: 'expert',
        language: 'English',
        languageSkill: 'expert',
        startingTime: 'immediate',
        postedDate: '06/8/2022',
        expireDate: '10/8/2022',
        ownerName: 'Sahal',
        LastActive: '1 day ago',
        ImageURL: '/pictures/JonDetail/cardDefault2.jpg',
        URL: {
            country: 'UK',
            city: "lahore"
        }
    }
]