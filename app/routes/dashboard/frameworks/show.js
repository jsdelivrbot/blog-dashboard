import Ember from 'ember';

export default Ember.Route.extend({
 queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params){
    return Ember.RSVP.hash({
      framework: this.store.findRecord("framework", params.framework_id),
      posts: this.store.query("post", {
        framework_id: params.framework_id,
        page: params.page
      }).then((results)=>{
        return{
          posts: results,
          meta: results.get("meta")
        }
      }) 
    })
  },
  setupController(controller, model){
    controller.set("model", model.framework);
    controller.set("posts", model.posts.posts);
    controller.set("navigate", model.posts.meta);
  }
});