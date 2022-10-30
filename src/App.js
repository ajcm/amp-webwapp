import React, { useState, useEffect } from "react";
import { Menu, MenuItem, View,TabItem,Tabs, Grid, Card, Link } from '@aws-amplify/ui-react';
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";

import VideoList from './components/VideoList'

import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,

  withAuthenticator,
} from "@aws-amplify/ui-react";

import { listNotes } from "./graphql/queries";

import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";

const App = ({ signOut }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("name"),
      description: form.get("description"),
    };
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  return (
    <View className="App">


      <Template/>


    </View>
  );
};

//export default withAuthenticator(App);


const Template = () => {

  return (
  <Grid
    columnGap="0.5rem"
    rowGap="0.5rem"
    templateColumns="1fr 1fr 1fr"
    templateRows="1fr 3fr 1fr"
  >
    <Card
      columnStart="1"
      columnEnd="-1"
      backgroundColor={"lightgray"}
    >
      <Heading level={1}>My Site</Heading>
      <NavBar />
    </Card>
    
    <Card
      columnStart="1"
      columnEnd="2"
      backgroundColor={"lightgray"}
    >
      Nav
    </Card>
    
    <Card
      columnStart="2"
      columnEnd="-1"
      backgroundColor={"lightgray"}
    >
      <VideoList/>
    </Card>
    
    <Card
      columnStart="1"
      columnEnd="-1"
      backgroundColor={"lightgray"}
    >
      Footer
    </Card>

  </Grid>)
}

const NavBar = () => {
  return (


<Flex
  direction="row"
  justifyContent="center"
  alignItems="center"
  alignContent="center"
  wrap="nowrap"
  gap="2rem"
>

      <Link
      href="https://ui.docs.amplify.aws/react/components/link"
      color="#007EB9"
      >
      My Demo Link
      </Link>

      <Link
      href="https://ui.docs.amplify.aws/react/components/link"
      color="#007EB9"
      >
      My Demo Link
      </Link>

      
      <Link
      href="https://ui.docs.amplify.aws/react/components/link"
      color="#007EB9"
      >
      My Demo Link
      </Link>

      
      <Link
      href="https://ui.docs.amplify.aws/react/components/link"
      color="#007EB9"
      >
      My Demo Link
      </Link>
    </Flex>
    
 
  );
};

export default App;