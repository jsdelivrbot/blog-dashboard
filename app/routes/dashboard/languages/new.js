import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('language');
  },
  actions: {
    save(model){
      model.save().then(()=>{
        this.transitionTo("dashboard.languages")
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