export function getSavedArticles() {
  return new Promise((resolve, reject) => {
    resolve([
      // {
      //   source: {
      //     id: '65f7368dfb74bd6a92114c85',
      //     name: 'Gizmodo.com',
      //   },
      //   author: 'Cheryl Eddy',
      //   title:
      //     'The Last of Us Co-Creators Tease How Abby Will Be Different in the Series Than the Game',
      //   description:
      //     'Season two of the acclaimed video game adaptation arrives on HBO and Max this April—with Kaitlyn Dever taking on the key role of Abby.',
      //   url: 'https://gizmodo.com/last-of-us-season-2-abby-changes-hbo-naughty-dog-2000558433',
      //   urlToImage:
      //     'https://gizmodo.com/app/uploads/2025/02/last-of-us-season-2-hbo-abby.jpg',
      //   publishedAt: '2025-02-03T19:30:24Z',
      //   content:
      //     'One of the most anticipated pop culture returns of 2025 is almost here: The Last of Us, HBO’s hit video game adaptation starring Bella Ramsey and Pedro Pascal. Talking about season two has been a par… [+2634 chars]',
      //   keyword: 'video',
      // },
      // {
      //   source: {
      //     id: 'wired',
      //     name: 'Wired',
      //   },
      //   author: 'Makena Kelly',
      //   title:
      //     "DOGE Staff Had Questions About the 'Resign' Email. Their New HR Chief Dodged Them",
      //   description:
      //     '"I think the information that you’re going to have about this is available to you right now,” Stephanie Holmes told workers at Elon Musk\'s DOGE who pressed for detail on offers of “deferred resignation.”',
      //   url: 'https://www.wired.com/story/doge-hr-elon-musk-resignation-fork-road-leaked-staff-meeting/',
      //   urlToImage:
      //     'https://media.wired.com/photos/679e9758d817cb38afac5685/191:100/w_1280,c_limit/2194353521',
      //   publishedAt: '2025-02-02T00:03:31Z',
      //   content:
      //     'On Friday, staff at what was formerly the United States Digital Service and is now part of Elon Musks DOGE initiative met with Stephanie Holmes, who identified herself as a part of the DOGE team and … [+4148 chars]',
      //   keyword: 'Elon Musk',
      // },
      // {
      //   source: {
      //     id: null,
      //     name: 'Gizmodo.com',
      //   },
      //   author: 'Germain Lussier',
      //   title:
      //     'The Best New Movies and TV Streaming in February 2025, and Where to Watch Them',
      //   description:
      //     'The best horror, sci-fi, and genre titles coming to Netflix, Hulu, Prime Video, Disney+, and beyond, including Final Destination, Attack the Block, and Human Centipede.',
      //   url: 'https://gizmodo.com/best-new-movies-tv-stream-february-2025-netflix-hulu-2000557263',
      //   urlToImage:
      //     'https://gizmodo.com/app/uploads/2025/01/nerds-watch-feb-2025.jpg',
      //   publishedAt: '2025-02-03T16:30:50Z',
      //   content:
      //     'February is here so snuggle up with your sweetie and get ready to stream some movies. Welcome to io9s latest edition of the Nerds Watch, where we pare down the enormous lists of new films and televis… [+5912 chars]',
      //   keyword: 'marvel',
      // },
    ]);
  });
}

export function addSavedArticle(article, keyword) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: article.title,
      keyword: keyword,
      link: article.url,
      title: article.title,
      source: article.source,
      text: article.description,
      urlToImage: article.urlToImage,
      publishedAt: article.publishedAt,
    });
  });
}

export const removeSavedArticle = () => {
  return new Promise((resolve, reject) => {
    const response = {
      ok: true,
      status: 200,
      statusText: 'OK',
    };
    resolve(response);
  });
};
