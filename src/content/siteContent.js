import logoImg from '../images/logo.png';
import leadersImg from '../images/leaders.png';
import groupImg from '../images/group-picture.png';
import cookoutImg from '../images/group-cookout-pic.png';

/**
 * ============================================================================
 * TRAILBLAZERS MINISTRIES — CENTRAL SITE CONTENT CONFIGURATION
 * ============================================================================
 * Update any copy, headings, scripture references, service times, or images
 * directly in this file. The website will automatically reflect your changes.
 */

export const siteContent = {
  // --------------------------------------------------------------------------
  // 1. BRAND & IDENTITY
  // --------------------------------------------------------------------------
  ministry: {
    name: 'Trailblazers Ministries',
    shortName: 'Trailblazers',
    motto: '“Go instead where there is no path, and leave a trail.”',
    tagline: 'A Body of Believers Walking Upright in Christ',
    establishedNote: 'Non-Profit Christian Ministry',
    logo: logoImg,
    logoAlt: 'Trailblazers Ministries Logo — Go instead where there is no path, and leave a trail.',
  },

  // --------------------------------------------------------------------------
  // 2. NAVIGATION LINKS
  // --------------------------------------------------------------------------
  navigation: [
    { label: 'Our Purpose', href: '#purpose' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Statement of Faith', href: '#faith' },
    { label: 'Community', href: '#community' },
    { label: 'Connect', href: '#connect' },
  ],

  // --------------------------------------------------------------------------
  // 3. HERO SECTION
  // --------------------------------------------------------------------------
  hero: {
    badge: 'Welcome to Trailblazers Ministries',
    headline: 'Go Where There Is No Path, and Leave a Trail.',
    subheadline:
      'Reaching the lost, restoring the backslider, and equipping the believer in the foundational principles of Jesus Christ.',
    primaryCta: {
      label: 'Our Vision & Mission',
      href: '#purpose',
    },
    secondaryCta: {
      label: 'What We Believe',
      href: '#faith',
    },
    heroImage: groupImg,
    heroImageAlt: 'Trailblazers Ministries congregation gathered together outdoors in fellowship',
    heroCaption: 'Walking uprightly, growing consistently in Christ, and building leaders of tomorrow.',
    keyVerse: {
      text: '“Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost.”',
      reference: 'Acts 2:38',
    },
  },

  // --------------------------------------------------------------------------
  // 4. VISION & MISSION SECTION (from ideation/vision-and-mission.md)
  // --------------------------------------------------------------------------
  purpose: {
    sectionEyebrow: 'Our Calling & Purpose',
    sectionTitle: 'Guided by Vision, Driven by Mission',
    sectionIntro:
      'We are committed to being a living example of the Word of God—turning hearts back to Christ and laying spiritual foundations in untouched places.',

    vision: {
      label: 'Our Vision',
      title: 'Reaching, Restoring & Equipping in Christ',
      statement:
        'To reach the lost, restore the backslider, and to equip the believer in the basic principles of Jesus Christ. Turn the heart of fathers, mothers, youth, and children to Christ. Experience the manifestation of the promises according to scriptures.',
      pillars: [
        {
          title: 'Reach the Lost',
          description: 'Sharing the saving gospel of Jesus Christ with compassion, truth, and urgency.',
        },
        {
          title: 'Restore the Backslider',
          description: 'Welcoming prodigals home with grace, spiritual renewal, and steadfast love.',
        },
        {
          title: 'Equip the Believer',
          description: 'Grounding every saint in the foundational principles of the Word of God.',
        },
        {
          title: 'Unite Generations',
          description: 'Turning the hearts of fathers, mothers, youth, and children together toward Christ.',
        },
      ],
    },

    mission: {
      label: 'Mission Statement',
      title: 'Blazing a Trail of Faith & Leadership',
      statement:
        'A body of believers that walks uprightly, consistently growing in Christ, being a living example of the Word of God—laying foundation in the untouched areas of the world, developing church leaders of tomorrow by teaching basic principles of salvation as we go where there is no path and leave a trail.',
      highlights: [
        'Walking uprightly & consistently growing in Christ',
        'Living as an authentic example of the Word of God',
        'Laying foundations in untouched areas of the world',
        'Developing the church leaders of tomorrow',
      ],
    },
  },

  // --------------------------------------------------------------------------
  // 5. LEADERSHIP SECTION
  // --------------------------------------------------------------------------
  leadership: {
    sectionEyebrow: 'Pastoral Leadership',
    sectionTitle: 'Servant Leaders Dedicated to the Word',
    description:
      'Our ministry is shepherded with humility, apostolic conviction, and a deep love for God’s people. Together, our leaders labor to teach the pure principles of salvation, nurture families, and raise up the next generation of faithful believers.',
    quote:
      '“Our prayer is that every soul who walks through our doors experiences the transforming love of Jesus Christ and the living manifestation of God’s promises.”',
    image: leadersImg,
    imageAlt: 'Pastoral Leaders of Trailblazers Ministries',
    leadersTitle: 'Pastoral Leadership',
    leadersSubtitle: 'Trailblazers Ministries',
    values: [
      {
        title: 'Biblical Integrity',
        text: 'Holding fast to the inspired Word of God as our sole authority for faith and life.',
      },
      {
        title: 'Spirit-Led Ministry',
        text: 'Relying on the power and guidance of the Holy Ghost in worship, teaching, and outreach.',
      },
      {
        title: 'Family & Community',
        text: 'Strengthening marriages, parents, youth, and children to walk together in unity.',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 6. STATEMENT OF FAITH (from ideation/statement-of-faith.md)
  // --------------------------------------------------------------------------
  statementOfFaith: {
    sectionEyebrow: 'Article 2 • Doctrinal Foundation',
    sectionTitle: 'Statement of Faith',
    preamble:
      'The fundamental teachings of this congregation are reflected in the following statements of faith. Our purpose in stating these basic beliefs is to establish a doctrinal foundation for those choosing to affiliate with us.',
    categories: [
      { id: 'all', label: 'All Tenets' },
      { id: 'godhead', label: 'The Word & Godhead' },
      { id: 'salvation', label: 'Salvation & Spirit' },
      { id: 'christian-life', label: 'Christian Living & Healing' },
      { id: 'eschatology', label: 'Last Things' },
    ],
    articles: [
      {
        id: 'the-bible',
        number: '01',
        title: 'The Bible',
        category: 'godhead',
        keyScriptures: ['2 Timothy 3:16', '2 Peter 1:20-21'],
        summary: 'The inspired Word of God and the sole foundation for salvation and truth.',
        paragraphs: [
          'The Bible is the inspired Word of God, giving a true history of the creation of heaven, earth, and humanity and containing a correct prophecy of the ages to come regarding heaven, earth, and the destiny of humanity. Moreover, there is no salvation outside of what is taught in its pages.',
        ],
      },
      {
        id: 'god',
        number: '02',
        title: 'God',
        category: 'godhead',
        keyScriptures: ['Deuteronomy 6:4'],
        summary: 'One indivisible Creator revealed as Father, in the Son, and as the Holy Ghost.',
        paragraphs: [
          'There is only one God (Deuteronomy 6:4). He is the creator of heaven and earth, and of all living beings. He has revealed Himself to humanity as the Father (Creator), in the Son (Savior), and as the Holy Ghost (indwelling Spirit).',
        ],
      },
      {
        id: 'father-and-son',
        number: '03',
        title: 'Father & Lord Jesus Christ',
        category: 'godhead',
        keyScriptures: [
          'John 4:24',
          'Isaiah 44:6',
          'Isaiah 43:10-11',
          'Romans 1:3',
          'Matthew 1:23',
          'Colossians 1:16-17',
          '1 Timothy 3:16',
          'John 14:7-11',
          'John 10:30',
          'Hebrews 9:22',
          'Luke 2:11',
        ],
        summary: 'The Eternal Spirit manifested in the flesh as Jesus Christ our Savior.',
        paragraphs: [
          'God is a Spirit (John 4:24). He is the Eternal One, the Creator of all things, and the Father of all humanity by creation. He is the First and the Last, and beside Him there is no God (Isaiah 44:6). There was no God formed before Him; neither shall there be any after Him (Isaiah 43:10).',
          'Jesus is the Son of God according to the flesh (Romans 1:3) and the very God Himself according to the Spirit (Matthew 1:23). Jesus is the Christ (Matthew 16:16); the creator of all things (Colossians 1:16-17); God with us (Matthew 1:23); God made flesh (John 1:1-14); God manifested in the flesh (I Timothy 3:16); He which was, which is, and which is to come, the Almighty (Revelation 1:8); the mighty God, everlasting Father, and Prince of peace (Isaiah 9:6).',
          'Jesus Himself testified of His identity as God when He said, “He that hath seen me hath seen the Father” (John 14:7-11) and “I and my Father are one” (John 10:30).',
          'It took shedding of blood for the remission of the sins of the world (Hebrews 9:22), but God the Father was a Spirit and had no blood to shed. Thus He prepared a body of flesh and blood (Hebrews 10:5) and came to earth as a man in order to save us, for in Isaiah 43:11 He said, “Beside me there is no Saviour.” When He came in flesh the angels sang, “For unto you is born this day in the city of David a Savior, which is Christ the Lord” (Luke 2:11).',
        ],
      },
      {
        id: 'holy-ghost',
        number: '04',
        title: 'The Holy Ghost',
        category: 'godhead',
        keyScriptures: ['John 14:16-26', 'Romans 8:9-11'],
        summary: 'The Spirit of the resurrected Christ dwelling in the hearts of believers.',
        paragraphs: [
          'The Holy Ghost is not a third person in the Godhead, but rather the Spirit of God (the Creator), the Spirit of the resurrected Christ. The Holy Ghost comes to dwell in the hearts and lives of everyone who believes and obeys the gospel, as the Comforter, Sustainer, and Keeper (John 14:16-26; Romans 8:9-11).',
        ],
      },
      {
        id: 'sin',
        number: '05',
        title: 'Sin',
        category: 'salvation',
        keyScriptures: ['1 John 3:4', 'Romans 3:23', 'Romans 6:23', 'Revelation 20:14'],
        summary: 'The transgression of God’s law and the universal human need for redemption.',
        paragraphs: [
          'Sin is the transgression of the law, or commandments of God (I John 3:4). The guilt of sin has fallen upon all humanity from Adam until now (Romans 3:23). The wages of sin is eternal death (Romans 6:23; Revelation 20:14) to all those who refuse to accept salvation as set forth in the Word of God.',
        ],
      },
      {
        id: 'salvation',
        number: '06',
        title: 'Salvation',
        category: 'salvation',
        keyScriptures: ['Acts 2:36-41'],
        summary: 'Deliverance through repentance, water baptism in Jesus’ name, and the Holy Ghost.',
        paragraphs: [
          'Salvation consists of deliverance from all sin and unrighteousness through the blood of Jesus Christ. The New Testament experience of salvation consists of repentance from sin, water baptism in the name of the Lord Jesus Christ for the remission of sins, and the baptism of the Holy Ghost, after which the Christian is to live a godly life (Acts 2:36-41).',
        ],
      },
      {
        id: 'water-baptism',
        number: '07',
        title: 'Water Baptism',
        category: 'salvation',
        keyScriptures: ['Acts 2:38', 'Romans 6:1-7', 'Colossians 2:12', 'Mark 1:10', 'Acts 8:38-39'],
        summary: 'Administered by immersion in the name of the Lord Jesus Christ for remission of sins.',
        paragraphs: [
          'Water baptism is to be administered only by immersion. Paul said, “We are buried with him [Jesus Christ] by baptism” (Romans 6:4; see Colossians 2:12), Jesus came up “out of the water” (Mark 1:10), and Philip and the eunuch went down “into the water” and came up “out of the water” (Acts 8:38-39).',
          'Jesus’ death, burial, and resurrection are applied to our lives when we experience New Testament salvation: “Repent [death to sin], and be baptized [burial] every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost [resurrection].” (See Acts 2:38; Romans 6:1-7; 8:2).',
          'Sprinkling, pouring, or infant baptism of any kind cannot be substantiated by the Word of God, but are only human traditions.',
        ],
      },
      {
        id: 'baptism-of-the-holy-ghost',
        number: '08',
        title: 'Baptism of the Holy Ghost',
        category: 'salvation',
        keyScriptures: ['John 3:5', 'Joel 2:28-29', 'Matthew 3:11', 'Acts 2:1-4', 'Acts 2:39', 'Acts 10:44-46'],
        summary: 'The birth of the Spirit promised to all believers, evidenced by speaking in other tongues.',
        paragraphs: [
          'The baptism of the Holy Ghost is the birth of the Spirit (John 3:5). This spiritual baptism is necessary to put someone into the kingdom of God (God’s church, the bride of Christ) and is evidenced by speaking in other tongues (other languages) as the Spirit of God gives utterance.',
          'It was prophesied by Joel (Joel 2:28-29) and Isaiah (Isaiah 28:11), foretold by John the Baptist (Matthew 3:11), purchased by the blood of Jesus, and promised by Him to His disciples (John 14:26; 15:16). The Holy Ghost was first poured out on the Day of Pentecost upon the Jews (Acts 2:1-4), then upon the Samaritans (Acts 8:17), and later upon the Gentiles (Acts 10:44-46; 19:6). “The promise is unto you, and to your children, and to all that are afar off, even as many as the Lord our God shall call” (Acts 2:39).',
        ],
      },
      {
        id: 'tongues',
        number: '09',
        title: 'Speaking in Other Tongues',
        category: 'salvation',
        keyScriptures: ['Acts 2:4', 'Isaiah 28:11-12', 'Mark 16:17', '1 Corinthians 12:1-12', '1 Corinthians 14:1-40'],
        summary: 'The supernatural initial witness of the Spirit and the gift for edification of the church.',
        paragraphs: [
          'Speaking in other tongues as the Spirit of God gives utterance is the manifestation God has given as the definite, indisputable, supernatural witness or sign of the baptism of the Holy Ghost (Acts 2:4; 10:46; 19:6).',
          'It was prophesied by the prophet Isaiah as the rest and the refreshing (Isaiah 28:11-12), foretold by Jesus as a sign that would follow believers of the gospel (Mark 16:17), and experienced by Jews and Gentiles alike.',
          'The gift of “divers kinds of tongues,” mentioned by Paul in I Corinthians 12:1-12 and concerning which he gave regulations in I Corinthians 14:1-40, is given both for self-edification (I Corinthians 14:4) and for the edification of the church (I Corinthians 14:27-28).',
          'In church meetings the gift of tongues is used to give a public message, and it is to be interpreted. Since this gift can be misused in public, it needs proper regulation (I Corinthians 14:23-28). Not all believers exercise the gift of tongues, which is different in function from tongues given by God as the initial witness of the baptism of the Holy Ghost.',
          'Paul said, “Forbid not to speak with tongues” (I Corinthians 14:39) and “I thank my God, I speak with tongues more than ye all” (I Corinthians 14:8). Who dares to teach or preach to the contrary?',
          'Speaking in tongues means speaking miraculously in a language unknown to the speaker, as the Spirit gives utterance. Tongues can be classified in two ways, according to function: (1) speaking in other tongues as the initial evidence of the baptism of the Holy Ghost and (2) the gift of tongues as mentioned in I Corinthians.',
        ],
      },
      {
        id: 'holiness',
        number: '10',
        title: 'Holiness',
        category: 'christian-life',
        keyScriptures: ['John 8:11', 'Titus 2:12', 'Hebrews 12:14', 'Romans 12:1', '2 Corinthians 7:1', 'Acts 1:8'],
        summary: 'Living soberly, righteously, and godly in this present world through the power of the Spirit.',
        paragraphs: [
          'After we are saved from sin, we are commanded, “Go, and sin no more” (John 8:11). We are commanded to live soberly, righteously, and godly in this present world (Titus 2:12) and warned that without holiness no one shall see the Lord (Hebrews 12:14).',
          'We must present ourselves as holy unto God (Romans 12:1), cleanse ourselves from all filthiness of the flesh and spirit (II Corinthians 7:1), and separate ourselves from all worldliness (James 4:4). If the righteous scarcely be saved, where shall the ungodly and the sinner appear? (I Peter 4:18).',
          'No one can live a holy life by his own power, but only through the Holy Spirit. “Ye shall receive power, after that the Holy Ghost is come upon you” (Acts 1:8).',
        ],
      },
      {
        id: 'divine-healing',
        number: '11',
        title: 'Divine Healing',
        category: 'christian-life',
        keyScriptures: ['Isaiah 53:5', 'Matthew 8:16-17', '1 Peter 2:24', 'Mark 16:18', 'James 5:14-16'],
        summary: 'Miraculous provision purchased by the blood and stripes of Jesus Christ for all who believe.',
        paragraphs: [
          'God has made Himself known through the ages by miraculous healings and has made special provisions in the age of grace to heal all who will come to Him in faith and obedience. Divine healing was purchased for us by the blood of Jesus Christ, especially by His stripes (Isaiah 53:5; Matthew 8:16-17; I Peter 2:24).',
          'Jesus went everywhere healing those who were sick (Matthew 4:23-24), and He commanded His disciples to do the same (Matthew 10:8). He said concerning those who believe the gospel, “They shall lay hands on the sick, and they shall recover” (Mark 16:18). Mighty healings and miracles followed the disciples wherever the gospel was preached.',
          'There is no sickness or disease too hard for God. Any of us, our children, or our friends can be healed by the power of God.',
          '“Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord: And the prayer of faith shall save the sick, and the Lord shall raise him up; and if he have committed sins, they shall be forgiven him. Confess your faults one to another, and pray one for another, that ye may be healed” (James 5:14-16).',
        ],
      },
      {
        id: 'second-coming',
        number: '12',
        title: 'Second Coming of Christ',
        category: 'eschatology',
        keyScriptures: ['Acts 1:11', '1 Thessalonians 4:16-17', 'Luke 17:36', '2 Timothy 3:1-13', 'Matthew 24:6', 'Amos 4:12'],
        summary: 'The bodily return of Jesus Christ to catch away His faithful, holy bride.',
        paragraphs: [
          'Jesus Christ is coming back to earth in bodily form, just as He went away (Acts 1:11). He will catch away a holy people (His bride, His church) who have accepted redemption through His blood, by birth of water and of the Spirit, and who are found faithful when He comes.',
          '“For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord” (I Thessalonians 4:16-17). “One shall be taken and the other left” (Luke 17:36). Will we be ready?',
          'The signs of His coming are everywhere. The days of peril are here indeed, with forms of godliness void of the power of God; society and politics corrupted; and people’s hearts filled with pride, blasphemies, unholiness, love of evil, and love of pleasures (II Timothy 3:1-13). These things, together with multitudes running to and fro, the increase of knowledge (Daniel 12:4), the persecution of the Jews and their return to Palestine (Luke 21:24), and scores of other things are startling signs that Jesus’ coming is drawing near.',
          'Wars, rumors of wars, famines, earthquakes, storms, floods, distress of nations, perplexity, and people’s hearts failing them for fear are sounding the solemn alarm that Jesus’ coming is at hand (Matthew 24:6; Luke 21:25-28). “Prepare to meet thy God” (Amos 4:12).',
        ],
      },
      {
        id: 'resurrection',
        number: '13',
        title: 'Resurrection',
        category: 'eschatology',
        keyScriptures: ['John 5:28-29', 'Revelation 20:12-13', 'Daniel 12:2', '1 Corinthians 15:13-23'],
        summary: 'The resurrection of all the dead, both the just and the unjust.',
        paragraphs: [
          'There will be a resurrection of all the dead, both just and unjust.',
          '“Marvel not at this: for the hour is coming, in the which all that are in the graves shall hear his voice, And shall come forth; they that have done good, unto the resurrection of life; and they that have done evil, unto the resurrection of damnation” (John 5:28-29).',
          '“And I saw the dead, small and great, stand before God . . . and the sea gave up the dead which were in it; and death and hell delivered up the dead which were in them” (Revelation 20:12-13). (See also Daniel 12:2; I Corinthians 15:13-23.)',
        ],
      },
      {
        id: 'judgment',
        number: '14',
        title: 'Eternal Judgment',
        category: 'eschatology',
        keyScriptures: ['Hebrews 9:27', '2 Corinthians 5:10', 'Matthew 25:32-34, 41, 46'],
        summary: 'Every soul appearing before the judgment seat of a righteous and just God.',
        paragraphs: [
          '“It is appointed unto men once to die, but after this the judgment” (Hebrews 9:27). For this reason there will be a resurrection for everyone. “For we must all appear before the judgment seat of Christ; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad” (II Corinthians 5:10).',
          'The eternal destiny of every soul shall be determined by a just God who knows the secrets of everyone’s heart. “And before him shall be gathered all nations: and he shall separate them one from another, as a shepherd divideth his sheep from the goats: And he shall set the sheep on his right hand, but the goats on the left. Then shall the King say unto them on his right hand, Come, ye blessed of my Father, inherit the kingdom prepared for you from the foundation of the world. . . . Then shall he say also unto them on the left hand, Depart from me, ye cursed, into everlasting fire, prepared for the devil and his angels. . . . And these shall go away into everlasting punishment: but the righteous into life eternal” (Matthew 25:32-34, 41, 46).',
        ],
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 7. COMMUNITY & FELLOWSHIP GALLERY
  // --------------------------------------------------------------------------
  community: {
    sectionEyebrow: 'Life Together in Christ',
    sectionTitle: 'A Family Knit Together in Love',
    description:
      'At Trailblazers Ministries, we believe the church is more than a building—it is a vibrant family of believers walking together, encouraging one another, and sharing the joy of the Lord across every generation.',
    photos: [
      {
        image: groupImg,
        alt: 'Trailblazers Ministries congregation gathered in matching shirts at the park',
        tag: 'Congregation & Fellowship',
        title: 'United Across Every Generation',
        caption:
          'Fathers, mothers, youth, and children standing together as a living example of God’s Word.',
        objectPosition: 'center center',
      },
      {
        image: cookoutImg,
        alt: 'Trailblazers Ministries family cookout and outdoor fellowship in pink ministry shirts',
        tag: 'Community Outreach & Joy',
        title: 'Fellowship in the Park',
        caption:
          'Building lasting bonds of love, hospitality, and community through outreach and shared fellowship.',
        // Crop focus on the people in the lower half of the vertical photo
        objectPosition: 'center 68%',
      },
      {
        image: leadersImg,
        alt: 'Pastoral leadership smiling together',
        tag: 'Pastoral Care',
        title: 'Shepherding with Love & Truth',
        caption:
          'Equipping believers and developing the church leaders of tomorrow through sound biblical teaching.',
        objectPosition: 'center top',
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 8. CONNECT / GATHERINGS / FOOTER
  // --------------------------------------------------------------------------
  connect: {
    sectionEyebrow: 'Walk With Us',
    sectionTitle: 'Join Us on the Trail of Faith',
    description:
      'Whether you are searching for truth, seeking spiritual restoration, or looking for a Bible-believing church family to grow with, there is a place for you at Trailblazers Ministries.',
    cards: [
      {
        title: 'Worship & Teaching',
        subtitle: 'Spirit-Filled Gatherings',
        detail: 'Experience heartfelt worship, prayer, and foundational teaching from the Word of God.',
        badge: 'All Are Welcome',
      },
      {
        title: 'Prayer & Restoration',
        subtitle: 'Need Prayer or Bible Study?',
        detail: 'We believe in the power of prayer, divine healing, and personal discipleship in Jesus Christ.',
        badge: 'James 5:14-16',
      },
      {
        title: 'Community & Youth',
        subtitle: 'For the Whole Family',
        detail: 'Equipping fathers, mothers, youth, and children to walk uprightly and lead with faith.',
        badge: 'Every Generation',
      },
    ],
    contactEmail: 'info@trailblazersministries.com',
    locationNote: 'Serving our local community and laying foundations where there is no path.',
  },
};
