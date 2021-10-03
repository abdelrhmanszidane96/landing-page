/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll("section")





// build the nav
sections.forEach(section => {
    const ul = document.querySelector("ul");
    const newList = document.createElement("li");
    const links = document.createElement("a");

            //Extract the data-nav value from the section and store it in variable
    const dataNav = section.getAttribute("data-nav");
    //Extract IdAttribute value from the section and store it in variable
    const idAttribute = section.getAttribute("id");
        // get the href from the sections id
    links.setAttribute('href',idAttribute);
        // add navbar style   
        links.classList.add("menu__link");

    // scroll between the sections 
    // Scroll to section on link click
        links.addEventListener('click', scroll => {
            scroll.preventDefault();
            section.scrollIntoView();
        });
    // add the name of sections from the data-nav
        const text = document.createTextNode(dataNav);
    
        links.appendChild(text);
        newList.appendChild(links);
        ul.appendChild(newList);


    });


    
    
    

   window.addEventListener('scroll',()=>{

       // which section is not active and remove the active class from the section
         const activeSection = document.getElementsByClassName('your-active-class')[0];
        
               if(activeSection !== undefined){
                   activeSection.classList.remove('your-active-class')
                }
        //  which section is not active and remove the active class from the navbar
                const navActive = document.getElementsByClassName('navactive')[0];
        
                if(navActive !== undefined){
                   navActive.classList.remove('navactive')
                }
        
        // Set sections as active
               sections.forEach(section => {
        
             const react = section.getBoundingClientRect();
        
                if(react.top >=-50 && react.top<395){
                                       
                       section.classList.add('your-active-class');
        // Set the section in the nav-bar as active
                        
             const menuActive = document.querySelectorAll(`a[href='${section.id}']`)[0];
        
                menuActive.classList.add("navactive");        
            }
        })
       });
         
    