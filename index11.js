//1. 输出页面出现的所有html标签名（tagName）（小写，不重复） 例如输出 [‘html’, ‘script’, ‘body’, ‘div’ ….]

// function test1(arr=[],dom){
//     for(let i = 0; i < dom.length;i++){
//         arr.push(dom[i].tagName.toLocaleLowerCase())
//     if(dom[i].children.length){
//         test1(arr,dom[i].children)
//     }
//     return [...new Set(arr)];
// }


// test1([],document.getElementsByTagName('html'))
const obj = {
    a: 1,
    b: function() {
      console.log(this.a)
    },
    c() {
      console.log(this.a)
    },
    d: () => {
      console.log(this.a)
    },
    e: (function() {
      return () => {
        console.log(this.a);
      }
    })(),
    f: function() {
      return () => {
        console.log(this.a);
      }
    }
  }
  
  console.log(obj.a)  // 1
  obj.b();   // 1
  (obj.b)()  // undefined
  const b = obj.b  
  b()  // undefined
  obj.b.apply({a: 2})   // 2
  obj.c()  // 1
  obj.d();   // undefined
  (obj.d)()  // undefined
  obj.d.apply({a:2})   // undefined
  obj.e();   //undefined
  (obj.e)()   //undefined
  obj.e.call({a:2})  // undefined
  obj.f()();  // 1
  (obj.f())()  // undefined
  obj.f().call({a:2})  // undefined

function Foo() { }
Foo.prototype.bar = 1
const a = new Foo()
console.log(a.bar)  // 1

Foo.prototype.bar = 2
const b = new Foo()  
console.log(a.bar)  // 2
console.log(b.bar)  // 2

Foo.prototype = {bar: 3}
const c = new Foo()
console.log(a.bar) // 2
console.log(b.bar) // 2
console.log(c.bar) // 3


//  const a = useState('1')
//  useCallBack()
//  useMome()
//  useRef()

//  function useMyFuc(arg){
//      const a = useState('a')

//      getDate(arg)
//      return 
//  }

//  1. 请实现你自己的 Event Emitter

const emitter = new Emitter()
// 它需要支持事件订阅

const sub1  = emitter.subscribe('event1', callback1)
const sub2 = emitter.subscribe('event2', callback2)

// 同一个callback可以重复订阅同一个事件
const sub3 = emitter.subscribe('event1', callback1)
// emit(eventName, ...args) 可以用来触发callback

emitter.emit('event1', 1, 2);
// callback1 会被调用两次
// subscribe()返回一个含有release()的对象，可以用来取消订阅。

sub1.release()
sub3.release()
// 现在即使'event1'被触发, 



// callback1 也不会被调用

class Emitter{
    sub = {};

    subscribe(eventName,func){
        if(!this.sub[eventName]){
            this.sub[eventName] = [];
        }
        this.sub[eventName].push(func)

        return {
            release(){
                this.sub[eventName].filters(item => item !== func)
            }
        }
    }

    emit(eventName,...args){
        for(let i of this.sub[eventName]){
            i(...args)
        }
    }

}




a={
  b:{
    c:1
  }
}
'a.b.c'



safa get
safa set
