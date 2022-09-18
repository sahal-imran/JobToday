import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/system/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import CareerAdviceCard from './CareerAdviceCard';

function Hero() {
    return (
        <>
            <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'start', alignItems: 'center', py: 3 }}>
                <Grid container rowSpacing={{ md: 0, xs: 6 }} columnSpacing={3}>
                    <Grid item sx={12} md={8}>
                        <Link href={''} >
                            <AnchorLink sx={{ textDecoration: 'none', cursor: 'pointer' }} >
                                <Box sx={{ width: { md: '100%', xs: '85%' }, display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', m: 'auto' }} >
                                    <Box sx={{ width: '100%', height: { md: '540px', xs: '200px' }, display: "flex", justifyContent: 'center', alignItems: 'center', position: 'relative' }} >
                                        <Image src={'/pictures/Blog/Home/hero.jpg'} layout='fill' objectFit='fill' />
                                    </Box>
                                    <Typography sx={{ my: 2.5, fontSize: '15px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '#00ae64', alignSelf: 'start' }} >
                                        Career Advice
                                    </Typography>
                                    <Typography sx={{ fontSize: '30px', lineHeight: '40px', fontFamily: 'GraphikSemiBold', color: '#000', alignSelf: 'start' }} >
                                        How to Create the Perfect JOB TODAY Profile
                                    </Typography>
                                    <Box sx={{ maxHeight: '80px', overflow: 'hidden', mt: 1 }} >
                                        <Typography sx={{ fontSize: '26px', fontFamily: 'GraphikRegular', color: '#000', alignSelf: 'start' }} >
                                            Having a complete, informative profile will increase your chances of landing your dream job! Check out our tips on how to create an incredible profile!
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: "flex", justifyContent: 'start', alignItems: 'center', width: '100%', height: '30px' }} >
                                        <Typography sx={{ fontSize: '14px', fontFamily: 'GraphikMedium', color: '#959595', }} >
                                            Doris Benitez
                                        </Typography>
                                        <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 2 }} />
                                        <Typography sx={{ fontSize: '14px', fontFamily: 'GraphikRegular', color: '#959595', whiteSpace: 'nowrap' }} >
                                            Reading time:
                                            5
                                            min
                                        </Typography>
                                    </Box>
                                </Box>
                            </AnchorLink>
                        </Link>
                    </Grid>
                    <Grid item sx={12} md={4}>
                        <CareerAdviceCard URL={'/pictures/Blog/Home/hero2.jpg'} Type={'Career Advice'} Title={`5 Skills That’ll Get You Hired Fast as a Caretaker`} SubTilte={`Being empathetic, a keen observer, a sharp communicator,  a vigilant time-keeper and physically strong will get you hired in no time as a caretaker!`} Author={`Doris Benitez`} LastRead={`Reading time:5min`} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Hero