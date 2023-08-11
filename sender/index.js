var amqp = require('amqplib/callback_api');
const { writeQueue } = require('../shared/rabbitmq');

const getConnection = require('../libs/rabbitmq');

module.exports = async function (context, req) {
    const queueName = "accounting";
    const data = {
        title: "Harry Potter y la piedra filosofal",
        author: "J. K. Rowling, Rowli Ng J.K."
    }

    const clientRabbit = await getConnection();
    const channel = await clientRabbit.createChannel();
    await channel.assertQueue(queueName);

    channel.sendToQueue(
        queueName,
        Buffer.from(JSON.stringify(data))
    );

    // await writeQueue(queueName, JSON.stringify(cxc));
    context.log('JavaScript HTTP trigger function processed a request.');

    const responseMessage = "This HTTP triggered function executed successfully."

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage,
        message: "Sender"
    };
}