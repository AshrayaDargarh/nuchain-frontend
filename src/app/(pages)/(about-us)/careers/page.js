import React from 'react';
import InnerBanner from '@/app/_components/InnerBanner';
import Link from 'next/link';

const Careers = () => {
    const jobopenings = [
        {
            jobcategory: "Engineering",
            jobs: [
                {
                    jobtitle: "Full Stack Developer", location: "Gurugram-India", experience: "3-5 years", url: "/apply-Job",
                    job_description: "This is a full-time on-site role for a Full Stack Engineer located in Gurugram. As a Full Stack Engineer at BlockOn Ventures, you will be responsible for both front-end and back-end web development, software development, and the utilization of Cascading Style Sheets (CSS). You will work on building and maintaining innovative blockchain-based solutions, contributing to the development of a cutting-edge ecosystem.",
                    qualifications: "Back-End Web Development and Software Development skills Front-End Development and Full-Stack Development skills Cascading Style Sheets (CSS) expertise Experience with blockchain technology and cryptocurrency is a plus Strong problem-solving and analytical skills   Excellent communication and collaboration skills    Ability to work in a fast-paced environment      Bachelor&apos;s or Master&apos;s degree in Computer Science or related field"
                },
                {
                    jobtitle: "Blockchain Developer", location: "Gurugram-India", experience: "2-3 years", url: "/apply-Job",
                    job_description: "This is a full-time on-site role for a Blockchain Developer at BlockOn Ventures located in Gurugram. The Blockchain Developer will be responsible for tasks associated with cryptography, cryptocurrency, back-end web development, blockchain, and software development. The role entails developing and implementing blockchain solutions, conducting coding and testing activities, ensuring the security and integrity of blockchain systems, and collaborating with cross-functional teams.",
                    qualifications: "Cryptography and Cryptocurrency skills   Back-End Web Development and Software Development skills Experience in blockchain development Knowledge of blockchain technologies and frameworks Strong programming skills in languages such as Solidity, Java, or C++ Understanding of smart contracts Problem-solving and analytical skills Attention to detail and ability to work in a fast-paced environment Bachelor&apos;s or Master&apos;s degree in Computer Science, Engineering, or related field"
                },
            ]
        },
        {
            jobcategory: "Design",
            jobs: [
                {
                    jobtitle: "UI/UX Designer - Web3 ",
                    location: "Gurugram-India",
                    experience: "2-3 years",
                    url: "/apply-Job",
                    job_description: "This is a full-time on-site role for a Web3 UI/UX Designer located in Gurugram. As a Web3 UI/UX Designer at BlockOn Ventures, you will be responsible for designing intuitive and user-friendly interfaces for blockchain-based applications. You will collaborate with cross-functional teams to understand user needs and implement design solutions that enhance the user experience.",
                    qualifications: "Proven experience working as a UI/UX Designer or similar role Solid understanding of user-centered design principles Proficiency in design tools such as Sketch, Figma, or Adobe Creative Suite     Experience designing interfaces for blockchain-based applications is a plus Strong portfolio showcasing your design skills and ability to create visually appealing and functional interfaces Knowledge of Web3 technologies and frameworks Excellent communication and collaboration skills Bachelor&apos;s degree or higher in Design, Computer Science, or a related field"
                },
            ]
        },
    ]

    return (
        <main>
            <InnerBanner
                sectionname="Build Your Future"
                heading="Careers"
                subheading="Join the Blockchain Revolution"
                imageurl="assets/bannerimages/careers-min.png"
            />
            <section className='section-spacing-design'>
                <div className='container-xxl'>
                    <div className='job-section-heading text-center'>
                        <h2>Career Openings</h2>
                        <p>NuChain is seeking talented individuals to join our team and build the world&apos;s<br /> most impactful Blockchain ecosystem. We offer exciting opportunities in various fields, including:</p>
                    </div>
                    <div className='row mt-5 pt-5'>
                        <div className='col col-12 col-md-3'>
                            <div className="nav mb-3 d-flex flex-column tab-list-design gap-2" id="nav-tab" role="tablist">
                                {jobopenings.map((category, index) => (
                                    <button
                                        key={index}
                                        className={`nav-link ${index === 0 ? 'active' : ''}`}
                                        id={`nav-${index + 1}-tab`}
                                        data-bs-toggle="tab"
                                        data-bs-target={`#nav-${index + 1}`}
                                        type="button"
                                        role="tab"
                                        aria-controls={`nav-${index + 1}`}
                                        aria-selected={index === 0 ? 'true' : 'false'}
                                    >
                                        {category.jobcategory}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className='col col-12 col-md-9'>
                            <div className="tab-content" id="nav-tabContent">
                                {jobopenings.map((category, index) => (
                                    <div
                                        key={index}
                                        className={`tab-pane fade ${index === 0 ? 'active show' : ''}`}
                                        id={`nav-${index + 1}`}
                                        role="tabpanel"
                                        aria-labelledby={`nav-${index + 1}-tab`}
                                    >
                                        {category.jobs.map((job, jobIndex) => (
                                            <Link key={jobIndex} href={{
                                                pathname:'/apply-job',
                                                query:{
                                                    job:JSON.stringify(job)
                                                }
                                                }}
                                                >
                                                {/* Removed the <a> tag from here */}
                                                <div className='job-box-design d-flex flex-column flex-md-row justify-content-between align-items-center mb-3 text-center gap-3'>
                                                    <p className='job-title'>{job.jobtitle}</p>
                                                    <div className='job-details-box'>
                                                        <p className='job-detail-heding'>Experience</p>
                                                        <p className='job-detail-data'>{job.experience}</p>
                                                    </div>
                                                    <div className='job-details-box'>
                                                        <p className='job-detail-heding'>Location</p>
                                                        <p className='job-detail-data'>{job.location}</p>
                                                    </div>
                                                    <i className="bi bi-arrow-right" />
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section-spacing-design grey-background'>
                <div className='container-xxl'>
                    <div className='row gx-5'>
                        <div className='col col-12 col-md-6'>
                            <div className='para-image-text-box col-10'>
                                <h2>Why you should join our team ?</h2>
                                <p>NuChain will revolutionize Web3 Landscape in the near future. We aim to create 100 blockchain in next 3 years that would be amongst the world&apos;s best.</p>
                                <p>NuChain is looking for talented individuals to join our growing team. We offer a collaborative work environment, challenging problems to solve, and the opportunity to make a real impact. Become a part of the NuChain revolution and explore the exciting career opportunities we have to offer!</p>
                            </div>
                        </div>
                        <div className='col col-12 col-md-6'>
                            <div className='career-small-box'>
                                <div className='row gx-5 gy-5'>
                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/images/career1.png' alt='' />
                                            <h4>Team work</h4>
                                            <p>Work alongside talented minds in a supportive team.</p>
                                        </div>
                                    </div>
                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/images/career2.png' alt='' />
                                            <h4>Secured Future</h4>
                                            <p>Build a secure future with a progressive Blockchain leader.</p>
                                        </div>
                                    </div>
                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/images/career3.png' alt='' />
                                            <h4>Learning Opportunity</h4>
                                            <p>Embrace ongoing learning opportunities and stay at the forefront of Blockchain technology.</p>
                                        </div>
                                    </div>
                                    <div className='col col-12 col-md-6'>
                                        <div className='career-small-single-box'>
                                            <img src='assets/images/career4.png' alt='' />
                                            <h4>Upgrade Skills</h4>
                                            <p>Sharpen your skills and propel your Blockchain expertise.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Careers;
