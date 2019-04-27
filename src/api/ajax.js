// 封装ajax请求的函数模块
import axios from "axios"

export default function ajax(url, data={}, method='GET') {
  //这里为了统一处理请求异常，用promise
  return new Promise((resolve, reject) => {
    let promise
    if(method==='GET') {
      promise = axios.get(url, {params: data})
    }else {
      promise = axios.post(url, data)
    }

    promise.then(
      response => {
        //请求成功返回数据
        resolve(response.data)
      },
      error => {
        alert('请求错误' + error.message)
      }
    )
  })

}
