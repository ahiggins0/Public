import {checkPlexStatus,
        checkGamesStatus,
        readLatestReleases,
        wakeOnLAN} from './brenda-service.js';

export const higgsNetStatus = async () => { 
    let plex,games;

    const plexStatus = await checkPlexStatus();
    const gamesStatus = await checkGamesStatus();

    if (plexStatus) {
        plex = 'UP';
    } else {
        plex = 'DOWN';
    }

    if (gamesStatus) {
        games = 'UP';
    } else {
        games = 'DOWN';
    }

    return `Current Status Of higgsNET Services:\n
                PLEX is currently: ${plex}\n
                GAMES Share is current: ${games}`;   
};

export const higgsNetLatestReleases = async () => { 
    const today = new Date();
    const month = today.toLocaleString('default', {month: 'long'});
    const releases = await readLatestReleases();

    return `${month} Releases On higgsNET:\n
    ${releases}`;   
};

export const higgsNetHelp = async () => { 
    return `
    Here is a list of commands you can give BrendaBot relating to higgsNET:

    /higgsnet status ... Retrieves status of Plex and Games shared folder.
    /higgsnet releases ... See what's new on higgsNET for media.
    /higgsnet start ... Attempt to start up higgNET if it's offline.
    `   
};

export const higgsNetWOL = async () => {
    const result = await wakeOnLAN();

    if (result) {
        return `
        Attempting to start higgsNET.
        Please wait 5 minutes and check status.
        `
    } else {
        return `
        Failed attempt to start higgsNET.
        Please contact support.
        `
    }
}
