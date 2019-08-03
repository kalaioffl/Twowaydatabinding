var myApp = angular
				.module("myModule",[])
				.controller("myController", function ($scope){
					
					var employee ={
							firstName:"kalaivani",
							lastName :"Devadas",
							gender:"Female",
					};
					$scope.employee= employee;
				})