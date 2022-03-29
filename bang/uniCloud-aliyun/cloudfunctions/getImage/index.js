'use strict';
const db = uniCloud.database()
exports.main = async (event, context) => {
	//event为客户端上传的参数
	const {
		mission,
		openid
	} = event
	console.log('event : ', event)
	const collection = db.collection('tableImages')
	const res = collection.where({
		mission:mission,
		openid:openid
	}).get()
	
	//返回数据给客户端
	return res
};
