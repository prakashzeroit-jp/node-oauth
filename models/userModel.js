const users = [];

const UserModel = {
  findByGoogleId: (googleId) => {
    return users.find(user => user.googleId === googleId);
  },

  findById: (id) => {
    return users.find(user => user.id === id);
  },

  create: (profile) => {
    const newUser = {
      id: Date.now().toString(), 
      googleId: profile.id,
      displayName: profile.displayName,
      email: profile.emails[0].value,
      avatar: profile.photos[0].value
    };
    users.push(newUser);
    return newUser;
  }
};

module.exports = UserModel;
