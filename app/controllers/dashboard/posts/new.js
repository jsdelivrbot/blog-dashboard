import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["language_id", "framework_id"],
  language_id:null,
  framework_id:null,
  actions:{
    save(model){
      model.save().then((model)=>{
        this.transitionToRoute("dashboard.posts.show", model.get("id"));
      });
    },
    destroyPost(model){
      let parentRoute=  model.get("parentRoute");
      let parentId= model.get("parentId");
      model.destroyRecord().then(()=>{
        this.transitionToRoute(parentRoute, parentId);
      });
    }
  }
});
