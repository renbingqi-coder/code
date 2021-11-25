function fetchData() {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          console.log('promise')
          reject('server unavailable')
        }, 1000)
      })
    }
function retry(func,time,duration){
    //存放func  和 time
    return new Promise((resolve,reject)=>{
        var tempt = function(){
            func.then(()=>{},(result)=>{
                if(time===0){
                    reject(result);
                }
                else{
                    time--;
                    tempt(func,time,duration)
                }
            })
        }
        tempt(func,time,duration)
    })
}