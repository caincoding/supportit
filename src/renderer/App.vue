<template>    
  <md-app>
    <md-app-toolbar class="md-primary md-dense" md-elevation="0">
      <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
        <md-icon>menu</md-icon>
      </md-button>
      <div class="dragbar">
        <div class="spacer md-title">SUPPORT IT</div>
        <div class="minmax">        
          <span @click="min"><md-icon class="sizespace">remove</md-icon></span>
          <span @click="max"><md-icon class="sizespace">crop_5_4</md-icon></span>
          <span @click="active = true">
            <md-dialog-confirm
              :md-active.sync="active"
              md-title="ARE YOU SURE YOU WANT TO QUIT?"
              md-confirm-text="YES"
              md-cancel-text="NO"
              @md-cancel="onCancel"
              @md-confirm="onConfirm" />
            <md-icon class="sizespace">clear</md-icon></span>
        </div>
      </div>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-headline">Navigation</span>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button md-dense" @click="toggleMenu">
            <md-icon>keyboard_arrow_left</md-icon>
          </md-button>
        </div>
      </md-toolbar>

      <md-list>
        <router-link to="/" tag="md-list-item" exact>
          <md-icon class="dark">home</md-icon>
          <span class="md-list-item-text">Home</span>
        </router-link>

        <router-link to="/ticket" tag="md-list-item">
          <md-icon class="dark">note_add</md-icon>
          <span class="md-list-item-text">Create Ticket</span>
        </router-link>
        
        <router-link to="/kb" tag="md-list-item">
          <md-icon class="dark">import_contacts</md-icon>
          <span class="md-list-item-text">Knowledge Base</span>
        </router-link>

        <router-link to="/messages" tag="md-list-item">
          <md-icon class="dark">email</md-icon>
          <span class="md-list-item-text">Messages</span>
        </router-link>

        <router-link to="/chat" tag="md-list-item">
          <md-icon class="dark">forum</md-icon>
          <span class="md-list-item-text">Chat</span>
        </router-link>

        <router-link to="/terminal" tag="md-list-item">
          <md-icon class="dark">gradient</md-icon>
          <span class="md-list-item-text">Terminal</span>
        </router-link>

        <router-link to="/settings" tag="md-list-item">
          <md-icon class="dark">settings</md-icon>
          <span class="md-list-item-text">Settings</span>
        </router-link>

        <router-link to="/about" tag="md-list-item">
          <md-icon class="dark">info</md-icon>
          <span class="md-list-item-text">About</span>
        </router-link>

        <md-list-item @click="active = true">
          <md-icon class="dark">power_settings_new</md-icon>
          <span class="md-list-item-text">Close Application</span>
          <md-dialog-confirm
            :md-active.sync="active"
            md-title="ARE YOU SURE YOU WANT TO QUIT?"
            md-confirm-text="YES"
            md-cancel-text="NO"
            @md-cancel="onCancel"
            @md-confirm="onConfirm" />
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <router-view />
    </md-app-content>
  </md-app>
</template>

<script>
  import { remote } from 'electron'
  export default {
    data: () => ({
      menuVisible: false,
      w: remote.getCurrentWindow(),
      active: false
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      min () {
        this.w.minimize()
      },
      max () {
        if (this.w.isMaximized() !== true) {
          this.w.maximize()
        } else {
          this.w.unmaximize()
        }
      },
      close () {
        this.w.close()
      },
      onCancel () {
        this.active = false
      },
      onConfirm () {
        close()
      }
    }
  }
</script>

<style lang="scss">
  @import "~vue-material/dist/theme/engine"; // Import the theme engine

  @include md-register-theme("default", (
    primary: md-get-palette-color(red, A700), // The primary color of your application
    accent: md-get-palette-color(pink, A400), // The accent or secondary color
    theme: light
  ));

  @import "~vue-material/dist/theme/all"; // Apply the theme
</style>


