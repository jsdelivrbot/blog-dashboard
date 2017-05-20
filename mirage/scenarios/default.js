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
    content:`<p>orem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
    not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with 
    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>`,
    post_id:1,
    status:'block'
  });
  server.create("block", {
    content:`
    <pre>
    class Greeter
      def initialize(name)
        @name = name.capitalize
      end

      def salute
        puts "Hello #{@name}!"
      end
    end
   </pre>`,
    post_id:1,
    status:'code'
  });
  server.create("block", {
    content:`<div>It is a long established fact that a reader will 
    be distracted by the readable content of a page when looking at its layout. 
    The point of using Lorem Ipsum is that it has a more-or-less normal distribution </div>`,
    post_id:1,
    status:'hint'
  });
}
