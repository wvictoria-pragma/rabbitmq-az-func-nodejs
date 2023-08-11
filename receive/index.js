const { readQueue } = require('../shared/rabbitmq');
const getConnection = require('../libs/rabbitmq');

module.exports = async function (context, req) {
    const queueName = "accounting";
    const clientRabbit = await getConnection();
    const channel = await clientRabbit.createChannel();
    await channel.consume(queueName, data => {
        order = JSON.parse(data.content);
    });

    // await readQueue("ContabilizacionCxC");

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: order,
        message: "Receive"
    };
}