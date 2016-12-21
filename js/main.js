function get_jsonp(text) {
    $.getJSON("http://op.juhe.cn/robot/index?callback=?", {
        "info": text,
        "dtype": "jsonp",
        "key": "5886c0226172025122705c2d5a3f1278",
        "userid": 111
    }, show);
}
$('#info').keyup(function(e) {
    var key = e.which;
    if ($('#info').val() == '') {
        $('#send').css({
            background: 'white'
        });
    } else {
        $('#send').css({
            background: '#b2e281'
        });
    }
    if (key == 13) {
        $('#send').trigger("click");
        $('#send').css({
            background: 'white'
        });
    }
});
var pre_time;
$('#send').click(function() {
    var d = new Date();
    if (!pre_time || (pre_time && diff_time(d))) {
        var p = "<div><span>" + d.getHours() + ':' + (d.getMinutes().toString().length == 1?'0'+d.getMinutes():d.getMinutes()) + '</span></div>';
        pre_time = d;
        $('#chat').append(p);
    }
    var text = $('#info').val();
    $('#info').val('');
    $('#send').css({
        background: 'white'
    });
    var p = "<div class='me'><div class='qipao'></div><div class='item'>" + text + '</div></div>';
    $('#chat').append(p);
    $('#chat').scrollTop($('#chat')[0].scrollHeight);
    get_jsonp(text);
})

function show(data) {
  console.log(data);
    var p = "<div class='robot'><div class='qipao'></div><div class='item'>" + data.reason.text + '</div></div>';
    $('#chat').append(p);
    $('#chat').scrollTop($('#chat')[0].scrollHeight);
}

function diff_time(time) {
    if (time.getHours() - pre_time.getHours() == 0) {
        if (time.getMinutes() - pre_time.getMinutes() <= 5)
            return false;
    } else
        return true;
}

var EventUtil = {
  addHandler:function(element,type,handler){
    if(element.addEventListener){
      element.addEventListener(type,handler,false);
    }else if(element.attachEvent){
      element.attachEvent("on"+type,handler);
    }else{
      element["on"+type] = handler;
    }
  },
  removeHander:function(element,type,handler){
    if(element.removeEventListener){
      element.addEventListener(type,handler,false);
    }else if(element.detachEvent){
      element.detachEvent("on"+type,handler);
    }else{
      element["on"+type] = null;
    }
  }
}
EventUtil.addHandler(window,'resize',change_height);
function change_height(){
  $('#chat').css({height:window.innerHeight-$('#chat').next().height()});
  $('#info').css({width:$('#chat').width()-$('#send').width()-30});
  //console.log($('#chat').next().css(width));
}
change_height();
