<template>
    <div>
        <h1>แสดงโปรไฟล์</h1>
        <flash-message></flash-message>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="tasks icon"></i> ชื่อ
            </div>
            <input type="text" readonly :value="task.task1" />
        </div>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="info circle icon"></i> ตำแหน่ง
            </div>
            <input type="text" readonly :value="task.task2" />
        </div>
        <router-link :to="{name: 'edit', params: { id: this.$route.params.id }}">
            <button class="ui yellow button">แก้ไขโปรไฟล์</button>
        </router-link>
    </div>
</template>

<script>
    import { api } from '../helpers/Helpers'
    export default {
        name: 'show',
        data() {
            return {
                task: ''
            }
        },
        async mounted(){
            this.task = await api.gettask(this.$route.params.id);
        }
    }
</script>