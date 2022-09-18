import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import AnchorLink from "@mui/material/Link";
import Image from 'next/image';
import { useRouter } from 'next/router';



function Auth() {

    const router = useRouter();

    const [First_name, Set_First_name] = useState('')
    const [Last_name, Set_Last_name] = useState('')
    const [Email, Set_Email] = useState('')
    const [Password, Set_Password] = useState('')


    const [Swicth_Auth, Set_Swicth_Auth] = useState(true) // False => Login && True => Register

    const [Is_Auth_Button_Enabled, Set_Is_Auth_Button_Enabled] = useState(false);

    const Auth_Button_Enabled = () => {
        // Login
        if (!Swicth_Auth) {
            if (Email.length !== 0 && Password.length !== 0) {
                Set_Is_Auth_Button_Enabled(true);
            }
            else {
                Set_Is_Auth_Button_Enabled(false);
            }
        }
        else {
            if (First_name.length !== 0 && Last_name.length !== 0 && Email.length !== 0 && Password.length !== 0) {
                Set_Is_Auth_Button_Enabled(true);
            }
            else {
                Set_Is_Auth_Button_Enabled(false);
            }
        }
    }



    return (
        <>
            <Box sx={{
                width: '100%', minHeight: { md: "100vh" }, display: "flex", justifyContent: 'center', alignItems: 'center',
                flexDirection: 'column', background: '#eef4fc', p: 2,
            }} >
                <Box sx={{
                    display: "flex", justifyContent: 'center', alignItems: 'center',
                    flexDirection: 'column', width: { md: '488px', xs: '100%' }
                }} >
                    <Link href={'/country'} >
                        <AnchorLink sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} >
                            <Image src={'/pictures/home/logo.svg'} width={50} height={50} objectFit={'cover'} alt={'logo'} />
                        </AnchorLink>
                    </Link>
                    <Typography variant='h2' sx={{ fontSize: '30px', lineHeight: '34px', letterSpacing: '.5px', fontFamily: 'GraphikBold', color: '#29293d', textAlign: 'center', my: 3 }} >
                        {Swicth_Auth ? "Register with JOB TODAY" : "Log in to JOB TODAY"}
                    </Typography>
                    <Box sx={{
                        width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center',
                        flexDirection: 'column', borderRadius: '24px', boxShadow: "0 10px 20px 0 rgb(48 40 67 / 20%)", background: '#fff'
                    }} >
                        <Box sx={{ width: '100%', display: "flex", justifyContent: 'start', alignItems: 'center', maxWidth: '100%', overflow: 'auto', borderBottom: '1px solid rgba(0,0,0,0.1)', px: 2, overflow: 'hidden' }}>
                            <Link href={{
                                pathname: '/auth',
                                query: {
                                    Type: "Hiring"
                                }
                            }} >
                                <AnchorLink sx={router.query.Type === "Hiring" ? { mr: 2, fontSize: '15px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#000`, cursor: 'pointer', transition: 'all 0.3s ease', whiteSpace: 'nowrap', py: 3, borderBottom: `2px solid #000`, textTransform: 'unset', borderRadius: 'unset' } : { mr: 2, fontSize: '15px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#6a6a78`, cursor: 'pointer', transition: 'all 0.3s ease', whiteSpace: 'nowrap', py: 3, borderBottom: `2px solid transparent`, textTransform: 'unset', borderRadius: 'unset' }} >
                                    I'm hiring staff
                                </AnchorLink>
                            </Link>
                            <Link href={{
                                pathname: '/auth',
                                query: {
                                    Type: "JOB_Search"
                                }
                            }} >
                                <AnchorLink sx={router.query.Type === "JOB_Search" ? { fontSize: '15px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#000`, cursor: 'pointer', transition: 'all 0.3s ease', whiteSpace: 'nowrap', py: 3, borderBottom: `2px solid #000`, textTransform: 'unset', borderRadius: 'unset' } : { fontSize: '15px', textDecoration: 'none', fontFamily: 'GraphikSemibold', color: `#6a6a78`, cursor: 'pointer', transition: 'all 0.3s ease', whiteSpace: 'nowrap', py: 3, borderBottom: `2px solid transparent`, textTransform: 'unset', borderRadius: 'unset' }} >
                                    I'm looking for a job
                                </AnchorLink>
                            </Link>
                        </Box>

                        {/* I'm hiring staff */}
                        {
                            router.query.Type === "Hiring" &&
                            <Box sx={{
                                width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center',
                                flexDirection: 'column', px: { md: 6, xs: 2 }, py: 4
                            }} >
                                <Button variant='outlined' sx={{ fontSize: '17px', lineHeight: '20px', fontFamily: 'GraphikMedium', color: '#0e54ff', border: '1px solid #0e54ff', width: '100%', height: '52px', display: "flex", justifyContent: 'space-between', alignItems: 'center', borderRadius: '8px', textTransform: 'unset', px: 3 }} >
                                    <Image src={'/pictures/Auth/google-login.svg'} width={24} height={24} objectFit={'cover'} alt={'google'} />
                                    <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '20px', fontFamily: 'GraphikMedium', color: '#0e54ff', textTransform: 'unset' }} >
                                        Continue with Google
                                    </Typography>
                                </Button>
                                <Button variant='outlined' sx={{ fontSize: '17px', lineHeight: '20px', fontFamily: 'GraphikMedium', color: '#0e54ff', border: '1px solid #0e54ff', width: '100%', height: '52px', display: "flex", justifyContent: 'space-between', alignItems: 'center', borderRadius: '8px', textTransform: 'unset', px: 3, mt: 2, mb: 4 }} >
                                    <Image src={'/pictures/Auth/facebook-login.svg'} width={24} height={24} objectFit={'cover'} alt={'google'} />
                                    <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '20px', fontFamily: 'GraphikMedium', color: '#0e54ff', textTransform: 'unset' }} >
                                        Continue with Facebook
                                    </Typography>
                                </Button>
                                <Box sx={{ width: '100%', height: '1px', background: '#d6d6dc', }} ></Box>
                                <Typography variant='h2' sx={{ fontSize: '15px', lineHeight: '20px', fontFamily: 'GraphikMedium', color: '#93939a', textTransform: 'unset', letterSpacing: '.15625px', mt: "-10px", background: 'white', px: 1 }} >
                                    or with email
                                </Typography>

                                {
                                    Swicth_Auth &&
                                    <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', mt: 3 }} >
                                        <Box sx={{ width: '50%', mr: 1 }} >
                                            <input value={First_name} onChange={(e) => { Set_First_name(e.target.value); Auth_Button_Enabled() }} autoComplete='off' autoCorrect='off' className='AuthInput' type="text" style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'GraphikRegular', color: '#000', backgroundColor: '#fdfdfd', borderRadius: '8px', border: '1px solid #d6d6dc', padding: '13px 16px', width: '100%', outlineColor: '#0e54ff', }} placeholder='First name' />
                                        </Box>
                                        <Box sx={{ width: '50%', ml: 1 }} >
                                            <input value={Last_name} onChange={(e) => { Set_Last_name(e.target.value); Auth_Button_Enabled() }} autoComplete='off' autoCorrect='off' className='AuthInput' type="password" style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'GraphikRegular', color: '#000', backgroundColor: '#fdfdfd', borderRadius: '8px', border: '1px solid #d6d6dc', padding: '13px 16px', width: '100%', outlineColor: '#0e54ff' }} placeholder='Last name' />
                                        </Box>
                                    </Box>
                                }

                                <Box sx={{ width: '100%', mt: 2 }} >
                                    <input value={Email} onChange={(e) => {
                                        Set_Email(e.target.value);
                                        Auth_Button_Enabled();
                                    }} autoComplete='off' autoCorrect='off' className='AuthInput' type="text" style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'GraphikRegular', color: '#000', backgroundColor: '#fdfdfd', borderRadius: '8px', border: '1px solid #d6d6dc', padding: '13px 16px', width: '100%', outlineColor: '#0e54ff', }} placeholder='E-mail' />
                                </Box>

                                <Box sx={{ width: '100%', mt: 2, mb: 4 }} >
                                    <input value={Password} onChange={(e) => {
                                        Set_Password(e.target.value);
                                        Auth_Button_Enabled();
                                    }} autoComplete='off' autoCorrect='off' className='AuthInput' type="password" style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'GraphikRegular', color: '#000', backgroundColor: '#fdfdfd', borderRadius: '8px', border: '1px solid #d6d6dc', padding: '13px 16px', width: '100%', outlineColor: '#0e54ff' }} placeholder='Password' />
                                </Box>

                                {
                                    Swicth_Auth &&
                                    <Link href={''} >
                                        <AnchorLink sx={{ fontSize: '15px', fontFamily: 'GraphikRegular', color: '#93939a', textDecoration: 'none', cursor: 'pointer' }} >
                                            Forgot your password?
                                        </AnchorLink>
                                    </Link>
                                }

                                <Button variant='contained' disabled={Is_Auth_Button_Enabled ? false : true} sx={{ fontSize: '17px', lineHeight: '20px', fontFamily: 'GraphikSemibold', color: '#fff', background: '#0e54ff', width: '100%', height: '52px', borderRadius: '8px', textTransform: 'unset', my: 2, "&:hover": { background: '#0e54ff' } }} >
                                    {Swicth_Auth ? "Create an account" : "Log in with your Email"}
                                </Button>

                                {
                                    !Swicth_Auth &&
                                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                                        <Typography variant='h2' sx={{ fontSize: '15px', lineHeight: '20px', fontFamily: 'GraphikRegular', color: '#93939a', textTransform: 'unset', letterSpacing: '.15625px', display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                                            Don’t have an account?
                                            <Button onClick={() => Set_Swicth_Auth(true)} variant='text' sx={{ fontSize: '15px', lineHeight: '20px', fontFamily: 'GraphikRegular', color: '#0e54ff', textTransform: 'capitalize', "&:hover": { background: 'transparent' } }} >
                                                Register
                                            </Button>
                                        </Typography>
                                    </Box>
                                }

                                {
                                    Swicth_Auth &&
                                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                                        <Typography variant='h2' sx={{ fontSize: '15px', lineHeight: '20px', fontFamily: 'GraphikRegular', color: '#93939a', textTransform: 'unset', letterSpacing: '.15625px', display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                                            Already registered?
                                            <Button onClick={() => Set_Swicth_Auth(false)} variant='text' sx={{ fontSize: '15px', lineHeight: '20px', fontFamily: 'GraphikRegular', color: '#0e54ff', textTransform: 'capitalize', "&:hover": { background: 'transparent' } }} >
                                                Log in
                                            </Button>
                                        </Typography>
                                    </Box>
                                }


                                <Typography variant='h2' sx={{ fontSize: '11px', lineHeight: '16px', fontFamily: 'GraphikRegular', color: '#93939a', textTransform: 'unset', letterSpacing: '.15625px', mt: 4 }} >
                                    By continuing, you agree to our
                                    <Link href={''} >
                                        <AnchorLink sx={{ fontSize: '11px', fontFamily: 'GraphikBold', color: '#93939a', textDecoration: 'none', cursor: 'pointer' }} >
                                            {" " + " Terms of Service " + " "}
                                        </AnchorLink>
                                    </Link>
                                    and
                                    <Link href={''} >
                                        <AnchorLink sx={{ fontSize: '11px', fontFamily: 'GraphikBold', color: '#93939a', textDecoration: 'none', cursor: 'pointer' }} >
                                            {" " + "Privacy Policy"}
                                        </AnchorLink>
                                    </Link>
                                </Typography>

                            </Box>
                        }

                        {/* Looking_For_A_Job */}
                        {
                            router.query.Type === "JOB_Search" &&
                            <Box sx={{
                                width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center',
                                flexDirection: 'column', px: { md: 6, xs: 2 }, py: 4
                            }} >
                                <Button variant='outlined' sx={{ fontSize: '17px', lineHeight: '20px', fontFamily: 'GraphikMedium', color: '#0e54ff', border: '1px solid #0e54ff', width: '100%', height: '52px', display: "flex", justifyContent: 'space-between', alignItems: 'center', borderRadius: '8px', textTransform: 'unset', px: 3 }} >
                                    <Image src={'/pictures/Auth/google-login.svg'} width={24} height={24} objectFit={'cover'} alt={'google'} />
                                    <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '20px', fontFamily: 'GraphikMedium', color: '#0e54ff', textTransform: 'unset' }} >
                                        Continue with Google
                                    </Typography>
                                </Button>
                                <Button variant='outlined' sx={{ fontSize: '17px', lineHeight: '20px', fontFamily: 'GraphikMedium', color: '#0e54ff', border: '1px solid #0e54ff', width: '100%', height: '52px', display: "flex", justifyContent: 'space-between', alignItems: 'center', borderRadius: '8px', textTransform: 'unset', px: 3, mt: 2, mb: 4 }} >
                                    <Image src={'/pictures/Auth/facebook-login.svg'} width={24} height={24} objectFit={'cover'} alt={'google'} />
                                    <Typography variant='h2' sx={{ fontSize: '17px', lineHeight: '20px', fontFamily: 'GraphikMedium', color: '#0e54ff', textTransform: 'unset' }} >
                                        Continue with Facebook
                                    </Typography>
                                </Button>
                                <Box sx={{ width: '100%', height: '1px', background: '#d6d6dc', }} ></Box>
                                <Typography variant='h2' sx={{ fontSize: '15px', lineHeight: '20px', fontFamily: 'GraphikMedium', color: '#93939a', textTransform: 'unset', letterSpacing: '.15625px', mt: "-10px", background: 'white', px: 1 }} >
                                    or with email
                                </Typography>

                                {
                                    Swicth_Auth &&
                                    <Box sx={{ width: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', mt: 3 }} >
                                        <Box sx={{ width: '50%', mr: 1 }} >
                                            <input value={First_name} onChange={(e) => { Set_First_name(e.target.value); Auth_Button_Enabled() }} autoComplete='off' autoCorrect='off' className='AuthInput' type="text" style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'GraphikRegular', color: '#000', backgroundColor: '#fdfdfd', borderRadius: '8px', border: '1px solid #d6d6dc', padding: '13px 16px', width: '100%', outlineColor: '#0e54ff', }} placeholder='First name' />
                                        </Box>
                                        <Box sx={{ width: '50%', ml: 1 }} >
                                            <input value={Last_name} onChange={(e) => { Set_Last_name(e.target.value); Auth_Button_Enabled() }} autoComplete='off' autoCorrect='off' className='AuthInput' type="password" style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'GraphikRegular', color: '#000', backgroundColor: '#fdfdfd', borderRadius: '8px', border: '1px solid #d6d6dc', padding: '13px 16px', width: '100%', outlineColor: '#0e54ff' }} placeholder='Last name' />
                                        </Box>
                                    </Box>
                                }

                                <Box sx={{ width: '100%', mt: 2 }} >
                                    <input value={Email} onChange={(e) => {
                                        Set_Email(e.target.value);
                                        Auth_Button_Enabled();
                                    }} autoComplete='off' autoCorrect='off' className='AuthInput' type="text" style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'GraphikRegular', color: '#000', backgroundColor: '#fdfdfd', borderRadius: '8px', border: '1px solid #d6d6dc', padding: '13px 16px', width: '100%', outlineColor: '#0e54ff', }} placeholder='E-mail' />
                                </Box>

                                <Box sx={{ width: '100%', mt: 2, mb: 4 }} >
                                    <input value={Password} onChange={(e) => {
                                        Set_Password(e.target.value);
                                        Auth_Button_Enabled();
                                    }} autoComplete='off' autoCorrect='off' className='AuthInput' type="password" style={{ fontSize: '16px', lineHeight: '26px', fontFamily: 'GraphikRegular', color: '#000', backgroundColor: '#fdfdfd', borderRadius: '8px', border: '1px solid #d6d6dc', padding: '13px 16px', width: '100%', outlineColor: '#0e54ff' }} placeholder='Password' />
                                </Box>

                                {
                                    Swicth_Auth &&
                                    <Link href={''} >
                                        <AnchorLink sx={{ fontSize: '15px', fontFamily: 'GraphikRegular', color: '#93939a', textDecoration: 'none', cursor: 'pointer' }} >
                                            Forgot your password?
                                        </AnchorLink>
                                    </Link>
                                }

                                <Button variant='contained' disabled={Is_Auth_Button_Enabled ? false : true} sx={{ fontSize: '17px', lineHeight: '20px', fontFamily: 'GraphikSemibold', color: '#fff', background: '#0e54ff', width: '100%', height: '52px', borderRadius: '8px', textTransform: 'unset', my: 2, "&:hover": { background: '#0e54ff' } }} >
                                    {Swicth_Auth ? "Create an account" : "Log in with your Email"}
                                </Button>

                                {
                                    !Swicth_Auth &&
                                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                                        <Typography variant='h2' sx={{ fontSize: '15px', lineHeight: '20px', fontFamily: 'GraphikRegular', color: '#93939a', textTransform: 'unset', letterSpacing: '.15625px', display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                                            Don’t have an account?
                                            <Button onClick={() => Set_Swicth_Auth(true)} variant='text' sx={{ fontSize: '15px', lineHeight: '20px', fontFamily: 'GraphikRegular', color: '#0e54ff', textTransform: 'capitalize', "&:hover": { background: 'transparent' } }} >
                                                Register
                                            </Button>
                                        </Typography>
                                    </Box>
                                }

                                {
                                    Swicth_Auth &&
                                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                                        <Typography variant='h2' sx={{ fontSize: '15px', lineHeight: '20px', fontFamily: 'GraphikRegular', color: '#93939a', textTransform: 'unset', letterSpacing: '.15625px', display: "flex", justifyContent: 'center', alignItems: 'center' }} >
                                            Already registered?
                                            <Button onClick={() => Set_Swicth_Auth(false)} variant='text' sx={{ fontSize: '15px', lineHeight: '20px', fontFamily: 'GraphikRegular', color: '#0e54ff', textTransform: 'capitalize', "&:hover": { background: 'transparent' } }} >
                                                Log in
                                            </Button>
                                        </Typography>
                                    </Box>
                                }


                                <Typography variant='h2' sx={{ fontSize: '11px', lineHeight: '16px', fontFamily: 'GraphikRegular', color: '#93939a', textTransform: 'unset', letterSpacing: '.15625px', mt: 4 }} >
                                    By continuing, you agree to our
                                    <Link href={''} >
                                        <AnchorLink sx={{ fontSize: '11px', fontFamily: 'GraphikBold', color: '#93939a', textDecoration: 'none', cursor: 'pointer' }} >
                                            {" " + " Terms of Service " + " "}
                                        </AnchorLink>
                                    </Link>
                                    and
                                    <Link href={''} >
                                        <AnchorLink sx={{ fontSize: '11px', fontFamily: 'GraphikBold', color: '#93939a', textDecoration: 'none', cursor: 'pointer' }} >
                                            {" " + "Privacy Policy"}
                                        </AnchorLink>
                                    </Link>
                                </Typography>

                            </Box>
                        }

                    </Box>

                    <Box sx={{ display: "flex", justifyContent: 'center', alignItems: 'center', mt: 5 }} >
                        <Typography variant='h2' sx={{ fontSize: '13px', lineHeight: '20px', fontFamily: 'GraphikRegular', color: '#93939a', textTransform: 'unset', letterSpacing: '.15625px' }} >
                            Have a question?
                            <Link href={''} >
                                <AnchorLink sx={{ fontSize: '13px', lineHeight: '20px', fontFamily: 'GraphikRegular', color: '#0e54ff', textDecoration: 'none', cursor: 'pointer' }} >
                                    {" " + "support@jobtoday.com"}
                                </AnchorLink>
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Auth