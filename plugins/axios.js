import Vue from 'vue';

export default function({ $axios, redirect, app, store }) {
  $axios.onRequest((config) => {
    if (!(process.env.NODE_ENV === 'production')) {
      Vue.$log.debug('Making request to', config.url);
    }
  });

  $axios.onError((error) => {
    // const code = parseInt(error.response && error.response.status)
    Vue.$log.error('axios call error', error.response.status);
    if (error.code === 'ECONNREFUSED') {
      Vue.$log.error('Error: Backend not responding');
    }
    // if (code === 400) {
    //   redirect('/400')
    // }
    // store.dispatch('error', error)
  });
}
