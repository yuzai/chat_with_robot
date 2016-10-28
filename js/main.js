function get_jsonp(text) {
    $.getJSON("http://op.juhe.cn/robot/index?callback=?", {
        "info" : text,
        "dtype" : "json",
        "key" : "5886c0226172025122705c2d5a3f1278",
        "userid":111
    }, show);
 }
 $('#info').keyup(function(e){
         var key =  e.which;
         if(key == 13)
           $('#send').trigger("click");
     });
var pre_time;
 $('#send').click(function(){
   var d=new Date();
   var p="<div><span>"+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds()+'</span></div>';
   pre_time = d;
   $('#chat').append(p);
   var text = $('#info').val();
   $('#info').val('');
   var p = "<div class='me'><span>"+text+'</span></div>';
   $('#chat').append(p);
   $('#chat').scrollTop( $('#chat')[0].scrollHeight );
    get_jsonp(text);
 })
 function show(data){
   var p = "<div class='robot'><span>"+data.result.text+'</span></div>';
   $('#chat').append(p);
   $('#chat').scrollTop( $('#chat')[0].scrollHeight );
 }
