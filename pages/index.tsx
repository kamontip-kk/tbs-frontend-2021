import React from 'react';
// import dynamic from 'next/dynamic';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { seo } from '../components/seo/home';
import { useRouter } from 'next/router'
import th from '../public/locales/th/Home.json'
import en from '../public/locales/en/Home.json'

import Layout from '../components/Layout';
import HeroSection from '../components/home/HeroSection.client'
import PartnerSection from '../components/home/PartnerSection.client'
import FeatureSection from '../components/home/FeatureSection.client'
import SimpleSliderSection from '../components/home/SimpleSliderSection'
import GlobeSection from '../components/home/GlobeSection.client'
import SmsSection from '../components/home/SmsSection.client'
import SuccessSection from '../components/home/SuccessSection.client'
import ServiceSection from '../components/home/ServiceSection.client'
import TestimonialSection from '../components/home/TestimonialSection.client'
import EduSection from '../components/home/EduSection.client'
import CtaSection from '../components/home/CtaSection.client'
import BacktoTop from '../components/BacktoTop.client'

// const Layout = dynamic(() => import('../components/Layout'))
// const HeroSection = dynamic(() => import('../components/home/HeroSection.client'))
// const PartnerSection = dynamic(() => import('../components/home/PartnerSection.client'))
// const FeatureSection = dynamic(() => import('../components/home/FeatureSection.client'))
// const SimpleSliderSection = dynamic(() => import('../components/home/SimpleSliderSection'))
// const GlobeSection = dynamic(() => import('../components/home/GlobeSection.client'))
// const SmsSection = dynamic(() => import('../components/home/SmsSection.client'))
// const SuccessSection = dynamic(() => import('../components/home/SuccessSection.client'))
// const ServiceSection = dynamic(() => import('../components/home/ServiceSection.client'))
// const TestimonialSection = dynamic(() => import('../components/home/TestimonialSection.client'))
// const EduSection = dynamic(() => import('../components/home/EduSection.client'))
// const CtaSection = dynamic(() => import('../components/home/CtaSection.client'))
// const BacktoTop = dynamic(() => import('../components/BacktoTop.client'))

const Homepage = () => {
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'th' ? th : en;

    return (
        <React.Fragment>
        <Layout>
            <Head>
                <meta name="keywords" content={t.meta.keywords} />
                <meta name="author" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                {/* <link rel="canonical" href="https://www.thaibulksms.com/" /> */}
                <meta name="twitter:title" content={seo.openGraph.title} />
                <meta
                    name="twitter:description"
                    content={seo.openGraph.description}
                />
                <meta
                    name="twitter:image:src"
                    content={seo.openGraph.images[0].url}
                />
            </Head>
            <NextSeo
                openGraph={seo.openGraph}
                title={t.meta.title}
                description={t.meta.description}
                twitter={{
                    site: seo.openGraph.site_name,
                    cardType: seo.openGraph.type,
                }}
            />
            {/* <Proloader /> */}
            <div className="page_wrapper">
                <HeroSection />
                <PartnerSection />
                <FeatureSection />
                <SmsSection />
                <SuccessSection />
                <ServiceSection />
                <SimpleSliderSection />
                <GlobeSection />
                <TestimonialSection />
                <EduSection />
                <CtaSection />
            </div>
            <BacktoTop />
        </Layout>
    </React.Fragment>
    )
    
}
// Homepage.getInitialProps = async () => ({
//   namespacesRequired: ['HomeMeta'],
// });

// export const getStaticProps = async () => {
//     return {
//         props: {
//             namespacesRequired: ['Home'],
//         },
//     };
// };

export default Homepage;
