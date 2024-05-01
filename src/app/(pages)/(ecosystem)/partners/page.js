"use client"
import React, { useEffect, useState } from "react";
import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import TopBanner from '@/app/_components/TopBanner';
import axios from "axios";

const Partners = () => {
    const [partnerslogo, setPartnersLogo] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const getLogos = async () => {
        setLoading(true);
        setError(false);
        try {
            const data = [
                {
                    module: "get_logos",
                },
            ];
            const res = await axios.post(
                "https://www.nuchain.co/webapi/?appkey=dbRsqhjwkQGwKXYT3urPgufmYG6NspLgvG0xrL6a",
                data
            );
            setPartnersLogo(res?.data);
            setLoading(false);
            console.log(res);
        } catch (error) {
            console.log("Something went wrong", error);
            setLoading(false);
            setError(true);
        }
    };
    useEffect(() => {
        getLogos();
    }, []);
    if (error) {
        return (

            <main>
                <InnerBanner
                    sectionname="Connect with Nuchain"
                    heading="Partners"
                    subheading="Reach out to us in the way that works best for you"
                    imageurl="assets/bannerimages/Partners-min.png"
                />
                <div className="container-xxl">
                    <h1>Something went wrong</h1>
                </div>
            </main>

        );
    }
    return (

        <main>
            <InnerBanner
                sectionname="Connect with Nuchain"
                heading="Partners"
                subheading="Reach out to us in the way that works best for you"
                imageurl="assets/bannerimages/Partners-min.png"
            />

            <TopBanner content="NuChain thrives on a collaborative spirit. Our ecosystem partners are the backbone of our innovation. This includes businesses of all sizes, talented developers, and forward-thinking organizations who share our vision for the transformative power of Blockchain technology. Together, we&apos;re building groundbreaking solutions that push the boundaries of what&apos;s possible on the NuChain platform." />

            <section className="section-spacing-design">
                <div className="container-xxl">
                    <div className="row g-3 d-flex justify-content-center align-items-center">
                        {loading ? (
                            <div class="text-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        ) : partnerslogo.length === 0 ? (
                            <h1>No Partners Found</h1>
                        ) : (
                            partnerslogo.map((partner, index) => (
                                <div key={index} className="col col-md-2">
                                    <a href={partner?.URL} target={partner?.URL ? "_blank" : ""}>
                                        <div className="d-flex justify-content-center align-items-center logo-image-box">
                                            <div
                                                className="image-container"
                                                style={{ backgroundImage: `url(${partner?.Logo})` }}
                                            />
                                        </div>
                                    </a>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </section>
            <CalltoAction cta="Build with NuChain. Shape the future." />
        </main>

    );
};

export default Partners;
