<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">คุณจำเป็นต้องกรอกข้อมูล!</p>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="user icon"></i> ชื่อ-นามสกุล
            </div>
            <input type="text" placeholder="ชื่อ-นามสกุล..." v-model="task.task1" />
        </div>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="clipboard list icon"></i> ตำแหน่ง
            </div>
            <input type="text" placeholder="ตำแหน่ง..." v-model="task.task2" />
        </div>
        <button class="positive ui button">ยืนยัน</button>
    </form>
</template>

<script>
    export default {
        name: 'task-form',
        props: {
            task: {
                type: Object,
                required: false,
                default: () => {
                    return {
                        task1 : '',
                        task2 : ''
                    }
                }
            }
        },
        data(){
            return {
                errorsPresent: false
            }
        },
        methods: {
            onSubmit: function() {
                if(this.task.task1 === '' || this.task.task2 === ''){
                    this.errorsPresent = true;
                } else{
                    this.$emit('createOrUpdate', this.task);
                }
            }
        }
    }
</script>


<style scoped>

    .error{ color:red; }
    .label{
        width: 25%;
    }

    .kanitfont{
        font-family: 'Kanit', sans-serif;
    }
</style>