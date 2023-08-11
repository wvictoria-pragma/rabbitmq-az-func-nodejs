const amqp = require('amqplib');

async function getConnection() {
    const amqpServer = process.env.RABBITMQ_URL || 'amqp://localhost';
    const connection = await amqp.connect(amqpServer);
    return connection;
}

module.exports = getConnection;