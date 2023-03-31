export const spendArray = [
  {
    image: "./images/CHAR1.png",
    content: "PUT 0.3% OF YOUR DAY TO BEST USE",
  },
  {
    image: "./images/CHAR2.png",
    content: "STAY INFORMED WHILE MULTITASKING",
  },
  {
    image: "./images/CHAR3.png",
    content: "MAKE SCROLLING TIME 100% PRODUCTIVE",
  },
  {
    image: "./images/CHAR4.png",
    content: "Add 300+ POD COINS to your wallet",
  },
];

export const offerArray = [
  {
    image: "./images/offer1.svg",
    title: "Newsfeed",
    content: "Global news with context in 10 secs",
  },
  {
    image: "./images/offer2.svg",
    title: "Insights",
    content: "Analysis on current affairs in 30 secs",
  },
  {
    image: "./images/offer3.svg",
    title: "Deals",
    content: "Get exciting discounts for unique brands",
  },
  {
    image: "./images/offer4.svg",
    title: "Pocket-friendly",
    content: "Quality audio at pocket-friendly rates",
  },
];

export const dealArray = [
  {
    title: "What's in it for BRANDS?",
    offerList: [
      "user-friendly interface",
      "an ultimate destination for innovative brands",
      "create long-lasting customer relationships",
      "create an impactful online experience",
    ],
    btnTitle: "Contact Us",
  },
  {
    title: "What's in it for CONSUMERS?",
    offerList: [
      "a selection of one-of-a-kind products",
      "specially curated deals just for you",
      "elevate your lifestyle with every deal",
      "budget friendly deals for every occasion",
    ],
    btnTitle: "Download Now",
  },
];

export const featureArray = [
  {
    image: "./images/feature1.svg",
    content: "Uses Human Quotient",
  },
  {
    image: "./images/feature2.svg",
    content: "Powered by AI",
  },
  {
    image: "./images/feature3.svg",
    content: `Only Insights, 
              No Blah!`,
  },
  {
    image: "./images/feature4.svg",
    content: "Cost-effective deals",
  },
  {
    image: "./images/feature5.svg",
    content: "100% Vernacular",
  },
];

export const FaqList = [
  {
    ques: "What is Opod Audio?",
    ans: "Opod Audio is a 21st-century radio. It is an android and ios based mobile app that publishes 10 and 30 secs audio insights on diverse topics such as trending news, current affairs, podcasts, and relevant events. It is available in English, and Hindi, and will soon be available in Marathi, Gujarati, Punjabi, Bengali, Malayalam, Telugu, and Tamil.",
  },
  {
    ques: "How can I ensure that the content published is authentic?",
    ans: "Content published by Opod Audio is research-based and verified from multiple authentic sources. You can also access the content source on the read card/ pods, from where the content is mainly referred to. If you still face any discrepancies, then please feel free to write to us at hello@opod.in. We will do our best to incorporate your feedback.",
  },
  {
    ques: "What is a pod?",
    ans: "A pod is 10 secs to 30 secs short audio summary. We also call it a ‘read card’ as you can do both, listen and read the content on the app.",
  },
  {
    ques: "What are POD coins?",
    ans: "A POD coin is the internal currency of Opod Audio. It is rewarded for each second of listening. 1 Second = 1 POD coin.",
  },
  {
    ques: "How much discount will I get in the Deals section?",
    ans: "Discounts will be dependent on your listening pattern and item value. Be rest assured, you will get fantastic discounts in the diverse marketplace. Until then, listen and earn as many POD coins as you can! We are working hard to get the best deals for you.",
  },
  {
    ques: "I have heard all the news, what’s next?",
    ans: "That’s amazing! You are our STAR listener. You can check out the Insights section for detailed analysis and reports on events around you. Still, missing interesting content? Please write to us and we will do everything to incorporate it into the app, just for you.",
  },
  {
    ques: "Will POD coins be rewarded more than once, if I listen to the same pod twice or more?",
    ans: " POD coins are only rewarded once you listen to the complete pod.",
  },
  {
    ques: "How do I share my feedback with you?",
    ans: "We love to hear from you! You can write to us with your detailed feedback, under the Contact Us section.",
  },
];

export const Blogs = [
  {
    blogImage: "./images/blog-image.png",
    blogTitle: "The Daily Scoop",
    blogContent: "Emma Johnson writes about the latest happenings in the .",
    writerImage: "./images/writer.png",
    name: "Emma Johnson",
    message:'As of 2023, there are over 7000 languages spoken around the world. In today’s globalized world, where businesses are expanding their reach beyond borders, multilingual ads have become essential for effective marketing. A survey conducted by Common Sense Advisory reveals that 75% of consumers prefer to buy products in their native language. They also found that 90% of consumers are more likely to make a purchase if the website is available in their native language.'
  },
 
];

export function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "IOS";
    }

    return "unknown";
}

export const truncate = (text, charSize) => {
  if(text === '') return null;
  return text?.substring(0,charSize) + (text?.length > charSize ? "..." : "" ) ;
}

const months = {
  "01" : "January",
  "02": "February",
  "03" : "March",
  "04": "April",
  "05":"May",
  "06" :"June",
  "07": "July",
  "08":"August",
  "09":"September",
  "10":"October",
  "11":"November",
  "12":"December"
}

export const getFormatDate= (dateArray)=>{
  if(dateArray.length ==0){
    return
  }
  return `${dateArray[0]} ${months[dateArray[1]]} ${dateArray[2]}`
}

