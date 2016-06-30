angular.module('myApp').service('mainService', function(){

var data = [
  {name:"Batman", price:"14.99", hobbies:"golf", image: "http://hottopic.scene7.com/is/image/HotTopic/10244628_hi?$pdp_hero_zoom$"},
  {name:"Mega Man", price:"12.99", hobbies:"golf", image:"http://hottopic.scene7.com/is/image/HotTopic/10387482_hi?$pdp_hero_zoom$"},
  {name:"DeadPool", price:"18.99", hobbies:"golf", image:"http://images.shirts.com/products/23762/13-14/womens-deadpool-hey-there-t-shirt.jpg"},
  {name:"Zelda", price:"20", hobbies:"golf", image:"http://hottopic.scene7.com/is/image/HotTopic/10192201_hi?$pdp_hero_zoom$"},
  {name:"Zelda", price:"20", hobbies:"golf", image:"http://hottopic.scene7.com/is/image/HotTopic/10192201_hi?$pdp_hero_zoom$"},
  {name:"Zelda", price:"20", hobbies:"golf", image:"http://hottopic.scene7.com/is/image/HotTopic/10192201_hi?$pdp_hero_zoom$"},
  {name:"Zelda", price:"20", hobbies:"golf", image:"http://hottopic.scene7.com/is/image/HotTopic/10192201_hi?$pdp_hero_zoom$"}
];

this.getUsers = function(){
  return data;
};

});
