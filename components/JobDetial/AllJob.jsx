import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import Button from '@mui/material/Button';


function AllJob() {
    const router = useRouter();
    const JobTitle = router.query.jobTitle;
    return (
        <>
            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 6 }} >
                <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '28px', fontFamily: 'GraphikBold', color: '#29293d', alignSelf: 'start' }} >
                    {JobTitle + ' '}jobs in UK
                </Typography>
                {/* Cards */}
                <Box sx={{ flexGrow: 1, width: '100%', mt: 4 }}>
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
                <Box sx={{ width: { md: 'auto', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'center', mt: 6, flexDirection: { md: 'row', xs: 'column-reverse' } }} >
                    <Button variant='outlined' sx={{ width: { md: '200px', xs: '100%' }, height: '56px', border: '1px solid #0e54ff', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', mr: { md: 2 }, mt: { md: 0, xs: 2 } }} >
                        Back
                    </Button>
                    <Button variant='contained' sx={{ width: { md: '200px', xs: '100%' }, height: '56px', border: '1px solid #0e54ff', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', boxShadow: 'none', backgroundColor: '#2252c7', "&:hover": { boxShadow: 'none', backgroundColor: '#2252c7' } }} >
                        Next
                    </Button>
                </Box>
            </Box>

            


        </>
    )
}

export default AllJob;

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
    },
    {
        id: 2,
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
        ImageURL: '/pictures/JonDetail/cardDefault1.jpg',
        URL: {
            country: 'UK',
            city: "lahore"
        }
    },
    {
        id: 3,
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
        ImageURL: '/pictures/JonDetail/cardDefault3.jpg',
        URL: {
            country: 'UK',
            city: "lahore"
        }
    },
    {
        id: 4,
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
        ownerName: 'stephen',
        LastActive: '1 day ago',
        ImageURL: '/pictures/JonDetail/cardDefault4.jpg',
        URL: {
            country: 'UK',
            city: "lahore"
        }
    },
    {
        id: 5,
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
        ownerName: 'imran',
        LastActive: '1 day ago',
        ImageURL: '/pictures/JonDetail/cardDefault1.jpg',
        URL: {
            country: 'UK',
            city: "lahore"
        }
    },
    {
        id: 6,
        jobTitle: 'Web developer',
        jobDes: 'Driver and Cook At Private Company Lahore. As per latest Private Company jobs August',
        jobLocation: 'UK, UK',
        postedTime: '3 days ago',
        comapany: 'Brightcore.com',
        salary: '$1020 monthly',
        employment: 'full-time',
        experience: 'normal',
        language: 'English',
        languageSkill: 'expert',
        startingTime: 'immediate',
        postedDate: '06/8/2022',
        expireDate: '10/8/2022',
        ownerName: 'Saahi',
        LastActive: '4 day ago',
        ImageURL: '/pictures/JonDetail/cardDefault2.jpg',
        URL: {
            country: 'UK',
            city: "faislabad"
        }
    },
]