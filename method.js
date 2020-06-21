//一个输出刚刚、几分钟前、几小时、几天前、几周前、几个月前的方法

function timeago(dateTimeStamp){   //dateTimeStamp是一个毫秒时间戳（这里需传入13位的毫秒时间戳）
    var minute = 1000 * 60;      //把分，时，天，周，半个月，一个月用毫秒表示
    var hour = minute * 60;
    var day = hour * 24;
    var week = day * 7;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();   //获取当前时间毫秒
    // console.log(now)
    var diffValue = now - dateTimeStamp;//时间差

    if(diffValue < 0){
        return;
    }
    var minC = diffValue/minute;  //计算时间差的分，时，天，周，月
    var hourC = diffValue/hour;
    var dayC = diffValue/day;
    var weekC = diffValue/week;
    var monthC = diffValue/month;
    if(monthC >= 1 && monthC <= 3){
        result = " " + parseInt(monthC) + "个月前"
    }else if(weekC >= 1 && weekC <= 3){
        result = " " + parseInt(weekC) + "周前"
    }else if(dayC >= 1 && dayC <= 6){
        result = " " + parseInt(dayC) + "天前"
    }else if(hourC >= 1 && hourC <= 23){
        result = " " + parseInt(hourC) + "小时前"
    }else if(minC >= 1 && minC <= 59){
        result =" " + parseInt(minC) + "分钟前"
    }else if(diffValue >= 0 && diffValue <= minute){
        result = "刚刚"
    }else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
        var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
        var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
        var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
        var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
        result = Nyear + "-" + Nmonth + "-" + Ndate
    }
    // return result;
    console.log(result);
}
// timeago(1591621971441)

//==================================================================================================================================================

// 判断浏览器内核、手机系统等，使用 browser.userAgent.mobile
var browser = {
    userAgent: function () {
        var ua = navigator.userAgent;
        var ualower = navigator.userAgent.toLocaleLowerCase();
        return {
            trident: ua.indexOf('Trident') > -1, // IE内核
            presto: ua.indexOf('Presto') > -1, // opera内核
            webKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, // 火狐内核
            mobile: !!ua.match(/AppleWebKit.*Mobile.*/) || !!ua.match(/AppleWebKit/), // 是否为移动终端
            ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // IOS终端
            android: ua.indexOf('Android') > -1 || ua.indexOf('Mac') > -1, // 安卓终端
            iPhone: ua.indexOf('iPhone') > -1 || ua.indexOf('Mac') > -1, // 是否为iphone或QQHD浏览器
            iPad: ua.indexOf('iPad') > -1, // 是否为iPad
            webApp: ua.indexOf('Safari') == -1, // 是否web应用程序，没有头部与底部
            QQbrw: ua.indexOf('MQQBrowser') > -1, // QQ浏览器(手机上的)
            weiXin: ua.indexOf('MicroMessenger') > -1, // 微信
            QQ: ualower.match(/\sQQ/i) == " qq", // QQ App内置浏览器（需要配合使用）
            weiBo: ualower.match(/WeiBo/i) == "weibo", // 微博
            ucLowEnd: ua.indexOf('UCWEB7.') > -1, //
            ucSpecial: ua.indexOf('rv:1.2.3.4') > -1,
            webview: !(ua.match(/Chrome\/([\d.]+)/) || ua.match(/CriOS\/([\d.]+)/)) && ua.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),
            ucweb: function () {
                try {
                    return parseFloat(ua.match(/ucweb\d+\.\d+/gi).toString().match(/\d+\.\d+/).toString()) >= 8.2
                } catch (e) {
                    if (ua.indexOf('UC') > -1) {
                        return true;
                    }
                    return false;
                }
            }(),
            Symbian: ua.indexOf('Symbian') > -1,
            ucSB: ua.indexOf('Firofox/1.') > -1
        };
    }()
};

//==================================================================================================================================================


