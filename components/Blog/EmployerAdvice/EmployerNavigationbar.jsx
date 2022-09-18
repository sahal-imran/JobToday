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
            <Box sx={{ width: '100%', display: "flex", justifyContent: 'start', alignItems: 'center', maxWidth: '100%', overflow: 'auto', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                <Link href={''} >
                    <AnchorLink sx={{ mr: 5, fontSize: '19px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#0e54ff`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', pb: 3,pt:4, borderBottom: `3px solid transparent` }} >
                        Interviews
                    </AnchorLink>
                </Link>
                <Link href={''} >
                    <AnchorLink sx={{ mr: 5, fontSize: '19px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#0e54ff`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', pb: 3,pt:4, borderBottom: `3px solid transparent` }} >
                        Hiring process
                    </AnchorLink>
                </Link>
                <Link href={''} >
                    <AnchorLink sx={{ mr: 5, fontSize: '19px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#0e54ff`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', pb: 3,pt:4, borderBottom: `3px solid transparent` }} >
                        Interviews
                    </AnchorLink>
                </Link>
                <Link href={''} >
                    <AnchorLink sx={{ mr: 5, fontSize: '19px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#0e54ff`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', pb: 3,pt:4, borderBottom: `3px solid transparent` }} >
                        News
                    </AnchorLink>
                </Link>
                <Link href={''} >
                    <AnchorLink sx={{ fontSize: '19px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#0e54ff`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', pb: 3,pt:4,  borderBottom: `3px solid transparent` }} >
                       Resources
                    </AnchorLink>
                </Link>
            </Box>
        </>
    )
}

export default Navigation