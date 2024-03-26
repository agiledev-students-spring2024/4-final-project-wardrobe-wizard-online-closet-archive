import React from 'react';
import '../styles/OutfitDetail.css'

function OutfitDetail() {
    return (
        <div classname="Outfit Detail">
            <div className='banner'>
                <h1>WARDROBE WIZARD</h1>
                <h3>Outfit Details</h3>
            </div>
            <div className="grid">
                <div className="design">
                    <img src="/image1.jpg" alt="Image 1" />
                    <p>Name</p>
                    <p>Brand</p>
                    <p>Type</p>
                </div>
                <div className="design">
                    <img src="/image2.jpg" alt="Image 2" />
                    <p>Name</p>
                    <p>Brand</p>
                    <p>Type</p>
                </div>
                <div className="design">
                    <img src="/image3.jpg" alt="Image 3" />
                    <p>Name</p>
                    <p>Brand</p>
                    <p>Type</p>
                </div>
                <div className="design">
                    <img src="/image4.jpg" alt="Image 4" />
                    <p>Name</p>
                    <p>Brand</p>
                    <p>Type</p>
                </div>
            </div>
            <p> <strong style={{textDecoration: 'underline'}}> Item Detail</strong></p> 
        </div>
    );
}

export default ItemDetail;
<p> <strong style={{textDecoration: 'underline'}}> Item Detail</strong></p>