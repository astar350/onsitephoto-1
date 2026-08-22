document.addEventListener('DOMContentLoaded', function(event)
{
   var headerMenu_dropdownToggle = document.querySelectorAll('#headerMenu .dropdown-toggle');
   headerMenu_dropdownToggle.forEach(item => 
   {
      var dropdown = new bootstrap.Dropdown(item, {popperConfig:{placement:item.getAttribute('data-bs-placement')}});
   });
   var headerMenu_dropdown = document.querySelectorAll('#headerMenu .dropdown');
   headerMenu_dropdown.forEach(item => 
   {
      item.addEventListener('shown.bs.dropdown', function(e)
      {
         e.currentTarget.classList.add('show');
      });
      item.addEventListener('hidden.bs.dropdown', function(e)
      {
         e.currentTarget.classList.remove('show');
      });
   });
   document.addEventListener('click', function (e)
   {
      var isChildOfDropdownMenu = false;
      var target = e.target;
      while (target !== null)
      {
         if (target.classList && target.classList.contains('headerMenu-navbar-collapse') && target.classList.contains('show'))
         {
            isChildOfDropdownMenu = true;
            break;
         }
         target = target.parentNode;
      }
      if (isChildOfDropdownMenu)
      {
         if (e.target.tagName.toLowerCase() === 'a' && !e.target.classList.contains('dropdown-toggle'))
         {
            const dropdownMenu = document.querySelector('.headerMenu-navbar-collapse');
            if (dropdownMenu)
            {
               const collapseInstance = bootstrap.Collapse.getInstance(dropdownMenu);
               if (collapseInstance)
               {
                  collapseInstance.hide();
               }
            }
         }
      }
   });
   var elementhomeCarousel = document.querySelector('#homeCarousel');
   elementhomeCarousel.addEventListener('slid.bs.carousel', function(e)
   {
      switch(e.to)
      {
         case 0:
            AnimateCss('wb_homeText1', 'slide-left-in', 300, 1000);
            AnimateCss('welcome-text2', 'slide-right-in', 1000, 1000);
            AnimateCss('welcome-button1', 'slide-down-in', 2000, 1000);
            break;
         case 1:
            AnimateCss('wb_homeText2', 'slide-left-in', 300, 1000);
            AnimateCss('welcome-text4', 'slide-right-in', 1000, 1000);
            AnimateCss('welcome-button2', 'slide-down-in', 2000, 1000);
            break;
         case 2:
            AnimateCss('wb_homeText3', 'slide-left-in', 300, 1000);
            AnimateCss('welcome-text6', 'slide-right-in', 1000, 1000);
            AnimateCss('welcome-button3', 'slide-down-in', 2000, 1000);
            break;
      }
   });
   var homeCarousel = new bootstrap.Carousel('#homeCarousel', {interval: 6000, pause: false});
});
$(document).ready(function()
{
   $("a[href*='#headerLayoutGrid1']").click(function(event)
   {
      event.preventDefault();
      $('html, body').stop().animate({ scrollTop: $('#wb_headerLayoutGrid1').offset().top }, 600, 'easeInSine');
   });
   function skrollrInit()
   {
      skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
   }
   skrollrInit();
});
