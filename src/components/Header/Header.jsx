import { useEffect, useRef, useState } from 'react';
import './header.scss'
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logo-film.png'
import person from '../../assets/persona.png'

const headerNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
];

const Header = () => {

    const { pathname } = useLocation();
    const headerRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const active = headerNav.findIndex(e => e.path === pathname);

    const handleModalOpen = () => {
        console.log('Opening modal, showModal:', !showModal);
        setShowModal(true);
    };

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <>
            <nav ref={headerRef} className="header">
                <div className="header__wrap container">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <a href="/">Quickbet</a>
                    </div>
                    <ul className="header__nav mt-4">
                        {
                            headerNav.map((e, i) => (
                                <li key={i} className={`${i === active ? 'active' : ''}`}>
                                    <a href={e.path}>
                                        {e.display}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="logo">
                        <img
                            src={person}
                            alt="User"
                            onClick={handleModalOpen}
                            style={{ cursor: 'pointer' }}
                        />
                    </div>
                </div>
            </nav>


        </>
    );
}

export default Header;