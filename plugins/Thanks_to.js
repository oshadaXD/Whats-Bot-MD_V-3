    const futter = `
Thanks to ( NexusNw)
Alien-Alfa (For helping me to deploy qr in replit and answered my every doubts regard this project)
DGXeon ( 45% Credits goes to him ,in this script)
And Again Me (King Nexus 🎉) 🐦 Who Helped Assemble This Sexy Script !!!`;

const ThanksTo = async (picak, conn, from, unicorn, myweb, sc) => {

    var unicorn = await getBuffer(picak + 'Developer');

    await conn.send5ButImg(
        from, 
        `Me : Ai Dark Ezio`, 
        futter, 
        unicorn, 
        [
            { 
                "urlButton": { 
                    "displayText": "YouTube📍", 
                    "url": `${myweb}` 
                } 
            }, 
            { 
                "urlButton": {
                    "displayText": "Script🔖", 
                    "url": `${sc}` 
                } 
            }, 
            { 
                "quickReplyButton": { 
                    "displayText": "🍜Donate🍜", 
                    "id": 'donate' 
                } 
            }, 
            { 
                "quickReplyButton": { 
                    "displayText": "👤Owner👤", 
                    "id": 'owner' 
                } 
            }
        ]
    );
};

module.exports = ThanksTo;