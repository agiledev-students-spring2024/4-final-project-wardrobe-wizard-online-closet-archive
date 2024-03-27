import React from 'react';
import '../styles/ItemDetail.css'

function ItemDetail() {
    return (
        <div classname="Item Detail">
            <div className='banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Item Details</h3>
                <img src="item_image.jpg" alt="Item Image" />
                <p> <strong style={{textDecoration: 'underline'}}> Item Detail</strong></p>
                <p>Brand Name</p>
                <p>Type</p>
                <p>Color</p>
                <p>Notes</p>
            </div>
        </div>
    );
}

export default ItemDetail;

