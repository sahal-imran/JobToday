import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/system/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { useRouter } from 'next/router';
import AnchorLink from "@mui/material/Link";
import Link from "next/link";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import toast, { Toaster } from 'react-hot-toast';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


// assets
import QR from "../../public/pictures/home/QR.png"


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function ExplainedDetail() {
  const [Chat, setChat] = React.useState(false);
  const handleClickChat = () => {
    setChat(true);
  };
  const [Apply, setApply] = React.useState(false);
  const handleClickApply = () => {
    setApply(!Apply);
  };


  const [Experince, setExperince] = React.useState('female');

  const handleChangeExperince = (event) => {
    setExperince(event.target.value);
    Seterror(false);
  };

  const [Language, setLanguage] = React.useState("none");
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
    Seterror(false);
  };
  const [showPlaceholder, setShowPlaceholder] = useState(Language === "none");

  const [LanguageLevel, setLanguageLevel] = React.useState("none");
  const handleLanguageLevelChange = (event) => {
    setLanguageLevel(event.target.value);
    Seterror(false);
  };
  const [showPlaceholderLevel, setShowPlaceholderLevel] = useState(Language === "none");

  const [Languages, Set_Languages] = useState([])

  console.log(Languages)
  const Selected_Languages = () => {
    if (Language === 'none' || LanguageLevel === 'none') {
      notify();
      return;
    }
    else {
      Set_Languages([
        ...Languages,
        {
          name: Language,
          level: LanguageLevel
        }
      ])
      setLanguage('none');
      setLanguageLevel('none')
      motify2();
    }

  }


  // Toasters
  const notify = () => toast.error("Oops! Select language first");
  const motify2 = () => toast.success('Successfully added!')


  const [Country, setCountry] = React.useState("none");
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
    Seterror(false);
  };
  const [showPlaceholderCountry, setShowPlaceholderCountry] = useState(Language === "none");

  const [Page1, SetPage1] = useState(true);
  const [Page2, SetPage2] = useState(false);

  // error message
  const [error, Seterror] = useState(false);
  const Display = error ? "block" : "none";
  const Border = error ? '1px solid #fc413d' : '1px solid transparent';
  const MtopDesktop = error ? '1080px' : '940px'
  const Mtop = error ? '1240px' : '1000px'

  const Next = () => {

    if (Country === 'none' || Languages.length === 0) {
      Seterror(true);
      return;
    }

    SetPage1(false);
    SetPage2(true);
  }


  const [HowMuchExpeience, Set_HowMuchExpeience] = useState('none')


  return (
    <>
      <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center' }} >
        <Container maxWidth='lg' sx={{ display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: { md: 'row', xs: 'column' }, py: 3 }}>
          {/* left */}
          <Box sx={{ width: { md: '60%', xs: '100%' }, display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >

            {/* Info Box */}
            <Box sx={{ width: '100%', flexGrow: 1 }} >
              <Grid container columnSpacing={{ md: 2 }} rowSpacing={{ md: 0, xs: 3 }}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                    <Typography variant='h2' sx={{ fontSize: '32px', fontFamily: 'GraphikBold', color: '#29293d' }} >
                      Delivery Driver
                    </Typography>
                    <Link href={''} >
                      <AnchorLink sx={{ mt: 2, fontSize: '14px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#9b9b9b', cursor: 'pointer' }} >
                        Driver & Delivery
                      </AnchorLink>
                    </Link>
                    <Typography variant='h2' sx={{ fontSize: '14px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#9b9b9b', mt: 1 }} >
                      21 June 2022
                      •
                      5 views
                    </Typography>
                    <Button onClick={handleClickApply} variant='contained' sx={{ width: '100%', height: '50px', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', boxShadow: 'none', backgroundColor: '#fc413d', "&:hover": { boxShadow: 'none', backgroundColor: '#fc413d' }, mt: 6 }} >
                      Apply now
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ width: '100%', height: { md: '100%', sm: '300px', xs: '200px' }, display: "flex", justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'hidden', borderRadius: '8px' }} >
                    <Image src={'/pictures/JonDetail/cardDefault2.jpg'} layout={'fill'} objectFit='cover' />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Box sx={{ width: '100%', flexGrow: 1, my: 3 }} >
              <Grid container columnSpacing={{ md: 2 }} rowSpacing={{ md: 2, xs: 3 }}>
                {
                  Data.map((item, index) => {
                    return <>
                      <Grid key={index} item xs={5} md={4}>
                        <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '28px', fontFamily: 'GraphikRegular', color: '#000' }} >
                          {item.Title}
                        </Typography>
                      </Grid>
                      <Grid item xs={7} md={8}>
                        <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '28px', fontFamily: 'GraphikSemibold', color: '#000' }} >
                          {item.des}
                        </Typography>
                      </Grid>
                    </>
                  })
                }
              </Grid>
            </Box>

            <Box sx={{ width: '100%', display: "flex", justifyContent: 'start', alignItems: 'center', borderTop: '1px solid rgba(0,0,0,.08)', borderBottom: '1px solid rgba(0,0,0,.08)', py: 2 }} >
              <Image src={'/pictures/JonDetail/feed-job-address.svg'} width={28} height={28} objectFit='contain' />
              <Typography variant='h2' sx={{ fontSize: '18px', fontFamily: 'GraphikSemibold', color: '#000', textTransform: 'capitalize', ml: 1, mt: '4px' }} >
                ManChester, UK
              </Typography>
            </Box>

            <Typography variant='h2' sx={{ fontSize: '14px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#9b9b9b', mt: 3, alignSelf: 'start' }} >
              21 June 2022
              •
              5 views
            </Typography>

          </Box>

          {/* Right */}
          <Box sx={{ width: { md: '40%', xs: '100%' }, height: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', mt: { md: 0, xs: 3, } }} >
            <Box sx={{ border: '1px solid #e7ebee', p: 2, width: { md: '80%', xs: '100%' }, minHeight: '100px', boxShadow: 'rgba(0,0,0,.05)0px 2px 4px', borderRadius: '8px' }} >
              <Box sx={{ width: '100%', display: "flex", justifyContent: 'space-between', alignItems: 'center', }} >
                <Link href={''} >
                  <AnchorLink sx={{ mt: 2, fontSize: '20px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', cursor: 'pointer' }} >
                    Car Developer
                  </AnchorLink>
                </Link>
                <Link href={'/jobdetail/employer'} >
                  <AnchorLink sx={{ mt: 2, fontSize: '20px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#0e54ff', cursor: 'pointer' }} >
                    More info
                  </AnchorLink>
                </Link>
              </Box>
              <Typography variant='h2' sx={{ fontSize: '14px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#9b9b9b', mt: 1.5 }} >
                Job • 1-10 Employees
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '14px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#9b9b9b', mt: .6 }} >
                Hiring with us since June, 2022
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#000', my: 2 }} >
                Developer Car
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000' }} >
                Hiring by
              </Typography>
              <Box sx={{ width: '100%', mt: 1 }} >
                <Grid container columnSpacing={{ md: 0 }} rowSpacing={{ md: 0, xs: 3 }}>
                  <Grid item xs={2.5}>
                    <Box sx={{ borderRadius: '8px', overflow: 'hidden', width: '64px', display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                      <Image src={'/pictures/JonDetail/s.jpg'} width={64} height={64} objectFit='cover' />
                    </Box>
                  </Grid>
                  <Grid item xs={6.5}>
                    <Box sx={{ width: '100%', height: '100%', display: "flex", justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
                      <Typography variant='h2' sx={{ fontSize: '18px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000' }} >
                        Sahal Imran
                      </Typography>
                      <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#9b9b9b' }} >
                        Owner•Active 2 months ago
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ width: '100%', height: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', }} >
                      <Button onClick={() => handleClickChat()} variant='outlined' sx={{ width: '100%', height: '46px', border: '1px solid #0e54ff', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium' }} >
                        Chat
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>



      {/* for apply */}
      <Dialog
        open={Apply}
        sx={{ display: { md: 'none', xs: 'block' } }}
        TransitionComponent={Transition}
        fullScreen
      >
        <Box sx={{ width: { md: '650px', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflow: 'auto', borderRadius: '24px', p: 2 }} >
          {/* Cross icon */}
          <Box sx={Page1 ? { cursor: 'pointer', alignSelf: 'end', mt: `${Mtop}` } : { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} >
            {!Page1 && <ArrowBackIcon onClick={() => {
              SetPage1(true);
              SetPage2(false);
            }} sx={{ cursor: 'pointer', color: '#000', fontSize: '28px' }} />}
            <Box onClick={handleClickApply} sx={{ cursor: 'pointer' }} >
              <Image src={'/pictures/home/cross.svg'} width={24} height={24} objectFit={'objectfit'} />
            </Box>
          </Box>

          {Page1 && <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', }} >
            <Typography variant='h2' sx={{ fontSize: '38px', lineHeight: '38px', textDecoration: 'none', fontFamily: 'GraphikBold', color: '#000', mb: 1 }} >
              Create your CV
            </Typography>
            <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#6a6a78', mb: 4 }} >
              Your CV will help employers get to know you better before they start chat with you
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}` }} >
              <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '25px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', mb: 1 }} >
                Do you have any work experience?
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#fc413d', mb: 4, display: `${Display}` }} >
                All fields are required. Please check again
              </Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={Experince}
                onChange={handleChangeExperince}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes, I do" />
                <FormControlLabel value="no" control={<Radio />} label="Not yet" />
              </RadioGroup>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}`, mt: 3 }} >
              <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '25px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', mb: 1 }} >
                About me
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#6a6a78', opacity: 0.6 }} >
                What should your future employer know about you?
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#fc413d', display: `${Display}` }} >
                All fields are required. Please check again
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '000', mt: 4, mb: 1 }} >
                Tell us more about yourself
              </Typography>
              <Box sx={{ width: '100%', minHeight: '106px', }} >
                <textarea name="description" id="" style={{ maxWidth: '100%', minWidth: '100%', minHeight: '106px', width: '100%', outline: 'none', border: '1px solid #d6d6dc', padding: '9px 14px 15px', background: '#fdfdfd', borderRadius: '4px', color: '#000' }} cols="30" rows="5" placeholder="Introduce yourself to employers with a short message. Start with a catchy opening, like “I’m a friendly person who has always had a passion for coffee…”" ></textarea>
              </Box>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}`, mt: 3 }} >
              <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '25px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', mb: 1 }} >
                Languages you know
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#6a6a78', opacity: 0.6 }} >
                This could increase your chances for jobs that require specific languages
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#fc413d', display: `${Display}` }} >
                All fields are required. Please check again
              </Typography>
              {/* {
                Languages.map((lang, index) => {
                  return <Box key={index} sx={{ flexGrow: 1, width: '100%', mt: 1 }}>
                    <Grid container spacing={0}>
                      <Grid item xs={6}>
                        <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#6a6a78', opacity: 0.6 }} >
                          Language: <Box component={'span'} sx={{ fontFamily: 'GraphikRegular', }} >{lang.name}</Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#6a6a78', opacity: 0.6 }} >
                          Level: <Box component={'span'} sx={{ fontFamily: 'GraphikRegular', }} >{lang.level}</Box>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                })
              } */}
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikMedium', color: '#000', mt: 4, mb: 1 }} >
                Language
              </Typography>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                <Box sx={{ width: '50%', mr: 1 }} >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-lang"
                    value={Language}
                    onChange={handleLanguageChange}
                    onFocus={(e) => setShowPlaceholder(false)}
                    onClose={(e) =>
                      setShowPlaceholder(e.target.value === undefined)
                    }
                    sx={{
                      width: "100%",
                      height: "100%",
                      "& svg": { color: "#aeaeb9", fontSize: '18px' },
                      fontSize: '14px', fontFamily: 'GraphikRegular', color: '#aeaeb9', display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'capitalize', backgroundColor: '#FDFDFB'
                    }}
                  >
                    <MenuItem
                      sx={!showPlaceholder ? { display: "none" } : { fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '#aeaeb9', }}
                      key="0"
                      disabled
                      value="none"
                    >
                      Language
                    </MenuItem>
                    <MenuItem value={"eng"}>ENG</MenuItem>
                  </Select>
                </Box>
                <Box sx={{ width: '50%', ml: 1 }} >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-lang"
                    value={LanguageLevel}
                    onChange={handleLanguageLevelChange}
                    onFocus={(e) => setShowPlaceholderLevel(false)}
                    onClose={(e) =>
                      setShowPlaceholderLevel(e.target.value === undefined)
                    }
                    sx={{
                      width: "100%",
                      height: "100%",
                      "& svg": { color: "#aeaeb9", fontSize: '18px' },
                      fontSize: '14px', fontFamily: 'GraphikRegular', color: '#aeaeb9', display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'capitalize', backgroundColor: '#FDFDFB'
                    }}
                  >
                    <MenuItem
                      sx={!showPlaceholderLevel ? { display: "none" } : { fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '#aeaeb9', }}
                      key="0"
                      disabled
                      value="none"
                    >
                      Level
                    </MenuItem>
                    <MenuItem value={"native"}>Native</MenuItem>
                    <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                    <MenuItem value={"expert"}>Expert</MenuItem>
                  </Select>
                </Box>
              </Box>
              <Button onClick={Selected_Languages} variant='contained' sx={{ width: '100%', height: '50px', borderRadius: '4px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', boxShadow: 'none', backgroundColor: '#0e54ff', "&:hover": { boxShadow: 'none', backgroundColor: '#0e54ff' }, mt: 2 }} >
                Add language
              </Button>
              <Toaster />
            </Box>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}`, mt: 3 }} >
              <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '25px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', mb: 1 }} >
                Education or training
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#6a6a78', opacity: 0.6 }} >
                List your academic accomplishments, including any courses, certificates or degrees you have.
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#fc413d', display: `${Display}` }} >
                All fields are required. Please check again
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '000', mt: 4, mb: 1 }} >
                Education or training
              </Typography>
              <Box sx={{ width: '100%', minHeight: '106px', }} >
                <textarea name="description" id="" style={{ maxWidth: '100%', minWidth: '100%', minHeight: '106px', width: '100%', outline: 'none', border: '1px solid #d6d6dc', padding: '9px 14px 15px', background: '#fdfdfd', borderRadius: '4px', color: '#000' }} cols="30" rows="5" placeholder="Tell us about your education and/or any formal training you’ve completed. Every little bit helps." ></textarea>
              </Box>
            </Box>


            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}`, mt: 3 }} >
              <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '25px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', mb: 1 }} >
                Your phone number
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#6a6a78', opacity: 0.6 }} >
                This phone number will be seen by employers if you apply to their job or share your JOB TODAY CV with them
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#fc413d', display: `${Display}` }} >
                All fields are required. Please check again
              </Typography>
              <Box sx={{ width: '100%', mt: 4 }} >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-lang"
                  value={Country}
                  onChange={handleCountryChange}
                  onFocus={(e) => setShowPlaceholderCountry(false)}
                  onClose={(e) =>
                    setShowPlaceholderCountry(e.target.value === undefined)
                  }
                  sx={{
                    width: "100%",
                    height: "100%",
                    "& svg": { color: "#aeaeb9", fontSize: '18px' },
                    fontSize: '14px', fontFamily: 'GraphikRegular', color: '#aeaeb9', display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'capitalize', backgroundColor: '#FDFDFB'
                  }}
                >
                  <MenuItem
                    sx={!showPlaceholderCountry ? { display: "none" } : { fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '#aeaeb9', }}
                    key="0"
                    disabled
                    value="none"
                  >
                    Country
                  </MenuItem>
                  <MenuItem value={"uk"}>UK</MenuItem>
                </Select>
              </Box>
              <Box sx={{ width: '100%', height: '50px', mt: 2, overflow: 'hidden', border: '1px solid rgb(214, 214, 220)', borderRadius: '4px' }} >
                <input type="text" name="Ph" id="PH" style={{
                  width: "100%",
                  height: "100%",
                  fontSize: '14px', fontFamily: 'GraphikRegular', color: '#aeaeb9', backgroundColor: '#FDFDFB', outline: 'none', border: 'none', padding: '0px 14px'
                }} placeholder='phone no.' />
              </Box>
            </Box>

            <Button onClick={Next} variant='contained' sx={{ width: '100%', height: '50px', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', boxShadow: 'none', backgroundColor: '#0e54ff', "&:hover": { boxShadow: 'none', backgroundColor: '#0e54ff' }, mt: 2 }} >
              Next
            </Button>

            <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '19px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#000', opacity: 0.5, mt: 2, alignSelf: 'center' }} >
              Please, fill out your CV to continue
            </Typography>

          </Box>}

          {Page2 && <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mt: 2 }} >
            <Typography variant='h2' sx={{ fontSize: '38px', lineHeight: '38px', textDecoration: 'none', fontFamily: 'GraphikBold', color: '#000', mb: 1 }} >
              Please answer before you apply
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}`, mt: 3 }} >
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="3 year" control={<Radio />} label="Yes, more than 3 years" />
                  <FormControlLabel value="between 1 and 3 years" control={<Radio />} label="Yes, between 1 and 3 years" />
                  <FormControlLabel value="between 6 months and 1 year" control={<Radio />} label="Yes, between 6 months and 1 year" />
                  <FormControlLabel value="less than 6 months" control={<Radio />} label="Yes, less than 6 months" />
                  <FormControlLabel value="No, but I learn fast" control={<Radio />} label="No, but I learn fast" />
                </RadioGroup>
              </FormControl>
            </Box>


            <Button onClick={handleClickApply} variant='contained' sx={{ width: '100%', height: '50px', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', boxShadow: 'none', backgroundColor: '#0e54ff', "&:hover": { boxShadow: 'none', backgroundColor: '#0e54ff' }, mt: 3 }} >
              Apply
            </Button>

            <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '19px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#000', opacity: 0.5, mt: 2, alignSelf: 'center' }} >
              Your CV and answers will be sent to the employer
            </Typography>
          </Box>}

        </Box>
      </Dialog>


      {/* Filter Dialog for Desktop */}
      <Dialog
        open={Apply}
        sx={{ display: { md: 'block', xs: 'none', } }}
      >
        <Box sx={{ width: { md: '650px', xs: '100%' }, maxHeight: '700px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', overflow: 'auto', borderRadius: '24px', p: 4 }} >
          {/* Cross icon */}
          <Box sx={Page1 ? { cursor: 'pointer', alignSelf: 'end', mt: `${MtopDesktop}` } : { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', }} >
            {!Page1 && <ArrowBackIcon onClick={() => {
              SetPage1(true);
              SetPage2(false);
            }} sx={{ cursor: 'pointer', color: '#000', fontSize: '28px' }} />}
            <Box onClick={handleClickApply} sx={{ cursor: 'pointer' }} >
              <Image src={'/pictures/home/cross.svg'} width={24} height={24} objectFit={'objectfit'} />
            </Box>
          </Box>

          {Page1 && <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', }} >
            <Typography variant='h2' sx={{ fontSize: '38px', lineHeight: '38px', textDecoration: 'none', fontFamily: 'GraphikBold', color: '#000', mb: 1 }} >
              Create your CV
            </Typography>
            <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#6a6a78', mb: 4 }} >
              Your CV will help employers get to know you better before they start chat with you
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}` }} >
              <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '25px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', mb: 1 }} >
                Do you have any work experience?
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#fc413d', mb: 4, display: `${Display}` }} >
                All fields are required. Please check again
              </Typography>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={Experince}
                onChange={handleChangeExperince}
              >
                <FormControlLabel value="yes" control={<Radio />} label="Yes, I do" />
                <FormControlLabel value="no" control={<Radio />} label="Not yet" />
              </RadioGroup>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}`, mt: 3 }} >
              <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '25px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', mb: 1 }} >
                About me
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#6a6a78', opacity: 0.6 }} >
                What should your future employer know about you?
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#fc413d', display: `${Display}` }} >
                All fields are required. Please check again
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '000', mt: 4, mb: 1 }} >
                Tell us more about yourself
              </Typography>
              <Box sx={{ width: '100%', minHeight: '106px', }} >
                <textarea name="description" id="" style={{ maxWidth: '100%', minWidth: '100%', minHeight: '106px', width: '100%', outline: 'none', border: '1px solid #d6d6dc', padding: '9px 14px 15px', background: '#fdfdfd', borderRadius: '4px', color: '#000' }} cols="30" rows="5" placeholder="Introduce yourself to employers with a short message. Start with a catchy opening, like “I’m a friendly person who has always had a passion for coffee…”" ></textarea>
              </Box>
            </Box>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}`, mt: 3 }} >
              <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '25px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', mb: 1 }} >
                Languages you know
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#6a6a78', opacity: 0.6 }} >
                This could increase your chances for jobs that require specific languages
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#fc413d', display: `${Display}` }} >
                All fields are required. Please check again
              </Typography>
              {/* {
                Languages.map((lang, index) => {
                  return <Box key={index} sx={{ flexGrow: 1, width: '100%', mt: 1 }}>
                    <Grid container spacing={0}>
                      <Grid item xs={6}>
                        <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#6a6a78', opacity: 0.6 }} >
                          Language: <Box component={'span'} sx={{ fontFamily: 'GraphikRegular', }} >{lang.name}</Box>
                        </Typography>
                      </Grid>
                      <Grid item xs={6}>
                        <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#6a6a78', opacity: 0.6 }} >
                          Level: <Box component={'span'} sx={{ fontFamily: 'GraphikRegular', }} >{lang.level}</Box>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                })
              } */}
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '18px', fontFamily: 'GraphikMedium', color: '#000', mt: 4, mb: 1 }} >
                Language
              </Typography>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
                <Box sx={{ width: '50%', mr: 1 }} >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-lang"
                    value={Language}
                    onChange={handleLanguageChange}
                    onFocus={(e) => setShowPlaceholder(false)}
                    onClose={(e) =>
                      setShowPlaceholder(e.target.value === undefined)
                    }
                    sx={{
                      width: "100%",
                      height: "100%",
                      "& svg": { color: "#aeaeb9", fontSize: '18px' },
                      fontSize: '14px', fontFamily: 'GraphikRegular', color: '#aeaeb9', display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'capitalize', backgroundColor: '#FDFDFB'
                    }}
                  >
                    <MenuItem
                      sx={!showPlaceholder ? { display: "none" } : { fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '#aeaeb9', }}
                      key="0"
                      disabled
                      value="none"
                    >
                      Language
                    </MenuItem>
                    <MenuItem value={"eng"}>ENG</MenuItem>
                  </Select>
                </Box>
                <Box sx={{ width: '50%', ml: 1 }} >
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select-lang"
                    value={LanguageLevel}
                    onChange={handleLanguageLevelChange}
                    onFocus={(e) => setShowPlaceholderLevel(false)}
                    onClose={(e) =>
                      setShowPlaceholderLevel(e.target.value === undefined)
                    }
                    sx={{
                      width: "100%",
                      height: "100%",
                      "& svg": { color: "#aeaeb9", fontSize: '18px' },
                      fontSize: '14px', fontFamily: 'GraphikRegular', color: '#aeaeb9', display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'capitalize', backgroundColor: '#FDFDFB'
                    }}
                  >
                    <MenuItem
                      sx={!showPlaceholderLevel ? { display: "none" } : { fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '#aeaeb9', }}
                      key="0"
                      disabled
                      value="none"
                    >
                      Level
                    </MenuItem>
                    <MenuItem value={"native"}>Native</MenuItem>
                    <MenuItem value={"intermediate"}>Intermediate</MenuItem>
                    <MenuItem value={"expert"}>Expert</MenuItem>
                  </Select>
                </Box>
              </Box>
              <Button onClick={Selected_Languages} variant='contained' sx={{ width: '100%', height: '50px', borderRadius: '4px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', boxShadow: 'none', backgroundColor: '#0e54ff', "&:hover": { boxShadow: 'none', backgroundColor: '#0e54ff' }, mt: 2 }} >
                Add language
              </Button>
              <Toaster />
            </Box>

            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}`, mt: 3 }} >
              <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '25px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', mb: 1 }} >
                Education or training
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#6a6a78', opacity: 0.6 }} >
                List your academic accomplishments, including any courses, certificates or degrees you have.
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#fc413d', display: `${Display}` }} >
                All fields are required. Please check again
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '000', mt: 4, mb: 1 }} >
                Education or training
              </Typography>
              <Box sx={{ width: '100%', minHeight: '106px', }} >
                <textarea name="description" id="" style={{ maxWidth: '100%', minWidth: '100%', minHeight: '106px', width: '100%', outline: 'none', border: '1px solid #d6d6dc', padding: '9px 14px 15px', background: '#fdfdfd', borderRadius: '4px', color: '#000' }} cols="30" rows="5" placeholder="Tell us about your education and/or any formal training you’ve completed. Every little bit helps." ></textarea>
              </Box>
            </Box>


            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}`, mt: 3 }} >
              <Typography variant='h2' sx={{ fontSize: '24px', lineHeight: '25px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: '#000', mb: 1 }} >
                Your phone number
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#6a6a78', opacity: 0.6 }} >
                This phone number will be seen by employers if you apply to their job or share your JOB TODAY CV with them
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '22px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#fc413d', display: `${Display}` }} >
                All fields are required. Please check again
              </Typography>
              <Box sx={{ width: '100%', mt: 4 }} >
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-lang"
                  value={Country}
                  onChange={handleCountryChange}
                  onFocus={(e) => setShowPlaceholderCountry(false)}
                  onClose={(e) =>
                    setShowPlaceholderCountry(e.target.value === undefined)
                  }
                  sx={{
                    width: "100%",
                    height: "100%",
                    "& svg": { color: "#aeaeb9", fontSize: '18px' },
                    fontSize: '14px', fontFamily: 'GraphikRegular', color: '#aeaeb9', display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'capitalize', backgroundColor: '#FDFDFB'
                  }}
                >
                  <MenuItem
                    sx={!showPlaceholderCountry ? { display: "none" } : { fontSize: '16px', lineHeight: '18px', textDecoration: 'none', fontFamily: 'GraphikMedium', color: '#aeaeb9', }}
                    key="0"
                    disabled
                    value="none"
                  >
                    Country
                  </MenuItem>
                  <MenuItem value={"uk"}>UK</MenuItem>
                </Select>
              </Box>
              <Box sx={{ width: '100%', height: '50px', mt: 2, overflow: 'hidden', border: '1px solid rgb(214, 214, 220)', borderRadius: '4px' }} >
                <input type="text" name="Ph" id="PH" style={{
                  width: "100%",
                  height: "100%",
                  fontSize: '14px', fontFamily: 'GraphikRegular', color: '#aeaeb9', backgroundColor: '#FDFDFB', outline: 'none', border: 'none', padding: '0px 14px'
                }} placeholder='phone no.' />
              </Box>
            </Box>

            <Button onClick={Next} variant='contained' sx={{ width: '100%', height: '50px', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', boxShadow: 'none', backgroundColor: '#0e54ff', "&:hover": { boxShadow: 'none', backgroundColor: '#0e54ff' }, mt: 2 }} >
              Next
            </Button>

            <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '19px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#000', opacity: 0.5, mt: 2, alignSelf: 'center' }} >
              Please, fill out your CV to continue
            </Typography>

          </Box>}

          {Page2 && <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', mt: 2 }} >
            <Typography variant='h2' sx={{ fontSize: '38px', lineHeight: '38px', textDecoration: 'none', fontFamily: 'GraphikBold', color: '#000', mb: 1 }} >
              Please answer before you apply
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column', backgroundColor: '#f4f5f6', px: 3, py: 2, borderRadius: '8px', border: `${Border}`, mt: 3 }} >
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="3 year" control={<Radio />} label="Yes, more than 3 years" />
                  <FormControlLabel value="between 1 and 3 years" control={<Radio />} label="Yes, between 1 and 3 years" />
                  <FormControlLabel value="between 6 months and 1 year" control={<Radio />} label="Yes, between 6 months and 1 year" />
                  <FormControlLabel value="less than 6 months" control={<Radio />} label="Yes, less than 6 months" />
                  <FormControlLabel value="No, but I learn fast" control={<Radio />} label="No, but I learn fast" />
                </RadioGroup>
              </FormControl>
            </Box>


            <Button onClick={handleClickApply} variant='contained' sx={{ width: '100%', height: '50px', borderRadius: '8px', textTransform: 'capitalize', fontSize: '16px', lineHeight: '24px', fontFamily: 'GraphikMedium', boxShadow: 'none', backgroundColor: '#0e54ff', "&:hover": { boxShadow: 'none', backgroundColor: '#0e54ff' }, mt: 3 }} >
              Apply
            </Button>

            <Typography variant='h2' sx={{ fontSize: '16px', lineHeight: '19px', textDecoration: 'none', fontFamily: 'GraphikRegular', color: '#000', opacity: 0.5, mt: 2, alignSelf: 'center' }} >
              Your CV and answers will be sent to the employer
            </Typography>
          </Box>}

        </Box>
      </Dialog>




      {/* For Chat */}
      <Dialog
        open={Chat}
        sx={{
          display: {
            md: 'block',
            xs: 'none'
          }
        }}
      >
        <Box sx={{ width: { lg: '1080px', xs: '90%' }, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '32px', p: 5 }} >
          {/* ++++++++++ */}
          {/* Cross icon */}
          {/* +++++++++++*/}
          <Box onClick={() => setChat(false)} sx={{ alignSelf: 'end', cursor: 'pointer' }} >
            <Image src={'/pictures/home/cross.svg'} width={30} height={30} objectFit={'objectfit'} />
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
            <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'start', flexDirection: 'column' }} >
              <Typography variant='h2' sx={{ fontSize: '42px', lineHeight: '48px', fontFamily: 'GraphikSemibold', letterSpacing: '.5px', color: '#000' }} >
                Download the app
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikRegular', color: '#000', mt: 2 }} >
                Scan the QR code to download the app to <Box component={'span'} sx={{ fontFamily: 'GraphikSemibold', }} >chat with employers</Box>, apply to jobs in one click, create your CV and follow companies you are interested in.
              </Typography>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }} >
                <Image src={QR} width={200} height={200} objectFit={'cover'} />
              </Box>
              <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#93939a', alignSelf: 'center', mt: 2 }} >
                Or download the app from the app stores:
              </Typography>
              <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                <AnchorLink href='' >
                  <Image src={'/pictures/home/white-playstore.jpg'} width={127} height={56} objectFit={'contain'} alt={'icon'} />
                </AnchorLink>
                <AnchorLink href='' sx={{ ml: 2 }} >
                  <Image src={'/pictures/home/white-appstore.jpg'} width={142} height={56} objectFit={'contain'} alt={'icon'} />
                </AnchorLink>
              </Box>
            </Box>
            <Box sx={{ width: '50%', height: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} >
              <Image src={'/pictures/JonDetail/mobileApp.png'} layout="fill" objectFit={'contain'} alt={'icon'} />
            </Box>
          </Box>
        </Box>
      </Dialog>

      <Dialog
        open={Chat}
        sx={{
          display: {
            md: 'none',
            xs: 'block'
          }
        }}
        TransitionComponent={Transition}
        fullScreen
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '32px', p: { md: 5, xs: 3 } }} >
          {/* ++++++++++ */}
          {/* Cross icon */}
          {/* +++++++++++*/}
          <Box onClick={() => setChat(false)} sx={{ alignSelf: 'end', cursor: 'pointer' }} >
            <Image src={'/pictures/home/cross.svg'} width={30} height={30} objectFit={'objectfit'} />
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { md: 'row', xs: 'column-reverse' } }} >
            <Box sx={{ width: { md: '50%', xs: '100%' }, display: 'flex', justifyContent: 'center', alignItems: { md: 'start', xs: 'center' }, flexDirection: 'column', mt: { md: 0, xs: 4 } }} >
              <Typography variant='h2' sx={{ fontSize: '42px', lineHeight: '48px', fontFamily: 'GraphikSemibold', letterSpacing: '.5px', color: '#000', textAlign: { md: 'start', xs: 'center' } }} >
                Download the app
              </Typography>
              <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '24px', fontFamily: 'GraphikRegular', color: '#000', mt: 2, textAlign: { md: 'start', xs: 'center' } }} >
                Scan the QR code to download the app to <Box component={'span'} sx={{ fontFamily: 'GraphikSemibold', }} >chat with employers</Box>, apply to jobs in one click, create your CV and follow companies you are interested in.
              </Typography>
              <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }} >
                <Image src={QR} width={200} height={200} objectFit={'cover'} />
              </Box>
              <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '22px', fontFamily: 'GraphikRegular', color: '#93939a', alignSelf: 'center', mt: 2 }} >
                Or download the app from the app stores:
              </Typography>
              <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', mt: 2 }} >
                <AnchorLink href='' >
                  <Image src={'/pictures/home/white-playstore.jpg'} width={127} height={56} objectFit={'contain'} alt={'icon'} />
                </AnchorLink>
                <AnchorLink href='' sx={{ ml: 2 }} >
                  <Image src={'/pictures/home/white-appstore.jpg'} width={142} height={56} objectFit={'contain'} alt={'icon'} />
                </AnchorLink>
              </Box>
            </Box>
            <Box sx={{ width: { md: '50%', xs: '100%' }, height: '450px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }} >
              <Image src={'/pictures/JonDetail/mobileApp.png'} layout="fill" objectFit={'contain'} alt={'icon'} />
            </Box>
          </Box>
        </Box>
      </Dialog>

      <Toaster />
    </>
  )
}

export default ExplainedDetail;


const Data = [
  {
    Title: 'Experience',
    des: 'Required'
  },
  {
    Title: 'Languages',
    des: 'English – Intermediate'
  },
  {
    Title: 'Employment',
    des: 'Full-time'
  },
  {
    Title: 'Schedule',
    des: '08am to 10pm'
  },
  {
    Title: 'Salary',
    des: '$500 – $550 monthly'
  },
  {
    Title: 'Starting time',
    des: 'Immediate start!'
  },
]