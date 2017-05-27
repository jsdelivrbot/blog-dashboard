import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service(),
  beforeModel(){
    if(!this.get("session").get("session.authenticated.admin")){
      this.transitionTo("dashboard");
    }
  },
  model(params){
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    save(model){
      model.save().then(()=>{
        this.transitionTo("dashboard.users")
      });
    },
    willTransition() {
      let user = this.get('controller.model');
      user.rollbackAttributes();
    }
  }
});