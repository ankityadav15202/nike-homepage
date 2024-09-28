import Nav from './Nav'
// import { Link } from 'react-router-dom'


function Menu(){
    return(
        <>
        <Nav/>
        <main>
            <div className="section1">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="section1-button">
                <button><span>Shop Now</span></button>
                <button><span>Category</span></button>
            </div>

            <div className="shopping">
                <p>Also avilable on</p>
                <div className="brandicons">
                <img src="./images/flipkart.png" alt="flipkart" />
                <img src="./images/amazon.png" alt="amazon" />
                </div>
            </div>
            </div>
            <div className="section2">
            <img src="./images/show.png" alt="" />
            </div>
        </main>
        </>
    )
}

export default Menu