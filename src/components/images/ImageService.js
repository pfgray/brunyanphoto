import Q from 'q';
import request from 'superagent';

const clientId = window.app_config.imgur.client_id;
const landscapeAlbumId = window.app_config.imgur.landscape_album;
const portraitAlbumId = window.app_config.imgur.portrait_album;

function requestToPromise(req) {
  const deferred = Q.defer();
  req.end((err, res) => {
    if(err) {
      deferred.reject(err);
    } else {
      deferred.resolve(res.body);
    }
  });
  return deferred.promise;
}

const ImageService = {
  getWithAuth(url) {
    return requestToPromise(
      request.get(url)
        .set('Authorization', 'Client-Id ' + clientId));
  },
  getLandscapeImages() {
    return this.getAlbum(landscapeAlbumId);
  },
  getPortraitAlbum() {
    return this.getAlbum(portraitAlbumId);
  },
  getAlbum(id) {
    return this.getWithAuth(`https://api.imgur.com/3/album/${id}`)
      .then(resp => resp.data);
  },
  getImageBlob(url) {
    const deferred = Q.defer();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function onReady() {
      if (this.readyState === 4 && this.status === 200) {
        console.log(this.response, typeof this.response);
        const URL = window.URL || window.webkitURL;
        deferred.resolve(URL.createObjectURL(this.response));
      }
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
    return deferred.promise;
  }
};

export default ImageService;
