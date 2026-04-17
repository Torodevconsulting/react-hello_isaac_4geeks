const Card = () => {
    return (
        <div className="card">
            <img src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}

export default Card;