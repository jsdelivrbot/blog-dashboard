import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
  session: Ember.inject.service(),
  model(){
    return this.store.findRecord('profile', 1);
  },
  actions:{
    save(model){
      model.save().then(()=>{
        this.get("session").set("session.authenticated.photo", model.get("photo"));
        this.transitionTo("dashboard.languages");
      });
    }
  }
});