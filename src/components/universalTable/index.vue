<template>
  <div class="table-wrap" ref="tableWrap">
    <el-table
      class="w100 h100"
      :data="tableInfo.tableData"
      :height="tableHeight"
      v-bind="attrs"
    >
      <!-- 动态生成列 -->
      <template v-for="(item, index) in columns" :key="index">
        <!-- 选择列 -->
        <el-table-column
          v-if="item.type == 'selection'"
          type="selection"
          v-bind="item"
        >
        </el-table-column>

        <!-- 普通列 -->
        <el-table-column v-else-if="!item.subColumns" v-bind="item">
          <template #default="scope">
            <slot :name="item.prop" :scope="scope">
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>

        <!-- 嵌套列 -->
        <el-table-column v-else v-bind="item">
          <el-table-column
            v-for="(child, childIndex) in item.subColumns"
            :key="childIndex"
            v-bind="child"
          >
            <template #default="scope">
              <slot :name="child.prop" :scope="scope">
                {{ scope.row[child.prop] }}
              </slot>
            </template>
          </el-table-column>
        </el-table-column>
      </template>
    </el-table>
    <el-pagination
      :page-sizes="pageSizes"
      :current-page="page.currentPage"
      :page-size="page.pageSize"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableInfo.total"
      @size-change="
        handleChangePage({
          currentPage: page.currentPage,
          pageSize: $event,
        })
      "
      @current-change="
        handleChangePage({
          currentPage: $event,
          pageSize: page.pageSize,
        })
      "
    />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Props 接收
const { tableInfo, columns, pageSizes, ...props } = defineProps({
  tableInfo: {
    type: Object,
    default: () => {
      return {
        tableData: [],
        total: 0,
      };
    },
  },
  columns: {
    type: Array,
    default: () => [],
  },
  pageSizes: {
    type: Array,
    default: () => [10, 25, 50, 100],
  },
}); 
const emit =  defineEmits(["current-change"]);
// 获取其他绑定属性
const { attrs } = getCurrentInstance();

// 引用
const tableWrap = ref(null);
const tableHeight = ref(50); // 默认高度
let resizeObserver = null;

//分页
const page = ref({
  currentPage: 1,
  pageSize: 10,
});

//函数
const handleChangePage = ({ currentPage, pageSize }) => {
  page.value.currentPage = currentPage;
  page.value.pageSize = pageSize;
  emit("current-change", { currentPage, pageSize});
};

// 动态计算表格高度
const initResizeObserver = () => {
  if (!tableWrap.value) return;
  //   32是分页高度 10和分页的间隔
  resizeObserver = new ResizeObserver(() => {
    tableHeight.value = tableWrap.value.offsetHeight - 32 - 10 || 500;
  });

  resizeObserver.observe(tableWrap.value);
};

// 生命周期
onMounted(() => initResizeObserver());
onUnmounted(() => resizeObserver?.disconnect());
</script>

<style scoped lang="scss">
.table-wrap {
  width: 100%;
  height: 100%;
  overflow: auto; /* 根据需求适配 */
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
