 import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },
  model(params){
    console.log(params)
    return this.store.query("post", {
      framework_id: params.framework_id,
      page: params.page
    }).then((results)=>{
      return{
        posts: results,
        meta: results.get("meta")
      }
    }) 
  },
  setupController(controller, {posts, meta}){
    controller.set("posts", posts);
    controller.set("navigate", meta);
  }
}); 