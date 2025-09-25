// TODO: Add a useEffect to render the list after fetching data from sthourge

import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import NotesList, { Note } from "../observer";
import { sthourge } from "./TodayScreen";

type ItemProps = { title: string; date: string; hour: string };

const Item = ({ title, date, hour }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{date}</Text>
    <Text style={styles.hour}>{hour}</Text>
  </View>
);

const HistoryScreen = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const jsonNotes = sthourge.getString("noteInList") ?? "[]";
    const NotesObject: Note[] = JSON.parse(jsonNotes);
    NotesList.setNotes(NotesObject);

    console.log(NotesObject);

    const handleUpdate = (notes: Note[]) => {
      setNotes(notes);
    };

    NotesList.subscribe(handleUpdate);

    return () => {
      NotesList.unsubscribe(handleUpdate);
    };
  }, []);

  const renderItem = useCallback(
    ({ item }: { item: Note }) => (
      <Item title={item.text} date={item.data} hour={item.hour} />
    ),
    []
  );

  const keyExtractor = useCallback((item: Note) => item.id, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default HistoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 4,
  },
  hour: {
    fontSize: 16,
    color: "#666",
  },
});
