define(['backbone'],function(){

  var Router = Backbone.Router.extend({

    routes: {
      "home":      "homeFun",
      "store":     "storeFun",
      "order":     "orderFun" ,
      "cart":      "cartFun" ,
      "mine":      "mineFun",
      'fkms':       'fkmsFun',
      'score':       'scoreFun',
      "*actions":  "defaultAction"
    },

    homeFun: function() {
        require(['./modules/home/home.js'],function(home){
          home.render();
        })
    },

    storeFun: function() {
        require(['./modules/store/store.js'],function(store,baidu){
          store.render();
        })
    },
    orderFun:function(){
        require(['./modules/order/order.js'],function(order){
          order.render();
        })
    },
    cartFun:function(){
        require(['./modules/cart/cart.js'],function(cart){
          cart.render();
        })
    },
    mineFun:function(){
          require(['./modules/mine/mine.js'],function(mine){
            mine.render();
          })
    },
    fkmsFun:function(){
          require(['./modules/fkms/fkms.js'],function(fkms){
            fkms.render();
          })
    },
    scoreFun:function(){
          require(['./modules/score/score.js'],function(score){
            score.render();
          })
    },
    defaultAction:function(){
      location.hash = 'home';
    },

  });


  var router = new Router();
})
