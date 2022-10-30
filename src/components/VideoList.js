import { Menu, MenuItem, View,TabItem,Tabs } from '@aws-amplify/ui-react';
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  Collection,
  Card,
  Image,

  withAuthenticator,
} from "@aws-amplify/ui-react";


const VideoList = () => {

  return (
    <Collection

    type="list"
    direction="row"
    gap="20px"
    wrap="nowrap"

      items={[
        {
          title: 'Fiordland National Park',
          description:
            'This national park includes the famous fjords of Milford, Dusky and Doubtful Sounds.',
        },
        {
          title: 'Bay of Islands, North Island',
          description:
            'Three hours north of Auckland, this area features over 144 islands to explore.',
        },
        {
          title: 'Queenstown, South Island',
          description:
            "This hopping town is New Zealand's adventure capital and is located right on Lake Wakatipu.",
        },
      ]}

    >
      {(item, index) => (
        <Card key={index} padding="1rem">
           <Image
        src="https://ui.docs.amplify.aws/road-to-milford-new-zealand-800w.jpg"
        alt="Glittering stream with old log, snowy mountain peaks tower over a green field."
      />
          <Heading level={4}>{item.title}</Heading>
          <Text>{item.description}</Text>
        </Card>
      )}
    </Collection>
  );

}


export default VideoList;