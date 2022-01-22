const mongoose = require('mongoose')
const task = mongoose.model('task')

exports.list_all_tasks = (req, res) => {
    task.find({}, (err, tasks) => {
        if(err) res.send(err);
        else res.json(tasks);
    })
}

exports.create_a_task = (req, res) => {
    const newTask = new task(req.body);
    newTask.save((err, tasks) => {
        if(err) res.send(err);
        else res.json(tasks);
    })
}

exports.read_a_task = (req, res) => {
    task.findById(req.params.taskId, (err, tasks) => {
        if(err) res.send(err);
        else res.json(tasks);
    })
}

exports.update_a_task = (req, res) => {
    task.findOneAndUpdate(
        { _id: req.params.taskId },
        req.body,
        { new : true },
        (err, tasks) => {
            if(err) res.send(err);
            else res.json(tasks);
        }
    )
}

exports.delete_a_task = (req, res) => {
    task.deleteOne({ _id: req.params.taskId }, err => {
        if (err) res.send(err);
        else{
            res.json({
                message: 'task successfully deleted',
                _id: req.params.taskId
            });
        }
    });
};