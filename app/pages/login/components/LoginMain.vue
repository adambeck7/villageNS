 <template>
 <FlexboxLayout ~mainContent flexDirection="column">
                <TextField hint="Username" height="70" v-model="email" :rules="emailRules" label="E-mail" required></TextField>

          <TextField height="70"
            v-model="password"
            :append-icon="show1 ? 'visibility_off' : 'visibility'"
            :rules="[rules.required, rules.min]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="Password"
            counter
            @tap:append="show1 = !show1"
          ></TextField>
          <Button dark color="#55ab59" @tap="login">Login</Button>
          <Button dark color="#55ab59" @tap="checkCheck">Check Auth</Button>
                <!-- <TextField
                    hint="E-mail adres"
                    keyboardType="email"
                    returnKeyType="next"
                    @returnPress="focusPassword()"
                    v-model="user.email"
                    autocorrect="false"
                    autocapitalizationType="none"
                    row="0"></TextField>

                <TextField ref="password"
                            hint="Wachtwoord"
                            secure="true"
                            returnKeyType="done"
                            @returnPress="login()"
                            v-model="user.password"
                            row="1"></TextField> -->
<!-- 
                <ActivityIndicator :busy="isAuthenticating" rowSpan="2" width="30" height="30"></ActivityIndicator> -->
            </FlexboxLayout>
    </template>

    <script >
// import firebase from "firebase";
  import routes from "~/router";
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
export default {
  name: "login-main",
  data() {
    return {
    msg: "test!",
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      show1: false,
      show2: true,
      show3: false,
      show4: false,
    //   password: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () => "The email and password you entered don't match"
      }
    };
  },
  methods: {
    login: function() {
        // alert('Your message')
        //     .then(() => {
        //         console.log("Alert dialog closed.");
        //     });
    firebase.login(
      {
        type: firebase.LoginType.PASSWORD,
        passwordOptions: {
          email: this.email,
          password: this.password
        }
      })
      .then(result => JSON.stringify(result))
      .catch(error => console.log(error));
    //   firebase
    //     .auth()
    //     .signInWithEmailAndPassword(this.email, this.password)
    //     .then(
    //       // eslint-disable-next-line
    //       loginPacket => {
    //         // here we commit the uid to our store...
    //         this.$store.commit('setUser', loginPacket.user.uid);
    //         // and get user details from firebase to move to the store as well.
    //         firebase.firestore()
    //           .collection('userDetails')
    //           .doc(loginPacket.user.uid)
    //           .get()
    //           .then(userDetails => {
    //             this.$store.commit('setUserInformation', userDetails.data());
    //             console.log('userDetails: ');
                
    //           })
    //           .catch(err => console.log({err}));

    //         this.$router.replace("home");
    //       },
    //       err => {
    //         alert("Oops. " + err.message);
    //       }
    //     );
    },
    checkCheck: function(){
        firebase.getCurrentUser()
            .then(user => console.log("User uid: " + user.uid))
            .catch(error => console.log("Trouble in paradise: " + error));
    }
  }
};
</script>