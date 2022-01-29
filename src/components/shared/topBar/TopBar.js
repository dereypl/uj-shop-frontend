import React from 'react';
import useBasket from "../../hooks/useBasket";
import {useMatch, useNavigate} from "react-router-dom";
import {Basket, CurrentUser, FixedBar, ShoppingCartIconStyled} from "./TopBar.styles";

const TopBar = () => {
    const {itemsCount} = useBasket()
    let navigate = useNavigate();

    const isBasketRoute = useMatch("basket")
    return (
        <FixedBar>
            <CurrentUser>
                Testowy Użytkownik
            </CurrentUser>
            {!isBasketRoute && <Basket itemsCount={itemsCount} onClick={() => itemsCount ? navigate('basket') : null}>
                <ShoppingCartIconStyled/>
                {itemsCount ? `(${itemsCount})  Przejdź do koszyka` : '  Koszyk pusty'}
            </Basket>}
        </FixedBar>
    );
};

export default TopBar;