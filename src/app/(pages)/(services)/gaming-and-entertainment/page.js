import React from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import ParaImage from '@/app/_components/ParaImage';

const GammingAndEntertainment = () => {

    const firstSectionContent = (
        <>
            <h3>Take Gaming to<br /><span>Next Level</span></h3>
            <p>Blockchain based gaming platforms face scalability challenges, including slower transaction processing speeds and higher fees, hindering their growth and wider adoption. NuChain is a high-speed Blockchain platform designed to address these challenges by providing a dynamic architecture and a unique proof-of-reputation consensus mechanism, enabling high throughput for real-time gaming transactions.</p>
        </>
    );

    const secondSectionContent = (
        <>
            <h3>Entertainment Decentralized</h3>
            <p>Artists often struggle to understand the terms of streaming deals, leading to unequal distribution of funds. Similarly Consumers of entertainment struggle with finding original content that is easily shareable as well as consumable. NuChain can address these challenges by providing a platform that ensures fair compensation for artists and simplifies content sharing.</p>
        </>
    );

    const thirdSectionContent = (
        <>
            <h3>Take Part in the Movement</h3>
            <p>Leading universities like MIT and UC Berkeley are paving the way for a more secure and transparent future of education with Blockchain technology.</p>
            <p>Secure and verifiable credentials are revolutionizing the way academic achievements are recorded and shared. Institutions can build secure Blockchains for issuing tamper-proof diplomas and managing records with NuChain.</p>
        </>
    );

    return (
        <main>
            <InnerBanner
                sectionname="Unlimited Opportunity"
                heading="Gaming & Entertainment"
                subheading="Multiple players : Multiple platforms"
                imageurl="assets/bannerimages/education-min.png"
            />

            <ParaImage
                image="assets/sectionimages/edu-1.png"
                content={firstSectionContent}
                position="left"
                background="white"
            />

            <ParaImage
                image="assets/sectionimages/edu-2.png"
                content={secondSectionContent}
                position="right"
                background="gray"
            />

            <section className='section-spacing-design'>
                <div className="container-xxl">
                    <div className='para-image-text-box text-center mb-md-5 mb-3'>
                        <h3>Benefits for Everyone</h3>
                    </div>
                    <div className='row gx-5 gy-5 d-flex justify-center'>
                        <div className='col col-12 col-md-4'>
                            <div className='vertical-middle-box box-head-con-design para-image-text-box h-100'>
                                <div className='mb-4' style={{ height: "66px", padding: "0px", aspectRatio: "1/1" }}>
                                    <img src='assets/icons/education1.png' alt='icon' />
                                </div>
                                <h4>Creators</h4>
                                <p>Leverage custom blockchains for advanced gaming and entertainment ventures, boosting scalability and performance to cater to extensive user engagement.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-4'>
                            <div className='vertical-middle-box box-head-con-design para-image-text-box h-100'>
                                <div className='mb-4' style={{ height: "66px", padding: "0px", aspectRatio: "1/1" }}>
                                    <img src='assets/icons/education2.png' alt='icon' />
                                </div>
                                <h4>Consumers</h4>
                                <p>Ensure a seamless experience for consumers with low latency and a secure database, providing uninterrupted and hassle-free experience.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-4'>
                            <div className='vertical-middle-box box-head-con-design para-image-text-box h-100'>
                                <div className='mb-4' style={{ height: "66px", padding: "0px", aspectRatio: "1/1" }}>
                                    <img src='assets/icons/education3.png' alt='icon' />
                                </div>
                                <h4>Platforms</h4>
                                <p>Enable artists and production houses to monetize their content on entertainment platforms effortlessly, offering a streamlined pipeline with user-friendly access.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CalltoAction cta="Game On: Ready to play." />
        </main>
    )
}

export default GammingAndEntertainment
