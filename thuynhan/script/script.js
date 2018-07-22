function navClick(){
    var dBody = document.getElementById('pushMenu');
    var aMenu = document.getElementById('menu-mobile');

    if(aMenu.classList == 'hide'){
        aMenu.classList.remove('hide');
        aMenu.classList.add('show');
    }
    else{
        aMenu.classList.remove('show');
        aMenu.classList.add('hide');
    }
    if(dBody.classList[2] == 'open'){
        dBody.classList.remove('open');
        dBody.classList.add('close-s');
    }
    else{
        dBody.classList.remove('close-s');
        dBody.classList.add('open');
    }
}