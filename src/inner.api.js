const request =  require('./request')

function fetchItem(id=1){
    return request({
        url: '/interval',
        method: 'get',
        data:{id}
      })
}

module.exports = {
    fetchItem
}
