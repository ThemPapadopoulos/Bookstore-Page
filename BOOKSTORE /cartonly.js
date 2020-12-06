function createElement(elementType, className, title, children) {

      const element = document.createElement(elementType);
      element.className = className;
      if (title) {
        element.innerHTML = title;
    
      }
  
      return element;
    }

    window.addEventListener('load', () => {
    
      //! -----------------create menu in page --------------------
          
            const menuElem = [{
            title: 'HOME',
            className: 'home'
            },
            {
            title: 'ABOUT',
            className: 'about'
            },
            {
            title: 'SHOP',
            className: 'shop'
            },
            {
            title: 'CONTACT',
            className: 'contact'
            },
            {
            title: 'CART',
            className: 'cart'

            }
      
      ]
          
            const menuSection = document.querySelector('.menu');
          
          
          
            // everything here is for every item in the menu list
          
            menuElem.forEach((menu) => {
          
              //! create elements
              
              const menuElement = createElement('li', 'menuitem');
              //const linkElement = createElement( 'a', 'menulink');
              // create button 
              const button = createElement('button', menu.className, menu.title);
          
            
            // vazoume ta elements to ena katw apo to allo
       
        menuSection.append(menuElement);
        menuElement.append(button);
        //.id = "cart";

        
      }); 

  });


  