import "react-native-gesture-handler";
import { View, Text, Image } from "react-native";
import { SimpleLineIcons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import User from "./assets/user.avif";
import Categories from "./screens/Categories";
import Customize from "./screens/Customize";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Timer from "./screens/Timer";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Timer"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Timer" component={Timer} />
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="Customize" component={Customize} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 200,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "#f4f4f4",
          borderBottomWidth: 1,
        }}
      >
        <Image
          source={User}
          style={{
            height: 130,
            width: 130,
            borderRadius: 65,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: "bold",
            color: "#111",
          }}
        >
          Gorilla
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: "#111",
          }}
        >
          Product Manager
        </Text>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
}

function DrawerMenuNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      drawerStyle={{
        backgroundColor: "#fff",
        width: 250,
      }}
      drawerLabelStyle={{
        color: "#111",
      }}
      drawerPosition="right"
    >
      <Drawer.Screen
        name="Timer"
        options={{
          drawerLabel: "Timer",
          title: "Timer",
          drawerIcon: () => (
            <MaterialIcons name="timer" size={20} color="#808080" />
          ),
        }}
        component={Timer}
      />
      <Drawer.Screen
        name="Categories"
        options={{
          drawerLabel: "Categories",
          title: "Categories",
          drawerIcon: () => (
            <MaterialIcons name="category" size={20} color="#808080" />
          ),
        }}
        component={Categories}
      />
      <Drawer.Screen
        name="Customize"
        options={{
          drawerLabel: "Customize",
          title: "Customize",
          drawerIcon: () => (
            <MaterialIcons
              name="dashboard-customize"
              size={20}
              color="#808080"
            />
          ),
        }}
        component={Customize}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          drawerIcon: () => (
            <SimpleLineIcons name="settings" size={20} color="#808080" />
          ),
        }}
        component={Settings}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          drawerStyle: {
            backgroundColor: "#fff",
            width: 250,
          },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Drawer.Screen name="Main" component={MainStackNavigator} />
        <Drawer.Screen
          name="DrawerMenu"
          options={{
            drawerLabel: "Menu",
            title: "Menu",
          }}
          component={DrawerMenuNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
