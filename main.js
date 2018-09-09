var url = "https://api.minetools.eu/ping/play.mythicprisons.ml";
$.getJSON(url, function(r) {
 if(r.error){
    $('#rest').html('Server Offline');
   return false;
 } 
var pl = '';
 if(r.players.online > 0 ){ pl = '<br>Leader: '+r.players.sample[0].name;  } 
  $('#rest').html('<br><h3><center>Players Online: '+r.players.online+pl);

    
});
