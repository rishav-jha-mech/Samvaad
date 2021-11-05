import React from 'react'
import './css/ScrollToTop.css'

const ScrollToTop = () => {
    const [visible, setVisible] = React.useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 50) {
            setVisible(true)
        }
        else if (scrolled <= 50) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <h3
            className="fa fa-arrow-up"
            onClick={scrollToTop} 
            style={{display: visible ? 'block' : 'none'}}
        />
    );
}

export default ScrollToTop