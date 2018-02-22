//This is simple cart implemented in JavaScript module pattern

var sCart = function() {
		
    var total = 0;
    var items = {};
    
    return {
    	getTotal: function () {
          var total = 0;
          for(var item in items) {
            total += items[item].count * items[item].price; 
          }
          return total;
        },
        addItem: function (item) {
          if(items[item.name]){
            items[item.name] = {
              count: ++items[item.name].count,
              price: item.price
            };
          } else {
            items[item.name] = {
              count: 1,
              price: item.price
            };
          }
        },
        removeItem: function (item) {
          if(items[item.name].count == 1) {
        	delete items[item.name];
          } else {
        	items[item.name].count--
          }
        },
        getItemsList: function () {
          var list = {};
          if(!isEmpty(items)){
            for(var item  in items) {
              if(items.hasOwnProperty(item)){
                  list[item] = {
                    count: items[item].count
                  };
              }
            }
          }  
          return list;
        },
        clearCart: function() {
          for(var item  in items) {
            if(items.hasOwnProperty(item)){
                delete items[item];
            }
          } 
        }
    }
}();

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

sCart.addItem({
name: "sugar",
price: 40
}); 

sCart.addItem({
name: "sugar",
price: 40
});

sCart.addItem({
name: "salt",
price: 20
});

console.log(sCart.getItemsList());

// sCart.removeItem({name: "sugar"});

// console.log(sCart.getItemsList());

console.log(sCart.getTotal());

sCart.clearCart();

console.log(sCart.getItemsList());

console.log(sCart.getTotal());