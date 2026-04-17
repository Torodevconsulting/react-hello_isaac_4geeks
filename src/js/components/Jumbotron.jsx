const Jumbotron = () => {
    return(
        <div className="jumbotron p-5 mb-4 bg-light rounded-0 text-start text-black">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome</h1>
                <p className="fs-4">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <button className="btn btn-primary btn-lg" type="button">Contact us</button>
            </div>
        </div>
    )
}

export default Jumbotron;