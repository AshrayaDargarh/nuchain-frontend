"use client"
import React, { useEffect } from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import { useSearchParams,useRouter } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom'

const ApplyJobPageWithSuspense = () => {
    const searchParams= useSearchParams()
    const job =JSON.parse(searchParams.get('job'))
    const state = job
    console.log(job, 'job');
    const router=useRouter();
    useEffect(()=>{
        if(state===null)
        {
            router.push('/careers')
        }
    },[state,router])
    // const router = useRouter()
    // const job = JSON.parse(router.query.job)
  
    // useEffect(() => {
    //     if (state === null) {
    //         navigate('/careers')
    //     }
    // }, [])

    // console.log(state, 'state');
    return (

        <main id='view'>
            <InnerBanner
                sectionname="Build Your Future"
                heading="Careers"
                subheading="Join the Blockchain Revolution"
                imageurl="assets/bannerimages/apply-jobs-min.png"
            />

            <section className='the-company-section content-design'>
                <div className='container-xxl'>
                    <div className='job-section-heading'>
                        <h2>{state?.jobtitle}</h2>
                    </div>

                    <div className='row mt-5 pt-5'>
                        <div className='col col-12 col-md-4'>
                            <p><strong>Developer - {state?.jobtitle}</strong></p>
                            <p><strong>{state?.location}</strong></p>
                            <p><strong>Full-Time</strong></p>
                        </div>

                        <div className='col col-12 col-md-8'>
                            <h3 className='mt-0'>What is BlockOn?</h3>
                            <p>BlockOn Ventures is a worldwide blockchain venture builder and VC firm, providing incubation, acceleration, and advisory support to global innovators with blockchain-based visions since 2013. With a presence in Gurugram, India, and other locations such as Singapore, Thailand, Dubai, and Malaysia, BlockOn Ventures promotes a better ecosystem for cryptocurrency and blockchain companies by leveraging its network, infrastructure, and funding.</p>
                            <h3>Job Summary</h3>
                            <p>
                                {
                                    state?.job_description
                                }

                            </p>
                            <h3>What youll need - Preferred Qualifications</h3>
                            <p>
                                {state?.qualifications}
                            </p>
                            <div className='mt-5 d-flex gap-3 flex-row'>
                                <Link href={{
                                    pathname:"/job-application",
                                    query:{
                                        title: state?.jobtitle,
                                    }
                                    }}
                                    className="btn-pink" style={{ color: "#fff" }}>Apply Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )
}


function ApplyJobPage(props) {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ApplyJobPageWithSuspense {...props} />
        </Suspense>
    );
}

export default ApplyJobPage
