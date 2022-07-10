const GroupUpdate = async (groupMetaData, conn) => {
    const header = `「 Group Settings Changed 」`;
    const footer = `Group Settings Change Message`;
    try {
        ppgc = await conn.profilePictureUrl(groupMetaData[0].id, 'image')
    } catch {
        ppgc = 'https://shortlink.GojoMdNxarridho.my.id/rg1oT'
    }
    let picUrl = { url: ppgc }
    if (groupMetaData[0].announce == true) {
        conn.send5ButImg(groupMetaData[0].id, `${header}\n\nThe Group Has Been Closed By Admin, Now Only Admin Can Send Messages !`, footer, picUrl, [])
    } else if (groupMetaData[0].announce == false) {
        conn.send5ButImg(groupMetaData[0].id, `${header}\n\nThe Group Has Been Opened By Admin, Now Participants Can Send Messages !`, footer, picUrl, [])
    } else if (groupMetaData[0].restrict == true) {
        conn.send5ButImg(groupMetaData[0].id, `${header}\n\nGroup Info Has Been Restricted, Now Only Admin Can Edit Group Info !`, footer, picUrl, [])
    } else if (groupMetaData[0].restrict == false) {
        conn.send5ButImg(groupMetaData[0].id, `${header}\n\nGroup Info Has Been Opened, Now Participants Can Edit Group Info !`, footer, picUrl, [])
    } else {
        conn.send5ButImg(groupMetaData[0].id, `${header}\n\nGroup Subject Has Been Changed To *${groupMetaData[0].subject}*`, footer, picUrl, [])
    }
};

module.exports = {
    GroupUpdate,
    gg: '|Dark_Ezio|'
}; 