export type Note = {
  id: string;
  text: string;
  data: string;
  hour: string;
};

type Subscriber = (notes: Note[]) => void;

const NotesList: {
  notes: Note[];
  subscribers: Subscriber[];

  subscribe: (callback: Subscriber) => void;
  unsubscribe: (callback: Subscriber) => void;

  setNotes: (notes: Note[]) => void;
  addNote: (Note: Note) => void;
  clearNotes: () => void;
  getNotes: () => Note[];
  notify: () => void;
} = {
  notes: [],
  subscribers: [],

  // I can write `this.` instead of the subscribers list, referring to the current object
  notify() {
    // Return a copy of all subscribers

    this.subscribers.forEach((callback) => callback([...this.notes])); //callback for observer
  },

  subscribe: (callback: Subscriber) => {
    NotesList.subscribers.push(callback);
    // Send current state to new subscriber
    callback([...NotesList.notes]);
  },

  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter((cb) => cb !== callback);
  },

  addNote(Note) {
    this.notes.push(Note);
    this.notify();
  },

  clearNotes() {
    this.notes = [];
    this.notify();
  },

  getNotes() {
    return [...this.notes];
  },

  setNotes(vect) {
    this.notes = vect;
    this.notify();
  },
};

export default NotesList;
