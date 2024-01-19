var cha = require('chai');
var chaiHttp = require('chai-http');
var app = 'http://localhost:9000'
var request = require("supertest")(app);
cha.use(chaiHttp);
var expect = cha.expect;
var token = ''
var random = Math.floor(Math.random() * 999999)
const _newUser = {
    "email": `test${random}@gmail.com`,
    "password": "Test738129",
    "firstName": "Name",
    "lastName": "Test",
    "phone": "55669855656",
    "role": "dd"
}
const normal = {
    email: "test@gmail.co",
    password: "password"
}
describe('Group-Authentication for Messaging', () => {

    it('TC001  Login User', (done) => {
        cha.request(app)
            .post('/api/authenticate')
            .send(normal)
            .end((err, res) => {

                token = res.body?.body?.token
                if (!err) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('User loggedin successfully');
                    done();
                }
            });


    });

});

describe('Messages', () => {

    it('TC001 Send message', (done) => {
        cha.request(app)
            .post('/api/messages/addmsg')
            .send({ group: '65a98b439208d1653a6fe9d2', message: "test" })
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (!err) {
                    expect(res.body.msg).to.deep.equal('Message added successfully.');
                    done();
                }
            });


    });
    it('TC002 Receive Message', (done) => {
        cha.request(app)
            .post('/api/messages/getmsg')
            .send({ group: '65a98b439208d1653a6fe9d2' })
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record Fetched successfully');
                    done();
                }

            });
    });

});
