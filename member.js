function skillMembers() {
  return {
    restrict: 'E',
    templateUrl: 'views/skill-members.html',
    controller: 'SkillMembersController',
    controllerAs: 'skillMembersCtrl',
    bindToController: true,
    scope: {
      skill: '=',
      members: '='
    }
  };
}