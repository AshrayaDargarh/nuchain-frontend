import PropTypes from 'prop-types';

CalltoAction.propTypes = {
    cta: PropTypes.string,
};

export default function CalltoAction({ cta }) {
    return (
        <section className='cta-design' style={{ backgroundImage: "url(assets/images/calltoaction.png)" }}>
            <div className='container-xxl d-flex flex-md-row flex-column justify-content-between align-items-center'>
                <p>{cta}</p>
                <a href="/contact-us" className="btn-pink cta-button-design">Book Free Consultation</a>
            </div>
        </section>
    )
}