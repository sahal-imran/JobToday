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

function Navigation() {
    const router = useRouter();
    const BorderColorForCareerAdvice = router.pathname === '/blog/CareerAdvice' ? "#000" : "transparent";
    const ColorForCareerAdvice = router.pathname === '/blog/CareerAdvice' ? "#000" : "#0e54ff";
    const BorderColorForEmployerAdvice = router.pathname === '/blog/EmployerAdvice' ? "#000" : "transparent";
    const ColorForEmployerAdvice = router.pathname === '/blog/EmployerAdvice' ? "#000" : "#0e54ff";
    const BorderColorForInsideJobToday = router.pathname === '/blog/InsideJobToday' ? "#000" : "transparent";
    const ColorForInsideJobToday = router.pathname === '/blog/InsideJobToday' ? "#000" : "#0e54ff";
    return (
        <>
            <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'start', alignItems: 'center', maxWidth: '100%', overflow: 'auto' }}>
                <Link href={'/blog/CareerAdvice'} >
                    <AnchorLink sx={{ mr: 5, fontSize: '19px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `${ColorForCareerAdvice}`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', py: 3, borderBottom: `3px solid ${BorderColorForCareerAdvice}` }} >
                        Career Advice
                    </AnchorLink>
                </Link>
                <Link href={'/blog/EmployerAdvice'} >
                    <AnchorLink sx={{ mr: 5, fontSize: '19px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `${ColorForEmployerAdvice}`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', py: 3, borderBottom: `3px solid ${BorderColorForEmployerAdvice}` }} >
                        Employer Advice
                    </AnchorLink>
                </Link>
                <Link href={'/blog/InsideJobToday'} >
                    <AnchorLink sx={{ fontSize: '19px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `${ColorForInsideJobToday}`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', py: 3, borderBottom: `3px solid ${BorderColorForInsideJobToday}` }} >
                        Inside Job Today
                    </AnchorLink>
                </Link>
            </Container>
        </>
    )
}

export default Navigation