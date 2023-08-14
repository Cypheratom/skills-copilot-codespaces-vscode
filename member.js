function skillMembers() {
  return {
    restrict: 'E',
    templateUrl: 'views/skill-members.html',
    controller: 'SkillMembersController',
    controlerAs: 'vm',
    bindToController: true,
    scope: {
      members: '='
    }
  };
}