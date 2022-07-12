const config = require('./config')
// const { format } = require('date-fns');
// const { v4: uuid } = require('uuid');
// const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const session = async (data) => {
    try {
        await fsPromises.appendFile(path.join(__dirname, '..', 'session.json'), data);
    } catch (error) {
        console.log(error);
    };
};

let {
    _api,
    _api2_key1,
    _api2_key2,
    _api_url,
    _url,
    _qure
} = require('../lib/config')

const WhatsBotStart = () => {
    let PSD = ''
    config.hint.split(' ').map(f =>{
        PSD += f[0]
    })

    if (process.env.USER_PASSWORD == PSD) {
        return console.log('succes');
    } else {
        console.log('Your Passowrd iS invalid')
        console.log('Send Me Message And Get It Wa.me/94761539856')
        return process.exit(1) 
    }
}

function api_down_url (_method, _class, url) {
    const _URL_ = _api_url + _method + '/' + _class + _api + _api2_key1 + _api2_key2 + _url + url
    return _URL_
}

function api_srh_url(_method, _class, query) {
    const _URL_ = _api_url + _method + '/' + _class + _api + _api2_key1 + _api2_key2 + _qure + query
    return _URL_
}

module.exports = {
    api_down_url,
    api_srh_url,
    session,
    WhatsBotStart
}