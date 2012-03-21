define(['jquery', 'knockout', 'viewmodel/userviewmodel'], function ($, ko, userViewModel) {

    return {

        apply: function () {
            $(function () {
                ko.applyBindings(userViewModel);
            });

        }
    };

});