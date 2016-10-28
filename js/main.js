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
 $('#send').click(function(){
   var text = $('#info').val();
   $('#info').val('');
   var p = "<p class='me'><span>"+text+'</span></p>';
   $('#chat').append(p);
   $('#chat').scrollTop( $('#chat')[0].scrollHeight );
    get_jsonp(text);
 })
 function show(data){
   var p = "<p class='robot'><span>"+data.result.text+'</span></p>';
   $('#chat').append(p);
   $('#chat').scrollTop( $('#chat')[0].scrollHeight );
 }
