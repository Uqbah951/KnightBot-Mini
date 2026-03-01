/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','917023951514'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rVGLkpaERHLCAC2qh4bzfmoYQCSqCAqsILE/77Bvb0TD/sTvS+FUnGyZPnZOYPQArM0AzdwegHKCm+QI7aJ7+XCIyAUUcRoqALQsghGAGsB+GiTxo106w3r5OqmbZzrntnkg7KqhJ3dLtdU+3Vwrn7Ah5dUNanDAd/AJS8dKWex2+RTk+HYX7wq3zrqPPCXJxPAuTpUiyloZPatyx4AY8WEWKKSWyVCcoRhdkM3ZcQ06/Rdx3RYtpqYAgnbjqeOEuCaGZndCJvDZRXu6t7NIyVK0Lx+jX6TVksbs1FWmxn94Pj630kze61HSjDPnZUb9zZS2gdyNNN/pM+wzFBoRsiwjG/f1n3mR27oVJe/aVGpqq8X9xTDZelEB9rJJzpsd4L0IMkdgT9a8StsYm4drkIFycKFFsLxoFLuKktFvm6yexM0mnvVRQwS7efiS/px6yk/0f368KQt7FxYsJmLq18okSRs5+xxF7UKudVaKuV61uNUh3ir9E/sJz4410dkI6ddQbWgUrTKWuMQ6L5bmSrci+O5ho59uJPukNe0z+xNAawEcbKOTk0MXY1r0a9/dn3slMSVjuf70TtaogZTIOkLOeDHsc9PuU3opDZ1K7ZLHQng3tmGNnhqDGMhrdyI/mJ/vLsKEV3NwQj8dEFFMWYcQo5LsgzpqldAMPLGgUU8ae8AHuwkEIrV9Z7Z9kpVhvzUspWUzOWn8r5JGw2bI88rSpd6wV0QUmLADGGQgczXtC7hxiDMWJg9Pf3LiDoxt+Na8vJYhdEmDK+JXWZFTD8cPXjJwyCoiZ8fSeB2T4QBSPhdxhxjknMWh1rAmmQ4AsyE8gZGEUwY+hXh4iiEIw4rdGvrTWLsBXeMQ/y/k2zQBfkT0Nw2J4CWdEErT/sq6osjiTlL/bt2uLCsvxGEAddkD3zBoLalxRlMFBlQdTaxDb++MWwBQwRhzhjYATMqaSICnOs5fot9QTb1q1YN2Md/O7oYzTepS97x23azHJ+rFa3fKif5mrFd+km36V7Xe/bN9+zD/75UAv+y7+AgBGwG8mgCo2ifK7RQlA2r1wRkkSJSDP1g3Q6rf2120mSc0pnSF2tjqUbvA13VbQWCqLshGmCs6xn79eBlG7Liy4fJVmPX9pqIbrgAH0uVp2EU+dyDxPYH8N+MVlUoReYuoEnnf3C4Tp3q8l2PBVqRZOQNNdy1xHM2XJndWBlEWa8durFsEc7g7pXTGLlvBkj/3x9H9rn0mQ/jxV+jlPrVfsZYfTcfQJbB7/g3TvzdsaER/cTyM9z8l8rCSNpN/XuJd3DNDhefLtBA7o7Wv3sOIn1xYptx0YmuKLKLfB4fO+CMoM8KmgORgCSkBY4BF1Ai7odWpdExR+KmbrgGn68blvPIOP670XY4BwxDvMSjERVleS+pqrqe9aSFqUDWdKqsBTfkgg8/gHii/9tVgcAAA==
> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋɴɪɢʜᴛ ʙᴏᴛ*  
',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
