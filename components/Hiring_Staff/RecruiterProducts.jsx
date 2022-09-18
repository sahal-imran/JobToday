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
import NewsLetter from './NewsLetter';
import HeroBanner from './Hiring_Common_components/HeroBanner';
import Card_top from './Hiring_Common_components/Card_top';
import Card_middle from './Hiring_Common_components/Card_middle';
import Card_Bottom from './Hiring_Common_components/Card_Bottom';
import Poster from './Hiring_Common_components/Poster';
import HiringApp from './Hiring_Common_components/HiringApp';
import AccessQualifiedCandidates from './Hiring_Common_components/AccessQualifiedCandidates';
import Create_Your_Own_Company from './Hiring_Common_components/Create_Your_Own_Company';
import TrendingHiringAdvice from './Hiring_Common_components/TrendingHiringAdvice';


function RecruiterProducts() {
  return (
    <>
      <Navigation />
      <HeroBanner id={''} Title={'All the hiring tools your business will ever need'} subTitle={'Our hiring platform provides you with all the tools you need to find the best staff for your business at lightning speed. Whether you are a small business, a staffing agency or have corporate needs, you can use our portfolio of products to hire the right candidates faster than ever before. You can recruit on the go with our award winning mobile app, or you can recruit online with our web client - the choice is yours.'} Button_text={'Start hiring for free'} />

      {/* Card top */}
      <Card_top Title={'Post a Job for Free'} subTitle={'Create your company page and post a job in less than a minute! You can use our mobile app, to manage your recruitment needs on the go. Your first job will always be fore free!'} Button_text={'Post a job now'} />


      {/* Card middle */}
      <Card_middle Title={'Candidate Search'} subTitle={'Browse through our database of millions of active job seekers, filter by keywords, job titles, experience and location. Find the right candidates for your business and reach out to them directly from our app.'} Button_text={'Find your perfect hire'} />

      {/* Card Bottom */}
      <Card_Bottom Title={'Shortlist & Chat'} subTitle={'Shortlist and chat directly to applicants with our in-app message function. No need for clunky emails, all your communication is neatly ordered with JOB TODAY.'} Button_text={'Start chatting'} />


      {/* poster */}
      <Poster />

      {/* Hiring App */}
      <HiringApp />

      {/* Create your own company page */}
      <Create_Your_Own_Company />

      {/* News Letter */}
      <NewsLetter />

    </>
  )
}

export default RecruiterProducts;

const companirs = [
  {
    URL: "/pictures/hire/1.jpg"
  },
  {
    URL: "/pictures/hire/2.png"
  },
  {
    URL: "/pictures/hire/3.png"
  },
  {
    URL: "/pictures/hire/4.jpg"
  },
  {
    URL: "/pictures/hire/5.png"
  },
  {
    URL: "/pictures/hire/6.jpeg"
  },
  {
    URL: "/pictures/hire/7.jpg"
  },
  {
    URL: "/pictures/hire/8.png"
  },

]


const JobTypes = [
  {
    Name: 'Waiters'
  },
  {
    Name: 'Chef & Cook'
  },
  {
    Name: 'Management'
  },
  {
    Name: 'Retail'
  },
  {
    Name: 'Office & Admin'
  },
  {
    Name: 'Barista'
  },
  {
    Name: 'Kitchen Porter'
  },
  {
    Name: 'Cleaning'
  },
  {
    Name: 'Customer Service'
  },

  {
    Name: 'Education'
  },
  {
    Name: 'Sales & Marketing'
  },
  {
    Name: 'Driver & Delivery'
  },
  {
    Name: 'Warehouses'
  },
  {
    Name: 'Healthcare'
  },
  {
    Name: 'Salon & Beauty'
  },
  {
    Name: ' Construction & Trades'
  },
]
