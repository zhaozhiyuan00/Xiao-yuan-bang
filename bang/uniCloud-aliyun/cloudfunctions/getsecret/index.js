'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
    //event为客户端上传的参数
	
		const {
			code
		} = event
		console.log('event : ', event)
		  let result = {}
		  if("mp-weixin"==context.PLATFORM){
		    result = (await uniCloud.httpclient.request("https://api.weixin.qq.com/sns/jscode2session",{
		      method: "GET",
		      data: {
		        'appid': "wx8c2ef6c8f80f9508",
		        'secret': "af6497956ad3e35a94d0afbcb2645f32",
		        'js_code': code,
		        'grant_type': "authorization_code"
		      },
		      dataType: 'json' // 指定返回值为json格式，自动进行parse
		    })).data
		    return {code:0,data: result}
		  }
			//返回数据给客户端
			return {code:-1,data: result}
 // 获取表'unicloud-test'的集合对象
     // 获取表中的10条数据，结果为json格式
// 返回json给客户端
};