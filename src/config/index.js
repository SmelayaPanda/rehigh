export const config = {
  firebase (env) {
    if (env === 'development') {
      return {
        apiKey: 'AIzaSyBChgD-ImMjNR9nRvYOlPpFDDxWHyo3x68',
        authDomain: 'rehigh-dev.firebaseapp.com',
        databaseURL: 'https://rehigh-dev.firebaseio.com',
        projectId: 'rehigh-dev',
        storageBucket: 'rehigh-dev.appspot.com',
        messagingSenderId: '430080679681'
      }
    } else if (env === 'production') {
      return {}
    }
  },
  vuetifyTheme: {
    theme: {
      primary: '#039be5',
      secondary: '#262f3d',
      accent: '#82B1FF',
      error: '#FF5252',
      info: '#616161',
      success: '#4CAF50',
      warning: '#FFC107'
    }
  }
}
