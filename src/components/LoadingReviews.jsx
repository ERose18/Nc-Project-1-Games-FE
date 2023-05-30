import React from "react";

const LoadingReviews = () => {
    return <section className="loading">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={require('../resources/loading-animation1.gif')} alt="Loading animation" />
        <p className='review-loading-writing' style={{ marginTop: '10px' }}>Reviews Loading...</p>
        </div>
    </section>
}

export default LoadingReviews;