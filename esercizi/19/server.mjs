import Fastify from 'fastify';

const fastify = Fastify({
  logger: true,
});

fastify.get('/', async (req, reply) => {
  reply.send({ data: 'Up and running with Fastify' });
});

try {
  await fastify.listen({ port: 8080 });
} catch (err) {
  fastify.log.error(error);
  process.exit(1);
}
