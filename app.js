(function(){
'use strict';

angular.module('ShoppingList', [])
.controller('ToBuyList', ToBuyListController)
.controller('BoughtList', BoughtListController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyListController.$inject = ['ShoppingListCheckOffService'];
function ToBuyListController(ShoppingListCheckOffService) {
  var tbList = this;

  tbList.items = ShoppingListCheckOffService.getTBItems();

  tbList.MoveItem2BList = function(itemIndex){
      ShoppingListCheckOffService.MoveItem2BList(itemIndex);
  };
}

BoughtListController.$inject = ['ShoppingListCheckOffService'];
function BoughtListController(ShoppingListCheckOffService) {
  var BList = this;
  BList.items = ShoppingListCheckOffService.getBItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var tobuyitems =[{name: "Yakoohv Cookies",  quantity: 100},
                  {name: "Milk", quantity: 20},
                  {name: "Sugar", quantity: 5},
                  {name: "Chocolate", quantity: 10},
                  {name: "Honey", quantity: 7}];
  var boughtitems = [];

  service.MoveItem2BList = function (itemIndex) {
    boughtitems.push(tobuyitems.splice(itemIndex, 1)[0]);
  };

  service.getTBItems = function () {
    return tobuyitems;
  };
  service.getBItems = function () {
    return boughtitems;
  };
}

})();
