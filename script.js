window.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('command').innerHTML = "/configSP " + document.location.hash.match("(?:access_token=)[^&]*")[0].replace("access_token=","");
});
