angular.module('tagger')
.directive('listView', function() {
    return {
        scope: {
            messages: '<'
// < one-way binding
// = two-way binding
// blank is isolate scoping

        },
        restrict: 'E',
        controller: () => {
            console.log('inside list View component');
        },
        controllerAs: 'listViewCtrl',
        bindToController: true,
        templateUrl: 'src/templates/listView.html'
    }
})