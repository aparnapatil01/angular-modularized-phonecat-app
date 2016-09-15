angular.
	module("phoneDetail").
	component('phoneDetail', {
		templateUrl:"phone-list/phone-detail.template.html",
		controller: ['$routeParams', '$http',function PhoneDetailController($routeParams, $http){
			var self=this;


			$http.get('phones/'+$routeParams.phoneId+'.json').then(function(response){
				self.phone = response.data;
				self.setImage(self.phone.images[0]);
			});

			self.setImage = function(img){
				self.mainImageUrl = img;
			}
		}]
	});	