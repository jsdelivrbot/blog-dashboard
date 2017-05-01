export default function() {
  this.namespace = '/api';
    this.get('/posts/:id');
    this.post('/posts');
    this.get('/posts');
    this.get('/languages/:id');
    this.post('/languages');
    this.get('/languages'); 
    this.get('/frameworks/:id');
    this.post('/frameworks');
    this.get('/frameworks');
    this.put("frameworks/:id");  
    this.post('/frameworks', function(db, request) {
      let language= db.languages.find(this.normalizedRequestAttrs().languageId);
      let framework= db.frameworks.create(this.normalizedRequestAttrs());      
      if(language.framework_ids){
        language.framework_ids.push(framework.id);  
      }
      return framework;
    });
    this.put("blocks/:id");
    this.get('/blocks/:id');
    this.post('/blocks', function(db, request) {
      let post= db.posts.find(this.normalizedRequestAttrs().postId);
      let block= db.blocks.create(this.normalizedRequestAttrs());      
      if(post.block_ids){
        post.block_ids.push(block.id);  
      }
      return block;
    });
    this.get('/blocks');  
}
