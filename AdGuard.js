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


eval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('3 0=1.4($5.2);0={"6":[{"7":"8","9":"a.b.c"}]}$d({2:1.e(0)});',15,15,'chxm1023|JSON|body|var|parse|response|products|premium_status|ACTIVE|product_id|com|adguard|lifetimePurchase|done|stringify'.split('|'),0,{}))
