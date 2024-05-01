import React from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import TopBanner from '@/app/_components/TopBanner';

const Ambasadors = () => {

    return (
            <main>
                <InnerBanner
                    sectionname="Build Your Future"
                    heading="Ambassador"
                    subheading="Join the Blockchain Revolution"
                    imageurl="assets/bannerimages/ambassador-min.png"
                />

                <TopBanner content="NuChain&apos;s Ambassador Program empowers passionate advocates to spread awareness and drive adoption of our Web 3 solutions. Ambassadors receive exclusive perks, training, and rewards while promoting NuChain within their networks. Through community engagement and feedback, they play a crucial role in shaping the future of Web 3 technology. Join us in revolutionizing the digital landscape with NuChain!" />

                <section className='the-company-section job-apply-from-description'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col col-12 col-md-4'>
                                <div className="nav mb-3 d-flex flex-column tab-list-design gap-2" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-1-tab" data-bs-toggle="tab" data-bs-target="#nav-1" type="button" role="tab" aria-controls="nav-1" aria-selected="true">CXO Ambassador Program</button>
                                    <button className="nav-link" id="nav-2-tab" data-bs-toggle="tab" data-bs-target="#nav-2" type="button" role="tab" aria-controls="nav-2" aria-selected="false">Student Ambassador Program</button>
                                </div>
                            </div>

                            <div className='col col-12 col-md-8'>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane fade active show  content-design" id="nav-1" role="tabpanel" aria-labelledby="nav-1-tab">
                                        <div className=''>
                                            <h3 className='mt-0'>The CXO Ambassador Program</h3>
                                            <p>NuChain&apos;s CXO Ambassador Program aims to enlist top executives as advocates to champion our Web 3 solutions. Offering exclusive benefits, tailored resources, and rewards, CXO Ambassadors will leverage their influence to drive adoption and innovation within their networks. Join us in leading the charge towards a decentralized future with NuChain!</p>
                                            <p>Stay tuned for further updates!</p>
                                            
                                            {/* <div className='mt-5 d-flex gap-3 flex-row'>
                                                <button type="submit" className="btn-pink">Apply Now</button>
                                            </div> */}
                                        </div>
                                    </div>

                                    <div className="tab-pane fade content-design" id="nav-2" role="tabpanel" aria-labelledby="nav-2-tab">
                                        <div className=''>
                                            <h3 className='mt-0'>The Student Ambassador Program</h3>
                                            <p>NuChain&apos;s Student Ambassador Program is designed to empower enthusiastic students to advocate for our Web 3 solutions. Student Ambassadors gain access to exclusive benefits, training, and rewards while promoting NuChain within their educational communities. By fostering engagement and collaboration, Student Ambassadors play a pivotal role in shaping the future of technology. Join us in revolutionizing the digital landscape with NuChain!</p>
                                            <p>Stay tuned for further updates!</p>
                                            {/* <div className='mt-5 d-flex gap-3 flex-row'>
                                                <button type="submit" className="btn-pink">Apply Now</button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CalltoAction cta="Don't just dream of Blockchain, build it fast with NuChain." />
            </main>
    )
}

export default Ambasadors
