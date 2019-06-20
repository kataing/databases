var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      var query = 'select * from messages';
      db.query(query, (err, messages) => {
        if(err) {
          console.log('err from database', err);
        } else {
          console.log('this is messages', messages);
          cb(null, messages);
        }
      })
    }, // a function which produces all the messages
    post: function (input, cb) {
      var query = `insert into messages (roomname, username, txt) values ('${input.roomname}', '${input.username}', '${input.txt}')`;
      db.query(query, (err, messages) => {
        if (err) {
          console.log('err from database post', err);
        } else {
          console.log('this successfully posted');
          cb ();
        }

      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var query = `select * from messages where username = ${CLICKEKASDFKJASDLFJASF}`;
      db.query(query, (err, messages) => {
        if (err) {
          console.log('err from database user get', err);
        } else {
          cb(null, messages);
        }
      })
    },
    post: function () {}
  }
};
