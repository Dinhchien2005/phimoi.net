import BatmanBegins from '../../assets/batman_begins.jpg';
import Dune from '../../assets/dune.jpg';
import Sing2 from '../../assets/sing_2.jpg';
import SpiderMan from '../../assets/spider_man.jpg';
import TDKRises from '../../assets/the_dark_knight_rises.jpg';
import TDK from '../../assets/the_dark_knight.jpg';
//dowload ảnh về 1 folder nào đó rồi import vào nhá
   export const moviesData = [
    //đây là mình đưa ra 4 cái là src,title,main,runtime và cũng có thể đặt 4 cái khác được nha không bắt buộc
    //nhưng bạn phải đồng bộ ở MovieCard.jsx
  {
    src: BatmanBegins,
    title: 'Batman Begins',
    main: 'Christian Bale',
    runtime: '120m',
  },
  { src: Dune, title: 'Dune', main: 'Timothée Chalamet', runtime: '120m' },
  { src: Sing2, title: 'Sing 2', main: 'Matthew McConaughey', runtime: '120m' },
  {
    src: SpiderMan,
    title: 'Spider-Man: No Way Home',
    main: 'Tom Holland',
    runtime: '120m',
  },
  {
    src: TDKRises,
    title: 'The Dark Knight Rises',
    main: 'Christian Bale',
    runtime: '120m',
  },
  {
    src: TDK,
    title: 'The Dark Knight',
    main: 'Christian Bale',
    runtime: '120m',
  },
];


