$(function(){
  $('#signinBtn').click(signIn);
});

function signIn(){
  client.getAccessToken().then(function(accessToken){
    $('#accessToken').text(accessToken);
  }).catch(function(e){
    console.error(e);
  });
}