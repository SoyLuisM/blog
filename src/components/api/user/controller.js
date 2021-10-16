const TABLE = 'user_data';

module.exports = function(injecterStore){
    let store = injecterStore;
    if(!store){
        console.error('[db] problema al conectar la bd');
    }
    async function insert(data){
        const date = new Date;
        let newUser={
            nombre: data.nombre,
            apellidos: data.apellidos,
            correo: data.correo,
            creacion: date
        };
        await store.insert(TABLE,newUser);
    }

  return {
      insert
  }
}