
// menu toggle

var toggleProfileMenu = function () 
{  
    $('[data-m-profile-access]').on('click',function () 
    {  
        $(this).find('.M-ProfileAccess__arrowContainer').toggleClass('is-active');
        $(this).find('.M-ProfileAccess__dropDownContainer').toggleClass('is-active');
    });
}

// Load all function 

toggleProfileMenu();