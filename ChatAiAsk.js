/*************************************

脚本功能：Chat Ai-Ask Anything——解锁订阅
下载地址：https://apps.apple.com/us/app/chat-ai-ask-anything/id1660877567
软件版本：1.5
脚本作者：转载于Guding88
更新时间：2023-8-6
TG反馈群：https://t.me/GudingChat
TG频道群：https://t.me/Guding88
使用声明：此脚本仅供学习与交流，请勿贩卖！⚠️⚠️⚠️
‎
**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/wuai19/rewrite/main/ChatAiAsk.js

[MITM]
hostname = buy.itunes.apple.com

*******************************/

var guding = JSON.parse($response.body);
guding = {
  "environment": "Production",
  "pending_renewal_info": [
    {
      "product_id": "https://t.me/Guding88",
      "auto_renew_status": "1"
    }
  ],
  "status": 0,
  "latest_receipt_info": [
    {
      "quantity": "1",
      "purchase_date_ms": "1688386973000",
      "expires_date": "6666-06-06 06:06:06 Etc\/GMT",
      "expires_date_pst": "6666-06-06 06:06:06 America\/Los_Angeles",
      "is_in_intro_offer_period": "false",
      "transaction_id": "540001260447637",
      "is_trial_period": "false",
      "original_transaction_id": "540001260447637",
      "product_id": "https://t.me/Guding88",
      "original_purchase_date_ms": "1688386974000",
      "expires_date_ms": "148204937166000"
    }
  ]
}
$done({ body: JSON.stringify(guding) });
