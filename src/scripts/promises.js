// const lalala = new Promise((resole, reject) => {
//   const random = Math.random();

//   //   setTimeout(() => {
//   //     if (random > 0.5) {
//   //       resole('ok');
//   //     }

//   //     reject('oops');
//   //   }, 1000);

//   if (random > 0.5) {
//     resole('ok');
//   }

//   reject('oops');
// });

// lalala
//   .then(result => {
//     console.log('then', result);
//   })
//   .catch(error => {
//     console.log('catch', error);
//   })
//   .finally(() => {
//     console.log('finally');
//   });
// ===========================

// const number = new Promise((resolve, reject) => {
//   resolve(5);
// });

// number
//   .then(data => {
//     return data * 2;
//   })
//   .then(res => {
//     return res * 3;
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('ok');
//   });
// +++++++++++++++++++++++++++++++++

// const promise = new Promise(resolve => {
//   resolve(10);
// });

// promise
//   .then(value => {
//     new Promise(resolve => {
//       resolve(value * 2);
//     });
//   })
//   .then(value => console.log(value));
// ============================================

// console.log('step 1');

// setTimeout(() => {
//   console.log('step 2');
// }, 0);

// new Promise(resolve => {
//   resolve('step 3');
// }).then(data => console.log(data));

// setTimeout(() => {
//   console.log('step 4');
// }, 0);
// ============================

// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();

//   setTimeout(() => {
//     if (random > 0.5) {
//       onSuccess(`ваще замовлення ${dish}`);
//       return;
//     }

//     onError('закінчився продукт!');
//   }, 1000);
// };

// makeOrder(
//   'пиріжок',
//   str => console.log('onSuccess', str),
//   str => console.log('onError', str)
// );

// II
// const makeOrder = dish => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();

//     setInterval(() => {
//       if (random > 0.5) {
//         resolve(`ваще замовлення ${dish}`);
//       }

//       reject('закінчився продукт!');
//     }, 1500);
//   });
// };

// makeOrder('пиріжок')
//   .then(result => console.log(result))
//   .catch(error => console.log(error));
// ====================================
