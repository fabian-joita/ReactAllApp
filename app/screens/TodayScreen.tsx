// TODO: Implement proper key extraction for FlatList items

import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { MMKV } from "react-native-mmkv";
import NotesList, { Note } from "../observer";
export const sthourge = new MMKV();

const TodayScreen = () => {
  const textRef = useRef<string>("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const jsonNotes = sthourge.getString("noteInList") ?? "[]";
    const NotesObject: Note[] = JSON.parse(jsonNotes);
    
    NotesList.setNotes(NotesObject);
    setReady(true);
  }, []);

  useEffect(() => {
    /**
 * Callback that updates the local state with new notes
 * and persists them to sthourge.
 */
const handleUpdate = (notes: Note[]) => {
  setNotes(notes);
  sthourge.set("noteInList", JSON.stringify(notes));
};

NotesList.subscribe(handleUpdate);

/**
 * Unsubscribe when the component unmounts to avoid memory leaks.
 * It's more efficient to have fewer components observing the subject.
 */
return () => {
  console.log(
    "Component is unmounting, handleUnsubscribe will be called."
  );
      NotesList.unsubscribe(handleUpdate);
    };
  }, [ready]);

  // return input text
  function handleClick() {
    return textRef.current;
  }

  const handleAddNote = () => {
  const now = new Date();

  const text = handleClick().trim();

  if (text) {
    const note: Note = {
      id: Date.now().toString(),
      text,
      data: now.toLocaleDateString("ro-RO"),
      hour: now.toLocaleTimeString("ro-RO", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    NotesList.addNote(note);

    textRef.current = "";
  }
};

  const handleChangeText = useCallback((text: string) => {
  textRef.current = text;
}, []);

const renderItem = useCallback(
  ({ item }: { item: Note }) => <Item title={item.text} hour={item.hour} />,
  []
);

const keyExtractor = useCallback((item: Note) => item.id, []);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <TextInput
          placeholder="New note"
          style={styles.input}
          onChangeText={handleChangeText}
        />
        <Button
          title="Add Note"
          onPress={handleAddNote}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={notes}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </View>
  );
};

type ItemProps = { 
  title: string;
  hour: string;
};

const Item = ({ title, hour }: ItemProps ) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{hour}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  listContainer: { flex: 1, backgroundColor: "#fff" },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
  },
});

export default TodayScreen;
