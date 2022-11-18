import test from "ava";
import req from "supertest";
import mongoose from "mongoose";
import app from "./../src/app";

test.beforeEach(t => {
    t.context = {
        server: req(app)
    }
});

test('PersonRoute::POST - Create a new Person', async t => {
    const mockPost = {
        name: 'Leonan',
        email: 'leonan.luppi@gmail.com',
        age: 24,
    };
    const requestCreate = await t.context.server.post('/people').send(mockPost);
    t.is(requestCreate.status, 201);
});

test('PersonRoute::GET - Find all People', async t => {
    const { status, body: { all } } = await t.context.server.get('/people');
    t.is(status, 200);
    t.true(Array.isArray(all));
    t.truthy(all.length > 0);
});

test('PersonRoute::GET - Find one Person', async t => {
    const mockMongoId = '5f1b2a83af96b62c4c8d71b5';
    const { status, body: { one } } = await t.context.server.get(`/people/${mockMongoId}`);
    t.is(status, 200);
    t.is(one.name, 'Leonan');
    t.truthy(typeof one === 'object');
});

test('PersonRoute::GET - Find one by valid MongoID', async t => {
    const mockMongoId = '52asda83af9xb6xc4cxd7xb5';
    const { status, body: { one } } = await t.context.server.get(`/people/${mockMongoId}`);
    t.is(status, 400);
});

test('PersonRoute::DELETE - Remove Person by ID', async t => {
    const mockMongoId = '5f1b45b3f3a3f00d5ce6e432';
    const { status } = await t.context.server.delete(`/people/${mockMongoId}`);
    t.is(status, 204);
});