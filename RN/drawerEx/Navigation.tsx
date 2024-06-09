import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './screens/stack/Login';
import Register from './screens/stack/Register';
import Home from './screens/admin/Home';
import Settings from './screens/admin/Settings';
import Store from './screens/client/Store';
import Profile from './screens/client/Profile';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function AdminNavigation() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Settings" component={Settings} />
            {/* //add logout button here */}
        </Drawer.Navigator>
    )
}

function ClientTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Store} />
            <Tab.Screen name="Settings" component={Profile} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="AdminNavigation" component={AdminNavigation} />
            <Stack.Screen name="ClientTabs" component={ClientTabs} />
        </Stack.Navigator>
    );
}



{/*
דף בית - מכיל הכל
התחברות 
הרשמה
אדמין
פרופיל    
*/}


