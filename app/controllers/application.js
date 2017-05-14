import Ember from 'ember';

export default Ember.Controller.extend({  
  session: Ember.inject.service(),
  loginRoute: Ember.computed("currentPath", function(){
    return this.currentPath=="login";
  })
});