"use client"; // Nécessaire pour Next.js App Router

import { useState } from 'react';
import {
  IconHome,
  IconFingerprint,
  IconReceipt2,
  IconLogout,
  IconSwitchHorizontal,
  IconShoppingCart,
  IconBox,
  IconUsers,
  IconMessageCircle,
  IconChartBar,
  IconSettings,
  IconUserCircle,
  IconCreditCard
} from '@tabler/icons-react';
import { Group, Avatar } from '@mantine/core';
import { PiPlantFill } from "react-icons/pi";

// Importation des composants
import Home from './Home/page';
import ProfilVendeur from './ProfilVendeur/page';
import Statistques from './Statisque/page';

import classes from './NavbarSimpleColored.module.css';
import Produits from './Prouits/page';
import Commandes from './Commande/page';
import Clients from './Clients/page';
import Messages from './Messages/page';
import Parametre from './Parametre/page';
import Paiements from './Paiements/page';

// Tableau des liens avec des références aux composants
const data = [
  { component: Home, label: 'Tableau de bord', icon: IconHome },
  { component: ProfilVendeur, label: 'Profil Utilisateur', icon: IconUserCircle },
  { component: Produits, label: 'Gestion des Produits', icon: IconBox },
  { component: Commandes, label: 'Commandes', icon: IconShoppingCart },
  { component: Statistques, label: 'Statistiques & Analyses ', icon: IconChartBar },
  { component: Clients, label: 'Gestion des Clients', icon: IconUsers },
  { component: Messages, label: ' Messages & Notifications', icon: IconMessageCircle },
  { component: Parametre, label: ' Profil & Paramètres', icon: IconSettings },
  { component: Paiements, label: 'Finances & Paiements', icon: IconCreditCard }
];

function NavbarSimpleColored() {
  const [active, setActive] = useState('Tableau de bord');
  const [activeComponent, setActiveComponent] = useState(<Home />); // ✅ Stocke directement un élément JSX

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href="#"
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
        setActiveComponent(<item.component />); // ✅ Stocke l'élément JSX
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <div className="container-fluid">
      <div className="row justify-content-between">
        <div className="col-lg-3">
          <div className={classes.container}> {/* ✅ Conteneur principal (Navbar + Contenu) */}
            {/* ✅ Barre de navigation à gauche */}
            <nav className={classes.navbar}>
              <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                  <h4>
                    <sub>agri<span className="text-success">Nova</span></sub>
                    <PiPlantFill className='fs-1' />
                  </h4>
                </Group>
                {links}
              </div>

              <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                  <IconSwitchHorizontal className={classes.linkIcon} stroke={1.5} />
                  <span>Change account</span>
                </a>

                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                  <IconLogout className={classes.linkIcon} stroke={1.5} />
                  <span>Logout</span>
                </a>
              </div>
            </nav>

            {/* ✅ Section du contenu (à droite) */}

          </div>
        </div>
        <div className="col-lg-9 ">
          <section className={classes.content}>
            {activeComponent}
          </section>
        </div>
      </div>
    </div>
  );
}

export default NavbarSimpleColored;
