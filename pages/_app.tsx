import { ChakraProvider} from '@chakra-ui/react'
import '../public/css/nprogress.css';
import '../public/css/global.css';
import '../public/js/main';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import Router from 'next/router';
import Head from 'next/head';

import Header from '../components/Static/Header';
import Footer from '../components/Static/Footer';
import Hero from '../components/Static/About/Hero.jsx';
import Text from '../components/Static/About/Text.jsx';
import Content from '../components/Static/Contents/Content.jsx';
import CookieConsent from 'react-cookie-consent';

import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';



Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head children={
                <>
                    <title>Arika | Anasayfa</title>
                    <link rel="icon" href="https://i.hizliresim.com/7x1004u.png" type="image/x-icon" />
                    <link href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css" rel="stylesheet" />
                </>
            } />
            <main className="min-h-[100vh] max-w-screen-lg p-5 w-full md:py-10 md:w-10/12 lg:py-20 lg:w-8/12 mx-auto transition-all duration-300">
                <Header />
                <Component {...pageProps} />
                <Footer />
                <CookieConsent debug={true} location="bottom" style={{background: '#000000', textAlign:'center'}} buttonStyle={{color:'#000000', background:'#00FF99'}} buttonText="Kabul Ediyorum" expires={15} acceptOnScroll={true} acceptOnScrollPercentage={90} overlay>Bu site çerezleri kullanır. Daha fazlasını öğrenmek için hizmet politikamıza göz at.<a href="/privacy"> Tıklayın.</a></CookieConsent>
            </main>
        </>
    );
};