import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.createRecord('framework',{
      language: this.store.peekRecord("language", params.language_id)
    });
  },
  actions: {
    save(model){
      model.save().then((framework)=>{
        this.transitionTo("dashboard.languages.show", framework.get('language.id'))
      });
    },
    willTransition() {
      let framework = this.get('controller.model');
      if(framework.get('isNew') === true){
        this.store.unloadRecord(framework);
      }
    }
  }
});