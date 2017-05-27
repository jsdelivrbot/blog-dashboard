import Ember from 'ember';

export default Ember.Controller.extend({  
  session: Ember.inject.service(),
  photo: Ember.computed("currentPath", function(){
    if(this.get("session").get("session.authenticated.photo")){
      return this.get("session").get("session.authenticated.photo");
    }
  }),
  admin: Ember.computed("currentPath", function(){
    return this.get("session").get("session.authenticated.admin");
  }),
  loginRoute: Ember.computed("currentPath", function(){
    return this.currentPath=="login";
  })
});