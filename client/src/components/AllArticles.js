import React from 'react'
import Logo from '../images/logo-dark.png'
import articleTech from '../images/articles_banner.png'
import { withRouter } from 'react-router-dom';
import Footer from '../components/Footer'


const AllArticles = (props) => {
    return (
        <div className="allarticles__body">
            <div className="userprofile__topnav">
                <img className="allarticles__logo" alt="Iterator logo" src={Logo} />
                <button className="allarticles__backbtn" onClick={props.history.goBack}>Back to Profile</button>
            </div>
            <div className="articles_banner">
                <img src={articleTech} alt="" className="articles__banner-photo" />
            </div>
            <div className="allarticles__articles--div">
                {props.renderAllArticles()}
            </div>
            <Footer />
        </div>
    )
}

export default withRouter(AllArticles)