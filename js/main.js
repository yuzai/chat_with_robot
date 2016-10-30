function get_jsonp(text) {
    $.getJSON("http://op.juhe.cn/robot/index?callback=?", {
        "info": text,
        "dtype": "json",
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
        var p = "<div><span>" + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + '</span></div>';
        pre_time = d;
        $('#chat').append(p);
    }
    var text = $('#info').val();
    $('#info').val('');
    var p = "<div class='me'><div>" + text + '</div></div>';
    $('#chat').append(p);
    $('#chat').scrollTop($('#chat')[0].scrollHeight);
    get_jsonp(text);
})

function show(data) {
    var p = "<div class='robot'><div>" + data.result.text + '</div></div>';
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
