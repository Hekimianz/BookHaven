import { v4 as uuidv4 } from "uuid";
const booksData = [
  {
    title: "Powerless",
    author: { first: "Lauren", last: "Roberts", full: "Lauren Roberts" },
    genres: [
      "Fantasy",
      "Romance",
      "Fantasy Romance",
      "Young Adult",
      "Fiction",
      "Dystiopia",
    ],
    pages: 523,
    rating: 4.35,
    ratings: 33098,
    published: "01/31/2023",
    price: 19.17,
    details:
      "She is the very thing he’s spent his whole life hunting. He is the very thing she’s spent her whole life pretending to be. Only the extraordinary belong in the kingdom of Ilya—the exceptional, the empowered, the Elites.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1672676191i/75513900.jpg",
  },
  {
    title: "To Kill a Mockingbird",
    author: { first: "Harper", last: "Lee", full: "Harper Lee" },
    genres: [
      "Classics",
      "Fiction",
      "Historical Fiction",
      "School",
      "Literature",
      "Young Adult",
    ],
    pages: 323,
    rating: 4.26,
    ratings: 5903852,
    published: "07/11/1960",
    price: 6.69,
    details:
      'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. "To Kill A Mockingbird" became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.',
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1553383690i/2657.jpg",
  },
  {
    title: "The Hunger Games",
    author: { first: "Suzanne", last: "Collins", full: "Suzanne Collins" },
    genres: [
      "Young Adult",
      "Fiction",
      "Fantasy",
      "Dystopia",
      "Science Fiction",
      "Romance",
    ],
    pages: 372,
    rating: 4.33,
    ratings: 8303267,
    published: "09/14/2008",
    price: 19.65,
    details:
      "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1586722975i/2767052.jpg",
  },
  {
    title: "The Help",
    author: { first: "Kathryn", last: "Stockett", full: "Kathryn Stockett" },
    genres: [
      "Fiction",
      "Historical Fiction",
      "Historical",
      "Adult",
      "Adult Fiction",
      "Contemporary",
    ],
    pages: 464,
    rating: 4.47,
    ratings: 2678874,
    published: "02/10/2009",
    price: 8.93,
    details:
      "Twenty-two-year-old Skeeter has just returned home after graduating from Ole Miss. She may have a degree, but it is 1962, Mississippi, and her mother will not be happy till Skeeter has a ring on her finger. Skeeter would normally find solace with her beloved maid Constantine, the woman who raised her, but Constantine has disappeared and no one will tell Skeeter where she has gone.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622355533i/4667024.jpg",
  },
  {
    title: "The Lovely Bones",
    author: { first: "Alice", last: "Sebold", full: "Alice Sebold" },
    genres: [
      "Fiction",
      "Mystery",
      "Young Adult",
      "Contemporary",
      "Fantasy",
      "Crime",
      "Thriller",
    ],
    pages: 372,
    rating: 3.85,
    ratings: 2310895,
    published: "07/03/2002",
    price: 14.02,
    details:
      "So begins the story of Susie Salmon, who is adjusting to her new home in heaven, a place that is not at all what she expected, even as she is watching life on earth continue without her -- her friends trading rumors about her disappearance, her killer trying to cover his tracks, her grief-stricken family unraveling. Out of unspeakable tragedy and loss, The Lovely Bones succeeds, miraculously, in building a tale filled with hope, humor, suspense, even joy.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1457810586i/12232938.jpg",
  },
  {
    title: "The Book Thief",
    author: { first: "Markus", last: "Zusak", full: "Markus Zusak" },
    genres: [
      "Historical Fiction",
      "Fiction",
      "Young Adult",
      "Historical",
      "Classics",
      "War",
      "World War II",
    ],
    pages: 592,
    rating: 4.39,
    ratings: 2465774,
    published: "03/01/2005",
    price: 10.99,
    details:
      "By her brother's graveside, Liesel's life is changed when she picks up a single object, partially hidden in the snow. It is The Gravedigger's Handbook, left behind there by accident, and it is her first act of book thievery. So begins a love affair with books and words, as Liesel, with the help of her accordian-playing foster father, learns to read. Soon she is stealing books from Nazi book-burnings, the mayor's wife's library, wherever there are books to be found.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1522157426i/19063.jpg",
  },
  {
    title: "Memoirs of a Geisha",
    author: { first: "Arthur", last: "Golden", full: "Arthur Golden" },
    genres: [
      "Fiction",
      "Historical Fiction",
      "Romance",
      "Classics",
      "Historical",
      "Japan",
      "Adult",
    ],
    pages: 503,
    rating: 4.15,
    ratings: 1968178,
    published: "01/01/1997",
    price: 26.01,
    details:
      'In "Memoirs of a Geisha," we enter a world where appearances are paramount; where a girl\'s virginity is auctioned to the highest bidder; where women are trained to beguile the most powerful men; and where love is scorned as illusion. It is a unique and triumphant work of fiction - at once romantic, erotic, suspenseful - and completely unforgettable.',
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1409595968i/929.jpg",
  },
  {
    title: "Pride and Prejudice",
    author: { first: "Jane", last: "Austen", full: "Jane Austen" },
    genres: [
      "Classics",
      "Fiction",
      "Romance",
      "Historical Fiction",
      "Literature",
      "Historical",
    ],
    pages: 279,
    rating: 4.28,
    ratings: 4115230,
    published: "01/28/1813",
    price: 4.17,
    details:
      'Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work "her own darling child" and its vivacious heroine, Elizabeth Bennet, "as delightful a creature as ever appeared in print." The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen\'s radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.',
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg",
  },
  {
    title: "The Time Traveler's Wife",
    author: {
      first: "Audrey",
      last: "Niffenegger",
      full: "Audrey Niffenegger",
    },
    genres: [
      "Fiction",
      "Romance",
      "Fantasy",
      "Time Travel",
      "Science Fiction",
      "Contemporary",
      "Adult",
    ],
    pages: 537,
    rating: 3.99,
    ratings: 1761351,
    published: "01/01/2003",
    price: 28.0,
    details:
      "This is the extraordinary love story of Clare and Henry, who met when Clare was six and Henry was thirty-six, and were married when Clare was twenty-two and Henry was thirty. Impossible but true, because Henry suffers from a rare condition where his genetic clock periodically resets and he finds himself pulled suddenly into his past or future. In the face of this force they can neither prevent nor control, Henry and Clare's struggle to lead normal lives is both intensely moving and entirely unforgettable.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1380660571i/18619684.jpg",
  },
  {
    title: "The Kite Runner",
    author: { first: "Khaled", last: "Hosseini", full: "Khaled Hosseini" },
    genres: [
      "Fiction",
      "Historical Fiction",
      "Classics",
      "Contemporary",
      "Novels",
      "Historical",
      "Literature",
    ],
    pages: 371,
    rating: 4.31,
    ratings: 3056043,
    published: "05/29/2003",
    price: 13.03,
    details:
      "970s Afghanistan: Twelve-year-old Amir is desperate to win the local kite-fighting tournament and his loyal friend Hassan promises to help him. But neither of the boys can foresee what would happen to Hassan that afternoon, an event that is to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return to an Afghanistan under Taliban rule to find the one thing that his new world cannot grant him: redemption.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1579036753i/77203.jpg",
  },
  {
    title: "1984",
    author: { first: "George", last: "Orwell", full: "George Orwell" },
    genres: [
      "Classics",
      "Fiction",
      "Science Fiction",
      "Dystopia",
      "Literature",
      "Politics",
      "Novels",
    ],
    pages: 298,
    rating: 4.19,
    ratings: 4411498,
    published: "06/08/1949",
    price: 9.79,
    details:
      "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality. The brilliance of the novel is Orwell's prescience of modern life—the ubiquity of television, the distortion of the language—and his ability to construct such a thorough version of hell. Required reading for students since it was published, it ranks among the most terrifying novels ever written.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1532714506i/40961427.jpg",
  },
  {
    title: "The Diary of a Young Girl",
    author: { first: "Anne", last: "Frank", full: "Anne Frank" },
    genres: [
      "Classics",
      "Nonfiction",
      "Biography",
      "Memoir",
      "Historical",
      "Holocaust",
      "Autobiography",
    ],
    pages: 283,
    rating: 4.19,
    ratings: 3610762,
    published: "01/01/1947",
    price: 14.89,
    details:
      "In 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding. For the next two years, until their whereabouts were betrayed to the Gestapo, the Franks and another family lived cloistered in the “Secret Annexe” of an old office building. Cut off from the outside world, they faced hunger, boredom, the constant cruelties of living in confined quarters, and the ever-present threat of discovery and death. In her diary Anne Frank recorded vivid impressions of her experiences during this period. By turns thoughtful, moving, and surprisingly humorous, her account offers a fascinating commentary on human courage and frailty and a compelling self-portrait of a sensitive and spirited young woman whose promise was tragically cut short.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855.jpg",
  },
  {
    title: "A Story of Yesterday",
    author: { first: "Sergio", last: "Cobo", full: "Sergio Cobo" },
    genres: [
      "Thriller",
      "Spanish Literature",
      "European Literature",
      "Mystery",
      "Fiction",
      "Magical Realism",
      "Drama",
    ],
    pages: 70,
    rating: 4.59,
    ratings: 12157,
    published: "03/06/2014",
    price: 13.99,
    details:
      "Under a sky of different colors germinates a magical story of survival, where the result of each choice, enclosed in this particular tale, will snatch the whereabouts of each story forever.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630609122i/58913358.jpg",
  },
  {
    title: "Little Women",
    author: {
      first: "Luisa",
      last: "Alcott",
      full: "Luisa M. Alcott",
    },
    genres: [
      "Classics",
      "Fiction",
      "Historical Fiction",
      "Young Adult",
      "Romance",
      "Historical",
      "Literature",
    ],
    pages: 449,
    rating: 4.15,
    ratings: 2160093,
    published: "01/01/1868",
    price: 8.97,
    details:
      'Generations of readers young and old, male and female, have fallen in love with the March sisters of Louisa May Alcott’s most popular and enduring novel, Little Women. Here are talented tomboy and author-to-be Jo, tragically frail Beth, beautiful Meg, and romantic, spoiled Amy, united in their devotion to each other and their struggles to survive in New England during the Civil War. It is no secret that Alcott based Little Women on her own early life. While her father, the freethinking reformer and abolitionist Bronson Alcott, hobnobbed with such eminent male authors as Emerson, Thoreau, and Hawthorne, Louisa supported herself and her sisters with "woman’s work,” including sewing, doing laundry, and acting as a domestic servant. But she soon discovered she could make more money writing. Little Women brought her lasting fame and fortune, and far from being the "girl’s book” her publisher requested, it explores such timeless themes as love and death, war and peace, the conflict between personal ambition and family responsibilities, and the clash of cultures between Europe and America.',
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1562690475i/1934.jpg",
  },
  {
    title: "Gone with the Wind",
    author: { first: "Margaret", last: "Mitchell", full: "Margaret Mitchell" },
    genres: [
      "Classics",
      "Historical Fiction",
      "Fiction",
      "Romance",
      "Historical",
      "Literature",
      "War",
    ],
    pages: 1037,
    rating: 4.31,
    ratings: 1195415,
    published: "06/30/1936",
    price: 39.98,
    details:
      "Scarlett O'Hara, the beautiful, spoiled daughter of a well-to-do Georgia plantation owner, must use every means at her disposal to claw her way out of the poverty she finds herself in after Sherman's March to the Sea.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1551144577i/18405.jpg",
  },
  {
    title: "Water for Elephants",
    author: { first: "Sara", last: "Gruen", full: "Sara Gruen" },
    genres: [
      "Fiction",
      "Historical Fiction",
      "Romance",
      "Historical",
      "Adult",
      "Adult Fiction",
      "Contemporary",
    ],
    pages: 368,
    rating: 4.11,
    ratings: 1586702,
    published: "03/22/2006",
    price: 23.93,
    details:
      "When Jacob Jankowski, recently orphaned and suddenly adrift, jumps onto a passing train, he enters a world of freaks, drifters, and misfits, a second-rate circus struggling to survive during the Great Depression, making one-night stands in town after endless town. A veterinary student who almost earned his degree, Jacob is put in charge of caring for the circus menagerie. It is there that he meets Marlena, the beautiful young star of the equestrian act, who is married to August, the charismatic but twisted animal trainer. He also meets Rosie, an elephant who seems untrainable until he discovers a way to reach her.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1667708346i/43641.jpg",
  },
  {
    title: "The Eden Paradox (The Eden Paradox vol. 1)",
    author: { first: "Barry", last: "Kirwan", full: "Barry Kirwan" },
    genres: [
      "Science Fiction",
      "Fiction",
      "Space Opera",
      "Dystopia",
      "Space",
      "Contemporary",
      "Drama",
    ],
    pages: 392,
    rating: 4.23,
    ratings: 11707,
    published: "02/16/2011",
    price: 8.99,
    details:
      "In 2063, Earth's overheated climate and war-ravaged cities are near breaking point. A new habitable planet is discovered within reach, but the first two missions have failed to return. This is the story of the third mission to Eden. What really awaits the crew of four as they make the long journey to this supposed uninhabited virgin planet, and what is the link to the secret 900 year old sect known as Alicians back on Earth? While Blake leads the Eden mission, a young researcher named Micah discovers a terrible truth that threatens the very existence of humanity.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1548629676i/43722869.jpg",
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: { first: "Stieg", last: "Larsson", full: "Stieg Larsson" },
    genres: [
      "Fiction",
      "Mystery",
      "Thriller",
      "Crime",
      "Mystery Thriller",
      "Suspense",
      "Contemporary",
    ],
    pages: 480,
    rating: 4.16,
    ratings: 3108733,
    published: "08/01/2005",
    price: 10.61,
    details:
      "Harriet Vanger, a scion of one of Sweden’s wealthiest families disappeared over forty years ago. All these years later, her aged uncle continues to seek the truth. He hires Mikael Blomkvist, a crusading journalist recently trapped by a libel conviction, to investigate. He is aided by the pierced and tattooed punk prodigy Lisbeth Salander. Together they tap into a vein of unfathomable iniquity and astonishing corruption.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684638853i/2429135.jpg",
  },
  {
    title: "Jane Eyre",
    author: { first: "Jane", last: "Eyre", full: "Jane Eyre" },
    genres: [
      "Fiction",
      "Romance",
      "Historical Fiction",
      "Gothic",
      "Literature",
      "Historical",
      "School",
    ],
    pages: 532,
    rating: 4.15,
    ratings: 2043114,
    published: "10/16/1847",
    price: 4.17,
    details:
      "Charlotte Brontë tells the story of orphaned Jane Eyre, who grows up in the home of her heartless aunt, enduring loneliness and cruelty. This troubled childhood strengthens Jane's natural independence and spirit - which prove necessary when she finds employment as a governess to the young ward of Byronic, brooding Mr Rochester. As her feelings for Rochester develop, Jane gradually uncovers Thornfield Hall's terrible secret, forcing her to make a choice. Should she stay with Rochester and live with the consequences, or follow her convictions - even if it means leaving the man she loves? A novel of intense power and intrigue, Jane Eyre dazzled readers with its passionate depiction of a woman's search for equality and freedom.",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1557343311i/10210.jpg",
  },
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: { first: "J.K.", last: "Rowling", full: "J.K. Rowling" },
    genres: [
      "Fiction",
      "Young Adult",
      "Magic",
      "Childrens",
      "Middle Grade",
      "Classics",
    ],
    pages: 223,
    rating: 4.47,
    ratings: 9663735,
    published: "06/26/1997",
    price: 13.89,
    details:
      "Harry Potter thinks he is an ordinary boy - until he is rescued by an owl, taken to Hogwarts School of Witchcraft and Wizardry, learns to play Quidditch and does battle in a deadly duel. The Reason ... HARRY POTTER IS A WIZARD!",
    image:
      "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1170803558l/72193.jpg",
  },
];

booksData.forEach((book) => {
  book.id = uuidv4();
});

export default booksData;
