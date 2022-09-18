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

function TrendingInCareerAdvice() {
    return (
        <>
            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', py: 8, background: '#f7f7f7' }} >
                <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'start', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography sx={{ fontSize: '30px', fontFamily: 'GraphikBlack', color: '#000', alignSelf: 'start' }} >
                        Trending in Career Advice
                    </Typography>
                    <Box sx={{ width: '100%', mt: 3 }} >
                        <Grid container rowSpacing={{ md: 0, xs: 6 }} columnSpacing={3}>
                            <Grid item sx={12} md={4}>
                                <CareerAdviceCard URL={'/pictures/Blog/Home/1.jpg'} Type={'Employer Advice'} Title={`How Can You Create an Employer Brand?`} SubTilte={`Your employer brand is how both your current and potential employees perceive you. You can save serious hiring costs and have access to the best talent pool by designing a great employer brand!`} Author={`Doris Benitez`} LastRead={`Reading time:5min`} ImgHeight={'260px'} />
                            </Grid>
                            <Grid item sx={12} md={4}>
                                <CareerAdviceCard URL={'/pictures/Blog/Home/2.jpg'} Type={'Career Advice'} Title={`Why You’ll Love Being a Carer`} SubTilte={`Being empathetic, a keen observer, a sharp communicator,  a vigilant time-keeper and physically strong will get you hired in no time as a caretaker!`} Author={`Doris Benitez`} LastRead={`Reading time:5min`} ImgHeight={'260px'} />
                            </Grid>
                            <Grid item sx={12} md={4}>
                                <CareerAdviceCard URL={'/pictures/Blog/Home/3.jpg'} Type={'Career Advice'} Title={`5 Skills That’ll Get You Hired Fast as a Caretaker`} SubTilte={`Being empathetic, a keen observer, a sharp communicator,  a vigilant time-keeper and physically strong will get you hired in no time as a caretaker!`} Author={`Doris Benitez`} LastRead={`Reading time:5min`} ImgHeight={'260px'} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Link href={''} >
                        <AnchorLink sx={{ fontSize: '16px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: 'white', cursor: 'pointer', whiteSpace: 'nowrap', background: '#0e54ff', px: 8, py: 1.6, borderRadius: '8px', mt: 8 }} >
                            See jobs in your city
                        </AnchorLink>
                    </Link>
                </Container>
            </Box>
        </>
    )
}

export default TrendingInCareerAdvice