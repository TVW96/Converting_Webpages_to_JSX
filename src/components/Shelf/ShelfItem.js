import React from 'react';
import PropTypes from 'prop-types';
import "./ShelfItem.sass";

function ShelfItem({ image, title, productType, likes }) {
    return (
        <div className='shelf-Item-Wrapper'>
            <div className='shelf-Item'>
                <div className="shelf-Thumb">
                    <div className='shelf-Item-Likes'>
                        🤍 {likes}
                    </div>
                    <img src={image} alt={title} />
                </div>
                <div className="shelf-Item-Info">
                    <h4>{title}</h4>
                    <p>{productType}</p>
                </div>
            </div>
        </div>
    );
}

ShelfItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    productType: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
};

export { ShelfItem };
