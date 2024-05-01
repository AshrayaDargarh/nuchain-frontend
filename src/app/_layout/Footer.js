import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12 col-lg-3 mb-4 mb-md-0">
            <a className="logo-container" href="/">
              <div className="d-flex flex-column gap-3 align-items-start">
                <div>
                  <img
                    src="assets/images/footer-logo.png"
                    alt=""
                    className="img-fluid logo-rotate"
                  />
                </div>
                <h3>NU<span>CHAIN</span></h3>
              </div>
            </a>
          </div>

          <div className="col-12 col-lg-9 mb-4 mb-md-0">
            <div className="row">

              <div className="col-12 col-lg-3 mb-4 mb-md-0">
                <h6 className="mb-4">Legal</h6>
                <ul className="legal-list list-unstyled">
                  <li className="mb-2">
                    <a href="/terms-of-service">Terms of Service</a>
                  </li>
                  <li className="mb-2">
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                  <li className="mb-2">
                    <a href="/cookies-policy">Cookies Policy</a>
                  </li>
                  <li>
                    <a href="/data-processing">Data Protection</a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-lg-3 mb-4 mb-md-0">
                <h6 className="mb-4">Product</h6>
                <ul className="legal-list list-unstyled">
                  <li className="mb-2">
                    <a target="_blank" href="http://162.0.210.91:83/">NuScan</a>
                  </li>
                  <li className="mb-2">
                    <a target="_blank" href="http://162.0.210.91:82/">Validator</a>
                  </li>
                  <li className="mb-2 ">
                    <a href="/nucode">NuCode</a>
                  </li>
                  <li className="mb-2 not-active-link">
                    <a href="#">NuWallet - Coming Soon</a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-lg-3 mb-4 mb-md-0">
                <h6 className="mb-4">Company</h6>
                <ul className="legal-list list-unstyled">
                  <li className="mb-2">
                    <a href="/why-nuchain">About Us</a>
                  </li>
                  <li className="mb-2">
                    <a href="/careers">Work With Us</a>
                  </li>
                  <li className="mb-2">
                    <a href="/blogs">Blog & News</a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-lg-3 mb-4 mb-md-0">
                <h6 className="mb-4">Resources</h6>
                <ul className="legal-list list-unstyled">
                  <li className="mb-2">
                    <a href="https://nuchain.gitbook.io/">Documentation</a>
                  </li>
                  <li className="mb-2">
                    <a href="/assets/documents/Whitepaper.pdf">Whitepaper</a>
                  </li>
                  <li className="mb-2">
                    <a href="/assets/documents/LitePaper.pdf">Lite Paper</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-12 col-md-3">
            <div className="social-icon">
              <ul className="list-unstyled">
                <li className='mx-2'>
                  <a href="https://www.facebook.com/profile.php?id=61556651310633" style={{ color: "#15013f" }}>
                    <i className="fa-brands fa-facebook fa-xl" />
                  </a>
                </li>
                <li className='mx-2'>
                  <a href="https://t.me/NuChainco" style={{ color: "#15013f" }}>
                    <i className="fa-brands fa-telegram fa-xl" />
                  </a>
                </li>
                <li className='mx-2'>
                  <a href="https://www.linkedin.com/company/nuchain/" style={{ color: "#15013f" }}>
                    <i className="fa-brands fa-linkedin fa-xl" />
                  </a>
                </li>
                <li className='mx-2'>
                  <a href="https://x.com/NuChainOfficial" style={{ color: "#15013f" }}>
                    <i className="bi bi-twitter-x fa-xl" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-8">
            <p className="small">Copyrights 2024 NuChain all rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
