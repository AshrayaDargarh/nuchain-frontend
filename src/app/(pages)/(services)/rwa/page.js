import React from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import ParaImage from '@/app/_components/ParaImage';


const RWA = () => {
    const firstSectionContent = (
        <>
            <h3>NuChain: Your Partner in <span>RWA Innovation</span></h3>
            <p>Unlock the full potential of your real-world assets (RWAs) with NuChain&apos;s Blockchain powered tokenization platform. Transform illiquid assets into dynamic investment opportunities, optimize transactions and enhance security. </p>
            <p>We understand the unique challenges and opportunities presented by real world assets. That&apos;s why we offer solution that are tailorable and scalable as per your needs.</p>
        </>
    );

    const secondSectionContent = (
        <>
            <h3>Benefits for Everyone</h3>
            <p>Increase liquidity for your assets.</p>
            <p>Protect ownership and transaction records with our tamper-proof Blockchain.</p>
            <p>Improve efficiency and reduce administrative cost.</p>
            <p>Leverage fractional ownership to make large assets accessible to a wider investor base.</p>
        </>
    );

    return (
        <main>
            <InnerBanner
                sectionname="Bridge Between Real and Digital"
                heading="Real World Assets"
                subheading="Unleashing the Power of Real-World Assets"
                imageurl="assets/bannerimages/rwa-min.png"
            />

            <ParaImage
                image="assets/sectionimages/rwa-1.png"
                content={firstSectionContent}
                position="left"
                background="white"
            />

            <section className='section-spacing-design'>
                <div className="container-xxl">
                    <div className='para-image-text-box text-center'>
                        <h3>Unlock Value with RWA Tokenization</h3>
                    </div>
                    <div className='row gx-5 gy-5 d-flex justify-center'>
                        <div className='col col-12 col-md-4'>
                            <div className='box-head-con-design para-image-text-box  h-100'>
                                <div className='mb-4' style={{ height: "66px", padding: "0px", aspectRatio: "1/1" }}>
                                    <img src='assets/icons/rwa-1.png' alt='icon' />
                                </div>
                                <h4>Land & Property</h4>
                                <p>Fractionalize ownership, improve liquidity, and access new investment opportunities.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-4'>
                            <div className='box-head-con-design para-image-text-box  h-100'>
                                <div className='mb-4' style={{ height: "66px", padding: "0px", aspectRatio: "1/1" }}>
                                    <img src='assets/icons/rwa-2.png' alt='icon' />
                                </div>
                                <h4>Financial Instruments</h4>
                                <p>Tokenize bonds, equities, and more for efficient fractional trading and asset management.</p>
                            </div>
                        </div>
                    </div>

                    <div className='row gx-5 gy-5 d-flex justify-center mt-3'>
                        <div className='col col-12 col-md-4'>
                            <div className='box-head-con-design para-image-text-box  h-100'>
                                <div className='mb-4' style={{ height: "66px", padding: "0px", aspectRatio: "1/1" }}>
                                    <img src='assets/icons/rwa-3.png' alt='icon' />
                                </div>
                                <h4>Tangible Assets</h4>
                                <p>Represent art, collectibles, and luxury goods as tokens for secure ownership and global reach.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-4'>
                            <div className='box-head-con-design para-image-text-box  h-100'>
                                <div className='mb-4' style={{ height: "66px", padding: "0px", aspectRatio: "1/1" }}>
                                    <img src='assets/icons/rwa-4.png' alt='icon' />
                                </div>
                                <h4>Intangible Assets</h4>
                                <p>Tokenize intellectual property, patents, and licences for smoother licensing and value exchange.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ParaImage
                image="assets/sectionimages/rwa-2.png"
                content={secondSectionContent}
                position="right"
                background="gray"
            />

            <CalltoAction cta="NuChain: Bridge Between Real and Digital" />
        </main>
    )
}

export default RWA
