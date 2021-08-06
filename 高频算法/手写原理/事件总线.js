const listeners = {};
// 事件总线
export default {
    // 监听某一个事件
    $on(eventName, handler) {
        if (!listeners[eventName]) {
            listeners[eventName] = new Set();
        }
        listeners[eventName].add(handler);
    },

    // 取消监听
    $off(eventName, handler) {
        if (!listeners[eventName]) {
            return;
        }
        listeners[eventName].delete(handler);
    },


    // 触发事件
    $emit(eventName, ...args) {
        if (!listeners[eventName]) {
            return;
        }
        for (const handler of listeners[eventName]) {
            handler(...args);
        }
    },
};

function EventBus() {
    // 对象存储事件{ event1:[handle1,handle2],event2:[handle1,handle2]}
    // 监听事件时 接受参数  先判断是否有这个事件  没有的话为这个事件创建一个set用于存储事件函数
    //            然后将事件函数添加到set中
    
    //用于存储所有事件
    const listeners = {};
    return {
        /**
         *  监听某一个事件
         * @param {事件名} eventName 
         * @param {事件函数} handler 
         */  
        $on(eventName,handle){
            if(!listeners[eventName]){
                listeners[eventName] = new Set();
            }
            listeners[eventName].add(handle);
        },

        /**
         * 取消监听事件
         * @param {事件名} eventName 
         * @param {事件函数} handler 
         * @returns 
         */
        $off(eventName, handler) {
            if (!listeners[eventName]) {
                return;
                //没有该事件返回
            }
            listeners[eventName].delete(handler);  //移除事件函数
        },


        /**
         * 通知这个事件的所有监听,并执行对应函数
         * @param {事件名} eventName 
         * @param  {事件参数} args 
         * @returns 
         */
        $emit(eventName, ...args) {
            if (!listeners[eventName]) {
                return;
            }
            //遍历某个事件里面事件函数  依次执行函数
            for (const handler of listeners[eventName]) {
                handler(...args);
            }
        },
    }
}