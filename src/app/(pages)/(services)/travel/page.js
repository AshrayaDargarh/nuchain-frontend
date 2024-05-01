import React from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import ParaImage from '@/app/_components/ParaImage';

const Travel = () => {

    const firstSectionContent = (
        <>
            <h3>Modernizing Travel<br /><span>with NuChain</span></h3>
            <p>NuChain&apos;s Blockchain technology delivers a better experience for travelers and travel providers alike. Our solutions streamline booking, enhance security, and empower travel companies. to better serve their customers and reduce costs.</p>
            <p>Blockchain technology helps in cutting-cost and increasing efficiency by eliminating   Intermediaries  for travel companies.</p>
            <p>From flights and hotels to packages, sightseeing, transport, and travel cheques, blockchain optimisms and maintains personalized journey data for every customer, ensuring a unique and seamless experience.</p>
        </>
    );

    return (
        <main>
            <InnerBanner
                sectionname="Streamline Travel"
                heading="Travel"
                subheading="Smoother Sailing for Travelers and Travel Brands"
                imageurl="assets/bannerimages/travel-min.png"
            />

            <ParaImage
                image="assets/sectionimages/travel-1.png"
                content={firstSectionContent}
                position="left"
                background="white"
            />

            <section className='section-spacing-design'>
                <div className="container-xxl">
                    <div className='para-image-text-box text-center mb-5'>
                        <h3>Travel Decentralized</h3>
                    </div>
                    <div className='row gx-5 gy-5'>
                        <div className='col col-12 col-md-4'>
                            <div className='box-head-con-design para-image-text-box  h-100'>
                                <h4>Simplify Ticketing and Identity Verification</h4>
                                <p>Say goodbye to inconvenience and fraud using secure Blockchain-based procedures.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-4'>
                            <div className='box-head-con-design para-image-text-box  h-100'>
                                <h4>Elevate Loyalty Programs</h4>
                                <p>Reward travelers equitably and transparently through tamper-proof tokenized incentives.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-4'>
                            <div className='box-head-con-design para-image-text-box  h-100'>
                                <h4>Refine Data Management</h4>
                                <p>Ensure data privacy and access control, enhancing the security of the travel experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-spacing-design'>
                <div className='container-xxl'>
                    <div className='row '>
                        <div className='col col-12 col-md-6 d-flex justify-content-center align-items-center mb-5 mb-md-0'>
                            <div className='company-image-box'>
                                <img src='assets/sectionimages/travel-2.png' alt='image' />
                            </div>
                        </div>
                        <div className='col col-12 col-md-6 d-flex flex-column justify-content-center mb-b mb-md-0 '>
                            <div className='company-text-box'>
                                <h3>For Travelers</h3>
                            </div>
                            <div className='career-small-box'>
                                <div className='row gx-5 gy-5'>
                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/icons/travel-1.png' alt='' className='mb-2' />
                                            <p>Experience expedited check-ins and reliable luggage tracking.</p>
                                        </div>
                                    </div>

                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/icons/travel-2.png' alt='' className='mb-2' />
                                            <p>Participate in a trustworthy and sustainable travel environment.</p>
                                        </div>
                                    </div>
                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/icons/travel-3.png' alt='' className='mb-2' />
                                            <p>Travel worry-free by booking directly, securely, and without fees.</p>
                                        </div>
                                    </div>

                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/icons/travel-4.png' alt='' className='mb-2' />
                                            <p>Maintain comprehensive and accessible records of your entire travel journey.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-spacing-design grey-background'>
                <div className='container-xxl'>
                    <div className='row '>
                        <div className='col col-12 col-md-6 d-flex flex-column justify-content-center mb-5 mb-md-0'>
                            <div className='para-image-text-box'>
                                <h3>For Travel Brands</h3>
                            </div>
                            <div className='career-small-box'>
                                <div className='row gx-5 gy-5'>
                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/icons/travel-5.png' alt='' className='mb-2' />
                                            <p>Reduce operating costs and lower the chance of fraud.</p>
                                        </div>
                                    </div>
                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/icons/travel-6.png' alt='' className='mb-2' />
                                            <p>Engage clients with creative loyalty programmes.</p>
                                        </div>
                                    </div>
                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/icons/travel-7.png' alt='' className='mb-2' />
                                            <p>By using secure data management, you can stop consumer data breaches and foster transparency and confidence.</p>
                                        </div>
                                    </div>
                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/icons/travel-8.png' alt='' className='mb-2' />
                                            <p>Vendors can eliminate convenience fee (typically up to 3%), on payment gateways.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col col-12 col-md-6 d-flex justify-content-center align-items-center mb-5 mb-md-0'>
                            <div className='company-image-box'>
                                <img src='assets/sectionimages/travel-3.png' alt='image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-spacing-design'>
                <div className="container-xxl">
                    <div className='para-image-text-box text-center'>
                        <h3>Join the Future of Travel</h3>
                    </div>
                    <div className='row gx-5 gy-5 d-flex justify-center'>
                        <div className='col col-12 col-md-5'>
                            <div className='box-head-con-design para-image-text-box h-100'>
                                <h4>Airlines & Travel Embrace New Era</h4>
                                <p>Leading airlines and travel companies are exploring Blockchain for ticketing and loyalty programs.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-5'>
                            <div className='box-head-con-design para-image-text-box h-100'>
                                <h4>Built for the Modern Traveler</h4>
                                <p>NuChain offers a fast, secure, and scalable platform for the evolving travel industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CalltoAction cta="Ready to transform your travel experience?" />
        </main>
    )
}

export default Travel
