import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    if(params.language_id){
      return this.store.findRecord("language", params.language_id).then((language)=>{
        return this.store.createRecord('framework',{
          language: language
        })
      });
    }
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