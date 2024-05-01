import React from 'react'
import InnerBanner from '@/app/_components/InnerBanner';
import CalltoAction from '@/app/_components/CalltoAction';
import ParaImage from '@/app/_components/ParaImage';

const BankingAndFinance = () => {

    const firstSectionContent = (
        <>
            <h3>Financial Innovation: <br /><span>Powered by NuChain</span></h3>
            <p>NuChain uses Blockchain technology to transform banking and finance. The company provides solutions for capital markets, asset management, payments, banking, trade, finance, and insurance. By facilitating safe, effective, and inclusive financial transactions, our platform is revolutionizing the sector. Users can benefit from reduced fraud, expedited procedures, and improved operational efficiency with NuChain.</p>
            <p>The foundation of NuChain&apos;s services is Blockchain, which offers transparent and unchangeable ledgers for transactions in a variety of industries. Come along with us as we set out on this quest to change the financial services industry.</p>
        </>
    );

    return (

        <main>
            <InnerBanner
                sectionname="Revolutionize Finance"
                heading="Banking And Finance"
                subheading="Reshaping the Future of Money"
                imageurl="assets/bannerimages/banking-and-finance-min.png"
            />

            <ParaImage
                image="assets/sectionimages/banking-1.png"
                content={firstSectionContent}
                position="right"
                background="white"
            />

            <section className="section-spacing-design background-grey">
                <div className="container-xxl">
                    <div className="row d-flex justify-content-center">
                        <div className=" col col-12 col-md-5">
                            <div className="card-box connection1 d-flex flex-column px-lg-5 px-3 py-5 cos-card-box" style={{ justifyContent: "flex-end", background: "url(assets/sectionimages/banking-2.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                                <div>
                                    <h3 className="white mb-3 fw-bold fs-3">Revolutionise Transactions</h3>
                                    <ul className="white fs-5">
                                        <li>Achieve faster settlements.</li>
                                        <li>Eliminate intermediaries.</li>
                                        <li>Enhance security.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className=" col col-12 col-md-5">
                            <div className="card-box connection2 d-flex flex-column px-lg-5 px-3 py-5 cos-card-box" style={{ justifyContent: "flex-end", background: "url(assets/sectionimages/banking-3.png)", backgroundRepeat: 'no-repeat', backgroundSize: "cover" }}>
                                <div>
                                    <h3 className="white mb-3 fw-bold fs-3">Embrace Decentralization</h3>
                                    <ul className="white fs-5">
                                        <li>Build your own secure Blockchain.</li>
                                        <li>Accounting with immutability.</li>
                                        <li>Uniquely trackable transactions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-spacing-design">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="dk-blue mb-md-5 mb-3 text-center">
                                NuChain: Remodeling Banking and Finance
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <img
                                src="assets/sectionimages/banking-4.png"
                                alt=""
                                className="img-fluid"
                            />
                            <h3 className="dk-blue mt-3">
                                Secure, Fast & Low-Cost Payments
                            </h3>
                        </div>
                        <div className="col-12 col-md-4">
                            <img
                                src="assets/sectionimages/banking-5.png"
                                alt=""
                                className="img-fluid"
                            />
                            <h3 className="dk-blue mt-3">Innovate Banking, Reach New Markets</h3>
                        </div>
                        <div className="col-12 col-md-4">
                            <img
                                src="assets/sectionimages/banking-6.png"
                                alt=""
                                className="img-fluid"
                            />
                            <h3 className="dk-blue mt-3">Future Finance: Efficient, Open, Fair</h3>
                        </div>
                    </div>
                </div>
            </section>
            <CalltoAction cta="Ready to transform your financial future?" />
        </main>
    )
}

export default BankingAndFinance
