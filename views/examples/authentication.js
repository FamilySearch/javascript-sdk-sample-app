// This is a shortcut for $(document).ready()
$(function(){
  
  // When the user clicks the "Sign In" button, call the `signIn` method.
  $('#signinBtn').click(signIn);
});

// Function is called when the user clicks the "Sign In" button.
function signIn(){
  
  // Request an access token (login)
  client.getAccessToken().then(function(accessToken){
    
    // Display the access token
    $('#accessToken').text(accessToken);
  });
}