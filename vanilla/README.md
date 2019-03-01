# README

```html

<html>
  <head>
    <title>MVC</title>
  </head>
  <body>
  
  <div id="view">
    <button>Action</button>
  </div>

  <script>
    let model = 0;
    document.querySelector('button').addEventListener('click', controller);
    function controller(event) {
      model += 1;
    }
  </script>

  </body>
</html>

```
