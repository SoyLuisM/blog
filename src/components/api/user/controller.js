const TABLE = 'user_data';

module.exports = function(injecterStore){
    let store = injecterStore;

    if(!store){
        console.error('[db] problema al conectar la bd');
    }
    async function insert(data){
        await store.insert(TABLE,data);
    }

  return {
      insert
  }
}