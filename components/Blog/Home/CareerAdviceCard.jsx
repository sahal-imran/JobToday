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

function CareerAdviceCard({ URL, Type, Title, SubTilte, Author, LastRead, ImgHeight, justTitle = false }) {
    return (
        <Link href={''} >
            <AnchorLink sx={{ textDecoration: 'none', cursor: 'pointer' }} >
                <Box sx={{ width: { md: '100%', xs: '85%' }, display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', m: 'auto' }} >

                    {/* Card Image */}
                    <Box sx={{ width: '100%', height: { md: `${ImgHeight}`, xs: '200px' }, display: "flex", justifyContent: 'center', alignItems: 'center', position: 'relative' }} >
                        <Image src={URL} layout='fill' objectFit='cover' />
                    </Box>

                    {/* Card Type */}
                    {
                        !justTitle &&
                        <Typography sx={{ my: 2.5, fontSize: '15px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '#00ae64', alignSelf: 'start' }} >
                            {Type}
                        </Typography>
                    }

                    {/* Card Title */}
                    <Typography sx={justTitle ? { fontSize: '30px', lineHeight: '40px', fontFamily: 'GraphikSemiBold', color: '#000', alignSelf: 'start',mt:2 } : { fontSize: '30px', lineHeight: '40px', fontFamily: 'GraphikSemiBold', color: '#000', alignSelf: 'start' }} >
                        {Title}
                    </Typography>

                    {/* Card SubTitle */}
                    {
                        !justTitle &&
                        <Box sx={{ maxHeight: '80px', overflow: 'hidden', mt: 1 }} >
                            <Typography sx={{ fontSize: '26px', fontFamily: 'GraphikRegular', color: '#000', alignSelf: 'start' }} >
                                {SubTilte}
                            </Typography>
                        </Box>
                    }

                    {/* Card Text */}
                    {
                        !justTitle &&
                        <Box sx={{ display: "flex", justifyContent: 'start', alignItems: 'center', width: '100%', height: '30px' }} >
                            <Typography sx={{ fontSize: '14px', fontFamily: 'GraphikMedium', color: '#959595', }} >
                                {Author}
                            </Typography>
                            <Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 2 }} />
                            <Typography sx={{ fontSize: '14px', fontFamily: 'GraphikRegular', color: '#959595', whiteSpace: 'nowrap' }} >
                                {LastRead}
                            </Typography>
                        </Box>
                    }
                </Box>
            </AnchorLink>
        </Link>
    )
}

export default CareerAdviceCard