// import { Redirect, Route } from 'react-router-dom';
// import {
//   IonApp,
//   IonIcon,
//   IonLabel,
//   IonRouterOutlet,
//   IonTabBar,
//   IonTabButton,
//   IonTabs,
//   setupIonicReact,
//   IonPage,
//   IonHeader,
//   IonToolbar,
//   IonContent,
//   IonSegment,
//   IonSegmentButton
// } from '@ionic/react';
// import { IonReactRouter } from '@ionic/react-router';
// import { ellipse, square, triangle } from 'ionicons/icons';

// //Bottom Tab Navigation
// import Tab1 from './pages/Tab1';
// import Tab2 from './pages/Tab2';
// import Tab3 from './pages/Tab3';
// import Tab4 from './pages/Tab4';
// import Tab5 from './pages/Tab5';

// //Top Tab Navigation
// import TopTab1 from './topTabBar/topTab1';
// import TopTab2 from './topTabBar/topTab2';
// import TopTab3 from './topTabBar/topTab3';

// /* Core CSS required for Ionic components to work properly */
// import '@ionic/react/css/core.css';

// /* Basic CSS for apps built with Ionic */
// import '@ionic/react/css/normalize.css';
// import '@ionic/react/css/structure.css';
// import '@ionic/react/css/typography.css';

// /* Optional CSS utils that can be commented out */
// import '@ionic/react/css/padding.css';
// import '@ionic/react/css/float-elements.css';
// import '@ionic/react/css/text-alignment.css';
// import '@ionic/react/css/text-transformation.css';
// import '@ionic/react/css/flex-utils.css';
// import '@ionic/react/css/display.css';

// /**
//  * Ionic Dark Mode
//  * -----------------------------------------------------
//  * For more info, please see:
//  * https://ionicframework.com/docs/theming/dark-mode
//  */

// /* import '@ionic/react/css/palettes/dark.always.css'; /
// / import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';

// /* Theme variables */
// import './theme/variables.css';
// import { useState } from 'react';

// setupIonicReact();

// const App: React.FC = () => (
//   <IonApp>
//     <IonReactRouter>
//       <IonTabs>
//         <IonRouterOutlet>
//           <Route exact path="/tab1">
//             <Tab1 />
//           </Route>
//           <Route exact path="/tab2">
//             <Tab2 />
//           </Route>
//           <Route exact path="/tab3">
//             <Tab3 />
//           </Route>
//           <Route exact path="/tab4">
//             <Tab4 />
//           </Route>
//           <Route path="/tab5">
//             <Tab5 />
//           </Route>
//           <Route exact path="/">
//             <Redirect to="/tab1" />
//           </Route>
//         </IonRouterOutlet>
//         <IonTabBar slot="bottom">
//           <IonTabButton tab="tab1" href="/tab1">
//             <IonIcon aria-hidden="true" icon={triangle} />
//             <IonLabel>Tab 1</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="tab2" href="/tab2">
//             <IonIcon aria-hidden="true" icon={ellipse} />
//             <IonLabel>Tab 2</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="tab3" href="/tab3">
//             <IonIcon aria-hidden="true" icon={square} />
//             <IonLabel>Tab 3</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="tab4" href="/tab4">
//             <IonIcon aria-hidden="true" icon={triangle} />
//             <IonLabel>Tab 4</IonLabel>
//           </IonTabButton>
//           <IonTabButton tab="tab5" href="/tab5">
//             <IonIcon aria-hidden="true" icon={ellipse} />
//             <IonLabel>Tab 5</IonLabel>
//           </IonTabButton>
//         </IonTabBar>
//       </IonTabs>
//       <Route path="/top-tabs">
//         <TopTabContainer />
//       </Route>
//     </IonReactRouter>

//   </IonApp>
// );

// // Top Tab Container Component
// const TopTabContainer: React.FC = () => {
//   const [selectedTab, setSelectedTab] = useState<string>('topTab1');

//   const handleSegmentChange = (e: CustomEvent) => {
//     setSelectedTab(e.detail.value);
//   };

//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonSegment value={selectedTab} onIonChange={handleSegmentChange}>
//             <IonSegmentButton value="topTab1">
//               <IonLabel>Top Tab 1</IonLabel>
//             </IonSegmentButton>
//             <IonSegmentButton value="topTab2">
//               <IonLabel>Top Tab 2</IonLabel>
//             </IonSegmentButton>
//             <IonSegmentButton value="topTab3">
//               <IonLabel>Top Tab 3</IonLabel>
//             </IonSegmentButton>
//           </IonSegment>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent>
//         {selectedTab === 'topTab1' && <TopTab1 />}
//         {selectedTab === 'topTab2' && <TopTab2 />}
//         {selectedTab === 'topTab3' && <TopTab3 />}
//       </IonContent>
//     </IonPage>
//   );
// };

// export default App;


import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonSegment,
  IonSegmentButton
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import { useState } from 'react';

// Bottom Tabs
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';

// Top Tabs
import TopTab1 from './topTabBar/topTab1';
import TopTab2 from './topTabBar/topTab2';
import TopTab3 from './topTabBar/topTab3';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <TabWithTopTabs />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route exact path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/tab5">
            <Tab5 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 1</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Tab 2</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Tab 3</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4">
            <IonIcon aria-hidden="true" icon={triangle} />
            <IonLabel>Tab 4</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/tab5">
            <IonIcon aria-hidden="true" icon={ellipse} />
            <IonLabel>Tab 5</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

// Component for Tab1 with Top Navigation
const TabWithTopTabs: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string>('topTab1');

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment value={selectedTab} onIonChange={(e) => {
            if (e.detail.value) {
              setSelectedTab(e.detail.value as string);
            }
          }}>
            <IonSegmentButton value="topTab1">
              <IonLabel>Top Tab 1</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="topTab2">
              <IonLabel>Top Tab 2</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="topTab3">
              <IonLabel>Top Tab 3</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {selectedTab === 'topTab1' && <TopTab1 />}
        {selectedTab === 'topTab2' && <TopTab2 />}
        {selectedTab === 'topTab3' && <TopTab3 />}
      </IonContent>
    </IonPage>
  );
};

export default App;
