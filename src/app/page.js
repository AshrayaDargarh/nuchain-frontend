import NewsLetterForm from './_components/forms/NewsLetterForm';

export default function Home() {
  return (
    <main>
      <section className="banner">
        <div className="container-xxl">
          <div className="row">
            <div className="col col-md-7">
              <div className="banner-text">
                <h5 className="white">Blockchain of the Future</h5>
                <h1 className="white">Build With Us</h1>
                <h4 className="white">Offering NuChain : A Layer-0 Blockchain platform that would enable Enterprises to extend reach, scale operations & optimize output. </h4>
                <h5 className="white"><i>World&apos;s fastest Blockchain platform - 200, 000 TPS</i></h5>
                <div className="banner-btn d-flex mt-lg-5 mt-4">
                  <a href="/nucode" className="btn-pink">Explore</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="white-bg defi-service">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 col-md-6">
              <span className="badge white px-3 mb-md-4 mb-3">Reimagine Blockchain</span>
              <h2 className="dk-blue mb-md-5 mb-3">Tailored Blockchain for Enterprise</h2>
              <p>NuChain offers best-in-class Blockchain technology for Public and Private Enterprises including Governments and Corporations. We offer developer-friendly, plug-and-play platform that enables Industry and the Governing bodies full exploitation of Blockchain&apos;s enormous potential.</p>
              <div className="banner-btn d-flex mt-md-5 mt-4">
                <a href="/e-governance" className="btn-blue">Know More</a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src="assets/images/img-defi-services.png" alt="New Universe of DeFi Services" className="img-fluid mt-lg-0 mt-5"/>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h5 className="text-center white mb-lg-4 mb-3">Created by Us : Tailored for You</h5>
              <h2 className="text-center white mb-lg-4 mb-3">Complex Problems : Customized Solutions</h2>
              <p className="text-center white mb-lg-5 mb-3">A lightning-fast Blockchain that is secure, adaptable to <br className="d-none d-lg-block" /> your needs, and scalable as per your vision.</p>
              <ul className="nav nav-pills mb-5 d-flex" id="pills-tab" role="tablist">
                <li className="nav-item d-flex flex-md-fill me-1" role="presentation">
                  <button className="nav-link active" id="pills-market-tab" data-bs-toggle="pill" data-bs-target="#pills-market" type="button" role="tab" aria-controls="pills-market" aria-selected="true">Government</button>
                </li>
                <li className="nav-item d-flex flex-md-fill me-1" role="presentation">
                  <button className="nav-link" id="pills-security-tab" data-bs-toggle="pill" data-bs-target="#pills-security" type="button" role="tab" aria-controls="pills-security" aria-selected="false">Enterprises</button>
                </li>
                <li className="nav-item d-flex flex-md-fill me-1" role="presentation">
                  <button className="nav-link" id="pills-router-tab" data-bs-toggle="pill" data-bs-target="#pills-router" type="button" role="tab" aria-controls="pills-router" aria-selected="false">Developers</button>
                </li>
                <li className="nav-item d-flex flex-md-fill me-1" role="presentation">
                  <button className="nav-link" id="pills-custodian-tab" data-bs-toggle="pill" data-bs-target="#pills-custodian" type="button" role="tab" aria-controls="pills-custodian" aria-selected="false">Validators</button>
                </li>
              </ul>
              <div className="tab-content pt-lg-5" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-market" role="tabpanel" aria-labelledby="pills-marktet-tab" tabIndex={0}>
                  <div className="d-md-flex justify-content-around align-items-center">
                    <div className="feature-img">
                      <img src="assets/images/img-feature-1.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="feature-content">
                      <h3 className="white blocktext-desin">NuChain provides a platform that is sustainable, compliant, and agile. Our products are tailored as per the requirements of Governments, Institutions and Intergovernmental Organizations, enabling them to deploy public-facing solutions. NuChain will help organizations create and deploy their own L1 or L2 chain.</h3>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-security" role="tabpanel" aria-labelledby="pills-security-tab" tabIndex={0}>
                  <div className="d-md-flex justify-content-around align-items-center">
                    <div className="feature-img">
                      <img src="assets/images/img-feature-2.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="feature-content">
                      <h3 className="white blocktext-desin">NuChain offers Private Enterprises and large Corporations easy-to-build Blockchain that can be deployed within 10 weeks. Our product is extremely customizable while being competitively priced. We provide aid & advice throughout the lifecycle of the product.</h3>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-router" role="tabpanel" aria-labelledby="pills-router-tab" tabIndex={0}>
                  <div className="d-md-flex justify-content-around align-items-center">
                    <div className="feature-img">
                      <img src="assets/images/img-feature-3.png" alt="" className="img-fluid" />
                    </div>
                    <div className="feature-content">
                      <h3 className="white blocktext-desin">NuChain supports innovation by offering training and educational programs to the Developers. In addition, we provide dedicated lab, development assistance, and incubation.</h3>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-custodian" role="tabpanel" aria-labelledby="pills-custodian-tab" tabIndex={0}>
                  <div className="d-md-flex justify-content-around align-items-center">
                    <div className="feature-img">
                      <img src="assets/images/img-feature-4.png" alt="" className="img-fluid"/>
                    </div>
                    <div className="feature-content">
                      <h3 className="white blocktext-desin">Validator plays key role in maintaining the integrity of any blockchain. Their success is intertwined with the growth of the chain. NuChain will be amongst the most successful chain in the future. Validators as stakeholders will reap rich rewards.</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="powerful-features">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <span className="badge white px-3 mb-md-4 mb-3">Unique Features</span>
              <h2 className="dk-blue mb-md-5 mb-3">Why Us</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4">
              <img src="assets/images/img-powerful-feature4.png" alt="" className="img-fluid" />
              <h3 className="dk-blue mt-3">2OOK Transactions Per Second</h3>
              <span className="badge grey-badge px-3 mb-md-4 mb-3"> Speed</span>
            </div>
            <div className="col-12 col-md-4">
              <img src="assets/images/img-powerful-feature1.png" alt="" className="img-fluid"/>
              <h3 className="dk-blue mt-3">Secured Platform Built for Enterprises</h3>
              <span className="badge grey-badge px-3 mb-md-4 mb-3">Security</span>
            </div>
            <div className="col-12 col-md-4">
              <img src="assets/images/img-powerful-feature5.png" alt="" className="img-fluid"/>
              <h3 className="dk-blue mt-3">Customizable Blockchains for Limitless Innovation.</h3>
              <span className="badge grey-badge px-3 mb-md-4 mb-3">Scalability</span>
            </div>
          </div>
        </div>
      </section>
      <section className="technology-value">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h5 className="text-center white mb-lg-4 mb-3">NuChain Technology</h5>
              <h2 className="text-center white mb-lg-4 mb-3">The fastest, safest, and most economical path to building value.</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-4 text-center">
              <div className="trusted-value">
                <div className="icon mb-4">
                  <img src="assets/images/icon-trusted1.png" alt="" className="img-fluid "/>
                </div>
                <h3 className="red mb-4">200K</h3>
                <h4 className="white mb-4">Confirmations<br className="d-none d-lg-block" /> Per Second</h4>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center">
              <div className="trusted-value">
                <div className="icon mb-4">
                  <img src="assets/images/icon-trusted2.png" alt="" className="img-fluid " />
                </div>
                <h3 className="red mb-4">0.000005 Sec</h3>
                <h4 className="white mb-4">Block<br className="d-none d-lg-block" /> Time</h4>
              </div>
            </div>
            <div className="col-12 col-md-4 text-center">
              <div className="trusted-value">
                <div className="icon mb-4">
                  <img src="assets/images/icon-trusted3.png" alt="" className="img-fluid " />
                </div>
                <h3 className="red mb-4">0.1 NUC</h3>
                <h4 className="white mb-4">Lowest <br className="d-none d-lg-block" /> Fees</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="latest-insights">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 text-center">
              <span className="badge white px-3 mb-md-4 mb-3 text-center">Subscribe</span>
              <h2 className="dk-blue mb-md-5 mb-3">Unlock the latest news and insights</h2>
              <NewsLetterForm />
            </div>
          </div>
          <div className="d-md-flex d-block align-items-stretch ">
            <div className="news-insights col-md-4 pink">
              <a href="/contact-us">
                <div>
                  <h5 className="white mb-lg-5 mb-4 pt-lg-3 pt-0">CONNECT</h5>
                  <h3 className="white">Reach out</h3>
                  <h6 className="white">Connect with us to initiate a conversation. Come share your vision and challenges and we will create a customized solution. Our team is committed to provide you with the most competitive product.</h6>
                </div>
              </a>
            </div>
            <div className="news-insights col-md-4 blue">
              <a href="/nucode">
                <div>
                  <h5 className="white text-uppercase mb-lg-5 mb-4 pt-lg-3 pt-0">Integrate</h5>
                  <h3 className="white">Build with us</h3>
                  <h6 className="white">We provide developer-friendly platform. Join us to unlock the full potential of Blockchain technology with customized tools for creating innovative applications. Benefit from comprehensive support including training and education.</h6>
                </div>
              </a>
            </div>
            <div className="news-insights col-md-4 black">
              <a target='_blank' href="http://162.0.210.91:82/">
                <div>
                  <h5 className="white text-uppercase mb-lg-5 mb-4 pt-lg-3 pt-0">validate</h5>
                  <h3 className="white">Be a Validator</h3>
                  <h6 className="white">Contribute to NuChain&apos;s robust architecture by actively participating in our Validator network. We will treat you as a responsible stakeholder and incentivize your involvement with attractive APY.</h6>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="discover-connection">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h6 className="white text-center">What&apos;s Trending</h6>
              <h2 className="white text-center">
                Stay ahead with the latest trend
              </h2>
              <div className="d-md-flex d-block connect-list pt-lg-5 pt-3">
                <div className="card-box connection1 d-flex align-items-start flex-column col-md-4 px-lg-5 px-3">
                  <span className="badge bg-light text-dark px-3 mb-md-4 mb-3 text-center mt-auto">Unleash</span>
                  <h3 className="white mb-3">Welcome to NuChain</h3>
                  <p className="white mb-0 pb-md-5 pb-3">Unleash the power of Blockchain with NuChain: unmatched speed (200, 000 TPS!), scalable solutions, & user-friendly CDK. Build faster, join the community, and transform your industry.</p>
                </div>

                <div className="card-box connection2 d-flex align-items-start col-md-4 flex-column px-lg-5 px-3">
                  <span className="badge bg-light text-dark px-3 mb-md-4 mb-3 text-center mt-auto">Discover</span>
                  <h3 className="white mb-3">Discover the NuChain </h3>
                  <p className="white mb-0 pb-md-5 pb-3">NuChain empowers industries with scalable Blockchain solutions for secure voting, faster banking, tokenization, & streamlined travel experiences.</p>
                </div>

                <div className="card-box connection3 d-flex align-items-start col-md-4 flex-column px-lg-5 px-3">
                  <span className="badge bg-light text-dark px-3 mb-md-4 mb-3 text-center mt-auto">Explore</span>
                  <h3 className="white mb-3">Explore the ecosystem</h3>
                  <p className="white mb-0 pb-md-5 pb-3">Unleash your Blockchain vision on NuChain: Blazing speed (200, 000 TPS), customizable platform, & thriving dev community. Build faster, shape the future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}