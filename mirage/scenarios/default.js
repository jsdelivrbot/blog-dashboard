export default function(server) {
  server.createList('language', 4);
  server.create("framework",{
    name:"Ember.js",
    language_id:5,
    post_ids:[2]
  });
  server.create("post",{
    title:"Some cool title about how cool ember is",
    author:"SEDAD KOSOVAC",
    date: "5 DECEMBER 2017",
    language_id:5,
    block_ids:[1,2,3,4]
  });
  server.create("post",{
    title:"Some cool title about how cool ember is",
    author:"Sedad Kosovac",
    framework_id:1
  });
  server.create("language",{
    name:"JavaScript",
    framework_ids:[1],
    post_ids:[1]
  });
  server.createList('post', 4);
  server.create("block", {
    content:"<h2>Header</h2>",
    post_id:1,
    status:'header'
  });
  server.create("block", {
    content:"<p>Block</p>",
    post_id:1,
    status:'block'
  });
  server.create("block", {
    content:"<pre>Code</pre>",
    post_id:1,
    status:'code'
  });
  server.create("block", {
    content:"<div>Hint</div>",
    post_id:1,
    status:'hint'
  });
}
