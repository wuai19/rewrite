/***********************************

> 应用名称：问真八字
> 软件版本：1.2.2
> 脚本作者：转载于ddgksf2013
> 解锁说明：解锁钻石会员权限
> 更新时间：2023-08-04
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止售卖
          ⚠️⚠️⚠️


[rewrite_local]
  
# > 问真八字☆解锁钻石会员权限（2023-08-04）@ddgksf2013
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.*\/user\/getvipinfo url script-response-body https://github.com/wuai19/rewrite/blob/main/wzbz.js


[mitm] 

hostname=bzpp2.iwzbz.com

***********************************/
























var ddgksf2013={"code":-1,"data":{"vipTipsType":0,"vipLevel":3,"adtype":0,"expires":"2099-12-31 23:59:59"},"message":"","validateKey":"","isSuccess":true};
$done({body:JSON.stringify(ddgksf2013)});
