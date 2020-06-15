import request from './request'

export function fetchItem(id=1){
    return request({
        url: '/fetch_item',
        method: 'get',
        data:{id}
      })
}

