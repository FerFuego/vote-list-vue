import { createStore } from 'vuex'

export default createStore({
  state: {
    tecnologies: [
      {name: 'Vue', url: 'https://vuejs.org/', cant: 0},
      {name: 'React', url: 'https://reactjs.org/', cant: 0},
      {name: 'Angular', url: 'https://angular.io/', cant: 0},
      {name: 'Node', url: 'https://nodejs.org/', cant: 0},
      {name: 'Express', url: 'https://expressjs.com/', cant: 0},
      {name: 'MongoDB', url: 'https://www.mongodb.com/', cant: 0},
      {name: 'PHP', url: 'https://www.php.net', cant: 0},
      {name: 'MySQL', url: 'https://www.mysql.com/', cant: 0},
      {name: 'PostgreSQL', url: 'https://www.postgresql.org/', cant: 0},
      {name: 'Mongoose', url: 'https://mongoosejs.com/', cant: 0},
      {name: 'Sequelize', url: 'https://sequelize.org/', cant: 0},
      {name: 'Socket.io', url: 'https://socket.io/', cant: 0}
    ]
  },
  mutations: {
    aumentar(state, index){
      state.tecnologies[index].cant ++;
    },
    reiniciar(state){
      state.tecnologies.forEach(item => {
        item.cant = 0
      })
    }
  },
  actions: {
  },
  modules: {
  }
})