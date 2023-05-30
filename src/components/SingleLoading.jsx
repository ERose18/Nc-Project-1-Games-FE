
const SingleLoading = () => {
    return <section className="loading">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={require('../resources/loading-animation1.gif')} alt="Loading animation" />
        <p className='review-loading-writing'>Review is Loading...</p>
        </div>
    </section>
}

export default SingleLoading;