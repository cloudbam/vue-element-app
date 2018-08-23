/**
 * 存储localStorage
 * **/

 export const setStore=(name, content) =>{

    if(!name&&!password) return;
    if(typeof content !=="string"){
        content = JSON.stringify(content);   //将字符串转换为json数据存储
    }
    console.log(content);
    

    window.localStorage.setItem(name,content)
 }

 /***
  * 获取localStorage
 */
export const getStore =name =>{
    if(!name) return;
    var value =window.localStorage.getItem(name);
    console.log(value);
    if(value !==null) {
       try {
           value = JSON.parse(value);
       } catch (e){
           value = value
       }
    }
}

export const removeStore =name =>{
    if(!name) return;
    window.localStorage.removeItem(name);
}