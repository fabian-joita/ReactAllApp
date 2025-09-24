export type Notita = {
  id: string;
  text: string;
  data: string;
  ora: string;
};

type Subscriber = (notite: Notita[]) => void;

const ListaNotite: {
  notite: Notita[];
  subscribers: Subscriber[];

  subscribe: (callback: Subscriber) => void;
  unsubscribe: (callback: Subscriber) => void;

  setNotite: (notite: Notita[]) => void;
  addNotita: (notita: Notita) => void;
  clearNotite: () => void;
  getNotite: () => Notita[];
  notify: () => void;
} = {
  notite: [],
  subscribers: [],

  //pot scrie this. in loc de Lista subscribers facand referinta la obiectul curent
  notify() {
    // Trimite o copie a listei tuturor subscriberilor
    this.subscribers.forEach((callback) => callback([...this.notite])); //callback apel la functia observer
  },

  subscribe(callback) {
    this.subscribers.push(callback);
    // Trimite imediat starea curentă la noul subscriber
    callback([...this.notite]);
  },

  unsubscribe(callback) {
    this.subscribers = this.subscribers.filter((cb) => cb !== callback);
  },

  addNotita(notita) {
    this.notite.push(notita);
    this.notify();
  },

  clearNotite() {
    this.notite = [];
    this.notify();
  },

  getNotite() {
    return [...this.notite];
  },

  setNotite(vect) {
    this.notite = vect;
    this.notify();
  },
};

export default ListaNotite;
