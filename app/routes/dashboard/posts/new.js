import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    if(params.post_id){
      return this.store.peekRecord("post", params.post_id);
    }else{
      return this.store.createRecord('post',{
        framework: this.store.peekRecord("framework", params.framework_id),
        language: this.store.peekRecord("language", params.language_id)
      });
    }
  },
  actions: {
    resetController(controller, isExiting){
      if(isExiting){
        controller.set("language_id", undefined);
        controller.set("framework_id", undefined);
        controller.set("post_id", undefined);
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