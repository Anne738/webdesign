let search = document.querySelector('.search_box');

document.querySelector('#search_icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu_icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove('active');
}

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

$(document).ready(function(){
    update_amounts();
    $('.qty, .price').on('keyup keypress blur change', function(e){
        update_amounts();
    });
});

function update_amounts(){
    var sum = 0.0;
    $('#cart_table > tbody > tr').each(function(){
        var qty = $(this).find('.qty').val();
        var price = $(this).find('.price').val();
        var amount = (qty*price);
        sum += amount;
        $(this).find('.amount').text('' + amount);
    });
    $('.total').text(sum);
}

var incrementQty;
var decrementQty;
var plusBtn = $(".cart_qty_plus");
var minusBtn = $(".cart_qty_minus");
var incrementQty = plusBtn.click(function(){
    var $n = $(this)
    .parent(".btn_container")
    .find(".qty");
    $n.val(Number($n.val())+1);
    update_amounts();
});
var decrementQty = minusBtn.click(function(){
    var $n = $(this)
    .parent(".btn_container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if (QtyVal > 0){
        $n.val(QtyVal - 1);
    }
    update_amounts();
});


fetch('https://dummyjson.com/posts?skip=5&limit=7').then(res => res.json()).then(json => pastetext(json.posts));


async function add(title, body){
    var v = document.createElement('div');
    var vc = document.querySelector('.v_container');

    var con = `
    <div class="box">
        <h3> ${title} </h3>
        <p>
            ${body}
        </p>
    </div>`;
    v.innerHTML = con;
    vc.append(v);
    //<img src="${imgScr}" alt="${alt}">
}

async function pastetext(data){
    for (var el = 0; el < data.length; el++){
        var title = await data[el].title
        var body = await data[el].body
        await add(title, body)
    }
}
