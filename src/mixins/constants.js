export const appConstants = {
  data: function () {
    return {
      RUB: '&nbsp;&#8381',
      TASK_STATUSES: {
        created: {value: 'created', label: 'создан'},
        pending: {value: 'pending', label: 'ожидает'}, // only client can switch to status pending
        started: {value: 'started', label: 'в процессе'},
        finished: {value: 'finished', label: 'завершен'},
        accepted: {value: 'accepted', label: 'принят'},
        stopped: {value: 'stopped', label: 'приостанов'}
      },
      TASK_TYPES: [ // TODO: to dictionaries
        'vue', 'vuex', 'vue-router', 'vuetify', 'elements-ui',
        'cloud-functions', 'firebase', 'firestore', 'algolia',
        'js', 'html', 'css',
        'design', 'logo', 'booklet', 'psd', 'ai', 'ae', 'ap'
      ],
      TASK_PRIORITY: {
        low: {value: 'low', label: 'низкий'},
        middle: {value: 'middle', label: 'средний'},
        high: {value: 'high', label: 'высокий'}
      }
    }
  }
}
