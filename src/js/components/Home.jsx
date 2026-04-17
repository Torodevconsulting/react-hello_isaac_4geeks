import Nav from "./Nav";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//create your first component
const Home = () => {
    return (
        <div>
            <Nav />
            <div className="container">
                <Jumbotron />
                <div className="row">
                    <div className="col-md-3"><Card /></div>
                    <div className="col-md-3"><Card /></div>
                    <div className="col-md-3"><Card /></div>
                    <div className="col-md-3"><Card /></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;