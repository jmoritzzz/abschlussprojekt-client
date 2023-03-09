import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import background from './skyline_frasier.svg';
import video from "./assets/frasier_intro_title.mp4";
import Quotes from './components/Quotes';

export default function Home() {

    const [hover, setHover] = useState(false);

    return (
        <>
            <div className='home-container'>
                <nav>
                    {/* <NavLink className="image-link" to="/Seasons">
                        <img className='skyline' src={background} alt="Skyline" />
                    </NavLink> */}

                    <NavLink className="image-link" to="/Seasons">
                        <div className="title-wrapper-home">

                            {hover ? (
                                <video autoPlay src={video} onEnded={() => setHover(false)} />
                            ) : (
                                <img
                                    className="skyline"
                                    src={background}
                                    alt="Skyline"
                                    onMouseEnter={() => setHover(true)}
                                    onMouseLeave={() => setHover(false)}
                                />
                            )}
                        </div>
                    </NavLink>

                </nav>
                <div className='quote-container'>

                    <p className='quote-text'>
                        <Quotes />

                    </p>
                </div>
                {/* <p>"Oh, Das ist ein Dekorationstil. Er wird eklektisch genannt."</p> */}
            </div>
        </>
    );
}

