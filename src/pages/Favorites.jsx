import React from 'react';
import { Link } from "react-router-dom";

import Card from '../components/Card';
import AppContext from '../context';

import '../index.scss';
 
function Favorites() {
    const { favorites, onAddToFavorite } = React.useContext(AppContext);

    return(
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Избранное</h1>
            </div>

        {favorites.length > 0 ? (
            <div className="d-flex flex-wrap">
            {favorites.map((item, index) => (
                <Card
                    key={index}
                    favorited={true}
                    onFavorite={onAddToFavorite}
                    {...item}
                />
            ))}
            </div>
        ) : (
            <div className="empty">
                <img className='mb-20' src="img/empty-favorites.svg" alt='Empty' />
                <h2 className='mb-20'>У вас нет избранных товаров</h2>
                <Link to="">
                    <button className="lavenderButton">
                        <img src='img/arrow.svg' alt='Arrow' />Вернуться назад
                    </button>
                </Link>
            </div>
        )}
        </div>
    );
}

export default Favorites;