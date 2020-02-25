const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "#";
client.on('message', message => {
    if (message.content == "#سرعه") {
        var x = ["DreamKing",
"DeathGames",
"زيرو كنج",
"أرض الأحلام",
"ألبرازيل",
"العراق",
"ألمملكة ألعربية ألسعودية",
"القسطنطينية",
"النهاية",
"امازون",
"جافاسكربت",
"سهله مو صعبه",
"طبق رطب مرق بقر",
"متجر",
"شجرة الأوغيري",
"عش العصفور",
"هلا بلخميس",
"الحوت الأزرق",
"بلاد الرافدين",
"كانيكي",
"توكا",
"عادل امام",
"عمرو ذياب",
"عمان",
"مسقط",
"بغداد عاصمة العراق",
"Playing Minecraft",
"Music",
"FaceBooK",
"YouTube",
"Infinity",
"احبك دريم",
"Don't Let Me Down",
"Space",
"Instgram",
"Google",
"Viber",
];
        var x2 = ['DreamKing',
        "DeathGames",
        "زيرو كنج",
        "أرض الأحلام",
		"ألبرازيل",
		"العراق",
		"ألمملكة ألعربية ألسعودية",
		"القسطنطينية",
		"النهاية",
		"امازون",
		"جافاسكربت",
		"سهله مو صعبه",
		"طبق رطب مرق بقر",
		"متجر",
		"شجرة الأوغيري",
		"عش العصفور",
		"هلا بلخميس",
		"الحوت الأزرق",
        "بلاد الرافدين",
        "كانيكي",
        "توكا",
        "عادل امام",
        "عمرو ذياب",
        "عمان",
        "مسقط",
        "بغداد عاصمة العراق",
        "Playing Minecraft",
        "Music",
        "FaceBooK",
        "YouTube",
        "Infinity",
        "احبك دريم",
        "Don't Let Me Down",
		"Space",
		"Instgram",
		"Google",
		"Viber",
		
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(` اول شخص يكتب :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الكلمة في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', puz => {
    if (puz.content == "#لغز") {
        var x = ["ما هي حاسة الشم عند الثعبان ؟",
"ما هو الشي الذي يكسو الناس و هو عار بدون ملابس ؟",
"ما هو الشي الذي لا يجري و لا يمشي ؟",
"ما هو إسم الشهر الميلادي الذي إذا حذفت أوله , تحول إلى إسم فاكهه ؟",
"ما هو الشي الذي لا يدخل الإ إذا ضرب على رأسه ؟",
"ما هو الشيء الذي اسمه على لونه ؟",
"ما هو الشي الذي كلما زاد نقص ؟",
"ما هي التي تحرق نفسها لتفيد غيرها ؟",
"كله ثقوب و مع ذلك يحفظ الماء ؟",
"ما هو الذي لحمه من الداخل و عظمه من الخارج ؟",
"يستطيع ان يخترق الزجاج من دون كسره .. فما هو ؟",
];
        var x2 = ['اللسان',
		"الابره",
        "الماء",
		"تموز",
		"المسمار",
		"البيضة",
		"العمر",
		"الشمعة",
		"الاسفنج",
		"السلحفاة",
		"الضوء",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        puz.channel.send(`السؤال هو:  __**${x[x3]}**__
لديك 20 ثانية للاجابة`).then(msg1=> {
            var r = puz.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 20000,
                errors : ['time']
            })
        r.catch(() => {
            return puz.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            `)
        })
        
        r.then((collected)=> {
            puz.channel.send(`${collected.first().author} لقد قمت بحل اللغز في الوقت المناسب  `);
        })
        })
    }
})

client.on('message', fkk => {
    if (fkk.content == "#فكك") {
        var x = ["المتاح للجميع لا يتاح لي",
"خعاخع",
"فيلا",
"بريء",
"بسم الله الرحمن الرحيم",
"الضرورة",
"دنيا",
"صارم",
"مات",
"شعبان شبعان",
"ألعراق",
];
        var x2 = ['ا ل م ت ا ح ل ل ج م ي ع ل ا ي ت ا ح ل ى',
		"خ ع ا خ ع",
        "ف ي ل ا",
		"ب ر ي ء",
		"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م",
		"ا ل ض ر و ر ة",
		"د ن ي ا",
		"ص ا ر م",
		"م ا ت",
		"ش ع ب ا ن ش ب ع ا ن",
		"أ ل ع ر ا ق",
        
        
        
        
        ];
        
        var x3 = Math.floor(Math.random()*x.length)
        fkk.channel.send(`اول شخص يفكك :  __**${x[x3]}**__
لديك 15 ثانية للاجابة`).then(msg1=> {
            var r = fkk.channel.awaitMessages(msg => msg.content == x2[x3], {
                maxMatches : 1,
                time : 15000,
                errors : ['time']
            })
        r.catch(() => {
            return fkk.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح 
            الإجآبة الصحيحةة هي __**${x2[x3]}**__`)
        })
        
        r.then((collected)=> {
            fkk.channel.send(`${collected.first().author} لقد قمت بفكيك الجملة في الوقت المناسب`);
        })
        })
    }
})


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Light Games`,"http://twitch.tv/Light")
client.user.setStatus("dnd")
});



client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء