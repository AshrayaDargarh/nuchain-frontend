import React from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import ParaImage from '@/app/_components/ParaImage';

const NuCode = () => {

    const firstSectionContent = (
        <>
            <h3>Build Your Blockchain<br /> <span>in 10 Weeks</span></h3>
            <p><span>Say goodbye to 6-month+ development cycles and expensive CTO hires. NuCode is our proprietary system that lets you build your custom Blockchain in just 10 weeks.</span></p>
            <p><span>Chain Development Kit (CDK):</span> Our intuitive toolkit empowers your team to build, deploy, and manage your Blockchain with ease.</p>
            <p><span>Accelerated Development:</span> Pre-built components and templates shave months off your development time.</p>
            <p><span>Expert Support:</span> Get weekly OKRs, access to developer portals, and assistance from certified NuChain professionals.</p>
        </>
    );

    const secondSectionContent = (
        <>
            <h3>Unleash the Full <span>Potential of Blockchain</span></h3>
            <p><span>Unmatched Speed (200,000 TPS):</span> Ditch slow transactions. NuChain delivers instant and affordable interactions.</p>
            <p><span>Infinitely Scalable:</span> Build with confidence, NuChain adapts to your needs, from startups to global enterprises.</p>
            <p><span>Customizable Blockchains:</span> Build what you need. NuChain&apos;s user-friendly CDK lets you tailor Blockchains to your specific requirements.</p>
            <p><span>Enterprise-Grade Security & Compliance:</span> NuChain prioritizes security and is designed for compliance, making it perfect for governments and regulated industries.</p>
        </>
    );

    return (

        <main>
            <InnerBanner
                sectionname="Build with NuCode"
                heading="NuCode"
                subheading="Build Your Blockchain in 10 Weeks, Not Years."
                imageurl="assets/bannerimages/why-nuchain-min.png"
            />
            <ParaImage
                image="assets/sectionimages/why-nuchain-1.png"
                content={firstSectionContent}
                position="left"
                background="white"
            />
            <ParaImage
                image="assets/sectionimages/why-nuchain-2.png"
                content={secondSectionContent}
                position="right"
                background="gray"
            />
            <CalltoAction cta="Don't just dream of Blockchain, build it fast with NuChain." />
        </main>
    )
}

export default NuCode
