import React from 'react'

import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import ParaImage from '@/app/_components/ParaImage';

const Licence = () => {

    const firstSectionContent = (
        <>
            <h3>Foresight with Oversight</h3>
            <p>At NuChain, we believe transparent and responsible business practices are crucial. That&apos;s why we&apos;re a fully licensed and regulated technology company, adhering to the highest standards of legal compliance.</p>
            <p>As your trusted partner, we assure that your Blockchain solutions are built on a foundation of security and integrity.</p>
        </>
    );

    const secondSectionContent = (
        <>
            <h3>Build with Confidence <br/> Built on Trust</h3>
            <p>Transparency and collaboration are core values at NuChain. We believe in empowering developers to build innovative solutions on a foundation of trust.</p>
            <p>NuChain processes and integral development team subscribes to industry base practices. You can confidently integrate NuChain&apos;s technology into your projects and ensure compliance with open-source regulations.</p>
        </>
    );


    return (
            <main>
                <InnerBanner
                    sectionname="Unlock Potential "
                    heading="Licences"
                    subheading="Built on Trust, Secured by Compliance"
                    imageurl="assets/bannerimages/licences-min.png"
                />

                <ParaImage
                    image="assets/sectionimages/licence-1.png"
                    content={firstSectionContent}
                    position="left"
                    background="white"
                />

                <ParaImage
                    image="assets/sectionimages/licence-2.png"
                    content={secondSectionContent}
                    position="right"
                    background="gray"
                />

                <CalltoAction cta="Learn more about our licensing and compliance practices." />
            </main>
    )
}

export default Licence
