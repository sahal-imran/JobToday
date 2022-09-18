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
import Navigation from './Navigation';


// Section Import
import Hero from './Home/Hero';
import TrendingInCareerAdvice from './Home/TrendingInCareerAdvice';
import TrendinginEmployerAdvice from './Home/TrendinginEmployerAdvice';

function Blog() {
    return (
        <>
            <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                {/* Navigation bar */}
                <Navigation />

                {/* Hero Section */}
                <Hero />

                {/* TrendingInCareerAdvice */}
                <TrendingInCareerAdvice />

                {/* TrendinginEmployerAdvice */}
                <TrendinginEmployerAdvice />
            </Box>
        </>
    )
}

export default Blog;