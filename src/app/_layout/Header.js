const Header = () => {

    return (
        <header>
            <div className="container-xxl d-flex justify-content-center align-items-center">
                <input type="checkbox" name="check" id="check" />
                <a className="logo-container" href="/">
                    <div className="d-flex flex-row gap-3 align-items-center">
                        <img
                            src="assets/images/footer-logo.png"
                            alt=""
                            className="img-fluid logo-rotate"
                        />
                        <h3>NU<span>CHAIN</span></h3>
                    </div>
                </a>
                <div className="nav-btn">
                    <div className="nav-link1s">
                        <ul>
                            <li className="nav-link1" style={{ "--i": ".6s" }}>
                                <a href="#">About Us<i className="fas fa-caret-down" /></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <a href="/why-nuchain">Why Nuchain</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/the-team">The Team</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/licences">Licences</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/careers">Careers</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/contact-us">Contact Us</a>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-link1" style={{ "--i": ".7s" }}>
                                <a href="#">Services<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <a href="/e-governance">E-governance</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/banking-and-finance">Banking and Finance</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/travel">Travel</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/rwa">RWA</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/gaming-and-entertainment">Gaming & Entertainment</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/tokenization">Tokenization</a>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-link1" style={{ "--i": ".8s" }}>
                                <a href="#">Product<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <a target="_blank" href="http://162.0.210.91:83/">NuScan</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a target="_blank" href="http://162.0.210.91:82/">Validator</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/nucode">NuCode</a>
                                        </li>

                                        <li className="dropdown-link">
                                            <a href="#">NuWallet - Coming Soon</a>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-link1" style={{ "--i": ".9s" }}>
                                <a href="#">Ecosystem<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <a href="/partners">Partners</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/community">Community</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/media">Media Kit</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/ambassadors">Ambassadors</a>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-link1" style={{ "--i": "1.1s" }}>
                                <a href="#">Resources<i className="fas fa-caret-down"></i></a>
                                <div className="dropdown">
                                    <ul>
                                        <li className="dropdown-link">
                                            <a href="/blogs">Blogs & Press</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a target="_blank" href="/assets/documents/Whitepaper.pdf">White Paper</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a target="_blank" href="/assets/documents/LitePaper.pdf">Lite Paper</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a target="_blank" href="https://nuchain.gitbook.io/">Documentation</a>
                                        </li>
                                        <li className="dropdown-link">
                                            <a href="/support">FAQs</a>
                                        </li>
                                        <div className="arrow"></div>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-link1" style={{ "--i": "1.1s" }}>
                                <div className="mx-1" style={{ border: "1px solid #A5398B", padding: "10px" }}>
                                    <a target="_blank" href="http://162.0.210.91:83/buy-nucredit" className="signin-btn" style={{ color: "#A5398B" }}>Get NuCredits</a>
                                </div>
                            </li>
                            <li className="nav-link1" style={{ "--i": "1.1s" }}>
                                <div className="mx-1" style={{ background: "#A5398B", padding: "10px" }}>
                                    <a href="/contact-us" className="signin-btn">Book Free Consultation</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="hamburger-menu-container">
                    <div className="hamburger-menu">
                        <div></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
