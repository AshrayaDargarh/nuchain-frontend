import React from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import TopBanner from '@/app/_components/TopBanner';

const Media = () => {

    return (
        <main>
            <InnerBanner
                sectionname="Connect with Nuchain"
                heading="Media Kit"
                subheading="Reach out to us in the way its works best for you."
                imageurl="assets/bannerimages/media-min.png"
            />

            <TopBanner content="Media outlets and influencers who help us spread the word about NuChain and its potential to transform industries." />

            <section className='section-spacing-design'>
                <div className='container-xxl d-flex flex-column gap-5'>
                    <div className='row mb-4'>
                        <div className='text-center para-image-text-box'>
                            <h3>Icons Only</h3>
                        </div>
                        <div className='col col-md-4 col-12 py-md-0 py-3 px-5 px-md-5'>
                            <img src='assets/images/icon-1.png' alt='' />
                        </div>
                        <div className='col col-md-4 col-12 py-md-0 py-3 px-5 px-md-5'>
                            <img src='assets/images/icon-2.png' alt='' />
                        </div>
                        <div className='col col-md-4 col-12 py-md-0 py-3 px-5 px-md-5'>
                            <img src='assets/images/icon-3.png' alt='' />
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className='text-center para-image-text-box'>
                            <h3>Vertical Logos</h3>
                        </div>
                        <div className='col col-md-4 col-12 py-md-0 py-3 px-5 px-md-5'>
                            <img src='assets/images/icon-4.png' alt='' />
                        </div>
                        <div className='col col-md-4 col-12 py-md-0 py-3 px-5 px-md-5'>
                            <img src='assets/images/icon-5.png' alt='' />
                        </div>
                        <div className='col col-md-4 col-12 py-md-0 py-3 px-5 px-md-5'>
                            <img src='assets/images/icon-6.png' alt='' />
                        </div>
                    </div>

                    <div className='row mb-4'>
                        <div className='text-center para-image-text-box'>
                            <h3>Horizontal Logos</h3>
                        </div>
                        <div className='col col-md-4 col-12 py-md-0 py-3 px-5 px-md-5'>
                            <img src='assets/images/icon-7.png' alt='' />
                        </div>
                        <div className='col col-md-4 col-12 py-md-0 py-3 px-5 px-md-5'>
                            <img src='assets/images/icon-8.png' alt='' />
                        </div>
                        <div className='col col-md-4 col-12 py-md-0 py-3 px-5 px-md-5'>
                            <img src='assets/images/icon-9.png' alt='' />
                        </div>
                    </div>

                    <div className='text-center'>
                        <a download="Nuchain-Media" href="/assets/documents/MediaFile/Media.zip" target='_blank' className="btn-pink">Download</a>
                    </div>


                </div>
            </section>
        </main>
    )
}

export default Media
