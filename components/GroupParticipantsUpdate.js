const groupParticipantsUpdate = (event, conn) =>{
   try {
            let metadata = await conn.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await conn.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                //Get Profile Picture Group\\
                try {
                    ppgroup = await conn.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }

                //welcome\\
                let nama = await conn.getName(num)
                memb = metadata.participants.length

                Kon = await getBuffer(`https://hardianto.xyz/api/welcome3?profile=${encodeURIComponent(ppuser)}&name=${encodeURIComponent(nama)}&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=${encodeURIComponent(metadata.subject)}&member=${encodeURIComponent(memb)}`)

                Tol = await getBuffer(`https://hardianto.xyz/api/goodbye3?profile=${encodeURIComponent(ppuser)}&name=${encodeURIComponent(nama)}&bg=https://telegra.ph/file/8bbe8a7de5c351dfcb077.jpg&namegb=${encodeURIComponent(metadata.subject)}&member=${encodeURIComponent(memb)}`)
                if (anu.action == 'add') {
                    conn.sendMessage(anu.id, {
                        image: Kon, contextInfo: { mentionedJid: [num] }, caption: `
⭐✑ Hi👋 @${num.split("@")[0]},
⭐✑ Welcome To ${metadata.subject}

⭐✑ Description: ${metadata.desc}

⭐✑ Welcome To Our Comfortable Happy😋, Sometimes Loud😜, Usually Messy🤥, Full Of Love🥰, HOME😌!!`})
                } else if (anu.action == 'remove') {
                    conn.sendMessage(anu.id, {
                        image: Tol, contextInfo: { mentionedJid: [num] }, caption: `⭐✑ @${num.split("@")[0]} Left ${metadata.subject}

⭐✑ I'm Not Sure If It Was A Goodbye Charm, But It Was Fun While It Lasted 😌✨` })
                }
            }
        } catch (err) {
            print(err)
        }
     
}
