
function pushMenu(){
    var a = document.getElementById('menuPush');
    var b = document.getElementById('menu-mobile');
    if(a.style.left == '0px'){
        a.style.left = '218px';
        b.style.left = '0';
    }
    else{
        a.style.left = '0px';
        b.style.left = '-100%';
    }

    var x = document.getElementById('ico-bar');
    if(x.classList[1] == 'fa-bars'){
        x.classList.remove('fa-bars');
        x.classList.add('fa-times');
    }
    else{
        x.classList.remove('fa-times');
        x.classList.add('fa-bars');
    }
}

function pushSearch(){
    var a = document.getElementById('ico-search');
    if(a.classList[1] == 'fa-search'){
        a.classList.remove('fa-search');
        a.classList.add('fa-times');
    }
    else{
        a.classList.remove('fa-times');
        a.classList.add('fa-search');
    }

    var x = document.getElementById('fSearch-mb');
    var y = document.getElementById('menu-item-right')
    if(x.style.right == '-100%'){
        x.style.right = '0px';
        y.style.width = '245px';
    }                
    else{
        x.style.right = '-100%';
        y.style.width = 'auto';
    }                
}
