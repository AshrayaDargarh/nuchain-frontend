import React from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
// import ContactUsForm from '../../Components/forms/ContactUsForm';
import ContactUsForm from '@/app/_components/forms/ContactUsForm';

const ContactUs = () => {

    return (
        <main>
            <InnerBanner
                sectionname="Shape Blockchain Future"
                heading="Let&apos;s Build Together"
                subheading="Reach out to us in the way its works best for you."
                imageurl="assets/bannerimages/contact-us-min.png"
            />

            <section className="white-bg contact-us-section">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12 col-md-4 about-us-social-link-box">
                            <a href='/blogs' style={{ textDecoration: "none", color: "#111111" }}>
                                <div className='about-us-social-link align-items-center d-flex justify-content-between'>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <i className="fa-brands fa-blogger-b"></i>
                                        <p>Blog</p>
                                    </div>
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </a>
                            <a href='https://x.com/NuChainOfficial' style={{ textDecoration: "none", color: "#111111" }}>
                                <div className='about-us-social-link align-items-center d-flex justify-content-between'>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <i className="bi bi-twitter-x"></i>
                                        <p>Follow us on Twitter</p>
                                    </div>
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </a>
                            <a href='https://www.linkedin.com/company/nuchain/' style={{ textDecoration: "none", color: "#111111" }}>
                                <div className='about-us-social-link align-items-center d-flex justify-content-between'>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <i className="bi bi-linkedin"></i>
                                        <p>Connect on LinkedIn</p>
                                    </div>
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </a>
                            <a href='https://t.me/NuChainco' style={{ textDecoration: "none", color: "#111111" }}>
                                <div className='about-us-social-link align-items-center d-flex justify-content-between'>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <i className="bi bi-telegram"></i>
                                        <p>Chat on Telegram</p>
                                    </div>
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </a>
                            <a href='https://www.facebook.com/profile.php?id=61556651310633' style={{ textDecoration: "none", color: "#111111" }}>

                                <div className='about-us-social-link align-items-center d-flex justify-content-between'>
                                    <div className='d-flex gap-3 align-items-center'>
                                        <i className="bi bi-facebook"></i>
                                        <p>Follow on Facebook</p>
                                    </div>
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </a>
                        </div>

                        <div className="col-12 col-md-8 contact-us-box">
                            <div className='contact-us-form '>
                                <h5 className='mb-4'>Here to help</h5>
                                <ContactUsForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactUs
