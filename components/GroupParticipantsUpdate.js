const { getBuffer } = require('../lib/myfunc')
const { D_E_TMB } = require('../lib/config')

const GroupParticipantsUpdate = async (event, conn) =>{
    try {
        let metadata = await conn.groupMetadata(event.id);
        let members = event.participants;
        for (let member of members) {

            try { // Get Profile Picture User
                ppUser = await conn.profilePictureUrl(member, 'image')
            } catch {
                ppUser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            };
            try { //Get Profile Picture Group
                ppGroup = await conn.profilePictureUrl(event.id, 'image')
            } catch {
                ppGroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
            };
            let welcome = await getBuffer(`https://hardianto.xyz/api/welcome3?profile=${encodeURIComponent(ppUser)}&name=${encodeURIComponent(memberName)}&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=${encodeURIComponent(metadata.subject)}&member=${encodeURIComponent(memb)}`);
            let goodbye = await getBuffer(`https://hardianto.xyz/api/goodbye3?profile=${encodeURIComponent(ppUser)}&name=${encodeURIComponent(memberName)}&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=${encodeURIComponent(metadata.subject)}&member=${encodeURIComponent(memb)}`);
            const actions = ['add', 'remove', 'promote', 'demote'];
            let memberName = await conn.getName(member);
            let memb = metadata.participants.length;

            if (event.action == actions[0]) {

                conn.sendMessage(event.id, { image: welcome, contextInfo: { mentionedJid: [member] }, caption: `
⭐✑ Hi👋 @${member.split("@")[0]},
⭐✑ Welcome To ${metadata.subject}

⭐✑ Description:\n ${metadata.desc}

⭐✑ Welcome To Our Comfortable Happy😋!`});

            } else if (event.action == actions[1]) {

                conn.sendMessage(event.id, { image: goodbye, contextInfo: { mentionedJid: [member] }, caption: `
⭐✑ @${member.split("@")[0]} Left ${metadata.subject}

⭐✑ I'm Not Sure If It Was A Goodbye Charm, But It Was Fun While It Lasted 😌✨` });

            } else if (event.action = actions[2]) {

                conn.sendMessage(event.id, { text: `⭐✑ Hi👋 @${member.split("@")[0]}\n\n *You Are New Group admin*`, contextInfo: { mentionedJid: [member], "externalAdReply": { "title": `Dark_Ezio`, "body": ` New Group Admin`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`../Media/gojo.jpg`), "sourceUrl": D_E_TMB } } })
                
            } else if (event.action = actions[3]) {
                
                conn.sendMessage(event.id, { text: `⭐✑ Hi👋 @${member.split("@")[0]}\n\n *You Are Not Group admin*`, contextInfo: { mentionedJid: [member], "externalAdReply": { "title": `Dark_Ezio`, "body": ` New Group Admin`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`../Media/gojo.jpg`), "sourceUrl": D_E_TMB } } })

            }
        };
    } catch (err) {
        console.log(err);
    };  
};

module.exports = {
    GroupParticipantsUpdate
}
