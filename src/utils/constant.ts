/**
 * 性别
 */
export const SEXLIST = [
  { id: -1, name: '全部' },
  { id: 0, name: '男' },
  { id: 1, name: '女' },
]

/**
 * vip等级
 */
export const VIPLEVEL = [
  { value: '-1', label: '全部' },
  { value: 'VIP', label: 'VIP' },
  { value: 'SVIP', label: 'SVIP' },
]

/**
 * 创作等级
 */
export const CREATELEVEL = [
  { value: '-1', label: '全部' },
  { value: '1', label: '一级' },
  { value: '2', label: '二级' },
  { value: '3', label: '三级' },
  { value: '4', label: '四级' },
  { value: '5', label: '五级' },
  { value: '6', label: '六级' },
]

/**
 * 审核状态
 */
export const AUTHSTATUSLIST = [
  { value: '-1', label: '全部' },
  { value: '1', label: '通过' },
  { value: '0', label: '不通过' },
]

/**
 * 直播状态
 */
export const LIVETATUSLIST = [
  { value: '-1', label: '全部' },
  { value: '1', label: '直播中' },
  { value: '0', label: '已结束' },
]

/**
 * 分类
 */

export const CATEGORY = [
  { value: '分类一', label: '分类一' },
  { value: '分类二', label: '分类二' },
  { value: '分类三', label: '分类三' },
]

export const INFOLIST = [
  { name: '项目名称', desc: 'hashMi Admin', span: 1 },
  { name: '开始时间', desc: '2023-10-30', span: 1 },
  { name: '参与人员', desc: 'hashMi', span: 1 },
  { name: 'qq号', desc: '854059946', span: 1 },
  {
    name: '哈希米的博客',
    desc: 'https://new-blog-two-ruddy.vercel.app/',
    span: 2,
    isLink: true,
  },
  {
    name: 'github',
    desc: 'https://github.com/Pozhan-js',
    span: 2,
    isLink: true,
  },
  {
    name: '业务范围',
    span: 2,
    desc: '后台管理系统、小程序、脚手架、组件库、文档平台、大屏可视化、uniapp等等',
  },
  {
    span: 2,
    name: '技术栈',
    desc: 'React、Vue、Next、Nuxt、Nest、Element-Plus、echarts',
  },
  // {
  //   span: 2,
  //   name: '白哥github',
  //   desc: 'https://github.com/xiumubai',
  //   isLink: true,
  // },
]

export const OPTIONSLIST = [
  {
    name: '工作台',
    icon: 'HomeFilled',
    link: '/index',
    color: '#68c755',
  },
  {
    name: '监控台',
    icon: 'DataAnalysis',
    link: '/index/workbench',
    color: '#7238d1',
  },
  {
    name: '权限管理',
    icon: 'Setting',
    link: '/acl/user',
    color: '#f06b96',
  },
  {
    name: '列表',
    icon: 'Tickets',
    link: '/list/basic',
    color: '#fab251',
  },
]
