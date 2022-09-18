import React, { useState } from 'react';
import Navigation from './Navigation';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Select from 'react-select';

const customStyles = {
    container: (provided, state) => ({
        ...provided,
        width: '100%',
        borderRadius: '8px', boxShadow: '0 2px 4px 0 rgb(0 0 0 / 10%)',
    }),
    control: base => ({
        ...base,
        height: 48,
        minHeight: 48,
        outline: 'none', border: 'none'
    })
}


const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

function NewsLetter() {
    const [selectedOption, setSelectedOption] = useState(null);
    return (
        <>
            {/* News letter */}
            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' },py:10 }} >
                <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: 'column' }, borderRadius: '20px', backgroundColor: '#f2f4fa', py: 8, px: { md: 11, xs: 2 }, }}>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                        <Typography variant='h2' sx={{ fontSize: { md: '36px', xs: '24px' }, fontFamily: 'GraphikSemibold', color: '#252525' }} >
                            Get our hiring advice email updates
                        </Typography>
                        <Typography variant='h2' sx={{ fontSize: { md: '18px', xs: '16px' }, fontFamily: 'GraphikRegular', color: '#252525', textAlign: 'justify', mt: 6 }} >
                            No spam, we promise. Only useful hiring and staff<br /> management advice every now and then.
                        </Typography>
                    </Box>
                    <Box sx={{ width: { md: '50%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'center', mt: { md: 0, xs: 4 } }} >
                        <Box sx={{ width: { md: '90%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                            <Box sx={{ width: '100%', height: '48px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 4px 0 rgb(0 0 0 / 10%)', background: 'white', px: 2 }} >
                                <input type="text" style={{ width: '100%', height: '100%', outline: 'none', border: 'none', background: 'transparent', fontSize: '16px', fontFamily: 'GraphikRegular', color: '#252525' }} placeholder='Enetr your mail to join newsletter' />
                            </Box>
                            <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                                <Box sx={{ width: '60%', mr: 1 }} >
                                    <Select
                                        defaultValue={selectedOption}
                                        onChange={setSelectedOption}
                                        options={options}
                                        styles={customStyles}
                                    />
                                </Box>
                                <Box sx={{ width: '40%', ml: 1 }} >
                                    <Button variant='contained' sx={{ width: '100%', height: '48px', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', color: '#fff', backgroundColor: '#0e54ff', boxShadow: 'none', "&:hover": { backgroundColor: '#0c47d9', boxShadow: 'none', } }} >
                                        Subscribe
                                    </Button>
                                </Box>
                            </Box>
                            <Typography variant='h2' sx={{ fontSize: '16px', fontFamily: 'GraphikRegular', color: '#111', mt: 10 }} >
                                By subscribing, you agree to our
                                <Link href={''} >
                                    <AnchorLink sx={{ textDecoration: 'none', fontSize: '16px', fontFamily: 'GraphikRegular', color: '#111', cursor: 'pointer', "&:hover": { textDecoration: 'underline' }, ml: .5 }} >
                                        privacy policy.
                                    </AnchorLink>
                                </Link>
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default NewsLetter;