import first_title from './title.JPG';
import first_1 from './1.JPG';
import first_2 from './2.HEIC';
import first_3 from './3.JPG';
import first_4 from './4.JPG';

export default {
  title: 
  // <div className='kek' style={{background: `url(${first_title}) 50% 50% no-repeat;`}}>kek
    <img src={first_title} width={'100%'} style={{objectFit: 'cover', height: 'inherit'}} />,
  // </div>,
  images: [
    <img src={first_title} width={'100%'} style={{height: 'inherit'}} />,
    <img src={first_1} width={'100%'} style={{height: 'inherit'}} />,
    <img src={first_2} width={'100%'} style={{height: 'inherit'}} />,
    <img src={first_3} width={'100%'} style={{height: 'inherit'}} />,
    <img src={first_4} width={'100%'} style={{height: 'inherit'}} />,
  ]
}