import { NavLink } from 'react-router-dom';
import background from './skyline_frasier.svg';
import Quotes from './quotes';

export default function Home() {
    return (
        <>
            <div className='home-container'>
                <nav>
                    <NavLink className="image-link" to="/Seasons">
                        <img className='skyline' src={background} alt="Skyline" /> 
                    </NavLink>
                </nav>
                <p className='quote-text'>
                    <Quotes />
                </p>
                {/* <p>"Oh, Das ist ein Dekorationstil. Er wird eklektisch genannt."</p> */}
            </div>
        </>
    );
}

