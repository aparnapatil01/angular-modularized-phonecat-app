angular
	.module("phoneList")
	.component("phoneList",{
		templateUrl:"phone-list/phone-list.template.html",
		controller:function PhoneListController($http){
			var self = this;
			$http.get('phones/phones.json'). then(function(response){
				self.phones = response.data;
			});

			self.orderProp = 'age';
		}
	});