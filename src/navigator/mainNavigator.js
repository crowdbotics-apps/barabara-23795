import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile192022Navigator from '../features/UserProfile192022/navigator';
import Tutorial192021Navigator from '../features/Tutorial192021/navigator';
import NotificationList191993Navigator from '../features/NotificationList191993/navigator';
import Settings191992Navigator from '../features/Settings191992/navigator';
import Settings191984Navigator from '../features/Settings191984/navigator';
import UserProfile191982Navigator from '../features/UserProfile191982/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile192022: { screen: UserProfile192022Navigator },
Tutorial192021: { screen: Tutorial192021Navigator },
NotificationList191993: { screen: NotificationList191993Navigator },
Settings191992: { screen: Settings191992Navigator },
Settings191984: { screen: Settings191984Navigator },
UserProfile191982: { screen: UserProfile191982Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
