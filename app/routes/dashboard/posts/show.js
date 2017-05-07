import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('post', params.post_id);
  },
  setupController(controller, model){
    controller.set("model", model);
    model.set("edit", true);
  },
  actions:{
    willTransition() {
      let post = this.get('controller.model');
      let parentRoute=  post.get("parentRoute");
      let parentId= post.get("parentId");
      this.transitionTo(parentRoute, parentId);
    } 
  }
});