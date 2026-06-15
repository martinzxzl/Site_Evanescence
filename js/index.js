

// Interatividade menu mobile

function toggleMenu() { 
    $('header nav#nav-esq ul#menu-principal').css('display', 'flex');
    $('header nav#nav-esq ul#menu-principal').addClass('animate__animated animate__fadeInRight animate__slow');

    $('header nav#nav-esq ul#icone-menu li#menu').css('display', 'none');
    $('header nav#nav-esq ul#icone-menu li#menuX').css('display', 'flex');
    
}

function hideMenu() {
    $('header nav#nav-esq ul#menu-principal').css('display', 'none');

    $('header nav#nav-esq ul#icone-menu li#menu').css('display', 'flex');
    $('header nav#nav-esq ul#icone-menu li#menuX').css('display', 'none');
}

let control = true;

$('header nav#nav-esq ul#icone-menu').click(function(){
    if (control == true) {
        toggleMenu();
        control = false;
    } else {
        hideMenu();
        control = true;
    }
});
