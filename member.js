function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills//views/member.html',
        controller : 'skiilsMemberController',
        controllerAs : 'vm',
        bindToController : true,
        scope: {
            member: '='
        }
    };  
}
