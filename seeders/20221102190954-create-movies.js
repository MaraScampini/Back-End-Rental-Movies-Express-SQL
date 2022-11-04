'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Movies', [{
      id_movie: 1,
      title: "The Godfather",
      original_language: "English",
      genre: "drama",
      description: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-14",
      vote_count: 16829,
      vote_average: 8.7,
      on_theaters: false,
      ArticleIdArticle: 1
    },
      {
        id_movie: 2,
        title: "The Shawshank Redemption",
        original_language: "English",
        genre: "drama",
        description: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        release_date: "1994-09-23",
        vote_count: 22561,
        vote_average: 8.7,
        on_theaters: false,
        ArticleIdArticle: 2
      },
      {
        id_movie: 3,
        title: "Schindler's List",
        original_language: "English",
        genre: "drama",
        description: "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        poster_path: "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        release_date: "1993-12-15",
        vote_count: 13393,
        vote_average: 8.6,
        on_theaters: false,
        ArticleIdArticle: 3
      },
      {
        id_movie: 4,
        title: "Terrifier 2",
        original_language: "English",
        genre: "horror",
        description: "After being resurrected by a sinister entity, Art the Clown returns to Miles County where he must hunt down and destroy a teenage girl and her younger brother on Halloween night.  As the body count rises, the siblings fight to stay alive while uncovering the true nature of Art's evil intent.",
        poster_path: "/wRKHUqYGrp3PO91mZVQ18xlwYzW.jpg",
        release_date: "2022-10-06",
        vote_count: 305,
        vote_average: 7.2,
        on_theaters: true,
        ArticleIdArticle: 4
      },
      {
        id_movie: 5,
        title: "Black Adam",
        original_language: "English",
        genre: "superheroes",
        description: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        poster_path: "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
        release_date: "2022-10-19",
        vote_count: 742,
        vote_average: 7,
        on_theaters: true,
        ArticleIdArticle: 5
      },
      {
        id_movie: 6,
        title: "Coco",
        original_language: "English",
        genre: "animation",
        description: "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        poster_path: "/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        release_date: "2017-10-27",
        vote_count: 16362,
        vote_average: 8.2,
        on_theaters: false,
        ArticleIdArticle: 6
      },
      {
        id_movie: 7,
        title: "Halloween Ends",
        original_language: "English",
        genre: "horror",
        description: "Four years after the events of Halloween in 2018, Laurie has decided to liberate herself from fear and rage and embrace life. But when a young man is accused of killing a boy he was babysitting, it ignites a cascade of violence and terror that will force Laurie to finally confront the evil she can't control, once and for all.",
        poster_path: "/kFMntvUmKhvw1uAHXecqqNSFXt.jpg",
        release_date: "2022-10-12",
        vote_count: 805,
        vote_average: 6.6,
        on_theaters: true,
        ArticleIdArticle: 7
      },
      {
        id_movie: 8,
        title: "Bullet Train",
        original_language: "English",
        genre: "action",
        description: "Unlucky assassin Ladybug is determined to do his job peacefully after one too many gigs gone off the rails. Fate, however, may have other plans, as Ladybug's latest mission puts him on a collision course with lethal adversaries from around the globe—all with connected, yet conflicting, objectives—on the world's fastest train.",
        poster_path: "/tVxDe01Zy3kZqaZRNiXFGDICdZk.jpg",
        release_date: "2022-07-03",
        vote_count: 2117,
        vote_average: 7.5,
        on_theaters: false,
        ArticleIdArticle: 8
      },
      {
        id_movie: 9,
        title: "Cerdita",
        original_language: "Spanish",
        genre: "horror",
        description: "A bullied overweight teenager sees a glimpse of hope when her tormentors are brutally abducted by a mesmerizing stranger.",
        poster_path: "/8EIQAvJjXdbNDMmBtHtgGqbc09V.jpg",
        release_date: "2022-10-07",
        vote_count: 148,
        vote_average: 6.8,
        on_theaters: true,
        ArticleIdArticle: 9
      },
      {
        id_movie: 10,
        title: "Cerdita",
        original_language: "Spanish",
        genre: "horror",
        description: "A bullied overweight teenager sees a glimpse of hope when her tormentors are brutally abducted by a mesmerizing stranger.",
        poster_path: "/8EIQAvJjXdbNDMmBtHtgGqbc09V.jpg",
        release_date: "2022-10-07",
        vote_count: 148,
        vote_average: 6.8,
        on_theaters: true,
        ArticleIdArticle: 10
      }
  
  
  
  
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});

  }
};
