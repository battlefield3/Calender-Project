myApp.controller('registerController',['$scope','$state', function($scope,$state) {
	/*$scope.newUser={
		'id':,
		firstName:,
		lastName:,
		email:,
		password:
	};*/
	var ranNum=Math.floor((Math.random() * 10) + 1);
	$scope.defaultUser={
	 		'id':9999,
	 		firstName:'',
	 		lastName:'',
	 		email:'',
	 		password:'',
	 		active:0
	 	};

	$scope.defaultUser.id=ranNum;

 	$scope.user=[
	 	{
	 		'id':0,
	 		firstName:'Prashant',
	 		lastName:'Kumar',
	 		email:'agprashant5@gmail.com',
	 		password:'12345678',
	 		active:0
	 	}
 	];

 

 	$scope.submit=function(){
 		console.log('hello');
 		console.log($scope.defaultUser);

 		var getUser=localStorage.getItem("user");//Assuming initially local storage contains empty user object.
 		var parsedUser=JSON.parse(getUser);
 		if($scope.defaultUser.email!=''&& $scope.defaultUser.password!=''){
 			$scope.defaultUser.active=1;
 			parsedUser.push($scope.defaultUser);
 			localStorage.setItem("user",JSON.stringify(parsedUser));
 			$state.go('app.login');
 		}
 		else
 		{
 			$state.go('app');
 		}	
 	};
}]);


myApp.controller('loginController',['$scope','$state', function($scope,$state) {

 	/*$scope.user=[
	 	{
	 		'id':0,
	 		email:'agprashant5@gmail.com',
	 		password:'12345678'
	 	}
 	];*/

 	$scope.loginUser={
 		'id':999,
 		email:'',
 		password:''
 	};

 

 	$scope.submit=function(){
 		console.log('hello');
 		console.log($scope.loginUser);
 		var getUser=localStorage.getItem("user");
 		var parsedUser=JSON.parse(getUser);

 		var flag=0;
 		for(i=0;i<parsedUser.length;i++)
 		{
 			var a=parsedUser[i];
 			console.log(a);
 			console.log($scope.loginUser);
 			if(a.email==$scope.loginUser.email && a.password==$scope.loginUser.password)
 			{
 				flag=1;
 				$state.go('app.admin');
 			}

 		}
 		if(flag==0){
 		alert('Enter a valid combination of email id and password');
 		$state.go('app.login');
 	}


 		/*localStorage.setItem("user",JSON.stringify($scope.user));
 		var retrievedObject=localStorage.getItem("user");
 		console.log( JSON.parse(retrievedObject));
 		console.log(localStorage.getItem("user"));

 		for(i=0;i<$scope.user.length;i++)
 		{
 			var a=$scope.user[i];
 			if(a.email==a.email && a.password==a.password)
 			{
 				$state.go('app.admin');
 			}

 		}*/

 	};
}]);


myApp.controller('adminController',['$scope','$state', function($scope,$state) {
	

	var activeUser=JSON.parse(localStorage.getItem("user"));
	var activeUserName="";
	for(i=0;i<activeUser.length;i++)
	{
		if(activeUser[i].active==1)
		{
			activeUserName=activeUser[i].firstName;

			$scope.options = {
		        weekOffset: 1,
		        daysOfTheWeek: ['SUN','MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
		        constraints: {
		            startDate: moment().subtract(1, 'months').format('YYYY-MM-15'),
		            endDate: moment().add(2, 'months').format('YYYY-MM-15')
		        }
		    };

		    $scope.events = [
		        { date: moment().add(3, 'days').format(), title:"Will be more Happy" },
		        { date: moment().subtract(5, 'days').format(), title: "was sad" },
		        { date: moment().add(1, 'days').format(), title: "Will be happy" }
		    ];
		    $scope.events[0].title=activeUserName+" "+$scope.events[0].title;
		    $scope.events[1].title=activeUserName+" "+$scope.events[1].title;
		    $scope.events[2].title=activeUserName+" "+$scope.events[2].title;
		    $scope.showEvents = function(events) {
		        alert(events.map(function(e) { return e.title }).join("\n"));
		    };

		}
	}

    
}]);