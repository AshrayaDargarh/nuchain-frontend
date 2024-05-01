import React from 'react'

import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import ParaImage from '@/app/_components/ParaImage';

const EGovernance = () => {

    const nucases = [
        { icon: "assets/icons/1.png", heading: "Secure voting systems", description: "Protect elections from manipulation and ensure voter confidence.", url: "#" },
        { icon: "assets/icons/2.png", heading: "Efficient healthcare management", description: "Securely manage medical records and improve data sharing.", url: "#" },
        { icon: "assets/icons/3.png", heading: "Verifiable educational credentials", description: "Issue tamper-proof diplomas, certificates and transcripts.", url: "#" },
        { icon: "assets/icons/4.png", heading: "Transparent land registry", description: "Eliminate disputes and streamline property transactions.", url: "#" },
        { icon: "assets/icons/5.png", heading: "Secure citizen identification", description: "Simplify ID management and prevent fraud.", url: "#" },

    ];

    const firstSectionContent = (
        <>
            <h3>Optimize service delivery <br /><span>with NuChain</span></h3>
            <p>NuChain helps governments work efficiently and effectively. Our secure and adaptable blockchain solution can be tailored to your needs, so that you can meet of the citizen.</p>
            <p>Governments may use Blockchain technology to promote good governance, increase transparency and foster citizen confidence. We stand out as a reliable partner in forming the future of governance because of our creative thinking and commitment to offering excellent solutions.</p>
        </>
    );

    return (

        <main>
            <InnerBanner
                sectionname="Transform Governance"
                heading="E-governance"
                subheading="Building Trust and Transparency in E-Governance"
                imageurl="assets/bannerimages/E-governance-min.png"
            />

            <ParaImage
                image="assets/sectionimages/e-gov-1.png"
                content={firstSectionContent}
                position="left"
                background="white"
            />

            <section className='section-spacing-design'>
                <div className="container-xxl">
                    <div className='para-image-text-box mb-md-5 mb-3 text-center'>
                        <h3>Building Trustworthy Governance with Blockchain</h3>
                    </div>
                    <div className='row gx-5 gy-5 gy-md-0'>
                        <div className='col col-12 col-md-4'>
                            <div className='box-head-con-design para-image-text-box h-100'>
                                <h4>Reduce Corruption <br /> and Fraud</h4>
                                <p>Immutable records ensure data integrity and accountability.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-4'>
                            <div className='box-head-con-design para-image-text-box h-100'>
                                <h4>Streamline<br />Processes</h4>
                                <p>Simplify citizen interactions and service delivery.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-4'>
                            <div className='box-head-con-design para-image-text-box h-100'>
                                <h4>Enhance<br />Transparency</h4>
                                <p>Build trust with open and verifiable data access.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section-spacing-design'>
                <div className="container-xxl">
                    <div className='para-image-text-box mb-md-5 mb-3 text-center'>
                        <h3>NuCases</h3>
                    </div>
                    <div className='row mb-5 gx-5'>
                        {nucases.map((nucase, index) => (
                            <div key={index} className='col col-12 col-md-6'>
                                <a href={nucase.url} >
                                    <div className='sub-nucases-box d-flex align-items-center gap-5'>
                                        <div className='nucases-image-box'>
                                            <img src={nucase.icon} alt={nucase.heading} />
                                        </div>
                                        <div className='nucases-data-box'>
                                            <h4>{nucase.heading}</h4>
                                            <p>{nucase.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                        <div className='col col-12 col-md-6'>
                            <a href='#'>
                                <div className='sub-nucases-box d-flex align-items-center gap-5'>
                                    <div className='nucases-image-box'>
                                        <img src='assets/icons/6.png' alt='icon' />
                                    </div>
                                    <div className='nucases-data-box'>
                                        <h4>And many more!</h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <CalltoAction cta="Ready to transform Governance?" />
        </main>
    )
}

export default EGovernance
