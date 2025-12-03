import React from "react";
import { useTranslation } from 'react-i18next';

function Sidebar() {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <button className="button-sidebar">
        <i className="fa-regular fa-calendar"></i>
        {t('planning')}
      </button>
      <button className="button-sidebar">
        <i class="fa-regular fa-chart-line"></i>
        {t('stock market')}
      </button>
      <button className="button-sidebar">
        <i class="fa-regular fa-input-numeric"></i>
        {t('sports')}
      </button>
      <button className="button-sidebar">
        <i class="fa-regular fa-circle-info"></i>
        {t('about')}
      </button>
    </div>
  );
}

export default Sidebar;