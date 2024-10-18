function addToCart(itemId){
    var item = document.getElementById(itemId);
    if (item) {
        item.style.display = "flex";
    }
    var priceElement = item.getElementsByClassName('cart-price')[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));

    var totalElement = document.getElementById('total');
    var curTotal = parseFloat(totalElement.innerText.replace('$', ''));
    var NewTotal = curTotal + price;
    totalElement.innerText = '$' + NewTotal.toFixed(2);
    
}

function removeFromCart(itemId){
    var item = document.getElementById(itemId);
    if (item) {
        item.style.display = "none";
    }
    var priceElement = item.getElementsByClassName('cart-price')[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));

    var totalElement = document.getElementById('total');
    var currentTotal = parseFloat(totalElement.innerText.replace('$', ''));
    var newTotal = currentTotal + price;
    totalElement.innerText = '$' + newTotal.toFixed(2);
    
}



function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('cart-price')[0];
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];


        if (priceElement && quantityElement) {
            var price = parseFloat(priceElement.innerText.replace('$', ''));
            var quantity = quantityElement.value;
            total = total + (price * quantity);
        }
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}

function updateTotal (){
    const item = document.getElementById(itemId);
    const priceElement = item.querySelector('.cart-price');
    const price = parseFloat(priceElement.innerText.replace('$', ''));
    const totalElement = document.getElementById('total');
    const total = parseFloat(totalElement.innerText.replace('$', ''));
    totalElement.innerText = '$' + (total + price).toFixed(2);
}
function clearCart(){
    var cartItems = document.getElementsByClassName('cart-row');
    for (var i = 0; i < cartItems.length; i++) {
        var cartRow = cartItems[i];
        cartRow.style.display = "none";
    }
    updateCartTotal();
}