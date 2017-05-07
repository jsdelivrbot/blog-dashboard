import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    if(params.framework_id){
      return this.store.findRecord("framework", params.framework_id).then((framework)=>{
        return this.store.createRecord('post',{
          framework: framework
        })
      });
    }
    if(params.language_id){
      return this.store.findRecord("language", params.language_id).then((language)=>{
        return this.store.createRecord('post',{
          language: language
        })
      });
    }
  },
  actions: {
    resetController(controller, isExiting){
      if(isExiting){
        controller.set("language_id", undefined);
        controller.set("framework_id", undefined);
      }
    },
    willTransition() {
      let post = this.get('controller.model');
      if(post.get('isNew') === true){
        this.store.unloadRecord(post);
      }
    }
  }
});