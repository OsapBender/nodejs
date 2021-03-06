const socket = io();

Vue.component("chat-message", {
  props: ["message", "user"],
  template: `
    <div class="message" :class="{'owner' : message.id === user.id}">
        <div class="message-content">
            {{message.name}}: {{message.text}}
        </div>
    </div>`,
});

new Vue({
  el: "#app",
  data: {
    message: "",
    messages: [],
    user: {
      id: "",
      room: "",
    },
  },
  methods: {
    sendMessage() {
      const message = {
        text: this.message,
        name: this.user.name,
        id: this.user.id,
      };
      socket.emit("message:create", message, (err) => {
        if (err) return console.error("Ошибка " + err);
        this.message = "";
      });
    },
    initializeConnection() {
      socket.on("message:new", (message) => {
        this.messages.push(message);
      });
    },
  },
  created() {
    const params = window.location.search.split("&");
    const name = params[0].split("=")[1].replace("+", " ");
    const room = params[1].split("=")[1].replace("+", " ");
    this.user = { name, room };
  },
  mounted() {
    socket.emit("join", this.user, (data) => {
      if (typeof data === "string") return console.error(data);
      this.user.id = data.userId;
      this.initializeConnection();
    });
  },
});
