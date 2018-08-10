<template>
  <div>
    <form>
      <md-card>
        <md-card-header>
            <div class="md-title">Ticket#: 7029384</div>
        </md-card-header>
          <md-divider />
          <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="first-name">First Name</label>
                <md-input name="first-name" id="first-name" />
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="last-name">Last Name</label>
                <md-input name="last-name" id="last-name" />
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="department">Department</label>
                <md-select name="department" id="department">
                  <md-option></md-option>
                  <md-option value="windows">Windows</md-option>
                  <md-option value="linux">Linux</md-option>
                </md-select>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field>
                <label for="severity">Severity</label>
                <md-input type="number" id="severity" name="severity" />
              </md-field>
            </div>
          </div>

          <md-field>
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" />
            <span class="md-error">The email is required</span>
            <span class="md-error">Invalid email</span>
          </md-field>

          <md-field>
            <label>Notes</label>
            <md-textarea md-autogrow></md-textarea>
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit">Create Ticket</md-button>
          <md-button type="submit" class="md-primary">Cancel Ticket</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Ticket',
    data: () => ({
    })
  }
</script>
