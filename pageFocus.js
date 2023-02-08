// If on certain page, underline that link in menu

// toggle active link  
// const links = document.getElementsByTagName("a");

// function setActive(el) 
// {
//     for (var i = 0; i < links.length; i++) 
//     {
//         if (links[i] == el) {
//           el.classList.toggle("active");
//         } else {
//           links[i].classList.remove('active');
//         }
//       }
// }
  
// // updaing individual page with nav click
//   for (var i = 0; i < links.length; i++) 
//   {
//     links[i].addEventListener("click", function() 
//     {
//       setActive(this);
//     });
//   }


    






















// function selected() 
// {

//     const homeText = document.getElementById('homeText');

//     homeText.style.color = "#13CF93";

// }






// // get all sections with ids
// const sections = document.querySelectorAll("section[id]");

// // event listener for scroll 
// window.addEventListener("scroll", navSelect);


// function navSelect()
// {
//     // Get current scroll position
//     let scrollY = window.pageYOffset;

//     // loop through sections for height/id/top
//     sections.forEach(current =>
//     {
//         //get individual ids
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop -50;
//         const sectionId = current.getAttribute("id");

//         // if scroll position enters another section 
//         // add active class to nav-link
//         // loop through sections as a selector 
//         if( scrollY > sectionTop && 
//             scrollY <= sectionTop + sectionHeight)
//         {
//             document.querySelector(".navbarDesk[href*=" + sectionId +"]")
//             .classList.add("active");  
//         } 
//         else 
//         {
//             document.querySelector(".navbarDesk[href*=" + sectionId +"]")
//             .classList.remove("active");
//         }   
//     });    

// }
