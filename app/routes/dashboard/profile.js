import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
  model(){
    return this.store.findRecord('profile', 1);
  },
  actions:{
    save(model){
      model.save().then((model)=>{
        this.transitionTo("dashboard.languages");
      });
    }
  }
});