import React from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import ParaImage from '@/app/_components/ParaImage';

const Tokenization = () => {

    const firstSectionContent = (
        <>
            <h3>NuChain: Your Partner in <span>Tokenization</span></h3>
            <p>Current solutions for tokenized assets are often clunky, inadequately secured and lack a common standard, hindering the potential of such assets, particularly for large projects.</p>
            <p>NuChain tackles these issues effectively. By prioritizing security and compliance, giving users peace of mind. Furthermore, NuChain enhances adaptability and usability by enabling smooth interaction between various tokenized assets.</p>
        </>
    );

    const secondSectionContent = (
        <>
            <h3>Transform the Way You Own</h3>
            <p><span>Unleash the Power of Tokenization with NuChain</span></p>
            <p>Break down barriers and unlock new investment opportunities by transforming real-world and intangible assets into secure, tradable tokens.</p>
            <p>NuChain creates a dynamic environment for fractional ownership, enabling you to take part in asset classes that were previously unavailable.</p>
        </>
    );

    return (

        <main>
            <InnerBanner
                sectionname="Value Through Tokens"
                heading="Tokenization"
                subheading="Your Gateway to the Tokenized Future"
                imageurl="assets/bannerimages/Tokenisation-min.png"
            />

            <ParaImage
                image="assets/sectionimages/token-2.png"
                content={firstSectionContent}
                position="left"
                background="white"
            />

            <ParaImage
                image="assets/sectionimages/token-1.png"
                content={secondSectionContent}
                position="right"
                background="gray"
            />

            <section className='section-spacing-design'>
                <div className="container-xxl">
                    <div className='para-image-text-box text-center mb-md-5 mb-3'>
                        <h3>Your One-Stop Solution for Tokenization</h3>
                    </div>
                    <div className='row gx-5 gy-5 d-flex justify-center'>
                        <div className='col col-12 col-md-3'>
                            <div className='box-head-con-design para-image-text-box h-100'>
                                <h4>Streamlined Process</h4>
                                <p>Simplify token creation, issuance, and management.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-3'>
                            <div className='box-head-con-design para-image-text-box h-100'>
                                <h4>Enhanced Security</h4>
                                <p>Protect your assets with our robust Blockchain platform.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-3'>
                            <div className='box-head-con-design para-image-text-box h-100'>
                                <h4>Increased Liquidity</h4>
                                <p>Access new markets and unlock hidden value.</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-3'>
                            <div className='box-head-con-design para-image-text-box h-100'>
                                <h4>Expert Guidance</h4>
                                <p>Leverage our team&apos;s deep expertise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CalltoAction cta="Ready to tokenize your assets?" />
        </main>

    )
}

export default Tokenization
