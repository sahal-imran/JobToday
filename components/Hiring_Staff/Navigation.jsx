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
    const BorderColorForHiring = router.pathname === '/hire' ? "#000" : "transparent";
    const ColorForHiring = router.pathname === '/hire' ? "#000" : "#0e54ff";
    const BorderColorForjobseeker_stats = router.pathname === '/hire/jobseekerstats' ? "#000" : "transparent";
    const ColorForjobseeker_stats = router.pathname === '/hire/jobseekerstats' ? "#000" : "#0e54ff";
    const BorderColorForrecruiterproducts = router.pathname === '/hire/recruiterproducts' ? "#000" : "transparent";
    const ColorForrecruiterproducts = router.pathname === '/hire/recruiterproducts' ? "#000" : "#0e54ff";
    const BorderColorForadvertisingreach = router.pathname === '/hire/advertisingreach' ? "#000" : "transparent";
    const ColorForadvertisingreach = router.pathname === '/hire/advertisingreach' ? "#000" : "#0e54ff";
    const BorderColorForRecruitmentforyourbusiness = router.pathname === '/hire/Recruitmentforyourbusiness' ? "#000" : "transparent";
    const ColorForRecruitmentforyourbusiness = router.pathname === '/hire/Recruitmentforyourbusiness' ? "#000" : "#0e54ff";
    const BorderColorForjobadvertisingnetwork = router.pathname === '/hire/jobadvertisingnetwork' ? "#000" : "transparent";
    const ColorForjobadvertisingnetwork = router.pathname === '/hire/jobadvertisingnetwork' ? "#000" : "#0e54ff";
    return (
        <>
            <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'start', alignItems: 'center', maxWidth: '100%', overflow: 'auto' }}>
                <Link href={'/hire'} >
                    <AnchorLink sx={{ mr: 5, fontSize: '17px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: `${ColorForHiring}`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', py: 3, borderBottom: `2px solid ${BorderColorForHiring}` }} >
                        Hire
                    </AnchorLink>
                </Link>
                <Link href={'/hire/jobseekerstats'} >
                    <AnchorLink sx={{ mr: 5, fontSize: '17px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: `${ColorForjobseeker_stats}`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', py: 3, borderBottom: `2px solid ${BorderColorForjobseeker_stats}` }} >
                        Jobseeker Stats
                    </AnchorLink>
                </Link>
                <Link href={'/hire/recruiterproducts'} >
                    <AnchorLink sx={{ mr: 5, fontSize: '17px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: `${ColorForrecruiterproducts}`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', py: 3, borderBottom: `2px solid ${BorderColorForrecruiterproducts}` }} >
                        Recruiter Products
                    </AnchorLink>
                </Link>
                <Link href={'/hire/advertisingreach'} >
                    <AnchorLink sx={{ mr: 5, fontSize: '17px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: `${ColorForadvertisingreach}`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', py: 3, borderBottom: `2px solid ${BorderColorForadvertisingreach}` }} >
                        Advertising Reach
                    </AnchorLink>
                </Link>
                <Link href={'/hire/Recruitmentforyourbusiness'} >
                    <AnchorLink sx={{ mr: 5, fontSize: '17px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: `${ColorForRecruitmentforyourbusiness}`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', py: 3, borderBottom: `2px solid ${BorderColorForRecruitmentforyourbusiness}` }} >
                        Recruitment for your business
                    </AnchorLink>
                </Link>
                <Link href={'/hire/jobadvertisingnetwork'} >
                    <AnchorLink sx={{ fontSize: '17px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: `${ColorForjobadvertisingnetwork}`, cursor: 'pointer', transition: 'all 0.3s ease', "&:hover": { color: '#000' }, whiteSpace: 'nowrap', py: 3, borderBottom: `2px solid ${BorderColorForjobadvertisingnetwork}` }} >
                    Job Advertising Network
                    </AnchorLink>
                </Link>
            </Container>
        </>
    )
}

export default Navigation