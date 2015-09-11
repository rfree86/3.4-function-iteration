/*
((a(item.price) sum b(item.price))/items.length)=price average
find the value of price within the items array, then calculate the prices'
total sum, the find their average.
*/
var total = 0;
items.forEach(function(item){
  // console.log(item.price);
  total += item.price;
  averageTotal = total/items.length;

});
console.log(averageTotal.toFixed(2));
/*
find the price value in the items array, then find the prices that fall within a
set range of 14 - 18. then display the respective price's title.
*/
items.filter(function(item){
  if(item.price <=14 && item.price <=18){
    console.log(item.title);
  }
});
/*
search the items array for the currency_code "GBP" and then log the item's title
*/
items.filter(function(item) {
  if (item.currency_code === "GBP"){
    console.log(item.title + " £" + item.price);
  }
});
/*
search the items array for objects who's material has the value "wood" in it
then log their respective title. It will need an indexOf value to show
if the material line is true or false.  if the object's material is true then
display its respective
*/
items.forEach(function(item){
  if(item.materials.indexOf("wood") > -1) {
    console.log(item.title);
  }
});
/*
search the items array for objects who's material's .length is 8 or more
then log their respective title
*/
items.forEach(function(item){
  if (item.materials.length >= 8){
    console.log(item.materials);
  }
});
/*
search items array for objects that are homemade and then display their respective
title. 
*/
items.forEach(function(item){
  if(item.who_made.indexOf("i_did") > -1){
    console.log(item.title);
  }
});
