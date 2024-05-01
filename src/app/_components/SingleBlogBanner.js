import PropTypes from 'prop-types';

SingleBlogBanner.propTypes = {
    sectionname: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    imageurl: PropTypes.string,
};

export default function SingleBlogBanner({ imageurl, text, sectionname, heading, subheading, ...other }) {
    return (

        <section className="single-section-banner" style={{ backgroundImage: "url(assets/images/blog-banner.png)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="container-xxl d-flex justify-content-center align-items-center">
                <div className="col col-12 col-md-10 text-center">
                    <h1 className="white" style={{fontSize: "calc(2rem + 0.9vh)"}}>Web3 Labs Joins Hyperledger Foundation, Reinforcing Commitment to Hyperledger Besu Development</h1>
                    <p className="white mb-lg-5 mb-3">Published 5 Days Ago</p>
                </div>
            </div>
        </section>
    )
}