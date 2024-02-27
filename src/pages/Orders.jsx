import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import Card from '../components/Card';

import '../index.scss';
 
function Orders() {
    const [orders, setOrders] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://c11118ef405b6342.mokky.dev/orders');
                setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
                setIsLoading(false);
            } catch (error) {
                alert('Ошибка при запросе заказов');
                console.error(error);
            }
        })();
    }, []);

    return(
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои заказы</h1>
            </div>

            {orders.length > 0 ? (
                <div className="d-flex flex-wrap">
                {(isLoading ? [...Array(8)] : orders).map((item, index) => (
                    <Card key={index} loading={isLoading} {...item} />
                ))}
                </div>
            ) : (
                <div className="empty">
                    <img className='mb-20' src="img/empty-orders.svg" alt='Empty' />
                    <h2 className='mb-20'>У вас нет заказов</h2>
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

export default Orders;