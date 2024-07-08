import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import Colors from '../../constants/Colors';
import { useColorScheme } from '../../hooks/useColorScheme';
import { useClientOnlyValue } from '../../hooks/useClientOnlyValue';

type TabBarIconProps = {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
};

function TabBarIcon({ name, color }: TabBarIconProps) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} name={name} color={color} />;
}

const TabLayout: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Journaling app',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable>
              {({ pressed }) => (
                <FontAwesome
                  name="info-circle"
                  size={25}
                  color={Colors[colorScheme ?? 'light'].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
