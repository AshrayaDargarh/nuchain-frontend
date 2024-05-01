import PropTypes from 'prop-types';

TopBanner.propTypes = {
    content: PropTypes.string,
};

export default function TopBanner({ content }) {
    return (
        <section className='top-banner-design'>
            <div className="container-xxl">
                <div className='banner-text-design text-center'>
                    <p>{content}</p>
                </div>
            </div>
        </section>
    )
}