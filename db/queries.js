const pool = require('./pool');

module.exports = {
    getAllMessages: async () => {
        const { rows } = await pool.query("SELECT * FROM messages");
        return rows;
    },
    postNewMessage: async (text, user) => {
        await pool.query('INSERT INTO messages (text, username, added) VALUES ($1, $2, CURRENT_TIMESTAMP)', [text, user]);
    },
    getMessage: async (id) => {
        const { rows } = await pool.query('SELECT * FROM messages WHERE id=$1', [id]);
        return rows;
    }
};