let removeCartItemButton = document.getElementsByClassName("remove")
console.log(removeCartItemButton)

for (let i = 0; i < removeCartItemButton.length; i++) {
    let trash = removeCartItemButton[i]
    trash.addEventListener("click", function(removeItem) {
        let trashClicked = removeItem.target
        trashClicked.parentElement.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName("cartSection")[0]
    var cartRows = cartItemContainer.getElementsByClassName("cartRow")
    for (var i = 0; i < cartRows.length; i++) {
        console.log(cartRows)
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cartCol2')[0]
        var quantityElement = cartRow.getElementsByClassName('qtynumber')[0]
        var price = parseFloat(priceElement.innerText.replace('R', ''))
        var quantity = quantityElement.value
        console.log(price * quantity)
    }
}



