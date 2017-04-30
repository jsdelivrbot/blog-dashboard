import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ["language_id", "framework_id"],
  language_id:null,
  framework_id:null,
  blocks:["header", "paragraf", "code", "hint", "list"],
  actions:{
    addText(){
      
    }
  }
});