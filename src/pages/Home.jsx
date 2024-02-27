import React from 'react';
import Card from '../components/Card';
 
function Home({
    items,
    searchValue,
    setSearchValue,
    onChangeSearchInput, 
    onAddToFavorite,
    onAddToCart,
    isLoading
}) {
    const renderItems = () => { 
        const filtredItems = items.filter((item) =>
           item.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        return (isLoading ? [...Array(8)] : filtredItems).map((item, index) => (
           <Card
               key={index}
               onFavorite={(obj) => onAddToFavorite(obj)}
               onPlus={(obj) => onAddToCart(obj)}
               loading={isLoading}
               {...item}
           />
           ));
    };

    return(
        <div className="content d-flex flex-column align-center">
            <>
               <img className="banner" src="img/banner.png" alt="Banner" />
            </>
            <div className="search-wrapper d-flex align-center justify-between mb-50">
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все ключи'}</h1>
                <div className="search-block d-flex">
                    <img src="img/search.svg" alt="Search" />
                    {searchValue && (
                    <img
                        onClick={() => setSearchValue('')}
                        className='clear cu-p'
                        src="img/btn-remove.svg"
                        alt="Clear" 
                    />
                    )}
                    <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..." />
                </div>
            </div>
            <div className="d-flex flex-wrap justify-between">{renderItems()}</div>
        </div>
    );
}

export default Home;