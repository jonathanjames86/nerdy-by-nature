angular.module('myApp').service('mainService', function(){

var data = [
  {name:"Batman", price:"14.99", hobbies:"golf", image: "http://www.therockshop.de/media/image/product/20531/md/batman-girls-t-shirt-retro-logo_6.jpg"},
  {name:"Mega Man", price:"12.99", hobbies:"golf", image:"http://ep.yimg.com/ay/stylinonline/mega-man-ii-stage-select-t-shirt-sheer-11.jpg"},
  {name:"DeadPool", price:"18.99", hobbies:"golf", image:"https://s-media-cache-ak0.pinimg.com/736x/8e/0f/e6/8e0fe613daefc489e9f289c157305cbc.jpg"},
  {name:"DeadSpace", price:"20", hobbies:"golf", image:"http://static.rerock4ever.com/shopimages/products/highres/0/00395TST01.jpg"},
  {name:"Zelda-WindWaker", price:"20", hobbies:"golf", image:"http://cdn4.teehunter.com/wp-content/uploads/2014/01/call.jpg"},
  {name:"Yoshi & Toad", price:"20", hobbies:"golf", image:"https://www.fifthsun.com/media/catalog/product/cache/1/image/1000x/a150d3402a4a7eeaf1a7d924d386d2d5/1/3/13NNTD400WA-Hip-Hip-Hooray-Comp.jpg"},
  {name:"Destiny", price:"20", hobbies:"golf", image:"https://image.spreadshirtmedia.com/image-server/v1/products/1003066306/views/1,width=378,height=378,appearanceId=258,version=1440417743/Planet-Destiny-T-Shirts.png"},
  {name:"PokeMon", price:"20", hobbies:"golf", image:"http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=36210228"},
  {name:"Diablo", price:"20", hobbies:"golf", image:"http://teemato.com/wp-content/uploads/66_2015-diablo-t-shirt.jpg"},
  {name:"BorderLands", price:"20", hobbies:"golf", image:"http://www.geekaygames.com/u_images/product/1363609636_main_Borderlands_2_87_Gajillion_More_Black_T_Shirt.jpg"},
  {name:"DarkSouls", price:"20", hobbies:"golf", image:"https://img0.etsystatic.com/013/0/5792379/il_fullxfull.433040488_7wzw.jpg"},
  {name:"Game of Thrones", price:"20", hobbies:"golf", image:"http://www.ooclothstyle.com/wp-content/uploads/2014/05/07/0/127-21-Century-Clothing-You-now-nothing-Jon-Snow-Game-of-Thrones-T-Shirt-Small-8-10-inches-Grey-for-Women-1.jpg"},

];

this.getUsers = function(){
  return data;
};

});
