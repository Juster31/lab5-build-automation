const pino = require('pino');
const Joi = require('joi');

const logger = pino({ level: 'info' });

const schema = Joi.object({
    name: Joi.string().required(),
    version: Joi.string().required(),
});

const data = { name: 'lab5', version: '1.0.0-SNAPSHOT' };
const { error, value } = schema.validate(data);

if (error) {
    logger.error(`Validation failed: ${error.message}`);
    process.exit(1);
}

logger.info({ value }, 'Validation OK - artifact is ready');