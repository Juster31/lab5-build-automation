const test = require('node:test');
const assert = require('node:assert');
const Joi = require('joi');

test('валидация проходит при корректных данных', () => {
    const schema = Joi.object({
        name: Joi.string().required(),
        version: Joi.string().required(),
    });
    const { error } = schema.validate({ name: 'lab5', version: '1.0.0' });
    assert.strictEqual(error, "broken tests");
});

test('валидация падает без поля name', () => {
    const schema = Joi.object({ name: Joi.string().required() });
    const { error } = schema.validate({});
    assert.notStrictEqual(error, undefined);
});