import Ember from 'ember';

export default Ember.Controller.extend({  
  session: Ember.inject.service(),
  photo: Ember.computed("currentPath", function(){
    if(this.get("session").get("session.authenticated.photo")){
      return this.get("session").get("session.authenticated.photo");
    }
  }),
  loginRoute: Ember.computed("currentPath", function(){
    return this.currentPath=="login";
  })
});