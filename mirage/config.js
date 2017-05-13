import Response from 'ember-cli-mirage/response';

export default function() {
  this.namespace = '/api';
    this.get('/posts/:id');
    this.post('/posts');
    this.get('/posts');
    this.get('/languages/:id');
    this.post('languages', function(schema, request) {
       let attrs = JSON.parse(request.requestBody).language;
       if ( attrs.name!=null) {
         return schema.languages.create(attrs); 
       } else {
         return new Response(422, {}, {
            "errors": [
              {
                "source": { "pointer": "/data/attributes/name"},
                "detail": "Please enter a name"
              }
            ]
          });
       }
      });
    this.post('frameworks', function(db, request) {
      let attrs = JSON.parse(request.requestBody).framework;
      let language= db.languages.find(attrs.language_id);

      if ( attrs.name!=null) {
          let framework= db.frameworks.create(attrs); 
          if(language && language.framework_ids){
            language.framework_ids.push(framework.id);  
          }
        return framework;
       } else {
         return new Response(422, {}, {
            "errors": [
              {
                "source": { "pointer": "/data/attributes/name"},
                "detail": "Please enter a name"
              }
            ]
          });
       }
      });
    this.post('posts', function(db, request) {
      let attrs = JSON.parse(request.requestBody).post;
      let language= db.languages.find(attrs.language_id || 0);
      let framework= db.frameworks.find(attrs.framework_id || 0);

      if ( attrs.title!=null && attrs.title!="") {
          let post= db.posts.create(attrs); 
          if(language && language.post_ids){
            language.post_ids.push(post.id);  
          }
          if(framework && framework.post_ids){
            framework.post_ids.push(post.id);  
          }
        return post;
       } else {
         return new Response(422, {}, {
            "errors": [
              {
                "source": { "pointer": "/data/attributes/title"},
                "detail": "Please enter a title"
              }
            ]
          });
       }
      });
    this.put('posts/:id', function(db, request) {
      let attrs = JSON.parse(request.requestBody).post;
      if ( attrs.title!=null && attrs.title!="") {
          let post= db.posts.find(request.params.id).update(attrs); 
          return post;
       } else {
         return new Response(422, {}, {
            "errors": [
              {
                "source": { "pointer": "/data/attributes/title"},
                "detail": "Please enter a title"
              }
            ]
          });
       }
      });
    this.put('blocks/:id', function(db, request) {
      let attrs = JSON.parse(request.requestBody).block;
      if ( attrs.content!=null && attrs.content!="") {
          let block= db.blocks.find(request.params.id).update(attrs); 
          return block;
       } else {
         return new Response(422, {}, {
            "errors": [
              {
                "source": { "pointer": "/data/attributes/title"},
                "detail": "Please enter a title"
              }
            ]
          });
       }
      });

    this.get('/languages', function(schema, request) {
      if(request.requestHeaders){
        return {"languages": schema.db.languages};
      }else{
        return new Response(401, {}, {});
      }
    }); 
    this.get('/frameworks/:id');
    this.get('/frameworks');
    this.put("frameworks/:id");  
    this.del('/posts/:id');
    this.del('/blocks/:id');
    this.get('/blocks/:id');
    this.post('/blocks', function(db) {
      let post= db.posts.find(this.normalizedRequestAttrs().postId);
      if(this.normalizedRequestAttrs().content!=null && this.normalizedRequestAttrs().content!=""){
        let block= db.blocks.create(this.normalizedRequestAttrs());      
        if(post.block_ids){
          post.block_ids.push(block.id);  
        }
        return block;
      }else{
        return new Response(422, {}, {
            "errors": [
              {
                "source": { "pointer": "/data/attributes/content"},
                "detail": "Please enter a content"
              }
            ]
          });
      }
    });
    this.get('/blocks');
  this.post('/sessions', function(db, request) {
    if(true) {
      return {"authenticator":"authenticator:jwt",jwt: "asdf8q94raidflj3892.a2389y428iwhfa.af8923ur29"};
    } else {
      let body = { errors: [{ password: 'Invalid' }, {email: 'Invalid or not found'}] };
      return new Mirage.Response(401,{}, body);
    }
  });  
}
