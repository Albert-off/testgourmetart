/*==================== PRELOADER ====================*/
// document.body.onload = function() {

//     setTimeout(function() {
//         var preloader = document.getElementById('page-preloader');
//         if( !preloader.classList.contains('done') )
//         {
//             preloader.classList.add('done');
//         }
//     }, 1000);

//     var preloader = document.getElementById('page-preloader');
//     if( !preloader.classList.contains('done') )
//     {
//         preloader.classList.add('done');
//     }

// }

/*==================== PRELOADER ====================*/
window.addEventListener("load", () => {
    const loader =  document.querySelector(".loader");

    loader.classList.add("loader--hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});