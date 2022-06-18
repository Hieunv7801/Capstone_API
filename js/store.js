let addToCartButtons = document.getElementsByClassName('btn-add')
// picking up all the Add-To-Cart buttons
// picking up all the Add-To-Cart buttons
for(let i = 0; i < addToCartButtons.length; i++){
    addToCartButtons[i].addEventListener('click', addToCart)
    
}

function addToCart(event){
    let btn = event.target
    console.log(btn);
}