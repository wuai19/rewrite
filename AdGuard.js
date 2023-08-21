 /*************************************
 
 项目名称：AdGuard-Safari浏览器扩展
 下载地址：https://apps.apple.com/us/app/adguard-adblock-privacy/id1047223162
 脚本作者：转载于chxm1023
 使用声明：⚠️仅供参考，🈲转载与售卖！
 
 **************************************
 
 [rewrite_local]
 
 ^https:\/\/mobile-api\.adguard\.org\/api\/.+\/ios_validate_receipt\/(.*?) url script-response-body https://raw.githubusercontent.com/wuai19/rewrite/main/AdGuard.js
 
 [mitm]
 hostname = mobile-api.adguard.org
 
 *************************************/
 
 
 var chxm1023 = JSON.parse($response.body);
 
 chxm1023 = {"products":[{"premium_status":"ACTIVE","product_id":"com.adguard.lifetimePurchase"}]}
 
 $done({body : JSON.stringify(chxm1023)});
