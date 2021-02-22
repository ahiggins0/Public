import net from 'net';
import wol from 'wakeonlan';
import fs from 'fs';

export const checkPlexStatus = async () => {
    return new Promise (function (resolve,reject) {

        var host = ['192.168.x.x', xxxxx];
        
        var sock = new net.Socket();
        sock.setTimeout(2500);
        sock.on('connect', function() {;
            resolve(true);
            sock.destroy()
        }).on('error', function(e) {
            resolve(false);
        }).on('timeout', function(e) {
            resolve(false)
        }).connect(host[1], host[0]);
    })
}

export const checkGamesStatus = async () => {
    return new Promise (function (resolve,reject) {

        var host = ['192.168.x.x', xxxx];
        
        var sock = new net.Socket();
        sock.setTimeout(2500);
        sock.on('connect', function() {;
            resolve(true);
            sock.destroy()
        }).on('error', function(e) {
            resolve(false)
        }).on('timeout', function(e) {
            resolve(false)
        }).connect(host[1], host[0]);
    })
}

export const readLatestReleases = async () => {
    return await fs.readFileSync('./newreleases.txt', 'utf8');
}

export const wakeOnLAN = async () => {
    return new Promise (function (resolve,reject) {
        wol('1a:1c:2f:42:c4:e2').then(() => {
            resolve(true);
        })
    })
}