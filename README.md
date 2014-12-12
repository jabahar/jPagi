jPagi
=====
a simple jQuery pagination plugin

###How to Use

1. Include jQuery and jPagi plugin files (js and css) in the `<head>` section of the document.  
  ```html  
    <link rel="stylesheet" type="text/css" href="path-to-file/jPagi.css">
    <script type="text/javascript" src="path-to-file/jquery.min.js"></script>
    <script type="text/javascript" src="path-to-file/jPagi.js"></script>
  ```
  
2. Add just a single javascript line as below to enable pagination after the document is loaded.  
  ```javascript
  $(document).ready(function(){
       $('#content').jPagi(); //content is the id of the div containing the items
  });
  ```
3. Put the elements you want to be shown inside the container div (*content* here for example)
   ```html  
   <div id="content">
      <p>As I grow older I pay less attention to what men say. I just watch what they do.</p>
      <p>Age considers youth ventures.</p>
      <p>What most persons consider as virtue after the age of 40 is simply a loss of energy.</p>
      ...
      ...
   </div>
   ```
  
4. In the HTML put the following code where you would like to display the pagination buttons.  
   ```html  
   <div class="jpagi-nav-btns"></div>
   ```
  
5. Done!



