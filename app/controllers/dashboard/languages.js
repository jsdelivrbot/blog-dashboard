import Ember from 'ember';

export default Ember.Controller.extend({  
  session: Ember.inject.service(),
  admin: Ember.computed("currentPath", function(){
    return this.get("session").get("session.authenticated.admin");
  })
});