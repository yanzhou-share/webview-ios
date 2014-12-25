document.addEventListener('WebViewJavascriptBridgeReady', onBridgeReady, false);

		function onBridgeReady(event){
			var bridge = event.bridge
			var uniqueId = 1
			
			bridge.init(function(message, responseCallback) {
				var data = { 'Javascript Responds':'Wee!' }
				responseCallback(data)
			})

			bridge.registerHandler('testJavascriptHandler', function(data, responseCallback) {
				var responseData = { 'Javascript Says':'Right back atcha!' }
				alert("callss");
				responseCallback(responseData)
			})

			var callbackButton = document.getElementById('shareBtn')
			
			callbackButton.onclick = function(e) {
				bridge.callHandler('testObjcCallback', {'foo': 'bar'}, function(response) {
					//log('JS got response', response)
				})
			}
		}
