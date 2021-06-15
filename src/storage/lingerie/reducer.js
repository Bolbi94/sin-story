import lingerieSets from '../../assets/lingerie';

export const ACTIONS = {
  ADD_FAVORITE: 'LINGERIES::ADD_FAVORITE',
  REMOVE_FAVORITE: 'LINGERIES::REMOVE_FAVORITE',
  ADD_CART: 'LINGERIES::ADD_CART',
  REMOVE_CART: 'LINGERIES::REMOVE_CART',
  CLEAR_CART: 'LINGERIES::CLEAR_CART',
  ADD_WAIT_REMOVE_FROM_CART: 'LINGERIE::ADD_WAIT_REMOVE_FROM_CART',
  CANCEL_REMOVE_FROM_CART: 'LINGERIE::CANCEL_REMOVE_FROM_CART',
  CLEAR_WAIT_REMOVE_FROM_CART: 'LINGERIE::CLEAR_WAIT_REMOVE_FROM_CART',
  SET_SINGLE_BUY: 'LINGERIES::SET_SINGLE_BUY',
  SET_FAVORITE_FILTER: 'LINGERIES::SET_FAVORITE_FILTER',
  SET_CART_FILTER: 'LINGERIES::SET_CART_FILTER',
};

const getInitialState = () => {
  const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
  const cartIds = JSON.parse(localStorage.getItem('cart')) || [];
  const favorites = lingerieSets.filter(lingerie => favoriteIds.includes(lingerie.id));
  const cart = lingerieSets.filter(lingerie => cartIds.includes(lingerie.id));
  const singleBuyId = JSON.parse(localStorage.getItem('singleBuy')) || '';
  const singleBuy = lingerieSets.find(lingerie => lingerie.id === singleBuyId);

  return {
    lingeries: lingerieSets,
    favorites,
    favoriteIds,
    cart,
    cartIds,
    goingToRemoveFromCart: [],
    singleBuy,
    favoriteFilter: false,
    cartFilter: false,
  }
}

const lingeriesReducer = (state = getInitialState(), action) => {
  const { lingeries, favorites, favoriteIds, cart, cartIds, goingToRemoveFromCart } = state;
  let newFavoties;
  let newFavoriteIds;
  let newCart;
  let newCartIds;
  let include;
  switch (action.type) {
    case ACTIONS.ADD_FAVORITE:
      include = favorites.filter(lingerie => lingerie.id === action.id).length;
      if (!include) {
        newFavoties = [...favorites, lingeries.find(lingerie => lingerie.id === action.id)];
        newFavoriteIds = [...favoriteIds, action.id];
        localStorage.setItem('favorites', JSON.stringify(newFavoriteIds));
      }
      return {
        ...state,
        ...(!include && {
          favorites: newFavoties,
          favoriteIds: newFavoriteIds,
        }),
      };
    case ACTIONS.REMOVE_FAVORITE:
      include = favorites.filter(lingerie => lingerie.id === action.id).length;
      if (include) {
        newFavoties = favorites.filter(lingerie => lingerie.id !== action.id);
        newFavoriteIds = favoriteIds.filter(id => id !== action.id);
        localStorage.setItem('favorites', JSON.stringify(newFavoriteIds));
      }
      return {
        ...state,
        ...(include && {
          favorites: newFavoties,
          favoriteIds: newFavoriteIds,
        }),
      };
    case ACTIONS.ADD_CART:
      include = cart.filter(lingerie => lingerie.id === action.id).length;
      if (!include) {
        newCart = [...cart, lingeries.find(lingerie => lingerie.id === action.id)];
        newCartIds = [...cartIds, action.id];
        localStorage.setItem('cart', JSON.stringify(newCartIds));
      }
      return {
        ...state,
        ...(!include && {
          cart: newCart,
          cartIds: newCartIds,
        }),
      };
    case ACTIONS.REMOVE_CART:
      include = cart.filter(lingerie => lingerie.id === action.id).length;
      if (include) {
        newCart = cart.filter(lingerie => lingerie.id !== action.id);
        newCartIds = cartIds.filter(id => id !== action.id);
        localStorage.setItem('cart', JSON.stringify(newCartIds));
      }
      return {
        ...state,
        ...(include && {
          cart: newCart,
          cartIds: cartIds.filter(id => id !== action.id),
        }),
        goingToRemoveFromCart: goingToRemoveFromCart.filter(lingerie => lingerie.id !== action.id),
      };
    case ACTIONS.CLEAR_CART:
      localStorage.setItem('cart', JSON.stringify([]));
      return {
        ...state,
        cart: [],
        cartIds: [],
      }
    case ACTIONS.ADD_WAIT_REMOVE_FROM_CART:
      include = goingToRemoveFromCart.filter(lingerie => lingerie.id === action.id).length;
      if (!include) {
        newCart = cart.filter(lingerie => lingerie.id !== action.id);
        newCartIds = cartIds.filter(id => id !== action.id);
        localStorage.setItem('cart', JSON.stringify(newCartIds));
      }
      return {
        ...state,
        ...(!include && { 
          cart: newCart,
          cartIds: cartIds.filter(id => id !== action.id),
          goingToRemoveFromCart: [ ...goingToRemoveFromCart, cart.find(lingerie => lingerie.id === action.id) ],
        }),
      };
    case ACTIONS.CANCEL_REMOVE_FROM_CART:
      include = goingToRemoveFromCart.filter(lingerie => lingerie.id === action.id).length;
      if (include) {
        newCart = [...cart, goingToRemoveFromCart.find(lingerie => lingerie.id === action.id)];
        newCartIds = [...cartIds, action.id];
        localStorage.setItem('cart', JSON.stringify(newCartIds));
      };
      return {
        ...state,
        ...(include && {
          cart: newCart,
          cartIds: [ ...cartIds, action.id ],
          goingToRemoveFromCart: goingToRemoveFromCart.filter(lingerie => lingerie.id !== action.id),
        }),
      }
    case ACTIONS.CLEAR_WAIT_REMOVE_FROM_CART:
      return {
        ...state,
        goingToRemoveFromCart: [],
      }
    case ACTIONS.SET_SINGLE_BUY:
      const singleBuy = state.lingeries.find(lingerie => lingerie.id === action.id);
      localStorage.setItem('singleBuy', JSON.stringify(singleBuy?.id || ''));
      return {
        ...state,
        singleBuy,
      };
    case ACTIONS.SET_FAVORITE_FILTER:
      return {
        ...state,
        favoriteFilter: action.filter,
      };
    case ACTIONS.SET_CART_FILTER:
      return {
        ...state,
        cartFilter: action.filter,
      };
    default:
      return state;
  };
};

export default lingeriesReducer;
