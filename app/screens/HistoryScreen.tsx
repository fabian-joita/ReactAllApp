//trebuie sa adaug useeffectul pentru randarea listei dupa ce ia datele din storage

import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import ListaNotite, { Notita } from "../observer";
import { storage } from "./TodayScreen";

type ItemProps = { title: string; date: string; hour: string };

const Item = ({ title, date, hour }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{date}</Text>
    <Text style={styles.hour}>{hour}</Text>
  </View>
);

const HistoryScreen = () => {
  const [notes, setNotes] = useState<Notita[]>([]);

  useEffect(() => {
    const jsonNotes = storage.getString("notite") ?? "[]";
    const NotesObject: Notita[] = JSON.parse(jsonNotes);
    ListaNotite.setNotite(NotesObject);

    console.log(NotesObject);

    const handleUpdate = (notite: Notita[]) => {
      setNotes(notite);
    };

    ListaNotite.subscribe(handleUpdate);

    return () => {
      ListaNotite.unsubscribe(handleUpdate);
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        renderItem={({ item }) => (
          <Item title={item.text} date={item.data} hour={item.ora} />
        )}
        keyExtractor={(item) => item.id}
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
