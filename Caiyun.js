/*************************************

脚本功能：彩云天气Pro——解锁SVIP
下载地址：https://apps.apple.com/us/app/touchretouch/id373311252
软件版本：7.1.0
脚本作者：转载于chxm1023
更新时间：2023-8-5
使用声明：此脚本仅供学习与交流，请勿贩卖！⚠️⚠️⚠️

**************************************/

[rewrite_local]
^https?:\/\/(biz|wrapper)\.cyapi\.cn\/(.+\/(user.+|visitors|activity)|p\/v\d\/vip_info) url script-response-body https://raw.githubusercontent.com/wuai19/rewrite/main/Caiyun.js
^http:\/\/adx\.sogaha\.cn\/sdk\/ad\/get url reject-200

[mitm]
hostname = *.cyapi.cn, adx.sogaha.cn

*************************************/


var wuai19 = JSON.parse($response.body);
const vip = '/vip_info';
const adhf = '/activity';
const user = '(user|visitors)';

if ($request.url.indexOf(vip) != -1){
   wuai19.vip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
    wuai19.svip = {
        "expires_time" : "4092599349",
        "is_auto_renewal" : true
      };
}

if ($request.url.indexOf(adhf) != -1){
    wuai19.activities = [];
}

if ($request.url.indexOf('user') != -1){
    wuai19.result.ranking_above = 99;
    wuai19.result.is_vip = true;
    wuai19.result.vip_expired_at = 4092599349;
    wuai19.result.svip_given = 9999;
    wuai19.result.is_xy_vip = true;
    wuai19.result.xy_svip_expire = 4092599349; 
    wuai19.result.wt.vip = {
        "auto_renewal_type" : "",
        "expired_at" : 0,
        "enabled" : true,
        "svip_apple_expired_at" : 4092599349,
        "is_auto_renewal" : true,
        "svip_expired_at" : 4092599349,
        "svip_auto_renewal_type" : ""
      };
    wuai19.result.wt.svip_given = 9999;
    wuai19.result.wt.ranking_above = 99;
    wuai19.result.is_phone_verified = true;
    wuai19.result.name = "叮当猫の分享频道";
    wuai19.result.avatar = "https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLia6zPUuGQKVOJk2gnjpjHxSIuH7XaOJF2gEk9ic35ibib4QzUcbvNu6EpdHDc1Vciat1xg63ibK6EptWw/132";
    wuai19.result.phone_num = "13145200000";
    wuai19.result.vip_take_effect = 1;
    wuai19.result.is_primary = true;
    wuai19.result.xy_vip_expire = 4092599349;
    wuai19.result.svip_expired_at = 4092599349;
    wuai19.result.svip_take_effect = 1;
    wuai19.result.vip_type = "s";
    wuai19.result.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXJzaW9uIjoxLCJ1c2VyX2lkIjoiNWY1YmZjNTdkMmM2ODkwMDE0ZTI2YmI4Iiwic3ZpcF9leHBpcmVkX2F0IjoxNzA1MzMxMTY2LjQxNjc3MSwidmlwX2V4cGlyZWRfYXQiOjB9.h_Cem89QarTXxVX9Z_Wt-Mak6ZHAjAJqgv3hEY6wpps";
    wuai19.result.bound_status.qq.username = "https://t.me/chxm1023";
    wuai19.result.bound_status.weixin.username = "https://t.me/chxm1023";
    wuai19.result.bound_status.caiyun.username = "https://t.me/chxm1023";
    wuai19.result.bound_status.twitter.username = "https://t.me/chxm1023";
    wuai19.result.bound_status.facebook.username = "https://t.me/chxm1023";
    wuai19.result.bound_status.apple.username = "https://t.me/chxm1023";
    wuai19.result.bound_status.weibo.username = "https://t.me/chxm1023";
}

$done({ body: JSON.stringify(wuai19)});
