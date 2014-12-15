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
      <p>None are so old as those who have outlived enthusiasm.</p>
      ...
      ...
   </div>
   ```
  
4. In the HTML put the following code where you would like to display the pagination buttons.  
   ```html  
   <div class="jpagi-nav-btns"></div>
   ```
  
5. Done!

###Options
jPagi has the following two options that you can specify while initializing the plugin:

| Option        | Description                                   |
| ------------- |-------------                                  | 
| show_per_page | Number of items to show per page              |
| show_nav_btns | Number of navigation buttons to be visible    |

####Example
The following code will list 7 items/elements at a given time from the parent item and will show only 3 navigation buttons at a given time. 

```javascript
  $(document).ready(function(){
       $('#content').jPagi({show_per_page:7,show_nav_btns:3}); 
  });
```
  So suppose there are 60 elements within the div content, then there will be 9 total pages and only 3 navigation buttons will be visible at any time apart from the next and previous buttons.



