// import React, { useState } from 'react';
// import 'tailwindcss/tailwind.css';
// import RightPath from '../../assets/images/bt_right.png';
// import LeftPath from '../../assets/images/bt_left.png';
// import { books as dummy } from '../../../stores/books';
// import TempBookList from './TempBookList';
// import $ from 'jquery';

// const Temp = () => {
//   const [prev, setPrev] = useState(5);
//   const [active, setActive] = useState(0);
//   const [next, setNext] = useState(1);

//   const Ids = [0, 1, 2, 3, 4, 5];
//   const right = RightPath;
//   const left = LeftPath;

//   const onPrev = () => {
//     setNext(active);
//     setActive(prev);
//     setPrev(prev - 1 === -1 ? Ids.length - 1 : prev - 1);
//   };
//   const onNext = () => {
//     setPrev(active);
//     setActive(next);
//     setNext(next + 1 === Ids.length ? 0 : next + 1);
//   };

//   const onIndicator = (id) => {
//     console.log(id);
//     setPrev(id - 1 === -1 ? Ids.length - 1 : id - 1);
//     setActive(id);
//     setNext(id + 1 === Ids.length ? 0 : id + 1);
//   };

//   const onMouseOver = () => {
//     console.log('hi');
//     $('#arrow').removeClass('translate-x-0');
//     $('#arrow').removeClass('translate-x-[4rem]');
//     $('#arrow').width = $('#arrow').width();
//     $('#arrow').addClass('translate-x-[4rem]');

//     $('#more').removeClass('opacity-0');
//     $('#more').removeClass('opacity-100');
//     $('#more').width = $('#more').width();
//     $('#more').addClass('opacity-100');
//   };

//   const onMouseOut = () => {
//     $('#arrow').removeClass('translate-x-0');
//     $('#arrow').removeClass('translate-x-[4rem]');
//     $('#arrow').width = $('#arrow').width();
//     $('#arrow').addClass('translate-x-0');

//     $('#more').removeClass('opacity-0');
//     $('#more').removeClass('opacity-100');
//     $('#more').width = $('#more').width();
//     $('#more').addClass('opacity-0');
//   };
//   return (
//     <div className="w-[90rem] mx-auto flex items-center justify-center overflow-hidden">
//       <img
//         onClick={() => onPrev(active, next)}
//         src={left}
//         className="w-20 h-20 z-20 rounded-full cursor-pointer opacity-70 hover:opacity-100"
//         alt=""
//       ></img>
//       <div className="relative w-[80rem] h-[500px] overflow-visible flex">
//         <div className="w-full">
//           <div className="flex items-end w-full relative pt-10">
//             <div
//               className="flex items-center w-full relative"
//               onMouseOver={onMouseOver}
//               onMouseOut={onMouseOut}
//             >
//               <div className="text-2xl mr-4">카카오페이지 인기작</div>
//               <div
//                 id="more"
//                 className="absolute ml-60 text-lg opacity-0 duration-200 delay-200"
//               >
//                 더보기
//               </div>
//               <div id="arrow" className="absolute ml-60 text-sm duration-500">
//                 {'>'}
//               </div>
//             </div>
//             <div
//               className="flex space-x-1 absolute right-0"
//               style={{ paddingBottom: '4px' }}
//             >
//               {Ids.map((id) => {
//                 if (id < Ids.length / 2) {
//                   return (
//                     <div
//                       id={id}
//                       className={`h-1 w-4 bg-primary-2
//           ${
//             active > id
//               ? active % (Ids.length / 2) === id
//                 ? 'bg-primary-3'
//                 : ''
//               : active === id
//               ? 'bg-primary-3'
//               : ''
//           }`}
//                       onClick={() => onIndicator(id)}
//                     ></div>
//                   );
//                 } else {
//                   return null;
//                 }
//               })}
//             </div>
//           </div>
//           {Ids.map((id) => (
//             <div
//               id={id}
//               className={`absolute w-[100%] h-[65%] inset-2/4 translate-x-[-50%] translate-y-[-50%] ease-in-out duration-700 overflow-visible
//           ${
//             prev === id
//               ? 'translate-x-[-150%] opacity-0'
//               : next === id
//               ? 'translate-x-[50%] opacity-0'
//               : active === id
//               ? 'translate-x-[-50%]'
//               : 'translate-x-[50%] opacity-0'
//           }
//           `}
//             >
//               <TempBookList number={id} books={dummy}></TempBookList>
//             </div>
//           ))}
//         </div>
//       </div>
//       <img
//         onClick={onNext}
//         src={right}
//         className="w-20 h-20 z-20 rounded-full cursor-pointer opacity-70 hover:opacity-100"
//         alt=""
//       ></img>
//     </div>
//   );
// };

// export default Temp;
