import { useState } from "react"
import { NavLink } from "react-router-dom";
import {Menu, X} from "lucide-react"; /* Burger menu and close icon */

function Navbar() {
  
    const [burgerOpen, setBurgerOpen] = useState(false);

    const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
    }

    const closeBurger = () => {
        setBurgerOpen(false);
    }

    /* Navbar Links */
    const navigation = [
        {name: 'Projects', href: '/projects'},
        {name: 'Contact', href: '/contact'},
        {name: 'About', href: '/about'}
    ]

    
    const NavLinks = () => {
        return (
            <>
                {/* Map links to NavLinks */}
                {navigation.map((item) => (
                    <NavLink
                    onClick={closeBurger} 
                    key={item.name}
                    to={item.href}

                    /* Check if NavLink has active property */
                    className={({ isActive }) => {

                        return (
                            
                            /* Set text to grey if NavLink is active, if not, white */
                            'px-8 my-4 md:my-2 hover:text-fuchsia-700 font-bold' + 
                            (isActive ? ' text-gray-500' : ' text-white')
                        ) 

                    }}
                    >{item.name}</NavLink>
                    
                ))}
            </>
        )
    } 

    return (
    <div className="flex justify-between items-center bg-neutral-800 align-middle px-7 py-5 flex-wrap"> {/* Flex wrap for dropdown menu */}

        {/* Left Side of Navbar */}
        <div className="flex items-center justify-between">

            <NavLink onClick={closeBurger} className="mr-auto text-2xl md:text-3xl no-underline text-white hover:text-fuchsia-700 font-bold" to="/">charlescrane.dev</NavLink>

        </div>

        {/* Navlinks shown only on larger screens */}
        <div className="hidden md:flex justify-between items-center">
            <NavLinks />
        </div>

        {/* Menu burger icon only visible on sm screens */}
        <div className="flex items-center justify-center md:hidden">
            <button onClick={toggleBurger}>{burgerOpen ? <X color="white"/> : <Menu color="white"/>}</button>
        </div>

        {/* Shows dropdown if state is on */}
        {burgerOpen && (
            <div className="flex flex-col items-center basis-full mt-4">
                <NavLinks />
            </div>
        )}

    </div>
  )
}

export default Navbar