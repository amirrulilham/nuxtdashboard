<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <!-- <v-container> -->
      <div>
        <v-img src="425-510x300.jpg" aspect-ratio="1.7" contain></v-img>
      </div>
      <v-list flat>
        <template v-for="list in lists">
          <v-subheader v-if="list.subheader" :key="list.subheader">{{
            list.subheader
          }}</v-subheader>
          <template v-for="nav in list.navs">
            <v-list-item-group color="primary" :key="nav.index">
              <v-list-item :to="nav.to">
                <v-list-item-icon>
                  <v-icon>{{ nav.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>{{ nav.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </template>
        </template>
        <!-- --------------------- example guide -------------------------- -->
        <!-- <v-subheader>Management</v-subheader>
        <v-list-item-group color="primary">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-post-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>DataTable</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group> -->
        <!-- --------------------- example guide -------------------------- -->
      </v-list>
      <!-- </v-container> -->
    </v-navigation-drawer>

    <v-app-bar
      color="primary"
      class="mx-4 mt-3"
      style="border-radius: 8px;"
      dark
      dense
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="d-lg-none" />
      <v-toolbar-title>Nuxt Tuto</v-toolbar-title>
      <v-spacer />
      <div>
        <v-row justify="center" align="center">
          <div class="d-none d-sm-flex">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" @click="profileDialog = true" icon>
                  <v-icon>mdi-account</v-icon>
                </v-btn>
              </template>
              <span>Profile</span>
            </v-tooltip>
          </div>
          <div class="d-none d-sm-flex">
            <v-btn @click="logout" text>
              <v-icon left>mdi-logout-variant</v-icon>
              Logout
            </v-btn>
          </div>
          <div class="d-sm-none">
            <v-menu offset-y>
              <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                  <v-icon dark>mdi-dots-vertical</v-icon>
                </v-btn>
              </template>
              <v-list dense>
                <v-list-item
                  v-for="(item, index) in toolmenus"
                  :key="index"
                  @click.stop=""
                >
                  <v-list-item-title
                    class="d-flex align-center justify-space-around"
                  >
                    <v-icon left>{{ item.icon }}</v-icon
                    >{{ item.title }}</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-row>
        <v-dialog
          v-model="profileDialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card tile>
            <v-toolbar color="primary" dark dense>
              <v-toolbar-title>Profile</v-toolbar-title>
              <v-spacer />
              <v-btn @click.stop="profileDialog = false" dark icon>
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
          </v-card>
        </v-dialog>
      </div>
    </v-app-bar>

    <v-content class="mt-3">
      <v-container>
        <v-container>
          <Alert
            :alertShow="alert.show"
            :dismissible="alert.dismissible"
            :color="alert.color"
            :elevation="alert.elevation"
            :border="alert.border"
            :coloredBorder="alert.coloredBorder"
            :icon="alert.icon"
            :alertText="alert.alertText"
          />
        </v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Alert from "../components/alert";
import { mapGetters } from "vuex";
export default {
  components: {
    Alert
  },
  data() {
    return {
      drawer: true,
      profileDialog: false,
      // toolsmenu
      toolmenus: [
        {
          icon: "mdi-account",
          title: "Profile"
        },
        {
          icon: "mdi-logout-variant",
          title: "Logout"
        }
      ],
      lists: [
        {
          subheader: null,
          navs: [
            {
              icon: "mdi-poll-box",
              title: "Dashboard",
              to: "/"
            }
          ]
        },
        {
          subheader: "Management",
          navs: [
            {
              icon: "mdi-post-outline",
              title: "DataTable",
              to: "datatable"
            },
            {
              icon: "mdi-package-variant-closed",
              title: "Stock",
              to: "/stock"
            }
          ]
        },
        {
          subheader: "Operation",
          navs: [
            {
              icon: "mdi-pencil-box-multiple-outline",
              title: "Add / Edit",
              to: "addedit"
            }
          ]
        }
      ],
      // alert: {
      //   show: true,
      //   dismissible: true,
      //   color: "cyan",
      //   border: "left",
      //   elevation: 2,
      //   coloredBorder: true,
      //   icon: "mdi-alert-circle",
      //   alertText: "You've got <strong>5</strong> new updates on your timeline!"
      // }
    };
  },
  computed: {
    ...mapGetters({
      alert: 'alert/getAlert'
    })
  },
  methods: {
    logout() {
      alert("user logged out");
    }
  }, 
  created(){
    // this.$store.commit('alert/showAlert', `You've got <strong>5</strong> new updates on your timeline!`)
  }
};
</script>

<style></style>
