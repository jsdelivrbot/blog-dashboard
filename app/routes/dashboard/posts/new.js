import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.createRecord('post',{
      framework: this.store.peekRecord("framework", params.framework_id),
      language: this.store.peekRecord("language", params.language_id)
    });
  },
  actions: {
    save(model){
      model.save().then((post)=>{
        // if(post.get("language").get("id")){
        //  this.transitionTo('dashboard.languages.show', model.get("language"));         
        // }else if(post.get("framework").get("id")){
        //  this.transitionTo('dashboard.frameworks.show', model.get("framework"));         
        // }
      });
    },
    addBlock(block, post){
      this.store.createRecord("block", {
        status: block,
        post: post
      });
    },
    lol(wtf){
      console.log(wtf);
    },
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