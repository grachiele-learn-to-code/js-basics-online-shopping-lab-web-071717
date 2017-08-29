var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
  cart.push({[item]: getRandomIntInclusive(1, 100)})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  let output = "In your cart, you have"
  let keys = []

  for (var i = 0; i < cart.length; i++) {
    keys.push(Object.keys(cart[i]))
  }

  if (cart.length === 0) {
    console.log('Your shopping cart is empty.')
  } else if (cart.length === 1){
    output += ` ${keys[0]} at $${cart[0][keys[0]]}.`
  } else if (cart.length === 2){
    output += ` ${keys[0]} at $${cart[0][keys[0]]} and ${keys[1]} at $${cart[1][keys[1]]}.`
  } else {
    for (var i = 0; i < cart.length; i++) {
      if (i === 0) {
        output += ` ${keys[i]} at $${cart[i][keys[i]]},`
      } else if (i === cart.length - 1) {
        output += ` and ${keys[i]} at $${cart[i][keys[i]]}.`
      } else {
        output += ` ${keys[i]} at $${cart[i][keys[i]]},`
      }
    }
  }
  console.log(output)
}

function total() {
  let total = 0

  let keys = []

  for (var i = 0; i < cart.length; i++) {
    keys.push(Object.keys(cart[i]))
  }

  for (var i = 0; i < cart.length; i++) {
    total += cart[i][keys[i]]
  }
  return total
}

function removeFromCart(item) {
  let keys = []
  let newCart = null

  for (var i = 0; i < cart.length; i++) {
    keys.push(Object.keys(cart[i])[0])
  }

  let index = keys.indexOf(item)

  console.log(keys)
  console.log(index)

  if (index === -1) {
    console.log("That item is not in your cart.")
  } else {
    let second = cart.splice(0,index)
    console.log(second)
    let first = cart.splice(index+1,cart.length)
    console.log(first)
    newCart = second.concat(first)
  }
  cart = Object.assign(cart, newCart)
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)
    cart = []
  }
  return cart
}
