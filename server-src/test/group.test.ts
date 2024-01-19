var cha = require('chai');
var chaiHttp = require('chai-http');
var app = 'http://localhost:9000'
var request = require("supertest")(app);
cha.use(chaiHttp);
var expect = cha.expect;
var token = ''
var random = Math.floor(Math.random() * 999999)

const normal = {
    email: "test@gmail.co",
    password: "password"
}

let groups = {

}

describe('Group-Authentication for normal user', () => {

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
describe('Groups Test cases', () => {

    it('TC001 Save group', (done) => {
        cha.request(app)
            .post('/api/group')
            .send({ "name": "sGroup3" + random })
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                console.log(err);

                groups = res.body.body
                if (!err) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record Created successfully');
                    done();
                }
            });
    });
    it('TC001 Update group', (done) => {
        cha.request(app)
            .put(`/api/group/${groups._id}`)
            .send({ "name": "sGroup3" + random })
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record updated successfully');
                    done();
                }
            });
    });
    it('TC001 Get all groups', (done) => {
        cha.request(app)
            .get('/api/group')
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record Fetched successfully');
                    done();
                }
            });
    });
    it('TC001 Get all members', (done) => {
        cha.request(app)
            .get(`/api/group/members/${groups._id}`)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record Fetched successfully');
                    done();
                }
            });


    });
    it('TC001 Get group by id', (done) => {
        cha.request(app)
            .get(`/api/group/${groups._id}`)
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
