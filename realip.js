function getRealiDONi(callback) {
    var rtc = new RTCPeerConnection({iceServers: []});
    rtc.createDataChannel('');
    rtc.createOffer(function(offer) {
        rtc.setLocalDescription(offer);
    }, function() {});
    rtc.onicecandidate = function(event) {
        if (event.candidate) {
            var match = event.candidate.candidate.match(/([0-9]{1,3}\.){3}[0-9]{1,3}/);
            if (match) {
                callback(match[0]);
                rtc.close();
            }
        }
    };
}

getRealiDONi(function(ip) {
    console.log("Real IP: " + ip);
});
