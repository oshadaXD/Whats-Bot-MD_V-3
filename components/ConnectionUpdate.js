const { Boom } = require('@hapi/boom');
const { DarkEzio_Whats_Bot } = require('../index');
const print = console.log

const ConnectionUpdate = (update, conn, DisconnectReason) => {
            const { connection, lastDisconnect } = update
        if (connection === 'close') {
            let reason = new Boom(lastDisconnect?.error)?.output.statusCode
            if (reason === DisconnectReason.badSession) { 
                print(`Bad Session File, Please Delete Session and Scan Again`); 
                conn.logout(); 
            }
            else if (reason === DisconnectReason.connectionClosed) { 
                print("🐦Connection closed, reconnecting...."); 
                DarkEzio_Whats_Bot(); 
            }
            else if (reason === DisconnectReason.connectionLost) { 
                print("🐦Connection Lost from Server, reconnecting..."); 
                DarkEzio_Whats_Bot(); 
            }
            else if (reason === DisconnectReason.connectionReplaced) { 
                print("🐦Connection Replaced, Another New Session Opened, Please Close Current Session First"); 
                conn.logout(); 
            }
            else if (reason === DisconnectReason.loggedOut) { 
                print(`🐦Device Logged Out, Please Scan Again And Run.`); 
                conn.logout(); 
            }
            else if (reason === DisconnectReason.restartRequired) { 
                print("🐦Restart Required, Restarting..."); 
                DarkEzio_Whats_Bot(); 
            }
            else if (reason === DisconnectReason.timedOut) { 
                print("🐦Connection TimedOut, Reconnecting..."); 
                DarkEzio_Whats_Bot(); 
            }
            else conn.end(`🐦Unknown DisconnectReason: ${reason}|${connection}`)
        }
        print('Connected...', update)
};

module.exports = {
    ConnectionUpdate
}