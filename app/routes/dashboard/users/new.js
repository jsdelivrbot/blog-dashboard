import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel(){
    if(!this.get("session").get("session.authenticated.admin")){
      this.transitionTo("dashboard");
    }
  },
  model(){
    return this.store.createRecord('user');
  },
  actions: {
    save(model){
      model.save().then(()=>{
        this.transitionTo("dashboard.users")
      });
    },
    willTransition() {
      let language = this.get('controller.model');
      if(language.get('isNew') === true){
        this.store.unloadRecord(language);
      }
    }
  }
});