const {VoiceState} = require('discord.js');
const db = require('../../database/user.controller');
const intervals = new Map();

module.exports = {
    name: 'voiceStateUpdate',


    /**
     * @param {VoiceState} oldState
     * @param {VoiceState} newState
     */

    async execute (oldState, newState) {
        async function addVoiceTime() {
            if(!newState.channelId) return;
            if(newState.selfMute == true) return;
            if(newState.selfDeaf == true) return;
            db.updateVoiceTime(newState.id, 10);
        }

        if (!oldState.channelId && newState.channelId) {
            console.log(intervals);
            intervals.set(newState.id, setInterval(addVoiceTime, 10000));
        }
        if (oldState.channelId && !newState.channelId) {
            clearInterval(intervals.get(newState.id));
            intervals.delete(newState.id);
        }
    }
}