<template>
    <div>
        <h1>โปรไฟล์ทั้งหมด</h1>
        <flash-message></flash-message>
        <div v-if="tasks.length > 0">
            <table id="tasks" class="ui celled compact table center aligned">
                <thead>
                    <tr>
                        <th><i class="user icon"></i>ชื่อ</th>
                        <th><i class="clipboard list icon"></i>ตำแหน่ง</th>
                        <th><i class="lock open icon"></i></th>
                        <th><i class="edit icon"></i></th>
                        <th><i class="trash icon"></i></th>
                    </tr>
                </thead>
                <tr v-for="(task, i) in tasks" :key="i">
                    <td>{{ task.task1 }}</td>
                    <td>{{ task.task2 }}</td>
                    <td width="75" class="center aligned">
                        <router-link :to="{ name: 'show', params: { id: task._id }}">แสดง</router-link>
                    </td>
                    <td width="75" class="center aligned">
                        <router-link :to="{ name: 'edit', params: { id: task._id }}">แก้ไข</router-link>
                    </td>
                    <td width="75" class="center aligned" @click.prevent="onDestroy(task._id)">
                        <a :href="`/tasks/${task._id}`">ลบ</a>
                    </td>
                </tr>
            </table>
        </div>
        <div v-else>
            ไม่มีโปรไฟล์ใดๆอยู่เลย!!
        </div>
    </div>
</template>

<script>
    import { api } from '../helpers/Helpers'
    export default {
        name: 'tasks',
        data() {
            return {
                tasks: []
            };
        },
        methods: {
            async onDestroy(id) {
                const sure = window.confirm('คุณแน่ใจหรือไม่ที่จะลบรายการนี้?');
                if (!sure) return;
                await api.deletetask(id);
                const message = "โปรไฟล์ของ '" + id + "' ได้ถูกลบเรียบร้อยแล้ว!"
                this.flash(message, 'success');
                const newtasks = this.tasks.filter(task => task._id !== id);
                this.tasks = newtasks;
            }
        },
        async mounted(){
            this.tasks = await api.gettasks();
        }
    }
</script>
