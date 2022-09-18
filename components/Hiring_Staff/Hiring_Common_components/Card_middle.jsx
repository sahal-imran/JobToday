import React, { useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

function Card_middle({Title, subTitle, Button_text}) {
    return (
        <>
            <Box sx={{ backgroundColor: 'white', py: { md: 12, xs: 6 } }} >
                <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row-reverse', xs: "column" } }}>
                    {/* Image */}
                    <Box sx={{ width: { md: '45%', xs: '100%' }, height: { md: '400px', xs: '300px' }, position: 'relative' }} >
                        <Image src={'/pictures/hire/hire2xa.png'} layout='fill' objectFit='contain' />
                        <Box sx={{ position: 'absolute', width: { md: '250px', xs: '140px' }, height: { md: '350px', xs: '180px' }, left: { md: '-20px', xs: '0px' }, top: '0px' }} >
                            <Image src={'/pictures/hire/hire2a.png'} layout='fill' objectFit='contain' />
                        </Box>
                    </Box>
                    <Box sx={{ width: { md: '55%', xs: '100%' }, display: "flex", justifyContent: 'start', alignItems: 'center', }} >
                        <Box sx={{ width: { md: '60%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                            <Typography variant='h2' sx={{ fontSize: { md: '40px', xs: '28px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                                {Title}
                            </Typography>
                            <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'justify', mt: 3 }} >
                                {subTitle}
                            </Typography>
                            <AnchorLink sx={{ fontSize: { md: '17px', xs: '16px' }, fontFamily: 'GraphikMedium', color: '#0e54ff', cursor: 'pointer', textAlign: 'start', textDecoration: 'none', "&:hover": { textDecoration: 'underline' }, mt: 3 }} >
                                {Button_text}
                            </AnchorLink>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Card_middle