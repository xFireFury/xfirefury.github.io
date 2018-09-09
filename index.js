//based on a pen by @robinselmer
var url = "https://api.minetools.eu/ping/play.mythicprisons.ml";
//https://mcapi.us/server/status?ip=666.fluctis.com&port=25757
$.getJSON(url, function(r) {
    //data is the JSON string
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
 if(r.players.online > 0 ){ pl = '<br>Leader: '+r.players.sample[0].name;  } 
  $('#rest').html('<br><h3><center>Players Online: '+r.players.online+pl);

    
});