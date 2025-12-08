import React from "react";
import { useTranslation } from 'react-i18next';
import { SidebarButton, SidebarStyle } from "../style.js/style-sidebar";

function Sidebar() {
  const { t } = useTranslation();

  return (
    <SidebarStyle>
      <SidebarButton>
        <i className="fa-regular fa-calendar"></i>
        {t('planning')}
      </SidebarButton>
      <SidebarButton>
        <i class="fa-regular fa-chart-line"></i>
        {t('stock market')}
      </SidebarButton>
      <SidebarButton>
        <i class="fa-regular fa-input-numeric"></i>
        {t('sports')}
      </SidebarButton>
      <SidebarButton>
        <i class="fa-regular fa-circle-info"></i>
        {t('about')}
      </SidebarButton>
    </SidebarStyle>
  );
}

export default Sidebar;