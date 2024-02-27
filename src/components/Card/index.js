import React from 'react';
import ContentLoader from "react-content-loader";

import AppContext from '../../context';

import cardStyles from './Card.module.scss';

function Card({
    id,
    title,
    price,
    imageUrl,
    onFavorite,
    onPlus,
    favorited = false,
    loading = false
}) {
    const { isItemAdded } = React.useContext(AppContext);
    const [isFavorite, setIsFavorite] = React.useState(favorited);
    const obj = { id, parentId: id, title, price, imageUrl };

    const onClickPlus = () => {
        onPlus(obj);
    };

    const onClickFavorite = () => {
        onFavorite(obj);
        setIsFavorite(!isFavorite);
    };

    return(
        <div className={cardStyles.card}>
            {
                loading ?
                (  
                <div className={cardStyles.loader}>
                    <ContentLoader 
                        speed={2}
                        width={250}
                        height={300}
                        viewBox="0 0 250 300"
                        backgroundColor="#252222"
                        foregroundColor="#252222">
                        <rect x="22" y="20" rx="10" ry="10" width="206" height="162" /> 
                        <rect x="41" y="203" rx="10" ry="10" width="167" height="15" />
                        <rect x="78" y="222" rx="10" ry="10" width="93" height="15" />
                        <rect x="42" y="267" rx="10" ry="10" width="87" height="15" />
                        <rect x="177" y="250" rx="10" ry="10" width="32" height="32" />
                    </ContentLoader>
                </div>
                ) : (
                <>
                    {onFavorite && (
                      <div className={cardStyles.favorite} onClick={onClickFavorite}>
                          <img src={isFavorite ? "img/liked.svg" : "img/unliked.svg"} alt="Unliked" />
                      </div>
                    )}
                    <img width="100%" src={imageUrl} alt="Games"/>
                    <div className={cardStyles.lower}>
                        <h5>{title}</h5>
                        <div className={cardStyles.price}>
                            <div className="d-flex flex-column">
                                <span>Цена:</span>
                                <b>{price} руб.</b>
                            </div>
                            {onPlus && (
                            <img
                                className={cardStyles.plus}
                                onClick={onClickPlus}
                                src={isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"}
                                alt="Plus"
                            />
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Card;