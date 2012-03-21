/// <reference path="model/Person.js" />
/// <reference path="viewmodel/userviewmodel.js" />
/// <reference path="infrastructure/binder.js" />

require.config({
    paths: {
        'jquery': 'http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.1.min',
        'knockout': 'libs/knockout-latest.min'
    }
});

require(['viewmodel/userviewmodel', 'model/Person', 'infrastructure/binder'], function (userViewModel, Person, binder) {

    binder.apply();



    userViewModel.sayHelloJquery();

    var person = new Person('bob');
    userViewModel.sayHelloKnockout(person);
});