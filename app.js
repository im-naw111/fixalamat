if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('/service-worker.js').then(function () {
      console.log('Service Worker berhasil didaftarkan!');
    }).catch(function (error) {
      console.log('Pendaftaran Service Worker gagal:', error);
    });
  });
}
