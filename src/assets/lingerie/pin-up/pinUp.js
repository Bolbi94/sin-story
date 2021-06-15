import full_title from './fullSize/title.JPG';
import full_1 from './fullSize/1.HEIC';
import full_2 from './fullSize/2.HEIC';
import full_3 from './fullSize/3.HEIC';
import full_4 from './fullSize/4.HEIC';
import p480_title from './480p/title.JPG';
import p480_1 from './480p/1.jpg';
import p480_2 from './480p/2.jpg';
import p480_3 from './480p/3.jpg';
import p480_4 from './480p/4.jpg';

export default {
  fullSize: {
    title: <img alt='Pin-Up' src={full_title} width={'100%'} style={{objectFit: 'cover', height: 'inherit'}} />,
    images: [
      <img alt='Pin-Up' src={full_title} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Pin-Up' src={full_1} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Pin-Up' src={full_2} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Pin-Up' src={full_3} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Pin-Up' src={full_4} width={'100%'} style={{height: 'inherit'}} />,
    ],
  },
  p480: {
    title: <img alt='Pin-Up' src={p480_title} width={'100%'} style={{objectFit: 'cover', height: 'inherit'}} />,
    images: [
      <img alt='Pin-Up' src={p480_title} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Pin-Up' src={p480_1} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Pin-Up' src={p480_2} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Pin-Up' src={p480_3} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Pin-Up' src={p480_4} width={'100%'} style={{height: 'inherit'}} />,
    ],
  },
};
