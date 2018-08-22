/**
 * 存储localStorage
 * **/

 export const setStore=(name, content) =>{

    if(!name&&!password) return;
    if(typeof content !=="string"){
        content = JSON.stringify(content);
    }

    window.localStorage
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