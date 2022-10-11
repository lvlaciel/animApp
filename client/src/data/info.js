const data = [
    {
        name: "Naruto: Shippuuden",
        description: "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
        Rating: "8.16",
        episode: 500,
        categorie:"Animation | Drama | Adventure",
        studio:"Studio Pierrot",
        destacado: true,
        img: "https://th.bing.com/th/id/R.5d788100a2420314d5873a8b00ce3b50?rik=b1VD8YX2%2fdvHjw&riu=http%3a%2f%2fwww.snut.fr%2fwp-content%2fuploads%2f2015%2f10%2fimage-de-naruto-shippuden-9.png&ehk=rMX4htSeKSByIjlPnZu1gxosSRSdwj5LAUKL3d1XC54%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "One Piece",
        description: "Gol D. Roger was known as the 'Pirate King',the strongest and most infamous being to have sailed the Grand Line. The capture and death of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King.",
        Rating: "8.54",
        episode: 700,
         categorie:"Animation | Drama | Adventure",
        studio:"Toei Animation",
        destacado: true,
        img: "https://areajugones.sport.es/wp-content/uploads/2022/06/6c051491831631ca565336bff25946541611600952-main1-1080x609.jpg"
    },
    {
        name: "Attack on Titan",
        description: "Centuries ago, mankind was slaughtered to near extinction by monstrous humanoid creatures called titans, forcing humans to hide in fear behind enormous concentric walls. What makes these giants truly terrifying is that their taste for human flesh is not born out of hunger but what appears to be out of pleasure. To ensure their survival, the remnants of humanity began living within defensive barriers, resulting in one hundred years without a single titan encounter. However, that fragile calm is soon shattered when a colossal titan manages to breach the supposedly impregnable outer wall, reigniting the fight for survival against the man-eating abominations.",
        Rating: "8.50",
        episode: 500,
        categorie:"Animation | Drama | Adventure",
        studio:"Wit Studio",
        destacado: true,
        img: "https://th.bing.com/th/id/R.1f81fc546b17ffc3cf152f33b6c8b72f?rik=jYmjNr9QfXoDIQ&pid=ImgRaw&r=0"
    },
    {
        name: "Monster",
        description: "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
        Rating: "8.16",
        episode: 70,
        categorie:"Animation | Drama | Adventure",
        studio:"Madhouse",
        img: "https://th.bing.com/th/id/OIP.uA4Ve9n04giqRkQZRNFZuQHaEW?pid=ImgDet&w=702&h=412&rs=1"
    },
    {
        name: "Death Note",
        description: "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
        Rating: "8.16",
        episode: 500,
        categorie:"Animation | Adventure",
        studio:"Madhouse",
        img: "https://i.blogs.es/ed157d/230317-deathnote/450_1000.webp"
    },
    {
        name: "Violet Evergarden",
        description: "There are words Violet heard on the battlefield, which she cannot forget. These words were given to her by someone she holds dear, more than anyone else. She does not yet know their meaning.A certain point in time, in the continent of Telesis. The great war which divided the continent into North and South has ended after four years, and the people are welcoming a new generation.",
        Rating: "8.39",
        episode: 14,
        categorie:"Fantasy | Drama ",
        studio:"Kyoto Animation",
        img: "https://pm1.narvii.com/6707/3483130328fa7bf804620b48ce2f0d45c994a82b_hq.jpg"
    },
    {
        name: "Tokyo Ghoul",
        description: "",
        Rating: "8.01",
        episode: 12,
        categorie:"Action | Mystery",
        studio:"Studio Pierrot",
        destacado: true,
        img: "https://i.ytimg.com/vi/oFB4l3L_9eg/maxresdefault.jpg"
    },
    {
        name: "Black Clover",
        description: "Asta and Yuno were abandoned at the same church on the same day. Raised together as children, they came to know of the Wizard King—a title given to the strongest mage in the kingdom—and promised that they would compete against each other for the position of the next Wizard King. However, as they grew up, the stark difference between them became evident. While Yuno is able to wield magic with amazing power and control, Asta cannot use magic at all and desperately tries to awaken his powers by training physically.",
        Rating: "6.55",
        episode: 51,
        categorie:"Magic | Shounen | Adventure",
        studio:"Studio Pierrot",
        img: "https://areajugones.sport.es/wp-content/uploads/2022/07/black-clover-manga-fecha-de-regreso.jpg"
    },
    {
        name: "Sword Art Online",
        description: "In the year 2022, virtual reality has progressed by leaps and bounds, and a massive online role-playing game called Sword Art Online (SAO) is launched. With the aid of NerveGear technology, players can control their avatars within the game using nothing but their own thoughts.",
        Rating: "7.66",
        episode: 25,
        categorie:"Drama | Adventure",
        studio:"A-1 Pictures",
        img: "https://i.pinimg.com/736x/6f/4a/08/6f4a084499b1b67cbe6ea382d199047a.jpg"
    },
    {
        name: "Nanatsu no Taizai",
        description: "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
        Rating: "8.30",
        episode: 24,
        categorie:"Animation | Drama | Adventure",
        studio:"A-1 Pictures",
        img: "https://th.bing.com/th/id/R.58d8a4c358284ae276c320e1b0248168?rik=0nPgUpQax0QphQ&pid=ImgRaw&r=0"
    },
    {
        name: "Kiseijuu: Sei no Kakuritsu",
        description: "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
        Rating: "8.53",
        episode: 24,
        categorie:"Animation | Drama | Adventure",
        studio:"Madhouse",
        img: "https://i.ytimg.com/vi/wD6a66aIUB4/maxresdefault.jpg"
    },
    {
        name: "Hunter x Hunter (2011)",
        description: "It has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.",
        Rating: "9.11",
        episode: 148,
        categorie:"Animation | Drama | Adventure",
        studio:"Madhouse",
        img: "https://th.bing.com/th/id/OIP.eDPM56XENO3LfhuC0_IDaQHaD_?pid=ImgDet&rs=1"
    }

]

export default data;