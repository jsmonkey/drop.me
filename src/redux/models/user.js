import { Model, fk, attr } from 'redux-orm';

class User extends Model {
  static modelName = 'User';

  static get fields() {
    return {
      id: attr(),
      userName: attr(),
    };
  }

  static reducer(action, User, session) {
    switch (action.type) {
      default:
    }
  }
}

export default User;
