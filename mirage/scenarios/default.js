export default function(server) {
  server.createList('language', 4);
  server.create("framework",{
    name:"Ember.js",
    language_id:5,
    post_ids:[2]
  });
  server.create("post",{
    title:"Some cool title about how cool ember is",
    language_id:5
  });
  server.create("post",{
    title:"Some cool title about how cool ember is",
    framework_id:1
  });
  server.create("language",{
    name:"JavaScript",
    framework_ids:[1],
    post_ids:[1]
  });
  server.createList('post', 4);

}
