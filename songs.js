const songs = [
    {
        "title": "The scientist",
        "artist": "Coldplay",
        "lyric": "questions of science, science and progress, do not speak as loud as my heart",
        "year": 2002,
        "genre": "pop",
        "clean": true
    },
    { "title": "Clocks",
        "artist": "Coldplay",
        "lyric": "The lights go out and I can't be saved Tides that I tried to swim against Have brought me down upon my knees Oh I beg, I beg and plead",
        "year": 2002,
        "genre": "pop",
        "clean": true
    },
    { "title": "Like a G6",
        "artist": "Far East Movement",
        "lyric": "Poppin' bottles in the ice, like a blizzard When we drink, we do it right gettin' slizzard Sippin' sizzurp in my ride",
        "year": 2010,
        "genre": "pop",
        "clean": true
    },
    { "title": "Rollin in the Deep",
        "artist": "Adele",
        "lyric": "There's a fire starting in my heart/Reaching a fever pitch and it's bringing me out the dark Finally I can see you crystal clear/Go 'head and sell me out and I'll lay your ship bare ",
        "year": 2010,
        "genre": "pop",
        "clean": true
    },
    { "title": "DJ's got us fallin' in love",
        "artist": "Usher",
        "lyric": "So we back in the club With our bodies rockin' from side to side (side to side) Thank God the week is done I feel like a zombie comin' back to life (back to life) ",
        "year": 2010,
        "genre": "pop",
        "clean": true
    },
    { "title": "Song for the Dumped",
        "artist": "Ben Folds Five",
        "lyric": "Wish I hadn't bought you dinner/Right before you dumped me/ On your front porch Give me my money back  Give me my money back You bitch",
        "year": 1997,
        "genre": "pop",
        "clean": false
    },
    { "title": "Goldigger",
        "artist": "Kanye West",
        "lyric": "You will see him on TV any given Sunday Win the Super Bowl and drive off in a Hyundai She was supposed to buy your shorty Tyco with your money She went to the doctor, got lipo with your money",
        "year": 2005,
        "genre": "rap",
        "clean": true
    },
    { "title": "Ms. Jackson",
        "artist": "OutKast",
        "lyric": "I am for real Didn’t mean to make your daughter cry.I apologize a million times… ",
        "year": 2000,
        "genre": "pop",
        "clean": true
    },
    { "title": "Man on the Moon",
        "artist": "REM",
        "lyric": "Mister Andy Kaufman's gone wrestling (yeah, yeah, yeah, yeah) Now, Andy did you hear about this one? Tell me, are you locked in the punch?",
        "year": 1992,
        "genre": "pop",
        "clean": true
    },
    { "title": "It's Now or Never",
        "artist": "Elvis Presley",
        "lyric": "Come hold me tight Kiss me my darling, Be mine tonight Tomorrow will be too late ",
        "year": 1964,
        "genre": "pop",
        "clean": true
    },
    { "title": "You Get What You Give",
        "artist": "New Radicals",
        "lyric": "Wake up kids We've got the dreamers disease Age 14 we got you down on your knees So polite, you're busy still saying please",
        "year": 1998,
        "genre": "pop",
        "clean": true
    },
    { "title": "Drops of Jupiter",
        "artist": "Train",
        "lyric": "Since the return of her stay on the moon She listens like spring and she talks like June, hey, hey  Hey, hey",
        "year": 2001,
        "genre": "pop",
        "clean": true
    },
    { "title": "If it makes you happy",
        "artist": "Sheryl Crow",
        "lyric": "You get down, real low down You listen to Coltrane, derail your own train Well, who hasn't been there before?",
        "year": 1996,
        "genre": "pop",
        "clean": true
    },
    { "title": "The One I Love",
        "artist": "REM",
        "lyric": "This one goes out to the one I left behind, a simple prop to occupy my time",
        "year": 1987,
        "genre": "pop",
        "clean": true
    },
    { "title": "Teen Spirit",
        "artist": "Nirvana",
        "lyric": "With the lights out, it's less dangerous Here we are now, entertain us I feel stupid and contagious Here we are now, entertain us",
        "year": 1991,
        "genre": "alternative",
        "clean": true
    },
    { "title": "Wonder Wall",
        "artist": "Oasis",
        "lyric": "And all the roads we have to walk are winding And all the lights that lead us there are blinding There are many things that I Would like to say to you but I don't know how",
        "year": 1995,
        "genre": "alternative",
        "clean": true
    },
    { "title": "I Only Wann Be With You",
        "artist": "Hootie and the Blowfish",
        "lyric": "You and me, we come from different worlds You like to laugh at me when I look at other girls Sometimes you're crazy and you wonder why I'm such a baby 'cause the dolphins make me cry",
        "year": 1995,
        "genre": "pop",
        "clean": true
    },
    { "title": "One Headlight",
        "artist": "Wallflowers",
        "lyric": "This place is old It feels just like a beat up truck I turn the engine, but the engine doesn't turn  Well it smells of cheap wine, cigarettes This place is always such a mess Sometimes I think I'd like to watch it burn",
        "year": 1996,
        "genre": "pop",
        "clean": true
    },
    { "title": "Hey Jealousy",
        "artist": "Gin Blossoms",
        "lyric": "Telll me do you think it'd be all right If I could just crash here tonight You can see I'm in no shape for driving And anyway I've got no place to go",
        "year": 1992,
        "genre": "pop",
        "clean": true
    },
    { "title": "Name",
        "artist": "Goo Goo Dolls",
        "lyric": "And scars are souvenirs you never lose The past is never far Did you lose yourself somewhere out there Did you get to be a star",
        "year": 1995,
        "genre": "pop",
        "clean": true
    },
    { "title": "1979",
        "artist": "Smashing Pumpkins",
        "lyric": "And I don't even care to shake these zipper bluesAnd we don't know just where our bones will rest To dust I guess Forgotten and absorbed into the earth below",
        "year": 1995,
        "genre": "pop",
        "clean": true
    },
    { "title": "No Rain",
        "artist": "Blind Melon",
        "lyric": "All I can say is that my life is pretty plain I like watchin' the puddles gather rain And all I can do is just pour some tea for two  And speak my point of view but it's not sane",
        "year": 1992,
        "genre": "pop",
        "clean": true
    },
    { "title": "Learn to Fly",
        "artist": "Foo Fighters",
        "lyric": "Now I'm looking to the sky to save me Looking for a sign of life Looking for something to help me burn out bright",
        "year": 1999,
        "genre": "pop",
        "clean": true
    },
    { "title": "Creep",
        "artist": "Radiohead",
        "lyric": "You're just like an angel Your skin makes me cry You float like a feather In a beautiful world I wish I was special",
        "year": 2001,
        "genre": "pop",
        "clean": true
    },
    { "title": "Superbase",
        "artist": "Nikki Minaj",
        "lyric": "Excuse me, you're a hell of a guy you know I really got a thing for American guys I mean, sigh, sickenin' eyes I can tell that you're in touch with your feminine side Oh yes I did, Yes I did",
        "year": 2011,
        "genre": "pop",
        "clean": false
    },
    { "title": "Everybody Wants to Rule the World",
        "artist": "Tears for Fears",
        "lyric": "Welcome to your life There's no turning back Even while we sleep We will find You acting on your best behavior Turn your back on mother nature",
        "year": 1985,
        "genre": "pop",
        "clean": true
    },
    { "title": "Congratulations",
        "artist": "Post Malone featuring Quavo",
        "lyric": "If you fuck with winning, put your lighters to the sky How could I make sense when I got millions on my mind?",
        "year": 2016,
        "genre": "pop",
        "clean": false
    },
    { "title": "Old Town Road",
        "artist": "Lil' Nas",
        "lyric": "I got the horses in the back Horse tack is attached Hat is matte black Got the boots that's black to match",
        "year": 2019,
        "genre": "rap",
        "clean": true
    },
    { "title": "Starboy",
        "artist": "The Weeknd",
        "lyric": "House so empty, need a centerpiece Twenty racks a table cut from ebony Cut that ivory into skinny pieces Then she clean it with her face  man I love my baby",
        "year": 2019,
        "genre": "pop",
        "clean": false
    },
    { "title": "Hotlin Bling",
        "artist": "Drake",
        "lyric": "Cause ever since I left the city, you Started wearing less and goin' out more Glasses of champagne out on the dance floor Hangin' with some girls I've never seen before",
        "year": 2015,
        "genre": "pop",
        "clean": false
    },
    { "title": "I took a Pill in Ibiza",
        "artist": "Mike Posner",
        "lyric": "I'm living out in LA/ I drive a sports car just to prove I'm a real big baller 'cause I made a million dollars And I spend it on girls and shoes",
        "year": 2016,
        "genre": "pop",
        "clean": true
    },
    { "title": "Royals",
        "artist": "Lorde",
        "lyric": "And I'm not proud of my address, in the torn up town No post code envy But every song's like gold teeth, Grey Goose, trippin' in the bathroom",
        "year": 1987,
        "genre": "pop",
        "clean": false
    },
    { "title": "Thrift Shop",
        "artist": "Macklemore and Ryan Lewis",
        "lyric": "I'll wear your granddad's clothes I look incredible ",
        "year": 2013,
        "genre": "pop",
        "clean": true
    },
    { "title": "Blurred Lines",
        "artist": "Robin Thyke",
        "lyric": "I feel so lucky Hey, hey, hey You wanna hug me Hey, hey, hey What rhymes with hug me? ",
        "year": 2013,
        "genre": "pop",
        "clean": false
    },
    { "title": "You're so Vain",
        "artist": "Carley Simon",
        "lyric": "But you gave away the things you loved And one of them was me I had some dreams, they were clouds in my coffee  Clouds in my coffee",
        "year": 1972,
        "genre": "pop",
        "clean": true
    },
    { "title": "Can't Get Enough of Your Love",
        "artist": "Barry White",
        "lyric": "Tell me, what can I say? What am I gonna do? How should I feel when everything is you? What kind of love is this that you're givin' me? Is it in your kiss or just because you're sweet?",
        "year": 1974,
        "genre": "pop",
        "clean": true
    },
    { "title": "Take on Me",
        "artist": "Ah Ha",
        "lyric": "So needless to say I'm odds and ends But I'll be stumbling away Slowly learning that life is okay Say after me It's no better to be safe than sorry ",
        "year": 1985,
        "genre": "pop",
        "clean": true
    },
    { "title": "Sledgehammer",
        "artist": "Peter Gabriel",
        "lyric": "You could have a steam train If you'd just lay down your tracks You could have an aeroplane flying If you bring your blue sky back All you do is call me I'll be anything you need",
        "year": 1986,
        "genre": "pop",
        "clean": true
    },
    { "title": "I Wanna Dance with Somebody",
        "artist": "Whitmney Houston",
        "lyric": "I need a man who'll take a chance On a love that burns hot enough to last So when the night falls ",
        "year": 1987,
        "genre": "pop",
        "clean": true
    },
    { "title": "Lvin' on a Prayer",
        "artist": "Bon Jovi",
        "lyric": "Tommy used to work on the docks, union's been on strike He's down on his luck, it's tough, so tough Gina works the diner all day working for her man She brings home her pay, for love",
        "year": 1986,
        "genre": "rock",
        "clean": true
    },
    { "title": "Karma Chameleon",
        "artist": "Boy George",
        "lyric": "I'm a man without conviction I'm a man who doesn't know How to sell a contradiction You come and go, you come and go ",
        "year": 1983,
        "genre": "pop",
        "clean": true
    },

    { "title": "Have You Ever Seen the Rain?",
        "artist": "Creedence Clearwater Revival",
        "lyric": "Someone told me long ago There's a calm before the storm I know it's been comin' for some time",
        "year": 1970,
        "genre": "pop",
        "clean": true
    },
    { "title": "Sittin' by the Dock of the Bay",
        "artist": "Otis Redding",
        "lyric": "Sittin in the morning sun,I`ll be sittin' when the evening come,Watching the ships roll in, And I'll watch 'em roll away again ",
        "year": 1968,
        "genre": "pop",
        "clean": true
    },
    { "title": "Pretty Woman",
        "artist": "Roy Orbison",
        "lyric": "I guess I'll go on home, it's late There'll be tomorrow night, but wait  What do I see? Is she walkin' back to me?",
        "year": 1964,
        "genre": "pop",
        "clean": true
    },
    { "title": "Mrs. Robinson",
        "artist": "Simon and Garfunkle",
        "lyric": "Sitting on a sofa on a Sunday afternoon Going to the candidates' debate Laugh about it, shout about it When you've got to choose Every way you look at this you lose",
        "year": 1968,
        "genre": "pop",
        "clean": true
    },
    { "title": "Heard it Through the Grapevine",
        "artist": "Marvin Gaye",
        "lyric": "Ooh, I bet you're wonderin' how I knew 'Bout your plans to make me blue With some other guy you knew before Between the two of us guys You know I loved you more",
        "year": 1968,
        "genre": "pop",
        "clean": true
    },
    { "title": "Take it Easy",
        "artist": "Eagles",
        "lyric": "'ve got seven women on my mind Four that wanna own me two that wanna stone me one says she's a friend of mine",
        "year": 1972,
        "genre": "pop",
        "clean": true
    },
    { "title": "Satisfaction",
        "artist": "Rolling Stones",
        "lyric": "When I'm watchin' my TV and a man comes on and tells me How white my shirts can be But, he can't be a man 'cause he doesn't smoke The same cigarettes as me ",
        "year": 1965,
        "genre": "pop",
        "clean": true
    },
    { "title": "Ain't too Proud to Beg",
        "artist": "The Temptations",
        "lyric": "I know you wanna leave me, But I refuse to let you go,If I have to beg, plead for your sympathy, I don't mind 'cause you mean that much to me",
        "year": 1966,
        "genre": "pop",
        "clean": true
    },
    { "title": "Stayin' Alive",
        "artist": "Bee Gees",
        "lyric": "And now it's alright, it's okay And you may look the other way  We can try to understand The New York Times' effect on man",
        "year": 1977,
        "genre": "pop",
        "clean": true
    },
    { "title": "1978",
        "artist": "Michael McDonald and the Doobie Brothers",
        "lyric": "She had a place in his life/He never made her think twice As he rises to her apology/ Anybody else would surely know He's watching her go",
        "year": 1987,
        "genre": "pop",
        "clean": true
    },
    { "title": "Eye of the Tiger",
        "artist": "Survivor",
        "lyric": "So many times it happens too fast You change your passion for glory Don't lose your grip on the dreams of the past You must fight just to keep them alive",
        "year": 1982,
        "genre": "pop",
        "clean": true
    },
    { "title": "Wake Me Up Before You Go Go",
        "artist": "Wham",
        "lyric": "You take the grey skies out of my way (hoo, hoo) You make the sun shine brighter than Doris Day Turned a bright spark into a flame (yeah, yeah) My beats per minute never been the same",
        "year": 1984,
        "genre": "pop",
        "clean": true
    },
    { "title": "With Or Without You",
        "artist": "U2",
        "lyric": "Sleight of hand and twist of fate On a bed of nails she makes me wait And I wait, without you",
        "year": 1987,
        "genre": "pop",
        "clean": true
    },
    { "title": "It's Friday I'm in Love",
        "artist": "The Cure",
        "lyric": "I  don't care if Monday's blue Tuesday's gray and Wednesday too Thursday I don't care about you",
        "year": 1992,
        "genre": "pop",
        "clean": true
    },
    { "title": "Killing Me Softly",
        "artist": "Roberta Flack",
        "lyric": "And there he was this young boy, a stranger to my eyes Strumming my pain with his fingers Singing my life with his words ",
        "year": 1973,
        "genre": "pop",
        "clean": true
    },
    { "title": "Rocket Man",
        "artist": "Elton John",
        "lyric": "She packed my bags last night pre-flight Zero hour 9:00 a.m. And I'm gonna be high As a kite by then",
        "year": 1972,
        "genre": "pop",
        "clean": true
    },
    { "title": "Beat It",
        "artist": "Michael Jackson",
        "lyric": "You have to show them that you're really not scared You're playin' with your life, this ain't no truth or dare They'll kick you, then they'll beat you Then they'll tell you it's fair",
        "year": 1982,
        "genre": "pop",
        "clean": true
    },
    { "title": "Pumped Up Kicks",
        "artist": "Foster the People",
        "lyric": "Yeah, he found a six shooter gun In his dad's closet, and with a box of fun things I don't even know what But he's coming for you, yeah, he's coming for you",
        "year": 2010,
        "genre": "pop",
        "clean": false
    },
    { "title": "Can't Feel My Face",
        "artist": "The Weeknd",
        "lyric": "And I know she'll be the death of me  At least we'll both be numb And she'll always get the best of me The worst is yet to come",
        "year": 2015,
        "genre": "pop",
        "clean": true
    },
    { "title": "Just the Way that You Are",
        "artist": "Bruno Mars",
        "lyric": "And whn you smile, the whole world stops and stares for a while",
        "year": 2010,
        "genre": "pop",
        "clean": true
    },
    { "title": "What's Goin' On",
        "artist": "Marvin Gaye",
        "lyric": "Picket lines and picket signs Don't punish me with brutality Come on talk to me So you can see",
        "year": 1971,
        "genre": "pop",
        "clean": true
    },
    { "title": "Feels Like Summer",
        "artist": "Donald Glover AKA Childish Gambino",
        "lyric": "Seven billion souls that move around the sun Rolling faster, faster, not a chance to slow down",
        "year": 2018,
        "genre": "pop",
        "clean": true
    },
    { "title": "",
        "artist": "Donald Glover AKA Childish Gambino",
        "lyric": "Seven billion souls that move around the sun Rolling faster, faster, not a chance to slow down",
        "year": 2018,
        "genre": "pop",
        "clean": true
    },
    { "title": "Bittersweet Symphony",
        "artist": "The Verve",
        "lyric": "Trying to make ends meet, trying to find some money then you die.",
        "year": 1997,
        "genre": "pop",
        "clean": true
    },
    { "title": "Poison",
        "artist": "Bel Biv Devoe",
        "lyric": "It's driving me out of my mind That's why it's hard for me to find Can't get it outta my head Miss her, kiss her, love her, wrong move you're dead.",
        "year": 1990,
        "genre": "pop",
        "clean": true
    },
    { "title": "Pn",
        "artist": "B",
        "lyric": "",
        "year": 1990,
        "genre": "pop",
        "clean": true
    },
    { "title": "Umbrella",
        "artist": "Rhianna",
        "lyric": "Said I'll always be your friend Took an oath, I'ma stick it out 'til the end Now that it's raining more than ever Know that we'll still have each other",
        "year": 2008,
        "genre": "pop",
        "clean": true
    },
    { "title": "Why Georgia",
        "artist": "John Mayer",
        "lyric": "I am driving down 85 in the kind of morning that lasts all afternoon",
        "year": 2001,
        "genre": "pop",
        "clean": true
    },
    { "title": "Love Shack",
        "artist": "B-52s ",
        "lyric": "I'm dirving down the Atlanta Highway ;ookin for the love getaway.",
        "year": 1989,
        "genre": "pop",
        "clean": true
    },
    { "title": "Fun",
        "artist": "Sir Sly",
        "lyric": "So let me dream if I want, it's not gonna hurt no one I don't wanna grow up, I just wanna stay this young See the world if I want, it's not gonna hurt no one",
        "year": 2017,
        "genre": "pop",
        "clean": true
    }, 
    { "title": "Land of Confusion",
        "artist": "Genesis",
        "lyric": "There's too many men, too many people Making too many problems And there's not much love to go around Can't you see this is the land of confusion?",
        "year": 1,
        "genre": "pop",
        "clean": true
    }, 
    { "title": "",
        "artist": "",
        "lyric": "",
        "year": 1,
        "genre": "pop",
        "clean": true
    }
]
    


