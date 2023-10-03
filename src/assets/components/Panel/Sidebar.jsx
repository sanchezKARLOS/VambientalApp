import { useState, useEffect } from "react";
import "./Css/Sidebar.css";

//componente de iconos
import Icon from "./ComponetSidebar/Icon";

//Componentes de opciones
import SetSalones from "./Componente/Salones";
import Ajustes from "./Componente/Ajustes";
import Inicio from "./Componente/Inicio";

const tabs = ["Inicio", "Salones", "Ajustes"];

const handleInicioClick = () => {
  window.location.href = window.location.href;
};

const TabContents = {
  0: <Inicio />,
  1: <SetSalones />,
  2: <Ajustes />,
};

const NavHeader = ({ activeTab, onTabClicked }) => (
  <header className="_s-h">
    {tabs.map((tab, index) => (
      <button
        key={tab}
        type="button"
        onClick={() => {
          index === 0 ? handleInicioClick() : onTabClicked(index)
        }}
        className={`${activeTab === index ? "_active" : ""}`}
      >
        <Icon
          isActive={activeTab === index}
          onClick={onTabClicked}
          icon={tab}
        />
      </button>
    ))}
    <div className="_uline" style={{ translate: `${activeTab * 100}% 0` }} />
  </header>
);

export const Sidebar = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClicked = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {}, []);
  return (
    <aside className="_sidebar">
      <NavHeader activeTab={activeTab} onTabClicked={handleTabClicked} />
      <div className="_tabs">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            style={{
              transform: `translateX(-${
                activeTab === 0 ? 0 : (activeTab / tabs.length) * 100
              }% 0)`,
              display: activeTab === index ? "block" : "none",
            }}
            className="_sdctag"
          >
            <div className="content-container">
              <div
                className={`tab-content ${activeTab === index ? "active" : ""}`}
              >
                <>{TabContents[activeTab]}</>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};
