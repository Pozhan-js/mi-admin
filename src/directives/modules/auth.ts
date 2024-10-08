/**
 * v-auth
 * 按钮权限指令
 */
import { useAuthStore } from '@/store/modules/auth'
import type { Directive, DirectiveBinding } from 'vue'

const auth: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const { value } = binding
    const authStore = useAuthStore()
    const currentPageRoles = authStore.authButtonList ?? []
    if (value instanceof Array && value.length) {
      const hasPermission = value.every((item) =>
        currentPageRoles.includes(item),
      )
      // 没有权限移除元素
      if (!hasPermission) el.remove()
    } else {
      // 没有权限移除元素
      if (!currentPageRoles.includes(value)) el.remove()
    }
  },
}

export default auth
