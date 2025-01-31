import React, { lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

// project imports
import MainLayout from './../layout/MainLayout';
import Loadable from '../ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('../views/dashboard/Default')));
const OverviewHome = Loadable(lazy(() => import('../views/dashboard/Overview')));
const CommunitiesHome = Loadable(lazy(() => import('../views/communities')));
const SingleCommunityHome = Loadable(lazy(() => import('../views/SingleCommunity')));
const SingleCampaignHome =  Loadable(lazy(() => import('../views/SingleCampaign')));
const ResidentsHome = Loadable(lazy(() => import('../views/Residents')));
const TeamHome = Loadable(lazy(() => import('../views/Team')));
const SettingsGeneral = Loadable(lazy(() => import('../views/Settings/General')));
const SettingsPayments = Loadable(lazy(() => import('../views/Settings/Payments')));
const SettingsStatements = Loadable(lazy(() => import('../views/Settings/Statements')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('../views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('../views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('../views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('../views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('../views/sample-page')));

//-----------------------|| MAIN ROUTING ||-----------------------//

const MainRoutes = () => {
    const location = useLocation();

    return (
        <Route
            path={[
                '/dashboard/default',
                '/dashboard/overview',
                '/communities',
                '/community/1',
                '/community/2',
                '/campaign/1',
                '/residents',
                '/team',
                '/settings/general',
                '/settings/statements',
                '/settings/payment_methods',
                '/utils/util-typography',
                '/utils/util-color',
                '/utils/util-shadow',
                '/icons/tabler-icons',
                '/icons/material-icons',

                '/sample-page'
            ]}
        >
            <MainLayout>
                <Switch location={location} key={location.pathname}>
                    <Route path="/dashboard/default" component={DashboardDefault} />
                    <Route path="/dashboard/overview" component={OverviewHome} />
                    <Route path="/communities" component={CommunitiesHome} />
                    <Route path="/community/1" component={SingleCommunityHome} />
                    <Route path="/community/2" component={SingleCommunityHome} />
                    <Route path="/campaign/1" component={SingleCampaignHome} />
                    <Route path="/residents" component={ResidentsHome} />
                    <Route path="/team" component={TeamHome} />
                    <Route path="/settings/general" component={SettingsGeneral} />
                    <Route path="/settings/statements" component={SettingsStatements} />
                    <Route path="/settings/payment_methods" component={SettingsPayments} />
                    <Route path="/campaign/1" component={SingleCampaignHome} />
                    <Route path="/utils/util-typography" component={UtilsTypography} />
                    <Route path="/utils/util-color" component={UtilsColor} />
                    <Route path="/utils/util-shadow" component={UtilsShadow} />
                    <Route path="/icons/tabler-icons" component={UtilsTablerIcons} />
                    <Route path="/icons/material-icons" component={UtilsMaterialIcons} />

                    <Route path="/sample-page" component={SamplePage} />
                </Switch>
            </MainLayout>
        </Route>
    );
};

export default MainRoutes;
