/// <reference path="../knockout-2.0.0.min.js" />


define(['knockout'], function (ko) {

    var ctor = function (name) {
        this.name = ko.observable(name);
    };

    return ctor;
});