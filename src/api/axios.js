import axios from 'axios';
// import cookie from 'react-cookie';

export default function customFetch(url, options) {
  // return a promise of axios
  // let at = cookie.load('accessToken');
  // if (at) {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${at}`;
  // }

  return new Promise((resolve, reject) => {
    axios(url, options).then(response => {
      resolve(response);
    }).catch(error => {
      reject(error);
    });
  });

  // return new Promise((resolve, reject) => {
  //   axios(url, options).then(response => {
  //     let data = {
  //       success: true,
  //       response: response
  //     }
  //     resolve(data);
  //   }).catch(error => {
  //     let res = error.response && error.response.data || {};
  //     if (url.indexOf('/oauth/token') !== -1) {
  //       Toastr('Email or password incorrect', 'error');
  //     } else if (res.status === 401 && location.pathname != '/forgot-password') {
  //       cookie.remove('accessToken', { path: '/' });
  //       localStorage.removeItem('userInfo');
  //       window.location = '/login';
  //     } else {
  //       let Response = error.response && error.response.data && error.response.data.errors || [];
  //       if (Response.length > 0) {
  //         Response.map((errors, i) => {
  //           Toastr(errors.detail, 'error');
  //         })
  //       } else {
  //         Toastr(msg.systemFail, 'error');
  //       }
  //     }
  //     let data = {
  //       success: false
  //     }
  //     resolve(data);
  //   });
  // });
}
