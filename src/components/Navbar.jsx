/*| Using "ReactComponent as Name of components" is compulsory while importing assets as component|*/
import { useNavigate, useLocation } from "react-router-dom"
import {ReactComponent as OfferIcon} from '../assets/svg/localOfferIcon.svg'
import {ReactComponent as ExploreIcon} from '../assets/svg/exploreIcon.svg'
import {ReactComponent as ProfileOutlineIcon} from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
    const navigate = useNavigate() //navigate is used to navigate to the different internal paths
    const location = useLocation() //location is used to tell the currect path/loc of the website

    /*| This function is created so that color of icons can change according to current page path |*/
    const pathMatchRoute = (route) => {
        if(route === location.pathname)
            return true;
    }

    return (
        <footer className="navbar">
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem">
                        <ExploreIcon 
                            fill = {pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
                            width="36px" height="36px" onClick = {() => {navigate('/')}}
                        />
                        <p 
                            className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}
                        >
                            Explore
                        </p>
                    </li>
                    <li className="navbarListItem">
                        <OfferIcon 
                            fill = {pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
                            width="36px" height="36px" onClick = {() => {navigate('/offers')}}
                        />
                        <p
                            className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'navbarListItemName'}
                        >
                            Offers
                        </p>
                    </li>
                    <li className="navbarListItem">
                        <ProfileOutlineIcon 
                            fill = {pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
                            width="36px" height="36px" onClick = {() => {navigate('/profile')}}/
                        >
                        <p
                            className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}
                        >
                            Profile
                        </p>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Navbar