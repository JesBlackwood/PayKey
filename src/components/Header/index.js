import React from 'react';
import { Link } from "react-router-dom";

import { useCart } from '../../hooks/useCart';

import headerStyles from './Header.module.scss';

function Header(props) {
  const { totalPrice } = useCart();

    return(
      <header className="d-flex justify-between align-center">
        <Link to="">
          <div className="d-flex flex-column align-center">
            <img className={headerStyles.headerLogo} src="img/logo.svg" alt="Logotype" />
            <p className={headerStyles.logoText}>Магазин ключей Steam</p>
          </div>
        </Link>
        <ul className="d-flex align-center">
          <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img className={headerStyles.headerCart} src="img/cart.svg" alt="Корзина" />
            <span>{totalPrice} руб.</span>
          </li>
          <li className="mr-30 cu-p">
            <Link className='d-flex align-center' to="favorites">
              <img className={headerStyles.headerHeart} src="img/heart.svg" alt="Закладки" />
              <span>Избранное</span>
            </Link>
          </li>
          <li className="cu-p">
            <Link className='d-flex align-center' to="orders">
              <img className={headerStyles.headerUser} src="img/user.svg" alt="Пользователь" />
              <span>Профиль</span>
            </Link>
          </li>
        </ul>
      </header>
    );
}

export default Header;