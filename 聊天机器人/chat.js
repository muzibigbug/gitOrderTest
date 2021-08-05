$(function() {
    // 初始化右侧滚动条
    // 这个方法定义在scroll.js中
    resetui();

    $(window).keyup(function(event) {
        if (event.keyCode == 13) {
            $('#btnSend').click();
        }
    });
    // 为发送按钮绑定鼠标点击事件
    $('#btnSend').on('click', function(event) {
        var text = $('#ipt').val().trim();
        if (text.length <= 0) {
            return $('#ipt').val('');
        }
        // 如果用户输入的内容，将内容追加到页面上

        $("#talk_list").append(`
            <li class="right_word">
                <img src="img/person02.png" /> <span>${text}</span>
            </li>
            `)
        $('#ipt').val('');
        // 重置滚动条位置
        resetui();
        getMsg(text);

    });
    // 服务器根据请求内容返回数据
    function getMsg(text) {
        $.ajax({
            url: 'http://ajax.frontend.itheima.net:3006/api/robot',
            data: {
                spoken: text
            },
            success: function(res) {
                console.log(res);
            }
        })
    }
})