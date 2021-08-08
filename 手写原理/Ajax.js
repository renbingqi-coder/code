// $.ajax({
// 				url:'http://developer.duyiedu.com/edu/testJsonp',
// 				type:'get',
// 				dataType:'jsonp',
// 				success:function(data){
// 					console.log('111');
// 					console.log(data);
// 				}
// 			});
/**
 * 1.type  请求方式  支持get post
 * 2.url  请求地址
 * 3.data  请求参数   数据为字符串
 * 4.isAsyn  是否异步
 * 5.success  成功函数
 * 6.error  失败的回调函数
 */
function Ajax(obj){
	var Type = obj.type || 'GET';
	var url = obj.url || '';
	var data = obj.data || '';
	var isAsyn = obj.isAsyn != undefined ? obj.isAsyn : true;
	var success = obj.success || function(){};
	var error = obj.error || function(){};
	// 创建xhr对象
	var xhr = null;
	Type = Type.toUpperCase()
	if(window.XMLHttpRequest){
		xhr = new XMLHttpRequest;
	}else if(window.ActiveXObject){
		// IE
		xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}else{
		alert('该浏览器不支持ajax请求')
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.status === 200 && xhr.readyState ===4){
			success(JSON.parse(xhr.responseText));
		}
	}
	
	//错误监听
	xhr.onerror = function(e){
		error(error);
	}
	
	if(Type ==='GET'){
		// get
		if(url.indexOf('?') != -1){
			if(url.indexOf('?') === url.length - 1){
				url += data;
			}else{
				url +='&' + data;
			}
		}else{
			url +='?' + data;
		}
		console.log(Type,url,isAsyn);
		xhr.open(Type,url,isAsyn);
		xhr.send();
	}else{
		// post
		xhr.open(Type,url,isAsyn);
		xhr.setRequestHeader('Content-Type','application/x-www-form-urlencode')
		xhr.send(data);
	}
}