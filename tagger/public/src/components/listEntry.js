angular.module('tagger')
.controller('listEntryController', function() {
  this.time = '10:00'
})
.directive('listEntry', function() {
    return {
        scope: {
            message: '<'
        },
        restrict: 'E',
        controller: 'listEntryController',
        controllerAs: 'listEntryCtrl',
        bindToController: true,
        templateUrl: 'src/templates/listEntry.html'
    }
})