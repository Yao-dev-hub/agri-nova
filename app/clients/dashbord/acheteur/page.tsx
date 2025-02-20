"use client"
import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider, Navigation, Router } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import { FaBarsStaggered } from "react-icons/fa6";
import { FaChartColumn } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { FaLayerGroup } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { Avatar } from '@mui/material';
import { FaUserGroup } from "react-icons/fa6";




const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Compte Acheteur',
  },
  {
    segment: 'Mon Compte',
    title: 'mon profil',
    icon: <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Informations sur mes clients',
  },
  {
    segment: 'Vendeurs',
    title: 'Vendeurs',
    icon: <FaUserGroup />,
    children: [
      {
        segment: 'Listes',
        title: 'Listes',
        icon: <MdDescription />,
      },
      {
        segment: 'Détails',
        title: 'Détails',
        icon: <MdDescription />,
      },
    ],
  },
  {
    segment: ' Messages',
    title: ' Messages',
    icon: <IoChatbubbles />,
  },

  {
    kind: 'header',
    title: 'Informations sur mes produits',

  },
  {
    segment: 'Mes',
    title: 'Mes Produits',
    icon: <FaGift />,
    children: [
      {
        segment: 'Listes produits',
        title: 'Listes produits',
        icon: <MdDescription />,
      },
      {
        segment: 'Details produits',
        title: 'Details produits',
        icon: <MdDescription />,
      },
      {
        segment: 'Statistiques produits',
        title: 'Statistiques produits',
        icon: <MdDescription />,
      },
    ],
  },
  {
    segment: 'reports',
    title: 'Mes Commandes',
    icon: <FaTruck />,
    children: [
      {
        segment: 'Listes commandes',
        title: 'Listes commandes',
        icon: <MdDescription />,
      },
      {
        segment: 'Commandes en cours',
        title: 'Commandes en cours',
        icon: <MdDescription />,
      },
      {
        segment: 'Commandes éffectué(e)s',
        title: 'Commandes éffectué(e)s',
        icon: <MdDescription />,
      },
    ],
  },
  {
    kind: 'header',
    title: 'Informations sur mes budgets',

  },
  {
    segment: 'Mes budgets',
    title: 'Mes budgets',
    icon: <FaTruck />,
    children: [
      {
        segment: 'Listes des dépenses',
        title: 'Listes des dépenses',
        icon: <MdDescription />,
      },
      {
        segment: 'Statistiques',
        title: 'Statistiques',
        icon: <MdDescription />,
      }
    ],
  },
  {
    segment: ' Favoris',
    title: ' Favoris',
    icon: <FaHeart />,
  },
  {
    segment: ' parametres',
    title: ' parametres',
    icon: <IoSettingsSharp />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function DashboardLayoutBasic(props: any) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <Grid size={5} />
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>
            <Grid size={4}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={8}>
              <Skeleton height={100} />
            </Grid>

            <Grid size={12}>
              <Skeleton height={150} />
            </Grid>
            <Grid size={12}>
              <Skeleton height={14} />
            </Grid>

            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
            <Grid size={3}>
              <Skeleton height={100} />
            </Grid>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
