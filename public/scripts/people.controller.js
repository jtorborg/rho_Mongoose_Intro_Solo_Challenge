angular.module('meanApp')
    .controller('PeopleController', PeopleController);

function PeopleController($http) {

    console.log('PeopleController loaded');

    var controller = this;
    controller.people = [];
    controller.name;
    controller.hometown;
    controller.favoritemovie;





    controller.listPeople = function() {
        //this function will make a request to our server via some route
console.log('Listing people');
        $http.get('/people').then(function(response) {
                console.log('response', response);
                controller.people = response.data;
                console.log('controller.people', controller.people);
            },
            function(error) {
                console.log('error making request', error);
            }); //end of err function of get request
    }; //end of listPeople

    controller.addPerson = function() {
        var data = {
            name: controller.name,
            hometown: controller.hometown,
            favoritemovie: controller.favoritemovie

        };
        $http.post('/people', data).then(function(response) {
            console.log('response', response);
            console.log('controller name', controller.name);
            console.log('controller hometown', controller.hometown);
            console.log('controller favoritemovie', controller.favoritemovie);
            //console.log('data name', data.name); undefined

        });
    };
}; //end of PeopleController
