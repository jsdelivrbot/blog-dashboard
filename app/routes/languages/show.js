import Ember from 'ember';

export default Ember.Route.extend({
 queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params){
    return Ember.RSVP.hash({
      language: this.store.findRecord("language", params.language_id),
      posts: this.store.query("post", {
        language_id: params.language_id,
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
    controller.set("model", model.language);
    controller.set("posts", model.posts.posts);
    controller.set("navigate", model.posts.meta);
  }
});