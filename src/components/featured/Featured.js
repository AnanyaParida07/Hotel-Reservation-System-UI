import "./featured.css"

const Featured = () => {
    return (
        <div className="featured">
        <div className="featuredItem">
            <img className="featuredImg" src="https://www.dhauli.net/images/g2.jpg"></img>
            <div className="featuredTitles">
                <h1>Bhubaneswar</h1>
                <h2>129 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src="https://t4.ftcdn.net/jpg/04/82/09/83/360_F_482098383_n6JMrdv1bBwHYXX27qQGalGJ97xa1eK2.jpg"></img>
            <div className="featuredTitles">
                <h1>Puri</h1>
                <h2>129 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img className="featuredImg" src="https://hblimg.mmtcdn.com/content/hubble/img/digha/mmt/activities/m_New%20Digha%20Beach-1_l_480_640.jpg"></img>
            <div className="featuredTitles">
                <h1>Digha</h1>
                <h2>129 properties</h2>
            </div>
        </div>
            
        </div>
    );
}

export default Featured;
