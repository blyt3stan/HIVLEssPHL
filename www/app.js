var app = angular.module('app', []);

app.controller('mainController', [
    '$scope',
    '$interval',
    function (
        $scope,
		$interval) {

    		$scope.isHome = false;
    		$scope.isHIVCenters = false;
    		$scope.isInformation = false;
    		$scope.isDarkRoom = false;

    		$scope.isLogin = true;

			$scope.test = 'this is a test app edi wow';


			$scope.list = [
				{
					title: "Rotary AIDS day events turns potlight on World’s Deadliest Infectious Disease"
				},
				{
					title: "Philippines has highest HIV infection growth rate in Asia-Pacific: U.N."
				},
				{
					title: "DOH: More Millennials Diagnosed with HIV"
				},
				{
					title: "Philippines has highest HIV infection growth rate in Asia-Pacific: U.N."
				},
				{
					title: "DOH: More Millennials Diagnosed with HIV"
				},
				{
					title: "Philippines has highest HIV infection growth rate in Asia-Pacific: U.N."
				},
				{
					title: "DOH: More Millennials Diagnosed with HIV"
				},
				{
					title: "Philippines has highest HIV infection growth rate in Asia-Pacific: U.N."
				},
				{
					title: "DOH: More Millennials Diagnosed with HIV"
				},
				{
					title: "Philippines has highest HIV infection growth rate in Asia-Pacific: U.N."
				},
				{
					title: "DOH: More Millennials Diagnosed with HIV"
				},
				{
					title: "Philippines has highest HIV infection growth rate in Asia-Pacific: U.N."
				},
				{
					title: "DOH: More Millennials Diagnosed with HIV"
				}
			];


			$scope.goHome = function() {
				$scope.isHome = true;
	    		$scope.isHIVCenters = false;
	    		$scope.isInformation = false;
    			$scope.isDarkRoom = false;
    			$scope.isLogin = false;
			};

			$scope.goHIVCenters = function() {
				$scope.isHome = false;
	    		$scope.isHIVCenters = true;
	    		$scope.isInformation = false;
    			$scope.isDarkRoom = false;
    			$scope.isLogin = false;
			};

			$scope.goInformation = function() {
				$scope.isHome = false;
	    		$scope.isHIVCenters = false;
	    		$scope.isInformation = true;
    			$scope.isDarkRoom = false;
    			$scope.isLogin = false;
			};

			$scope.goDarkRoom = function() {
				$scope.isHome = false;
	    		$scope.isHIVCenters = false;
	    		$scope.isInformation = false;
    			$scope.isDarkRoom = true;
    			$scope.isLogin = false;    		
			};

			$scope.goLogin = function() {
				$scope.isHome = false;
	    		$scope.isHIVCenters = false;
	    		$scope.isInformation = false;
    			$scope.isDarkRoom = false;
    			$scope.isLogin = true;
			};
		}
	]
);