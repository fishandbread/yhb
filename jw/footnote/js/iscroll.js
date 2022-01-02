//下拉刷新（自定义实现此方法）
function pullDownAction () {
    setTimeout(function () {        //模拟网络堵塞, 设置延迟
        var el, li, i;
        el = document.getElementById('thelist');

        for (i=0; i<3; i++) {
            li = document.createElement('li');
            li.innerHTML = '1';
            el.insertBefore(li, el.childNodes[0]);
        }
        myScroll.refresh();        //数据加载完成后，调用界面更新方法 (ie: on ajax completion)
    }, 1000);    
}

function pullUpAction () {
    setTimeout(function () {   
        var el, li, i;
        el = document.getElementById('thelist');
        for (i=0; i<3; i++) {
            li = document.createElement('li');
            li.innerHTML = '111';
            el.appendChild(li, el.childNodes[0]);
        }    
        myScroll.refresh();        // 数据加载完成后，调用界面更新方法 (ie: on ajax completion)
    }, 1000);    
}