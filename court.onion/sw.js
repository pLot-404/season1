self.onnotificationclick = function(event) {
  // close notification
  event.notification.close();

  event.waitUntil(
    clients.matchAll({includeUncontrolled: true}).then(function(clientList) {
      for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url == "/" && 'focus' in client) {
          return client.focus(); 
        }
      }
    })
  );
};
