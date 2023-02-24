import productImg01 from "../images/law-01.jpg";
import productImg02 from "../images/law-02.jpg";
import productImg03 from "../images/law-03.jpg";
import productImg04 from "../images/law-04.jpg";

import productImg05 from "../images/horror-01.jpg";
import productImg06 from "../images/horror-02.jpg";
import productImg07 from "../images/horror-03.jpg";
import productImg08 from "../images/horror-04.jpg";

import productImg09 from "../images/manga-01.jpg";
import productImg10 from "../images/manga-02.jpg";
import productImg11 from "../images/manga-03.jpg";
import productImg12 from "../images/manga-04.jpg";

import productImg13 from "../images/romance-01.jpg";
import productImg14 from "../images/romance-02.jpg";
import productImg15 from "../images/romance-03.jpg";
import productImg16 from "../images/romance-04.jpg";



const products = [
  {
    id: "01",
    productName: "Vanished in Vermillion: The Real Story of South Dakota's Most Infamous Cold Case",
    author:"Lou Raguse",
    imgUrl: productImg01,
    category: "law",
    price: 34.00,
    shortDesc:
      "Lou's terrific storytelling and investigative skills give the reader a front-row seat as he unravels this bizarre case, chock-full of twists and turns.Caroline Lowe, veteran crime journalist and member of the FindJodi team",
    description:
      "In May 1971, Pam Jackson and Sherri Miller were two seventeen-year-olds driving to an end-of-the-school-year party in a rundown Studebaker Lark when they seemingly disappeared off the face of the earth. Police back then didn't do enough to try and find them. Investigators thirty years later did too much. Two families endure decades of pain as they await answers of what happened to their girls. When a third family is pulled into the mystery, they quickly learn their nightmare is just beginning.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Dinners with Ruth: A Memoir on the Power of Friendships",
    author:"Nina Totenberg",
    imgUrl: productImg02,
    category: "law",
    price: 21.00,
    shortDesc:
      "Celebrated NPR correspondent Nina Totenberg delivers an extraordinary memoir of her personal successes, struggles, and life-affirming relationships, including her beautiful friendship of nearly fifty years with Supreme Court Justice Ruth Bader Ginsburg.",
    description:
      "Four years before Nina Totenberg was hired at NPR, where she cemented her legacy as a prizewinning reporter, and nearly twenty-two years before Ruth Bader Ginsburg was appointed to the Supreme Court, Nina called Ruth. A reporter for The National Observer, Nina was curious about Ruth’s legal brief, asking the Supreme Court to do something revolutionary: declare a law that discriminated “on the basis of sex” to be unconstitutional. In a time when women were fired for becoming pregnant, often could not apply for credit cards, or get a mortgage in their own names, Ruth patiently explained her argument. That call launched a remarkable, nearly fifty-year friendship.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "03",
    productName: "Think and Grow Rich",
    author:" Napoleon Hill, Steve Harvey (Foreword by)",
    imgUrl: productImg03,
    category: "law",
    price: 19.00,
    shortDesc:
      "The single greatest guide to achieving success ever written, featuring a new foreword by television star and entrepreneur Steve Harvey!",
    description:
      "Think and Grow Rich, first published in 1937, took more than twenty years of research to compile. Napoleon Hill was a journalist and writer who later served as an advisor to President Franklin D. Roosevelt from 1933 to 1936. His big break came with his interview of Andrew Carnegie in 1908. Intrigued by Carnegie’s assertion that the path to success could be broken down into a simple yet comprehensive formula, Hill accepted Carnegie’s challenge to study and interview more than five hundred extremely successful individuals to determine to what they owed their vast achievements.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "04",
    productName: "Just Mercy: A Story of Justice and Redemption",
    author:"Bryan Stevenson",
    imgUrl: productImg04,
    category: "law",
    price: 23.90,
    shortDesc:
      "Just Mercy is at once an unforgettable account of an idealistic, gifted young lawyer’s coming of age, a moving window into the lives of those he has defended, and an inspiring argument for compassion in the pursuit of true justice.",
    description:
      "A compelling read that tackles social justice and the ethics of the death penalty, Just Mercy shines a light on the corruptness of the justice system. Bryan Stevenson, dedicated to helping people most in need, founded the Equal Justice Initiative to help those most likely to experience injustice in the court system. A poignant writer, Stevenson takes on the broken criminal justice system, using his own experience as a lawyer to emphasize the change that is desperately needed.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },

  {
    id: "05",
    productName: "Malice House",
    author:"Megan Shepherd",
    imgUrl: productImg05,
    category: "horror",
    price: 24.99,
    shortDesc:
      "Knock, Knock, don’t be afraid to open the door for this haunted house horror. A spooky season read with horror books at its core, paired with an artist daughter cleaning out her author father’s home, a cast of characters out to get her, and monsters hiding in the woods — yes, you read that right, monsters. So, when you're looking to add a fast-paced, gripping horror to your TBR, look no further.",
    description:
      "Of all the things aspiring artist Haven Marbury expected to find while clearing out her late father’s remote seaside house, Bedtime Stories for Monsters was not on the list. This secret handwritten manuscript is disturbingly different from his Pulitzer-winning works: its interweaving short stories crawl with horrific monsters and enigmatic humans that exist somewhere between this world and the next. The stories unsettle but also entice Haven, practically compelling her to illustrate them while she stays in the house that her father warned her was haunted. Clearly just dementia whispering in his ear . . . right?",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "06",
    productName: "The Pallbearers Club: A Novel",
    author:"Paul Tremblay",
    imgUrl: productImg06,
    category: "horror",
    price: 22.99,
    shortDesc:
      "The most intense, strange and curious meet-cute you’ll read this year. How could it NOT be? Paul Tremblay combines suspense, horror and vampirism like no other. How do we view our past? Is it through rose-colored glasses or revisionist history? As in a nightmare, the past is real/not real, and no amount of head shaking can make it clear. The fog of memoir is scary territory.",
    description:
      "Art Barbara was so not cool. He was a seventeen-year-old high school loner in the late 1980s who listened to hair metal, had to wear a monstrous back-brace at night for his scoliosis, and started an extracurricular club for volunteer pallbearers at poorly attended funerals. But his new friend thought the Pallbearers Club was cool. And she brought along her Polaroid camera to take pictures of the corpses.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "07",
    productName: "Sign Here",
    author:"Claudia Lux",
    imgUrl: productImg07,
    category: "horror",
    price: 23.99,
    shortDesc:
      "A darkly humorous, surprisingly poignant, and utterly gripping debut novel about a guy who works in Hell (literally) and is on the cusp of a big promotion if only he can get one more member of the wealthy Harrison family to sell their soul.",
    description:
      "What do you do when your job really is Hell? Claudia Lux’s novel takes readers into the afterlife where Hell is a corporation, and its inhabitants are the employees. This book has wickedly funny characters and an imaginative plot that is perfect for a year-round spooky season. Part thriller, part horror, part comedic romp through the underworld, Sign Here is the perfect book for those who appreciate the truly scary parts of “Succession.”",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "08",
    productName: "Things Have Gotten Worse Since We Last Spoke And Other Misfortunes",
    author:"Eric LaRocca",
    imgUrl: productImg08,
    category: "horror",
    price: 27.99,
    shortDesc:
      "Three dark and disturbing horror stories from an astonishing new voice, including the viral-sensation tale of obsession, Things Have Gotten Worse Since We Last Spoke. For fans of Kathe Koja, Clive Barker and Stephen Graham Jones. Winner of the Splatterpunk Award for Best Novella.",
    description:
      "We suspect you might have already read Things Have Gotten Worse Since We Last Spoke And Other Misfortunes by Eric LaRocca. However, we ALSO suspect you’d like to come back for more as this new hardcover edition is going to make the perfect addition to your horror library. And, even better, two added stories here are assured to raise the hairs on the back of your neck to a whole other level.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },

  {
    id: "09",
    productName: "Chainsaw Man, Vol. 11",
    author:"Tatsuki Fujimoto",
    imgUrl: productImg09,
    category: "manga",
    price: 11.93,
    shortDesc:
      "TDenji was a small-time devil hunter just trying to survive a harsh world. After being killed on a job, Denji is revived by his pet devil-dog Pochita and becomes something new and dangerous — Chainsaw Man! If you're a fan of action, laughs or epic chainsaw battles this is the manga for you.",
    description:
      "Denji was a small-time devil hunter just trying to survive in a harsh world. After being killed on a job, he is revived by his pet devil Pochita and becomes something new and dangerous—Chainsaw Man!Chainsaw Man has escaped Makima’s attempts to control him so far, but she now reveals the full extent of her plans. Denji will need the help of his remaining friends if he is to have any chance of defeating Makima in their final confrontation!",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "10",
    productName: "Attack on Titan Omnibus 9 (Vol. 25-27)",
    author:"Hajime Isayama",
    imgUrl: productImg10,
    category: "manga",
    price: 19.95,
    shortDesc:
      "It's never been easier to attack Attack on Titan than with these new, giant-sized 3-in-1 omnibus editions! If you've been waiting for the final anime season to check out the do-or-die shonen adventure that defined a decade, now's your chance. These new books tuck almost 600 pages of manga behind a specially-embossed cover, all in a larger size than the regular version.",
    description:
      "Eren and everyone he has ever known have lived on the island of Paradis. For many years, the Marleyans have been threatening Paradis in an attempt to monopolize the power of the Titans and keep the world trembling before their military might. In an effort to prove their worth and cement their truth, the Marleyans prepare for the ultimate declaration of war on Paradis. But when the time for deliverance comes, neither side is equipped for the shocking drama that unfolds.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "11",
    productName: "One-Punch Man, Vol. 1",
    author:"ONE, Yusuke Murata (Illustrator)",
    imgUrl: productImg11,
    category: "manga",
    price: 10.00,
    shortDesc:
      "Life gets pretty boring when you can beat the snot out of any villain with just one punch.",
    description:
      "Nothing about Saitama passes the eyeball test when it comes to superheroes, from his lifeless expression to his bald head to his unimpressive physique. However, this average-looking guy has a not-so-average problem—he just can’t seem to find an opponent strong enough to take on!",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "12",
    productName: "Jujutsu Kaisen, Vol. 13",
    author:"Gege Akutami",
    imgUrl: productImg12,
    category: "manga",
    price: 9.99,
    shortDesc:
      "To gain the power he needs to save his friend from a cursed spirit, Yuji Itadori swallows a piece of a demon, only to find himself caught in the midst of a horrific war of the supernatural!",
    description:
      "In a world where cursed spirits feed on unsuspecting humans, fragments of the legendary and feared demon Ryomen Sukuna have been lost and scattered about. Should any demon consume Sukuna’s body parts, the power they gain could destroy the world as we know it. Fortunately, there exists a mysterious school of jujutsu sorcerers who exist to protect the precarious existence of the living from the supernatural!",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },

  {
    id: "13",
    productName: "Fall of Ruin and Wrath (B&N Exclusive Edition)",
    author:"Jennifer L. Armentrout",
    imgUrl: productImg13,
    category: "romance",
    price: 25.19,
    shortDesc:
      "This B&N Exclusive Edition includes a gorgeous alternative cover, unique end papers and special color case stamp.SHE LIVES BY HER INTUITION. HE FEEDS ON HER PLEASURE.",
    description:
      "From Jennifer L. Armentrout, the #1 New York Times bestselling author of From Blood and Ash, comes a searing fantasy romance for adults, Fall of Ruin and Wrath.Long ago, the world was destroyed by gods. Only nine cities were spared. Separated by vast wilderness teeming with monsters and unimaginable dangers, each city is now ruled by a guardian—royalty who feed on mortal pleasure.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "14",
    productName: "Icebreaker: A Novel",
    author:"Hannah Grace",
    imgUrl: productImg14,
    category: "romance",
    price: 16.19,
    shortDesc:
      "A TikTok sensation! Sparks fly when a competitive figure skater and hockey team captain are forced to share a rink.",
    description:
      "Anastasia Allen has worked her entire life for a shot at Team USA. It looks like everything is going according to plan when she gets a full scholarship to the University of California, Maple Hills and lands a place on their competitive figure skating team.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "15",
    productName: "It Starts with Us: A Novel",
    author:"Colleen Hoover",
    imgUrl: productImg15,
    category: "romance",
    price: 25.19,
    shortDesc:
      "Before It Ends with Us, it started with Atlas. Colleen Hoover tells fan favorite Atlas’s side of the story and shares what comes next in this long-anticipated sequel to the “glorious and touching” (USA TODAY) #1 New York Times bestseller It Ends with Us.",
    description:
      "Lily and her ex-husband, Ryle, have just settled into a civil coparenting rhythm when she suddenly bumps into her first love, Atlas, again. After nearly two years separated, she is elated that for once, time is on their side, and she immediately says yes when Atlas asks her on a date.But her excitement is quickly hampered by the knowledge that, though they are no longer married, Ryle is still very much a part of her life—and Atlas Corrigan is the one man he will hate being in his ex-wife and daughter’s life.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },
  {
    id: "16",
    productName: "Nightwork",
    author:"Nora Roberts",
    imgUrl: productImg16,
    category: "romance",
    price: 18.19,
    shortDesc:
      "Chemistry between characters and people is tricky business. And yet, Nora Roberts has THE formula.",
    description:
      "Harry Booth started stealing at nine to keep a roof over his ailing mother’s head, slipping into luxurious, empty homes at night to find items he could trade for precious cash. When his mother finally succumbed to cancer, he left Chicago—but kept up his nightwork, developing into a master thief with a code of honor and an expertise in not attracting attention?or getting attached.",
    /*reviews: [
      {
        rating: 4.7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      },
    ],*/  
  //  avgRating: 4.5,
  },



];

export default products;
