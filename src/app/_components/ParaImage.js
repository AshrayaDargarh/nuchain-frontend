import PropTypes from 'prop-types';

ParaImage.propTypes = {
    image: PropTypes.string,
    content: PropTypes.object,
    position: PropTypes.string,
    background: PropTypes.string,
};

export default function ParaImage({ image, content, position, background }) {

    const backgroundcolor = (
        background === "white" ? "background-white" : "background-grey"
    );

    const columnChangeText = (
        position === "left" ? "order-1 order-md-2" : ""
    );

    const columnChangeImage = (
        position === "left" ? "order-2 order-md-1" : ""
    );

    const textSection = (
        <div className={`col col-12 col-md-6 d-flex align-items-center mb-4 mb-md-0 ${columnChangeText}`}>
            <div className='para-image-text-box'>
                {content}
            </div>
        </div>
    );

    const imageSection = (
        <div className={`col col-12 col-md-6 d-flex align-items-center justify-content-center mb-4 mb-md-0 ${columnChangeImage}`}>
            <div className='para-image-image-box' style={{ backgroundImage: "url(assets/images/preload.png)" }}>
                <img src={image} alt='image' />
            </div>
        </div>
    )

    return (
        <section className={`section-spacing-design ${backgroundcolor}`}>
            <div className="container-xxl">
                {position === 'right' ? (
                    <div className='row'>
                        {textSection}
                        {imageSection}
                    </div>
                ) : (
                    <div className='row'>
                        {imageSection}
                        {textSection}
                    </div>
                )}
            </div>
        </section>
    )
}