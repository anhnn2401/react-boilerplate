module.exports = {
  Admin: [
    {
      menuName: 'Home page',
      link: '/Question',
      authorrize: null,
      icon: 'fa fa-home',
      type: '',
      child: []
    }, {
      menuName: 'Question',
      link: '/',
      authorrize: null,
      icon: 'fa fa-question',
      type: '',
      child: [
        {
          menuName: 'List',
          link: '/questions'
        }, {
          menuName: 'Create',
          link: '/questions/create'
        }
      ]
    }, {
      menuName: 'Question',
      link: '/questions',
      authorrize: null,
      icon: 'fa fa-question',
      type: '',
      child: [
        {
          menuName: 'List',
          link: '/questions'
        }, {
          menuName: 'Create',
          link: '/questions/create'
        }
      ]
    }, {
      menuName: 'Answer',
      link: '/answers',
      authorrize: null,
      icon: 'fa fa-comments',
      type: '',
      child: []
    }, {
      menuName: 'Import Data',
      link: '/importData',
      authorrize: null,
      icon: 'fa fa-database',
      type: '',
      child: []
    }, {
      menuName: 'User',
      link: '/users',
      authorrize: null,
      icon: 'fa fa-users',
      type: '',
      child: []
    }
  ]
}
