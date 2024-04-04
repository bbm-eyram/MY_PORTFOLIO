const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// function PageTransitions(){
//     //button click active class
//     for(let i = 0; i < sectBtn.length; i++){
//         sectBtn[i].addEventListener('click', function(){
//             let currentBtn = document.querySelectorAll('.active-btn');
//             currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
//             this.className += ' active-btn';
//         })
//     }

//     // sections active class
//     allSections.forEach((section) => {
//         section.addEventListener('click', (e) => {
//             const id = e.target.dataset.id;
//             if (id) {
//                 // remove selected from the other btn
//                 sectBtns.forEach((btn) => {
//                     btn.classList.remove('active');
//                 });
//                 e.target.classList.add('active');

//                 // hide other section
//                 sections.forEach((section) => {
//                     section.classList.remove('active');
//                 });

//                 const element = document.getElementById(id);
//                 element.classList.add('active');
//             }
//         });
//     });

//     //toggle theme
//     const themeBtn = document.querySelector(".theme-btn");
//     themeBtn.addEventListener("click", () => {
//         let element = document.body;
//         element.classList.toggle("light-mode");
//     })


//     // //sections active class
//     // allSections.addEventListener('click', (e) =>{
//     //     const id = e.target.dataset.id;
//     //     if(id){
//     //         //remove selected from the other btn
//     //         sectBtns.forEach((btn) =>{
//     //             btn.classList.remove('active')
//     //         })
//     //         e.target.classList.add('active')

//     //         //hide other section
//     //         sections.forEach((section) =>{
//     //             section.classList.remove('active')
//     //         })

//     //         const element = document.getElementById(id);
//     //         element.classList.add('active');
//     //     }
//     // })

// }

// PageTransitions();


