/*
 *
 *
脚本功能：拦截100解锁超级会员
软件版本：3.0.2【最高支持版本】
脚本作者：转载于Hausd0rff
更新时间：2022-02-15
使用声明：⚠️此脚本仅供学习与交流，
        请勿贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]

# > 拦截100解锁超级会员
^https?:\/\/tagit\.hyhuo\.com\/cypt\/block100\/get_vip_info$ url script-response-body https://raw.githubusercontent.com/wuai19/rewrite/main/Block100SVIPCrack.js

[mitm] 

hostname = tagit.hyhuo.com
*
*
*/


var body = $response.body;
body = "lvCQG8cCxqficLk+LttK+L2YRSLM39a3jj+Mfoba4wNaV8x54RYUAWrJvcwwFZemFEWG5xK2FlI8k2hlHsSW7uaAeW45GPxSPt1uvVwPI5zLiMJuHvGycPsqS+ozuIELZnJYBJk2unXdxQCbEof4Rmgo3m7O+4ByRFtdbPMM/COhtxmSVeHXnNcSfVlkALSnTyKl0xORwbczE2UdkNg/uioD0AtxIrGJ4jaUVNVKvJsibH0dOKL/bljPSrG31RQt";
$done({ 
    body 
});
