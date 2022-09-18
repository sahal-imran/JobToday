import React, { useEffect } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import FilterIconBlack from "../../public/pictures/JonDetail/filters-black.svg";
import FilterIconBlue from "../../public/pictures/JonDetail/filters-blue.svg";
import Dialog from '@mui/material/Dialog';
import SwitchButtonWithText from './SwitchButtonWithText';
import CheckBoxWithText from './CheckBoxWithText';
import Grid from '@mui/material/Grid';
import Link from 'next/link';


function AutoSuggestedLocationForJob() {
    const router = useRouter();
    const JobTitle = router.query.jobTitle;
    return (
        <>
            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikSemiBold', color: '000', mb: 2 }} >
                    Popular {JobTitle} jobs locations
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <Grid container rowSpacing={"12px"}>
                    {
                        Cities.map((item, index) => {
                            return <Grid key={index} item xs={12}>
                                <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                                    <Link href={'/'} >
                                        <AnchorLink sx={{
                                            color: '#29293d', fontSize: '14px', lineHeight: '20px', fontFamily: 'GraphikRegular', cursor: 'pointer', textDecoration: 'none'
                                        }} >
                                            {item.Name}
                                        </AnchorLink>
                                    </Link>
                                </Box>
                            </Grid>
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default AutoSuggestedLocationForJob;

const Cities = [
    {
        Name: 'Manchestor'
    },
    {
        Name: 'Landon'
    },
    {
        Name: 'Liver pool'
    },
    {
        Name: 'Bristol'
    },
    {
        Name: 'Coventry'
    },

]