/* To be run in the browser console when on the zkSync block explorer */
var box = document.querySelectorAll('[data-heading=Fee]') 
var totalFees = 0

box.forEach(item => {
  var childs = item.children
  var amount = childs[1].innerText.split('$')[1]
  totalFees = totalFees + parseFloat(amount)
})
