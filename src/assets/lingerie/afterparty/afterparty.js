import full_title from './fullSize/title.PNG';
import full_1 from './fullSize/1.PNG';
import full_2 from './fullSize/2.PNG';
import full_3 from './fullSize/3.JPG';
import full_4 from './fullSize/4.HEIC';
import p480_title from './480p/title.jpg';
import p480_1 from './480p/1.jpg';
import p480_2 from './480p/2.jpg';
import p480_3 from './480p/3.JPG';
import p480_4 from './480p/4.jpg';

export default {
  fullSize: {
    title: <img alt='Afterparty' src={full_title} width={'100%'} style={{objectFit: 'cover', height: 'inherit'}} />,
    images: [
      <img alt='Afterparty' src={full_title} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Afterparty' src={full_1} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Afterparty' src={full_2} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Afterparty' src={full_3} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Afterparty' src={full_4} width={'100%'} style={{height: 'inherit'}} />,
    ],
  },
  p480: {
    title: <img alt='Afterparty' src={p480_title} width={'100%'} style={{objectFit: 'cover', height: 'inherit'}} />,
    images: [
      <img alt='Afterparty' src={p480_title} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Afterparty' src={p480_1} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Afterparty' src={p480_2} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Afterparty' src={p480_3} width={'100%'} style={{height: 'inherit'}} />,
      <img alt='Afterparty' src={p480_4} width={'100%'} style={{height: 'inherit'}} />,
    ],
  },
};
