let a = document.querySelector('.container')
let count = 0;
a.addEventListener('scroll',el=>{
    //a.scrollHeight
    //a.scrollTop
    
    const $ul = document.querySelector('ul');
    let $li;
    let count = $ul.children.length;
  
    document.addEventListener('scroll', () => {
      if ((window.a.innerHeight + a.scrollY) >= a.offsetHeight) {
        $li = $ul.appendChild(document.createElement('li'));
        $li.textContent = ++count;
      }
    })
})



// (() => {
//     const $ul = document.querySelector('ul');
//     let $li;
//     let count = $ul.children.length;
  
//     document.addEventListener('scroll', () => {
//       if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//         $li = $ul.appendChild(document.createElement('li'));
//         $li.textContent = ++count;
//       }
//     })
//   })();





















// function throttleUsingRaf(cb) {
//     var rAfTimeout = null;
  
//     return function () {
//       if (rAfTimeout) {
//         window.cancelAnimationFrame(rAfTimeout);
//       }
//       rAfTimeout = window.requestAnimationFrame(function () {
//         cb();
//       })
//     }
//   }


//   function onScroll() {
//     a.prepend(a.removeChild(a.lastElementChild))

//   }
// //  a.addEventListener('scroll', throttleUsingRaf(onScroll));
//  a.addEventListener('scroll', throttle(onScroll, 30));


  