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
    this.post('/frameworks', function(db, request) {
      let language= db.languages.find(this.normalizedRequestAttrs().languageId);
      let framework= db.frameworks.create(this.normalizedRequestAttrs());      
            console.log(language.framework_ids.push(framework.id));

      return framework;
    });
}
