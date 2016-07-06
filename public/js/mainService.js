angular.module('myApp').service('mainService', function($http){

// var data = [
// {"name":"Batman", "price":14.99, "likes":23, "image":"http://www.therockshop.de/media/image/product/20531/md/batman-girls-t-shirt-retro-logo_6.jpg"},
// {"name":"Mega Man", "price":12.99, "likes":32, "image":"http://ep.yimg.com/ay/stylinonline/mega-man-ii-stage-select-t-shirt-sheer-11.jpg"},
//   {"name":"DeadPool", "price":18.99, "likes":13, "image":"https://s-media-cache-ak0.pinimg.com/736x/8e/0f/e6/8e0fe613daefc489e9f289c157305cbc.jpg"},
//   {"name":"DeadSpace", "price":20, "likes":9, "image":"http://static.rerock4ever.com/shopimages/products/highres/0/00395TST01.jpg"},
//   {"name":"Zelda-WindWaker", "price":20, "likes":12, "image":"http://cdn4.teehunter.com/wp-content/uploads/2014/01/call.jpg"},
//   {"name":"Yoshi & Toad", "price":20, "likes":45, "image":"https://www.fifthsun.com/media/catalog/product/cache/1/image/1000x/a150d3402a4a7eeaf1a7d924d386d2d5/1/3/13NNTD400WA-Hip-Hip-Hooray-Comp.jpg"},
//   {"name":"Destiny", "price":20, "likes":56, "image":"https://image.spreadshirtmedia.com/image-server/v1/products/1003066306/views/1,width=378,height=378,appearanceId=258,version=1440417743/Planet-Destiny-T-Shirts.png"},
//   {"name":"PokeMon", "price":20, "likes":21, "image":"http://www.polyvore.com/cgi/img-thing?.out=jpg&size=l&tid=36210228"},
//   {"name":"Diablo", "price":20, "likes":53, "image":"http://teemato.com/wp-content/uploads/66_2015-diablo-t-shirt.jpg"},
//   {"name":"BorderLands", "price":20, "likes":11, "image":"http://www.geekaygames.com/u_images/product/1363609636_main_Borderlands_2_87_Gajillion_More_Black_T_Shirt.jpg"},
//   {"name":"DarkSouls", "price":20, "likes":23, "image":"https://img0.etsystatic.com/013/0/5792379/il_fullxfull.433040488_7wzw.jpg"},
//   {"name":"Game of Thrones", "price":20, "likes":41, "image":"http://www.ooclothstyle.com/wp-content/uploads/2014/05/07/0/127-21-Century-Clothing-You-now-nothing-Jon-Snow-Game-of-Thrones-T-Shirt-Small-8-10-inches-Grey-for-Women-1.jpg"},
//   {"name":"Portal hoodie", "price":20, "likes":34, "image":"http://www.thinkgeek.com/images/products/additional/large/e5a2_portal_hoodie.jpg"},
//   {"name":"Iron-Man", "price":20, "likes":21, "image":"https://images-mm.s3.amazonaws.com/Ironman_Mask_Costume_Eyes_Hoodie2_POP.jpg"},
//   {"name":"Robin", "price":20, "likes":23, "image":"https://images.superherostuff.com/image-hoodrobin-1-watermark.jpg"},
//   {"name":"Flash", "price":20, "likes":21, "image":"http://img.shirtcity.com/article_preview/380x380/transp/p2c34s1a1_d1i55096p0z5r1c2f0.png"},
//   {"name":"Assassins", "price":20, "likes":23, "image":"https://www.gamerabilia.co.uk/image/cache/data/products/assassins-creed/assassins-creed-rogue/assassins-creed-rogue-hoodie-black-red-back-640x640.jpg"},
//   {"name":"N7", "price":20, "likes":21, "image":"http://www.thinkgeek.com/images/products/frontsquare/ed68_n7_stripe_hoodie.jpg"},
//   {"name":"MineCraft", "price":20, "likes":43, "image":"http://www.thinkgeek.com/images/products/additional/large/f359_minecraft_university_kids_hoodie_back.jpg"},
//   {"name":"Super MarioKart", "price":20, "likes":44, "image":"http://g01.a.alicdn.com/kf/HTB1FsG7JFXXXXbeXFXXq6xXFXXXJ/Winter-Casual-Sport-Jumper-Sweatshirt-Women-Super-Mario-Kart-Crewneck-Men-Luigi-Character-1992-font-b.jpg"},
//   {"name":"DuckHunt", "price":20, "likes":23, "image":"https://www.fifthsun.com/media/catalog/product/cache/1/image/500x500/a150d3402a4a7eeaf1a7d924d386d2d5/1/4/14NNTD160WA%20Duck%20Hunt.jpg"},
//   {"name":"Overwatch", "price":20, "likes":21, "image":"http://www.fanrek.com/media/catalog/product/cache/1/image/29b82db22504fb0479cf1248d4fc542c/o/v/overwatch_logo_cool_pullover_hoodie_3_.jpg"},
//   {"name":"Wolverine", "price":20, "likes":43, "image":"http://randommization.com/wp-content/uploads/2012/11/superhero-hoodies_2.jpg"},
//   {"name":"R2-D2", "price":20, "likes":32, "image":"http://cdn.shopify.com/s/files/1/0251/5984/products/star-wars-r2d2-knapsack-3.jpg?v=1429755435"},
//   {"name":"Dragonball", "price":20, "likes":32, "image":"https://cdn.shopify.com/s/files/1/1082/6056/products/ICS015_1024x1024.jpg?v=1451112465"},
//   {"name":"Princess Mononoke", "price":20, "likes":52, "image":"https://s-media-cache-ak0.pinimg.com/736x/76/22/4f/76224f0e6faca8d3638ddb2b5a7805d7.jpg"},
//   {"name":"Transformers", "price":20, "likes":30, "image":"http://ep.yimg.com/ay/stylinonline/transformers-but-baby-i-can-change-juniors-t-shirt-4.jpg"},
//   {"name":"Boss", "price":20, "likes":36, "image":"http://g01.a.alicdn.com/kf/HTB1hKMJKXXXXXauaXXXq6xXFXXXo/Obey-Big-Boss-Metal-Gear-Solid-Mens-Womens-printed-hoodies-cheap-hoodies.jpg"},
//
// ];

this.getProducts = function(){
  return $http.get('/nerdy/products').then(function(response){
    return response.data;
  });
};

});
