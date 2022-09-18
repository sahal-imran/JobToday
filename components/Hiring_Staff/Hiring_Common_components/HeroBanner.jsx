import React, { useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';

function HeroBanner({ id, Title, subTitle, Button_text }) {
    return (
        <Box id={id} sx={{ width: '100%', height: { md: '80vh', xs: 'auto' }, display: "flex", justifyContent: 'center', alignItems: 'center', py: { md: 0, xs: 6 } }} >
            <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'start', alignItems: 'center' }}>
                <Box sx={{ width: { md: '50%', xs: '70%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                    <Typography variant='h2' sx={{ fontSize: { md: '40px', xs: '28px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                        {Title}
                    </Typography>
                    <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'justify', mt: 3 }} >
                        {subTitle}
                    </Typography>
                    <Button variant='contained' sx={{ px: { md: 4 }, py: { md: 2, xs: 1.5 }, borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', color: '#fff', backgroundColor: '#0e54ff', boxShadow: 'none', "&:hover": { backgroundColor: '#0c47d9', boxShadow: 'none', }, mt: 4 }} >
                        {Button_text}
                    </Button>
                </Box>
            </Container>
        </Box>
    )
}

export default HeroBanner