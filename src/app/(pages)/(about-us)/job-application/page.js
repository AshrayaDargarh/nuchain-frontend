import React from 'react'
import { Suspense } from 'react';

import ApplyJobForm from '@/app/_components/forms/ApplyJobForm'
import InnerBanner from '@/app/_components/InnerBanner';
const JobApplicationForm = () => {

    return (
        <main>
            <InnerBanner
                sectionname="Build Your Future"
                heading="Careers"
                subheading="Join the Blockchain Revolution"
                imageurl="assets/bannerimages/apply-jobs-min.png"
            />
            <section className='the-company-section apply-job-form'>
                <div className='container-xxl'>
                <Suspense fallback={<div>Loading...</div>}>
                    <ApplyJobForm />
                    </Suspense>
                </div>
            </section>
        </main>
    )
}

export default JobApplicationForm
