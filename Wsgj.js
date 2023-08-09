/*************************************

脚本功能：网速管家——会员
下载地址：https://apps.apple.com/us/app/touchretouch/id373311252
软件版本：4.3.6
脚本作者：转载于chxm1023
更新时间：2023-8-5
使用声明：此脚本仅供学习与交流，请勿贩卖！⚠️⚠️⚠️

**************************************

[rewrite_local]

^https:\/\/api-v3\.speedtest\.cn\/user\/info url script-response-body https://raw.githubusercontent.com/wuai19/rewrite/main/Wsgj.js

[mitm]

hostname = api-v3.speedtest.cn

*************************************/


var body = $response.body;
var chxm1023 = JSON.parse(body);

chxm1023.data.integral = "999999999";
chxm1023.data.vipExpire = "2099-09-09 09:09:09";
chxm1023.data.isVip = 1;

body = JSON.stringify(chxm1023);

$done({body});
