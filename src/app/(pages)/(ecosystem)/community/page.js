import React from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import ParaImage from '@/app/_components/ParaImage';

const Community = () => {

    const firstSectionContent = (
        <>
            <h3>Where Innovation <br /><span>Meets Collaboration</span>.</h3>
            <p>NuChain&apos;s community isn&apos;t just builders - it&apos;s a global network of passionate developers, enthusiasts, and thought leaders. Together, they explore Blockchain&apos;s potential and shape the future. Join the conversation and be part of the movement!</p>
            <a href="https://x.com/NuChainOfficial" className="btn-pink mt-4">Join our Community</a>
        </>
    );

    return (
        <main>
            <InnerBanner
                sectionname="Connect with Nuchain"
                heading="Community"
                subheading="Reach out to us in the way its works best for you."
                imageurl="assets/bannerimages/community-min.png"
            />

            <ParaImage
                image="assets/sectionimages/community-1.png"
                content={firstSectionContent}
                position="right"
                background="white"
            />

            <CalltoAction cta="Connect, learn, and grow. Join the NuChain Community." />
        </main>
    )
}

export default Community
