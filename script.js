var myapp=angular.module("myList",[]);
myapp.controller("myListController",function($scope){
    $scope.items=["Surjeet"];
    $scope.contacts=["9361832825"]
    $scope.newItem="";
    $scope.newContact="";
    $scope.pushItem=function(){
        if($scope.newContact==""||$scope.newItem=="")
return
        
$scope.items.push($scope.newItem);
$scope.contacts.push($scope.newContact);
$scope.newItem=""
$scope.newContact=""
    
}
$scope.deleteItem=function(index){
$scope.items.splice(index,1);
$scope.contacts.splice(index,1);
}
})