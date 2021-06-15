import { useDispatch } from 'react-redux';
import { ACTIONS } from './reducer';

export const useLingeriesActions = () => {
  const dispatch = useDispatch();
  return {
    addFavorite: id => dispatch({
      type: ACTIONS.ADD_FAVORITE,
      id,
    }),
    removeFavorite: id => dispatch({
      type: ACTIONS.REMOVE_FAVORITE,
      id,
    }),
    addToCart: id => dispatch({
      type: ACTIONS.ADD_CART,
      id,
    }),
    removeFromCart: id => dispatch({
      type: ACTIONS.REMOVE_CART,
      id,
    }),
    clearCart: () => dispatch({
      type: ACTIONS.CLEAR_CART,
    }),
    addWaitRemoveFromCart: id => dispatch({
      type: ACTIONS.ADD_WAIT_REMOVE_FROM_CART,
      id,
    }),
    cancelRemoveFromCart: id => dispatch({
      type: ACTIONS.CANCEL_REMOVE_FROM_CART,
      id,
    }),
    clearWaitRemoveFromCart: () => dispatch({
      type: ACTIONS.CLEAR_WAIT_REMOVE_FROM_CART,
    }),
    setSingleBuy: id => dispatch({
      type: ACTIONS.SET_SINGLE_BUY,
      id,
    }),
    setFavoriteFilter: filter => dispatch({
      type: ACTIONS.SET_FAVORITE_FILTER,
      filter,
    }),
    setCartFilter: filter => dispatch({
      type: ACTIONS.SET_CART_FILTER,
      filter,
    })
  }
}
