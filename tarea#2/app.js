
angular.module('chat-firebase',['firebase'])

  
  .controller("chatCtrl",function($scope, $firebase){
    
    //Conectemos a Firebase
    var ref = new Firebase("https://tarea2.firebaseio.com/");
    
    var fb = $firebase(ref);
    
    $scope.nickname="";
    $scope.chats={};
    
    //Enviar chats a Firebase
    $scope.send = function(){
      if($scope.nickname === ""){
        $scope.nickname = "Anonimo";
      }
      var time = new Date();
      fb.$push({
        sender : $scope.nickname,
        text : $scope.chatSend,
        time : time.toString()
      });
    };
    
    $scope.getTiempo = function(tiempo){
      var momentTiempo = moment(tiempo).fromNow();
      return momentTiempo;
    };
    
  
    var syncArreglo = fb.$asObject();
    
    syncArreglo.$bindTo($scope,'chats');
    
    setInterval(function(){
      $scope.$digest();
    },60000);
  });