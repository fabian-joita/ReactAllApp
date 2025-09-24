//de implementat ket pentru liste
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
import ListaNotite, { Notita } from "../observer";
export const storage = new MMKV();

const TodayScreen = () => {
  const textRef = useRef<string>("");
  const [notes, setNotes] = useState<Notita[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    //aici am intrebare
    //sa mai setez si notes prin useState imediat ?
    const jsonNotes = storage.getString("notite") ?? "[]";
    const NotesObject: Notita[] = JSON.parse(jsonNotes);
    //console.log(NotesObject);
    //setNotes(NotesObject)
    ListaNotite.setNotite(NotesObject);
    setReady(true);
  }, []);

  useEffect(() => {
    // callback care actualizeaza state-ul local cu noile notite
    const handleUpdate = (notite: Notita[]) => {
      setNotes(notite);
      storage.set("notite", JSON.stringify(notite));
    };

    ListaNotite.subscribe(handleUpdate);

    //trebuie sa fac unsubscrie pentru a nu ajunge la pierderi de memorie
    //e mai optim sa am mai putine componente care urmaresc subiectu
    return () => {
      console.log(
        "Componenta se demonteaza, deci se va apela si handleUnsubscribe"
      );
      ListaNotite.unsubscribe(handleUpdate);
    };
  }, [ready]);

  // functie care returneaza textul din input
  function handleClick() {
    return textRef.current;
  }

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <TextInput
          placeholder="New note"
          style={styles.input}
          onChangeText={(text) => (textRef.current = text)}
        />
        <Button
          title="Add Note"
          onPress={() => {
            const now = new Date();
            const text = handleClick().trim();
            if (text) {
              const note: Notita = {
                id: Date.now().toString(),
                text,
                data: now.toLocaleDateString("ro-RO"),
                ora: now.toLocaleTimeString("ro-RO", {
                  hour: "2-digit",
                  minute: "2-digit",
                }),
              };
              ListaNotite.addNotita(note);
              textRef.current = "";
            }
          }}
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={notes}
          renderItem={({ item }) => <Item title={item.text} hour={item.ora} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const Item = ({ title, hour }: { title: string; hour: string }) => (
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
