// Central content for Rosette's 30th. Edit these to update the site copy.

export const SITE = {
    name: "Rosette",
    occasion: "30th Birthday",
    scripture: {
        text: "Celebrating a life marked by God's goodness",
        ref: "Psalm 34:8",
    },
    welcome: "Thank you for coming to celebrate this special night with me.",
    prayer: "My prayer is we all have the best time celebrating God for His faithfulness in keeping me!",
};

/** Sticker registry — transparent PNGs extracted from Rosette's Canva design. */
export const STICKERS = {
    flowerCoral: "/stickers/flower-coral.png",
    flowerBrown: "/stickers/flower-brown.png",
    flowerPressed: "/stickers/flower-pressed.png",
    pansy: "/stickers/pansy.png",
    champagne: "/stickers/champagne.png",
    starYellow: "/stickers/star-yellow.png",
    starRed: "/stickers/star-red.png",
    hearts: "/stickers/hearts.png",
    gift: "/stickers/gift.png",
    candles: "/stickers/candles.png",
    bowRed: "/stickers/bow-red.png",
} as const;

export type StickerKey = keyof typeof STICKERS;

/** Evening schedule. Times are placeholders — Rosette can fill in the real ones. */
export type EventItem = { time: string; title: string; note?: string; sticker: StickerKey };

export const ITINERARY: EventItem[] = [
    {
        time: "6:00 PM",
        title: "GUEST ARRIVAL",
        note: "Come in, grab a drink, settle in.",
        sticker: "champagne",
    },
    {
        time: "7:00 PM",
        title: "GAMES",
        note: "Praise & thanksgiving to God.",
        sticker: "starYellow",
    },
    {
        time: "8:00 PM",
        title: "DINNER",
        note: "Eat, laugh, be merry.",
        sticker: "flowerCoral",
    },
    {
        time: "8:45 PM",
        title: "WORSHIP & A WORD",
        note: "Praise & thanksgiving to God.",
        sticker: "starRed",
    },
    {
        time: "10:00 PM",
        title: "CAKE CUTTING",
        note: "Gather round for the cake!",
        sticker: "candles",
    },
    {
        time: "10:15",
        title: "WORSHIP & DANCE",
        sticker: "hearts",
    },
    {
        time: "11:00 PM",
        title: "CLOSING",
        sticker: "hearts",
    },
];

/** Gallery entries. Drop real photos into /public/gallery and set `src`.
 *  Entries without a `src` render as a warm placeholder tile. */
export type Photo = {
    id: string;
    title: string;
    year: string;
    description: string;
    src?: string;
    rotation: number; // degrees
    tone: string; // placeholder gradient colour
};

export const PHOTOS: Photo[] = [
    {
        id: "p1",
        title: "Where it began",
        year: "1996",
        description: "Thirty years ago, God began a good work.",
        rotation: -5,
        tone: "#e0b68f",
        src: "/gallery/IMG_2593.jpeg",
    },
    {
        id: "p2",
        title: "Little blessing",
        year: "2001",
        description: "Grace upon grace, even as a little one.",
        rotation: 4,
        tone: "#cf9d7d",
        src: "/gallery/IMG_0916.JPG",
    },
    {
        id: "p3",
        title: "Growing in Him",
        year: "2008",
        description: "He was faithful through every season.",
        rotation: -3,
        tone: "#d6a86a",
        src: "/gallery/IMG_0918.JPG",
    },
    {
        id: "p4",
        title: "Sweet sixteen",
        year: "2012",
        description: "Joy that only the Lord can give.",
        rotation: 6,
        tone: "#c98b6b",
        src: "/gallery/866aa75d-67dc-4a63-b7bf-91e5705a3a62.jpg",
    },
    {
        id: "p5",
        title: "Stepping out",
        year: "2016",
        description: "New chapters, same faithful God.",
        rotation: -6,
        tone: "#bb7a55",
        src: "/gallery/IMG_4313.jpeg",
    },
    {
        id: "p6",
        title: "Brighter still",
        year: "2020",
        description: "Kept and carried through it all.",
        rotation: 3,
        tone: "#dcae84",
        src: "/gallery/IMG_6599.JPG",
    },
    {
        id: "p7",
        title: "This year",
        year: "2024",
        description: "Counting His mercies, new every morning.",
        rotation: -4,
        tone: "#d49a72",
        src: "/gallery/IMG_5806.JPG",
    },
    {
        id: "p8",
        title: "Thirty & thankful",
        year: "2026",
        description: "Celebrating 30 years of His goodness.",
        rotation: 5,
        tone: "#c98a5e",
        src: "/gallery/IMG_0638.JPG.jpeg",
    },
    // ── Add more photos below ────────────────────────────────────────────
    // Drop the image file into /public/gallery/ then set the `src` field,
    // e.g.  src: "/gallery/rosette-2019.jpg"
    {
        id: "p9",
        title: "Add a caption",
        year: "20XX",
        description: "Add your memory here.",
        rotation: -2,
        tone: "#c4845a",
        src: "/gallery/IMG_0541.JPG",
    },
    {
        id: "p10",
        title: "Add a caption",
        year: "20XX",
        description: "Add your memory here.",
        rotation: 5,
        tone: "#d09e6e",
        src: "/gallery/IMG_5465.jpg",
    },
    {
        id: "p11",
        title: "Add a caption",
        year: "20XX",
        description: "Add your memory here.",
        rotation: -5,
        tone: "#c08050",
        src: "/gallery/IMG_5238.JPG",
    },
    {
        id: "p12",
        title: "Add a caption",
        year: "20XX",
        description: "Add your memory here.",
        rotation: 3,
        tone: "#b87a48",
        src: "/gallery/IMG_5167.jpeg",
    },
];

// ──────────────────────────────────────────────────────────────────────────────
// Memes / Pinterest Images
// ──────────────────────────────────────────────────────────────────────────────
export type Meme = {
    id: string;
    title: string;
    /** Place real images in /public/gallery/memes/ and set path here */
    src?: string;
    rotation: number;
};

export const MEMES: Meme[] = [
    {
        id: "m1",
        title: "When the worship hits",
        rotation: -4,
        src: "/memes/5aea68ffad44fc40037b4e12132aa1e7.jpg",
    },
    {
        id: "m2",
        title: "5 mins away",
        rotation: 6,
        src: "/memes/RDC afbeelding.jpg",
    },
    {
        id: "m3",
        title: "Prayer warrior mode",
        rotation: -3,
        src: "/memes/Rosette's Bday (2).jpg",
    },
    {
        id: "m4",
        title: "The blueprint",
        rotation: 5,
        src: "/memes/Meisje.jpg",
    },
    {
        id: "m5",
        title: "Pinterest mood",
        rotation: -6,
        src: "/memes/a912d0b70cf2dbb744beddafa62c68ee.jpg",
    },
    { id: "m6", title: "Main character energy", rotation: 4 },
    { id: "m7", title: "That one laugh", rotation: -2 },
];

// ──────────────────────────────────────────────────────────────────────────────
// Lyrics of the Night
// ──────────────────────────────────────────────────────────────────────────────
export type Song = {
    id: string;
    title: string;
    artist?: string;
    /** Multi-line lyrics string — use \n for line breaks */
    lyrics: string;
};

export type LyricsSet = {
    id: string;
    label: string;
    emoji: string;
    accentColor: string;
    bgColor: string;
    songs: Song[];
};

export const LYRICS: LyricsSet[] = [
    {
        id: "yemi",
        label: "Pre-set",
        emoji: "🎤",
        accentColor: "#9B3A2D",
        bgColor: "rgba(155, 58, 45, 0.07)",
        songs: [
            {
                id: "yemi-1",
                title: "You covered me",
                artist: "Dr. R.A Vernon",
                lyrics: `I don't wanna sing the latest song
I don't want to percolate the crowd
I just wanna make you smile
I don't care who thinks I'm right or wrong
I don't care who tries to calm me down
I just wanna praise you now

You covered me in the midst of it all
You love me, gave me another chance
You saw my needs when others saw my faults
You forgave me

I don't have to listen for my name
They don't have to walk me down the aisle
I just wanna make you proud
Should I make the hall of fame
Or they save a special seat
I just hope that you'll be pleased

You covered me in the midst of it all
You love me, gave me another chance
You rescued me
I was going to fall, going to fall
You saved me

So in my life, in my life be glorified yeah, yeah
(Be glorified, be glorified)
So in my life, in my life yeah yeah, oh
(Be glorified, be glorified)


You get the glory
You get the praise
You take the honor
I just want to say
(Thanks)
You get the glory
(You get the glory)
You get the praise
(You get the praise)
Take all of the honor
(You take the honor)
I just want to say
(Thanks)
You get the glory
(You get the glory)
I want you to get the praise
(You get the praise)
You take the honor
I just want to say
I just want to say
(Thanks)
You get the glory
(You get the glory)
Father you to get the praise
(You get the praise)
You take the honor
I just want to say
(Thanks)
I've come back to say
(Thanks)
Thank you Lord
(Thank you Lord)
For everything you've done
And I've come back to say
(Thanks)
Thank you Lord
(Thank you Lord, thanks)
I've come back to say
(Thanks)
Thank you Jesus
(Thank you Lord)
Yeah, for everything you will do
For your grace and your mercy thank you Jesus
I have a grateful heart and I'm saying thank you
Thank you lord
You get the glory
(You get the glory)
You get the praise out of all I've got
(You get the praise)
Take all of the honor
(You take the honor)
I just want to say
(Thanks)
You got the glory
(You get the glory)
You got the praise, Hallelujah
(You get the praise)
You take the honor
(You take the honor)
I just want to say
(Thanks)
Thank you for your glory Jesus
(You've got the glory)
Thank you for your mercy God
(You got the praise)
You take the honor
(You got the honor)
I just want to say thanks
(Thanks)
You've got the glory
(You've got the glory)
Take all of the praise Jesus
(You got the honor)
`,
            },
            {
                id: "yemi-2",
                title: "Yahweh Flow",
                artist: "Tye Tribett",
                lyrics: `[Chorus 1: Tye Tribbett & Choir]
So, we lift You high
Yahweh, Yahweh (Fill the room with the name, Yahweh)
Yahweh, Yahweh (Fill the room with the name, Yahweh)
Yahweh, Yahweh (We lift You high, You are)
Yahweh, Yahweh (Woo, You're El Shaddai, call Him y'all)
Yahweh, Yahweh (Hey, You're Adonai, You are)
Yahweh, Yahweh (My needs, You will supply, You are)
Yahweh, Yahweh (Yahweh, Yahweh, and there's none beside)
Yahweh, Yahweh (So, tonight, we lift You high, call His name)
Yahweh, Yahwеh (Yahweh)
Yahweh, Yahweh (Haha, dеmons tremble when we call the name, Yahweh)
Yahweh, Yahweh (Woo, darkness trembles when we call the name, Yahweh)
Yahweh, Yahweh (Let's call Him like this, y'all, let's do it)

[Chorus 2: Tye Tribbett & Choir]
Yeshua
Fill the room with His name, Yeshua
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
Woo, you hear that breakthrough in here?
Every time you sing His name, something not like Him is leaving your life
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
Confusion is leaving, depression is leaving, sickness is leaving
Poverty leaving, stress is leaving
Every time we call, when we call that name
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
Depression is leaving, stress is leaving, confusion is leaving
When we call that name, when we call Your name
When we call Your name, when we call Your name, when we call Your name
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
Confusion is leaving, darkness is leaving, pain is leaving
When we call Your name, when we call Your name
When we call His name, when we call His name, when we call His name
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
Sickness is leaving, leaving, sickness is leaving
When we call that name, when we call that name
When you call that name, when you call that name, say it, say it


[Chorus 3: Tye Tribbett, Choir & Vocal]
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
To worship You, I live
To worship You, I live, I live to worship You
When we call that name, when we call that name
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
To worship You, I live (Sickness is leaving, darkness is leaving)
To worship You, I live, I live to worship You, ah-oh-ah (Confusion is leaving, stress is leaving)
When we call that name, when we call that name
When you call that name, say it, say it, say it
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
To worship You, I live
To worship You, I live, I live to worship You, You
When we call that name, when we call that name
When we call that name, when we call that name

[Chorus 4: Tye Tribbett, Choir, Vocal & Vocal 2]
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
To worship You, I live
To worship You, I live, I live to worship You, You, oh
Let all the other names fade away, till there's only You
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
To worship You, I live (Let all the other names fade away)
To worship You, I live, I live to worship You
Let all the other names fade away
Sing Yeshua y'all, one, two, three
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
To worship You, I live
To worship You, I live, I live to worship You
Let all the other names fade away, till there's only You

[Chorus 5: Tye Tribbett, Choir, Vocal & Vocal 2]
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
To worship You, I live (Our God is greater)
To worship You, I live, I live to worship You (Our God is stronger)
Let all the other names fade away, Jesus, take Your place
Lord, You are higher than any other
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
To worship You, I live (Our God is Healer)
To worship You, I live, I live to worship You (Awesome in power, our God)
Let all the other names fade away, till there's only You (Our God)
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
To worship You, I live (Our God is greater)
To worship You, I live, I live to worship You (Our God is stronger)
Let all the other names fade away, Jesus, take Your place
Lord, You are higher than any other
Yeshua, ah-ah-ah-ah-ah-ah-ah-ah
To worship You, I live (Our God is Healer)
To worship You, I live, I live to worship You (Awesome in power, our God)
Let all the other names fade away
When you can't find words to say, you can say, oh-oh, oh, oh

[Refrain: Tye Tribbett & Choir]
Oh-oh, oh, oh
Come on, say it, oh-oh, oh, oh
Oh-oh, oh, oh
God is so awesome, He understands your oh, come on, say oh
Oh-oh, oh, oh
Sometimes, you're overwhelmed and you don't know what to say
He can interpret your oh, my sis, just say oh
Oh-oh, oh, oh
Heaven understands your oh
God understands your oh, oh
Oh-oh, oh, oh
Come on San Fran
If you could just raise up a oh
Oh-oh, oh, oh
Let's go, y'all
To worship You, I live (Hey)

[Chorus 6: Tye Tribbett & Choir]
To worship You, I live (Come on)
To worship You, I live, I live to worship You
That's why I have breath in my body, y'all
To worship You, I live
To worship You, I live (Come on)
To worship You, I live, I live to worship You
Can y'all tell me why you got life?
Help us sing tonight, why are you alive? To worship You
To worship You, I live (Yeah-oh)
To worship You, I live, I live to worship You
And when you can't find words to say
Just say, oh-oh, oh, oh

[Refrain: Tye Tribbett & Choir]
Oh-oh, oh, oh
Come on, come on
Oh-oh, oh, oh
Yeah, yeah, yeah
Oh-oh, oh, oh
Raise it up, raise it up, raise it up, oh-oh, oh, oh
Oh-oh, oh, oh
One more time, as loud as you can
To worship You, I live

[Chorus 6: Tye Tribbett & Choir]
To worship You, I live (Come on, y'all)
To worship You, I live, I live to worship You
Remind yourself of why you on this earth
Why y'all here? To wor—
To worship You, I live (Oh)
To worship You, I live, I live to worship You
Last time, I'mma leave y'all alone
As loud as you can, say
To worship You, I live
To worship You, I live
To worship You, I live, I live to worship You
Oh-oh, oh, oh

[Refrain: Tye Tribbett & Choir]
Oh-oh, oh, oh
Oh my goodness, I feel so good today
Oh-oh, oh, oh-oh
Oh-oh, oh, oh
Ooh, last time
Oh-oh, oh, oh
Oh-oh, oh, oh

[Outro]
He loves us so much
And because He first loved us
I love You, forever
I love You, forever
I love You`,
            },
            {
                id: "yemi-3",
                title: "Never Lost/Champion",
                artist: "Elevation Worship & Maverick City Music",
                lyrics: `He is my faithful father
Calling me out of the dark
Night cannot whisper away what He said in the light
He is my firm foundation
My anchor won't be moved
Storms may collide but my soul is on fire with His word
Wind listen to the sound
The power on my lips
Jesus has broken the curse
He has never lost a battle
Who are you great mountain?
That you should not bow low?
Jesus defeated the darkness
He has never lost a battle
And He never will, He never will
And Hе never will, He nеver will
And He never will, He never will
And He never will, He never will
And He never will, He never will
And He never will, He never will
And He never will, He never will
And He never will, He never will
Our great defender
Our strong tower
He has never lost a battle
He has never lost a battle
Our great defender
Our strong tower
He has never lost a battle
He has never lost a battle
Our great defender
Our strong tower
He has never lost a battle
He has never lost a battle
Wind listen to the sound
The power on my lips
Jesus has broken the curse
He has never lost a battle
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
That you should not bow low?
Jesus defeated the darkness
He has never lost a battle
And He never will, He never will
And He never will, He never will
And He never will, He never will
And He never will, He never will
Our great defender
Our strong tower
He has never lost a battle
He has never lost a battle
You are my champion
Giants fall when you stand
Undefeated
Every battle You've won
I am who You say I am
You crown me with confidence
I am seated, in the heavenly place
Undefeated, with the
One who has conquered it all
You are my champion
Giants fall when you stand
Undefeated
Every battle You've won
I am who You say I am
You crown me with confidence
I am seated, in the heavenly place
Undefeated, with the
One who has conquered it all
You are my champion
Giants fall when you stand
Undefeated
Every battle You've won
I am who You say I am
You crown me with confidence
I am seated, in the heavenly place
Undefeated, with the
One who has conquered it all
My great defender
My strong tower
You've never lost a battle
You've never lost a battle
My great defender
My strong tower
You've never lost a battle
You've never lost a battle`,
            },
            {
                id: "yemi-4",
                title: "Jireh",
                artist: "Elevation Worship & Maverick City Music",
                lyrics: `He is my faithful father
Calling me out of the dark
Night cannot whisper away what He said in the light
He is my firm foundation
My anchor won't be moved
Storms may collide but my soul is on fire with His word
Wind listen to the sound
The power on my lips
Jesus has broken the curse
He has never lost a battle
Who are you great mountain?
That you should not bow low?
Jesus defeated the darkness
He has never lost a battle
And He never will, He never will
And Hе never will, He nеver will
And He never will, He never will
And He never will, He never will
And He never will, He never will
And He never will, He never will
And He never will, He never will
And He never will, He never will
Our great defender
Our strong tower
He has never lost a battle
He has never lost a battle
Our great defender
Our strong tower
He has never lost a battle
He has never lost a battle
Our great defender
Our strong tower
He has never lost a battle
He has never lost a battle
Wind listen to the sound
The power on my lips
Jesus has broken the curse
He has never lost a battle
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
Who are you great mountain?
That you should not bow low?
Jesus defeated the darkness
He has never lost a battle
And He never will, He never will
And He never will, He never will
And He never will, He never will
And He never will, He never will
Our great defender
Our strong tower
He has never lost a battle
He has never lost a battle
You are my champion
Giants fall when you stand
Undefeated
Every battle You've won
I am who You say I am
You crown me with confidence
I am seated, in the heavenly place
Undefeated, with the
One who has conquered it all
You are my champion
Giants fall when you stand
Undefeated
Every battle You've won
I am who You say I am
You crown me with confidence
I am seated, in the heavenly place
Undefeated, with the
One who has conquered it all
You are my champion
Giants fall when you stand
Undefeated
Every battle You've won
I am who You say I am
You crown me with confidence
I am seated, in the heavenly place
Undefeated, with the
One who has conquered it all
My great defender
My strong tower
You've never lost a battle
You've never lost a battle
My great defender
My strong tower
You've never lost a battle
You've never lost a battle`,
            },
        ],
    },
    {
        id: "alexia",
        label: "Opening set",
        emoji: "🎵",
        accentColor: "#D4A843",
        bgColor: "rgba(212, 168, 67, 0.07)",
        songs: [
            {
                id: "alexia-1",
                title: "Oh be lifted",
                artist: "MOG Music ft Donnie Mcclurkin",
                lyrics: `Oh, be lifted
Above all other gods
We lay our crowns and worship You
Oh (oh, be lifted)
Above all other gods (above all other gods)
We lay (we lay our crowns and worship You)
Sing it again oh (oh be lifted)
Above all other gods, above all other gods (above all other gods)
We lay (we lay our crowns and worship You)
Oh, glorious God, sing (oh, glorious God)
We praise Your name
We lay our crowns and worship You
Oh glorious God, ye (oh, glorious God)
We praise (we praise Your name)
We lay our crowns (we lay our crowns and worship You)
Oh, be lifted, sing (oh, be lifted)
Above all other gods, above all other gods (above all other gods)
We lay... (we lay our crowns and worship You)
Say, oh, be lifted (oh, be lifted)
Above all other gods
We lay (we lay our crowns)
And worship (and worship You)
Oh, glorious God, sing (oh, glorious God)
We praise (we praise Your name)
We lay our crowns and worship You
Oh glorious God (oh glorious God)
We praise Your name (we praise Your name)
We lay... (we lay our crowns)
And worship You (and worship You)
Oh glorious God, sing (oh glorious God)
We praise Your name (we praise Your name)
We lay our crowns (we lay our crowns)
And worship You (and worship You)
Oh glorious God (oh glorious God)
We praise Your name (we praise Your name)
We lay our crowns (we lay our crowns)
And worship You (and worship You)
Oh (oh, be lifted)
Above all other gods (above all other gods)
We lay our crowns (we lay our crowns)
And worship You (and worship You)
Oh, be lifted, oh, be lifted (oh, be lifted)
Above all other gods (above all other gods)
We lay our crowns (we lay our crowns)
And worship You (and worship You)
Oh, glorious God (oh, glorious God)
We praise Your name
We lay... (we lay our crowns)
And worship You (and worship You)
Oh, glorious God, ye (oh, glorious God)
We... (we praise Your name)
We lay, we lay (we lay our crowns)
And worship (and worship You)
Oh, glorious God (oh, glorious God)
We praise Your name (we praise Your name)
We lay our crowns
And worship you
Oh glorious God, ye (oh glorious God)
We praise Your name (we praise Your name)
We lay our crowns
And worship (and worship you)
Oh glorious God, sing (oh glorious God)
We praise Your name
We lay our crowns
And worship You
Lay our crowns Lord (we lay our crowns)
And worship You
We lay our crowns, oh Lord (we lay our crowns)
And worship You
We lay our crowns, we lay our crowns (we lay our crowns)
And worship You
Oh glorious God, oh glorious God sing (oh, glorious God)
We praise Your name (we praise Your name)
We lay our crowns (we lay our crowns)
And worship (and worship You)
Oh glorious God, ye (oh, glorious God)
We praise Your name
We lay... (we lay our crowns)
And worship (and worship You)
Oh, glorious God, yeah (oh, glorious God)
We praise Your name
We lay our crowns
And worship You
We lay our crowns
And worship You
Bless the name of the Lord
We lay (we lay our crowns)
And worship (and worship You)
We lay (we lay our crowns)
And worship You
Hallelujah, Hallelujah`,
            },
            {
                id: "alexia-2",
                title: "The anthem ",
                artist: "Todd Dulaney",
                lyrics: `Hallelujah
You have won the victory
Lift up your voice and say now
(Hallelujah)
You have won it all for me, and
Death could not hold you down
You are the risen King
Seated in majesty
You are the risen King
By His strides we are healed
By His nail-pierced hands we're free
By His blood we're washed clean
Now we have the victory
And the power of sin is broken
Jesus overcame it all, yes he did
He has won our freedom, yes he has
Jesus has won it all (it all)
So every voice we sing
Hallelujah
You have won the victory (so glad that He is alive, sing)
Hallelujah
You have won it all for me (and we say death)
Death could not hold you down
You're alive and well
You are the risen King (yeah, sing)
Seated in majesty (let's go)
See, you are the King of glory
You are the risen King (say death could not hold you)
Death could not hold you down
Nothing could hold you down (oh God)
You are the risen King (and you're seated in)
Seated in majesty (oh you are the great)
You are the risen King (stretch out your hands, stretch your hands, stretch 'em out)
Our God is risen (he's alive now)
He is alive (he's alive now)
He won the victory (said he's alive now)
He reigns on high (said he's alive)
Our God is risen (he's not dead)
He is alive (so grateful that he lives)
He won the victory
He reigns on high (come on, let's just sing, come on, our God is risen)
Our God is risen
He is alive (he's alive now)
He won the victory
He reigns on high (our God is alive and well)
Our God is risen (yes he is)
He is alive (yes he is now)
He won the victory (come on)
He reigns on high (lift up your hands and your voice, say hallelujah)
Hallelujah (you've won God)
You have won the victory
Hallelujah
You have won it all for me (now you gotta get all the way up, gotta sing death could not)
Death could not hold you down (throw your voices in the air, sing)
You are the risen King (and you're seated)
Seated in majesty (he's great, he's good so you are)
You are the risen King
Open your mouth, open your mouth (open your mouth now)
Glory, yeah
Break it open, break open the atmosphere
Break it open with your worship, come on
Skip to be worthy the for a minute
Break it open now
Come on, shout this out, sing
Woah, oh oh (oh oh oh)
Oh, oh oh (oh oh oh)
Woah, oh oh (oh oh oh)
Oh, oh oh (oh oh oh)
Woah, oh oh (oh oh oh)
Oh, oh oh (oh oh oh)
Woah, oh oh (oh oh oh)
Oh, oh oh (oh oh oh)
Woah, oh oh (oh oh oh)
Oh, oh oh (oh oh oh)
Woah, oh oh (oh oh oh)
Oh, oh oh (oh oh oh)
Woah, oh oh oh (oh oh oh)
Oh, oh oh oh (oh oh oh)
Woah, oh oh (oh oh oh)
Woah, oh oh (oh oh oh)
Singing, oh God, oh God
Release your glory`,
            },
            {
                id: "alexia-3",
                title: "What a God",
                artist: "Sue Worship, Abbie Gamboa, Chelsea Plank",
                lyrics: `verse
Who thought I′d find You at the lowest place?
Who thought You'd feel me in the crowd?
Who knew You make good of my mistakes?
You′re nothin' like I thought You were, You're better
chorus
What a God, what a God (whoa)
What a God, what a God (whoa)
What a God, what a God
Oh, it′s who You are
What a God, what a God
(Yeah)
(Come on)
verse
I thought You′d show up for perfection
'Cause what kind of God looks for the lost?
They say it′s over for a sinner
Although You say, "No, it's not, no, it′s not"
pre-chorus
You say, "No, it's not, no, it′s not"
chorus
What a God, what a God
What a God, what a God (yeah)
What a God, what a God (yeah)
What a God, what a God
What a God, what a God
bridge
Yeah
(SEU nation)
(Everything I need)
(Yeah)
verse
If the highest place I reach is at Your feet
Then I've done it all
If the best thing that I've seen is Your glory
Then I′ve seen it all
Your love has changed my life, forever satisfied
God, You are my everything
If the highest place I reach is at Your feet
Then I′ve done it all
If the best thing that I've seen is Your glory
Then I′ve seen it all
Your love has changed my life, forever satisfied
God, You are- (come on, hands up) (everything)
(If one word is the-)
If one word is the only thing You speak (oh, yeah)
Then I've heard it all
If I feel Your heart and never see Your hand
I still have it all
No treasure of this life could ever satisfy
God, You are my everything (whoa, God)
You are my everything (whoa, God)
You are my everything (what a God, what a God)
chorus
What a God, what a God
What a God, what a God
What a God, what a God
(Come on, let′s lift it up)
verse
(If the highest place I)
If the highest place I reached is at Your feet (then I've done it all)
Then I′ve done it all
If the best thing that I've seen is Your glory (then I've seen it)
Then I′ve seen it all (sing Your love has)
Your love has changed my life, forever satisfied (God, You are)
You are my everything
(If one word is the-)
If one word is the only thing You speak (then I′ve heard it all)
Then I've heard it all (if I)
If I feel Your heart and never see Your hand
I still have it all (there is no treasure)
No treasure of this life (could ever satisfy)
Could ever satisfy (You′re the one)
chorus
You are my everything
God, You are my everything
God, You are my everything
verse
If the highest place I reach (is at your feet)
(Then I've done it all)
(If the best thing that I′ve seen is your glory)
Then I've seen it all
Your love has changed my life forever satisfied
God, you are (my everything)
If one word is the only
(If one word is the only thing You speak)
Then I′ve heard it all
If I (feel Your heart and never see Your hand)
Yeah, I still have it all
No treasure of this life could ever satisfy
God, You are my everything
(You are my everything)
Whoa, Jesus (You are my everything)
I'm satisfied with You
You are (my everything)
Whoa, I'm satisfied with You
You are (my everything)
You′re my admiration
You are (You are my everything), whoa, God
You are (my) everything, yeah
outro
(You are my everything)
Yeah, yeah
(You are my everything)
Yeah, make it personal, yeah
(You are my everything)
(You are my everything)
(You are my everything)
(You are my everything)`,
            },
            {
                id: "alexia-4",
                title: "Every other God is an idol",
                artist: "Annatoria",
                lyrics: `[Verse: Jessica Barron]
Every other God is an idol
Who cannot see and cannot hear
There is One true living God
There is One true living God

[Chorus: Tim Reimherr & Jessica Barron]
You are the Lord, You are the Lord
There is no other God
You are the Lord forevermore
And You shall reign
You are the Lord, You are the Lord
There is no other God
You are the Lord forevermore
And You shall reign

[Verse: Jessica Barron]
Every other God
Every other God is an idol
Who cannot see and cannot hear
There is One true living God
There is One true living God
Every other God
Every other God is an idol
Who cannot see and cannot hear
There is One true living God
There is One true living God
Every other God is an idol
Who cannot see and cannot hear
There is One true living God
There is One true living God

In Jesus’ Name (Live)
Darlene Zschech
[Bridge: Tim Reimherr & Jessica Barron]
His name is Jesus
His name is Jesus
His name is Jesus
His name is Jesus

[Chorus: Tim Reimherr & Jessica Barron]
You are the Lord
You are the Lord, You are the Lord
There is no other God
You are the Lord forevermore
And You shall reign
You are the Lord, You are the Lord
There is no other God
You are the Lord forevermore
And You shall reign

[Verse: Jessica Barron]
Every other God
For every other God is an idol
Who cannot see and cannot hear
There is One true living God (Hallelujah)
There is One true living God (Hallelujah)
Every other God is an idol
Who cannot see and cannot hear
There is One true living God (We know His name)
There is One true living God (Every other God)
Every other God is an idol
Who cannot see and cannot hear
There is One true living God
There is One true living God
For every other God is an idol
Who cannot see and cannot hear
There is One true living God
There is One true living God
[Bridge: Tim Reimherr & Jessica Barron]
His name is Jesus
His name is Jesus
His name is Jesus
His name is Jesus

[Chorus: Tim Reimherr & Jessica Barron]
You are the Lord
You are the Lord, You are the Lord
There is no other God
You are the Lord forevermore
And You shall reign
You are the Lord, You are the Lord
There is no other God
You are the Lord forevermore
And You shall reign

[Outro: Tim Reimherr & Jessica Barron]
You shall reign
You shall reign
You shall reign
You shall reign
You shall reign
You shall reign...`,
            },
            {
                id: "alexia-5",
                title: "What a beautiful name/ worthy is your name",
                artist: "Lizzie Morgan & Charlie Weens",
                lyrics: `Verse 1

You were the Word at the beginning
One with God the Lord Most High
Your hidden glory in creation
Now revealed in You our Christ

Chorus 1

What a beautiful name it is
What a beautiful name it is
The name of Jesus
Christ my King
What a beautiful name it is
Nothing compares to this
What a beautiful name it is
The name of Jesus

Verse 2

You didn't want heaven without us
So Jesus You brought heaven down
My sin was great
Your love was greater
What could separate us now

Chorus 2

What a wonderful name it is
What a wonderful name it is
The name of Jesus
Christ my King
What a wonderful name it is
Nothing compares to this
What a wonderful name it is
The name of Jesus

Bridge 1

Death could not hold You
The veil tore before You
You silenced the boast
Of sin and grave
The heavens are roaring
The praise of Your glory
For You are raised
To life again

Bridge 2

You have no rival
You have no equal
Now and forever
God You reign
Yours is the Kingdom
Yours is the glory
Yours is the name
Above all names

Chorus 3

What a powerful name it is
What a powerful name it is
The name of Jesus
Christ my King
What a powerful name it is
Nothing can stand against
What a powerful name it is
The name of Jesus

Bridge 1

You have no rival
You have no equal
Now and forever
God You reign
Yours is the Kingdom
Yours is the glory
Yours is the name
Above all names

Tag

Yours is the name
Above all names

Chorus 4

Worthy is Your name Jesus
You deserve the praise
Worthy is Your name
Worthy is Your name Jesus
You deserve the praise
Worthy is Your name

Refrain

Worthy is Your name
Worthy is Your name

Chorus 4

Worthy is Your name Jesus
You deserve the praise
Worthy is Your name
Worthy is Your name Jesus
You deserve the praise
Worthy is Your name

`,
            },

            {
                id: "alexia-6",
                title: "Wide as the sky - A night with the king",
                artist: "Matt redman`",
                lyrics: `Wide As The Sky
Hands up hearts open
Wide As the sky
We lift You high
We lift You high
Hands up hearts open
Wide as we cry
God we lift Your name high
Hands up hearts open
Wide As the sky
We lift You high
We lift You high
Hands up hearts open
Wide as we cry
God we lift Your name high
Let all the other names fade away
Let all the other names fade away
Until there's only You
Let all the other names fade away
Jesus take Your place
Jesus take Your place
Let all the other names fade away
Let all the other names fade away
Until there's only You
Let all the other names fade away
Jesus take Your place
Jesus take Your place
Hands up hearts open
Wide As the sky
We lift You high
We lift You high
Hands up hearts open
Wide as we cry
God we lift Your name high
Hands up hearts open
Wide As the sky
We lift You high
We lift You high
Hands up hearts open
Wide as we cry
God we lift Your name high
Our God
We lift You high
we lift You high
Hands up
God we lift Your name high
Our God
We lift You high
we lift You high
Hands up
God we lift Your name high
Our God
We lift You high
we lift You high
Hands up
God we lift Your name high
Our God
We lift You high
we lift You high
Hands up
God we lift Your name high
Let all the other names fade away
Let all the other names fade away
Until there's only You
Let all the other names fade away
Jesus take Your place
Jesus take Your place
Let all the other names fade away
Let all the other names fade away
Until there's only You
Let all the other names fade away
Jesus take Your place
Jesus take Your place`,
            },
        ],
    },
    {
        id: "Closing set",
        label: "Closing Set",
        emoji: "🎶",
        accentColor: "#E07B5B",
        bgColor: "rgba(224, 123, 91, 0.07)",
        songs: [
            {
                id: "prettyana-1",
                title: "Omemma",
                artist: "Chandler Moore",
                lyrics: `intro
Omemma (always)
Always on time (You can′t)
You can do no wrong
Omemma (You leave)
Leave the 99, always for the one
Can we turn up, can we turn up?
Can we turn up, can we turn up? Hey
He really, really moves, oh
This is what it says
verse
I know He loves me, I know He cares
Whenever I call, He always is right there
In times of trouble, He is my help
Yeah, I know no fear
I know He'll be right there
chorus
Ay, He really does what He says He will do
My God really moves, oh
Ay, why would I doubt when He always comes through?
My God really moves, oh
He really, really moves, oh
Come on, sing the verse y′all
verse
I know He loves me (I know He loves me)
I know He cares (I know He cares) whenever
Whenever I call, He always is right there
When I'm in trouble (when I'm in trouble)
He is my help (He is my help)
Yeah, I know no fear, I know He′ll be right there (come on, we say)
chorus
Ay, He really does what He says He will do
My God really moves, oh (whoa-oh-oh)
Ay, why would I doubt when He always comes through?
My God really moves, oh
Oh, ay, He really does what He says He will do
My God really moves, oh (Baba)
Ay (Baba, Baba), why would I doubt when He always comes through?
My God really moves, oh
verse
He really, really moves, oh
He really comes through for me, oh
Every time, one time, every time
Come on, this′s your part, come on let's say
pre-chorus
Omemma
You′re always on time
You can do no wrong
Omemma, come on
You leave the 99, always for the one
Omemma (You're the God who does good)
Always on time (You can′t do no)
You can do no wrong
Omemma (yeah, Baba, Baba)
Leave the 99, always for the one (come on, Omemma)
Omemma (You're always)
Always on time (You can′t do no)
You can do no wrong (Omemma)
Omemma (You leave)
Leave the 99 (You got one more in you, come on)
Always for the one (Omemma)
Omemma (You're always)
Always on time (You can't do no-)
You can do no wrong
Omemma (You leave)
Leave the 99, always for the one (Come on)
chorus
Ay, He really does what He says He will do
My God really moves, oh (whoa, yeah)
Ay (Baba, Baba, Baba), why would I doubt when He always comes through
My God really moves, oh
Whoa, ay, He really does what He says He will do
My God really moves, oh (oh, yeah, yeah)
Ay, why would I doubt when He always comes through
My God really moves, oh (let me hear you, we say)
Ay, He really does what He says He will do
My God really moves, oh (Baba)
Ay (why would I doubt) why would I doubt when He always comes through
My God really moves, oh (ay)
verse
So glad You leave the 99, always for the one
So glad You leave the 99, always for the one
I remember when You came and saved me
I′m glad You leave the 99, always for the one (hey)
I remember when You came and grabbed me
So glad You leave the 99, always for the one (hey)
I remember the day You came and saved me from my sin
I′m glad You leave the 99, always for the one (hey)
Oh the overwhelming, never-ending love of God
You leave the 99, always for the one (hey)
Oh, the overwhelming, never-ending love of God
You leave the 99, always for the one (hey)
Oh, the overwhelming, never-ending love of God
You leave the 99, always for the one (hey)
Oh, the overwhelming, never-ending
So glad You leave the 99, always for the one
There's no wall that You won′t get down
I'm so glad that You will leave the 99, always for the one
There′s no lie that You won't take down
I′m so glad that You will leave the 99, always for the one
Baba-Baba, Imela, Baba-Baba
So glad You leave the 99, always for the one
LA, can we turn up just 30 sec-? Everybody turn up, turn up
So glad You, so glad You leave the 99, always for the one
Whatever it takes, whatever it takes
So glad You leave the 99, always for the one (oh, Lord)
Whatever it takes, whatever it takes
So glad You leave the 99, always for the one
I remember the day that You came and saved me
I'm so glad that You will leave the 99, always for the one (oh, Lord)
So glad You leave the 99, always for the one
I remember that day that You came and grabbed me from my mess
I'm glad You leave the 99, always for the one (oh)
Imela, Imela, Baba-Baba
Leave the 99, always for the one
Does anybody know what it feels like to be saved?
So glad You leave the 99, always for the one
What kind of God is this? What kind of God is this?
So glad You leave the 99, always for the one
What kind of God is this? What kind of God is this?
So glad You leave the 99, always for the one
Hey, hey, hey, I′m glad You will
Leave the 99, always for the one
He′ll come to the highest mountain
And He'll come to the lowest valley, He will
Leave the 99, always for the one (hey)
He′ll come to the highest mountain
And He'll come to the lowest valley
He will leave the 99, always for the one
I know He will leave the 99, always for the one
Whatever it takes, whatever it takes, whatever it takes, whatever it takes
So glad You leave the 99, always for the one
So glad You leave the 99, always for the one (for the one)
There′s no wall that You won't get down
I′m so glad that You will leave the 99, always for the one
There's no shadow You won't light up
I′m so glad that You will leave the 99, always for the one (oh)
There′s no lie that You won't set down
I′m so glad that You will leave the 99, always for the one
Whatever it takes, whatever it takes
Oh, He will leave the 99, always for the one
Whatever it takes, whatever it takes
I've witnessed it leave the 99, always for the one
I′m a living example, He will, He will, He will
He will (leave the 99, always for the one) (Imela, Imela, Imela)
I'm living proof that He′ll do what He gotta do to get to you
He'll leave- (leave the 99, always for the one)
(Oh my God, I'm ′bout to lose my mind, oh my)
I′m living proof that He'll do what He gotta do to get to you
He′ll leave- (leave the 99, always for the one)
(I'm ′bout to lose my mind up on this stage)
I said I'm living proof that He′ll do what He gotta do to get to you
Leave the 99, always for the one
I said I'm living proof that He'll do what He gotta do to get to you (hey)
Leave the 99, always for the one
bridge
Whatever it takes, whatever it takes
Whatever it takes, whatever it takes
Whatever it takes, whatever it takes (ay-ay-ay)
Whatever it takes, whatever it takes (ay-ay-ay)
Whatever it takes, whatever it takes
Leave the 99, always for the one
verse
What kind of math is this? What kind of math is this?
It′s God math, leave the 99 always for the one
It′s not girl math, it's God math
So glad You leave the 99, always for the one
It′s not girl math, it's God math
So glad You leave the 99, always for the one (I′m sorry, I'm just grateful)
It′s not girl math, it's God math
So glad You leave the 99, always for the one
Whatever it takes, whatever it takes, whatever it takes, whatever it takes
So glad You leave the 99, always for the one
Whoo, leave the 99, always for the one (I feel good)
outro
Last time, so glad You leave the 99, always for the one
So glad You leave the 99, always for the one
So glad You leave the 99, always for the one
So glad You leave the 99, always for the one (oh, always for the one)
`,
            },
            {
                id: "prettyana-2",
                title: "Our God is greater",
                artist: "Chris Tomlin",
                lyrics: `[Verse 1]
Water You turned into wine
Opened the eyes of the blind
There's no one like You
None like You

[Verse 2]
Into the darkness, You shine
Out of the ashes, we rise
There's no one like You
None like You!

[Chorus]
Our God is greater, our God is stronger
God, You are higher than any other
Our God is healer, awesome in power
Our God, our God

[Verse 2]
Into the darkness, You shine
Out of the ashes, we rise
There's no one like You
None like You!

[Chorus]
Our God is greater, our God is stronger
God, You are higher than any other
Our God is healer, awesome in power
Our God, our God
Our God is greater, our God is stronger
God, You are higher than any other
Our God is healer, awesome in power
Our God, our God


Elevation Worship
Say Don’t Go (Taylor’s Version) [From the Vault]
Taylor Swift
[Interlude]

[Bridge]
And if our God is for us, then who could ever stop us
And if our God is with us, then what could stand against
And if our God is for us, then who could ever stop us
And if our God is with us, then what could stand against
Then what could stand against!

[Chorus]
Our God is greater, our God is stronger
God, You are higher than any other
Our God is healer, awesome in power
Our God, our God
Our God is greater, our God is stronger
God, You are higher than any other
Our God is healer, awesome in power
Our God, our God!

[Bridge: Outro]
And if our God is for us, then who could ever stop us
And if our God is with us, then what could stand against
And if our God is for us, then who could ever stop us
And if our God is with us, then what could stand against!
Then what could stand against!
What could stand against!`,
            },
            {
                id: "prettyana-3",
                title: "Big God",
                artist: "Tim Godfrey",
                lyrics: `Elle Lele (Elle Lele)
Elle Lele (Elle Lele)
Egbe Gbe gbe (Egbe Gbe gbe)
Egbe Gbe gbe (Egbe Gbe gbe)
Gbe gbe, Gbe gbe
(Gbe gbe, Gbe gbe)
Can you feel it (yeah oh)
Can you feel it (yeah oh)
Can you feel it (yeah oh)
Can you feel it (yeah oh)
I have a very big God
A very big God Oh
He no dey fall my hand oh
He's always on my side oh
A very big God
I have a very big
I have a very big God
A very big God, Oh
He no dey fall my hand oh
He's always on my side oh
A very big God
I have a very big God
I have a very big God
A very big God, oh
He no dey fall my hand oh
He's always on my side oh
A very big God
I have a very big God
A very big God, oh
He no dey fall my hand oh
He's always on my side oh
A very big God
See my life
Na so, so wonder
If you know my God
He's a miracle worker
He dey come through on a regular
Everything na Jaburata
Him blessings no need formula
This my God
He's a very big God
See my life
See my life
Na so, so wonder
If you know my God
He's a miracle worker
He dey come through on a regular
Everything na Jaburata
Him blessings no need formula
This my God
He's a very big God
I have a very big God
A very big God, oh
He no dey fall my hand oh
He's always on my side oh
A very big God
I have a very big God
A very big God, oh
He no dey fall my hand oh
He's always on my side oh
A very big God
Ah ah eeh, aah ah, ah eeh
Ah ah eeh, aah ah, ah eeh
Ah ah eeh, aah ah, ah eeh
This my God
He's a very Big God
Ah ah eeh, aah ah, ah eeh
Ah ah eeh, aah ah, ah eeh
Ah ah eeh, aah ah, ah eeh
This my God
He's a very big God
I have a very big God
A very big God oh
He no dey fall my hand oh
He's always on my side oh
A very big God
I have a very big God
A very big God oh
He no dey fall my hand oh
He's always on my side oh
A very big God
Ah ah eeh, aah ah, ah eeh
Ah ah eeh, aah ah, ah eeh
Ah ah eeh, aah ah, ah eeh
This my God
He's a Very Big God
Ah ah eeh, aah ah, ah eeh
Ah ah eeh, aah ah, ah eeh
Ah ah eeh, aah ah, ah eeh
This my God
He's a very big God
Ah ah eeh, aah ah, ah eeh
Ah ah eeh, aah ah, ah eeh
Ah ah eeh, aah ah, ah eeh
This my God
He's a Very Big God
I have a very big God
A very big God Oh
He no dey fall my hand oh
He's always on my side oh
A very big God
I have a very big God
A very big God Oh
He no dey fall my hand oh
He's always on my side oh
A very big God
I have a very big God
A very big God Oh
He no dey fall my hand oh
He's always on my side oh
A very big God`,
            },
            {
                id: "prettyana-4",
                title: "Praise",
                artist: "Brandon Lake ft Chris Brown",
                lyrics: `Let's clap, one, two, hey
Oh, yeah
Let everything
That has breath
Praise the Lord (you got it)
Praise the Lord
Let everything (let everything)
(Hey) that has breath
(Hey) praise the Lord
(Hey) praise the Lord
I'll praise in the valley
Praise on the mountain (yeah)
I'll praise when I'm sure
And praise when I'm doubting (yes, sir)
I'll praise when outnumbered
Praise when surrounded
'Cause praise is the water
My enemies drown in
As long as I'm breathing
I've got a reason to
Praise the Lord
Oh, my soul (c'mon)
Praise the Lord
Oh, my soul (hey)
I'll praise when I feel it
And I'll praise when I don't
I'll praise 'cause I know
You're still in control
Because my praise is a weapon
It's more than a sound (more than a sound)
Oh, my praise is the shout
That brings Jericho down (oh)
As long as I'm breathing
I've got a reason to
Praise the Lord (c'mon)
Oh, my soul
(So I'm gonna) praise the Lord
Oh, my soul (oh)
I won't be quiet, my God is alive
So how could I keep it inside?
Praise the Lord
Oh, my soul
(Praise the Lord)
Come on, let me see that dance
Put a dance on it tonight
If you're grateful
Come on, aye, aye (eh)
I'll praise 'cause You're sovereign
Praise 'cause You reign
Praise 'cause You rose and defeated the grave
I'll praise 'cause You're faithful
Praise 'cause You're true
Praise 'cause there's nobody greater than You, I'll praise
I'll praise 'cause You're sovereign
(You reign) praise 'cause You reign
Praise 'cause You rose and defeated the grave
I'll praise 'cause You're faithful
Praise 'cause You're true
Praise 'cause there's nobody greater than You
Praise the Lord
Oh, my soul (come on, come on, come on, come on)
I gotta praise the Lord
Oh, my soul
Praise the Lord
Oh, my soul (yes, my Lord)
Praise the Lord
Oh, my soul
I won't be quiet, my God is alive
How could I keep it inside?
(Oh, I won't be quiet)
I won't be quiet (my God)
My God is alive (how could I?)
How could I keep it inside?
(Oh, I won't be quiet)
I won't be quiet, my God is alive
How could I keep it inside?
praise the Lord
Oh, my soul
Let everything
That has breath
Hey, hey (praise the Lord)
Hey, hey (praise the Lord)
Let everything (let everything)
Come on, come on (that has breath)
Come on, come on (praise the Lord)
Come on, come on (praise the Lord)
Let everything (let everything)
If you got breath in your body (that has breath)
If you got breath in your body (praise the Lord)
Praise the Lord, come on (praise the Lord)
Let everything (let everything)
That has breath (that has breath)
Praise the Lord (praise the Lord)
What? (Praise the Lord)
`,
            },
            {
                id: "prettyana-5",
                title: "Who has the final say",
                artist: "Emmanuel Smith",
                lyrics: `Who has the final say
Jehovah has the final say

Jehovah turned my life around
He has turned my life around
He makes a way where there is no way
Jehovah has the final say`,
            },
            {
                id: "prettyana-6",
                title: "My God is good African Medley ",
                artist: "Joshue Avila",
                lyrics: `My God Is Good (Refrain)
Eh eh eh eh
My God is good oh
Eh eh eh eh
My God is good oh

In The Morning I Will Praise
In the morning when I wake up
I will sing my praise unto You, my Lord
I will shout and dance to You
For You have been my help from now till ever

My God Is Good (Refrain)
Eh eh eh eh
My God is good oh
Eh eh eh eh
My God is good oh

Another Level
In the morning when I wake up
I will sing my praise unto You, my Lord
I will shout and dance to You
For You have been my help another level

My God Is Good (Refrain)
Eh eh eh eh
My God is good oh
Eh eh eh eh
My God is good oh

Double Double
Everything now double double oh
Na double double
Anointing double double oh
Na double double

All power double double oh
Na double double
All wisdom double double oh
Na double double

My God Is Good (Refrain)
Eh eh eh eh
My God is good oh
Eh eh eh eh
My God is good oh

Lu Wey Jesu
Lu wey Lu wey Lu wey
Lu wey
Lu wey Jesu Lu wey
Lu wey

Tere Muka
Tere muka, Tere muka
Tere muka, Tere muka

You Are Good
You are good and Your mercy is forever
Hallelujah
You are good and Your mercy is forever
Hallelujah

Jehovah Most High
Jehovah
You are the most high
Jehovah
You are the most high God

Jehovah Eh
Jehovah eh
Jehovah ah
Jehovah eh
Jehovah ah

Jehovah Has The Final Say
Who has the final say
Jehovah has the final say

Jehovah turned my life around
He has turned my life around
He makes a way where there is no way
Jehovah has the final say`,
            },
        ],
    },
];

// ──────────────────────────────────────────────────────────────────────────────
/** Curated notes shown on the home page wall.
 *  (Live guest submissions are emailed to Rosette; these keep the wall warm.) */
export type WallNote = { name: string; text: string };

export const WALL_NOTES: WallNote[] = [
    { name: "Mum", text: "My favourite thing about you is your tender heart for God." },
    { name: "Grace", text: "You make everyone around you feel seen and loved." },
    { name: "Daniel", text: "Your faith has carried me on days I couldn't carry myself." },
    { name: "Aunty Joy", text: "Thirty years of watching God shine through you. 💛" },
    { name: "Tina", text: "The most genuine, prayerful friend a girl could ask for." },
];

export const MESSAGES_FORM = {
    intro: "As a Words of Affirmation girlie I'd be really blessed if you could entertain me and pour your heart out in the below sections. These will be used for future pick me ups & reminders of how I am ever so loved by you all 🥰",
    fields: {
        name: "Your name",
        favourite: "What is your favourite thing about Rosette?",
        funny: "Share a funny memory of me (if you have one!)",
        blessing: "Share an encouragement, prayer and/or birthday blessing for Rosette's 30th",
        anything: "Anything else?",
    },
};

export const NAV = [
    { href: "/", label: "Home", icon: "🏠" },
    { href: "/itinerary", label: "Schedule", icon: "📋" },
    { href: "/gallery", label: "Gallery", icon: "📸" },
    { href: "/lyrics", label: "Lyrics", icon: "🎵" },
    { href: "/messages", label: "Messages", icon: "💌" },
];
