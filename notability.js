/*************************************

项目名称：Notability
下载地址：https://t.cn/A6Cgjtei
脚本作者：转载于chxm1023
使用声明：⚠️仅供参考，🈲售卖！

**************************************

[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/wuai19/rewrite/main/notability.js

[mitm]
hostname = notability.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023 = {
   "data" : {
     "processAppleReceipt" : {
       "error" : 0,
       "subscription" : {
         "productId" : "com.gingerlabs.Notability.premium_subscription",
         "originalTransactionId" : "570001184068302",
         "tier" : "premium",
         "refundedDate" : null,
         "refundedReason" : null,
         "isInBillingRetryPeriod" : false,
         "expirationDate" : "2099-09-09T09:09:09.000Z",
         "gracePeriodExpiresAt" : null,
         "overDeviceLimit" : false,
         "expirationIntent" : null,
         "__typename" : "AppStoreSubscription",
         "user" : null,
         "status" : "canceled",
         "originalPurchaseDate" : "2022-09-09T09:09:09.000Z"
       },
       "__typename" : "SubscriptionResult"
    }
  }
};

$done({body : JSON.stringify(chxm1023)});
