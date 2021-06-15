import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { TextField, FormControl, Button, Collapse, IconButton, Backdrop, CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { Close } from '@material-ui/icons'
import Swal from 'sweetalert2'
import routes from '../../config/routes';
import { sendOrder } from '../../firebase/firebase';
import { rootActions } from '../../storage';
import styles from './orderForm.module.css';

const OrderForm = (props) => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const [isMissingField, setIsMissingField] = useState(false);
  const [isSendingOrder, setIsSendingOrder] = useState(false);

  const { singleBuy, cart } = useSelector(state => state.lingerie);
  const { clearCart, removeFromCart } = rootActions.lingeriesActions.useLingeriesActions();

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    let total = 0;
    if (location.pathname === routes.order) {
      total = cart.reduce((sum, lingerie) => {
        const price = +lingerie.price?.split(' ')[0] || 0;
        return sum + price;
      }, 0);
      setTotalPrice(total);
    } else {
      total = +singleBuy?.price?.split(' ')[0] || 0;
      setTotalPrice(total);
    };
  }, [singleBuy, cart, location]);

  const handleOrder = (e) => {
    e.preventDefault();
    if (phone || email) {
      setIsSendingOrder(true);
      const order = {
        ...(
          location.pathname === routes.order 
            ? { lingeries: cart?.map(lingerie => lingerie.name) || [] }
            : { lingeries: singleBuy?.name ? [singleBuy.name] : [] }
        ),
        phone,
        name,
        email,
      };
      // console.log('order', order);
      sendOrder(order)
        .then(() => {
          setIsSendingOrder(false);
          Swal.fire({
            icon: 'success',
            text: 'Ваш заказ принят! Скоро с Вами свяжется наш администратор.',
            customClass: styles['swal'],
          }).then(() => {
            if (location.pathname === routes.order) {
              clearCart();
            } else {
              singleBuy?.id && removeFromCart(singleBuy?.id);
            }
            if (location.pathname === routes.home) {
              history.go(0);
            } else {
              history.push(routes.home);
            }
          });
        })
        .catch(err => {
          console.log('fail', err);
          setIsSendingOrder(false);
          Swal.fire({
            icon: 'warning',
            text: 'Не удалось принять Ваш заказ. Пожалуйста, повторите попытку позже, или напишите нам напрямую',
            customClass: styles['swal'],
          });
        });
    } else {
      setIsMissingField(true);
    }
  };

  return (
    <React.Fragment>
      <FormControl {...props}>
        <TextField
          autoFocus
          id="phone"
          label="Телефон"
          type="phone"
          fullWidth
          value={phone}
          onChange={e => {
            setPhone(e.target.value);
            setIsMissingField(false);
          }}
        />
      </FormControl>
      <FormControl {...props}>
        <TextField
          id="name"
          label="Имя"
          type="text"
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </FormControl>
      <FormControl {...props}>
        <TextField
          id="email"
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={e => {
            setEmail(e.target.value);
            setIsMissingField(false);
          }}
        />
      </FormControl>
      <Collapse in={isMissingField} timeout={{ appear: 500, enter: 500, exit: 0 }} className={styles['alert-container']}>
        <Alert 
          variant='filled'
          severity='warning'
          className={styles['alert']}
          action={
            <IconButton color='inherit' aria-label='close' onClick={() => setIsMissingField(false)}>
              <Close fontSize='inherit' />
            </IconButton>
          }
        >
          {'Для заказа, укажите, пожалуйста, телефон или email'}
        </Alert>
      </Collapse>
      <FormControl className={styles['button']}>
        <Button variant="outlined" fullWidth onClick={handleOrder}>{`Заказать${totalPrice ? `(${totalPrice} грн)`: ''}`}</Button>
      </FormControl>
      <Backdrop open={isSendingOrder} className={styles['backdrop']}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </React.Fragment>
  );
};

export default OrderForm;
