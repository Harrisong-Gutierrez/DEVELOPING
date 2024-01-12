import { useState } from "react";
import Image from "next/image";
import { TabContent } from "reactstrap";
import CharactersList from "./characterList";
import ComicsList from "./comicsList";
import StoriesList from "./storiesList";

const HomeTab = () => {
  const entities = [
    {
      title: "Characters",
      paragraph1:
        "Being the undisputed leader in the world of comics, back in the 80s, DC was in the hole, so the head of the company sought to get Marvel to license DC characters. They refused, but in doing so they got into legal trouble for monopolistic practices where it was declared that no company could have more than 70% of the market (Marvel already had 69%).",
      paragraph2:
        "When the comic first came out, Stan Lee wrote a lot, so he sometimes forgot details of all the stories. Therefore, in the first issues of Hulk, Bruce Banner received different names, such as Bob Banner; That`s why his real name is Robert Bruce Banner.",
      imageLink: "/img-tab1.jpg",
    },
    {
      title: "Comics",
      paragraph1:
        "A New Mexico judge read the Spider-Man comic where Kingpin used a technological bracelet to know the location of his enemy. This served as inspiration and the judge, together with a friend, developed a system that would allow them to know the location of prisoners on parole",
      paragraph2:
        "In the early 1980s, the toy company Hasbro had purchased the concept for Transformers toys from a Japanese company. They wanted the brand to be attractive to the public, so they hired Marvel to develop the narrative and characters of these toys. Jim Shooter and Denny O`Neil were in charge of designing the stories behind the iconic Transformers. Later the universe would be expanded, but originally Marvel had a lot to do with its creation.",
      imageLink: "/img-tab2.jpg",
    },
    {
      title: "Stories",
      paragraph1:
        "Can you imagine Captain America played by someone else? Not me, Evans` face is now iconic for the character, but it is said that he had turned down the role twice, after the resounding failure of Fantastic Four, where Evans played The Human Torch. After consulting with his agent, his therapist, and the director, Chris ended up accepting the role.",
      paragraph2:
        "The phrase “With great power comes great responsibility” is one of the most iconic to refer to Peter Parker`s uncle, but he never actually said it. The phrase was first uttered by Ben Parker in Sam Raimi`s Spider-Man (2002). In the comic, there was an impersonal box where an unspecified narrator said something similar, but pop culture mistakenly assigned Ben the authorship of the phrase.",
      imageLink: "/img-tab3.jpg",
    },
  ];

  const uuid = require("uuid");
  const [activeTab, setActiveTab] = useState(0);
  let ListComponent;
  let currentList;

  const renderPanel = (entity) => {
    const { paragraph1, paragraph2, imageLink, list } = entity;

    switch (entity.title) {
      case "Characters":
        ListComponent = CharactersList;
        break;
      case "Comics":
        ListComponent = ComicsList;
        break;
      case "Stories":
        ListComponent = StoriesList;
        break;
      default:
        ListComponent = CharactersList;
    }

    currentList = list;

    return (
      <div className="d-flex h-100">
        <p className="Tabs-paragraph mb-0">{paragraph1}</p>
        <p className="Tabs-paragraph mb-0">{paragraph2}</p>
        <div className="Tabs-img-container">
          <Image
            src={imageLink}
            width={900}
            height={500}
            alt="Picture of the author"
            className="Tabs-img"
            priority
          />
        </div>
      </div>
    );
  };

  const renderActivePanel = () => {
    return (
      <div>
        {renderPanel(entities[activeTab])}
        <div className="Tabs-list-container">
          {ListComponent && <ListComponent items={currentList} />}
        </div>
      </div>
    );
  };

  return (
    <div className="Tabs">
      <div className="Tabs-box">
        {entities.map((entity, index) => (
          <button
            key={uuid.v4()}
            className={`Tabs-tab ${activeTab === index ? "Tabs-active" : ""} ${
              index === 2 ? "Tabs-tab-border" : ""
            }`}
            onClick={() => setActiveTab(index)}
          >
            {entity.title}
          </button>
        ))}
      </div>

      <TabContent className="Tabs-content">
        {[...Array(3)].map((_, index) => (
          <div
            key={uuid.v4()}
            className="Tabs-main"
            style={{ display: activeTab === index ? "flex" : "none" }}
          >
            <section className="Tabs-container">{renderActivePanel()}</section>
          </div>
        ))}
      </TabContent>
    </div>
  );
};

export default HomeTab;
