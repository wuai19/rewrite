/*************************************

项目名称：得间小说 解锁会员
下载地址：https://apps.apple.com/us/app/%E5%BE%97%E9%97%B4%E5%B0%8F%E8%AF%B4-%E7%9C%8B%E5%B0%8F%E8%AF%B4%E5%A4%A7%E5%85%A8%E7%9A%84%E7%94%B5%E5%AD%90%E4%B9%A6%E9%98%85%E8%AF%BB%E5%B9%B3%E5%8F%B0/id1454487240
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️

**************************************

[rewrite_local]

^https:\/\/dj\.palmestore\.com\/zyuc\/api\/user\/accountInfo url script-response-body https://raw.githubusercontent.com/wuai19/rewrite/main/Dejianxiaoshuo.js

[mitm]

hostname = dj.palmestore.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.body.userInfo.unlockVipInfo = {
        "vipType" : 1,
        "vipExpire" : 4092599349,
        "expireDate" : "2099-09-09"
      };
chxm1023.body.userInfo.vipInfo = {
        "content" : "点击进入购买会员",
        "vipType" : 1,
        "expireDate" : "2099-09-09",
        "halfScreen" : "https://dj.palmestore.com/zytc/public/index.php?ca=FreeVip.Index&source=book",
        "expireDateNew" : "2099-09-09",
        "description" : "开通会员",
        "fullScreen" : "https://dj.palmestore.com/zytc/public/index.php?ca=FreeVip.Index&showContentInStatusBar=1&source=mine",
        "vipExpire" : 4092599349};


$done({body : JSON.stringify(chxm1023)});
