import React from 'react'

import InnerBanner from '@/app/_components/InnerBanner';
import ParaImage from '@/app/_components/ParaImage';
import CalltoAction from '@/app/_components/CalltoAction';

const Whynuchainnew = () => {

    const first = (
        <>
            <h3>Boundless Opportunities <span>Unprecedented Speed</span></h3>
            <p>We&apos;ve engineered literally the fastest Blockchain technology capable of processing an impressive 200,000 transactions per second, eliminating bottlenecks. This exceptional speed unleashes vast opportunities for governments, enterprises, and startups, empowering them to redefine their industry with distributed ledger technology  solutions. This product is built for mass adoption with a vision to unleash the full potential of Blockchain.</p>
            <a target="_blank" href="https://nuchain.gitbook.io/" className='d-flex align-items-center gap-3 link-box'>
                Know More
            </a>
        </>
    );
    const second = (
        <>
            <h3>What sets us apart:</h3>
            <p><span>Lightning Speed:</span><br /> Transactions up to 200,000 per second.</p>
            <p><span>Limitless Scalability:</span><br /> Supported by our consensus mechanism.</p>
            <p><span>Create Customized Blockchains:</span><br /> Tailored to suit your unique needs effortlessly with our intuitive Chain Development Kit.</p>
            <p><span>Targeted Sectors:</span><br />E-Governance, Banking & Finance, Travel, RWA, Gaming & Entertainment, Tokenization </p>
        </>
    );

    return (
        <main>
            <InnerBanner
                sectionname="Blockchain Reimagined"
                heading="NuChain"
                subheading="Empowering Enterprises"
                imageurl="assets/bannerimages/the-company-min.png"
            />

            <ParaImage
                image="assets/sectionimages/the-company-1.png"
                content={first}
                position="right"
                background="white"
            />

            <ParaImage
                image="assets/sectionimages/the-company-2.png"
                content={second}
                position="left"
                background="gray"
            />

            <CalltoAction cta="NuChain - Blockchain Reimagined." />

        </main>
    )
}

export default Whynuchainnew
