import React, { useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Link from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQ() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ width: '100%', py: { md: 12, xs: 4 } }} >
            <Container maxWidth='lg' sx={{ m: 'auto', display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: "column" } }}>
                <Box sx={{ width: { md: '45%', xs: '100%' }, height: { md: '400px', xs: '300px' }, position: 'relative' }} >
                    <Image src={'/pictures/hire/on-the-move.png'} layout='fill' objectFit='contain' />
                </Box>
                <Box sx={{ width: { md: '55%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                    <Box sx={{ width: { md: '80%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        {
                            FAQ_Data.map((item, index) => {
                                return <Accordion key={index} sx={{ width: '100%', my: 1, boxShadow: '0 5px 26px 0 rgb(0 0 0 / 10%)' }} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography sx={{ width: '100%', flexShrink: 0 }}>
                                            {item.faq}
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            {item.ans}
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            })
                        }
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default FAQ;

const FAQ_Data = [
    {
        faq: 'How fast can I find people to recruit?',
        ans: 'Employers on JOB TODAY usually find their match within the first 24 hours!'
    },
    {
        faq: 'What type of workers can I recruit?',
        ans: 'We have all sorts of candidates on JOB TODAY: sales, retail, hospitality, admin, ...'
    },
    {
        faq: 'What type of businesses recruit through JOB TODAY?',
        ans: 'Our employers range from small independent businesses to major international franchises.'
    },
    {
        faq: 'How can I make sure the candidate is qualified before I recruit?',
        ans: 'Candidate profiles on JOB TODAY detail their past experiences. You can also start a chat directly within the app to get to know them.'
    }
]