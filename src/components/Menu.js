import { Menu, MenuItem, View,TabItem,Tabs } from '@aws-amplify/ui-react';

export default  () => {
  return (
    <View width="4rem">
      <Menu>
        <MenuItem>Option 1</MenuItem>
        <MenuItem>Option 2</MenuItem>
        <MenuItem>Option 3</MenuItem>
      </Menu>
      <Tabs>
        <TabItem title="Tab 1">Tab 1 Content</TabItem>
        <TabItem title="Tab 2">Tab 2 Content</TabItem>
    </Tabs>
    </View>
  );
};