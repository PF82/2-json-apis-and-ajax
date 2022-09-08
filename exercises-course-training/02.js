/*
2-Change Text with click Events

When the click event happens, you can use JavaScript to update an HTML element.

For example, when a user clicks the Get Message button, it changes the text of the element with the class message to say Here is the message.

This works by adding the following code within the click event:

document.getElementsByClassName('message')[0].textContent="Here is the message";

Add code inside the onclick event handler to change the text inside the message element to say Here is the message.
*/

<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('getMessage').onclick = function(){
      // Add your code below this line


      // Add your code above this line
    }
  });
</script>

<style>
  body {
    text-align: center;
    font-family: "Helvetica", sans-serif;
  }
  h1 {
    font-size: 2em;
    font-weight: bold;
  }
  .box {
    border-radius: 5px;
    background-color: #eee;
    padding: 20px 5px;
  }
  button {
    color: white;
    background-color: #4791d0;
    border-radius: 5px;
    border: 1px solid #4791d0;
    padding: 5px 10px 8px 10px;
  }
  button:hover {
    background-color: #0F5897;
    border: 1px solid #0F5897;
  }
</style>

<h1>Cat Photo Finder</h1>
<p class="message box">
  The message will go here
</p>
<p>
  <button id="getMessage">
    Get Message
  </button>
</p>


