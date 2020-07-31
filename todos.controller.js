const collection = require('./index');
const { ObjectId } = require('mongodb');
const error = (res, err) => {
  if (err)
    return res
      .status(500)
      .send({ massage: 'request error', err: err.toString() });
};

module.exports = {
  //* find All
  findAll: async (req, res) => {
    collection.todos.find().toArray((err, val) => {
      error(res, err);

      return res.status(200).json(val);
    });
  },

  //* Create
  create: async ({ body: { content } }, res) => {
    collection.todos.insertOne(
      {
        content,
        is_active: true,
      },
      (err, val) => {
        error(res, err);

        const { is_active, content, _id } = val.ops[0];
        const data = {
          is_active,
          content,
          _id,
        };

        console.log('Create!');
        return res.status(200).send(data);
      }
    );
  },

  //* Update
  update: async ({ body: { _id, content, is_active } }, res) => {
    const id = ObjectId(_id);
    collection.todos.updateOne(
      { _id: id },
      {
        $set: {
          content,
          is_active,
        },
      },
      (err, val) => {
        error(res, err);

        console.log('Update!');
        return res.status(200).send({ massage: 'Update!' });
      }
    );
  },

  //* Delete
  delete: async ({ body: { id } }, res) => {
    const _id = ObjectId(id);
    collection.todos.deleteOne({ _id }, (err, val) => {
      error(res, err);

      console.log('Delete!');
      return res.status(200).send({ massage: 'Delete!' });
    });
  },
};
