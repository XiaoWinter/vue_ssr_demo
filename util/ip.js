
//iptable['WLAN:1']

module.exports = function(){
    var os=require('os'),
    iptable={},
    ifaces=os.networkInterfaces();
    // console.log(ifaces)
    for (var dev in ifaces) {
        ifaces[dev].forEach(function(details,alias){
            if (details.family=='IPv4') {
            iptable[dev+(alias?':'+alias:'')]=details.address;
            }
        });
    }
    return iptable['WLAN:1']
}