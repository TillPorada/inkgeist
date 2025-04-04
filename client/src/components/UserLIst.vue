<template>
  <v-container>
    <!-- Header Card -->
    <v-card class="mb-4">
      <v-card-title>
        <v-row class="w-100 justify-space-between align-center">
          <span>User List</span>
          <v-btn color="primary" @click="openCreateModal">
            <v-icon left>mdi-plus</v-icon> Add User
          </v-btn>
        </v-row>
      </v-card-title>
      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="users"
          item-value="_id"
          class="elevation-1"
        >
          <template #item.actions="{ item }">
            <v-btn icon @click="openEditModal(item)">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon @click="deleteUser(item._id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card-text>
    </v-card>

    <!-- Create/Edit Modal -->
    <v-dialog v-model="editDialog" max-width="500">
      <v-card>
        <v-card-title>
          {{ editedUser._id ? 'Edit User' : 'Create User' }}
        </v-card-title>
        <v-card-text>
          <v-form ref="editForm" v-model="isFormValid">
            <v-text-field
              v-model="editedUser.name"
              label="Name"
              :rules="[v => !!v || 'Name is required']"
              required
            />
            <v-text-field
              v-model="editedUser.email"
              label="Email"
              :rules="[v => !!v || 'Email is required', v => /.+@.+\..+/.test(v) || 'E-Mail must be valid']"
              required
            />
            <v-text-field
              v-model="editedUser.password"
              label="Password"
              type="password"
              :rules="editedUser._id ? [] : [v => !!v || 'Password is required']"
              :required="!editedUser._id"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn text @click="closeModal">Cancel</v-btn>
          <v-btn color="primary" :loading="loading" @click="saveUser">
            {{ editedUser._id ? 'Save' : 'Create' }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar für Status -->
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" timeout="3000">
      {{ snackbar.message }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const users = ref([])
const editDialog = ref(false)
const editedUser = ref({
  _id: '',
  name: '',
  email: '',
  password: '',
})
const isFormValid = ref(false)
const loading = ref(false)
const snackbar = ref({
  show: false,
  message: '',
  color: 'success',
})

const headers = [
  { text: 'Name', value: 'name' },
  { text: 'Email', value: 'email' },
  { text: 'Actions', value: 'actions', sortable: false },
]

const fetchUsers = async () => {
  try {
    const res = await axios.get('https://inkgeist-production.up.railway.app/api/users')
    users.value = res.data
  } catch (err) {
    showSnackbar('Failed to load users', 'error')
  }
}

const deleteUser = async (id: string) => {
  try {
    await axios.delete(`https://inkgeist-production.up.railway.app/api/users/${id}`)
    showSnackbar('User deleted', 'success')
    fetchUsers()
  } catch (err) {
    showSnackbar('Failed to delete user', 'error')
  }
}

const openEditModal = (user: any) => {
  editedUser.value = { ...user, password: '' }
  editDialog.value = true
}

const openCreateModal = () => {
  editedUser.value = { _id: '', name: '', email: '', password: '' }
  editDialog.value = true
}

const closeModal = () => {
  editDialog.value = false
  loading.value = false
}

const saveUser = async () => {
  const form = (await editForm.value) as any
  if (!form.validate()) return

  loading.value = true
  const { _id, name, email, password } = editedUser.value
  const payload: any = { name, email }
  if (password) payload.password = password

  try {
    if (_id) {
      await axios.put(`https://inkgeist-production.up.railway.app/api/users/${_id}`, payload)
      showSnackbar('User updated', 'success')
    } else {
      await axios.post(`https://inkgeist-production.up.railway.app/api/users`, payload)
      showSnackbar('User created', 'success')
    }
    closeModal()
    fetchUsers()
  } catch (err) {
    showSnackbar('Error saving user', 'error')
  } finally {
    loading.value = false
  }
}

const editForm = ref()

const showSnackbar = (message: string, color: string) => {
  snackbar.value = {
    show: true,
    message,
    color,
  }
}

onMounted(fetchUsers)
</script>
