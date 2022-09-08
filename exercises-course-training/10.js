/*
10-Post Data with the JavaScript XMLHttpRequest Method

In the previous examples, you received data from an external resource. You can also send data to an external resource, as long 
as that resource supports AJAX requests and you know the URL.

JavaScript's XMLHttpRequest method is also used to post data to a server. Here's an example:

const xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 201){
    const serverResponse = JSON.parse(xhr.response);
    document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
  }
};
const body = JSON.stringify({ userName: userName, suffix: ' loves cats!' });
xhr.send(body);

You've seen several of these methods before. Here the open method initializes the request as a POST to the given URL of the external 
resource, and uses the true Boolean to make it asynchronous. The setRequestHeader method sets the value of an HTTP request header, 
which contains information about the sender and the request. It must be called after the open method, but before the send method. 
The two parameters are the name of the header and the value to set as the body of that header. Next, the onreadystatechange event 
listener handles a change in the state of the request. A readyState of 4 means the operation is complete, and a status of 201 means 
it was a successful request. The document's HTML can be updated. Finally, the send method sends the request with the body value, 
which the userName key was given by the user in the input field.

Update the code so it makes a POST request to the API endpoint. Then type your name in the input field and click Send Message. Your 
AJAX function should replace Reply from Server will be here. with data from the server. Format the response to display your name 
appended with the text loves cats.
*/

<script>
  document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('sendMessage').onclick = function(){

      const userName = document.getElementById('name').value;
      const url = 'https://jsonplaceholder.typicode.com/posts';
      // Add your code below this line


      // Add your code above this line
    };
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

<h1>Cat Friends</h1>
<p class="message box">
  Reply from Server will be here
</p>
<p>
  <label for="name">Your name:
    <input type="text" id="name"/>
  </label>
  <button id="sendMessage">
    Send Message
  </button>
</p>