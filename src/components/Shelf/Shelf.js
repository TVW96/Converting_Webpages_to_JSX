import React from 'react';
import './Shelf.sass';
import { ShelfItem } from './ShelfItem';

function Shelf() {

    const hirayasumi = {
        image: "https://dw9to29mmj727.cloudfront.net/products/197474924X.jpg",
        title: "Hirayasumi, Vol. 3",
        productType: "Manga",
        likes: "+12"
    };

    const chainsaw = {
        image: "https://dw9to29mmj727.cloudfront.net/products/197474874X.jpg",
        title: "Chainsaw Man, Vol. 16",
        productType: "Manga",
        likes: "+68"
    };
    const afterGod = {
        image: "https://dw9to29mmj727.cloudfront.net/products/1974749703.jpg",
        title: "After God, Vol. 1",
        productType: "Manga",
        likes: "+27"
    };
    const uzumaki = {
        image: "https://dw9to29mmj727.cloudfront.net/products/782009248323.jpg",
        title: "UZUMAKI: Animated TV Series",
        productType: "TV Series",
        likes: "+5"
    };

    return (
        <section>
            <div className='shelf-Wrapper'>
                <div className='shelf-Header'>
                    <h3>Hot Viz releases</h3>
                    <div className='shelf-Header-Link'>
                        <a aria-label="see all Hot Viz releases" href='#' className="shelf-aria">See all {'>'}</a>
                    </div>
                </div>
                <div className='shelf-Content'>
                    <ShelfItem
                        image={hirayasumi.image}
                        title={hirayasumi.title}
                        productType={hirayasumi.productType}
                        likes={hirayasumi.likes}
                    />
                    <ShelfItem
                        image={chainsaw.image}
                        title={chainsaw.title}
                        productType={chainsaw.productType}
                        likes={chainsaw.likes}
                    />
                    <ShelfItem
                        image={afterGod.image}
                        title={afterGod.title}
                        productType={afterGod.productType}
                        likes={afterGod.likes}
                    />
                    <ShelfItem
                        image={uzumaki.image}
                        title={uzumaki.title}
                        productType={uzumaki.productType}
                        likes={uzumaki.likes}
                    />
                </div>
            </div>
        </section>
    )
}

export default Shelf