import PropTypes from 'prop-types';

InnerBanner.propTypes = {
    sectionname: PropTypes.string,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    imageurl: PropTypes.string,
};

export default function InnerBanner({ imageurl, text, sectionname, heading, subheading, ...other }) {
    return (

        <section className="inner-section-banner" style={{ backgroundImage: `url(${imageurl})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="container-xxl">
                <div className="row">
                    <div className="col col-md-8">
                        <div className="" >
                            <h5 className="white">{sectionname}</h5>
                            <h1 className="white">{heading}</h1>
                            <h4 className="white mb-lg-5 mb-3">{subheading}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}