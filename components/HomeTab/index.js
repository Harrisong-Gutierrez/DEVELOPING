import { useState } from "react";
import Image from "next/image";
import { TabContent } from "reactstrap";
import { entities } from "@/constants/homeTabsContent";
import ComicsList from "../ComicsList";
import StoriesList from "../StoriesList";
import Button from "../Button";
import CharactersList from "../CharacterList";
import { v4 } from "uuid";
import { useTabContext } from "@/context/TabContext";

const HomeTab = () => {
  const [activeTab, setActiveTab] = useTabContext();

  const renderPanel = (entity) => {
    const { paragraph1, paragraph2, imageLink } = entity;

    return (
      <div className="d-flex Tabs-info">
        <p className="Tabs-paragraph mb-0">{paragraph1}</p>
        <p className="Tabs-paragraph mb-0">{paragraph2}</p>
        <div className="Tabs-img-container">
          <Image
            src={imageLink}
            width={900}
            height={500}
            alt="Tabs-img"
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
          {renderTabsList(entities[activeTab].title)}
        </div>
      </div>
    );
  };



  const renderTabsList = (title) => {
    switch (title) {
      case "Characters":
        return <CharactersList />;
      case "Comics":
        return <ComicsList />;
      case "Stories":
        return <StoriesList />;
      default:
        return <CharactersList />;
    }
  };


  const renderTabs = () => {
    if (!entities) {
      return null; 
    }
  
    const tabButtons = entities.map((entity, index) => (
      <Button
        key={v4()}
        classSize={`Tabs-tab ${activeTab === index ? "Tabs-active" : ""} ${
          index === 2 ? "Tabs-tab-border" : ""
        }`}
        onClick={() => setActiveTab(index)}
        buttonText={entity.title}
      />
    ));
  
    return tabButtons;
  };
  

  const renderTabPanel = () => {
    return (
      <TabContent className="Tabs-content">
        <div className="Tabs-main">
          <section className="Tabs-container">
            {renderActivePanel(entities[activeTab].title)}
          </section>
        </div>
      </TabContent>
    );
  };

  return (
    <div className="Tabs">
      <div className="d-flex  Tabs-responsive">{renderTabs()}</div>
      {renderTabPanel()}
    </div>
  );
};

export default HomeTab;
