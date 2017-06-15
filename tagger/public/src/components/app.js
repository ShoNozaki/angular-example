angular.module('tagger')
.controller('appController', function() {
    this.messages = [
        {text: 'blaghasig', username: 'sho'},
        {text: 'blaghasigasedfdsaf', username: 'tim'},
        {text: 'blaghasigasdf', username: 'joe'},
        {text: 'blaghasigeggraeg', username: 'jon'}
    ]
})
.directive('app', function() {
    return {
        scope: {},
        restrict: 'E',
        controller: 'appController',
        controllerAs: 'appCtrl',
        bindToController: true,
        templateUrl: 'src/templates/app.html'
    }

})