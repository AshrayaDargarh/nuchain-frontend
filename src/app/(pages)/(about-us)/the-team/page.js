import React from 'react'

import InnerBanner from '@/app/_components/InnerBanner';

const TheTeam = () => {

    const teamdata = [
        { name: "Jagdish Pandya", position: "Founder & CEO", photo: "assets/team/8.png", linkedin: "https://www.linkedin.com/in/jagdishpandya/" },
        { name: "Arjun Mishra", position: "Co-founder, CVO", photo: "assets/team/5.png", linkedin: "https://www.linkedin.com/in/arjunms/" },
        { name: "Captain Ajay Ahlawat", position: "Chief Operations Officer", photo: "assets/team/10.png", linkedin: "https://www.linkedin.com/in/group-captain-ajay-ahlawat-veteran-954870145" },
        { name: "Sumit Kumar Gupta", position: "Chief Growth Officer", photo: "assets/team/1.png", linkedin: "https://www.linkedin.com/in/guptasumitk/" },
        { name: "Ritesh Kant", position: "Project Director", photo: "assets/team/6.png", linkedin: "https://www.linkedin.com/in/riteshkant/" },
        { name: "Himanshu Sachan", position: "Marketing Head", photo: "assets/team/4.png", linkedin: "https://www.linkedin.com/in/sachanh/" },
        { name: "Praveer Tiwari", position: "Business Analyst", photo: "assets/team/9.png", linkedin: "https://www.linkedin.com/in/praveer-tiwari/" },
        { name: "Divit Garg", position: "Growth & Community Lead", photo: "assets/team/7.png", linkedin: "https://www.linkedin.com/in/divit-garg-22a9751a3/" },
        { name: "Shivang Kamboj", position: "BD Lead", photo: "assets/team/3.png", linkedin: "https://www.linkedin.com/in/shivang-kamboj-964853160/" },
        { name: "Sugandh Mukherjee", position: "Administrative Manager", photo: "assets/team/2.png", linkedin: "https://www.linkedin.com/in/sugandh-mukherjee-61053183/" },
    ];

    return (
        <main>
            <InnerBanner
                sectionname="Our Team"
                heading="Unity in diversity"
                subheading="The secret sauce behind our success."
                imageurl="assets/bannerimages/teams-min.png"
            />
            <section className='section-spacing-design'>
                <div className='container-xxl'>
                    <div className='row justify-content-center'>
                        {teamdata.map((member, index) => (
                            <div key={index} className='col col-6 col-md-4 team-border-design'>
                                <div className='pt-5 pb-5 d-flex justify-content-center align-items-center flex-column'>
                                    <div className='member-image-design'>
                                        <img src={member.photo} alt={member.name} />
                                        <div className='linkedin-box-design'>
                                            <a href={member.linkedin}><i className="bi bi-linkedin" /></a>
                                        </div>
                                    </div>
                                    <p className='member-name'>{member.name}</p>
                                    <p className='member-position'>{member.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </main>
    )
}

export default TheTeam
