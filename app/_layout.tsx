import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="tracker"
        options={{
          title: 'Tracker',
        }}
      />
      <Tabs.Screen
        name="napblog"
        options={{
          title: 'Napblog',
        }}
      />
      <Tabs.Screen
        name="nappers"
        options={{
          title: 'Nappers',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}