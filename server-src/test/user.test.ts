var cha = require('chai');
var chaiHttp = require('chai-http');
var app = 'http://localhost:9000'
var request = require("supertest")(app);
cha.use(chaiHttp);
var expect = cha.expect;
var token = ''
var random = Math.floor(Math.random() * 999999)
const _newUser = {
    "email": `ethan${random}@gmail.com`,
    "password": "password",
    "firstName": "Dummy",
    "lastName": "User",
    "phone": "8800463103",
    "role": "NORMAL"
}
const admin = {
    email: "admin@speedstar.com",
    password: "password"
}
let user = {}

describe('Authentication', () => {

    it('TC001  Login User', (done) => {
        cha.request(app)
            .post('/api/authenticate')
            .send(admin)
            .end((err, res) => {

                token = res.body?.body?.token
                if (!err) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('User loggedin successfully');
                    done();
                }
            });


    });
    it('TC002 Invalid User', (done) => {
        admin.password = 'wrongcreds'
        cha.request(app)
            .post('/api/authenticate')
            .send(admin)
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.deep.equal(400);
                    expect(res.body.message).to.deep.equal('Invalid Credentials');
                    done();
                }

            });
    });
    it('TC003 Pass wrong fields', (done) => {
        admin.email = 'code'
        cha.request(app)
            .post('/api/authenticate')
            .send(admin)
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.deep.equal(400);
                    expect(res.body.message).to.deep.equal('Please enter all valid fields');
                    done();
                }

            });
    });
});
describe('Save User', () => {
    it('TC001  Create User', (done) => {

        cha.request(app)
            .post('/api/user')
            .send(_newUser)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {

                if (!err) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record Created successfully');
                    done();
                }
            });
    });
    it('TC001  Already Exists', (done) => {
        cha.request(app)
            .post('/api/user')
            .send(_newUser)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.deep.equal(400);
                    expect(res.body.message).to.deep.equal('User Already Exists');
                    done();
                }
            });
    });
    it('TC001 Valid information', (done) => {

        _newUser.lastName = '';

        cha.request(app)
            .post('/api/user')
            .send(_newUser)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (!err) {
                    expect(res.body.status).to.deep.equal(400);
                    expect(res.body.message).to.deep.equal('Please enter all valid fields');
                    done();
                }
            });
    });
})
describe('Get All User', () => {
    it('TC001  Create User', (done) => {

        cha.request(app)
            .get('/api/user')
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                user = res.body?.body[0];
                if (!err) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record Fetched successfully');
                    done();
                }
            });
    });
})
describe('Get User by Id', () => {
    it('TC001  Get User', (done) => {

        cha.request(app)
            .get(`/api/user/${user._id}`)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {
                if (!err) {

                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record Fetched successfully');
                    done();
                }
            });
    });
})
describe('Update User', () => {
    it('TC001 Success Update User', (done) => {
        _newUser.lastName = "coder"
        cha.request(app)
            .put(`/api/user/${user._id}`)
            .send(_newUser)
            .set('authorization', `Bearer ${token}`)
            .end((err, res) => {

                if (!err) {
                    expect(res.body.status).to.deep.equal(200);
                    expect(res.body.message).to.deep.equal('Record updated successfully');
                    done();
                }
            });
    });

})