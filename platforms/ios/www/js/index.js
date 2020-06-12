//@ts-nocheck
let app = {
  init: function () {
    document.getElementById('btn').addEventListener('click', app.scanQRCode);
  },
  scanQRCode: function () {
    QRScanner.scan(app.displayContents);
    QRScanner.show();
    document.getElementById('photo').style.display = 'none';
    document.getElementById('btn').style.display = 'none';
    document.getElementById('msg').style.display = 'none';
  },
  displayContents: function (err, contents) {
    if (err) {
      alert(err._message);
    } else {
      alert('The QR Code contains: ' + contents);

      cordova.plugin.http.get(
        'https://jsonplaceholder.typicode.com/posts/1',
        {},
        {},
        function (response) {
          alert(response.status);
          alert(response.data);
        },
        function (response) {
          alert(response.error);
        }
      );
    }
  },
};
document.addEventListener('deviceready', app.init);
