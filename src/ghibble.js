
export function getGhibble(title) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://ghibliapi.herokuapp.com/films?title=${title}`;
      request.onload = function () {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }

export function getPeople(peopleSrc) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    let url = peopleSrc;
    request.onload = function () {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}