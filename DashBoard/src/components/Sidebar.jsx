import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";

const Style = styled.div`
    margin: 2rem;
    padding: 2rem 1rem;
    border: solid 2px var(--primary-color-dark);
    border-radius: var(--radius-md);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: fit-content;
    gap: 2rem;
`;

const Button = styled.div`
    height: 1rem;
    width: 250px;
    border: solid 1px var(--primary-color-dark);
    border-radius: var(--radius-lg);
    background-color: var(--primary-color);
    padding: 1rem;
    font-size: large;
    font-weight: bold;
    color: var(--secondary-color);
    display: flex;
    gap: 1.5rem;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: var(--primary-color-dark);
    }
`;

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <Style>
      <Button>
        <i className="fa-regular fa-calendar"></i>
        {t('planning')}
      </Button>
      <Button>
        <i class="fa-regular fa-chart-line"></i>
        {t('crypto')}
      </Button>
      <Button>
        <i class="fa-regular fa-input-numeric"></i>
        {t('sports')}
      </Button>
      <Button>
        <i class="fa-regular fa-circle-info"></i>
        {t('about')}
      </Button>
    </Style>
  );
}

export default Sidebar;