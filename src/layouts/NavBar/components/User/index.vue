<template>
  <el-dropdown @visible-change="onChange" @command="handleCommand">
    <div class="avatar-dropdown">
      <img class="user-avatar" :src="avatar" alt="" />
      <div class="user-name">{{ name }}</div>
      <el-icon class="up-down">
        <component :is="visible ? 'ArrowUp' : 'ArrowDown'" />
      </el-icon>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="logout">
          <!-- <svg-icon name="logout" size="16px" /> -->
          <IconifyIcon icon="ri:logout-circle-r-line" height="14" />
          <span>退出登陆</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import { ArrowUp, ArrowDown } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { LOGIN_URL } from '@/config/config'

const router = useRouter()
const route = useRoute()
const userStore = useUserStore()

const { name, avatar } = userStore.userInfo || {}
const visible = ref(false)

function onChange(show: boolean) {
  visible.value = show
}

function handleCommand(command: string) {
  if (command === 'logout') {
    logout()
  }
}

// 退出登陆
function logout() {
  ElMessageBox.confirm('您确定要退出吗？', '提示', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning',
  }).then(async () => {
    await userStore.Logout()
    router.push({ path: LOGIN_URL, query: { redirect: route.fullPath } })
    ElMessage.success('退出成功！')
  })
}
</script>

<style scoped lang="scss">
.avatar-dropdown {
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  height: 50px;
  padding: 0;

  .user-avatar {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 50%;
  }

  .user-name {
    position: relative;
    margin: 0 6px;
    cursor: pointer;
  }
}
</style>
