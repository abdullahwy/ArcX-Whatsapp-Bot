const fs = require('fs')
const chalk = require('chalk')

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
global.messEn = {
    success: 'Processing done βοΈ',
    admin: "Hey dear user,\nYou are not an admin, so you can't use this command.", // i used "\n" for change the line 
    botAdmin: "I am not an admin, so i can't process this action.",
    owner: "This command is only made for my owner.",
    group: "Huh... I can't use this command in a private chat!!",
    private: "Uff... I can't take this action in a private chat...",
    bot: "This Feature Is Only For ππΌπ... and you're not a ππΌπ.",
    wait: "*Processing started....*",
    linkm: 'I need a link to process this command for you...',
    error: 'Process stopped!!...i got an error',
    sudo: "*Hey User π....*\nYou can't use this command because this command is only for my co-owner.",
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: "*You can't use this Bot anymore*\nBecause you got banned by the owner.",
    nsfw: 'This command stay off as default...because this action contains nudity and pornographical activity.',
    banChat: "This group got banned by my owner.\nContact my owner if you want to unban this groupchat."
}

global.messHn = {
    success: 'Kaam ho gaya βοΈ',
    admin: "*Ye command sirf group admins ke liye hai...*\nisiliye tum is command ka istemal nahi kar sakte.",
    botAdmin: "Me bina *Admin* bane is command ko nahi chala sakti.",
    owner: "Ye command sirf mere owner istemal kar sakte hai.. Aur aap mere owner nahi ho!!",
    group: "Aap is command ka istemal group chat mein nahi kar sakte.",
    private: 'Aap is command ka istemal kisi private chat mein nahi kar sakte ho.',
    bot: "This Feature Is Only For ππΌπ... and you're not a ππΌπ.",
    wait: "Processing....",
    linkm: 'Mujhe is command ke liye ek link chahiye.',
    error: '*404Error*',
    sudo: "*Hey User π....*\nYou can't use this command because this command is only for my co-owner.",
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: "Tumhe mujhe istemal karne se rok diya gaya hai!!",
    nsfw: 'The nsfw feature has not been activated, Bc padhai likhai karo πππ¦ - π¬ππ¦ bano lekin nhii tumhe to nudity dekhni hai π',
    banChat: "*Is group ko mujhe command dene se ban kar diya gaya hai!!!*"
}

global.messAr = {
    success: '* ΨͺΩ Ψ§ΩΩΨΉΨ§ΩΨ¬Ψ© !! * βοΈ',
    admin: "ΨΉΨ²ΩΨ²Ω Ψ§ΩΩΨ³ΨͺΨ?Ψ―Ω Ψ ΩΨ§ ΩΩΩΩΩΩ ΩΨͺΨ§Ψ¨ΨΉΨ© ΩΨ°Ψ§ Ψ§ΩΨ£ΩΨ± ΩΩΨ§Ψ¨Ψ© ΨΉΩΩ. ΩΨ£ΩΩ ΩΨ³Ψͺ ΩΨ΄Ψ±ΩΩΨ§. ",
    botAdmin: "ΩΨ§ ΩΩΩΩΩΩ ΩΨͺΨ§Ψ¨ΨΉΨ© ΩΨ°Ψ§ Ψ§ΩΨ£ΩΨ± Ψ―ΩΩ Ψ£Ω Ψ£ΩΩΩ ΩΨ³Ψ€ΩΩΨ§Ω",
    owner: "ΩΨ§ ΩΩΩΩΩ Ψ§Ψ³ΨͺΨΉΩΨ§Ω ΩΨ°Ψ§ Ψ§ΩΨ§ΩΨ±Ψ ΩΨ°Ψ§ ΩΨ?Ψ΅Ψ΅ ΩΩΨ· ΩΩΩΨ§ΩΩ.",
    group: "ΩΨ§ ΩΩΩΩΩ Ψ§Ψ³ΨͺΨ?Ψ―Ψ§Ω ΩΨ°Ψ§ Ψ§ΩΨ£ΩΨ± ΩΩ ΩΨ¬ΩΩΨΉΨ©",
    private: 'Ψ£ΩΨͺ ΩΨ«Ω ΩΨ°Ψ§ Ψ§ΩΨ£Ψ­ΩΩ ΩΨ£ΩΩ ΩΩΩ ΩΩΩΩΩ Ψ§Ψ³ΨͺΨ?Ψ―Ψ§Ω ΩΨ°Ψ§ Ψ§ΩΨ£ΩΨ± ΩΩ ΩΨ­Ψ§Ψ―Ψ«Ψ© Ψ?Ψ§Ψ΅Ψ©',
    bot: "This Feature Is Only For ππΌπ... and you're not a ππΌπ.",
    wait: "Ψ£ΩΨ§ Ψ£ΩΩΩ Ψ¨ΩΨΉΨ§ΩΨ¬Ψ© Ψ§ΩΨ£ΩΨ± Ψ§ΩΨ?Ψ§Ψ΅ Ψ¨Ω Ψ ΩΨ±Ψ¬Ω Ψ§ΩΨ§ΩΨͺΨΈΨ§Ψ± ",
    linkm: 'Ψ£Ψ­ΨͺΨ§Ψ¬ Ψ±Ψ§Ψ¨Ψ·',
    error: 'ΩΨ―Ω Ψ?Ψ·Ψ£!',
    sudo: "*Hey User π....*\nYou can't use this command because this command is only for my co-owner.",
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: "ΩΩΨ― ΨͺΩ Ψ­ΨΈΨ±Ω ΩΩ Ψ§Ψ³ΨͺΨ?Ψ―Ψ§Ω ΩΨ°Ψ§ Ψ§ΩΨ¨ΩΨͺ.",
    nsfw: 'ΩΩ ΩΨͺΩ ΨͺΩΨ΄ΩΨ· ΩΩΨ²Ψ© NSFW ΩΩ ΩΨ°Ω Ψ§ΩΩΨ¬ΩΩΨΉΨ© ',
    banChat: "ΩΩΨ― ΨͺΩ Ψ­ΨΈΨ± ΩΨ°Ω Ψ§ΩΩΨ¬ΩΩΨΉΨ© ΩΩ Ψ§Ψ³ΨͺΨ?Ψ―Ψ§Ω ΩΨ°Ψ§ Ψ§ΩΨ¨ΩΨͺ."
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
